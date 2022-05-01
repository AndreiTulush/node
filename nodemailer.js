const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'datafromsayt@gmail.com',
        pass: 'andrey200505'
    }

},
);

const mailer = massage => {
    transporter.sendMail(massage, (err, info) => {
        if (err) return console.log('Error ' + err);
        console.log('Email sent ' + info);
    });
};

module.exports = mailer