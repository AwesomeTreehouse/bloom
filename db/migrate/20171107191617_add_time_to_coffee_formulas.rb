class AddTimeToCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_formulas, :time, :integer 
  end
end
