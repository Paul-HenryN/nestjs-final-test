import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from '../infrastructure/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [TaskService],
    exports: [TaskService],
    controllers: [TaskController],
})
export class TaskModule {}
