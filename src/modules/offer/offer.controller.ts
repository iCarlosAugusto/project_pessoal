import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OfferService } from './offer.service';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { CreateOfferDto } from './dto/create-offer.dto';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerService.create(createOfferDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.offerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerService.update(id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerService.remove(id);
  }
}
