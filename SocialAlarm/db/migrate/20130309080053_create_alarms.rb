class CreateAlarms < ActiveRecord::Migration
  def change
    create_table :alarms do |t|
      t.datetime :alarm_time
      t.integer :expected
      t.text :sessions
      t.text :expected

      t.timestamps
    end
  end
end
