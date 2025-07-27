import { Controller, Post, Body } from '@nestjs/common';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthLoginDTO } from './dto/auth.login.dto';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() authRegisterDTO: AuthRegisterDTO) {
    return authRegisterDTO;
  }
  @Post('login')
  login(@Body() authLoginDTO: AuthLoginDTO) {
    return authLoginDTO;
  }
}
