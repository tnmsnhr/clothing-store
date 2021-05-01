import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga';
import logger from 'redux-logger';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25 }) : null || compose;

const sagaMiddleware = createSagaMiddleware()
const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store=createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export {store, persistor};