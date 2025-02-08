//Importation des modules nécessaires
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dataBase = require('./src/db/db-connection');

// Importation des routes
const filmRoute = require('./src/routes/film.route');
const serieRoute = require('./src/routes/serie.route');
const docRoute = require('./src/routes/notes.route');



// Définition d'un fichier de sortie swagger
//const swaggerUi = require('swagger-ui-express');
//const swaggerFile = require('./src/middleware/swagger-output.json');
const fs = require('fs'); // Bibliothèque pour gestion de fichier (lecture/écriture)
const exp = require('constants');

//app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Initialisation et configuration
//Init environment
dotenv.config();

app.use(express.json()); // Spécifie que la réponse est au format json
app.set('json spaces', 2); // Permet de formater la réponse pour respecter l'indentation d'un json

// Déclaration des Endpoints
app.use('/api/', docRoute);
app.use('/api/films', filmRoute);
app.use('/api/series', serieRoute);

//server.js
const port = process.env.PORT_SERVER;
console.log(`Your port is ${port}`);

app.get('/', function (req, res) {
    res.end("Hello")
})

//Rendre l’application disponible sur le port 8081 du serveur web
var server = app.listen(port,function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})

const createDataBase = fs.readFileSync('./src/db/create-cinema-db.sql', 'utf8'); // Lecture du .sql (ici une création de table dans la base)

/*dataBase.query(createDataBase, (err, result) => { // on fait la requête à la base en utilisant le contenu de create_table.sql
    if (err) {
        console.error('Error executing SQL script:', err);
    } else {
        console.log('SQL script executed successfully.');
    }
    dataBase.end();
});*/