const mongoose = require('mongoose');

const ongSchema = new mongoose.Schema({
    name:{
        type:String,
        min:2,
        max: 255,
        required: true
    },
    description:{
        type:String,
        min:2,
        max: 255,
        required: false
    },
    identificationNumber:{
        type:Number,
        min:2,
        max: 255,
        required: true
    },
    Email:{
        type:String,
        min:2,
        max:255,
        required:true
    },
    phone:{
        type:Number,
        min:2,
        max: 255,
        required: true
    },
    website:{
        type:String,
        min:2,
        max: 255,
        required: false
    },
    type:{
        type:Number,
        min:1,
        max: 255,
        required: true
    },
    causes:{
        type:Number,
        min:1,
        max: 255,
        required: true
    },
    country:{
        type:String,
        min:2,
        max: 255,
        required: true
    },
    zipcode:{
        type:Number,
        min:2,
        max: 255,
        required: false
    },
    state:{
        type:String,
        min:2,
        max: 255,
        required: true
    },
    city:{
        type:String,
        min:2,
        max: 255,
        required: true
    },
    addressNumber:{
        type:String,
        min:2,
        max: 255,
        required: false
    },
    bornIn:{
        type:Date,
        required: false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    

});

module.exports = mongoose.model('Ong',ongSchema);