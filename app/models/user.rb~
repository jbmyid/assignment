class User < ActiveRecord::Base

  has_many :contacts, :dependent=>:destroy
  validates :username, :presence=>{:message=>"Please enter username."},
		:format=>{:with => /^[A-Za-z]+$/ ,:message=>"Username should conatin only letters."},
		:uniqueness=>{:message=>"Usename already exist."},
		:length=>{:maximum=>50, :message=>"Please enter username of maximum 50 characters."}
  validates :password, :presence=>{:message=>"Please enter password."},
		:length=>{:minimum=>6, :maximum=>32, :message=>"Please enter password between 6 to 32 characters."}

  before_save :set_hash_password

  def set_hash_password
      self.password = encrypt_string(self.password)
  end

  private

  
  def self.encrypt_string(string)
	encrypted = Digest::SHA2.hexdigest(string)
  end

  def self.authenticate(username,pass)
    pass = User.encrypt_string(pass)
    User.find(:first,:conditions=>["username=? and password=?",username,pass])
  end

  

end
