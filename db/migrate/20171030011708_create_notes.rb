class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.text :description, null: false

      t.belongs_to :coffee_formula
      t.timestamps
    end
  end
end
