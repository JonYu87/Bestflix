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
require 'test_helper'

class VideoGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
