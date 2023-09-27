import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { OfferRepository } from 'src/repositories/offer.repository';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  controllers: [OfferController],
  providers: [OfferService, OfferRepository, PrismaService],
})
export class OfferModule {}
