import * as ListAPIUtil from "../util/list_api_util";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};

const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list,
  };
};

const updateList = (listId, movieId) => {
  return {
    type: UPDATE_LIST,
    list,
  };
};

const removeFromList = (movieId) => {
  return {
    type: REMOVE_FROM_LIST,
    movieId,
  };
};

export const fetchLists = () => (dispatch) => {
  return ListAPIUtil.fetchLists().then((lists) =>
    dispatch(receiveLists(lists))
  );
};

export const addToList = (list) => (dispatch) => {
  return ListAPIUtil.addToList(list).then((list) =>
    dispatch(receiveList(list))
  );
};


export const deleteFromList = (list) => (dispatch) => {
  return ListAPIUtil.removeFromList(list).then(() =>
    dispatch(removeFromList(list.movie_id))
  );
};
