import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaClient, Task, User } from '@prisma/client';

@Injectable()
export class DatabaseService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async addUser(email: string): Promise<void> {
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('This email is already in use');
        }

        await this.prisma.user.create({ data: { email } });
    }

    async getUser(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user;
    }

    async resetUsers(): Promise<void> {
        await this.prisma.user.deleteMany();
    }

    async resetTasks(): Promise<void> {
        await this.prisma.task.deleteMany();
    }

    async addTask(
        name: string,
        userId: number,
        priority: number,
    ): Promise<void> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException(`No user with id ${userId}`);
        } else {
            console.log(`User with id ${userId} found !!!!!!!!`);
        }

        await this.prisma.task.create({
            data: { name, priority, userId },
        });
    }

    async getTaskByName(name: string): Promise<Task> {
        const task = await this.prisma.task.findFirst({
            where: { name },
        });

        return task;
    }

    async getUserTasks(userId: number): Promise<Task[]> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { tasks: true },
        });

        if (!user) {
            throw new NotFoundException(`No user with id ${userId}`);
        }

        return user.tasks;
    }
}
