
const { default:mongoose } = require('mongoose');

//import model first so as to interact with database
const productdb = require('../models/Products');

//get all products 
const getProducts = async (req,res)=>{
   const products = await productdb.find({ }).sort({createdAt: -1})
    //send response back to browser of products
    res.status(200).json(products)
}

//get a single product  
const getProduct = async (req,res)=>{
    //id stored in params property
    const { id } = req.params
//use mongoose tocheck if id exist
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'NO SUCH PRODUCT'})}
    //use productdb model to try find by id
    const product= await productdb.findById(id) 
    //if that model doesn't exist return
    if(!product){
        return res.status(200).json({error:'No such product'})
    }
    res.status(200).json(product)
}

//create new product POST req// ADD TO DB
const createProduct = async(req, res) => { 
    const {product, productCategory, productDescription} = req.body
 //add to db
    try {
        //to add to db we use create method 
        const products = await productdb.create({  product, productCategory, productDescription})
        res.status(200).json(products)
    } 
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete product
const deleteProduct = async (req,res)=>{
    //first we need to grab id from routes parameter
    const {id} = req.params
    //make sure is a vaid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NO SUCH PRODUCT'})}
      const products = await productdb.findOneAndDelete({_id:id})
   if(!products){
      return res.status(200).json({error:'No such Product'})
      }
      res.status(200).json(products)
}

//update product
const updateProducts = async(req, res)=>{
    //get id and check if valid
    const {id} = req.params
    //make sure is a valid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'NO SUCH PRODUCT'})}
    const products= await productdb.findOneAndUpdate({_id:id},{...req.body})
    if(!products){
        return res.status(200).json({error:'No such Product'})
 }
res.status(200).json(products)
}



module.exports = { createProduct,getProducts,getProduct, deleteProduct,updateProducts }