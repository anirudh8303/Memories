const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema( {
  name : {
    type: String,
    required: [true, "Please tell us your name"]
  },
  email: {
  type: String,
  required: [true, 'Please tell us your email'],
  unique: true,
  lowercase : true,
  validator : [validator.isEmail, "Please enter valid email"]
  },
  photo: String,
  password: {
   type: String,
   minLength: 8,
   required: [true, 'enter password'],
   select : false
  },
  confirmPassword : {
    type: String,
    minLength: 8,
    required: [true, 'enter confirmed password'],
    validate : {
     //this only works when create and save!
     validator: function(el) {
       return el==this.password;
     },
     message: "Passwords do not match"
    }
  }

});
// encrpyt the user passwords for safety, we use .pre('save) as this functions work between when data is recieved and data is saved in data base;
userSchema.pre('save', async function(next) {
  //only run function if password is actually modified, i.e use predefined isModified function
  if(this.isModified('password')==false)
   return next();
   //hash password async version
   this.password =  await bcrypt.hash(this.password,12);
   // after hashing remove confirm password no longer req
   this.confirmPassword=undefined;
   next();
});

userSchema.methods.correctPassword = async function(candidatePass, userPass) {
  return  await bcrypt.compare(candidatePass,userPass);
}


const User = mongoose.model('User', userSchema);
module.exports = User;