export const fetchLists = (userId) => {
  return $.ajax({
    url: `api/lists`,
  });
};

export const addToList = (list) => {
  return $.ajax({
    url: `api/lists`,
    method: "POST",
    data: { list },
  });
};

export const removeFromList = (list) => {
  return $.ajax({
    url: `api/lists/${list.movie_id}`,
    method: "DELETE",
    data: { list },
  });
};
