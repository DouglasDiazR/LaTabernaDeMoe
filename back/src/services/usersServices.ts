import ICreateUsersDto from "../Dtos/ICreateUsersDto";
import { createCredential } from "./credentialsServices";
import Users from "../entities/users";
import { usersRepository } from "../repositories";
import Credentials from "../entities/credentials";

export const getAllUsersServices = async (): Promise<Users[]> => {
  const allUsers = await usersRepository.find({
    relations: { appointments: true },
  });
  return allUsers;
};

export const getUserByIdServices = async (id: number): Promise<Users> => {
  const user: Users | null = await usersRepository.findOne({
    where: { id: id },
    relations: { appointments: true },
  });
  if (!user) throw new Error("User not Found");
  return user;
};

export const createUsersService = async (
  createUsersDto: ICreateUsersDto
): Promise<Users> => {
  const newUser: Users = usersRepository.create(createUsersDto);
  await usersRepository.save(newUser);

  const newCredential: Credentials = await createCredential({
    username: createUsersDto.username,
    password: createUsersDto.password,
  });

  newUser.credentials = newCredential;
  const savedNewUser = await usersRepository.save(newUser);

  return savedNewUser;
};

export const findUserByCredentialId = async (
  credentialId: number
): Promise<Users> => {
  const user: Users | null = await usersRepository.findOne({
    where: { credentials: { id: credentialId } },
  });
  if (!user) throw new Error("User not Found");
  return user;
};
