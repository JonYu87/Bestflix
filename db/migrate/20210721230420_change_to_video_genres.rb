class ChangeToVideoGenres < ActiveRecord::Migration[5.2]
  def change
    remove_column :video_genres, :video_id
    remove_column :video_genres, :genre_id
    add_column :video_genres, :video_id, :integer
    add_column :video_genres, :genre_id, :integer
  end
end
