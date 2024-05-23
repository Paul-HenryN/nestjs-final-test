import { User } from '@prisma/client';
import { DatabaseService } from '../infrastructure/database/database.service';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private databaseService: DatabaseService) {}

    async addUser(email: string): Promise<void> {
        const existingUser = await this.databaseService.client.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new ConflictException('This email is already in use');
        }

        await this.databaseService.client.user.create({ data: { email } });
    }

    async getUser(email: string): Promise<User> {
        const user = await this.databaseService.client.user.findUnique({
            where: { email },
        });
        return user;
    }

    async resetData(): Promise<void> {
        await this.databaseService.client.user.deleteMany();
    }
}
