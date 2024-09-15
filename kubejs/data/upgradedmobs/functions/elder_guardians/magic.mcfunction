execute as @s[tag=!upgradedmobs.boosted] run function upgradedmobs:elder_guardians/spells/boost

execute as @s[scores={upgradedmobs.clock=0}] if entity @p[distance=..20,gamemode=!creative,gamemode=!spectator] unless entity @e[distance=..6,type=guardian,tag=!upgradedmobs.guardians.summoned] at @s run function upgradedmobs:elder_guardians/summon/cast

execute at @s[scores={upgradedmobs.clock=100}] as @r[distance=..45,gamemode=!creative,gamemode=!spectator] at @s run function upgradedmobs:elder_guardians/spells/debuff

execute as @s[scores={upgradedmobs.clock=200}] run function upgradedmobs:elder_guardians/spells/stealth
