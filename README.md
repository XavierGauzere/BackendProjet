#  API de Streaming - Node.js, Express, MySQL

##  Installation NodeJS et Express
- Installation NodeJS : Téléchargement du programme puis installation.
Initialisation du projet avec la commande :
```sh
npm init
```

- Installation de Nodemon et son lancement
```sh
npm install -g nodemon
nodemon ./index.js
```
- Installation de Express pour NodeJS avec NPM
```sh
npm init
npm install express
```
## Projet API
###  Description

Cette API permet de gérer une base de données de films et séries avec des fonctionnalités CRUD (Create, Read, Update, Delete).  
Elle est construite avec **Node.js**, **Express**, et utilise **MySQL** comme base de données relationnelle.  
La documentation de l'API est générée automatiquement avec **Swagger**.

---

### 1. Création des dépôts git

Création d'un dossier Backend dans lequel je développe le projet et d'un dossier Frontend pour y développer l'aspect front (en bonus)

- Ajout des informations de compte
```sh
git config --global user.name 'XavierGauzere'  
git config --global user.email xavier.gauzere@gmail.com
```
- Initialisation du dépôt 
```sh
git init
```
- Vérification du statut du dépôt 
```sh
git status
```

- Ajout de fichier pour le commit
```sh
git add .env db/ index.js package.json
```

- 1er commit de fichiers avec message
```sh
git commit -m 'Création du projet + ajout des fichiers de démarrage'  
```

- Dans Github, création du repository BackendProjet et entrée les commandes suivantes pour placer le dépôt sur un serveur distant (Github)
```sh
git remote add origin git@github.com:XavierGauzere/BackendProjet.git   
git branch -M main
git push -u origin main      
```
### 2. Fichiers gitignore et readme
#### Gitignore
Afin d’éviter de pousser sur le serveur des fichiers inutiles je créé un fichier .gitignore.

#### Readme
Création du Readme pour expliquer tout le développement du projet

### 3. Linting
Installation de Linting : 
Un linter est un outil d'analyse de code statique utilisé pour signaler les erreurs de programmation, les bogues, les erreurs de style et les constructions
suspectes.

- Installation du package eslint :
```sh
npm install -g eslint  
```
- initialisation du script
```sh
eslint --init      
```
- Configuration du package.json

Ajout de la ligne suivante dans les "scripts"    
```sh 
"lint": "eslint .", 
```

- Lancement de l'analyse
```sh
 npm run lint  
```

### 4. Création des tests unitaire
Afin de faire les tests unitaires, on va utiliser Mocha

- Commande d'installation de Mocha
```sh
 npm install -g mocha  
```
- Création d'un dossier 'test' et d'un script 'test.js' à l'intérieur 
``` js
var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1,2,3].indexOf(4), -1); 
        });
    });
});
```
- Configuration du package.json

Ajout de la ligne suivante dans les "scripts"    
```sh 
"test": "mocha",
```

- Lancement des tests :
```sh 
npm test             
```

### 5. Création de la documentation
Afin de générer la documentation on va utiliser Swagger 

- Commandes d'installation de Swagger ui express et autogen
```sh 
npm install swagger-ui-express 
npm install swagger-autogen            
```
- Création d'un script swagger.js 
```js
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
```
- Définition d'un outputFile et des routes à consulter dans le script swagger.js
```js 
const outputFile = './src/middleware/swagger-output.json';
const routes = ['./src/routes/notes.route.js'];
console.log(routes);

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./index');
})
```

- Définition d'un fichier de sortie swagger dans index.js
```js 
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./src/middleware/swagger-output.json');
```

- Définition de la route /doc, utilisant la lib SwaggerUI pour lire et afficher le résultat du swaggerFile
```sh 
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
```

### 6. Création de l’env file
Utilisation du package dotenv qui permet de charger des variables d’environnement depuis un fichier .env dans process.env

- Commande d’installation
```sh 
npm install dotenv
```
- Modification du fichier .env avec les informations de connexion à la BDD

- Ajouts dans index.js
Importation du module dotenv
```js 
const dotenv = require('dotenv');
```
Initialisation et configuration 
```js 
//Init environment
dotenv.config();

//server.js
const port = process.env.PORT_SERVER;
console.log(`Your port is ${port}`);
```

### 7. Création et configuration de la BDD
- Création du script 'db-connection.js' dans le dossier 'db', qui permet la connexion à la BDD dans lequel j'ai défini les paramètres de connexion à la BDD
```js
//Importation des modules nécessaires
const dotenv = require('dotenv');
const mysql = require('mysql');


// Initialisation et configuration
dotenv.config(); // Initialisation des variables d'environnements

// Paramètres de connexion à la BDD
const databaseConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.PORT_DATABASE
});

module.exports = databaseConnection;
```
- Ajout du module de connexion dans index.js
```js
const dataBase = require('./src/db/db-connection');
```

- Lancement de MySQL via Xampp 
  
- Création de la BDD et des tables sur PHPMyAdmin

- Connexion à la BDD :
Installation de MySQL avec la commande :
```sh
npm install mysql
```


### 8. Création des fichiers routes
- Création d'un dossier route dans lequel j'y créé tous les scripts de route

