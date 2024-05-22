import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    userId: number;

    priority: number;
}
