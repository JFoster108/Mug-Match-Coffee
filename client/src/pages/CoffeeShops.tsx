import { useEffect, useState } from 'react';
import { fetchNearbyCoffeeShops } from '../utils/api';

const CoffeeShops = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    fetchNearbyCoffeeShops().then(setCoffeeShops);
  }, []);

  return (
    <div className="coffee-shops">
      <h1>Nearby Coffee Shops</h1>
      {coffeeShops.length > 0 ? (
        <ul>
          {coffeeShops.map((shop, index) => (
            <li key={index}>
              <strong>{shop.name}</strong><br/>
              {shop.address}<br/>
              Rating: {shop.rating} ⭐
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading nearby coffee shops...</p>
      )}
    </div>
  );
};

export default CoffeeShops;
