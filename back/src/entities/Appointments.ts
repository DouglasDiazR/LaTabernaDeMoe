import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./users";

@Entity({ name: "APPOINTMENTS" })
export class Appointments {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: Date })
  date!: Date;

  @Column()
  time!: string;

  @Column()
  userId!: number;

  @Column({ default: "active" })
  status!: string;

  @Column()
  description!: string;

  @ManyToOne(() => Users, (users) => users.appointments)
  users!: Users;
}

export default Appointments;
