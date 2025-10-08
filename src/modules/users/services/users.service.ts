import { UserRepository } from '../repositories/user.repository.ts'

export class UsersService {
  private repository: UserRepository

  constructor(repository = new UserRepository()) {
    this.repository = repository
  }

  getUsers = async () => {
    return await this.repository.getUsers()
  }
}
