class CreateCoffeeFormula < ActiveRecord::Migration[5.1]
  def change
    create_table :coffee_formulas do |t|
      t.integer :coffee_weight
      t.integer :water_weight
      t.integer :coffee_ratio, null: false
      t.integer :water_ratio, null: false
      t.string :grind, null: false
      t.string :tool, null: false
      t.string :beans, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
