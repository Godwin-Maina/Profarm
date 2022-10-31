//API endpoint routers
//we need express to access express.Route()
const express = require('express')

const router = express.Router()

const {createProduct, getProduct, getProducts, deleteProduct,updateProducts} = require('../controllers/productcontroller')


//Get all Products
router.get('/',getProducts)


//Get a single product
router.get('/:id', getProduct)


//Post a new product
router.post('/', createProduct)

//Delete a Product 
router.delete('/:id', deleteProduct)

//Update a Product
router.patch('/:id', updateProducts)

//export router
module.exports = router