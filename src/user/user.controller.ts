import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async addUser(@Body() createUserDto: CreateUserDto) {
        await this.userService.addUser(createUserDto.email);
    }
}
