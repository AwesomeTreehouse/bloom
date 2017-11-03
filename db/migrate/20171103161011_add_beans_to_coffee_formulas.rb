class AddBeansToCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_formulas, :beans, :string
  end
end
