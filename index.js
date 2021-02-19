const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

//Routes
const ongRoute = require('./routes/ong');


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
app.use('/api/ong',ongRoute);

//Server
const server = app.listen(process.env.SERVER_PORT || 3000,()=>{
    console.log(`Server Running on port ${server.address().port}\n`);
})


