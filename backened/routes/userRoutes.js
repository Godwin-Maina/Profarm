

const express = require('express')

const router = express.Router();

const {user_signup,user_login} = require('../controllers/userContoller');


//signup user.
router.post('/signup', user_signup);

//login user.
router.post('/login',user_login);


module.exports=router;
