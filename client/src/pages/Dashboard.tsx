import { useEffect, useState } from 'react';
import { fetchCoffeeRecommendations, fetchNearbyCoffeeShops, fetchDailyCoffeeFact } from '../utils/api';

const Dashboard = () => {
  const [coffeeRecommendations, setCoffeeRecommendations] = useState([]);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [dailyFact, setDailyFact] = useState('');

  useEffect(() => {
    fetchCoffeeRecommendations().then(setCoffeeRecommendations);
    fetchNearbyCoffeeShops().then(setCoffeeShops);
    fetchDailyCoffeeFact().then(setDailyFact);
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      
      <section className="coffee-recommendations">
        <h2>Your Coffee Matches</h2>
        <ul>
          {coffeeRecommendations.map((coffee, index) => (
            <li key={index}>{coffee.name} - {coffee.description}</li>
          ))}
        </ul>
      </section>
      
      <section className="coffee-shops">
        <h2>Nearby Coffee Shops</h2>
        <ul>
          {coffeeShops.map((shop, index) => (
            <li key={index}>{shop.name} - {shop.address}</li>
          ))}
        </ul>
      </section>
      
      <section className="daily-fact">
        <h2>Daily Coffee Fact</h2>
        <p>{dailyFact}</p>
      </section>
    </div>
  );
};

export default Dashboard;
