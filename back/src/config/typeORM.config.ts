import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export function typeormConfig(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: `mysql`,
    host: configService.get<string>(`HOST`),
    username: configService.get<string>(`USERNAME`),
    password: configService.get<string>(`PASSWORD`),
    database: configService.get<string>(`DATABASE`),
    synchronize: configService.get<boolean>(`SYNCHRONIZE`),
    autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
    logging: configService.get<boolean>('DB_LOGGING'),
  };
}
