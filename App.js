import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Home from './Home';
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
}

export default App;