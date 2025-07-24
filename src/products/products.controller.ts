import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.create.dto';

@Controller('products')
export class ProductsController {
  @Post()
  createProduct(@Body() createProductDTO: CreateProductDTO) {
    return createProductDTO;
  }
}
