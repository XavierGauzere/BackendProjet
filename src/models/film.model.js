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