json.array! @movies do |movie|
  json.extract! movie, :id, :title, :description, :duration, :year, :rating
  json.poster url_for(movie.poster) 
  json.video url_for(movie.video)
end