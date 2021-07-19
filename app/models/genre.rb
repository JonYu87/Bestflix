class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :movie_genres,
  foreign_key: genre_id,
  class_name: VideoGenre

  has_many :movies,
  through: :movie_genres,
  source: :video
end
