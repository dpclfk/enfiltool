import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeormConfig } from './config/typeORM.config';
import { FactoryType } from './entities/factory-type';
import { IngredientsType } from './entities/ingredients-type';
import { ProductionFactory } from './entities/production-factory';
import { ProductionIngredients } from './entities/production-ingredients';
import { ProductionType } from './entities/production-type';
import { Region } from './entities/region';
import { RegionalProduct } from './entities/regional-product';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${__dirname}/../.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeormConfig,
    }),
    TypeOrmModule.forFeature([
      FactoryType,
      IngredientsType,
      ProductionFactory,
      ProductionIngredients,
      ProductionType,
      Region,
      RegionalProduct,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
