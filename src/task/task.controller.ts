import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { CreateTaskDto } from './task.dto';
import { TaskService } from './task.service';
import { isInteger, isNumericString } from '../utils/validators';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get('/user/:userId')
    async getUserTasks(@Param('userId') userId: number) {
        const tasks = await this.taskService.getUserTasks(userId);
        return tasks;
    }

    @Post()
    async addTask(@Body() createTaskDto: CreateTaskDto) {
        if (!isNumericString(createTaskDto.priority)) {
            throw new BadRequestException('Task priority must be a number.');
        }

        const priority = Number(createTaskDto.priority);

        if (!isInteger(priority) || priority <= 0) {
            throw new BadRequestException(
                'Task priority must be a strictly positive integer.',
            );
        }

        await this.taskService.addTask(
            createTaskDto.name,
            createTaskDto.userId,
            priority,
        );
    }
}
