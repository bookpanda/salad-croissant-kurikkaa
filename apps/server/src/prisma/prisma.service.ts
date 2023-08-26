import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get<string>(
            process.env.NODE_ENV === 'production'
              ? 'PROD_DATABASE_URL'
              : 'DATABASE_URL',
          ),
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
