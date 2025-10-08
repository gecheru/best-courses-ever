import { UserModel } from '../models/user.model.ts'

export class UserRepository {
  createUser = async (body: unknown) => {
    return await UserModel.create(body)
  }

  getUsers = async () => {
    return await UserModel.find({}).select('-password').exec()
  }

  getUserById = async (userId: string) => {
    return await UserModel.findById(userId).select('-password').exec()
  }

  deleteUserById = async (userId: string) => {
    return await UserModel.findByIdAndDelete(userId)
  }
}
