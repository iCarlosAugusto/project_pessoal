import { Module } from '@nestjs/common';
import { OfferModule } from './modules/offer/offer.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [OfferModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
