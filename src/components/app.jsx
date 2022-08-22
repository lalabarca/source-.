import React from 'react';

import ActiveCity from '../containers/active_city';
import CitiesList from "../containers/cities_list";

// const cities = [
//   { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//   { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//   { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
// ];

const App = () => {
  return (
    <div className="app">
      <CitiesList />
      <ActiveCity />
    </div>
  );
};

export default App;
