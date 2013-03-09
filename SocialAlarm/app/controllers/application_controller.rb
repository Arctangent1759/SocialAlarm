class ApplicationController < ActionController::Base
  protect_from_forgery
  def authenticate_user
    @alarm = Alarm.find(params[:id])
    unless session[:user_id]
      session[:user_id] = rand(1..100000)
      @alarm.sessions.push(session[:user_id])
      @alarm.expected_sessions.push(session[:user_id])
      @alarm.expected = @alarm.expected + 1
      @alarm.save
    end
  end
end
