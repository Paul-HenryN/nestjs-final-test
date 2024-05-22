import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';
import { ParseStrictlyPositiveIntPipe } from '../utils/parse-strictly-positive-int-pipe';

@Controller()
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get('/user/:userId')
    async getUserTasks(
        @Param('userId', ParseStrictlyPositiveIntPipe) userId: number,
    ) {
        const tasks = await this.taskService.getUserTasks(userId);
        return tasks;
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async addTask(
        @Body() createTaskDto: CreateTaskDto,
        @Body('priority', ParseStrictlyPositiveIntPipe) priority: number,
    ) {
        const { name, userId } = createTaskDto;

        await this.taskService.addTask(name, userId, priority);
    }
}
