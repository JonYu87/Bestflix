# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre_id   :integer
#  movie_id   :integer
#
require 'test_helper'

class VideoGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
