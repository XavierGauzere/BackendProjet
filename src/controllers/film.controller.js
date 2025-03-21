// Importation du modèle pour la table film
const filmModel = require('../models/film.model');

// Récupérer l'ensemble des films
getAllFilms = (request, response) => {
    filmModel.getAllFilms((error, data) => { // Demande des données au modèle film
        // Gestion des erreurs de données retournées
        if (error)
            response.status(500).send({ 
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