import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { RegisterDto } from './auth/dto/register-dto';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {}
  async onModuleInit() {
    const email = this.configService.get<string>('ADMIN_EMAIL');
    const password = this.configService.get<string>('ADMIN_PASSWORD');
    const nickname = this.configService.get<string>('ADMIN_NICKNAME');

    if (!email || !password || !nickname) {
      throw new Error(
        '환경 변수에 ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NICKNAME이 설정되지 않았습니다.',
      );
    }

    const registerDto: RegisterDto = {
      email: email,
      password: password,
      nickname: nickname,
    };

    await this.authService.addFirstAdmin(registerDto);
  }
}
