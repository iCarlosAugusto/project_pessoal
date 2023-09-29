import { Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private findUser = (username: string, password: string) => {
    if (username === 'adm' && password === 'adm') {
      return {
        email: 'admin@admin.com',
        password: 'admin',
      };
    }
  };

  async validateUser(username: string, password: string) {
    const user = this.findUser(username, password);

    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string) {
    const payload = {
      username: username,
      sub: {
        username: username,
      },
    };
    return {
      username,
      aceessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: '7d',
      }),
    };
  }

  @UseGuards(RefreshJwtGuard)
  async refreshToken(username: string) {
    const payload = {
      username: username,
      sub: {
        username: username,
      },
    };
    return {
      aceessToken: this.jwtService.sign(payload),
    };
  }
}
