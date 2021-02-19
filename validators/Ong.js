const Joi = require('joi');

const addOngValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        description:Joi.string().min(6).max(255),
        identificationNumber:Joi.number().min(2).max(255).required(),
        email:Joi.string().min(2).max(255).email().required(),
        phone:Joi.number().min(0).max(999999999999999999999).required(),
        zipcode:Joi.number().min(0).max(999999999999999999999).required(),
        website:Joi.string().min(2).max(255).uri(),
        type:Joi.number().min(0).max(999999999).required(),
        causes:Joi.number().min(0).max(999999999).required(),
        country: Joi.string().min(2).max(255).required(),
        state: Joi.string().min(2).max(255).required(),
        city: Joi.string().min(2).max(255).required(),
        addressNumber: Joi.string().min(2).max(255),
        bornIn: Joi.date()
        
    })

    return schema.validate(data);
}

module.exports.addOngValidation = addOngValidation;