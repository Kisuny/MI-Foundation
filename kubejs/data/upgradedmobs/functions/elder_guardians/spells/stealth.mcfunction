execute store result score @s upgradedmobs.health run data get entity @s Health 1

execute if score @s upgradedmobs.health matches ..150 run effect give @s invisibility 3 1
