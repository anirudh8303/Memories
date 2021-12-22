const express =  require('express');
const app =  require('./app')
const dotenv =  require('dotenv');
dotenv.config({path: './config.env'});
const mongoose  =  require('mongoose')
const uri = process.env.DATABASE_STRING.replace('<password>', process.env.DATABASE_PASSWORD);
try {
    mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true ,
     }).then((con)=> {
         console.log('db connected');
     });
}
catch(err) {
    console.log(err);
}


const port = 8000;
app.listen(port, ()=> {
  console.log(`App started on port ${port}`);
});