import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  getUserByEmail(email: string) {
    const result = this.authService.isAuth();
    if (!result) throw new Error('UnAuth');
    const mockUsers = [
      {
        email: 'mohammad4252@gmail.com',
        name: 'mohammad',
      },
      {
        email: 'johndoe@gmail.com',
        name: 'johndoe',
      },
    ];
    const user = mockUsers.find((u) => u.email === email);
    if (!user) throw new Error('UserNotExist');
    return user;
  }
}
