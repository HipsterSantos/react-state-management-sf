
// IntermediateComponent.js
import React, { useEffect } from 'react';
import { useObservable } from './ObservableContext';

const IntermediateComponent = () => {
  const observable = useObservable();
  const [dataReceived, setDataReceived] = React.useState([]);
    console.log('data--received--',dataReceived)
  useEffect(() => {
    const unsubscribe = observable.subscribe(data => {
      setDataReceived(prevData => [...prevData, data]);
    });

    return () => {
      unsubscribe();
    };
  }, [observable]);

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