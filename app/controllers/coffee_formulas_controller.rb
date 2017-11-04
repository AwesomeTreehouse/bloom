class CoffeeFormulasController < ApplicationController
  before_action :authorize_user, except: [:index]

  def index
    @coffee_formulas = CoffeeFormula.all
    if current_user
      @user = current_user.id
    else
      @user = nil
    end
  end

  def show
    coffee_formula = CoffeeFormula.find(params[:id])
    if current_user
      @user = current_user.id
    else
      @user = nil
    end
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
