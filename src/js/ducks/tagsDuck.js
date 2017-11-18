export const SET_ALL_TAGS = 'SET_ALL_TAGS';

export const selectAllTags = state => state.tagsReducer;

export function setAllTagsAction(tags) {
  return {
    type: SET_ALL_TAGS,
    tags,
  };
}

export default function tagsReducer(state = [], action) {
  if (action.type === SET_ALL_TAGS) {
    console.log('store');
    console.log(action);
    return action.tags;
  }
  return state;
}
