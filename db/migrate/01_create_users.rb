class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :limit=>50
      t.string :password

      t.timestamps
    end
  end
end
