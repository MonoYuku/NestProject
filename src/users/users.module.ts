import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {users} from './users.entity';



@Module({
  imports: [TypeOrmModule.forFeature([users])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}