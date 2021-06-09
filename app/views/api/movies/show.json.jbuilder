json.extract! @movie, :id, :title, :description, :year, :rating

json.poster url_for(@movie.poster)

json.video url_for(@movie.video)