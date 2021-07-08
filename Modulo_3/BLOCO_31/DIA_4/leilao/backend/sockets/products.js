const data = require('../data');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('bid', (id) => {
      const product = data.find((element) => element.id === id);
      product.bid += 5;
      io.emit('refreshProduct', product);
    });
  });
}