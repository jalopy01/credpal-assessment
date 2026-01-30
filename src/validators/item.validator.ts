import Joi from 'joi';

export const itemSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});

export const updateItemSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
}).min(1);