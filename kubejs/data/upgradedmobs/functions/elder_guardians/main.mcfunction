execute as @e[type=elder_guardian,tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:elder_guardians/magic

#execute as @e[type=tnt] at @s if entity @e[distance=..200,type=elder_guardian,tag=!upgradedmobs.blacklist] run function upgradedmobs:elder_guardians/kill

execute as @e[type=guardian,tag=upgradedmobs.guardians.summoned] at @s run function upgradedmobs:elder_guardians/summon/remove
