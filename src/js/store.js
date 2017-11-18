import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import articlesReducer, { getArticlesSaga } from './ducks/articlesDuck';
import tagsReducer from './ducks/tagsDuck';

const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({ articlesReducer, tagsReducer });

const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleWare)),
);

function* rootSaga() {
  yield [
    spawn(getArticlesSaga),
  ];
}

sagaMiddleWare.run(rootSaga);

export default store;
