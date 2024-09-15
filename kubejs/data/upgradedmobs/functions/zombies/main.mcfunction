execute if entity @s[tag=!upgradedmobs.boosted] run function upgradedmobs:zombies/boost

execute if entity @s[scores={upgradedmobs.clock=50..}] at @s if entity @p[distance=2..5,gamemode=!creative,gamemode=!spectator] run function upgradedmobs:zombies/dash/main
