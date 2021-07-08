const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

const data = require('./data');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(express.json());
app.use (cors());

require('./sockets/products')(io);

app.get('/products', (_req, res) => {
  res.status(200).json(data);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = data.find((element) => element.id == id);
  product.bid += 5;
  res.status(200).json(data);
});

http.listen(3008, () => console.log('Server ouvindo na porta 3008'));