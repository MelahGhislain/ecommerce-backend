import mongoose from 'mongoose';
import { ModelEnum } from '../utils/constants';

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: true,
    },
  },
  { timestamps: true },
);

const TagModel = mongoose.model(ModelEnum.Tag, tagSchema);

export default TagModel;
