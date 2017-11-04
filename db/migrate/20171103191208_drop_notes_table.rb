class DropNotesTable < ActiveRecord::Migration[5.1]
  def change
    def up
      drop_table :notes
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end
  end
end
