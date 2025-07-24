import { IsNumber, IsString, IsUUID, Min, MinLength } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsUUID()
  productId!: string;

  @IsString()
  @MinLength(3)
  name!: string;

  @IsNumber()
  @Min(1)
  quantity!: number;
}
