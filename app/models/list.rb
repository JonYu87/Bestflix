# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  movie_id   :string           not null
#  user_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
  validates :movie_id, uniqueness: { scope: :user_id }

  belongs_to :movie,
    class_name: 'Movie',
    foreign_key: 'movie_id'

  belongs_to :user,
    class_name: 'User',
    foreign_key: 'user_id'
end
