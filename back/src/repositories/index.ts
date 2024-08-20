import { AppDataSource } from "../config/data-source";
import Appointments from "../entities/Appointments";
import Credentials from "../entities/credentials";
import Users from "../entities/users";

export const usersRepository = AppDataSource.getRepository(Users);
export const appointmentsRepositoty = AppDataSource.getRepository(Appointments);
export const credentialsRepository = AppDataSource.getRepository(Credentials);
