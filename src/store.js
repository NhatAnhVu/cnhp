import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer.js';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import positionSlice from './reducers/positionSlice.js';
import overViewReducer from './reducers/overViewSlice.js';

const authPersistConfig = {
    key: 'auth',
    storage
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    overView: overViewReducer, //add OverviewSlice,
    position: positionSlice
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

const persistor = persistStore(store);

export { store, persistor };
