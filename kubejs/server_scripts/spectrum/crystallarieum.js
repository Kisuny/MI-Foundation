//priority: 0


const pure_modern = [
    {id: 'antimony',  ink: {type: 'light_gray', ammount: 1000}, catalyst: {id:'modern_industrialization:lead_dust',          chance: 0.6}, energy: 16,time: 400},
    {id: 'tin',       ink: {type: 'light_blue', ammount: 1000}, catalyst: {id:'modern_industrialization:quartz_tiny_dust',   chance: 0.8}, energy: 16,time: 400},
    {id: 'lead',      ink: {type: 'blue',       ammount: 1000}, catalyst: {id:'modern_industrialization:silver_dust',        chance: 0.4}, energy: 16,time: 400},
    {id: 'silver',    ink: {type: 'light_blue', ammount: 1000}, catalyst: {id:'spectrum:moonstone_powder',                   chance: 0.8}, energy: 16,time: 400},

    {id: 'tungsten',  ink: {type: 'purple',     ammount: 2000}, catalyst: {id:'minecraft:netherite_scrap',                   chance: 0.1}, energy: 96,time: 600},
    {id: 'aluminum',  ink: {type: 'light_blue', ammount: 2000}, catalyst: {id:'modern_industrialization:aluminum_tiny_dust', chance: 0.8}, energy: 96,time: 600},
    {id: 'beryllium', ink: {type: 'green',      ammount: 2000}, catalyst: {id:'modern_industrialization:emerald_dust',       chance: 0.4}, energy: 96,time: 600},
    {id: 'nickel',    ink: {type: 'gray',       ammount: 2000}, catalyst: {id:'modern_industrialization:iron_dust',          chance: 0.4}, energy: 96,time: 600},

    {id: 'titanium',  ink: {type: 'magenta',    ammount: 3000}, catalyst: {id:'modern_industrialization:brookite_dust',     chance: 0.4}, energy: 32,time: 800},
    {id: 'chromium',  ink: {type: 'pink',       ammount: 3000}, catalyst: {id:'modern_industrialization:ruby_dust',         chance: 0.5}, energy: 32,time: 800},
    {id: 'platinum',  ink: {type: 'yellow',     ammount: 3000}, catalyst: {id:'modern_industrialization:gold_dust',         chance: 0.3}, energy: 32,time: 800},

    {id: 'uranium',   ink: {type: 'lime',       ammount: 4000}, catalyst: {id:'modern_industrialization:prometheum_dust',   chance: 0.2}, energy: 32,time: 800},
    {id: 'iridium',   ink: {type: 'white',      ammount: 4000}, catalyst: {id:'ae2:charged_certus_quartz_crystal',          chance: 0.2}, energy: 32,time: 800},
]

const pure_spectrum = [
    {id: 'azurite',    ink: {type: 'blue',    ammount: 3000}, catalyst: {id:'spectrum:pure_copper',      chance: 0.2}, energy: 32, time: 800},
    {id: 'malachite',  ink: {type: 'white',   ammount: 3000}, catalyst: {id:'spectrum:moonstone_powder', chance: 1},   energy: 32, time: 800},
    {id: 'bloodstone', ink: {type: 'red',     ammount: 3000}, catalyst: {id:'spectrum:pure_copper',      chance: 0.8}, energy: 32, time: 800},

    {id: 'bismuth',    ink: {type: 'cyan',    ammount: 4000}, catalyst: {id:'spectrum:bismuth_flake',    chance: 0.5}, energy: 64,time: 800},
]

const pure_ad_astra = [
    {id: 'desh',     ink: {type: 'orange',  ammount: 2000},  catalyst: {id:'modern_industrialization:palladium_dust',    chance: 0.3}, energy: 32,time: 600},
    {id: 'ostrum',   ink: {type: 'pink',    ammount: 3000}, catalyst: {id:'modern_industrialization:chromium_dust',     chance: 0.4}, energy: 32,time: 800},
    {id: 'calorite', ink: {type: 'red',     ammount: 4000}, catalyst: {id:'modern_industrialization:uranium_235_dust',  chance: 0.2}, energy: 64,time: 800},
]

