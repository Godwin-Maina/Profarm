
const express= require('express');
const appback= express();
require('dotenv').config();

const mongoose = require('mongoose');
const routes = require('../backened/routes/userRoutes');
const productRoutes= require('../backened/routes/productRoutes');

appback.use(express.json())
appback.use(routes);
appback.use('/api/products',productRoutes);




mongoose.connect(process.env.MONGODBEASYFARM)
mongoose.connection.once('open',()=>{
    appback.listen(process.env.PORT);
    console.log('connected to db & and listening to port',process.env.PORT)
});