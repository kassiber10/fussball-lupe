const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oAuth2Client = new OAuth2(
    process.env.CLIENTID,
    process.env.CLIENTSECRET,
);
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESHTOKEN,
});

exports.sendMail = asyncHandler(async (req, res) => {
  const accesstoken = oAuth2Client.getAccessToken();

  const {to, subject, text} = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.USER,
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
      accessToken: accesstoken,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.CLIENTMAIL,
    to: to,
    subject: subject,
    text: text,
  });

  if (!info.messageId) {
    res.status(401);
    throw new Error('Email could not be sent');
  }

  res.status(200).json({success: true});
});
