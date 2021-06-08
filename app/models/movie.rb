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

  has_one_attached :video
  has_one_attached :poster
end
