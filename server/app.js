const express = require('express');

const app =  express();
app.use(express.json());
const postRouters = require('./routes/PostRoutes')


app.use('/posts', postRouters);

module.exports = app;