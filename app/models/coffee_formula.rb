class CoffeeFormula < ApplicationRecord
  validates_presence_of :ratio, :grind, :tool, :minutes, :seconds, :measurement
  validates_numericality_of :coffee_weight, :water_weight, :minutes, :seconds

  belongs_to :user
end
