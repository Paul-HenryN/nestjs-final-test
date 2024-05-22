import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { isStrictlyPositiveInteger } from '../utils/validators';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get('/user/:userId')
    async getUserTasks(@Param('userId', ParseIntPipe) userId: number) {
        if (!isStrictlyPositiveInteger(userId)) {
            throw new BadRequestException('Invalid user id.');
        }

        const tasks = await this.taskService.getUserTasks(userId);
        return tasks;
    }

    @Post()
    async addTask(
        @Body('name') name: string,
        @Body('userId', ParseIntPipe) userId: number,
        @Body('priority', ParseIntPipe) priority: number,
    ) {
        if (!isStrictlyPositiveInteger(userId)) {
            throw new BadRequestException('Invalid user id.');
        }

        if (!isStrictlyPositiveInteger(priority)) {
            throw new BadRequestException(
                'Task priority must be a strictly positive integer.',
            );
        }

        await this.taskService.addTask(name, userId, priority);
    }
}
