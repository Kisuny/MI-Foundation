execute if entity @s[tag=!upgradedmobs.boosted] run function upgradedmobs:drowned/boost

execute if entity @s[scores={upgradedmobs.clock=0..50}] as @p[distance=..1.75,gamemode=!creative,gamemode=!spectator] at @s if block ~ ~-1 ~ water run function upgradedmobs:drowned/drag/pull
