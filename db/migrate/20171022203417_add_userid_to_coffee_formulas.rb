class AddUseridToCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    add_reference :coffee_formulas, :user, foreign_key: true
  end
end
