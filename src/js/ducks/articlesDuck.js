import { takeLatest, call, put } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';
import { SET_ALL_TAGS, setAllTagsAction } from './tagsDuck';
import request from '../api/request';


/* Selectors */
const getArticlesState = state => state.articlesReducer;

export const selectArticles = createSelector([getArticlesState], state => state.get('articlesList'));
export const selectArticlesLoading = createSelector([getArticlesState], state => state.get('articlesLoading'));
export const selectArticlesError = createSelector([getArticlesState], state => state.get('articlesError'));

/* Constans */
const GET_ARTICLES = 'GET_ARTICLES';
const SET_ARTICLES = 'SET_ARTICLES';

/* Actions */
export function getArticlesAction() {
  return ({
    type: GET_ARTICLES,
  });
}

export function setArticlesAction(articles) {
  return {
    type: SET_ARTICLES,
    articles,
  };
}

/* Saga */
export function* getArticlesSaga() {
  yield takeLatest(GET_ARTICLES, sagaHandler);
}

export function* sagaHandler() {
  const { data } = yield call(request.getItems);
  if (data) {
    const articlesList = [];
    const tagsList = new Set();
    if (data.list) {
      Object.keys(data.list).map((key) => {
        const article = data.list[key];
        if (article.tags) {
          Object.keys(article.tags).map(tagName => tagsList.add(tagName));
        }
        articlesList.push(data.list[key]);
      });
    }
    console.log('Loggin tags list');
    console.log(Array.from(tagsList.values()));
    yield put(setAllTagsAction(Array.from(tagsList.values())));
    yield put(setArticlesAction(articlesList));
  }
}

const initialState = new Map({
  articlesLoading: true,
  articlesList: new List(),
});

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ARTICLES': {
      let newState = state.set('articlesList', new List(action.articles));
      newState = newState.set('articlesLoading', false);
      return newState;
    }
    default:
      return state;
  }
}
