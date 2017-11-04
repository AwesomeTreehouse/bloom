class AddNoteToCoffeeFormulas < ActiveRecord::Migration[5.1]
  def change
    add_column :coffee_formulas, :note, :string 
  end
end
