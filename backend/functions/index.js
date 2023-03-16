const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({origin: ['https://rolandleser.com', 'https://www.rolandleser.com']}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./mailRoute.js'));

exports.sendmail = functions.https.onRequest(app);
