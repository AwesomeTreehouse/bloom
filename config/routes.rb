Rails.application.routes.draw do
  root 'coffee_formulas#index'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :coffee_formulas, only: [:index, :show, :create]
    end
  end
end
