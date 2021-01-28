import { Controller, Get, Render } from '@nestjs/common';
import {UsersService} from 'src/users/users.service'


@Controller('userlist')
export class UserListController {
    @Get()
    @Render('user-list')
    root() {
        return { users: 'elo byq'};
      }

  
}
