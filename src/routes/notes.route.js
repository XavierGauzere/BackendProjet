// Importation du module router de Express
const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API de streaming !" });
});

module.exports = router;
