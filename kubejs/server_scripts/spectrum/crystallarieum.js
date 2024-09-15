//priority: 0


let pure_modern = [
    {id: 'antimony',  ink: {type: 'light_gray', ammount: 2000}, catalyst: {id:'modern_industrialization:lead_dust',          chance: 0.6}, energy: 64,time: 1200},
    {id: 'tin',       ink: {type: 'light_blue', ammount: 2000}, catalyst: {id:'modern_industrialization:quartz_tiny_dust',   chance: 0.8}, energy: 64,time: 1200},
    {id: 'lead',      ink: {type: 'blue',       ammount: 2000}, catalyst: {id:'modern_industrialization:silver_dust',        chance: 0.4}, energy: 64,time: 1200},
    {id: 'silver',    ink: {type: 'light_blue', ammount: 2000}, catalyst: {id:'spectrum:moonstone_powder',                   chance: 0.8}, energy: 64,time: 1200},

    {id: 'tungsten',  ink: {type: 'purple',     ammount: 4000}, catalyst: {id:'minecraft:netherite_scrap',                   chance: 0.1}, energy: 96,time: 2400},
    {id: 'aluminum',  ink: {type: 'light_blue', ammount: 4000}, catalyst: {id:'modern_industrialization:aluminum_tiny_dust', chance: 0.8}, energy: 96,time: 2400},
    {id: 'beryllium', ink: {type: 'green',      ammount: 4000}, catalyst: {id:'modern_industrialization:emerald_dust',       chance: 0.4}, energy: 96,time: 2400},
    {id: 'nickel',    ink: {type: 'gray',       ammount: 4000}, catalyst: {id:'modern_industrialization:iron_dust',          chance: 0.4}, energy: 96,time: 2400},

    {id: 'titanium',  ink: {type: 'magenta',    ammount: 10000}, catalyst: {id:'modern_industrialization:brookite_dust',     chance: 0.4}, energy: 128,time: 6000},
    {id: 'chromium',  ink: {type: 'pink',       ammount: 10000}, catalyst: {id:'modern_industrialization:ruby_dust',         chance: 0.5}, energy: 128,time: 6000},
    {id: 'platinum',  ink: {type: 'yellow',     ammount: 10000}, catalyst: {id:'modern_industrialization:gold_dust',         chance: 0.3}, energy: 128,time: 6000},

    {id: 'uranium',   ink: {type: 'lime',       ammount: 16000}, catalyst: {id:'modern_industrialization:prometheum_dust',   chance: 0.2}, energy: 192,time: 9600},
    {id: 'iridium',   ink: {type: 'white',      ammount: 16000}, catalyst: {id:'ae2:charged_certus_quartz_crystal',          chance: 0.2}, energy: 192,time: 9600},
]

let pure_spectrum = [
    {id: 'azurite',    ink: {type: 'blue',    ammount: 10000}, catalyst: {id:'spectrum:pure_copper',      chance: 0.2}, energy: 128, time: 6000},
    {id: 'malachite',  ink: {type: 'white',   ammount: 10000}, catalyst: {id:'spectrum:moonstone_powder', chance: 1},   energy: 192, time: 6000},
    {id: 'bloodstone', ink: {type: 'red',     ammount: 10000}, catalyst: {id:'spectrum:pure_copper',      chance: 0.8}, energy: 192, time: 6000},

    {id: 'bismuth',    ink: {type: 'cyan',    ammount: 16000}, catalyst: {id:'spectrum:bismuth_flake',    chance: 0.5}, energy: 256,time: 9800},
]


