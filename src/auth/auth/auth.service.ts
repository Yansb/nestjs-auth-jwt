import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
  {
    id: 1,
    username: 'admin',
    password: '$2b$10$cZHRwVDIfpg4t8sS.in2rO1Tn7sliGSMqp/Dgi5EceVOywZRI02VS',
  },
  {
    id: 2,
    username: 'user1@user.com',
    password: '$2b$10$cZHRwVDIfpg4t8sS.in2rO1Tn7sliGSMqp/Dgi5EceVOywZRI02VS',
  },
  {
    id: 3,
    username: 'user2',
    password: '$2b$10$cZHRwVDIfpg4t8sS.in2rO1Tn7sliGSMqp/Dgi5EceVOywZRI02VS',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validateCredentials(username, password);
    const payload = {
      sub: user.id,
      username: user.username,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string) {
    const user = users.find(
      (u) =>
        u.username === username && bcrypt.compareSync(password, u.password),
    );
    if (!user) {
    }
    return user;
  }
}
