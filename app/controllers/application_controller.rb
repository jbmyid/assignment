class ApplicationController < ActionController::Base
  protect_from_forgery
  def set_session(user)
	session[:user] = user
  end

  def login_required
	if session[:user].nil?
		redirect_to :controller=> :logins, :controller=>:home
      	else
		@login_user = session[:user]
	end
  end

  def clear_session
	session[:user] = nil
  end
end
