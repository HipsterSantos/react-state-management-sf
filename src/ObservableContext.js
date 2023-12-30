// ObservableContext.js
import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

const ObservableContext = createContext();

const ActionTypes = {
  SUBSCRIBE: 'SUBSCRIBE',
  UNSUBSCRIBE: 'UNSUBSCRIBE',
  NOTIFY: 'NOTIFY',
};

const observableReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SUBSCRIBE:
      return { ...state, subscribers: [...state.subscribers, action.payload] };
    case ActionTypes.UNSUBSCRIBE:
      return { ...state, subscribers: state.subscribers.filter(subscriber => subscriber !== action.payload) };
    case ActionTypes.NOTIFY:
      state.subscribers.forEach(subscriber => subscriber(action.payload));
      return state;
    default:
      return state;
  }
};

export const useObservable = () => {
  return useContext(ObservableContext);
};

export const ObservableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(observableReducer, { subscribers: [] });

  const subscribe = useCallback(subscriber => {
    dispatch({ type: ActionTypes.SUBSCRIBE, payload: subscriber });

    return () => {
      dispatch({ type: ActionTypes.UNSUBSCRIBE, payload: subscriber });
    };
  }, []);

  const notify = useCallback(data => {
    dispatch({ type: ActionTypes.NOTIFY, payload: data });
  }, []);

  const contextValue = {
    subscribe,
    notify,
  };

  return (
    <ObservableContext.Provider value={contextValue}>
      {children}
    </ObservableContext.Provider>
  );
};
