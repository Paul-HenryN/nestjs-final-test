import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async addUser(email: string): Promise<void> {
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
