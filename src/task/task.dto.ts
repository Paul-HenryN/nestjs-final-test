import { IsNumberString } from 'class-validator';

export class CreateTaskDto {
    name: string;
    userId: string;

    @IsNumberString()
    priority: string;
}