const pure_vanilla = [
    {id: 'coal',            base: 'minecraft:coal',    ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'spectrum:fiery_powder',        chance: 0.2}, energy: 16, time: 400},
    {id: 'iron',            base:'minecraft:raw_iron', ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'spectrum:neolith',             chance: 0.4}, energy: 16, time: 400},
    {id: 'gold',            base:'minecraft:raw_gold', ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'spectrum:neolith',             chance: 0.8}, energy: 16, time: 400},
    {id: 'diamond',         base: 'minecraft:diamond', ink: {type: 'cyan',   ammount: 1000}, catalyst: {id:'minecraft:coal_block',         chance: 0.8}, energy: 16, time: 400},
    {id: 'emerald',         base:'minecraft:emerald', ink: {type: 'cyan',   ammount: 1000}, catalyst: {id:'spectrum:midnight_chip',       chance: 0.8}, energy: 16, time: 400},
    {id: 'redstone',        base: 'minecraft:redstone', ink: {type: 'yellow', ammount: 1000}, catalyst: {id:'spectrum:shimmerstone_gem',    chance: 0.8}, energy: 16, time: 400},
    {id: 'lapis',           base:'minecraft:lapis_lazuli', ink: {type: 'purple', ammount: 1000}, catalyst: {id:'spectrum:moonstone_powder',    chance: 0.8}, energy: 16, time: 400},
    {id: 'copper',          base:'minecraft:raw_copper', ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'vitalize:experience_cubed',    chance: 0.6}, energy: 16, time: 400},
    {id: 'quartz',          base:'minecraft:quartz', ink: {type: 'cyan',   ammount: 1000}, catalyst: {id:'spectrum:midnight_chip',       chance: 0.6}, energy: 16, time: 400},
    {id: 'glowstone',       base:'minecraft:glowstone_dust', ink: {type: 'yellow', ammount: 1000}, catalyst: {id:'spectrum:moonstone_shard',     chance: 0.6}, energy: 16, time: 400},
    {id: 'netherite_scrap', base:'minecraft:netherite_scrap', ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'spectrum:stratine_fragments',  chance: 0.6}, energy: 16, time: 400},
                                                                                                                                                   
    {id: 'prismarine',      base:'minecraft:prismarine_crystals', ink: {type: 'cyan',   ammount: 1000}, catalyst: {id:'spectrum:mermaids_gem',        chance: 0.6}, energy: 16, time: 600},
    {id: 'echo',            base:'minecraft:echo_shard', ink: {type: 'brown',  ammount: 1000}, catalyst: {id:'vitalize:experience_cubed',    chance: 0.6}, energy: 16, time: 600},
                                                                                                                                                   
    {id: 'fluix',           base:'ae2:fluix_crystal', ink: {type: 'yellow', ammount: 1000}, catalyst: {id:'spectrum:storm_stone',         chance: 0.6}, energy: 16, time: 400},
    {id: 'certus_quartz',   base:'ae2:certus_quartz_crystal', ink: {type: 'yellow', ammount: 1000}, catalyst: {id:'spectrum:storm_stone',         chance: 0.6}, energy: 16, time: 400},
] 



