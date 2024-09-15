effect give @s weakness 5 1
execute if predicate math:chance/50 run effect give @s slowness 5 1
execute if predicate math:chance/25 run effect give @s blindness 5 1

particle minecraft:enchanted_hit ~ ~ ~ 0 0 0 0.75 50
playsound minecraft:entity.evoker.cast_spell hostile @a ~ ~ ~ 2 0.7
