class Note < ApplicationRecord
  validates :description, length: { maximum: 500 }

  belongs_to :coffee_formula
end
