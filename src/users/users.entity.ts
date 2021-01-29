import { allowedNodeEnvironmentFlags } from 'process';
import { Entity, Column, PrimaryGeneratedColumn, Binary, InsertEvent, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum USER_ROLE  {
    Admin,
    Moderator,
    User
}

@Entity()
export class users {
    
    @PrimaryGeneratedColumn()
    id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;
  
  @Column()
  DateOfBirth: Date;
  
  @Column()
  Login: string;

  @Column()
  Pass: string;

  
  

  @Column({default: USER_ROLE.User})
  idRoli: number;

  @Column({default: false})
  isDeleted: Boolean;

}