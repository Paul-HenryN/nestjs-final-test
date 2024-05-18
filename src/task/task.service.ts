import { Injectable, NotImplementedException } from '@nestjs/common';
import { DatabaseService } from '../infrastructure/database/database.service';

@Injectable()
export class TaskService {
    constructor(private databaseService: DatabaseService) {}

    addTask(name: string, userId: string, priority: number): Promise<void> {
        throw new NotImplementedException();
    }

    getTaskByName(name: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    getUserTasks(userId: string): Promise<unknown[]> {
        throw new NotImplementedException();
    }

    resetData(): Promise<void> {
        throw new NotImplementedException();
    }
}
