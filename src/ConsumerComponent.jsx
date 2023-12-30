// ConsumerComponent.js
import React, { useEffect, useCallback } from 'react';
import { useObservable } from './ObservableContext';

const ConsumerComponent = () => {
  const observable = useObservable();
  const [lastDataReceived, setLastDataReceived] = React.useState('');

  const handleDataReceived = useCallback(data => {
    setLastDataReceived(data);
  }, []);

  useEffect(() => {
    const unsubscribe = observable.subscribe(handleDataReceived);

    return () => {
      unsubscribe();
    };
  }, [observable, handleDataReceived]);

  return (
    <div>
      <h2>Consumer Component</h2>
      <p>Last Data Received: {lastDataReceived}</p>
    </div>
  );
};
export default ConsumerComponent;