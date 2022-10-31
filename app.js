  //express app
  //we first need express to set the app

  const express = require('express');
  const mongoose = require('mongoose');
  require('dotenv').config() //enviroment to hide sensitive data eg when we expose to resipitories eg is db string
  const productRoutes = require('./backened/routes/productRouters')
  const app = express();
  //routes
  //we can only go to the routes through a specific path as below "/api/products" then it goes to the routes
  app.use('/api/products', productRoutes)
//global middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
  //morgan a 3rd party middleware
  const morgan = require('morgan');
  app.use(morgan('dev '));
  //middleware and staticfiles
  //app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));//middleware to pass data in format we want used in post request to accept   form data in req.body

   //middleware
   //this middleware checks if the request coming(eg POST,PATCH) has any req body if it does it attach to the req object.
  app.use(express.json());
  //app.use(productRoutes);

  //import database model 
  const productdb = require('./backened/models/Products');

  //register view engine
  app.set("viewengine", "ejs");

  //connect to mongo db
  //below is connection string from mongo db atlas.Name of database acceseer and password are also put in the string as weell as database name.

   //listening to port
   app.listen(4000)

     //mongoose.connect('mongodb+srv://profarm:profarm@profarm.qyjxe80.mongodb.net/profarmdb?retryWrites=true&w=majority')
    //  .then((result) => app.listen(4000))
      //.catch((err) => console.log('error in connecting to db'));

  //register view engine
  app.set("views", "backened/views");

 
  //mongoose and mongo sandbox routes
  //how to add and save to db ... a new product document inside the product model in the db
  app.get('/add-product', (req, res) => {
      const PRODUCTS= new productdb({ //we use an instance when adding a new product 
          product: 'POTATOES-YUMMY',
          productCategory: 'CHAGI , PURPLE',
          productDescription: 'PLANTS'
      });
      //method to save in database
      PRODUCTS.save()
          .then((result) => {
              res.send(result)
          })
          .catch((err) => {
              console.log('error in saving to db')
          });
  })

  //get all products inside the collection  or db.
  app.get('/all-products', (req, res) => {
      productdb.find({}) //find() gets all document inside Productdb model collection 
          .then((result) => {
              res.send(result)
          })
          .catch((error) => {
              console.log('Error cant get all documents.')
          });

  })

/*
  //find a single product
  app.get('/single-blog', (req, res) => {
      productdb.findById('631ce84f4484957b5c3ab83d')
          .then((result) => {
              res.send(result)
          })
          .catch((error) => {
              console.log("cant find single product based on id")
          })
  });
*/

  //Routes
  //  app.use('/api/products', productRoutes)

    //comment section 1
    app.get('/', (req, res) => {
 // i will rerender this to index.ejs and appear in browser using for each loop 
          res.redirect('/products')
    });


 //page to display all products from database to home page //redirect / to /products
    app.get('/products', (req, res) => {
        productdb.find({}).sort({createdAt: -1})
            .then((result) => {
                res.render('index.ejs', {
                    title: 'All Products',
                    PRODUCTS:result
                })
            })
            .catch((error) => {
                console.log(error);
            })
    })

    //POST HANDLER
    // we sending request to /products in the form
    app.post('/products', (req, res) => {
        const PRODUCT = new productdb(req.body);
        PRODUCT.save()
            .then((result) => {
                //after saving to db what next redirect to home 
                res.redirect('/products');
            })
            .catch((error) => {
                console.log(error);
            });
    });

    app.get('/about', (req, res) => {
        res.render('about.ejs', { title: 'About' });
    });

    app.get('/about-us', (req, res) => {
        res.redirect('/about')
    });

    app.get('/add', (req, res) => {
        res.render('add.ejs', { title: 'Add' })
    });


    app.use((req, res) => {
        res.status(404).render('404.ejs', { title: 'Error 4' });
    });



  // comment section 2 below


  /*
  //listen for requests

  //responding to request from path /
  app.get('/', (req, res) => {
      //    res.send('<b><p>EASY FARM</p></b>')
      res.sendFile('./backened/views/index.html', { root: __dirname });
  });

  app.get('/about', (req, res) => {

      //res.send('<b><p>About Page</p></b>')
      res.sendFile('./backened/views/about.html', { root: __dirname });
  });

  */

  //Redirects
  /*app.get('/aboutus
  ', (req, res) => {
  res.redirect('/about');
  });*/


  //404 error page when renering in form of html
  //app.use((req, res) => {
  //res.status(404).sendFile('./backened/views/404.html', { root: __dirname });
  //});