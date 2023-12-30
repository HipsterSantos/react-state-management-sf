// App.js
import React from 'react';
import { ObservableProvider } from './ObservableContext';
import ProducerComponent from './ProducerComponent';
import IntermediateComponent from './IntermediateComponent.jsx';
import ConsumerComponent from './ConsumerComponent';

const App = () => {
  return (
    <ObservableProvider>
      <div>
        <ProducerComponent />
        <IntermediateComponent />
        <ConsumerComponent />
      </div>
    </ObservableProvider>
  );
};

export default App;
