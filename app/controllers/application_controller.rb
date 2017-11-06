class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

end
