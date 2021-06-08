json.array! @movies do |movie|
  json.extract! movie, :id, :title, :description, :duration, :year, :rating
  json.posterUrl url_for(movie.poster)
  json.videoUrl url_for(movie.video)
end