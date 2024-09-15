execute if entity @e[distance=..30,type=elder_guardian,scores={upgradedmobs.clock=200}, tag=!upgradedmobs.blacklist] run function upgradedmobs:elder_guardians/kill

execute unless entity @e[distance=..30,type=elder_guardian, tag=!upgradedmobs.blacklist] run function upgradedmobs:elder_guardians/kill
