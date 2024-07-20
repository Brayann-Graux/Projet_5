import React, { useState, useEffect } from 'react';
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import "../Styles/home.scss";

export function Home() {
  return (
    <div>
      <LayoutHeader />
      <section className="promise">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <Gallery />
      <LayoutFooter />
    </div>
  );
}

function Gallery() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setHouses(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="gallery">
      {houses.map((house) => (
          <div key={house.id} className="cardItem">
            <img src={house.cover} alt={house.title} />
            <div className="titleCard">{house.title} </div>
        </div>
      ))}
    </div>
  );
}
