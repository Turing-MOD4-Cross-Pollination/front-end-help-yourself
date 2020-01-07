import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import Home from './Home';
// import logger from 'redux-logger'
// import {getStore} from './store';
import { store, persistor } from './store';
// const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
}

export default App;