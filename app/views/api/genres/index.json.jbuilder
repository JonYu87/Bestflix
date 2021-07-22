# @genres.each do |genre|
#   json.set! genre.id do 
#     json.genre genre.name
#     json.movies genre.movies
#   end
# end
@genres.each do |genre|
  json.set! genre.id do
      json.partial! "genre", genre: genre
  end
end
