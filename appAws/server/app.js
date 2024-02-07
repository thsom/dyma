const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { connect } = require('http2');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
mongoose.connect('mongodb+srv://angulardyma:thsom1807@cluster0.v47k3.mongodb.net/?retryWrites=true&w=majority',{},(err)=>{
  if (err){
    console.log(err);

  }
  else {
    console.log('connexion db ok');
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app; 