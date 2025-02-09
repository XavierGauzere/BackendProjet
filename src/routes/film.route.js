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
/**
 * @swagger
 * /films:
 *   get:
 *     summary: Récupérer tous les films
 *     description: Renvoie une liste de tous les films enregistrés dans la base de données.
 *     tags:
 *       - Films
 *     responses:
 *       200:
 *         description: Succès - Liste des films récupérée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID du film dans la base de données.
 *                         example: 1
 *                       titre:
 *                         type: string
 *                         description: Titre du film.
 *                         example: "La cité de la peur"
 *                       realisateur:
 *                         type: string
 *                         description: Nom du réalisateur du film.
 *                         example: "Alain Berbérian"
 *                       resume:
 *                         type: string
 *                         description: Brève description du film.
 *                         example: "De nos jours, à Cannes, pendant le Festival..."
 *                       annee_sortie:
 *                         type: integer
 *                         description: Année de sortie du film.
 *                         example: 1994
 */
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