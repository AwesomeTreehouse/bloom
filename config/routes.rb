Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  root 'coffee_formulas#index'

  namespace :api do
    namespace :v1 do
      resources :coffee_formulas, only: [:index, :show, :create, :update, :destroy]
      post '/roasters', to: 'roasters#find_coffee'
    end
  end

  get '*path', to: 'coffee_formulas#index'
end
