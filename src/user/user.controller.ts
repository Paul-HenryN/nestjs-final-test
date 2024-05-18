import { Controller, NotImplementedException, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(email: string) {
        throw new NotImplementedException();
    }
}
