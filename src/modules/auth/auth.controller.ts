import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() { username, password }: LoginDto) {
    return await this.authService.login(username, password);
  }

  @Post('/refresh')
  async refreshToken() {
    return this.authService.refreshToken('admin');
  }
}
