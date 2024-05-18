import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { isValidEmail } from '../utils/validators';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        if (!isValidEmail(createUserDto.email)) {
            throw new BadRequestException('Invalid email');
        }

        this.userService.addUser(createUserDto.email);
    }
}
