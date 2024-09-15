attribute @s generic.knockback_resistance base set 0.75

execute if predicate math:chance/10 run item replace entity @s armor.head with netherite_helmet{Enchantments:[{id:"minecraft:fire_protection",lvl:3},{id:"minecraft:vanishing_curse",lvl:1}],Trim:{material:gold,pattern:snout}}
execute if predicate math:chance/10 run item replace entity @s armor.chest with netherite_chestplate{Enchantments:[{id:"minecraft:thorns",lvl:2},{id:"minecraft:vanishing_curse",lvl:1}],Trim:{material:gold,pattern:snout}}
execute if predicate math:chance/10 run item replace entity @s armor.legs with netherite_chestplate{Enchantments:[{id:"minecraft:projectile_protection",lvl:3},{id:"minecraft:vanishing_curse",lvl:1}],Trim:{material:gold,pattern:snout}}
execute if predicate math:chance/10 run item replace entity @s armor.feet with netherite_boots{Enchantments:[{id:"minecraft:soul_speed",lvl:2},{id:"minecraft:vanishing_curse",lvl:1}],Trim:{material:gold,pattern:snout}}

execute if predicate math:chance/25 run item replace entity @s weapon.mainhand with golden_axe{Enchantments:[{id:"minecraft:knockback",lvl:1}]}
execute if predicate math:chance/10 run item replace entity @s weapon.mainhand with golden_axe{Enchantments:[{id:"minecraft:knockback",lvl:2}]}

tag @s add upgradedmobs.boosted
