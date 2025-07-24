import { Body, Controller, Post } from '@nestjs/common';
import { ContactDTO } from './dto/contact.dto';

@Controller('contacts')
export class ContactsController {
  @Post()
  createContact(@Body() contactDTO: ContactDTO) {
    return contactDTO;
  }
}
