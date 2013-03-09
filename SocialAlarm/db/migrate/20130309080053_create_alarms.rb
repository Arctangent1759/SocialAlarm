class CreateAlarms < ActiveRecord::Migration
  def change
    create_table :alarms do |t|
      t.string :name
      t.datetime :alarm_time
      t.integer :expected
      t.text :sessions
      t.text :expected_sessions
      t.text :description

      t.timestamps
    end
  end
end
