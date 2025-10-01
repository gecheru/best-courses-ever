import { model, Schema, Types } from 'mongoose'

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  previewImage: { type: String },
  author: { type: Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag', required: true }],
})

export const CourseModel = model('Course', courseSchema)
