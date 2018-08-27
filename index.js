require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const googleHandlers = require('./google');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
googleHandlers(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
