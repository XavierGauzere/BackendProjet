// Importation du modèle pour la table serie
const serieModel = require('../models/serie.model');

// Récupérer l'ensemble des series
getAllSeries = (request, response) => {
    serieModel.getAllSeries((error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Récupérer une serie par son id
getSerieById = (request, response) => {
    const id = request.params.id;
    serieModel.getSerieById(id, (error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Récupérer une serie par son id
getSerieByName = (request, response) => {
    const titre = request.params.nom;
    serieModel.getSerieByName(titre, (error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Ajouter une série
createSerie = (request, response) => {
    const filmData = request.body;
    serieModel.createSerie(filmData,(error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Mettre à jour une série via son id
updateSerieById = (request, response) => {
    const id = request.params.id;
    const filmData = request.body
    serieModel.updateSerieById(id, filmData,(error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

// Supprimer une série via son id
deleteSerieById = (request, response) => {
    const id = request.params.id;
    serieModel.deleteSerieById(id, (error, data) => { // Demande des données au modèle serie
        if (error)
            response.status(500).send({ // Gestion des erreurs de données retournées
                message: 
                    error.message || "Une erreur est survenue en essayant de récupérer la table serie."
            });
        else response.send(data);  // Réponse du contrôleur au client (view)
    });
};

module.exports = {
    getAllSeries,
    getSerieById,
    getSerieByName,
    createSerie,
    updateSerieById,
    deleteSerieById
};