import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigurationService } from '../configuration/configuration.service';
import {
    DATABASE_NAME,
    DATABASE_PORT,
} from '../configuration/model/database-configuration';

@Injectable()
export class DatabaseService {
    private _client: PrismaClient;

    get client(): PrismaClient {
        return this._client;
    }

    constructor(private configurationService: ConfigurationService) {
        const databaseName = configurationService.databaseConfig[DATABASE_NAME];
        const databasePort = configurationService.databaseConfig[DATABASE_PORT];

        this._client = new PrismaClient({
            datasourceUrl: `postgresql://postgres:postgres@localhost:${databasePort}/${databaseName}`,
        });
    }
}
