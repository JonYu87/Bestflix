json.extract! @movie, :id, :title, :description, :rating, :year, :duration

json.poster url_for(@movie.poster) if
@movie.poster.attached?

json.video url_for(@movie.video) if
@movie.video.attached?