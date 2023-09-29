import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class RefreshJwtGuard extends AuthGuard('jwt-refresh') {}

export { RefreshJwtGuard };
