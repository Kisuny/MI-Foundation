execute if entity @s[scores={upgradedmobs.clock=1}] if entity @p[distance=2..5,gamemode=!creative,gamemode=!spectator] run function upgradedmobs:spiders/dash

execute if entity @s[scores={upgradedmobs.clock=40}] as @p[distance=..2,gamemode=!creative,gamemode=!spectator] at @s run function upgradedmobs:spiders/web
