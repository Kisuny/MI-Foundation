# From r/MinecraftCommands wiki
summon marker ~ ~ ~ {Tags:["upgradedmobs.dash"]}

execute as @e[type=marker,tag=upgradedmobs.dash,limit=1,sort=nearest] facing entity @p[gamemode=!creative,gamemode=!spectator] feet positioned 0.0 0.0 0.0 run function upgradedmobs:all/dash/marker

data modify entity @s Motion set from storage upgradedmobs:dash/storage Motion
data modify entity @s FallDistance set value -12
