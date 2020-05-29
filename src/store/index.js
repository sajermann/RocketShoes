import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = 
process.env.NODE_ENV === 'development' ?
compose(
  applyMiddleware(sagaMiddleware)
)
: applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;