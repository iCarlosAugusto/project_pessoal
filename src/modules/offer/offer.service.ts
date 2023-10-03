import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { OfferRepository } from 'src/repositories/offer.repository';

@Injectable()
export class OfferService {
  constructor(private offerRepository: OfferRepository) {}

  create(createOfferDto: CreateOfferDto) {
    return this.offerRepository.create(createOfferDto);
  }

  findAll(page: number) {
    return this.offerRepository.findAll(page);
  }

  findOne(id: string) {
    return this.offerRepository.findOne(id);
  }

  update(id: string, updateOfferDto: UpdateOfferDto) {
    return this.offerRepository.update(id, updateOfferDto);
  }

  remove(id: string) {
    return this.offerRepository.remove(id);
  }
}
