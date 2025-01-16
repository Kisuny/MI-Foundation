//priority: 0

ServerEvents.recipes(event => {
    event.remove({ mod: 'mysticalagriculture' })

    const mob = [
        {
            name: 'pig',
            drops: [
                [2,'minecraft:porkchop'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'chicken',
            drops: [
                [2,'minecraft:chicken'],
                [4,'minecraft:feather'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'cow',
            drops: [
                [2,'minecraft:beef'],
                [1,'minecraft:leather'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'sheep',
            drops: [
                [2,'minecraft:mutton'],
                [2,'minecraft:white_wool'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'squid',
            drops: [
                [3,'minecraft:ink_sac'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'fish',
            drops: [
                [1, 'minecraft:tropical_fish'],
                [1, 'minecraft:pufferfish'],
                [1, 'naturalist:catfish'],
                [1, 'crittersandcompanions:koi_fish'],
                [1, 'gofish:spikerfish'],
                [1, 'gofish:lunarfish'],
                [1, 'minecraft:cod'],
                [1, 'minecraft:salmon'],
                [1, 'naturalist:bass']
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'slime',
            drops: [
                [3,'minecraft:slime_ball'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'turtle',
            drops: [
                [3,'minecraft:scute'],
                [4,'minecraft:turtle_egg'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'zombie',
            drops: [
                [4,'minecraft:rotten_flesh'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'skeleton',
            drops: [
                [3,'minecraft:bone'],
                [3,'minecraft:arrow'],
            ],
            ingredients: [
                'botania:virus_nullodermal',
            ]
        },
        {
            name: 'creeper',
            drops: [
                [2,'minecraft:gunpowder'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'spider',
            drops: [
                [2,'minecraft:spider_eye'],
                [4,'minecraft:string'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'rabbit',
            drops: [
                [1,'minecraft:rabbit_foot'],
                [2,'minecraft:rabbit_hide'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
            ]
        },
        {
            name: 'blaze',
            drops: [
                [2,'minecraft:blaze_rod'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
                'kubejs:octiron_shards'
            ]
        },
        {
            name: 'ghast',
            drops: [
                [1,'minecraft:ghast_tear'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
                'kubejs:octiron_shards'
            ]
        },
        {
            name: 'enderman',
            drops: [
                [2,'minecraft:ender_pearl'],
            ],
            ingredients: [
                'botania:virus_necrodermal',
                'kubejs:octiron_shards'
            ]
        },
        {
            name: 'wither_skeleton',
            drops: [
                [1,'kibe:cursed_droplets'],
                [2,'minecraft:bone'],
                [3,'architects_palette:withered_bone'],
            ],
            ingredients: [
                'botania:virus_nullodermal',
                'kubejs:octiron_shards'
            ]
        },
    ]

    const elemental = [
        {
            name: 'fire',
            base: 'expandeddelight:chili_pepper_seeds',
            ingredients: [
                'botania:mana_powder',
                'botania:red_petal',
                'spectrum:fiery_powder',
                'botania:orange_petal',
            ]
        },
        {
            name: 'earth',
            base: 'minecraft:wheat_seeds',
            ingredients: [
                'botania:mana_powder',
                'botania:green_petal',
                'spectrum:vegetal',
                'botania:lime_petal',
            ]
        },
        {
            name: 'air',
            base: 'minecraft:pumpkin_seeds',
            ingredients: [
                'botania:mana_powder',
                'botania:light_blue_petal',
                'minecraft:feather',
                'botania:white_petal'
            ]
        },
        {
            name: 'water',
            base: 'minecraft:melon_seeds',
            ingredients: [
                'botania:mana_powder',
                'botania:cyan_petal',
                'spectrum:mermaids_gem',
                'botania:blue_petal'
            ]
        },
    ]
    const soil_types = [
        {
            name: 'minecraft:dirt',
            fertility_multiplier: 1,
            energy_multiplier: 1
        },
        {
            name: 'farmersdelight:rich_soil',
            fertility_multiplier: 0.8,
            energy_multiplier: 0.6
        },
        {
            name: 'botania:enchanted_soil',
            fertility_multiplier: 0.6,
            energy_multiplier: 0.4
        }
    ]

    const simple = [
        {
            name: 'deepslate',
            tier: 1,
            items: [
                [64, 'minecraft:deepslate'],
            ],
            base: 'minecraft:wheat_seeds',
            ingredients: [
                'expandeddelight:asparagus_seeds',
                'minecraft:cobbled_deepslate',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'stone',
            tier: 1,
            items: [
                [64, 'minecraft:stone']
            ],
            base: 'minecraft:melon_seeds',
            ingredients: [
                'expandeddelight:asparagus_seeds',
                'minecraft:cobblestone',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'dirt',
            tier: 1,
            items: [
                [64, 'minecraft:dirt']
            ],
            base: 'minecraft:wheat_seeds',
            ingredients: [
                'minecraft:beetroot_seeds',
                'minecraft:dirt',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'wood',
            tier: 1,
            items: [
                [32, 'minecraft:oak_log'], 
                [32, 'minecraft:spruce_log'], 
                [32, 'minecraft:birch_log'], 
                [32, 'minecraft:jungle_log'], 
                [32, 'minecraft:acacia_log'], 
                [32, 'minecraft:dark_oak_log'], 
                [32, 'minecraft:mangrove_log'], 
                [32, 'minecraft:crimson_stem'], 
                [32, 'minecraft:warped_stem']
            ],
            base: 'minecraft:wheat_seeds',
            ingredients: [
                'farmersdelight:tomato_seeds',
                'modern_industrialization:wood_pulp',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'nether',
            tier: 2,
            items: [
               [64,'minecraft:netherrack'], 
               [32,'minecraft:soul_soil'], 
               [24,'minecraft:soul_sand'], 
               [8,'minecraft:warped_fungus'], 
               [8,'minecraft:crimson_fungus'] 
            ],
            base: 'mysticalagriculture:coal_seeds',
            ingredients: [
                'farmersdelight:tomato_seeds',
                'minecraft:netherrack',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'dye',
            tier: 2,
            items: Array.from(global.dyeColors, (x) => [16, `minecraft:${x.name}_dye`]),
            base: 'farmersdelight:tomato_seeds',
            ingredients: [
                'farmersdelight:cabbage_seeds',
                'minecraft:red_dye',
                'minecraft:green_dye',
                'minecraft:blue_dye',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'coral',
            tier: 2,
            items: [
                [8,'minecraft:tube_coral_block'],
                [8,'minecraft:brain_coral_block'],
                [8,'minecraft:bubble_coral_block'],
                [8,'minecraft:fire_coral_block'],
                [8,'minecraft:horn_coral_block'],
                [16,'minecraft:tube_coral_fan'],
                [16,'minecraft:brain_coral_fan'],
                [16,'minecraft:bubble_coral_fan'],
                [16,'minecraft:fire_coral_fan'],
                [16,'minecraft:horn_coral_fan'],
                [12,'minecraft:tube_coral'],
                [12,'minecraft:brain_coral'],
                [12,'minecraft:bubble_coral'],
                [12,'minecraft:fire_coral'],
                [12,'minecraft:horn_coral']
            ],
            base: 'minecraft:wheat_seeds',
            ingredients: [
                'minecraft:kelp',
                'minecraft:tube_coral',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'ice',
            tier: 1,
            items: [
                [12, 'ad_astra:ice_shard']
            ],
            base: 'minecraft:pumpkin_seeds',
            ingredients: [
                'expandeddelight:asparagus_seeds',
                'ad_astra:ice_shard',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'aluminum',
            tier: 2,
            items: [
                [3, 'modern_industrialization:aluminum_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'minecraft:beetroot_seeds',
                'modern_industrialization:aluminum_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'honey',
            tier: 2,
            items: [
                [8, 'minecraft:honeycomb'],
                [4, 'the_bumblezone:honey_crystal_shards']
            ],
            base: 'mysticalagriculture:ice_seeds',
            ingredients: [
                'minecraft:beetroot_seeds',
                'minecraft:honeycomb',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'coal',
            tier: 2,
            items: [
                [3, 'modern_industrialization:coal_dust']
            ],
            base: 'mysticalagriculture:deepslate_seeds',
            ingredients: [
                'minecraft:melon_seeds',
                'modern_industrialization:coal_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'nature',
            tier: 2,
            items: [
                [6, 'minecraft:oak_sapling'],
                [6, 'minecraft:spruce_sapling'],
                [6, 'minecraft:birch_sapling'],
                [6, 'minecraft:jungle_sapling'],
                [6, 'minecraft:acacia_sapling'],
                [6, 'minecraft:dark_oak_sapling'],
                [6, 'architects_palette:twisted_sapling'],
                [6, 'bewitchment:juniper_sapling'],
                [6, 'bewitchment:cypress_sapling'],
                [6, 'expandeddelight:cinnamon_sapling'],
                [6, 'bwplus:yew_sapling'],
                [6, 'bewitchment:elder_sapling'],
                [6, 'bewitchment:dragons_blood_sapling']
            ],
            base: 'mysticalagriculture:dirt_seeds',
            ingredients: [
                'minecraft:melon_seeds',
                'minecraft:oak_sapling',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'lead',
            tier: 3,
            items: [
                [3, 'modern_industrialization:lead_dust']
            ],
            base: 'mysticalagriculture:aluminum_seeds',
            ingredients: [
                'mysticalagriculture:deepslate_seeds',
                'minecraft:melon_seeds',
                'modern_industrialization:lead_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'sky_stone',
            tier: 3,
            items: [
                [3, 'ae2:sky_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:deepslate_seeds',
                'farmersdelight:cabbage_seeds',
                'ae2:sky_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'copper',
            tier: 3,
            items: [
                [6, 'modern_industrialization:copper_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:deepslate_seeds',
                'farmersdelight:tomato_seeds',
                'modern_industrialization:copper_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'antimony',
            tier: 3,
            items: [
                [3, 'modern_industrialization:antimony_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:aluminum_seeds',
                'minecraft:beetroot_seeds',
                'modern_industrialization:copper_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'nether_quartz',
            tier: 3,
            items: [
                [3, 'modern_industrialization:quartz_dust']
            ],
            base: 'mysticalagriculture:nether_seeds',
            ingredients: [
                'mysticalagriculture:ice_seeds',
                'minecraft:pumpkin_seeds',
                'modern_industrialization:quartz_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'iron',
            tier: 3,
            items: [
                [3, 'modern_industrialization:iron_dust']
            ],
            base: 'mysticalagriculture:nether_seeds',
            ingredients: [
                'mysticalagriculture:aluminum_seeds',
                'farmersdelight:cabbage_seeds',
                'modern_industrialization:iron_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'glowstone',
            tier: 3,
            items: [
                [12, 'minecraft:glowstone_dust']
            ],
            base: 'mysticalagriculture:nether_seeds',
            ingredients: [
                'mysticalagriculture:coal_seeds',
                'expandeddelight:chili_pepper_seeds',
                'minecraft:glowstone_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'tin',
            tier: 3,
            items: [
                [3, 'modern_industrialization:tin_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:aluminum_seeds',
                'minecraft:pumpkin_seeds',
                'modern_industrialization:tin_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'osmium',
            tier: 3,
            items: [
                [3, 'modern_industrialization:osmium_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:aluminum_seeds',
                'mysticalagriculture:ice_seeds',
                'modern_industrialization:osmium_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'manganese',
            tier: 3,
            items: [
                [3, 'modern_industrialization:manganese_dust']
            ],
            base: 'mysticalagriculture:stone_seeds',
            ingredients: [
                'mysticalagriculture:aluminum_seeds',
                'expandeddelight:asparagus_seeds',
                'modern_industrialization:manganese_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'palladium',
            tier: 3,
            items: [
                [3, 'modern_industrialization:palladium_dust']
            ],
            base: 'mysticalagriculture:copper_seeds',
            ingredients: [
                'mysticalagriculture:nether_seeds',
                'expandeddelight:chili_pepper_seeds',
                'modern_industrialization:palladium_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'prismarine',
            tier: 3,
            items: [
                [3, 'minecraft:prismarine_crystals']
            ],
            base: 'mysticalagriculture:ice_seeds',
            ingredients: [
                'mysticalagriculture:coral_seeds',
                'minecraft:wheat_seeds',
                'minecraft:prismarine_crystals',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'obsidian',
            tier: 3,
            items: [
                [16, 'minecraft:obsidian']
            ],
            base: 'mysticalagriculture:deepslate_seeds',
            ingredients: [
                'mysticalagriculture:nether_seeds',
                'farmersdelight:tomato_seeds',
                'minecraft:obsidian',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'redstone',
            tier: 3,
            items: [
                [12, 'minecraft:redstone']
            ],
            base: 'mysticalagriculture:aluminum_seeds',
            ingredients: [
                'mysticalagriculture:nether_seeds',
                'minecraft:melon_seeds',
                'minecraft:redstone',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'silver',
            tier: 3,
            items: [
                [3, 'modern_industrialization:silver_dust']
            ],
            base: 'mysticalagriculture:aluminum_seeds',
            ingredients: [
                'mysticalagriculture:ice_seeds',
                'minecraft:pumpkin_seeds',
                'modern_industrialization:silver_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'stormyx',
            tier: 3,
            items: [
                [3, 'modern_industrialization:stormyx_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:lead_seeds',
                'botania:podzol_seeds',
                'modern_industrialization:stormyx_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'runite',
            tier: 3,
            items: [
                [3, 'modern_industrialization:runite_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:tin_seeds',
                'botania:infused_seeds',
                'modern_industrialization:runite_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'quadrillum',
            tier: 3,
            items: [
                [3, 'modern_industrialization:quadrillum_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:coal_seeds',
                'botania:scorched_seeds',
                'modern_industrialization:quadrillum_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'prometheum',
            tier: 3,
            items: [
                [3, 'modern_industrialization:prometheum_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:prismarine_seeds',
                'botania:vivid_seeds',
                'modern_industrialization:prometheum_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'orichalcum',
            tier: 3,
            items: [
                [3, 'modern_industrialization:orichalcum_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:nature_seeds',
                'botania:mutated_seeds',
                'modern_industrialization:orichalcum_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'mythril',
            tier: 3,
            items: [
                [3, 'modern_industrialization:mythril_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:osmium_seeds',
                'botania:vivid_seeds',
                'modern_industrialization:mythril_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'midas_gold',
            tier: 3,
            items: [
                [3, 'modern_industrialization:midas_gold_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:gold_seeds',
                'botania:golden_seeds',
                'modern_industrialization:midas_gold_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'kyber',
            tier: 3,
            items: [
                [3, 'modern_industrialization:kyber_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:obsidian_seeds',
                'botania:mutated_seeds',
                'modern_industrialization:kyber_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'carmot',
            tier: 3,
            items: [
                [3, 'modern_industrialization:carmot_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:redstone_seeds',
                'botania:podzol_seeds',
                'modern_industrialization:carmot_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'banglum',
            tier: 3,
            items: [
                [3, 'modern_industrialization:banglum_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:copper_seeds',
                'botania:podzol_seeds',
                'modern_industrialization:banglum_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'aquarium',
            tier: 3,
            items: [
                [3, 'modern_industrialization:aquarium_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:lapis_lazuli_seeds',
                'botania:infused_seeds',
                'modern_industrialization:aquarium_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'adamantite',
            tier: 3,
            items: [
                [3, 'modern_industrialization:adamantite_dust']
            ],
            base: 'spectrum:glistering_melon_seeds',
            ingredients: [
                'mysticalagriculture:titanium_seeds',
                'botania:scorched_seeds',
                'modern_industrialization:adamantite_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'experience',
            tier: 4,
            items: [
                [3, 'vitalize:experience_cubed']
            ],
            base: 'mysticalagriculture:redstone_seeds',
            ingredients: [
                'spectrum:glistering_melon_seeds',
                'neepmeat:whisper_wheat_seeds',
                'vitalize:experience_cubed',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'end',
            tier: 4,
            items: [
                [64,'minecraft:end_stone'], 
                [16,'minecraft:chorus_fruit'], 
                [1,'minecraft:shulker_shell']
            ],
            base: 'mysticalagriculture:nether_seeds',
            ingredients: [
                'mysticalagriculture:obsidian_seeds',
                'minecraft:end_stone',
                'minecraft:ender_pearl',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'nickel',
            tier: 4,
            items: [
                [3, 'modern_industrialization:nickel_dust']
            ],
            base: 'mysticalagriculture:iron_seeds',
            ingredients: [
                'mysticalagriculture:prismarine_seeds',
                'mysticalagriculture:deepslate_seeds',
                'modern_industrialization:nickel_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'chromium',
            tier: 4,
            items: [
                [3, 'modern_industrialization:chromium_dust']
            ],
            base: 'mysticalagriculture:chromium_seeds',
            ingredients: [
                'mysticalagriculture:redstone_seeds',
                'mysticalagriculture:aluminum_seeds',
                'modern_industrialization:chromium_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'gold',
            tier: 4,
            items: [
                [3, 'modern_industrialization:gold_dust']
            ],
            base: 'mysticalagriculture:copper_seeds',
            ingredients: [
                'mysticalagriculture:silver_seeds',
                'mysticalagriculture:deepslate_seeds',
                'modern_industrialization:gold_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'lapis_lazuli',
            tier: 4,
            items: [
                [12, 'minecraft:lapis_lazuli']
            ],
            base: 'mysticalagriculture:prismarine_seeds',
            ingredients: [
                'mysticalagriculture:redstone_seeds',
                'mysticalagriculture:copper_seeds',
                'minecraft:lapis_lazuli',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'titanium',
            tier: 4,
            items: [
                [3, 'modern_industrialization:titanium_dust']
            ],
            base: 'mysticalagriculture:prismarine_seeds',
            ingredients: [
                'mysticalagriculture:iron_seeds',
                'mysticalagriculture:obsidian_seeds',
                'modern_industrialization:titanium_dust',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'emerald',
            tier: 5,
            items: [
                [3, 'minecraft:emerald']
            ],
            base: 'mysticalagriculture:prismarine_seeds',
            ingredients: [
                'mysticalagriculture:lapis_lazuli_seeds',
                'mysticalagriculture:aluminum_seeds',
                'mysticalagriculture:copper_seeds',
                'minecraft:emerald',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'netherite',
            tier: 5,
            items: [
                [2, 'minecraft:netherite_scrap']
            ],
            base: 'mysticalagriculture:nether_seeds',
            ingredients: [
                'mysticalagriculture:gold_seeds',
                'mysticalagriculture:iron_seeds',
                'mysticalagriculture:obsidian_seeds',
                'minecraft:netherite_scrap',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'diamond',
            tier: 5,
            items: [
                [3, 'minecraft:diamond']
            ],
            base: 'mysticalagriculture:prismarine_seeds',
            ingredients: [
                'mysticalagriculture:coal_seeds',
                'mysticalagriculture:nether_quartz_seeds',
                'mysticalagriculture:deepslate_seeds',
                'minecraft:diamond',
                'neepmeat:biomass'
            ] 
        },
        {
            name: 'platinum',
            tier: 5,
            items: [
                [3, 'modern_industrialization:platinum_dust']
            ],
            base: 'mysticalagriculture:gold_seeds',
            ingredients: [
                'mysticalagriculture:nickel_seeds',
                'mysticalagriculture:glowstone_seeds',
                'mysticalagriculture:copper_seeds',
                'modern_industrialization:platinum_dust',
                'neepmeat:biomass'
            ] 
        }

    ]

    simple.forEach(seed => {
        soil_types.forEach(soil => {
            event.recipes.modern_industrialization.growing_chamber(Math.floor(16 * seed.tier * soil.energy_multiplier) + 16, 300 * seed.tier + 200) //Mb, ticks
                .itemIn(`mysticalagriculture:${seed.name}_seeds`, soil.fertility_multiplier)
                .itemIn(soil.name, 0)
                .fluidIn('modern_industrialization:oxygen', 150)
                .fluidIn('minecraft:water', 250)
                .itemOut(`8x mysticalagriculture:${seed.name}_essence`)
                .itemOut(`4x mysticalagriculture:${seed.name}_essence`, 0.5)

        });

        seed.items.forEach(output => {
            event.recipes.modern_industrialization.chemical_reactor(16, 200)
                .itemIn(output[1], 0)
                .itemIn(`mysticalagriculture:${seed.name}_essence`)
                .fluidIn('spectrum:liquid_crystal', 1)
                .fluidIn('neepmeat:compressed_air', seed.tier * 200 + 200)
                .itemOut(`${output[0]}x ${output[1]}`)
        });

        event.recipes.neepmeat.manufacture({
            'base': { 'id': seed.base },
            'steps': seed.ingredients.map((item) => ({ 'id': 'neepmeat:combine', 'resource': item }))
                .concat({ 'id': 'neepmeat:inject', 'resource': 'modern_industrialization:mutagen' }),
            'result': {
                'resource': `mysticalagriculture:${seed.name}_seeds`,
                'amount': 4
            }
        });
    })
    elemental.forEach(seed => {
        soil_types.forEach(soil => {
            event.recipes.modern_industrialization.growing_chamber(Math.floor(48 * soil.energy_multiplier) + 16, 600) //Mb, ticks
                .itemIn(`mysticalagriculture:${seed.name}_seeds`, soil.fertility_multiplier)
                .itemIn(soil.name, 0)
                .fluidIn('modern_industrialization:oxygen', 150)
                .fluidIn('minecraft:water', 250)
                .itemOut(`8x mysticalagriculture:${seed.name}_essence`)
                .itemOut(`4x mysticalagriculture:${seed.name}_essence`, 0.5)
        });
        
        event.recipes.neepmeat.manufacture({
            'base': { 'id': seed.base },
            'steps': seed.ingredients.map((item) => ({ 'id': 'neepmeat:combine', 'resource': item }))
                .concat({ 'id': 'neepmeat:inject', 'resource': 'modern_industrialization:mutagen' }),
            'result': {
                'resource': `mysticalagriculture:${seed.name}_seeds`,
                'amount': 4
            }
        });
    });

    mob.forEach(mob => {
        event.recipes.neepmeat.entity_to_item({
            'base': { 'id': (mob.name == 'fish') ? `minecraft:salmon` : `minecraft:${mob.name}` },
            'steps': mob.ingredients.concat( 'neepmeat:whisper_wheat_seeds', 'neepmeat:biomass', 'neepmeat:flesh_potato')
                .map(step => ({ 'id': 'neepmeat:implant', 'resource': step })),
            'result': {
                'resource': `mysticalagriculture:${mob.name}_seeds`,
                'amount': 4
            }
        });
        soil_types.forEach(soil => {
            event.recipes.modern_industrialization.growing_chamber(Math.floor(64 * soil.energy_multiplier) + 16, 600) //Mb, ticks
                .itemIn(`mysticalagriculture:${mob.name}_seeds`, soil.fertility_multiplier)
                .itemIn(soil.name, 0)
                .fluidIn('modern_industrialization:oxygen', 150)
                .fluidIn('minecraft:water', 250)
                .itemOut(`8x mysticalagriculture:${mob.name}_essence`)
                .itemOut(`4x mysticalagriculture:${mob.name}_essence`, 0.5)
        });
        mob.drops.forEach(drop => {
            event.recipes.modern_industrialization.chemical_reactor(16, 200)
                .itemIn(drop[1], 0)
                .itemIn(`mysticalagriculture:${mob.name}_essence`)
                .fluidIn('spectrum:liquid_crystal', 1)
                .fluidIn('neepmeat:compressed_air', 400)
                .itemOut(`${drop[0]}x ${drop[1]}`)

        });
    });

    event.recipes.botania.runic_altar(`4x botania:rune_fire`,
        [
            'kubejs:rune_template',
            'bewitchment:fiery_serum',
            'mysticalagriculture:fire_essence'
        ],
        4000
    );
    event.recipes.botania.runic_altar(`4x botania:rune_water`,
        [
            'kubejs:rune_template',
            'bewitchment:aqua_cerate',
            'mysticalagriculture:water_essence',
        ],
        4000
    );
    event.recipes.botania.runic_altar(`4x botania:rune_air`,
        [
            'kubejs:rune_template',
            'bewitchment:heaven_extract',
            'mysticalagriculture:air_essence',
        ],
        4000
    );
    event.recipes.botania.runic_altar(`4x botania:rune_earth`,
        [
            'kubejs:rune_template',
            'bewitchment:earth_ichor',
            'mysticalagriculture:earth_essence',
        ],
        4000
    );
    add_runic_altar_recipe(event, 
        {
            items_in: [
                ['kubejs:rune_template'],
                ['bewitchment:fiery_serum'],
                ['mysticalagriculture:fire_essence'],
            ],
            items_out: [
                ['4x botania:rune_fire'],
            ],
            mana: 500,
        }
    )
    add_runic_altar_recipe(event, 
        {
            items_in: [
                ['kubejs:rune_template'],
                ['bewitchment:aqua_cerate'],
                ['mysticalagriculture:water_essence'],
            ],
            items_out: [
                ['4x botania:rune_water'],
            ],
            mana: 500,
        }
    )
    add_runic_altar_recipe(event, 
        {
            items_in: [
                ['kubejs:rune_template'],
                ['bewitchment:heaven_extract'],
                ['mysticalagriculture:air_essence'],
            ],
            items_out: [
                ['4x botania:rune_air'],
            ],
            mana: 500,
        }
    )
    add_runic_altar_recipe(event, 
        {
            items_in: [
                ['kubejs:rune_template'],
                ['bewitchment:earth_ichor'],
                ['mysticalagriculture:earth_essence'],
            ],
            items_out: [
                ['4x botania:rune_earth'],
            ],
            mana: 500,
        }
    )
})
