module Api
  module V1
    class CoffeeFormulaController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]

      def index
        formulas = CoffeeFormula.all
        render json: { status: 'SUCCESS', message: 'Loaded coffee formulas', coffee_formulas: formulas }, status: :ok
      end

      def show
        formula = CoffeeFormula.find(params[:id])
        render json: { status: 'SUCCESS', message: 'Loaded coffee formula', coffee_formulas: formula }, status: :ok
      end

      def create
        formula = CoffeeFormula.new(coffee_formula_params)
        if formula.save
          render json: { status: 'SUCCESS', message: 'Saved new coffee formula', coffee_formula: formula }, status: :ok
        end
      end

      private
      def coffee_formula_params
        params.require(:coffee_formula).permit(:coffee_weight, :water_weight, :coffee_ratio, :water_ratio, :grind, :tool, :beans, :description)
      end

    end
  end
end
