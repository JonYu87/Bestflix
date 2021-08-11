class EditList < ActiveRecord::Migration[5.2]
  def change
    remove_index :lists, :user_id
  end
end
