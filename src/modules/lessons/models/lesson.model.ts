import { model, Schema, Types } from 'mongoose'

const lessonSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  previewUrl: { type: String },
  videoUrl: { type: String },
  course: { type: Types.ObjectId, ref: 'Course', required: true },
})

export const LessonModel = model('Lesson', lessonSchema)
