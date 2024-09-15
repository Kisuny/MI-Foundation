function upgradedmobs:clock

function upgradedmobs:all/main

execute as @e[type=drowned, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:drowned/main

function upgradedmobs:elder_guardians/main

execute as @e[type=evoker, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:evokers/main

execute as @e[type=piglin_brute, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:piglin_brutes/main

function upgradedmobs:pillagers/main

execute as @e[type=#upgradedmobs:spiders, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:spiders/main

execute as @e[type=vex, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:vexes/main

function upgradedmobs:witches/main

execute as @e[type=#upgradedmobs:zombies, tag=!upgradedmobs.blacklist] at @s run function upgradedmobs:zombies/main
