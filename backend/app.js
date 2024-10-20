const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mailPass = process.env.MAIL_PASS;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());

   app.post('/api/mail', (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)

       const transporter = nodemailer.createTransport({
           service: 'gmail', 
           auth: {
               user: 'kamardine.ossete@gmail.com', 
               pass: mailPass 
           }
       });

       const mailOptions = {
           from: email,
           to: 'kamardine.ossete@gmail.com', 
           subject: `Message de ${email} : ${name}`,
           text: message
       };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });
module.exports = app;