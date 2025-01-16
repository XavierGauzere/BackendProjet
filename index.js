const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.end("Hello")
})

//Rendre l’application disponible sur le port 8081 du serveur web
var server = app.listen(8081,function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})
