const mailController = require('./mailController');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router
    .route('/')
    .post(mailController.sendMail);

module.exports = router;
