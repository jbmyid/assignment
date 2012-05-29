class Contact < ActiveRecord::Base

  belongs_to :user

  email_regex = /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
  validates :name, :presence=>{:message=>"Please enter name."},
		:length=>{:maximum=>50, :message=>"Please enter name of maximum 50 characters."}
  validates :email, :presence=>{:message=>"Please enter email."},
			:format   => { :with => email_regex, :message=>"Please enter valid email address." }
  validates :short_info, :presence=>{:message=>"Please enter short info."},
		:length=>{:maximum=>500, :message=>"Please enter short info of maximum 500 characters."}

end

