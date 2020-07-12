const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// eMail
const nodemailer = require('nodemailer');

app.use(express.json());

// eMail test
app.post('/send-email', (req, res) => {
    const { name, email, comments } = req.body;

    console.log(req.body);
    console.log(name);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gcsaperas@gmail.com',
            pass: 'faqawaqbjmtbzsbk'
        },
        tls: { rejectUnauthorized: false }
    });

    const mailForMe = {
        from: 'gcsaperas@gmail.com',
        to: 'gcsaperas@gmail.com',
        subject: 'Web Dev - New Message',
        html: `<p>Hola a mi mateix,<br><br>Tinc un nou missatge.<br><br><b>De: ${name}</b><br><br><b>email:</b> ${email}<br><br><b>Missatge:</b> ${comments}<br><br>Rebut a través de www.gerardcsaperas.com`
    };

    const mailForCustomer = {
        from: 'gcsaperas@gmail.com',
        to: `${email}`,
        subject: 'GerardCSaperas - Message Confirmation',
        html: `<p>Dear ${name},<br><br>Your message has been sent.<br><br><b>email:</b> ${email}<br><br><b>Message:</b> ${comments}<br><br>Thank you so much for your message, I'll get back to you as soon as possible.<br><br>Kind Regards,<br>Gerard</p>`
    };

    transporter.sendMail(mailForMe, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    transporter.sendMail(mailForCustomer, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Express server is running on ' + PORT));