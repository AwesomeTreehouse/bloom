class AddColumnsToCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_formulas, :ratio, :string, null: false
    add_column :coffee_formulas, :measurement, :string, null: false
  end
end
