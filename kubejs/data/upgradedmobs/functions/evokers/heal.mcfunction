execute store result score @s upgradedmobs.health run data get entity @s Health 1

execute unless entity @s[nbt={ActiveEffects:[{Id:10}]}] if score @s upgradedmobs.health matches ..75 run effect give @s regeneration 5 1
