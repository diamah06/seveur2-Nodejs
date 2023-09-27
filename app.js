const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const authRouter = require('./routes/auth');
const jwt = require('jsonwebtoken');


// middlewar
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// verification du tocken :
const verifyJWT = (req, res, next) => {
    const  SECRET_KEY = "secretkey23456"; // A remplacer par la même clé secrète que dans la route signin dans fichier auth.js
    const token = req.header('Authorization');
  
    if(!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    try {
      
      const decoded = jwt.verify(token, SECRET_KEY);
      console.log(decoded);
      req.user = decoded; 
      next(); 
    } catch (err) {
      console.error(err)
      res.status(400).json({ auth: false, message: 'Invalid token.' });
    }
  };

// app implements a router plus middlewares (logger, json, url encoded, cookie parser, etc.)
// app.use('/', indexRouter);
app.use('/api', verifyJWT, indexRouter); 
app.use('/auth', authRouter);
module.exports = app;