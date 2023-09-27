import { Module } from '@nestjs/common';
import { OfferModule } from './modules/offer/offer.module';

@Module({
  imports: [OfferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
