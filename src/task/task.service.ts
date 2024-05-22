import { Injectable, NotImplementedException } from '@nestjs/common';
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
        await this.databaseService.addTask(name, userId, priority);
    }

    async getTaskByName(name: string): Promise<Task> {
        const task = await this.databaseService.getTaskByName(name);
        return task;
    }

    async getUserTasks(userId: number): Promise<unknown[]> {
        const tasks = await this.databaseService.getUserTasks(userId);
        return tasks;
    }

    async resetData(): Promise<void> {
        await this.databaseService.resetTasks();
    }
}
