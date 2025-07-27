import { PickType } from '@nestjs/mapped-types';
import { AuthRegisterDTO } from 'src/auth/dto/auth.register.dto';

export class UsersGetUsersByEmail extends PickType(AuthRegisterDTO, [
  'email',
]) {}
