class CoffeeFormula < ApplicationRecord
  validates_presence_of :ratio, :grind, :tool, :minutes, :seconds, :measurement, :time
  validates_numericality_of :coffee_weight, :water_weight, :minutes, :seconds, :time

  belongs_to :user
end
