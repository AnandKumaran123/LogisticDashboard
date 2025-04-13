import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import alertsReducer from "../Alert/alertSlice"

// Combine reducers
const rootReducer = {
    alert: alertsReducer,

};

// Configure store with redux-logger, redux-thunk, and devtools
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger), // Add your middleware here

});

export default store;

/**
 *configureStore: This is Redux Toolkit’s method that wraps createStore, handles the default middleware (including redux-thunk), and integrates well with Redux DevTools.
 *rootReducer: Instead of combineReducers, you pass an object of reducers, which configureStore handles internally.
 *middleware: getDefaultMiddleware() includes essential middleware like redux-thunk. You can extend it by concatenating custom middleware like redux-logger.
*This approach simplifies the process compared to manually configuring everything with createStore.
 */
