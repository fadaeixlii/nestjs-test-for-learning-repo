import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.create.dto';
import { SearchDTO } from 'types/search.dto';

@Controller('products')
export class ProductsController {
  @Post()
  createProduct(@Body() createProductDTO: CreateProductDTO) {
    return createProductDTO;
  }

  @Get()
  getProduct(@Query() searchDTO: SearchDTO) {
    return searchDTO;
  }
}
