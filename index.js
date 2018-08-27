require('dotenv').config();

const express = require('express');
const googleHandlers = require('./google');

const app = express();
googleHandlers(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
