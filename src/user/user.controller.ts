import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(@Body() { email }: Pick<User, 'email'>) {
        this.userService.addUser(email);
    }
}
