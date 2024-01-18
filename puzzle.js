// Snippets de código para poder componer el programa

//Usado?: SI
  const middlewares = require('./middlewares');
//--- Explicación: 

// Esta linea su utiliza para importar el modulo-------------------------------------------------------------------------------------

//Usado?: si
const bodyParser = require('body-parser');
//--- Explicación:
//se utiliza para analizar y procesar los datos de solicitudes HTTP. Permite acceder a los datos del cuerpo de la solicitud en un formato fácilmente utilizable.
// -------------------------------------------------------------------------------------

//Usado?: si
const session = require('express-session');
//--- Explicación:

// Esta linea se utiliza para importar el modulo-------------------------------------------------------------------------------------

//Usado?: SI
const express = require('express');
//--- Explicación:

// Esta linea se utiliza para importar el modulo express-------------------------------------------------------------------------------------

//Usado?: si
const bodyParser = require('body-parser');
//--- Explicación:
//se utiliza para analizar y procesar los datos de solicitudes HTTP. Permite acceder a los datos del cuerpo de la solicitud en un formato fácilmente utilizable.
// -------------------------------------------------------------------------------------

//Usado?: si
const session = require('express-session');
//--- Explicación:

// Esta linea se utiliza para importar el modul- express-session------------------------------------------------------------------------------------

//Usado?:  SI
const dotenv = require('dotenv');
//--- Explicación:
//Dotenv es un módulo de dependencia cero que carga variables de entorno desde un .env
// -------------------------------------------------------------------------------------

//Usado?: SI
const middlewares = require('./middlewares');
//--- Explicación:

// Esta lina se utiliza para importar el modulo middlewares -------------------------------------------------------------------------------------

//Usado?: SI
const routes = require('./routes');
//--- Explicación:
//sirve apara importar las rutas a la app principal
// -------------------------------------------------------------------------------------

//Usado?: SI
dotenv.config();
//--- Explicación:
// llama o inicializa el modulo dotenv
// -------------------------------------------------------------------------------------

//Usado?: SI
const app = express();
//--- Explicación:

// Se utiliza para estancia de la aplicacion Express -------------------------------------------------------------------------------------

//Usado?: 
const PORT = 4000;
//--- Explicación:
//configura el puerto 4000
// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación:
//Dotenv es un módulo de dependencia cero que carga variables de entorno desde un .envarchivo
// -------------------------------------------------------------------------------------

//Usado?:
dotenv.config();
//--- Explicación:
// llama o inicializa el modulo dotenv

// -------------------------------------------------------------------------------------

//Usado?:
middlewares.setupApp(app);
//--- Explicación: 

// Se utiliza para ejecutar la funcion setupApp del modulo middlewares-------------------------------------------------------------------------------------

//Usado?: SI
routes.setup(app);
//--- Explicación: 

// // Se utiliza para ejecutar la funcion setupApp del modulo routes-------------------------------------------------------------------------------------

//Usado?:
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 


// Es un middleware que valida la palabra en la solicitud req -------------------------------------------------------------------------------------


//Usado?: SI
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 


// Esta funcion configura las rutas en una instancia de la aplicacion express-------------------------------------------------------------------------------------


//Usado?: SI
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 


//Esta parte se utiliza para enviar una respuesta al cliente en formaro html -------------------------------------------------------------------------------------

//SI

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};

//Usado?: SI
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// Esta parte del codigo configura el middleware y define una ruta en una aplicacion express-------------------------------------------------------------------------------------

//Usado?: si
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
//analiza las solicitudes  y  transforma de JSON   a variables accesibles a js
// -------------------------------------------------------------------------------------

//Usado?: SI
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
//inicia sesión si la clave coincide con PALABRA_SECRETA o 'secretoSuperSecreto'
// -------------------------------------------------------------------------------------

//Usado?: si
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
//el servidor está escuchando en el puerto indicado
// -------------------------------------------------------------------------------------

//Usado?: SI
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
// verifica sesion. si la session.palabra existe pasa al siguiente paso, si no te redirige a un error
// -------------------------------------------------------------------------------------


//Usado?:si
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
// esta función verifica la sessión  atraves del middleware y si está activa entra en esa ruta 
// -------------------------------------------------------------------------------------


//Usado?:
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
//cieerra sesión
// -------------------------------------------------------------------------------------

//Usado?:  SI
module.exports = {
  setup,
};
//--- Explicación:
//exporta  la funcion setup del modulo routes a la app.js
// -------------------------------------------------------------------------------------

//Usado?: SI
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
//exporta las funciones creadas en el middleware
// -------------------------------------------------------------------------------------

