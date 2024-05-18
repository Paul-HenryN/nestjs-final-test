import { DatabaseService } from '../infrastructure/database/database.service';
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private databaseService: DatabaseService) {}

    async addUser(email: string): Promise<void> {
        this.databaseService.addUser(email);
    }

    getUser(email: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    async resetData(): Promise<void> {
        await this.databaseService.resetUsers();
    }
}
