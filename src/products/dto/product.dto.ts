import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  productId!: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantity!: number;

  @IsBoolean()
  @IsNotEmpty()
  status?: boolean;
}
