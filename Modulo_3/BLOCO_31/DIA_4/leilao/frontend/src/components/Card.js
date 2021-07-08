import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';

const socket = io('http://localhost:3008');

const Card = ({data}) => {
  const { id, name, bid } = data;
  const [btnTxt, setBtnTxt] = useState('Dar um lance');
  const [price, setPrice] = useState(bid)

  useEffect(() => {
    socket.on('refreshProduct', (product) => {
      if (product.id === id) {
        setPrice(product.bid);
      }
      // setBtnTxt('Produto arrematado');
    });
  }, []);

  const handleClick = () => {
    socket.emit('bid', id);
  };

  return (
    <section className="card">
      <div className="title">
        {name}
      </div>
      <div className="img-container">
        <img src="" alt='Produto' className="image" />
      </div>
      <div className="price-container">
        <p className="price">Preço R$ {price}</p>
      </div>
      <button type="button" onClick={handleClick} className="btn">{btnTxt}</button>
    </section>
  );
};

export default Card;