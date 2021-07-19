class VideoGenre < ApplicationRecord
  belongs_to :movie,
  foreign_key: :movie_id,
  class_name: Movie

  belongs_to :genre,
  foreign_key: :genre_id,
  class_name: Genre
end
