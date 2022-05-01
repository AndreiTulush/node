const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

const app = express();

const PORT = 3001;
let user = undefined


app.use(bodyParser.urlencoded({ extended: false }));
app.post('/registration', (req, res) => {
    if (!req.body.email || !req.body.massage || !req.body.name) return res.sendStatus(400);
    const massage = {
        from: req.body.email,
        to: 'datafromsayt@gmail.com',
        subject: req.body.name,
        text: `Данные пользователя:
            E-mail: ${req.body.email},
            Massage: ${req.body.massage}
        `
    }
    mailer(massage)
    user = req.body;
    res.redirect('/registration')


});
app.get('/registration', (req, res) => {
    if (typeof user !== 'object') return res.sendFile(__dirname + '/registration.html');
    res.send(`Данные успешно отправлены на email: datafromsayt@gmail.com!`);
    user = undefined
});

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))