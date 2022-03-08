const express = require('express');
const User = require('../models/UserModel')
const jwt =  require('jsonwebtoken');


exports.signUp = async (req,res) => {
   try {
   const newUser = await User.create(req.body);
   

   const token = jwt.sign({id : newUser._id},'anirudh-sharma-server-for-memories', {
       expiresIn: '10h',
   } )

   const result = {
       isSuccess: true,
       token,
       data :{
           user : newUser
       }
   };
   res.status(200).json(result);
}
catch(err) {
    res.status(400).json(err.message);
}
};

exports.login= (async (req,res, next)=> {
  const {email, password} =req.body;
  //check if email and password is entered
  if(!email || !password) {
      res.status(400).send("email or password not provided");
  }
  //check user with given email exits
const user=await User.findOne({email: email}).select('+password');

if(!user || !( await user.correctPassword(password,user.password))) {
    res.status(400).send("email/password does not exist or password incorrect")
}

const token = jwt.sign({id : user._id},'anirudh-sharma-server-for-memories', {
    expiresIn: '10h',
} )
return res.status(200).json( {
   isSuccess: "true",
   token: token,
});

});