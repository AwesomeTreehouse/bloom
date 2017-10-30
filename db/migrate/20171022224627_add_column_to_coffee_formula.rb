class AddColumnToCoffeeFormula < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_formulas, :minutes, :integer, null: false
    add_column :coffee_formulas, :seconds, :integer, null: false
  end
end
