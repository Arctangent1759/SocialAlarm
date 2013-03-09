class ApplicationController < ActionController::Base
  protect_from_forgery
  def authenticate_user
    unless session[:user_id]
      flash[:notice] = "You need to sign up your name first before you can create or join an alarm"
      @user = User.new
      render "/home/new"
    end
    
    begin
      @alarm = Alarm.find(params[:id])
      if not @alarm.sessions.include?(session[:user_id])
        @alarm.sessions.push(session[:user_id])
        @alarm.expected_sessions.push(session[:user_id])
        @alarm.expected = @alarm.expected + 1
        @alarm.save
      end
    rescue
    end
  end
  
  
end
