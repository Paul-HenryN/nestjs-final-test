import { DatabaseService } from '../infrastructure/database/database.service';
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private databaseService: DatabaseService) {}

    async addUser(email: string): Promise<void> {
        this.databaseService.addUser(email);
    }

    async getUser(email: string): Promise<User> {
        const user = await this.databaseService.getUser(email);
        return user;
    }

    async resetData(): Promise<void> {
        await this.databaseService.resetUsers();
    }
}
