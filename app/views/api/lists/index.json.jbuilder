arr = [];

@lists.each do |list|
    arr.push(list.movie_id);
end

json.movie_ids arr