ServerEvents.recipes(event => {
    pure_vanilla.forEach(ore => {
        event.recipes.modern_industrialization.chemical_reactor(16, 100)
            .itemIn(ore.base)
            .fluidIn('spectrum:liquid_crystal', 100)
            .itemOut(`spectrum:small_${ore.id}_bud`)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time)
            .itemIn(`spectrum:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`spectrum:large_${ore.id}_bud`)
            .itemOut(`spectrum:small_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time)
            .itemIn(`spectrum:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`spectrum:${ore.id}_cluster`)
            .itemOut(`spectrum:large_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.macerator(8, 100)
            .itemIn(`spectrum:${ore.id}_cluster`)
            .itemOut(`3x spectrum:pure_${ore.id}`)
    });


    // terrasteel
    event.recipes.modern_industrialization.chemical_reactor(16, 100)
        .itemIn('kubejs:catalyst_terrasteel')
        .fluidIn('spectrum:liquid_crystal', 100)
        .itemOut(`kubejs:terrasteel_small_bud`)
    event.recipes.modern_industrialization.industrial_crystallarieum(64, 800)
        .itemIn('kubejs:terrasteel_small_bud')
        .itemIn('botania:mana_powder')
        .fluidIn('modern_industrialization:lime_ink', 6000)
        .itemOut('kubejs:terrasteel_large_bud')
        .itemOut('kubejs:terrasteel_small_bud', 0.5)
    event.recipes.modern_industrialization.industrial_crystallarieum(128, 800)
        .itemIn('kubejs:terrasteel_large_bud')
        .itemIn('botania:mana_powder')
        .fluidIn('modern_industrialization:lime_ink', 6000)
        .itemOut('kubejs:terrasteel_cluster')
        .itemOut('kubejs:terrasteel_large_bud', 0.5)
    event.recipes.modern_industrialization.macerator(8, 100)
        .itemIn('kubejs:terrasteel_cluster')
        .itemOut('3x kubejs:pure_terrasteel')


    pure_spectrum.forEach(ore => {
        if (ore.id === 'bismuth') {
            event.recipes.modern_industrialization.chemical_reactor(16, 100)
                .itemIn(`spectrum:bismuth_flake`)
                .fluidIn('spectrum:liquid_crystal', 100)
                .itemOut(`spectrum:small_${ore.id}_bud`)
            event.recipes.modern_industrialization.macerator(8, 100)
                .itemIn(`spectrum:${ore.id}_cluster`)
                .itemOut(`3x spectrum:bismuth_crystal`)
            event.recipes.modern_industrialization.macerator(8, 100)
                .itemIn('spectrum:bismuth_crystal')
                .itemOut(`3x spectrum:bismuth_flake`)
        } else {
            event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time)
                .itemIn(`spectrum:raw_${ore.id}`)
                .itemIn(ore.catalyst.id, ore.catalyst.chance)
                .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
                .itemOut(`spectrum:small_${ore.id}_bud`)
            event.recipes.modern_industrialization.macerator(8, 100)
                .itemIn(`spectrum:${ore.id}_cluster`)
                .itemOut(`3x spectrum:refined_${ore.id}`)
        }
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time * 0.6)
            .itemIn(`spectrum:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`spectrum:large_${ore.id}_bud`)
            .itemOut(`spectrum:small_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time * 0.3)
            .itemIn(`spectrum:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`spectrum:${ore.id}_cluster`)
            .itemOut(`spectrum:large_${ore.id}_bud`, 0.5)

    });

    pure_ad_astra.forEach(ore => {
        event.recipes.modern_industrialization.chemical_reactor(16, 100)
            .itemIn(`ad_astra:raw_${ore.id}`)
            .fluidIn('spectrum:liquid_crystal', 100)
            .itemOut(`kubejs:small_${ore.id}_bud`)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time * 0.6)
            .itemIn(`kubejs:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`kubejs:large_${ore.id}_bud`)
            .itemOut(`kubejs:small_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time * 0.3)
            .itemIn(`kubejs:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`kubejs:${ore.id}_cluster`)
            .itemOut(`kubejs:large_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.macerator(8, 100)
            .itemIn(`kubejs:${ore.id}_cluster`)
            .itemOut(`3x kubejs:pure_${ore.id}`)
    });

    pure_modern.forEach(ore => {
        if (ore.id === 'aluminum') {
            event.recipes.modern_industrialization.chemical_reactor(16, 100)
                .itemIn(`modern_industrialization:bauxite_crushed_dust`)
                .fluidIn('spectrum:liquid_crystal', 100)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else if (ore.id === 'beryllium') {
            event.recipes.modern_industrialization.chemical_reactor(16, 100)
                .itemIn(`modern_industrialization:beryllium_dust`)
                .fluidIn('spectrum:liquid_crystal', 100)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else if (ore.id === 'chromium') {
            event.recipes.modern_industrialization.chemical_reactor(16, 100)
                .itemIn(`modern_industrialization:chromium_crushed_dust`)
                .fluidIn('spectrum:liquid_crystal', 100)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        } else {
            event.recipes.modern_industrialization.chemical_reactor(16, 100)
                .itemIn(`modern_industrialization:raw_${ore.id}`)
                .fluidIn('spectrum:liquid_crystal', 100)
                .itemOut(`kubejs:small_${ore.id}_bud`)
        }
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time)
            .itemIn(`kubejs:small_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`kubejs:large_${ore.id}_bud`)
            .itemOut(`kubejs:small_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.industrial_crystallarieum(ore.energy, ore.time)
            .itemIn(`kubejs:large_${ore.id}_bud`)
            .itemIn(ore.catalyst.id, ore.catalyst.chance)
            .fluidIn(`modern_industrialization:${ore.ink.type}_ink`, ore.ink.ammount)
            .itemOut(`kubejs:${ore.id}_cluster`)
            .itemOut(`kubejs:large_${ore.id}_bud`, 0.5)
        event.recipes.modern_industrialization.macerator(8, 100)
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
