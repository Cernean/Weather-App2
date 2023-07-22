const express = require('express');

const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./router'); 
app.use("/forcasts/", router);

app.use(express.static('public'));

app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currenttime: d.toTimeString() });
    console.log('Received GET request...');
});

app.listen(process.env.PORT, () => {

  console.log("Server is listening on port:", process.env.PORT);

});

module.exports = app;
