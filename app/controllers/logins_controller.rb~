class LoginsController < ApplicationController
  #before_filter :login_required
  def home
	@user = User.new
	@log_user = User.new
  end
  

  def register
    if request.post? 
	@user = User.new(params[:user])
	if @user.save 
		set_session(@user)
		redirect_to :action=>:home
    	else
		@log_user = User.new
		render :action=>:home
	end
    else
	redirect_to :action=>:home
    end
  end

  def logout
	clear_session
	redirect_to :controller=>:logins, :action=>:home
  end

  def login
     if request.post? 
	@log_user = User.authenticate(params[:user][:username],params[:user][:password])
	if !@log_user.nil?
		set_session(@log_user)
        else
		flash[:login_error] = "Username or password is invalid. Please try again."
	end
     end
	redirect_to :controller=>:logins, :action=>:home	
  end
end
