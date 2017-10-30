class RemoveDescriptionFromCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    remove_column :coffee_formulas, :description
  end
end
