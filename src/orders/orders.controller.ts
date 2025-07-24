import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.create.dto';

@Controller('orders')
export class OrdersController {
  @Post()
  createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return createOrderDTO;
  }
}
