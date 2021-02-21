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
        type:String,
        min:2,
        max: 255,
        required: true
    },
    email:{
        type:String,
        min:2,
        max:255,
        required:true
    },
    phone:{
        type:String,
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
        type:String,
        min:1,
        max: 255,
        required: true
    },
    causes:{
        type:String,
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
        type:String,
        min:1,
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
        min:0,
        max: 255,
        required: false
    },
    bornIn:{
        type:Date,
        required: false
    },
    verified:{
        type:Boolean,
        default: false
    },    
    createdAt:{
        type:Date,
        default:Date.now
    },
    

});

module.exports = mongoose.model('Ong', ongSchema);