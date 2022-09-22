import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яЁёіІЇїґҐєЄ]{1,30}$/).required().messages({
        'string.pattern.base' : 'Only letters min 1 and max 30'
    }),
    surname: Joi.string().regex(/^[a-zA-ZА-яЁёіІЇїґҐєЄ]{1,30}$/).required().messages({
        'string.pattern.base' : 'Only letters min 1 and max 30'
    }),
    email: Joi.string().required()
});

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[A-z]{1,25}/).required().messages({
       'string.pattern.base' : 'Only letters min 1 and max 25'
    }),
    email: Joi.string().required(),
    body: Joi.string().regex(/^[A-z]{1,35}/).required().messages({
        'string.pattern.base' : 'Only letters min 1 and max 35'
    })
});

export {userValidator, commentValidator}