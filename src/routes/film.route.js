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