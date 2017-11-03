class RemoveColumnsFromCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    remove_column :coffee_formulas, :coffee_ratio
    remove_column :coffee_formulas, :water_ratio
  end
end
