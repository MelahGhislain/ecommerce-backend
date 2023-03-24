import ValidationError from '../errors/ValidationError';
import { validateTag } from '../utils/validators';
import dotenv from 'dotenv';
import TagModel from '../models/tag.model';
import { ITag } from '../utils/interfaces';
dotenv.config();

/**
 * Create a new tag
 * @param (tag: ITag)
 * @return tag
 */
export async function createNewTag(tag: ITag) {
  const error = validateTag(tag);
  if (error) throw new ValidationError(error.name, error.message);

  const newtag = await TagModel.create(tag);
  return newtag;
}

/**
 * fetch all tags
 * @param ()
 * @return [tag]
 */
export async function getTags() {
  const tags = await TagModel.find({});
  return tags;
}

/**
 * fetch tag by id
 * @param (id: string) - tag ID
 * @return tag
 */
export async function getTag(id: string) {
  if (!id) throw new ValidationError('id', 'tag id is required');

  const tag = await TagModel.findById(id);
  return tag;
}

/**
 * Update tag
 * @param (id: string, tag: ITag)
 * @return tag
 */
export async function editTag(id: string, tag: ITag) {
  if (!id) throw new ValidationError('id', 'tag id is required');

  const newTag = await TagModel.findByIdAndUpdate(
    id,
    { $set: tag },
    { new: true },
  );
  return newTag;
}

/**
 * delete tag by id
 * @param (id: string)
 * @return tag
 */
export async function deleteTag(id: string) {
  if (!id) throw new ValidationError('id', 'tag id is required');
  const tag = await TagModel.findByIdAndDelete(id);
  return tag;
}
