import { PickType } from '@nestjs/mapped-types';
import { AuthRegisterDTO } from './auth.register.dto';

export class AuthLoginDTO extends PickType(AuthRegisterDTO, [
  'email',
  'password',
]) {}
