const express = require('express');

const app =  express();
app.use(express.json());
const postRouters = require('./routes/PostRoutes')
const userRouters = require('./routes/UserRoutes');


app.use('/user', userRouters);
app.use('/posts', postRouters);

module.exports = app;