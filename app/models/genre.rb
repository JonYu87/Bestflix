# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :video_genres,
  foreign_key: :genre_id,
  class_name: :VideoGenre

  has_many :movies,
  through: :video_genres,
  source: :movie
end
