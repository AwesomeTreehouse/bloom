class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, presence: true
  validates :email, presence: true

  has_many :coffee_formulas

  def admin?
    role == "admin"
  end
end
