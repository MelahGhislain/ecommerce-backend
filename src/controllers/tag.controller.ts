import { Request, Response } from 'express';
import { createNewTag, deleteTag, editTag, getTag, getTags } from '../services';
import tryCatch from '../utils/tryCatch';

export const createTag = tryCatch(async (req: Request, res: Response) => {
  const tag = await createNewTag(req.body);
  if (tag) return res.status(201).json({ data: tag });
});

export const fetchTags = tryCatch(async (req: Request, res: Response) => {
  const tags = await getTags();
  if (tags) return res.status(200).json({ data: tags });
});

export const fetchTag = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const tag = await getTag(id);
  if (tag) return res.status(200).json({ data: tag });
});

export const updateTag = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const tag = await editTag(id, req.body);
  if (tag) return res.status(200).json({ data: tag });
});

export const removeTag = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;
  const tag = await deleteTag(id);
  if (tag) return res.status(200).json({ data: tag });
});
