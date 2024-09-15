execute if entity @s[tag=!upgradedmobs.boosted] run function upgradedmobs:evokers/boost

execute as @e[distance=..24, type=evoker_fangs, tag=!upgradedmobs.fangs.tripled, tag=!upgradedmobs.fangs.followup] at @s run function upgradedmobs:evokers/triple_fangs

function upgradedmobs:evokers/heal
