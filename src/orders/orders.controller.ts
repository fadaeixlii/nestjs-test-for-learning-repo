import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.create.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  @Post()
  createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return createOrderDTO;
  }
}
