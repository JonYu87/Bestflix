class CreateVideoGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :video_genres do |t|
      t.string :genre_id, null:false
      t.string :video_id, null:false
      t.timestamps
    end
  end
end
