Rails.application.routes.draw do
  get 'posts/index'
  root to: "posts#index"
  get 'posts', to: "posts#index"
end
