json.array! @lists.each do |list|
  json.extract! list, :movie_id
end