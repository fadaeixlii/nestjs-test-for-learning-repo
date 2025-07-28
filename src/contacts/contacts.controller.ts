import { Body, Controller, Post } from '@nestjs/common';
import { ContactDTO } from './dto/contact.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  @Post()
  createContact(@Body() contactDTO: ContactDTO) {
    return contactDTO;
  }
}
