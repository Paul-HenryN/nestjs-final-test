import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigurationModule } from '../configuration/configuration.module';

@Module({
    providers: [DatabaseService],
    exports: [DatabaseService],
    imports: [ConfigurationModule],
})
export class DatabaseModule {}
