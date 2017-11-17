require 'rails_helper'

RSpec.describe Api::V1::CoffeeFormulasController, type: :controller do

  describe "GET#index" do
    it "retrives coffee formulas" do
      get :index
      returned_json = JSON.parse(response.body)
      first = returned_json["coffee_formulas"][0]
      second = returned_json["coffee_formulas"][1]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    end
  end
end

# RSpec.describe 'API V1 CoffeeFormulas', type: 'request' do
#   describe "POST /api/v1/coffee_formulas" do
#     context "with valid parameters" do
#
#       let(:valid_params) do
#         {
#           coffee_formula: {
#             user_id: 1,
#             bean: 'Test Bean',
#             tool: 'AeroPress',
#             grind: 'Meduim',
#             measurement: 'grams',
#             ratio: '16:1',
#             coffee_weight: 16,
#             water_weight: 256,
#             minutes: 1,
#             seconds: 30,
#             time: 13000,
#             note: 'Good!'
#           }
#         }
#       end
#
#       it "creates a new coffee formula" do
#         expect { post "/api/v1/coffee_formulas", params: valid_params }.to change(CoffeeFormula.all, :count).by(+1)
#         expect(response).to have_http_status :created
#         returned_json = JSON.parse(response.body)
#       end
#     end
#   end
# end
