class Api::GenresController < ApplicationController
  def index 
    @genres = Genre.all.joins(:movies)
    render :index 
  end
end
