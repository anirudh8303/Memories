const express = require('express');
const User = require('../models/UserModel')

exports.signUp = async (req,res) => {
   try {
   const newUser = await User.create(req.body);
   const result = {
       isSuccess: true,
       data :{
           user : newUser
       }
   };
   res.status(200).send(result);
}
catch(err) {
    res.send(err.message);
}
};