import { DataSource } from "typeorm";
import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import Users from "../entities/users";
import Appointments from "../entities/Appointments";
import Credentials from "../entities/credentials";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  dropSchema: false,
  logging: false,
  entities: [Users, Appointments, Credentials],
  subscribers: [],
  migrations: [],
});
