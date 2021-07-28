# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  genre_id   :string           not null
#  video_id   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class VideoGenre < ApplicationRecord
  # validates :movie_id, :genre_id, presence: true

  belongs_to :movie,
  foreign_key: :movie_id,
  class_name: :Movie

  belongs_to :genre,
  foreign_key: :genre_id,
  class_name: :Genre
end
