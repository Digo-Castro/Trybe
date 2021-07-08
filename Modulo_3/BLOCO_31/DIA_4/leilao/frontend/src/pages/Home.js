import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [cardsList, setCardsList] = useState([]);
  // const fetchCardList = async () => {
  //   try {
  //     const list = await fetch('http://localhost:3008/products')
  //     console.log(list);
  //     const listJSON = await list.json();
  //     console.log(listJSON)

  //     setCardsList(listJSON);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };

  useEffect(() => {
    const fetchCardList = async () => {
      try {
        const list = await fetch('http://localhost:3008/products')
        console.log(list);
        const listJSON = await list.json();
        console.log(listJSON)

        setCardsList(listJSON);
      } catch (err) {
        console.log(err)
      }
    }
    fetchCardList();
  }, []);

  if (!cardsList) return <p>Loading...</p>

  return (
    <>
    <header className="header">
      Casa de Leilões Push Na Master $$$$
    </header>
    <div className="galery">
    { cardsList.map((card, index) => <Card key={index} data={card} />) }
    </div>
    </>
  );
};

export default  Home;