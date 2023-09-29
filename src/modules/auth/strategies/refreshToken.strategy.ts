import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

class RefreshJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
      ignoreExpiration: false,
      secretOrKey: 'secret-jwt',
    });
  }

  async validate(payload: any) {
    return {
      user: payload.sub,
      username: payload.username,
    };
  }
}

export { RefreshJwtStrategy };
