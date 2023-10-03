import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
