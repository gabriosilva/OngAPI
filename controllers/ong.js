//Models
const Ong = require('../models/Ong');

//Validators
const { addOngValidation,getOngValidation,setVerifiedValidation } = require('../validators/Ong');

async function ongExists(ongObj){
    const ongExist = await Ong.findOne(
        {
            $or:[
                {_id: ongObj._id},
                {identificationNumber: ongObj.identificationNumber},
                {email:ongObj.email}
            ]
        })
    return ongExist;
}

//Controller functions
exports.add_ong_post = async(req,res)=>{
    
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
        const ongExist = await ongExists(ongObj);
        const responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        if(!ongExist){
            const sentOng = await ongObj.save();
            responseObj.data.push(sentOng);
           return res.status(200).send(responseObj);
        }

        responseObj.success = false;
        responseObj.error.push({
            message: "Ong already exists!"
        })

        return res.status(400).send(responseObj);
        

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

        return res.status(502).send(responseObj);
        
    };
}

exports.get_ong_get = async(req,res)=>{
    
    let errorArray = [];
    let success = true;

    //validator
    const {error} = getOngValidation(req.body);
    if(error) return res.status(400).send({
        success:!success,
        error:[error.details[0]]
    })

    //get object from database
    try{
        //get only verified Ongs
        req.body.verified = true;
        
        const ongObj = await Ong.findOne(req.body);
        let responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        if(ongObj){
            responseObj.data.push(ongObj);
        }

        res.status(200).send(responseObj);

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

    }
}

exports.get_unverified_ong_get = async(req,res)=>{
    
    let errorArray = [];
    let success = true;

    //validator
    const {error} = getOngValidation(req.body);
    if(error) return res.status(400).send({
        success:!success,
        error:[error.details[0]]
    })

    //get object from database
    try{
        //get only verified Ongs
        req.body.verified = false;
        
        const ongObj = await Ong.find(req.body);
        let responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        if(ongObj){
            responseObj.data = ongObj;
        }

        res.status(200).send(responseObj);

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

    }
}

exports.set_verified_post = async(req,res)=>{
    
    let errorArray = [];
    let success = true;

    //validator
    const {error} = setVerifiedValidation(req.body);
    
    if(error) return res.status(400).send({
        success:!success,
        error:[error.details[0]]
    })

    try{
        const updatedOng = await Ong.findOneAndUpdate({"_id":req.body._id},{verified:true});
        const ongObj = await Ong.findOne({"_id":req.body._id});
        let responseObj = {
            data:[],
            success:success,
            error:errorArray
        }
        if(updatedOng){
            responseObj.data.push(ongObj);
        }

        res.status(200).send(responseObj);

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

    }
}