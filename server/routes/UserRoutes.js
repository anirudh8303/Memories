const express= require('express');
const authControllers = require('../controllers/AuthContollers');

const router = express.Router();

router.route('/signup').post(authControllers.signUp);

module.exports =router;