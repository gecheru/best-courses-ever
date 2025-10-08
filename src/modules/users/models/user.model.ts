import { model, Schema } from 'mongoose'
import { USER_ROLE } from './constants/UserRole.ts'

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(USER_ROLE), required: true },
})

export const UserModel = model('User', userSchema)
