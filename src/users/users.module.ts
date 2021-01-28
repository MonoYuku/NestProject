import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {users} from './users.entity';
import { UserListModule } from 'src/user-list/user-list.module';



@Module({
  imports: [TypeOrmModule.forFeature([users]),UserListModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
