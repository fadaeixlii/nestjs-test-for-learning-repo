import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.create.dto';
import { SearchDTO } from 'types/search.dto';
import {
  ChangeStatusDTO,
  ChangeStatusParamDTO,
} from './dto/product.changeStatue.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Products')
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

  @Put('change-status/:productId')
  changeStatus(
    @Body() changeStatusDTO: ChangeStatusDTO,
    @Param() params: ChangeStatusParamDTO,
  ) {
    return { changeStatusDTO, params };
  }
}
