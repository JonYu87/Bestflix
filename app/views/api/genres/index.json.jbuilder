@genres.each do |genre|
  json.set! genre.id do 
    json.genre genre.name

    json.movies genre.movies.each do |movie|
        json.extract! movie, :id, :title, :description, :duration, :year, :rating
        json.poster url_for(movie.poster) 
        json.video url_for(movie.video)
    end
  end
end
# @genres.each do |genre|
#   json.set! genre.id do
#       json.partial! "genre", genre: genre
#   end
# end