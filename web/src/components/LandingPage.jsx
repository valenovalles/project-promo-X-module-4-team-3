
import { Link } from 'react-router-dom';
import Card from './Card';
// import cardsData from '../services/cardsData.json';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [cards, setCards] = useState([]);

   useEffect(() => {
    fetch("https://project-promo-x-module-4-team-3-1.onrender.com/cards")
    .then((response)=>response.json())
    .then(data=>{
      setCards(data.data)
    })
  }, []);



  return (
    <main>
       <Link className='link' to="/main"> <button className='button--large'>Crea tu propia invitación</button></Link>
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
