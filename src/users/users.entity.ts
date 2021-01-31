import { allowedNodeEnvironmentFlags } from 'process';
import { Entity, Column, PrimaryGeneratedColumn, Binary, InsertEvent, BeforeInsert, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum USER_ROLE  {
    Admin,
    Moderator,
    User
}

@Entity()
@Unique(["Pass"])
export class users {
    
    @PrimaryGeneratedColumn()
    id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;
  
  @Column()
  DateOfBirth: Date;
  
  @Column(Unique)
  Login: string;

  @Column()
  Pass: string;
  
  

  
  

  @Column({default: USER_ROLE.User})
  idRoli: number;

  @Column({default: false})
  isDeleted: Boolean;

}