// Importation de la connexion à la base de données
const { request, response } = require('express');
const dataBase = require ('../db/db-connection');

//Création d'un constructeur pour la création et la mise à jour des enregistrements
const SerieConstructor = function (serie) {
    this.id = serie.id;
    this.titre = serie.titre;
    this.realisateur = serie.realisateur;
    this.resume = serie.resume;
    this.annee_sortie = serie.annee_sortie;
    this.nombre_saisons = serie.nombre_saisons;
    this.nombre_episodes = serie.nombre_episodes;
};

// Récupération de l'ensemble des series
getAllSeries = result_bdd_request => {
    dataBase.query("SELECT * FROM serie", (error,response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Récupération d'une série avec l'id 
getSerieById = (id,result_bdd_request) => {
    dataBase.query("SELECT * FROM serie WHERE id = ?", [id], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Récupération d'une série par le titre 
getSerieByName = (titre,result_bdd_request) => {
    dataBase.query("SELECT * FROM serie WHERE titre = ?", [titre], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });

};

// Ajouter une série
createSerie = (serieData, result_bdd_request) => {
    dataBase.query(
        "INSERT INTO serie (titre, realisateur, resume, annee_sortie, nombre_saisons, nombre_episodes) VALUES (?, ?, ?, ?, ?, ?)",
        [serieData.titre, serieData.realisateur, serieData.resume, serieData.annee_sortie, serieData.nombre_saisons, serieData.nombre_episodes], (error,response) => {
            if (error) {
                result_bdd_request(error);
                return;
            }
            // Le premier null représente les erreurs
            result_bdd_request(null, response);
        }
    );
};

// Mettre à jour une série en fonction de son id
updateSerieById = (id, serieData, result_bdd_request) => {
    dataBase.query(
        "UPDATE serie SET titre =  ? , realisateur =  ? , resume = ? , annee_sortie = ? , nombre_saisons = ? , nombre_episodes = ? WHERE id = ?", 
        [serieData.titre, serieData.realisateur, serieData.resume, serieData.annee_sortie, serieData.nombre_saisons, serieData.nombre_episodes, id], (error,response) => {
            if (error) {
                result_bdd_request(error);
                return;
            }
            // Le premier null représente les erreurs
            result_bdd_request(null, response);
        }
    );
};

// Supprimer une série en fonction de son id
deleteSerieById = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM serie WHERE id = ?", [id], (error,response) => {
        if (error) {
            result_bdd_request(error);
            return;
        }
        // Le premier null représente les erreurs
        result_bdd_request(null, response);
    });
};

module.exports = {
    SerieConstructor,
    getAllSeries,
    getSerieById,
    getSerieByName,
    createSerie,
    updateSerieById,
    deleteSerieById
}