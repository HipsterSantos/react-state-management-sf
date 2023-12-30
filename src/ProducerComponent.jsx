// ProducerComponent.js
import React, { useState } from 'react';
import { useObservable } from './ObservableContext';

const ProducerComponent = () => {
  const observable = useObservable();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    observable.notify(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Send Data</button>
    </div>
  );
};

export default ProducerComponent;