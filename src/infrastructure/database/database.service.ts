import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

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
}
