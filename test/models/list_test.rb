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
require 'test_helper'

class ListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
