import { useEffect, useState } from 'react';
import { fetchSavedCoffeeMatches } from '../utils/api';

const CoffeeMatches = () => {
  const [coffeeMatches, setCoffeeMatches] = useState([]);

  useEffect(() => {
    fetchSavedCoffeeMatches().then(setCoffeeMatches);
  }, []);

  return (
    <div className="coffee-matches">
      <h1>Your Coffee Matches</h1>
      {coffeeMatches.length > 0 ? (
        <ul>
          {coffeeMatches.map((coffee, index) => (
            <li key={index}>{coffee.name} - {coffee.description}</li>
          ))}
        </ul>
      ) : (
        <p>No saved coffee matches yet. Take the quiz to find your match!</p>
      )}
    </div>
  );
};

export default CoffeeMatches;
