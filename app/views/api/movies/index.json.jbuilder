json.array! @movies do |movie|
  json.extract! movie, :id, :title, :description, :duration, :year, :rating
  json.photoUrl url_for(movie.photo)
  #json.videoUrl url_for(movie.video)??
end