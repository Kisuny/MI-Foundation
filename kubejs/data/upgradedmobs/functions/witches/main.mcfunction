execute as @e[type=witch, tag=!upgradedmobs.boosted, tag=!upgradedmobs.blacklist] run function upgradedmobs:witches/boost

execute as @e[type=potion, tag=!upgradedmobs.witches.potion.checked] if data entity @s HasBeenShot at @s run function upgradedmobs:witches/potion/check
