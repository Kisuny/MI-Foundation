//priority: 0

ServerEvents.recipes(event => {
    // Generic removal
    const rem = [
        'ae2:silicon',
        'ae2:vibration_chamber',
        'ad_astra:coal_generator',
        'ad_astra:compressor',
        'ad_astra:cryo_freezer',
        'ad_astra:desh_cable',
        'ad_astra:desh_fluid_pipe',
        'ad_astra:energizer',
        'ad_astra:fuel_refinery',
        'ad_astra:hammer',
        'ad_astra:iron_stick',
        'ad_astra:nasa_workbench',
        'ad_astra:ostrum_fluid_pipe',
        'ad_astra:steel_cable',
        'ad_astra:water_pump',
        'ad_astra:wrench',
        'ad_astra:hammer',
        'ad_astra:engine_frame',
        'ad_astra:cable_duct',
        'ad_astra:fluid_pipe_duct',
        'ad_astra:steel_block',
        'ad_astra:steel_nugget',
        'ad_astra:steel_ingot',
        'ad_astra:iron_rod',
        'ad_astra:oxygen_bucket',
        'ad_astra:cryo_fuel_bucket',
        'ad_astra:fuel_bucket',
        'ad_astra:engine_fan'
    ]

    rem.forEach(element => event.remove({ output: element }))

    event.remove({ type: 'ad_astra:compressing' })
    event.remove({ input: 'ad_astra:hammer' })
    event.remove({ type: "ad_astra:oxygen_conversion" })
    event.remove({ type: "minecraft:smelting", output: 'ad_astra:desh_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'ad_astra:desh_ingot' })
    event.remove({ type: "minecraft:smelting", output: 'ad_astra:ostrum_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'ad_astra:ostrum_ingot' })
    event.remove({ type: "minecraft:smelting", output: 'ad_astra:calorite_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'ad_astra:calorite_ingot' })

    event.recipes.ad_astra.oxygen_conversion({
        "input": "modern_industrialization:oxygen",
        "output": "modern_industrialization:oxygen",
        "conversion_ratio": 1.0
    })

    event.remove({ type: "ad_astra:space_station" })
    event.recipes.ad_astra.space_station({
        "ingredients": [
            {
                "ingredient": {
                    "item": 'ad_astra:steel_plating'
                },
                "count": 256
            },
            {
                "ingredient": {
                    "item": 'modern_industrialization:digital_circuit'
                },
                "count": 32
            },
            {
                "ingredient": {
                    "tag": 'modern_industrialization:fluid_pipes'
                },
                "count": 128
            },
            {
                "ingredient": {
                    "item": 'modern_industrialization:steel_machine_casing_pipe'
                },
                "count": 128
            },
            {
                "ingredient": {
                    "item": 'ae2:quartz_glass'
                },
                "count": 64
            },
            {
                "ingredient": {
                    "item": 'modern_industrialization:large_pump'
                },
                "count": 8
            },
            {
                "ingredient": {
                    "item": 'ae2:controller'
                },
                "count": 4
            },
            {
                "ingredient": {
                    "item": 'ae2:security_station'
                },
                "count": 1
            }
        ]
    })


    global.dyeColors.forEach(color => {
        event.remove({ id: `ad_astra:recipes/${color.name}_flag` })
        event.shaped(`ad_astra:${color.name}_flag`, [
            'RWW',
            'RWW',
            'R  '
        ], {
            R: 'modern_industrialization:stainless_steel_rod',
            W: `minecraft:${color.name}_wool`
        })
    })



    /////////////////////////////
    // Assembler Recipes

    // Doors
    event.remove({ id: 'ad_astra:recipes/iron_sliding_door' })
    event.recipes.modern_industrialization.assembler(16, 200)
        .itemIn('12x modern_industrialization:iron_large_plate')
        .itemIn('2x ae2:quartz_glass')
        .itemIn('4x modern_industrialization:piston')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut('ad_astra:iron_sliding_door')

    event.remove({ id: 'ad_astra:recipes/steel_sliding_door' })
    event.recipes.modern_industrialization.assembler(16, 200)
        .itemIn('12x modern_industrialization:steel_large_plate')
        .itemIn('2x ae2:quartz_glass')
        .itemIn('4x modern_industrialization:piston')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut('ad_astra:steel_sliding_door')

    event.remove({ id: 'ad_astra:recipes/reinforced_door' })
    event.recipes.modern_industrialization.assembler(32, 400)
        .itemIn('8x modern_industrialization:blastproof_alloy_large_plate')
        .itemIn('4x ae2:quartz_glass')
        .itemIn('16x modern_industrialization:steel_large_plate')
        .itemIn('8x modern_industrialization:piston')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:reinforced_door')

    event.remove({ id: 'ad_astra:recipes/desh_sliding_door' })
    event.recipes.modern_industrialization.assembler(16, 200)
        .itemIn('8x modern_industrialization:desh_large_plate')
        .itemIn('2x ae2:quartz_glass')
        .itemIn('4x modern_industrialization:piston')
        .itemIn('4x modern_industrialization:steel_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut('ad_astra:desh_sliding_door')

    event.remove({ id: 'ad_astra:recipes/ostrum_sliding_door' })
    event.recipes.modern_industrialization.assembler(16, 200)
        .itemIn('8x modern_industrialization:ostrum_large_plate')
        .itemIn('2x ae2:quartz_glass')
        .itemIn('4x modern_industrialization:piston')
        .itemIn('4x modern_industrialization:steel_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut('ad_astra:ostrum_sliding_door')

    event.remove({ id: 'ad_astra:recipes/calorite_sliding_door' })
    event.recipes.modern_industrialization.assembler(16, 200)
        .itemIn('8x modern_industrialization:calorite_large_plate')
        .itemIn('2x ae2:quartz_glass')
        .itemIn('4x modern_industrialization:piston')
        .itemIn('4x modern_industrialization:steel_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut('ad_astra:calorite_sliding_door')

    // Rockets
    event.remove({ output: 'ad_astra:tier_1_rocket' })
    event.recipes.modern_industrialization.assembler(16, 3200) //Eu, ticks
        .itemIn('16x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('3x ad_astra:steel_engine')
        .itemIn('4x ad_astra:steel_tank')
        .itemIn('ad_astra:rocket_nose_cone')
        .itemIn('4x ad_astra:rocket_fin')
        .itemIn('8x modern_industrialization:electronic_circuit')
        .itemIn('modern_industrialization:carbon_large_plate')
        .itemIn('8x minecraft:glass_pane')
        .itemIn('64x modern_industrialization:steel_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 8000)
        .itemOut('ad_astra:tier_1_rocket')

    event.remove({ output: 'ad_astra:tier_2_rocket' })
    event.recipes.modern_industrialization.assembler(32, 6400) //Eu, ticks
        .itemIn('16x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('5x ad_astra:desh_engine')
        .itemIn('7x ad_astra:desh_tank')
        .itemIn('ad_astra:rocket_nose_cone')
        .itemIn('4x ad_astra:rocket_fin')
        .itemIn('8x modern_industrialization:digital_circuit')
        .itemIn('32x modern_industrialization:steel_large_plate')
        .itemIn('8x minecraft:glass_pane')
        .itemIn('32x modern_industrialization:desh_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 8000)
        .itemOut('ad_astra:tier_2_rocket')

    event.remove({ output: 'ad_astra:tier_3_rocket' })
    event.recipes.modern_industrialization.assembler(64, 9600) //Eu, ticks
        .itemIn('16x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('7x ad_astra:ostrum_engine')
        .itemIn('9x ad_astra:ostrum_tank')
        .itemIn('ad_astra:rocket_nose_cone')
        .itemIn('4x ad_astra:rocket_fin')
        .itemIn('8x modern_industrialization:processing_unit')
        .itemIn('32x modern_industrialization:steel_large_plate')
        .itemIn('4x ae2:quartz_vibrant_glass')
        .itemIn('32x modern_industrialization:ostrum_large_plate')
        .fluidIn('modern_industrialization:argon', 4000)
        .itemOut('ad_astra:tier_3_rocket')

    event.remove({ output: 'ad_astra:tier_4_rocket' })
    event.recipes.modern_industrialization.assembler(128, 12800) //Eu, ticks
        .itemIn('ad_astra:rocket_nose_cone')
        .itemIn('2x ad_astra:calorite_tank')
        .itemIn('2x ad_astra:rocket_fin')
        .itemIn('2x ad_astra:calorite_engine')
        .itemIn('16x modern_industrialization:calorite_large_plate')
        .itemIn('16x modern_industrialization:compactium_large_plate')
        .itemIn('modern_industrialization:large_heat_exchanger')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('2x ae2:quartz_vibrant_glass')
        .fluidIn('modern_industrialization:argon', 8000)
        .itemOut('ad_astra:tier_4_rocket')

    // Rocket Parts
    event.remove({ output: 'ad_astra:rocket_fin' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('4x modern_industrialization:rocket_alloy_plate')
        .itemIn('8x modern_industrialization:steel_large_plate')
        .itemIn('4x modern_industrialization:steel_curved_plate')
        .itemIn('modern_industrialization:invar_large_plate')
        .itemIn('modern_industrialization:piston')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:rocket_fin')

    event.remove({ output: 'ad_astra:rocket_nose_cone' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('12x modern_industrialization:rocket_alloy_plate')
        .itemIn('minecraft:lightning_rod')
        .itemIn('modern_industrialization:carbon_large_plate')
        .itemIn('16x modern_industrialization:steel_curved_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:rocket_nose_cone')

    event.remove({ output: 'ad_astra:steel_engine' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('4x modern_industrialization:rocket_alloy_plate')
        .itemIn('modern_industrialization:large_pump')
        .itemIn('modern_industrialization:tungsten_large_plate')
        .itemIn('4x modern_industrialization:steel_large_plate')
        .itemIn('16x #modern_industrialization:fluid_pipes')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:steel_engine')

    event.remove({ output: 'ad_astra:steel_tank' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('4x modern_industrialization:aluminum_tank')
        .itemIn('modern_industrialization:large_pump')
        .itemIn('4x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('2x modern_industrialization:electronic_circuit')
        .itemIn('16x modern_industrialization:steel_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:steel_tank')

    event.remove({ output: 'ad_astra:desh_engine' })
    event.recipes.modern_industrialization.assembler(8, 320) //Eu, ticks
        .itemIn('ad_astra:steel_engine')
        .itemIn('4x modern_industrialization:tungsten_large_plate')
        .itemIn('4x modern_industrialization:desh_large_plate')
        .itemIn('2x modern_industrialization:advanced_pump')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('32x #modern_industrialization:fluid_pipes')
        .itemIn('2x modern_industrialization:cooling_cell')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:desh_engine')

    event.remove({ output: 'ad_astra:desh_tank' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('4x modern_industrialization:stainless_steel_tank')
        .itemIn('modern_industrialization:advanced_pump')
        .itemIn('8x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('2x modern_industrialization:digital_circuit')
        .itemIn('16x modern_industrialization:desh_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:desh_tank')

    event.remove({ output: 'ad_astra:ostrum_engine' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('16x #modern_industrialization:fluid_pipes')
        .itemIn('8x modern_industrialization:cooling_cell')
        .itemIn('modern_industrialization:processing_unit')
        .itemIn('modern_industrialization:large_advanced_pump')
        .itemIn('4x modern_industrialization:blastproof_alloy_large_plate')
        .itemIn('ad_astra:desh_engine')
        .itemIn('2x modern_industrialization:ostrum_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:ostrum_engine')

    event.remove({ output: 'ad_astra:ostrum_tank' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('4x modern_industrialization:titanium_tank')
        .itemIn('modern_industrialization:large_advanced_pump')
        .itemIn('8x modern_industrialization:rocket_alloy_large_plate')
        .itemIn('modern_industrialization:processing_unit')
        .itemIn('modern_industrialization:ostrum_large_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:ostrum_tank')

    event.remove({ output: 'ad_astra:calorite_engine' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('8x modern_industrialization:calorite_large_plate')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('8x modern_industrialization:blastproof_alloy_large_plate')
        .itemIn('2x modern_industrialization:tungsten_large_plate')
        .itemIn('modern_industrialization:large_heat_exchanger')
        .itemIn('32x #modern_industrialization:fluid_pipes')
        .itemIn('modern_industrialization:iridium_plate')
        .itemIn('2x ae2:annihilation_core')
        .fluidIn('modern_industrialization:argon', 1000)
        .itemOut('ad_astra:calorite_engine')

    event.remove({ output: 'ad_astra:calorite_tank' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('2x ad_astra:ostrum_tank')
        .itemIn('8x modern_industrialization:calorite_large_plate')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('16x #modern_industrialization:fluid_pipes')
        .itemIn('4x ae2:logic_processor')
        .fluidIn('modern_industrialization:argon', 1000)
        .itemOut('ad_astra:calorite_tank')

    event.remove({ id: 'ad_astra:recipes/solar_panel' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:advanced_machine_hull')
        .itemIn('ae2:energy_acceptor')
        .itemIn('3x modern_industrialization:redstone_battery')
        .itemIn('4x ad_astra:desh_plate')
        .itemIn('16x modern_industrialization:aluminum_wire')
        .itemIn('16x modern_industrialization:diode')
        .itemIn('modern_industrialization:large_motor')
        .itemIn('modern_industrialization:robot_arm')
        .itemIn('8x kubejs:photoelectric_cell')
        .fluidIn('modern_industrialization:soldering_alloy', 400)
        .itemOut('ad_astra:solar_panel')

    // Other Parts
    event.remove({ output: 'ad_astra:oxygen_tank' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:steel_tank')
        .itemIn('4x #c:carbon_plates')
        .itemIn('8x modern_industrialization:aluminum_curved_plate')
        .itemIn('4x modern_industrialization:rubber_sheet')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .fluidIn('modern_industrialization:acrylic_glue', 100)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:oxygen_tank')

    event.remove({ output: 'ad_astra:oxygen_sensor' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:turbo_machine_hull')
        .itemIn('2x modern_industrialization:diode')
        .itemIn('4x modern_industrialization:ostrum_large_plate')
        .itemIn('minecraft:redstone_lamp')
        .itemIn('8x modern_industrialization:redstone_battery')
        .fluidIn('modern_industrialization:molten_redstone', 300)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:oxygen_sensor')

    event.remove({ output: 'ad_astra:oxygen_distributor' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:turbo_machine_hull')
        .itemIn('ad_astra:oxygen_loader')
        .itemIn('2x modern_industrialization:desh_large_plate')
        .itemIn('3x modern_industrialization:stainless_steel_rotor')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('16x #modern_industrialization:fluid_pipes')
        .itemOut('ad_astra:oxygen_distributor')

    event.remove({ output: 'ad_astra:oxygen_loader' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:advanced_machine_hull')
        .itemIn('2x modern_industrialization:pump')
        .itemIn('2x modern_industrialization:steel_tank')
        .itemIn('modern_industrialization:aluminum_rotor')
        .itemIn('2x modern_industrialization:redstone_battery')
        .itemIn('3x modern_industrialization:steel_large_plate')
        .itemOut('ad_astra:oxygen_loader')


    // Space Suit
    event.remove({ output: 'ad_astra:space_helmet' })
    event.recipes.modern_industrialization.assembler(16, 400) //Eu, ticks
        .itemIn('4x #modern_industrialization:fluid_pipes')
        .itemIn('20x modern_industrialization:rubber_sheet')
        .itemIn('10x architects_palette:spool')
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('#c:glass_panes')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:nylon', 200)
        .itemOut('ad_astra:space_helmet')

    event.remove({ output: 'ad_astra:space_suit' })
    event.recipes.modern_industrialization.assembler(16, 600) //Eu, ticks
        .itemIn('8x #modern_industrialization:fluid_pipes')
        .itemIn('32x modern_industrialization:rubber_sheet')
        .itemIn('16x architects_palette:spool')
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('ad_astra:oxygen_gear')
        .fluidIn('modern_industrialization:acrylic_glue', 300)
        .fluidIn('modern_industrialization:nylon', 300)
        .itemOut('ad_astra:space_suit')

    event.remove({ output: 'ad_astra:space_pants' })
    event.recipes.modern_industrialization.assembler(16, 400) //Eu, ticks
        .itemIn('8x #modern_industrialization:fluid_pipes')
        .itemIn('28x modern_industrialization:rubber_sheet')
        .itemIn('14x architects_palette:spool')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:nylon', 200)
        .itemOut('ad_astra:space_pants')

    event.remove({ output: 'ad_astra:space_boots' })
    event.recipes.modern_industrialization.assembler(16, 400) //Eu, ticks
        .itemIn('4x #modern_industrialization:fluid_pipes')
        .itemIn('16x modern_industrialization:rubber_sheet')
        .itemIn('8x architects_palette:spool')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:nylon', 200)
        .itemOut('ad_astra:space_boots')

    // Netherite Suit
    event.remove({ output: 'ad_astra:netherite_space_helmet' })
    event.recipes.modern_industrialization.assembler(32, 400) //Eu, ticks
        .itemIn('ad_astra:space_helmet')
        .itemIn('2x #c:desh_plates')
        .itemIn('2x #c:ostrum_plates')
        .itemIn('2x #c:netherite_plates')
        .itemIn('ae2:quartz_glass')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:netherite_space_helmet')

    event.remove({ output: 'ad_astra:netherite_space_suit' })
    event.recipes.modern_industrialization.assembler(32, 600) //Eu, ticks
        .itemIn('ad_astra:space_suit')
        .itemIn('modern_industrialization:desh_large_plate')
        .itemIn('modern_industrialization:ostrum_large_plate')
        .itemIn('modern_industrialization:netherite_large_plate')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('ad_astra:oxygen_tank')
        .fluidIn('modern_industrialization:acrylic_glue', 300)
        .fluidIn('modern_industrialization:soldering_alloy', 300)
        .itemOut('ad_astra:netherite_space_suit')

    event.remove({ output: 'ad_astra:netherite_space_pants' })
    event.recipes.modern_industrialization.assembler(32, 400) //Eu, ticks
        .itemIn('ad_astra:space_pants')
        .itemIn('3x #c:desh_plates')
        .itemIn('3x #c:ostrum_plates')
        .itemIn('3x #c:netherite_plates')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:netherite_space_pants')

    event.remove({ output: 'ad_astra:netherite_space_boots' })
    event.recipes.modern_industrialization.assembler(32, 400) //Eu, ticks
        .itemIn('ad_astra:space_boots')
        .itemIn('2x #c:desh_plates')
        .itemIn('2x #c:ostrum_plates')
        .itemIn('2x #c:netherite_plates')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:netherite_space_boots')

    // Jet Suit
    event.remove({ output: 'ad_astra:jet_suit_helmet' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('ad_astra:netherite_space_helmet')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('10x modern_industrialization:calorite_curved_plate')
        .itemIn('10x modern_industrialization:platinum_fine_wire')
        .itemIn('modern_industrialization:small_heat_exchanger')
        .itemIn('ae2:wireless_receiver')
        .itemIn('ae2:memory_card_red')
        .itemIn('minecraft:orange_stained_glass_pane')
        .itemIn('ae2:semi_dark_monitor')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:argon', 100)
        .itemOut('ad_astra:jet_suit_helmet')

    event.remove({ output: 'ad_astra:jet_suit' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('ad_astra:netherite_space_suit')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('16x modern_industrialization:calorite_curved_plate')
        .itemIn('16x modern_industrialization:platinum_fine_wire')
        .itemIn('modern_industrialization:small_heat_exchanger')
        .itemIn('4x modern_industrialization:plutonium_battery')
        .itemIn('ad_astra:oxygen_tank')
        .itemIn('ad_astra:oxygen_tank')
        .fluidIn('modern_industrialization:acrylic_glue', 300)
        .fluidIn('modern_industrialization:argon', 150)
        .itemOut('ad_astra:jet_suit')

    event.remove({ output: 'ad_astra:jet_suit_pants' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('ad_astra:netherite_space_pants')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('14x modern_industrialization:calorite_curved_plate')
        .itemIn('14x modern_industrialization:platinum_fine_wire')
        .itemIn('modern_industrialization:small_heat_exchanger')
        .itemIn('modern_industrialization:portable_storage_unit')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:argon', 100)
        .itemOut('ad_astra:jet_suit_pants')

    event.remove({ output: 'ad_astra:jet_suit_boots' })
    event.recipes.modern_industrialization.assembler(32, 200) //Eu, ticks
        .itemIn('ad_astra:netherite_space_boots')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('8x modern_industrialization:calorite_curved_plate')
        .itemIn('8x modern_industrialization:platinum_fine_wire')
        .itemIn('modern_industrialization:small_heat_exchanger')
        .itemIn('2x ae2:speed_card')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:argon', 100)
        .itemOut('ad_astra:jet_suit_boots')

    // Car
    event.remove({ output: 'ad_astra:tier_1_rover' })
    event.recipes.modern_industrialization.assembler(8, 400)
        .itemIn('modern_industrialization:large_motor')
        .itemIn('16x #modern_industrialization:fluid_pipes')
        .itemIn('16x modern_industrialization:desh_large_plate')
        .itemIn('8x modern_industrialization:desh_curved_plate')
        .itemIn('4x ad_astra:wheel')
        .itemIn('8x modern_industrialization:steel_rod')
        .itemIn('ad_astra:steel_tank')
        .fluidIn('modern_industrialization:soldering_alloy', 1000)
        .itemOut('ad_astra:tier_1_rover')

    event.remove({ output: 'ad_astra:wheel' })
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('2x modern_industrialization:aluminum_ring')
        .itemIn('8x modern_industrialization:aluminum_rod')
        .itemIn('16x modern_industrialization:rubber_sheet')
        .fluidIn('modern_industrialization:acrylic_glue', 200)
        .fluidIn('modern_industrialization:soldering_alloy', 200)
        .itemOut('ad_astra:wheel')

    /////////////////////////////
    // Macerator Recipes
    event.recipes.modern_industrialization.macerator(2, 300) //Eu, ticks
        .itemIn('ad_astra:raw_desh')
        .itemOut('modern_industrialization:desh_dust')
        .itemOut('modern_industrialization:desh_dust', 0.5)
    event.recipes.modern_industrialization.macerator(2, 300) //Eu, ticks
        .itemIn('ad_astra:raw_ostrum')
        .itemOut('modern_industrialization:ostrum_dust')
        .itemOut('modern_industrialization:ostrum_dust', 0.5)
    event.recipes.modern_industrialization.macerator(2, 300) //Eu, ticks
        .itemIn('ad_astra:raw_calorite')
        .itemOut('modern_industrialization:calorite_dust')
        .itemOut('modern_industrialization:calorite_dust', 0.5)


    /////////////////////////////
    // Crafting Table Recipes
    event.remove({ output: 'ad_astra:oxygen_gear' })
    event.shaped('ad_astra:oxygen_gear', [
        'FRF',
        'PEP',
        'SBS'
    ], {
        F: '#modern_industrialization:fluid_pipes',
        R: 'modern_industrialization:rubber_helmet',
        E: 'modern_industrialization:electronic_circuit',
        S: 'modern_industrialization:steel_curved_plate',
        B: 'modern_industrialization:redstone_battery',
        P: 'modern_industrialization:pump'
    })

    event.remove({ id: 'ad_astra:recipes/vent' })
    event.shaped('4x ad_astra:vent', [
        'SAS',
        'SAS',
        'SAS'
    ], {
        S: 'modern_industrialization:iron_rod',
        A: 'minecraft:iron_bars'
    })

})
