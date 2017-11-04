require 'rails_helper'

RSpec.describe CoffeeFormula, type: :model do
  it { should belong_to(:user) }
  it { should validate_presence_of(:ratio) }
end
