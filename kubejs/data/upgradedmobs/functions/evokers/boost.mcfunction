data merge entity @s {Health:150f,Attributes:[{Name:"generic.max_health",Base:150}]}

item replace entity @s weapon.offhand with totem_of_undying

execute if score $global upgradedmobs.evokers.raid matches 1.. if data entity @s RaidId run data modify entity @s DeathLootTable set value "upgradedmobs:entities/raid/evoker"

tag @s add upgradedmobs.boosted
