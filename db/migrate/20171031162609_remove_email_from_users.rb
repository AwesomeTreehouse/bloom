class RemoveEmailFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, column: :email
  end
end
