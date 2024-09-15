summon evoker_fangs ~ ~ ~ {Warmup:30,Tags:["upgradedmobs.fangs.followup"]}
summon evoker_fangs ~ ~ ~ {Warmup:60,Tags:["upgradedmobs.fangs.followup"]}

execute as @e[distance=..6, type=evoker_fangs, tag=upgradedmobs.fangs.followup] run data modify entity @s Owner set from entity @e[distance=..24,type=evoker,tag=!upgradedmobs.blacklist,limit=1,sort=nearest] UUID

tag @s add upgradedmobs.fangs.tripled
