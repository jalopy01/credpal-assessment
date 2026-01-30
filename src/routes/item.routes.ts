import { Router } from 'express';
import { createItem, getItems, getItem, updateItem, deleteItem } from '../controllers/item.controller';
import { auth } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { itemSchema, updateItemSchema } from '../validators/item.validator';

const router = Router();

router.post('/', auth, validate(itemSchema), createItem);
router.get('/', auth, getItems);
router.get('/:id', auth, getItem);
router.put('/:id', auth, validate(updateItemSchema), updateItem);
router.delete('/:id', auth, deleteItem);

export default router;
