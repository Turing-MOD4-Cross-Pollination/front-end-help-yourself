import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from "redux-persist";
import AsyncStorage from 'react-native';
import rootReducer from './reducers'
import createSecureStore from "redux-persist-expo-securestore";
// import storeConstants from './constants'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
// const storage = createSecureStore();

const config = {
  key: "root",
  storage
};

const reducer = persistReducer(config, rootReducer);


export const store = createStore(reducer)
export const persistor = persistStore(store)





// function configureStore() {

//   const store = createStore(reducer);
//   const persistor = persistStore(store);
 
//   return { persistor, store };
// }


// export { configureStore };
