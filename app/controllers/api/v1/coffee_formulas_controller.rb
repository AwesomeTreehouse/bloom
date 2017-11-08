module Api
  module V1
    class CoffeeFormulasController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]

      def index
        if current_user
          formulas = current_user.coffee_formulas
          render json: { status: 'SUCCESS', message: 'Loaded coffee formulas', coffee_formulas: formulas, current_user: current_user }, status: :ok
        else
          current_user = "none"
          formulas = CoffeeFormula.all
          render json: { status: 'SUCCESS', message: 'Loaded coffee formulas', coffee_formulas: formulas, current_user: current_user }, status: :ok
        end
      end

      def show
        formula = current_user.coffee_formulas.find(params[:id])
        render json: { status: 'SUCCESS', message: 'Loaded coffee formula', coffee_formula: formula }, status: :ok
      end

      def create
        formula = current_user.coffee_formulas.new(coffee_formula_params)
        if formula.save
          render json: { status: 'SUCCESS', message: 'Saved new coffee formula', coffee_formulas: formula }, status: :created
        else
          head :unprocessable_entity
        end
      end

    private
      def coffee_formula_params
        params.require(:formula).permit(:coffee_weight, :water_weight, :ratio, :grind, :tool, :bean, :minutes, :seconds, :time, :measurement, :note)
      end

    end
  end
end
