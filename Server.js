const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const http = require('http').createServer(app);
const port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist'));


//get all students on waitlist - test
app.get('/waitlist', (req, res) => {
    res.status(200).send('waitlist route working');
});


http.listen(port, () => {
    console.log(`started on port ${port}`);
});