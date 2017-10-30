class CoffeeFormula < ApplicationRecord
  validates_presence_of :coffee_ratio, :water_ratio, :grind, :tool, :beans, :minutes, :seconds

  validates_numericality_of :coffee_ratio, :water_ratio, :coffee_weight, :water_weight, :minutes, :seconds

  belongs_to :user
  has_one :note
end
