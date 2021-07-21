class VideoGenre < ApplicationRecord
  validates :video_id, :genre_id, presence: true

  belongs_to :movie,
  foreign_key: :video_id,
  class_name: 'Movie'

  belongs_to :genre,
  foreign_key: :genre_id,
  class_name: 'Genre'
end
