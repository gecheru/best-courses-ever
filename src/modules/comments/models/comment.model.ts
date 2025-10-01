import { model, Schema, Types } from 'mongoose'
import { COMMENT_PARENT_TYPE } from './constants/commentParentType'

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Types.ObjectId, ref: 'User', required: true },
  parentId: { type: Types.ObjectId, required: true },
  parentType: { type: String, enum: Object.values(COMMENT_PARENT_TYPE), required: true },
  createdAt: { type: Date, default: Date.now },
})

export const CommentModel = model('Comment', commentSchema)
