import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { AuthLoginDTO } from '../dto/auth.login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  isAuth() {
    return false;
  }

  login(authLoginDTO: AuthLoginDTO) {
    const user = this.usersService.getUserByEmail(authLoginDTO.email);

    if (user.email) return { token: 'token' };
  }
}
