import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from 'src/modules/offer/dto/create-offer.dto';
import { UpdateOfferDto } from 'src/modules/offer/dto/update-offer.dto';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class OfferRepository {
  constructor(private prisma: PrismaService) {}

  async create(createOfferDto: CreateOfferDto) {
    const offer = await this.prisma.offer.create({
      data: {
        ...createOfferDto,
      },
    });
    return offer;
  }

  async findAll() {
    const offers = await this.prisma.offer.findMany();
    return offers;
  }

  async findOne(id: string) {
    const offer = await this.prisma.offer.findUnique({
      where: {
        id,
      },
    });
    return offer;
  }

  async update(id: string, updateOfferDto: UpdateOfferDto) {
    const offer = await this.prisma.offer.update({
      where: {
        id,
      },
      data: {
        ...updateOfferDto,
      },
    });
    return offer;
  }

  async remove(id: string) {
    const deletedOffer = await this.prisma.offer.delete({
      where: {
        id,
      },
    });
    return deletedOffer;
  }
}
