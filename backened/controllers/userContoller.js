
const User= require('../models/usermodel');
const jwt = require("jsonwebtoken");

const createToken = (_id)=>{
    //id will be part of token payload.
    //retun the token so that we can use it.
   return jwt.sign({_id}, process.env.SECRET,{expiresIn:'3d'})
}

//signup
const user_signup = async (req,res)=>{

 const{FirstName,LastName,Email, Password}= req.body;

    try{
        //we grab this user from the usermodel
        const  user= await User.signup(FirstName,LastName,Email, Password);

        //create token after signup
        const token = createToken(user._id);
        res.status(200).json({Email,token,user}) 
          
    }

    catch(error){
res.status(400).json({error:error.message})
    }
}


//login
const user_login = async(req,res)=>{

    const{Email,Password}= req.body;
    try{
        //we grab this User from the usermodel
        const  user= await User.login(Email, Password);

        //create token after login
        const token = createToken(user._id);
        res.status(200).json({Email,token,user}) 
          
    }

    catch(error){
res.status(400).json({error:error.message})
    }
}


module.exports={user_signup,user_login}


