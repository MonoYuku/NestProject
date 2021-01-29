import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import {users} from './users/users.entity';
import { UserListController } from './user-list/user-list.controller';
import { UserListService } from './user-list/user-list.service';
import { UserListModule } from './user-list/user-list.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserupdateController } from './userupdate/userupdate.controller';
import { UserupdateService } from './userupdate/userupdate.service';
import { UserupdateModule } from './userupdate/userupdate.module';



@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'project',
      entities: [users],
      synchronize: true,
    }),UsersModule, UserListModule, UserupdateModule
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
