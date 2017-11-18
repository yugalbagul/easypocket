import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { selectArticles, setArticlesAction } from './articlesDuck';


export const ADD_SEARCH_TAGS = 'search/ADD_SEARCH_TAGS';

export function addSearchTagsAction(tag) {
  return {
    type: ADD_SEARCH_TAGS,
    tag,
  };
}

export function* addSearchTagsSaga() {
  yield takeEvery(ADD_SEARCH_TAGS, addSearchTagsHandler);
}

export function* addSearchTagsHandler({ tag }) {
  try {
    const articlesList = yield select(selectArticles);
    const newArticlesList = [];
    articlesList.map((article) => {
      if (article.tags) {
        if (Object.keys(article.tags).some(key => key === tag)) {
          newArticlesList.push(article);
        }
      }
    });
    yield put(setArticlesAction(newArticlesList));
  } catch (err) {
    console.error(err);
  }
}
