//Importation du module router de Express
const router = require('express').Router();

// Définition de l'ensemble des constantes utilisant le controller
const {
    getAllSeries,
    getSerieById,
    getSerieByName,
    createSerie,
    updateSerieById,
    deleteSerieById,
} = require('../controllers/serie.controller');

// Définition des routes
//Pour afficher la liste des series
router.get('/', getAllSeries); // GET localhost:8081/series

//Pour afficher une série via son id
router.get('/:id', getSerieById); //GET localhost:8081/series/:id

//Pour afficher une série via son nom
router.get('/filter/:nom', getSerieByName); //GET localhost:8081/series/filter/:nom

// Pour créer une série
router.post('/', createSerie); //POST localhost:8081/series

// Pour modifier une série
router.patch('/:id', updateSerieById); //PATCH localhost:8081/series/:id

// Pour supprimer une série
router.delete('/:id', deleteSerieById); //delete localhost:8081/series/:id

module.exports = router;