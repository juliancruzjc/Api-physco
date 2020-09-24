const express = require("express");
const app = express();
app.listen(3200, () => {
 console.log("El servidor está inicializado en el puerto 3200");
});
app.get('/physco', function (req, res) {
    res.send('Saludos de parte PHYSCO');
  });