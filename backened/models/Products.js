const mongoose = require('mongoose');

// create schema which define structure 
const Schema = mongoose.Schema;

 const productsSchema = new Schema({

        product: {
            type: String,
            required:true
        },
        productDescription: {
            type: String,
            required:true

        },

        productCategory: {
            type: String,
            required:true

        }
    },
    
    { timestamps: true }) //timestamps to automatically update our product.
 
//schema defines structure of a particular document in our db.
//model provide interface to communicate with the database collection .//name of model first letter in caps and in singular.
const productdb = mongoose.model('productdb',productsSchema);

///export the model to use to other place 
module.exports = productdb;