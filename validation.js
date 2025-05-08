// middleware/validation.js
const Joi = require('joi');

exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('landlord', 'tenant')
  });

  return schema.validate(data);
};

exports.propertyValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    address: Joi.string().min(10).required(),
    type: Joi.string().valid('apartment', 'house', 'commercial').required(),
    units: Joi.number().min(1).required()
  });

  return schema.validate(data);
};