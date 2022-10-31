const mongoose=require('mongoose');
const bcrypt= require('bcrypt');
const {isEmail} = require('validator');
const validator = require('validator');

const userSchema = new mongoose.Schema({

   FirstName: {
    type:String,
    required:true,
    uppercase:true
   },

   LastName:{
    type:String,
    required:true,
    uppercase:true
   },

    Email:{
        type:String,
        required:[true,'please Enter an Email.'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please Enter a valid Email..']
      
    },

    Password:{
        type:String,
        required:[true,'Please Enter Password..'],
        minlength:[6,'minimum Password length is 6 characters.. ']

    },
    
    date:{
        type:Date,
        default:Date.now


    }
});

//static signup method 
userSchema.statics.signup = async function( FirstName,LastName,email,password){

     //validation
     if(!FirstName|| !LastName|| !email || !password){
        throw Error("ALL FIELDS MUST BE FILLED.")
     }

     if(!validator.isEmail(email)){
        throw Error('Email is not Valid');
     }

   /*  if(!validator.isStrongPassword(password)){
        throw Error('password not strong enough')
     } */

   

    //check if user exists with email.
   const exists=await this.findOne({email})
   if(exists){
    throw Error('Email already  in use');
   }
   
   //hashing passwords.
   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)
   
   //create user to db
   const user = await this.create({FirstName,LastName,email, password:hash});

   //return user we shall require.
   return user;
}


//static login method

userSchema.statics.login = async function(email,password){
     //validation
     if( !email || !password){
        throw Error("ALL FIELDS MUST BE FILLED.")
     }

     const user =await this.findOne({email})
   if(!user){
    throw Error('INCORRECT EMAIL');

   }

   const match = await bcrypt.compare(password,user.password)

   if(!match){
    throw Error('INCORRECT PASSWORD')

   }
   
return user   
}



const User = mongoose.model('User', userSchema);

module.exports=User;