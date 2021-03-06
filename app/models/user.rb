# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token
  attr_reader :password

  has_many :lists,
    class_name: 'List',
    foreign_key: 'user_id'
  
  has_many :movies,
    through: :lists,
    source: :movie

  def self.find_by_credentials(email, password)
      @user = User.find_by(email: email)
      if @user && @user.is_password?(password)
        return @user
      else
        return nil
      end
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pw_ob = BCrypt::Password.new(self.password_digest)
    pw_ob.is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  def ensure_session_token 
    self.session_token ||= SecureRandom.base64
  end
  
end
