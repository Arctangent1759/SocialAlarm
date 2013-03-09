class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])

    respond_to do |format|
      if @user.save
        format.html { redirect_to alarms_path, notice: 'User was successfully created.' }
        format.json { render json: @user, status: :created, location: alarms_path }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
    session[:user_id] = @user.id
    session[:username] = @user.username
  end
end
