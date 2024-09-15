execute if entity @s[tag=!upgradedmobs.boosted] run function upgradedmobs:piglin_brutes/boost

execute if entity @s[scores={upgradedmobs.clock=1}] if entity @p[distance=2..5,gamemode=!creative,gamemode=!spectator] run function upgradedmobs:piglin_brutes/dash

execute if entity @s[scores={upgradedmobs.clock=50}] run function upgradedmobs:piglin_brutes/throw/start
