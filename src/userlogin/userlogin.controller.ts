import { Controller, Get, Render} from '@nestjs/common';


@Controller('login')
export class UserloginController {
    @Get()
    @Render('userlogin')
   
    async root() {
          
          return { };
      }
}
