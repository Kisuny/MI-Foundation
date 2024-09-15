execute if predicate math:chance/25 run data merge entity @s {Item:{id:"minecraft:lingering_potion"}}

execute if entity @p[distance=..9] if predicate math:chance/10 run data merge entity @s {Item:{tag:{Potion:"minecraft:blindness",CustomPotionEffects:[{Id:15,Duration:120}]}}}

tag @s add upgradedmobs.witches.potion
