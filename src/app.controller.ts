import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()

  @Render('index')
  root() {
    return { message: 'elo byq'};
  }
}


