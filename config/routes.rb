Rails.application.routes.draw do
  devise_for :users
  root 'coffee_formulas#index'

  namespace :api do
    namespace :v1 do
      resources :coffee_formulas, only: [:index, :show, :create]
    end
  end
end
