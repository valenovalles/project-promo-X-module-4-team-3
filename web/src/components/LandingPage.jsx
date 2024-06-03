
import { Link } from 'react-router-dom';
import Card from './Card';
import cardsData from '../services/cardsData.json';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [cards, setCards] = useState(cardsData);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <main>
       <Link className='link' to="/main"> <button className='button--large'>Ir a la página principal</button></Link>
      <div className="main">
      {cards.map((cardData, index) => (
        <Card key={index} formData={cardData} />
      ))}
      </div>
      <div>
     
      </div>
    </main>
  );
};

export default LandingPage;
