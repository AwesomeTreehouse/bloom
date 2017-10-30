class CoffeeFormulasController < ApplicationController

  def index
    @coffee_formulas = CoffeeFormula.all
  end

  def show
    @coffee_formula = CoffeeFormula.find(params[:id])
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
