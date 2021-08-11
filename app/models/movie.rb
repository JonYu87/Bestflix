# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  duration    :string           not null
#  year        :integer          not null
#  rating      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Movie < ApplicationRecord
  validates :title, :description, :duration, :year, :rating, presence: true

  has_many :video_genres,
  foreign_key: :movie_id,
  class_name: :VideoGenre
  
  has_many :genres,
  through: :video_genres,
  source: :genre

  has_many :lists,
    foreign_key: :movie_id,
    class_name: :List

  has_one_attached :video
  has_one_attached :poster
end
