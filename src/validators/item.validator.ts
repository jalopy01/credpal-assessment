import Joi from 'joi';

export const itemSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});
