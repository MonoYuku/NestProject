import { allowedNodeEnvironmentFlags } from 'process';
import { Entity, Column, PrimaryGeneratedColumn, Binary } from 'typeorm';

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
  DateOfBirth: string;
  
  @Column()
  Login: string;

  @Column()
  Pass: string;

  @Column({default: USER_ROLE.User})
  idRoli: number;

  @Column({default: false})
  isDeleted: Boolean;

}