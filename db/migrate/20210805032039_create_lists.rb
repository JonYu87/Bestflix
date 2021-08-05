class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :movie_id, null: false
      t.string :user_id, null: false
      t.timestamps
    end
    add_index :lists, :movie_id, unique: true
    add_index :lists, :user_id, unique: true
  end
end
