import React, { useEffect } from 'react';
import { useObservable } from './ObservableContext';

const ConsumerComponent = () => {
  const observable = useObservable();
  const [lastDataReceived, setLastDataReceived] = React.useState('');

  useEffect(() => {
    const unsubscribe = observable.subscribe(data => {
      setLastDataReceived(data);
    });

    return () => {
      unsubscribe();
    };
  }, [observable]);

  return (
    <div>
      <h2>Consumer Component</h2>
      <p>Last Data Received: {lastDataReceived}</p>
    </div>
  );
};

export default ConsumerComponent;