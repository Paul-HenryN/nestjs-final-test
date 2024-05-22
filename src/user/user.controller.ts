import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { isValidEmail } from '../utils/validators';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async addUser(@Body() createUserDto: CreateUserDto) {
        if (!isValidEmail(createUserDto.email)) {
            throw new BadRequestException('Invalid email.');
        }

        await this.userService.addUser(createUserDto.email);
    }
}
