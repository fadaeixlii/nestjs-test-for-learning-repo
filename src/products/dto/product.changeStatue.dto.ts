import { PickType } from '@nestjs/mapped-types';
import { ProductDTO } from './product.dto';

export class ChangeStatusDTO extends PickType(ProductDTO, ['status']) {}
export class ChangeStatusParamDTO extends PickType(ProductDTO, ['productId']) {}
