const express = require('express');
const middlewares = require('./middlewares');
const app = express();
const PORT = 3000;

app.use(middlewares.dummy);

app.get('/', (req, res) => {
  console.log(`${req.method}: ${req.path}`);
  res.send({message: "Olá Digo-Castro"});

})

app.listen(PORT, (req, res) => console.log(`Listen on ${PORT}.`));
