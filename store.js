import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native'
import rootReducer from './reducers'
// import storeConstants from './constants'

// const store = createStore(rootReducer, storeConstants.DEF_STORE); 
const store = createStore(rootReducer); 
const getStore = () => store;
const getState = () => {
    return store.getState();
};
export { getStore, getState,};
export default { getStore, getState,}