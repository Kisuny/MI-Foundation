effect give @s levitation 1 20 true
playsound minecraft:entity.ravager.attack hostile @a ~ ~ ~ 1 1.075

tag @s add upgradedmobs.piglin_brutes.thrown
schedule function upgradedmobs:piglin_brutes/throw/end 0.35s
