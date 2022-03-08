const mongoose = require('mongoose');
const validator = require('validator');


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
  },
  confirmPassword : {
    type: String,
    minLength: 8,
    required: [true, 'enter confirmed password'],
  }

});
const User = mongoose.model('User', userSchema);
module.exports = User;