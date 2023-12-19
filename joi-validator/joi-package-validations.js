const Joi = require("joi");

const validateCreatePackage = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    duration: Joi.string(),
    category: Joi.string(),
    price: Joi.number(),
    channels: Joi.array().items(Joi.number()),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ error: error.details[0].message });
  }

  req.body = value;
  return next();
};

module.exports = {
  validateCreatePackage,
};
