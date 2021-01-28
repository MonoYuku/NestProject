import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {users} from 'src/users/users.entity'
import { UserListController } from './user-list.controller';
import { UserListService } from './user-list.service';

@Module({
imports: [TypeOrmModule.forFeature([users])],
  providers: [UserListService],
  controllers: [UserListController],
})
export class UserListModule {}