let pure_vanilla = [
    {id: 'coal',            ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'spectrum:fiery_powder',        chance: 0.2}, energy: 64, time: 1200},
    {id: 'iron',            ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'spectrum:neolith',             chance: 0.4}, energy: 64, time: 1200},
    {id: 'gold',            ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'spectrum:neolith',             chance: 0.8}, energy: 64, time: 1200},
    {id: 'diamond',         ink: {type: 'cyan',   ammount: 2000}, catalyst: {id:'minecraft:coal_block',         chance: 0.8}, energy: 64, time: 1200},
    {id: 'emerald',         ink: {type: 'cyan',   ammount: 2000}, catalyst: {id:'spectrum:midnight_chip',       chance: 0.8}, energy: 64, time: 1200},
    {id: 'redstone',        ink: {type: 'yellow', ammount: 2000}, catalyst: {id:'spectrum:shimmerstone_gem',    chance: 0.8}, energy: 64, time: 1200},
    {id: 'lapis',           ink: {type: 'purple', ammount: 2000}, catalyst: {id:'spectrum:moonstone_powder',    chance: 0.8}, energy: 64, time: 1200},
    {id: 'copper',          ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'vitalize:experience_cubed',    chance: 0.6}, energy: 64, time: 1200},
    {id: 'quartz',          ink: {type: 'cyan',   ammount: 2000}, catalyst: {id:'spectrum:midnight_chip',       chance: 0.6}, energy: 64, time: 1200},
    {id: 'glowstone',       ink: {type: 'yellow', ammount: 2000}, catalyst: {id:'spectrum:moonstone_shard',     chance: 0.6}, energy: 64, time: 1200},
    {id: 'netherite_scrap', ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'spectrum:stratine_fragments',  chance: 0.6}, energy: 64, time: 1200},
                                                                                                                                          
    {id: 'prismarine',      ink: {type: 'cyan',   ammount: 2000}, catalyst: {id:'spectrum:mermaids_gem',        chance: 0.6}, energy: 64, time: 1200},
    {id: 'echo',            ink: {type: 'brown',  ammount: 2000}, catalyst: {id:'vitalize:experience_cubed',    chance: 0.6}, energy: 64, time: 1200},
                                                                                                                                          
    {id: 'fluix',           ink: {type: 'yellow', ammount: 2000}, catalyst: {id:'spectrum:storm_stone',         chance: 0.6}, energy: 64, time: 1200},
    {id: 'certus_quartz',   ink: {type: 'yellow', ammount: 2000}, catalyst: {id:'spectrum:storm_stone',         chance: 0.6}, energy: 64, time: 1200},
]

let pure_ad_astra = [
    {id: 'desh',     ink: {type: 'orange',  ammount: 4000},  catalyst: {id:'modern_industrialization:palladium_dust',    chance: 0.3}, energy: 128,time: 2400},
    {id: 'ostrum',   ink: {type: 'pink',    ammount: 10000}, catalyst: {id:'modern_industrialization:chromium_dust',     chance: 0.4}, energy: 196,time: 6000},
    {id: 'calorite', ink: {type: 'red',     ammount: 16000}, catalyst: {id:'modern_industrialization:uranium_235_dust',  chance: 0.2}, energy: 256,time: 9600},
]


