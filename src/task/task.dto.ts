import { IsNumberString } from 'class-validator';

export class CreateTaskDto {
    name: string;
    userId: number;

    @IsNumberString()
    priority: string;
}
