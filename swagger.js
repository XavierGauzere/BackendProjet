// Importation de la librairie pour générer le JSON
const swaggerAutogen = require('swagger-autogen')();

// Définition de l’architecture de base de la documentation
const doc = {
  info: {
    title: 'API de Streaming',
    description: 'API de films et séries',
    version: "1.0.0"
  },
  host: 'localhost:8081',
  basePath: "/api",
  schemes: ["http"],
  tags: [
    {
      name: "Films",
      description: "Endpoints pour gérer les films"
    },
    {
      name: "Séries",
      description: "Endpoints pour gérer les séries"
    }
  ]
};


const outputFile = './src/middleware/swagger-output.json';
const routes = [
  'index.js', 
];
console.log(routes);

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./index');
})
