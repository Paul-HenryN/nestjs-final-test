import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(email: string) {
        this.userService.addUser(email);
    }
}
