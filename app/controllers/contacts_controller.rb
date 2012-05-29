class ContactsController < ApplicationController
  before_filter :login_required
  def index
	#@contacts = @login_user.contacts
	@contacts = Contact.find(:all,:conditions=>["user_id=?",@login_user.id])
	@contact = Contact.new
  end

  def create
  	@contact = Contact.new(params[:contact])
	@contact.user_id = @login_user.id 
	if @contact.save
		flash[:message] = "Contact added successfuly."
		redirect_to :action=>:index
	else
		@contacts = @login_user.contacts 
		render :action=>:index
	end
  end

  def edit
	@contact = Contact.find(params[:id])
	render :partial=>"edit_form"
  end

  def update
	@contact = Contact.find(params[:id])
 	@contact.update_attributes(params[:contact])
	  respond_to do |format|
	      format.js
	  end
  end
end
