import * as GenreAPIUtil from "../util/genres_api_util";
export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres,
  };
};

export const fetchGenres = () => (dispatch) => {
  return GenreAPIUtil.fetchGenres().then((genres) =>
    dispatch(receiveGenres(genres))
  );
};
