import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = parseInt(configService.get<string>('PORT') || '3000');

  // 리프레시토큰을 쿠키에 저장하기위해 사용
  app.use(cookieParser(process.env.COOKIE_SECRET));

  app.setGlobalPrefix('api');

  // swagger 관련
  const options = new DocumentBuilder()
    .setTitle('endfield tool api')
    .setDescription('엔드필드 툴 상세 api 입니다.')
    .setVersion('1.0')
    .addCookieAuth('refresh_token')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apiDocs', app, document);

  app.enableCors({
    origin: 'http://localhost:3807',
    credentials: true,
  });

  await app.listen(port);
}

bootstrap();
