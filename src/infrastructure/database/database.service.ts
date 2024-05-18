import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    addUser(email: string): Promise<void> {
        throw new NotImplementedException();
    }
}
