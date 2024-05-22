import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../infrastructure/database/database.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private databaseService: DatabaseService) {}

    async addTask(
        name: string,
        userId: number,
        priority: number,
    ): Promise<void> {
        const user = await this.databaseService.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException(`No user with id ${userId}`);
        }

        await this.databaseService.task.create({
            data: { name, priority, userId },
        });
    }

    async getTaskByName(name: string): Promise<Task> {
        const task = await this.databaseService.task.findFirst({
            where: { name },
        });

        return task;
    }

    async getUserTasks(userId: number): Promise<Task[]> {
        const user = await this.databaseService.user.findUnique({
            where: { id: userId },
            include: { tasks: true },
        });

        if (!user) {
            throw new NotFoundException(`No user with id ${userId}`);
        }

        return user.tasks;
    }

    async resetData(): Promise<void> {
        await this.databaseService.task.deleteMany();
        await this.databaseService.task.deleteMany();
    }
}
