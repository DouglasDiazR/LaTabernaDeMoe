import ICreateCredentialDto from "../Dtos/ICreateCrededentialsDto";
import IValidateCredentialDto from "../Dtos/IValidateCredentialsDto";
import Credentials from "../entities/credentials";
import { credentialsRepository } from "../repositories";

export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<Credentials> => {
  // VERIFICAR QUE NO EXISTA EL MAIL ////////////////////////////
  const newCredential: Credentials =
    credentialsRepository.create(createCredentialDto);

  const savedCredentials = await credentialsRepository.save(newCredential);
  return savedCredentials;
};

export const validateCredential = async (
  validateCredentialDto: IValidateCredentialDto
): Promise<Credentials> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credentials | null =
    await credentialsRepository.findOneBy({
      username: username,
    });
  if (!foundCredential) throw Error("Incorrect Credential");
  if (password !== foundCredential?.password)
    throw Error("Incorrect Credential");
  return foundCredential;
};
