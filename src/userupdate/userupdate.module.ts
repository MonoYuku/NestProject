import { Module } from '@nestjs/common';
import { UserupdateController } from './userupdate.controller';
import { UserupdateService } from './userupdate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {users} from 'src/users/users.entity'
import { UserListModule } from 'src/user-list/user-list.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([users]), UserListModule, UsersModule],
    providers: [UserupdateService],
    controllers: [UserupdateController]})
export class UserupdateModule {  }
