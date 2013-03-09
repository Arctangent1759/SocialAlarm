class Alarm < ActiveRecord::Base
  before_save :default_values
  def default_values
    self.expected ||= 0
    self.expected_sessions ||= []
    self.sessions ||= []
  end
    
  serialize :sessions
  serialize :expected_sessions
  attr_accessible :name,:description, :alarm_time, :expected, :expected_sessions, :sessions
end
