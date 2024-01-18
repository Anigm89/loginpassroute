const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
const middlewares = require('./middlewares');
const routes = require('./routes');


dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));




middlewares.setupAPP(app);
routes.setup(app);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });



