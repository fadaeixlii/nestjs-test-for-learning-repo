import { Controller, Post, Body } from '@nestjs/common';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthLoginDTO } from './dto/auth.login.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() authRegisterDTO: AuthRegisterDTO) {
    return authRegisterDTO;
  }
  @Post('login')
  login(@Body() authLoginDTO: AuthLoginDTO) {
    return authLoginDTO;
  }
}