Exemple : script film.route.js dans lequel de défini toutes les routes
```js
//Importation du module router de Express
const router = require('express').Router();

// Définition de l'ensemble des constantes utilisant le controller
const {
    getAllFilms,
    getFilmById,
    getFilmByName,
    createFilm,
    updateFilmById,
    deleteFilmById,
} = require('../controllers/film.controller');

// Définition des routes
//Pour afficher la liste des films
router.get('/', getAllFilms); // GET localhost:8081/films

//Pour afficher un film via son id
router.get('/:id', getFilmById); //GET localhost:8081/films/:id

//Pour afficher un film via son nom
router.get('/filter/:nom', getFilmByName); //GET localhost:8081/films/filter/:nom

// Pour créer un film
router.post('/', createFilm); //POST localhost:8081/films

// Pour modifier un film
router.patch('/:id', updateFilmById); //PATCH localhost:8081/films/:id

// Pour supprimer un film
router.delete('/:id', deleteFilmById); //delete localhost:8081/films/:id

module.exports = router;
```

- Importation des routes dans index.js :
```js
// Importation des routes
const filmRoute = require('./src/routes/film.route');
const serieRoute = require('./src/routes/serie.route');
const docRoute = require('./src/routes/notes.route');
```

### 8. Création des fichiers controllers
- Création des fichiers des controllers dans le dossier controller

Exemple : film.controller.js dans lequel on défini toutes les fonctions à appeler au model pour effectuer les opérations du CRUD sur les films avec les messages de réponse

```js
// Importation du modèle pour la table film
const filmModel = require('../models/film.model');

// Récupérer l'ensemble des films
getAllFilms = (request, response) => {
    filmModel.getAllFilms((error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Récupérer un film par id
getFilmById = (request, response) => {
    const id = request.params.id;
    filmModel.getFilmById(id, (error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Récupérer un film par nom
getFilmByName = (request, response) => {
    const titre = request.params.nom;
    filmModel.getFilmByName(titre, (error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Ajouter un film
createFilm = (request, response) => {
    const filmData = request.body;
    filmModel.createFilm(filmData, (error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Mettre à jour un film via son id
updateFilmById = (request, response) => {
    const id = request.params.id;
    const filmData = request.body
    filmModel.updateFilmById(id, filmData, (error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Supprimer un film via son id
deleteFilmById = (request, response) => {
    const id = request.params.id;
    filmModel.deleteFilmById(id, (error, data) => { // Demande des données au modèle film
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table film."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

module.exports = {
    getAllFilms,
    getFilmById,
    getFilmByName,
    createFilm,
    updateFilmById,
    deleteFilmById
};
```

### 9. Création des fichiers models
- Création des fichiers models dans le dossier model

Exemple : film.model.js dans lequel de défini toutes les fonctions pour effectuer les opérations du CRUD sur les films avec les requêtes SQL
```js
// Importation de la connexion à la base de données
const { request, response } = require('express');
const dataBase = require ('../db/db-connection');


//Création d'un constructeur pour la création et la mise à jour des enregistrements
const FilmConstructor = function (film) {
    this.id = film.id;
    this.titre = film.titre;
    this.realisateur = film.realisateur;
    this.resume = film.resume;
    this.annee_sortie = film.annee_sortie;
};

// Récupération de l'ensemble des films
getAllFilms = result_bdd_request => {
    dataBase.query("SELECT * FROM film", (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Récupération d'un film avec l'id 
getFilmById = (id,result_bdd_request) => {
    dataBase.query("SELECT * FROM film WHERE id = ?", [id], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Récupération d'un film par le titre 
getFilmByName = (titre,result_bdd_request) => {
    dataBase.query("SELECT * FROM film WHERE titre = ?", [titre], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Ajouter un film
createFilm = (filmData, result_bdd_request) => {
    dataBase.query(
        "INSERT INTO film (titre, realisateur, resume, annee_sortie) VALUES (?, ?, ?, ?)",
        [filmData.titre, filmData.realisateur, filmData.resume, filmData.annee_sortie], (error,response) => {
            if (error) {
                result_bdd_request(error);
                return;
            }
            // Le premier null représente les erreurs
            result_bdd_request(null, response);
        }
    );
};

// Mettre à jour un film en fonction de son id
updateFilmById = (id, filmData, result_bdd_request) => {
    dataBase.query(
        "UPDATE film SET titre =  ? , realisateur =  ? , resume = ? , annee_sortie = ? WHERE id = ?", 
        [filmData.titre, filmData.realisateur, filmData.resume, filmData.annee_sortie, id], (error,response) => {
            if (error) {
                result_bdd_request(error);
                return;
            }
            // Le premier null représente les erreurs
            result_bdd_request(null, response);
        }
    );
};

// Supprimer un film en fonction de son id
deleteFilmById = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM film WHERE id = ?", [id], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });
};


module.exports = {
    FilmConstructor,
    getAllFilms,
    getFilmById,
    getFilmByName,
    createFilm,
    updateFilmById,
    deleteFilmById
}
```
### 10. Délcaration des Endpoints
Dans index.js ajout des endpoints de l'API
```js 
app.use('/api/', docRoute);
app.use('/api/films', filmRoute);
app.use('/api/series', serieRoute);
```
