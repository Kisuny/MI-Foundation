# Progresses the clock for bosses, and for nearby regular mobs
execute as @e[type=#upgradedmobs:upgraded_mobs, tag=!upgradedmobs.blacklist] at @s if entity @p[distance=..5,gamemode=!creative,gamemode=!spectator] unless data entity @s NoAI run scoreboard players add @s upgradedmobs.clock 1

execute as @e[type=#upgradedmobs:upgraded_bosses, tag=!upgradedmobs.blacklist] unless data entity @s NoAI run scoreboard players add @s upgradedmobs.clock 1

# Loops the clock for each mob
scoreboard players set @e[type=#upgradedmobs:zombies, scores={upgradedmobs.clock=100..}] upgradedmobs.clock 0
scoreboard players set @e[type=piglin_brute, scores={upgradedmobs.clock=100..}] upgradedmobs.clock 0
scoreboard players set @e[type=#upgradedmobs:spiders, scores={upgradedmobs.clock=120..}] upgradedmobs.clock 0
scoreboard players set @e[type=elder_guardian, scores={upgradedmobs.clock=300..}] upgradedmobs.clock 0
