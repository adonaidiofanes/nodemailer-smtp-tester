require('dotenv').config();
const nodemailer = require('nodemailer');
const moment     = require('moment');
const HOST       = process.env.host;
const PORT       = process.env.port;
const USER_MAIL  = process.env.USER_MAIL;
const USER_PASS  = process.env.USER_PASS;
const MAIL_FROM  = process.env.MAIL_FROM;
const DATE_NOW   = moment(new Date()).format('DD/MM/YYYY HH:mm:ss')

// Mail send config
const MAIL_TO       = "adonaibm@gmail.com";
const MAIL_SUBJECT  = `Teste de envio de email utilizando nodemailer ${DATE_NOW}`;
const MAIL_MESSAGE  = `Essa é uma mensagem de teste enviada: ${DATE_NOW}`;

let transport = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure : false,
    auth: {
       user: USER_MAIL,
       pass: USER_PASS,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});

const message = {
    from: MAIL_FROM,        // Sender address
    to: MAIL_TO,            // List of recipients
    subject: MAIL_SUBJECT,  // Subject line
    text: MAIL_MESSAGE,     // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});