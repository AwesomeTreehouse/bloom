# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CoffeeFormula.create(
  coffee_weight: 16,
  water_weight: 256,
  grind: "Medium",
  tool: "AeroPress",
  user_id: 1,
  minutes: 1,
  seconds: 30,
  time: 5000,
  ratio: "16:1",
  measurement: "grams",
  beans: "Ethiopian",
  note: "Very good. Nice fruity flavor."
)

CoffeeFormula.create(
  coffee_weight: 40,
  water_weight: 640,
  grind: "Medium-Fine",
  tool: "Hario (V60)",
  user_id: 1,
  minutes: 4,
  seconds: 0,
  time: 5000,
  ratio: "16:1",
  measurement: "grams",
  beans: "Mexican",
  note: "Chocolatey but a little over extracted."
)

CoffeeFormula.create(
  coffee_weight: 40,
  water_weight: 640,
  grind: "Medium",
  tool: "Sowden SoftBrew",
  user_id: 1,
  minutes: 4,
  seconds: 10,
  time: 5000,
  ratio: "16:1",
  measurement: "grams",
  beans: "Guatemalan (Medium Roast)",
  note: "Chocolatey but a little over extracted."
)

CoffeeFormula.create(
  coffee_weight: 30,
  water_weight: 480,
  grind: "Medium-Coarse",
  tool: "Sowden SoftBrew",
  user_id: 1,
  minutes: 4,
  seconds: 0,
  ratio: "16:1",
  time: 5000,
  measurement: "grams",
  beans: "Guatemalan (Medium Roast)",
  note: "Decent body. Might try finer grind next time."
)
