import React from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import Home from './Home';
// import logger from 'redux-logger'
// import {getStore} from './store';
import {configureStore} from './store';
// const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
  // const store = getStore()
  const { persistor, store} = configureStore()
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
}

export default App;