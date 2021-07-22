@genres.each do |genre|
  json.genre genre.name 
  json.movies genre.movies 
end