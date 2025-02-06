// Importation de la librairie pour générer le JSON
const swaggerAutogen = require('swagger-autogen')(); // voir https://swagger-autogen.github.io/docs/getting-started/quick-start/

// Définition de l’architecture de base de la documentation
const doc = {
  info: {
    title: 'My API',
    description: 'API de films et séries',
  },
  host: 'localhost:8081',
};

const outputFile = './src/middleware/swagger-output.json';
const routes = ['./src/routes/notes.route.js'];
console.log(routes);

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./index');
})
