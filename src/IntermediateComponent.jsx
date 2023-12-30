// IntermediateComponent.js
import React, { useEffect, useCallback } from 'react';
import { useObservable } from './ObservableContext';

const IntermediateComponent = () => {
  const observable = useObservable();
  const [dataReceived, setDataReceived] = React.useState([]);
  console.log('data--received--',dataReceived)
  const handleDataReceived = useCallback(data => {
    setDataReceived(prevData => [...prevData, data]);
  }, []);

  useEffect(() => {
    const unsubscribe = observable.subscribe(handleDataReceived);

    return () => {
      unsubscribe();
    };
  }, [observable, handleDataReceived]);

  return (
    <div>
      <h2>Intermediate Component</h2>
      <ul>
        {dataReceived.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default IntermediateComponent;