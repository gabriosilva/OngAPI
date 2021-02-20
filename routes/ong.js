const router = require('express').Router();
const Ong = require('../models/Ong');

//Validators
const {addOngValidation} = require('../validators/Ong');

router.post('/addOng',async(req,res)=>{
    
    let errorArray = [];
    let success = true;

    const {error} = addOngValidation(req.body);
    if(error) return res.status(400).send({
        success:!success,
        //Shows only the first validation error
        error:[error.details[0]]
    })

    //Create the ong obj
    const ongObj = new Ong({
        name: req.body.name,
        description: req.body.description,
        identificationNumber: req.body.identificationNumber,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        type:req.body.type,
        causes:req.body.causes,
        country:req.body.country,
        zipcode:req.body.zipcode,
        state:req.body.state,
        city:req.body.city,
        addressNumber: req.body.addressNumber,
        bornIn: req.body.bornIn
    });

    try{
        const sentOng = await ongObj.save();
        const responseObj = {
            data:[sentOng],
            success:success,
            error:errorArray
        }
        res.status(200).send(sentOng);

    }catch(err){

        success = false;
        const error = {
            message:err.message,
            description: err.description
        }
        errorArray.push(error);
        
        const responseObj = {
            data:[],
            success:success,
            error:errorArray
        }

        res.status(502).send(responseObj);
        
    };
});

module.exports = router;