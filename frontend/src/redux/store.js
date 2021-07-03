import {createStore, combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import {authReducer} from "./auth/auth.reducer";

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export default createStore(
    persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

