class Api::MoviesController < ApplicationController

  def index 
    @movies = Movie.all 
    render :index
  end

  def show

    @movie = Movie.find(params[:id])

    if @movie
      render :show
    else
      render @movie.errors.full.messages, 404
    end
  end
  

 
end
