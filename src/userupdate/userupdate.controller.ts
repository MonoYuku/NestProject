import { Controller, Get, Render, Post, Redirect, Body, Req} from '@nestjs/common';
import {UserupdateService} from './userupdate.service'
import {users} from 'src/users/users.entity'

@Controller('userupdate')
export class UserupdateController {
    constructor(private readonly userupdateService: UserupdateService ){}
    @Get()
    @Render('updateview')
    async root() {
        return { };
  }
  
  @Post() 
  @Redirect('/userupdate')
  create(@Body() body){
    
    this.userupdateService.createuser(body);
  

    }
}
