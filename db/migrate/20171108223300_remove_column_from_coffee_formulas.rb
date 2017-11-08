class RemoveColumnFromCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    remove_column :coffee_formulas, :beans
  end
end
