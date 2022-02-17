import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
interface loginBody {
  username: string;
  password: string;
}
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() body: loginBody) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @UseGuards(JwtGuard)
  @Get('test-auth')
  test() {
    return {
      name: 'yan santana',
    };
  }
}
