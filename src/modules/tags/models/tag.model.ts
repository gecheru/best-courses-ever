import { model, Schema } from 'mongoose'

const tagSchema = new Schema({
  name: { type: String, required: true, unique: true },
})

export const TagModel = model('Tag', tagSchema)
