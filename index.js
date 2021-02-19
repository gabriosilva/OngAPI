const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

//Routes


dotenv.config();


//Handles the database connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('Connected to the DB');
})

//Middleware
app.use(express.json());

//Route Middlewares


//Server
const server = app.listen(process.env.SERVER_PORT || 3000,()=>{
    console.log(`Server Running on port ${server.address().port}\n`);
})


