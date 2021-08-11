class Api::ListsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :update, :destroy]

  def index
    @lists = current_user.lists
    @lists ? (render :index) : (render json: { error: 'No list' }, status: 422)
  end

  def show
    @list = List.find(params[:id])
    @list ? (render :show) : (render json: { error: 'No list' }, status: 422)
  end

  def create
    @list = List.new(list_params)
    @list.save ? (render :show) : (render json: @list.errors.full_messages, status: 422)
  end

  def destroy
    @list = List.find_by(movie_id: list_params[:movie_id], user_id: list_params[:user_id])
    List.destroy(@list.id) ? (render :show) : (render json: @list.errors.full_messages, status: 422)
  end

  def list_params
    params.require(:list).permit(:movie_id, :user_id)
  end
end
