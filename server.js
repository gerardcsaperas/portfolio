const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// eMail
const nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// eMail test
app.post('/send-email', async(req, res) => {
    const { name, email, comments } = req.body;

    const myMailAccount = process.env.MY_MAIL;
    const password = process.env.MAIL_PASS;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myMailAccount,
            pass: password
        },
        tls: { rejectUnauthorized: false }
    });

    const mailForMe = {
        from: myMailAccount,
        to: myMailAccount,
        subject: 'Web Dev - New Message',
        html: `<p>Hola a mi mateix,<br><br>Tinc un nou missatge.<br><br><b>De:</b> ${name}<br><br><b>email:</b> ${email}<br><br><b>Missatge:</b> ${comments}<br><br>Rebut a través de www.gerardcsaperas.com`
    };

    const mailForCustomer = {
        from: myMailAccount,
        to: `${email}`,
        subject: 'GerardCSaperas - Message Confirmation',
        html: `<p>Dear ${name},<br><br>Your message has been sent.<br><br><b>email:</b> ${email}<br><br><b>Message:</b> ${comments}<br><br>Thank you so much for your message, I'll get back to you as soon as possible.<br><br>Kind Regards,<br>Gerard</p>`
    };

    await transporter.sendMail(mailForMe, (error, info) => {
        if (error) {
            res.send(error);
        }
    });

    await transporter.sendMail(mailForCustomer, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Express server is running on ' + PORT));