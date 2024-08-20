import { Request, Response } from "express";

import {
  getAllUsersServices,
  getUserByIdServices,
  createUsersService,
  findUserByCredentialId,
} from "../../services/usersServices";
import ICreateUsersDto from "../../Dtos/ICreateUsersDto";
import ICreateCredentialDto from "../../Dtos/ICreateCrededentialsDto";
import ICredential from "../../interfaces/ICredential";
import { validateCredential } from "../../services/credentialsServices";
import Users from "../../entities/users";
import Credentials from "../../entities/credentials";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: Users[] = await getAllUsersServices();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user: Users = await getUserByIdServices(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const registerUsers = async (
  req: Request<{}, {}, ICreateUsersDto>,
  res: Response
) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: Users = await createUsersService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json({ message: "user created successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUsers = async (
  req: Request<{}, {}, ICreateCredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const credential: Credentials = await validateCredential({
      username,
      password,
    });
    const user: Users = await findUserByCredentialId(credential.id);
    res.status(200).json({ loggin: true, user });
  } catch (error: any) {
    console.error("Login error:", error.message);
    res.status(404).json({ message: error.message });
  }
};
