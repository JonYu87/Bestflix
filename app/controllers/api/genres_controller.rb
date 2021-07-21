class Api::GenresController < ApplicationController
  def index 
    @genres = Genre.all.include(:movies)
    render :index 
  end
end
