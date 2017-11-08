Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  root 'coffee_formulas#index'

  namespace :api do
    namespace :v1 do
      resources :coffee_formulas, only: [:index, :show, :create, :destroy]
      resources :static_pages, only: [:index, :create]
    end
  end

  get '*path', to: 'coffee_formulas#index'
end
