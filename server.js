const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB)
.then(con =>{
    console.log('Conexion exitosa');
})
.catch(err=>{
    console.log(err);
})
