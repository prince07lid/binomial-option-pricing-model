import React, { useState } from 'react';
import OptionForm from './optionform';
import OptionPriceChart from './optionpricechart';
import { calculateOptionPrices } from './utilities';

function App() {
  const [optionData, setOptionData] = useState({
    S: 100,   // Current asset price
    K: 100,   // Strike price
    T: 1,     // Time to expiration (in years)
    r: 0.05,  // Risk-free rate
    sigma: 0.2, // Volatility
    N: 50     // Number of time steps
  });

  const [optionPrices, setOptionPrices] = useState({
    callPrices: [],
    putPrices: []
  });

  const handleOptionDataChange = (newOptionData) => {
    setOptionData(newOptionData);

    // Calculate option prices when parameters change
    const prices = calculateOptionPrices(newOptionData);
    setOptionPrices(prices);
  };

  return (
    <div className="App">
      <h1>Binomial Option Pricing Model Calculator</h1>
      <OptionForm optionData={optionData} onOptionDataChange={handleOptionDataChange} />
      <OptionPriceChart optionPrices={optionPrices} />
    </div>
  );
}

export default App;
