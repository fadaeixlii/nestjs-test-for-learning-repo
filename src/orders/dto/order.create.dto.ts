import { Type } from 'class-transformer';
import { IsDefined, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ProductDTO } from 'src/products/dto/product.dto';

export class CreateOrderDTO {
  @IsString()
  @IsUUID()
  userId!: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => ProductDTO)
  product!: ProductDTO;
}
