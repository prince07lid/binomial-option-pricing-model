import React from 'react';

const OptionForm = ({ optionData, onOptionDataChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onOptionDataChange({ ...optionData, [name]: parseFloat(value) });
  };

  return (
    <div>
      <label>
        Current Asset Price (S):
        <input type="number" name="S" value={optionData.S} onChange={handleChange} />
      </label>
      <br />
      <label>
        Strike Price (K):
        <input type="number" name="K" value={optionData.K} onChange={handleChange} />
      </label>
      <br />
      <label>
        Time to Expiration (T):
        <input type="number" name="T" value={optionData.T} onChange={handleChange} />
      </label>
      <br />
      <label>
        Risk-free Rate (r):
        <input type="number" name="r" value={optionData.r} onChange={handleChange} />
      </label>
      <br />
      <label>
        Volatility (sigma):
        <input type="number" name="sigma" value={optionData.sigma} onChange={handleChange} />
      </label>
      <br />
      <label>
        Number of Time Steps (N):
        <input type="number" name="N" value={optionData.N} onChange={handleChange} />
      </label>
    </div>
  );
};

export default OptionForm;
