import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Credentials from "./credentials";
import Appointments from "./Appointments";

@Entity({ name: "USERS" })
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  birthdate!: string;

  @Column({ unique: true })
  nDni!: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials!: Credentials;

  @OneToMany(() => Appointments, (appointments) => appointments.users)
  appointments!: Appointments[];
}

export default Users;
