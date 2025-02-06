//Importation du module router de Express
const router = require('express').Router;

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
router.get('/', getAllFilms); // GET localhost:8081