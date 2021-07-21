class EditVideoGenre < ActiveRecord::Migration[5.2]
  def change
    remove_column :video_genres, :video_id
    add_column :video_genres, :movie_id, :integer
  end
end
