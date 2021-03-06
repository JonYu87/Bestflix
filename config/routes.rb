Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :movies, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :genres, only: [:index, :show]
    resources :lists, only: [:index, :create, :show, :update, :destroy]

  end


  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