ServerEvents.recipes(event => {

    // Coal
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:coal')
        .itemIn('spectrum:fiery_powder',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:small_coal_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_coal_bud')
        .itemIn('spectrum:fiery_powder',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:large_coal_bud')
        .itemOut('spectrum:small_coal_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_coal_bud')
        .itemIn('spectrum:fiery_powder',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:coal_cluster')
        .itemOut('spectrum:large_coal_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:coal_cluster')
        .itemOut('3x spectrum:pure_coal')

    // Diamond
    event.recipes.modern_industrialization.industrial_crystallarieum(128,9600)
        .itemIn('minecraft:diamond')
        .itemIn('minecraft:coal_block',0.4)
        .fluidIn('modern_industrialization:cyan_ink',4000)
        .itemOut('spectrum:small_diamond_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(128,9600 * 0.6)
        .itemIn('spectrum:small_diamond_bud')
        .itemIn('minecraft:coal_block',0.4)
        .fluidIn('modern_industrialization:cyan_ink',4000)
        .itemOut('spectrum:large_diamond_bud')
        .itemOut('spectrum:small_diamond_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(128,9600 * 0.3)
        .itemIn('spectrum:large_diamond_bud')
        .itemIn('minecraft:coal_block',0.4)
        .fluidIn('modern_industrialization:cyan_ink',4000)
        .itemOut('spectrum:diamond_cluster')
        .itemOut('spectrum:large_diamond_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:diamond_cluster')
        .itemOut('3x spectrum:pure_diamond')

    // Redstone
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:redstone')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:small_redstone_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_redstone_bud')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:large_redstone_bud')
        .itemOut('spectrum:small_redstone_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_redstone_bud')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:redstone_cluster')
        .itemOut('spectrum:large_redstone_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:redstone_cluster')
        .itemOut('3x spectrum:pure_redstone')

    // Glowstone
    event.recipes.modern_industrialization.industrial_crystallarieum(64,2400)
        .itemIn('minecraft:glowstone_dust')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:small_glowstone_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,2400 * 0.6)
        .itemIn('spectrum:small_glowstone_bud')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:large_glowstone_bud')
        .itemOut('spectrum:small_glowstone_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,2400 * 0.3)
        .itemIn('spectrum:large_glowstone_bud')
        .itemIn('spectrum:shimmerstone_gem',0.4)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:glowstone_cluster')
        .itemOut('spectrum:large_glowstone_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:glowstone_cluster')
        .itemOut('3x spectrum:pure_glowstone')

    // Emerald
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:emerald')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:small_emerald_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_emerald_bud')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:large_emerald_bud')
        .itemOut('spectrum:small_emerald_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_emerald_bud')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:emerald_cluster')
        .itemOut('spectrum:large_emerald_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:emerald_cluster')
        .itemOut('3x spectrum:pure_emerald')

    // Quartz
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:quartz')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:small_quartz_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_quartz_bud')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:large_quartz_bud')
        .itemOut('spectrum:small_quartz_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_quartz_bud')
        .itemIn('spectrum:midnight_chip',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:quartz_cluster')
        .itemOut('spectrum:large_quartz_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:quartz_cluster')
        .itemOut('3x spectrum:pure_quartz')

    // Lapis
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:lapis_lazuli')
        .itemIn('vitalize:experience_cubed',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:small_lapis_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_lapis_bud')
        .itemIn('vitalize:experience_cubed',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:large_lapis_bud')
        .itemOut('spectrum:small_lapis_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_lapis_bud')
        .itemIn('vitalize:experience_cubed',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:lapis_cluster')
        .itemOut('spectrum:large_lapis_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:lapis_cluster')
        .itemOut('3x spectrum:pure_lapis')

    // Copper
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:raw_copper')
        .itemIn('spectrum:neolith',0.1)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:small_copper_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_copper_bud')
        .itemIn('spectrum:neolith',0.1)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:large_copper_bud')
        .itemOut('spectrum:small_copper_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_copper_bud')
        .itemIn('spectrum:neolith',0.1)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:copper_cluster')
        .itemOut('spectrum:large_copper_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:copper_cluster')
        .itemOut('3x spectrum:pure_copper')

    // Iron
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:raw_iron')
        .itemIn('spectrum:neolith',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:small_iron_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_iron_bud')
        .itemIn('spectrum:neolith',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:large_iron_bud')
        .itemOut('spectrum:small_iron_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_iron_bud')
        .itemIn('spectrum:neolith',0.2)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:iron_cluster')
        .itemOut('spectrum:large_iron_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:iron_cluster')
        .itemOut('3x spectrum:pure_iron')

    // Gold
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:raw_gold')
        .itemIn('spectrum:neolith',0.3)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:small_gold_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_gold_bud')
        .itemIn('spectrum:neolith',0.3)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:large_gold_bud')
        .itemOut('spectrum:small_gold_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_gold_bud')
        .itemIn('spectrum:neolith',0.3)
        .fluidIn('modern_industrialization:brown_ink',2000)
        .itemOut('spectrum:gold_cluster')
        .itemOut('spectrum:large_gold_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:gold_cluster')
        .itemOut('3x spectrum:pure_gold')

    // Netherite
    event.recipes.modern_industrialization.industrial_crystallarieum(64,19200)
        .itemIn('minecraft:netherite_scrap')
        .itemIn('spectrum:stratine_fragments',0.3)
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:small_netherite_scrap_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,19200 * 0.6)
        .itemIn('spectrum:small_netherite_scrap_bud')
        .itemIn('spectrum:stratine_fragments',0.3)
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:large_netherite_scrap_bud')
        .itemOut('spectrum:small_netherite_scrap_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,19200 * 0.3)
        .itemIn('spectrum:large_netherite_scrap_bud')
        .itemIn('spectrum:stratine_fragments',0.3)
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:netherite_scrap_cluster')
        .itemOut('spectrum:large_netherite_scrap_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:netherite_scrap_cluster')
        .itemOut('3x spectrum:pure_netherite_scrap')

    // prismarine
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('minecraft:prismarine_crystals')
        .itemIn('spectrum:mermaids_gem',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:small_prismarine_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_prismarine_bud')
        .itemIn('spectrum:mermaids_gem',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:large_prismarine_bud')
        .itemOut('spectrum:small_prismarine_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_prismarine_bud')
        .itemIn('spectrum:mermaids_gem',0.3)
        .fluidIn('modern_industrialization:cyan_ink',2000)
        .itemOut('spectrum:prismarine_cluster')
        .itemOut('spectrum:large_prismarine_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:prismarine_cluster')
        .itemOut('3x spectrum:pure_prismarine')

    // Echo
    event.recipes.modern_industrialization.industrial_crystallarieum(196,19200)
        .itemIn('minecraft:echo_shard')
        .itemIn('vitalize:experience_cubed')
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:small_echo_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(196,19200 * 0.6)
        .itemIn('spectrum:small_echo_bud')
        .itemIn('vitalize:experience_cubed')
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:large_echo_bud')
        .itemOut('spectrum:small_echo_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(196,19200 * 0.3)
        .itemIn('spectrum:large_echo_bud')
        .itemIn('vitalize:experience_cubed')
        .fluidIn('modern_industrialization:brown_ink',16000)
        .itemOut('spectrum:echo_cluster')
        .itemOut('spectrum:large_echo_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:echo_cluster')
        .itemOut('3x spectrum:pure_echo')
    
    // Certus Quartz
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('ae2:certus_quartz_crystal')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:small_certus_quartz_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_certus_quartz_bud')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:large_certus_quartz_bud')
        .itemOut('spectrum:small_certus_quartz_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_certus_quartz_bud')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:certus_quartz_cluster')
        .itemOut('spectrum:large_certus_quartz_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:certus_quartz_cluster')
        .itemOut('3x spectrum:pure_certus_quartz')
    
    // Fluix
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200)
        .itemIn('ae2:fluix_crystal')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:small_fluix_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.6)
        .itemIn('spectrum:small_fluix_bud')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:large_fluix_bud')
        .itemOut('spectrum:small_fluix_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(64,1200 * 0.3)
        .itemIn('spectrum:large_fluix_bud')
        .itemIn('spectrum:storm_stone',0.05)
        .fluidIn('modern_industrialization:yellow_ink',2000)
        .itemOut('spectrum:fluix_cluster')
        .itemOut('spectrum:large_fluix_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('spectrum:fluix_cluster')
        .itemOut('3x spectrum:pure_fluix')
                                                                                                                                          
    // terrasteel
    event.recipes.modern_industrialization.industrial_crystallarieum(128,6000)
        .itemIn('kubejs:catalyst_terrasteel')
        .itemIn('botania:mana_powder')
        .fluidIn('modern_industrialization:lime_ink',12000)
        .itemOut('kubejs:terrasteel_small_bud')
    event.recipes.modern_industrialization.industrial_crystallarieum(128,6000 * 0.6)
        .itemIn('kubejs:terrasteel_small_bud')
        .itemIn('botania:mana_powder')
        .fluidIn('modern_industrialization:lime_ink',12000)
        .itemOut('kubejs:terrasteel_large_bud')
        .itemOut('kubejs:terrasteel_small_bud',0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(128,6000 * 0.3)
        .itemIn('kubejs:terrasteel_large_bud')
        .itemIn('botania:mana_powder')
        .fluidIn('modern_industrialization:lime_ink',12000)
        .itemOut('kubejs:terrasteel_cluster')
        .itemOut('kubejs:terrasteel_large_bud',0.5)
    event.recipes.modern_industrialization.macerator(8,100)
        .itemIn('kubejs:terrasteel_cluster')
        .itemOut('3x kubejs:pure_terrasteel')
                                                                                                                                          

    pure_spectrum.forEach(ore => {
        if (ore.id === 'bismuth') {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
                .itemIn(`spectrum:bismuth_flake`)
                .itemIn(ore.catalyst.id,ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
                .itemOut(`spectrum:small_${ore.id}_bud`)
            event.recipes.modern_industrialization.macerator(8,100)
                .itemIn(`spectrum:${ore.id}_cluster`)
                .itemOut(`3x spectrum:bismuth_crystal`)
            event.recipes.modern_industrialization.macerator(8,100)
                .itemIn('spectrum:bismuth_crystal')
                .itemOut(`3x spectrum:bismuth_flake`)
        } else {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
                .itemIn(`spectrum:raw_${ore.id}`)
                .itemIn(ore.catalyst.id,ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
                .itemOut(`spectrum:small_${ore.id}_bud`)
            event.recipes.modern_industrialization.macerator(8,100)
                .itemIn(`spectrum:${ore.id}_cluster`)
                .itemOut(`3x spectrum:refined_${ore.id}`)
        }
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.6)
            .itemIn(`spectrum:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`spectrum:large_${ore.id}_bud`)
            .itemOut(`spectrum:small_${ore.id}_bud`,0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.3)
            .itemIn(`spectrum:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`spectrum:${ore.id}_cluster`)
            .itemOut(`spectrum:large_${ore.id}_bud`,0.5)
        
    });

    pure_ad_astra.forEach(ore => {
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
            .itemIn(`ad_astra:raw_${ore.id}`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:small_${ore.id}_bud`)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.6)
            .itemIn(`kubejs:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:large_${ore.id}_bud`)
            .itemOut(`kubejs:small_${ore.id}_bud`,0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.3)
            .itemIn(`kubejs:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:${ore.id}_cluster`)
            .itemOut(`kubejs:large_${ore.id}_bud`,0.5)
        event.recipes.modern_industrialization.macerator(8,100)
            .itemIn(`kubejs:${ore.id}_cluster`)
            .itemOut(`3x kubejs:pure_${ore.id}`)
    });

    pure_modern.forEach(ore => {
        if (ore.id === 'aluminum') {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
                .itemIn(`modern_industrialization:bauxite_dust`)
                .itemIn(ore.catalyst.id,ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else if (ore.id === 'beryllium') {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
                .itemIn(`modern_industrialization:beryllium_dust`)
                .itemIn(ore.catalyst.id,ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else if (ore.id === 'chromium') {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
                .itemIn(`modern_industrialization:chromium_dust`)
                .itemIn(ore.catalyst.id,ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else {
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time)
            .itemIn(`modern_industrialization:raw_${ore.id}`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:small_${ore.id}_bud`)
        }
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.6)
            .itemIn(`kubejs:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:large_${ore.id}_bud`)
            .itemOut(`kubejs:small_${ore.id}_bud`,0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy,ore.time * 0.3)
            .itemIn(`kubejs:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id,ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`,ore.ink.ammount)
            .itemOut(`kubejs:${ore.id}_cluster`)
            .itemOut(`kubejs:large_${ore.id}_bud`,0.5)
        event.recipes.modern_industrialization.macerator(8,100)
            .itemIn(`kubejs:${ore.id}_cluster`)
            .itemOut(`3x kubejs:pure_${ore.id}`)
    });
    // MI
    //Antimony
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_antimony'
        },
        "growth_stage_states": [
            'kubejs:small_antimony_bud',
            'kubejs:large_antimony_bud',
            'kubejs:antimony_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "light_gray",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:lead_dust'
                },
                "growth_acceleration_mod": 1.5,
                "ink_consumption_mod": 0.6,
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_antimony'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Platinum
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_platinum'
        },
        "growth_stage_states": [
            'kubejs:small_platinum_bud',
            'kubejs:large_platinum_bud',
            'kubejs:platinum_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "orange",
        "ink_cost_tier": 4,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:gold_dust'
                },
                "growth_acceleration_mod": 1.2,
                "ink_consumption_mod": 0.8,
                "consume_chance_per_second": 0.02
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_platinum'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Lead
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_lead'
        },
        "growth_stage_states": [
            'kubejs:small_lead_bud',
            'kubejs:large_lead_bud',
            'kubejs:lead_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "blue",
        "ink_cost_tier": 1,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:silver_dust'
                },
                "growth_acceleration_mod": 2.4,
                "ink_consumption_mod": 1.2,
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_lead'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Nickel
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_nickel'
        },
        "growth_stage_states": [
            'kubejs:small_nickel_bud',
            'kubejs:large_nickel_bud',
            'kubejs:nickel_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "gray",
        "ink_cost_tier": 1,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:iron_dust'
                },
                "growth_acceleration_mod": 1.1,
                "ink_consumption_mod": 0.9,
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_nickel'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Aluminum
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:bauxite_dust'
        },
        "growth_stage_states": [
            'kubejs:small_aluminum_bud',
            'kubejs:large_aluminum_bud',
            'kubejs:aluminum_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "light_blue",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:aluminum_tiny_dust'
                },
                "growth_acceleration_mod": 1.5,
                "ink_consumption_mod": 0.6,
                "consume_chance_per_second": 0.15
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_aluminum'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Tin
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_tin'
        },
        "growth_stage_states": [
            'kubejs:small_tin_bud',
            'kubejs:large_tin_bud',
            'kubejs:tin_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "light_blue",
        "ink_cost_tier": 1,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:quartz_tiny_dust'
                },
                "growth_acceleration_mod": 2.5,
                "ink_consumption_mod": 1.2,
                "consume_chance_per_second": 0.5
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_tin'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Tungsten
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_tungsten'
        },
        "growth_stage_states": [
            'kubejs:small_tungsten_bud',
            'kubejs:large_tungsten_bud',
            'kubejs:tungsten_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "magenta",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'minecraft:netherite_scrap'
                },
                "growth_acceleration_mod": 1.6,
                "ink_consumption_mod": 0.6,
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_tungsten'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Silver
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_silver'
        },
        "growth_stage_states": [
            'kubejs:small_silver_bud',
            'kubejs:large_silver_bud',
            'kubejs:silver_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "cyan",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'spectrum:moonstone_powder'
                },
                "growth_acceleration_mod": 1.5,
                "ink_consumption_mod": 1,
                "consume_chance_per_second": 0.25
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_silver'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Uranium
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_uranium'
        },
        "growth_stage_states": [
            'kubejs:small_uranium_bud',
            'kubejs:large_uranium_bud',
            'kubejs:uranium_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "lime",
        "ink_cost_tier": 3,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:prometheum_dust'
                },
                "growth_acceleration_mod": 1.3,
                "ink_consumption_mod": 0.8,
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_uranium'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    // Iridium
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_iridium'
        },
        "growth_stage_states": [
            'kubejs:small_iridium_bud',
            'kubejs:large_iridium_bud',
            'kubejs:iridium_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "white",
        "ink_cost_tier": 4,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'ae2:charged_certus_quartz_crystal'
                },
                "growth_acceleration_mod": 1.5,
                "ink_consumption_mod": 0.7, 
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_iridium'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    // Titanium
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:raw_titanium'
        },
        "growth_stage_states": [
            'kubejs:small_titanium_bud',
            'kubejs:large_titanium_bud',
            'kubejs:titanium_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "pink",
        "ink_cost_tier": 3,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:brookite_dust'
                },
                "growth_acceleration_mod": 1.6,
                "ink_consumption_mod": 0.7, 
                "consume_chance_per_second": 0.01
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_titanium'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    // Chromium
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:chromium_dust'
        },
        "growth_stage_states": [
            'kubejs:small_chromium_bud',
            'kubejs:large_chromium_bud',
            'kubejs:chromium_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "pink",
        "ink_cost_tier": 3,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:ruby_dust'
                },
                "growth_acceleration_mod": 1.4,
                "ink_consumption_mod": 0.8, 
                "consume_chance_per_second": 0.05
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_chromium'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    // beryllium
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'modern_industrialization:beryllium_dust'
        },
        "growth_stage_states": [
            'kubejs:small_beryllium_bud',
            'kubejs:large_beryllium_bud',
            'kubejs:beryllium_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "lime",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:emerald_dust'
                },
                "growth_acceleration_mod": 1.2,
                "ink_consumption_mod": 1.2, 
                "consume_chance_per_second": 0.05
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_beryllium'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    // Ad Astra

    // Desh
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'ad_astra:raw_desh'
        },
        "growth_stage_states": [
            'kubejs:small_desh_bud',
            'kubejs:large_desh_bud',
            'kubejs:desh_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "orange",
        "ink_cost_tier": 2,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:palladium_dust'
                },
                "growth_acceleration_mod": 1,
                "ink_consumption_mod": 0.8,
                "consume_chance_per_second": 0.05
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_desh'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Ostrum
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'ad_astra:raw_ostrum'
        },
        "growth_stage_states": [
            'kubejs:small_ostrum_bud',
            'kubejs:large_ostrum_bud',
            'kubejs:ostrum_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "pink",
        "ink_cost_tier": 3,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:chromium_dust'
                },
                "growth_acceleration_mod": 1,
                "ink_consumption_mod": 0.8,
                "consume_chance_per_second": 0.05
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_ostrum'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // Calorite
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'ad_astra:raw_calorite'
        },
        "growth_stage_states": [
            'kubejs:small_calorite_bud',
            'kubejs:large_calorite_bud',
            'kubejs:calorite_cluster'
        ],
        "seconds_per_growth_stage": 60,
        "ink_color": "red",
        "ink_cost_tier": 4,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'modern_industrialization:uranium_235_dust'
                },
                "growth_acceleration_mod": 1,
                "ink_consumption_mod": 0.8,
                "consume_chance_per_second": 0.1
            }
        ],
        "additional_recipe_manager_outputs": [
            'kubejs:pure_calorite'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })



    // Terrasteel
    event.recipes.spectrum.crystallarieum_growing({
        "ingredient": {
            "item": 'kubejs:catalyst_terrasteel'
        },
        "growth_stage_states": [
            'kubejs:terrasteel_small_bud',
            'kubejs:terrasteel_large_bud',
            'kubejs:terrasteel_cluster'
        ],
        "seconds_per_growth_stage": 300,
        "ink_color": "lime",
        "ink_cost_tier": 4,
        "grows_without_catalyst": false,
        "catalysts": [
            {
                "ingredient": {
                    "item": 'botania:quartz_mana'
                },
                "growth_acceleration_mod": 1.25,
                "ink_consumption_mod": 1.25,
                "consume_chance_per_second": 0.0
            },
            {
                "ingredient": {
                    "item": 'botania:manaweave_cloth'
                },
                "growth_acceleration_mod": 2.0,
                "ink_consumption_mod": 1.125,
                "consume_chance_per_second": 0.02
            },
            {
                "ingredient": {
                    "item": 'botania:mana_powder'
                },
                "growth_acceleration_mod": 16.0,
                "ink_consumption_mod": 2.5,
                "consume_chance_per_second": 0.02
            }
        ],
        "additional_recipe_manager_outputs": [
            'botania:terrasteel_ingot',
            'kubejs:pure_terrasteel'
        ],
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })

    // pure.forEach(material => {
    //     let groww = [
    //         `kubejs:small_${material.id}_bud`
    //         `kubejs:large_${material.id}_bud`,
    //         `kubejs:${material.id}_cluster`
    //     ]
    //     event.recipes.spectrum.crystallarieum_growing({
    //         "ingredient": {
    //             "item": material.base
    //         },
    //         "growth_stage_states": groww,
    //         "seconds_per_growth_stage": material.growth_time,
    //         "ink_color": material.ink_color,
    //         "ink_cost_tier": material.ink_cost_tier,
    //         "grows_without_catalyst": material.grows_without_catalyst,
    //         // "catalysts": material.catalysts.map(catalyst => JSON.stringify({
    //         //         ingredient: {
    //         //             item: catalyst.item,
    //         //             growth_acceleration_mod: catalyst.growth_acceleration,
    //         //             ink_consumption_mod: catalyst.ink_consumption,
    //         //             consume_chance_per_second: catalyst.consume_chance
    //         //         }
    //         // })),
    //         "catalysts": [],
    //         "additional_recipe_manager_outputs": [
    //             `kubejs:pure_${material.id}`
    //         ],
    //         "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    //     })
    // })
})
