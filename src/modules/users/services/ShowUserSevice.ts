import AppError from '@shared/errors/AppErros';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UserRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
}

class ShowUserSevice {
  public async execute({ id }: IRequest): promise<User | undefined> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default ShowUserSevice;
