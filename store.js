import { createStore } from "redux";
import { persistStore, persistReducer, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from 'react-native'
import rootReducer from './reducers'
import createSecureStore from "redux-persist-expo-securestore";
// import storeConstants from './constants'

// const store = createStore(rootReducer, storeConstants.DEF_STORE); 

const storage = createSecureStore();
 
const config = {
  key: "root",
  storage
};
 
const reducer = persistCombineReducers(config, rootReducer);
 
function configureStore() {

  const store = createStore(reducer);
  const persistor = persistStore(store);
 
  return { persistor, store };
}

// const getStore = () => store;
// const getState = () => {
//     return store.getState();
// };
// export { getStore, getState };
export { configureStore };
export default { getStore, getState,}