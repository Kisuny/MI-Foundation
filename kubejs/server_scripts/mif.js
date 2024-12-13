//priority: 0

ServerEvents.recipes(event => {
    
    // Flux Networks Remove
    event.remove({id:'fluxnetworks:flux_block'})
    // Flux dust is not used anywhere now, it's craft can be turned off in fluxnetworks-server.toml file

    // Pressurizer
    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:mars_air', 1000)
        .dimension('ad_astra:mars')

    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:venus_air', 1000)
        .dimension('ad_astra:venus')

    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:mercury_air', 1000)
        .dimension('ad_astra:mercury')

    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:glacio_air', 1000)
        .dimension('ad_astra:glacio')

    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:bee_air', 1000)
        .dimension('the_bumblezone:the_bumblezone')

    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:nether_air', 1000)
        .dimension('minecraft:the_nether')


    event.recipes.spectrum.pedestal({
        "time": 18000,
        "tier": "complex",
        "cyan": 2,
        "magenta": 2,
        "yellow": 2,
        "white": 16,
        "black": 8,
        "experience": 50,
        "pattern": [
            "SCS",
            "SAS",
            "SCS"
        ],
        "key": {
            "S": { "item": 'spectrum:moonstone_chiseled_basalt' },
            "C": { "item": 'kubejs:chromatically_stable_circuit' },
            "A": { "item": 'spectrum:crystal_apothecary' },
        },
        "result": {
            "item": 'modern_industrialization:industrial_crystallarieum',
            "count": 1
        },
        "required_advancement": "spectrum:lategame/grow_bismuth_in_crystallarieum"
    })
    event.recipes.spectrum.pedestal({
        "time": 2400,
        "tier": "complex",
        "cyan": 0,
        "magenta": 0,
        "yellow": 2,
        "white": 4,
        "black": 8,
        "experience": 0.5,
        "pattern": [
            "QGQ",
            "WCW",
            "QSQ"
        ],
        "key": {
            "Q": {
                "item": 'modern_industrialization:quadrillum_large_plate'
            },
            "G": {
                "item": 'spectrum:gather_node'
            },
            "W": {
                "item": 'kibe:wither_proof_glass'
            },
            "C": {
                "item": 'kubejs:chromatically_stable_circuit'
            },
            "S": {
                "item": 'spectrum:sender_node'
            }
        },
        "result": {
            "item": 'modern_industrialization:containment_chamber',
            "count": 1
        },
        "required_advancement": "spectrum:lategame/build_complex_pedestal_structure"
    })
    event.recipes.spectrum.pedestal({
        "time": 6000,
        "tier": "advanced",
        "cyan": 2,
        "magenta": 1,
        "yellow": 3,
        "white": 0,
        "black": 2,
        "experience": 0.5,
        "pattern": [
            "NRN",
            "ECP",
            "NRN"
        ],
        "key": {
            "N": {
                "item": "spectrum:neolith"
            },
            "R": {
                "item": "modern_industrialization:random_access_memory"
            },
            "C": {
                "item": "kubejs:photonic_circuit_board"
            },
            "E": {
                "item": "botania:rune_envy"
            },
            "P": {
                "item": "botania:rune_pride"
            }
        },
        "result": {
            "item": 'kubejs:spectral_circuit_board',
            "count": 1
        },
        "required_advancement": "spectrum:midgame/collect_neolith"
    })

    event.recipes.spectrum.fusion_shrine({
        'time': 600,
        'experience': 4.0,
        'fluid': 'modern_industrialization:purified_void',
        'ingredients': [
            {
                'item': 'spectrum:storm_stone',
                'count': 2
            },
            {
                'item': 'kubejs:spectral_circuit_board',
            },
            {
                'item': 'minecraft:echo_shard',
            },
            {
                'item': 'spectrum:pure_diamond',
                'count': 2
            },
            {
                'item': 'botania:pixie_dust',
                'count': 8
            }
        ],
        'result': {
            'item': 'kubejs:chromatically_stable_circuit'
        },
        'required_advancement': "spectrum:midgame/collect_neolith",
        'world_conditions': [],
        'start_crafting_effect': 'nothing',
        'during_crafting_effects': [],
        'finish_crafting_effect': 'single_visual_explosion_on_shrine'
    })

})


// Add loot when right click on ore sample from geocluster
ServerEvents.blockLootTables(event => {
    event.addSimpleBlock('kubejs:desh_ore_sample', 'ad_astra:raw_desh');
    event.addSimpleBlock('kubejs:ostrum_ore_sample', 'ad_astra:raw_ostrum');
    event.addSimpleBlock('kubejs:calorite_ore_sample', 'ad_astra:raw_calorite');
    event.addSimpleBlock('kubejs:ice_ore_sample', 'ad_astra:ice_shard');
    event.addSimpleBlock('kubejs:cheese_ore_sample', 'ad_astra:cheese');
    event.addSimpleBlock('kubejs:gadolinite_ore_sample', 'modern_industrialization:raw_gadolinite');
});

