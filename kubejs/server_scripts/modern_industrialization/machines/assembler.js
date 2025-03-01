ServerEvents.recipes(event => {
    //remove double craft from assembler
    event.remove({ id: 'modern_industrialization:steam_age/steel/assembler/steam_quarry' })

    // Compactium Battery
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:battery_alloy_plate')
        .itemIn('2x modern_industrialization:annealed_copper_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:compactium_dust')
        .itemOut('modern_industrialization:compactium_battery')
    // Photonic circuit
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:processing_unit')
        .itemIn('2x ae2:logic_processor')
        .itemIn('2x kubejs:photoelectric_cell')
        .itemIn('kubejs:photonic_circuit_board')
        .itemOut('kubejs:photonic_circuit')

    // Redstone battery
    event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/battery/lv_battery' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:battery_alloy_plate')
        .itemIn('2x modern_industrialization:tin_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:redstone_alloy_dust')
        .itemOut('modern_industrialization:redstone_battery')

    // Desh Drill
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:iron_gear')
        .itemIn('modern_industrialization:electrum_cable')
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('modern_industrialization:motor')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .itemIn('modern_industrialization:desh_drill_head')
        .itemIn('modern_industrialization:pump')
        .itemOut('4x modern_industrialization:desh_drill')

    // Ostrum drill
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:iron_gear')
        .itemIn('modern_industrialization:aluminum_cable')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('modern_industrialization:advanced_motor')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .itemIn('modern_industrialization:ostrum_drill_head')
        .itemIn('modern_industrialization:advanced_pump')
        .itemOut('4x modern_industrialization:ostrum_drill')

    // Calorite drill
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:iron_gear')
        .itemIn('modern_industrialization:annealed_copper_cable')
        .itemIn('modern_industrialization:processing_unit')
        .itemIn('modern_industrialization:large_advanced_motor')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .itemIn('modern_industrialization:calorite_drill_head')
        .itemIn('modern_industrialization:large_advanced_pump')
        .itemOut('4x modern_industrialization:calorite_drill')

    const drill_enhancements = [
        'azurite_plated',
        'malachite_enhanced'
    ]
    drill_enhancements.forEach(element => {
        // Desh Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('modern_industrialization:electrum_cable')
            .itemIn('modern_industrialization:electronic_circuit')
            .itemIn('modern_industrialization:motor')
            .itemIn('2x #modern_industrialization:fluid_pipes')
            .itemIn(`kubejs:${element}_desh_drill_head`)
            .itemIn('modern_industrialization:pump')
            .itemOut(`4x kubejs:${element}_desh_drill`)

        //  Ostrum drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('modern_industrialization:aluminum_cable')
            .itemIn('modern_industrialization:digital_circuit')
            .itemIn('modern_industrialization:advanced_motor')
            .itemIn('2x #modern_industrialization:fluid_pipes')
            .itemIn(`kubejs:${element}_ostrum_drill_head`)
            .itemIn('modern_industrialization:advanced_pump')
            .itemOut(`4x kubejs:${element}_ostrum_drill`)

        // Calorite drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('modern_industrialization:annealed_copper_cable')
            .itemIn('modern_industrialization:processing_unit')
            .itemIn('modern_industrialization:large_advanced_motor')
            .itemIn('2x #modern_industrialization:fluid_pipes')
            .itemIn(`kubejs:${element}_calorite_drill_head`)
            .itemIn('modern_industrialization:large_advanced_pump')
            .itemOut(`4x kubejs:${element}_calorite_drill`)

        // Aluminum Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_aluminum_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('2x #modern_industrialization:fluid_pipes')
            .itemIn('2x modern_industrialization:pump')
            .itemIn(`modern_industrialization:electrum_cable`)
            .itemIn(`modern_industrialization:electronic_circuit`)
            .itemOut(`4x kubejs:${element}_aluminum_drill`)

        // Bronze Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_bronze_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('neepmeat:item_pipe')
            .itemIn('#neepmeat:fluid_pipes')
            .itemOut(`4x kubejs:${element}_bronze_drill`)

        // Copper Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_copper_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('neepmeat:item_pipe')
            .itemIn('#neepmeat:fluid_pipes')
            .itemOut(`4x kubejs:${element}_copper_drill`)

        // Steel Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_steel_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('2x neepmeat:item_pipe')
            .itemIn('2x modern_industrialization:motor')
            .itemIn('modern_industrialization:tin_cable')
            .itemIn('modern_industrialization:analog_circuit')
            .itemOut(`4x kubejs:${element}_steel_drill`)

        // Gold Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_gold_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('2x neepmeat:item_pipe')
            .itemIn('2x modern_industrialization:motor')
            .itemIn('modern_industrialization:tin_cable')
            .itemIn('modern_industrialization:analog_circuit')
            .itemOut(`4x kubejs:${element}_gold_drill`)

        // Stainless Steel Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_stainless_steel_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('#modern_industrialization:item_pipes')
            .itemIn('#modern_industrialization:fluid_pipes')
            .itemIn('modern_industrialization:advanced_motor')
            .itemIn('modern_industrialization:advanced_pump')
            .itemOut(`4x kubejs:${element}_stainless_steel_drill`)

        // Titanium Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_titanium_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('#modern_industrialization:item_pipes')
            .itemIn('#modern_industrialization:fluid_pipes')
            .itemIn('modern_industrialization:advanced_motor')
            .itemIn('modern_industrialization:advanced_pump')
            .itemOut(`4x kubejs:${element}_titanium_drill`)

        // Stainless Steel Drill
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn(`kubejs:${element}_stainless_steel_drill_head`)
            .itemIn('2x modern_industrialization:iron_gear')
            .itemIn('#modern_industrialization:item_pipes')
            .itemIn('#modern_industrialization:fluid_pipes')
            .itemIn('modern_industrialization:advanced_motor')
            .itemIn('modern_industrialization:advanced_pump')
            .itemOut(`4x kubejs:${element}_stainless_steel_drill`)
    });








    // Dire Crafting Table
        // event.recipes.modern_industrialization.assembler(8, 200)
        //     .itemIn('modern_industrialization:spatial_forge')
        //     .itemIn('4x kubejs:neutronium_plate')
        //     .itemIn('4x minecraft:nether_star')
        //     .itemIn('kubejs:infinity_catalyst')
        //     .itemIn('modern_industrialization:quantum_upgrade')
        //     .fluidIn('modern_industrialization:void', 1000)
        //     .fluidIn('the_bumblezone:royal_jelly_fluid_still', 1000)
        //     .itemOut('artis:dire_crafting')

    // Neutronium compressor
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:quantum_machine_hull')
        .itemIn('modern_industrialization:implosion_compressor')
        .itemIn('ae2:not_so_mysterious_cube')
        .itemIn('16x modern_industrialization:hsla_steel_large_plate')
        .itemIn('16x modern_industrialization:superconductor_wire')
        .itemIn('modern_industrialization:large_advanced_motor')
        .itemIn('megacells:bulk_cell_component')
        .fluidIn('modern_industrialization:argon', 1000)
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('modern_industrialization:neutronium_compressor')

    // Neutron collector
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:quantum_machine_hull')
        .itemIn('modern_industrialization:large_advanced_pump')
        .itemIn('modern_industrialization:large_advanced_motor')
        .itemIn('16x modern_industrialization:hsla_steel_large_plate')
        .itemIn('16x modern_industrialization:superconductor_wire')
        .itemIn('modern_industrialization:air_intake')
        .itemIn('megacells:bulk_cell_component')
        .fluidIn('modern_industrialization:argon', 1000)
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('modern_industrialization:neutron_collector')

    // Photoelectric cell
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('16x minecraft:blue_stained_glass_pane')
        .itemIn('ae2:quartz_vibrant_glass')
        .itemIn('8x modern_industrialization:transistor')
        .itemIn('4x modern_industrialization:diode')
        .itemIn('modern_industrialization:silicon_n_doped_plate')
        .itemIn('modern_industrialization:silicon_p_doped_plate')
        .fluidIn('modern_industrialization:soldering_alloy', 125)
        .itemOut('kubejs:photoelectric_cell')

    // Focal lens
    event.recipes.modern_industrialization.assembler(32, 600)
        .itemIn('4x modern_industrialization:hsla_steel_large_plate')
        .itemIn('2x modern_industrialization:cooling_cell')
        .itemIn('modern_industrialization:processing_unit')
        .itemIn('modern_industrialization:amethyst_lens')
        .itemIn('modern_industrialization:citrine_lens')
        .itemIn('modern_industrialization:topaz_lens')
        .fluidIn('modern_industrialization:argon', 500)
        .itemOut('kubejs:focal_lens')

    // Steel Fluid Extractor
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:steel_gear')
        .itemIn('modern_industrialization:steel_tank')
        .itemIn('modern_industrialization:steel_machine_casing')
        .itemIn('modern_industrialization:pump')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .itemOut('modern_industrialization:steel_fluid_extractor')

    // Electric Fluid Extractor
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:tin_curved_plate')
        .itemIn('2x modern_industrialization:piston')
        .itemIn('modern_industrialization:pump')
        .itemIn('modern_industrialization:basic_machine_hull')
        .itemIn('2x modern_industrialization:analog_circuit')
        .itemIn('modern_industrialization:tin_cable')
        .itemOut('modern_industrialization:electric_fluid_extractor')

    // Thermal Centrifuge
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:large_motor')
        .itemIn('modern_industrialization:large_pump')
        .itemIn('2x modern_industrialization:cupronickel_coil')
        .itemIn('2x modern_industrialization:electrum_cable')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('modern_industrialization:turbo_machine_hull')
        .itemOut('modern_industrialization:thermal_centrifuge')

    // Sifting Machine
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:large_motor')
        .itemIn('modern_industrialization:large_pump')
        .itemIn('2x modern_industrialization:stainless_steel_rotor')
        .itemIn('2x modern_industrialization:electrum_cable')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('modern_industrialization:turbo_machine_hull')
        .itemOut('modern_industrialization:sifting_machine')

    // Bottler
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('6x modern_industrialization:tin_curved_plate')
        .itemIn('modern_industrialization:pump')
        .itemIn('modern_industrialization:basic_machine_hull')
        .itemIn('modern_industrialization:tin_cable')
        .itemOut('modern_industrialization:bottler')


    // Industrial Apiary
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:stainless_steel_plate')
        .itemIn('2x kubejs:impregnated_sheathing')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('modern_industrialization:basic_machine_hull')
        .itemIn('minecraft:beehive')
        .itemOut('modern_industrialization:industrial_apiary')

    // Void Pump
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:yttrium_plate')
        .itemIn('2x modern_industrialization:advanced_pump')
        .itemIn('modern_industrialization:titanium_rotor')
        .itemIn('modern_industrialization:electric_water_pump')
        .itemIn('modern_industrialization:ostrum_drill')
        .itemOut('modern_industrialization:void_pump')

    // Space Miner
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:space_casing')
        .itemIn('2x modern_industrialization:digital_circuit')
        .itemIn('ae2:crafting_accelerator')
        .itemIn('modern_industrialization:electric_quarry')
        .itemIn('computercraft:disk_drive')
        .itemOut('modern_industrialization:space_miner')

    // Pyrolyse Chamber
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:steel_machine_casing')
        .itemIn('2x modern_industrialization:steel_tank')
        .itemIn('2x modern_industrialization:pump')
        .itemIn('#modern_industrialization:fluid_pipes')
        .itemOut('modern_industrialization:pyrolyse_chamber')

    // Large Apiary
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x the_bumblezone:beehive_beeswax')
        .itemIn('modern_industrialization:large_heat_exchanger')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('2x kubejs:impregnated_sheathing')
        .itemIn('modern_industrialization:industrial_apiary')
        .itemOut('modern_industrialization:large_apiary')

    // Soil Analyzer
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:clean_stainless_steel_machine_casing')
        .itemIn('ae2:calculation_processor')
        .itemIn('2x ae2:1k_crafting_storage')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('ae2:logic_processor')
        .itemOut('modern_industrialization:soil_analyzer')

    // Void Distillation Machine
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:frostproof_machine_casing')
        .itemIn('3x modern_industrialization:yttrium_plate')
        .itemIn('modern_industrialization:large_pump')
        .itemIn('modern_industrialization:distillation_tower')
        .itemOut('modern_industrialization:void_distillation_machine')

    // Satellite
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x ae2:controller')
        .itemIn('2x modern_industrialization:hsla_steel_large_plate')
        .itemIn('computercraft:computer_normal')
        .itemIn('kubejs:photonic_circuit')
        .itemIn('modern_industrialization:space_casing')
        .itemOut('modern_industrialization:satellite')

    // Blast Alloy Smelter
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:heatproof_machine_casing')
        .itemIn('2x modern_industrialization:kanthal_coil')
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('modern_industrialization:steel_tank')
        .itemIn('alloy_forgery:bricks_forge_controller')
        .itemOut('modern_industrialization:blast_alloy_smelter')

    // Fluid Pipe (Neepmeat)
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:copper_curved_plate')
        .itemIn('2x modern_industrialization:iron_plate')
        .fluidIn('modern_industrialization:soldering_alloy',100)
        .itemOut('4x #neepmeat:fluid_pipes')

    // Pneumatic Pipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:bronze_plate')
        .itemIn('2x minecraft:glass_pane')
        .fluidIn('modern_industrialization:soldering_alloy',100)
        .itemOut('6x neepmeat:item_pipe')

    // Regular Conveyor Belt
    event.remove({ id: 'kibe:regular_conveyor_belt' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:conveyor')
        .itemIn('modern_industrialization:motor')
        .itemIn('2x modern_industrialization:iron_rod')
        .fluidIn('modern_industrialization:soldering_alloy',200)
        .itemOut('4x kibe:regular_conveyor_belt')

    // Fast Conveyor Belt
    event.remove({ id: 'kibe:fast_conveyor_belt' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:conveyor')
        .itemIn('modern_industrialization:large_motor')
        .itemIn('2x modern_industrialization:iron_rod')
        .fluidIn('modern_industrialization:soldering_alloy',200)
        .itemOut('4x kibe:fast_conveyor_belt')

    // Express Conveyor Belt
    event.remove({ id: 'kibe:express_conveyor_belt' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:conveyor')
        .itemIn('modern_industrialization:advanced_motor')
        .itemIn('2x modern_industrialization:iron_rod')
        .fluidIn('modern_industrialization:argon',100)
        .itemOut('4x kibe:express_conveyor_belt')

    // Impregnated Sheathing
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:wax')
        .itemIn('#minecraft:planks')
        .fluidIn('the_bumblezone:honey_fluid_still', 500)
        .fluidIn('modern_industrialization:plant_oil', 250)
        .itemOut('kubejs:impregnated_sheathing')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('5x modern_industrialization:steel_plate')
        .itemIn('minecraft:bucket')
        .itemIn('minecraft:stick')
        .itemIn('2x minecraft:brick')
        .itemOut('farmersdelight:cooking_pot')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:robot_arm')
        .itemIn('2x modern_industrialization:conveyor')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('farmersdelight:cooking_pot')
        .itemIn('modern_industrialization:basic_machine_hull')
        .itemOut('modern_industrialization:electric_cooking_pot')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:motor')
        .itemIn('modern_industrialization:basic_machine_hull')
        .itemIn('2x modern_industrialization:electronic_circuit')
        .itemIn('modern_industrialization:aluminum_rotor')
        .itemIn('minecraft:dried_kelp_block')
        .itemIn('3x minecraft:glass')
        .itemOut('modern_industrialization:sea_farm')

    // Flux Core
    event.remove({id: 'fluxnetworks:flux_core'})
    event.recipes.modern_industrialization.assembler(128, 600)
        .itemIn('4x modern_industrialization:indium_phosphide_plate')
        .itemIn('3x modern_industrialization:compactium_ring')
        .itemIn('kubejs:refined_turbinium')
        .itemIn('4x modern_industrialization:uranium_fuel_rod_depleted')
        .itemOut('fluxnetworks:flux_core')
        .fluidIn('modern_industrialization:argon',300)
        .fluidIn('modern_industrialization:void',200)
        .biome('ad_astra:orbit')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:steel_rod_magnetic')
        .itemIn('2x modern_industrialization:steel_rod')
        .itemIn('2x modern_industrialization:tin_cable')
        .itemIn('4x modern_industrialization:caterium_wire')
        .itemOut('3x modern_industrialization:motor')
        .id('mif:assembler_caterium_alternate_motor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('2x modern_industrialization:caterium_rod')
        .itemIn('6x modern_industrialization:motor')
        .itemOut('2x modern_industrialization:large_motor')
        .id('mif:assembler_caterium_alternate_large_motor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:stainless_steel_rod_magnetic')
        .itemIn('2x modern_industrialization:stainless_steel_rod')
        .itemIn('2x modern_industrialization:aluminum_cable')
        .itemIn('4x modern_industrialization:caterium_wire')
        .itemOut('3x modern_industrialization:advanced_motor')
        .id('mif:assembler_caterium_alternate_advanced_motor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:processing_unit')
        .itemIn('2x modern_industrialization:caterium_rod')
        .itemIn('6x modern_industrialization:advanced_motor')
        .itemOut('2x modern_industrialization:large_advanced_motor')
        .id('mif:assembler_caterium_alternate_motor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:resistor')
        .itemIn('modern_industrialization:op_amp')
        .itemIn('modern_industrialization:caterium_wire')
        .itemOut('3x modern_industrialization:not_gate')
        .id('mif:assembler_caterium_alternate_not_gate')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:op_amp')
        .itemIn('2x modern_industrialization:caterium_wire')
        .itemIn('modern_industrialization:diode')
        .itemOut('3x modern_industrialization:or_gate')
        .id('mif:assembler_caterium_alternate_or_gate')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:resistor')
        .itemIn('modern_industrialization:op_amp')
        .itemIn('4x modern_industrialization:caterium_wire')
        .itemOut('3x modern_industrialization:and_gate')
        .id('mif:assembler_caterium_alternate_and_gate')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x modern_industrialization:silicon_plate')
        .itemIn('modern_industrialization:caterium_fine_wire')
        .itemIn('3x modern_industrialization:steel_plate')
        .itemOut('4x modern_industrialization:transistor')
        .id('mif:assembler_caterium_alternate_transistor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:silicon_p_doped_plate')
        .itemIn('modern_industrialization:silicon_n_doped_plate')
        .itemIn('modern_industrialization:caterium_fine_wire')
        .itemIn('3x modern_industrialization:steel_plate')
        .itemOut('8x modern_industrialization:transistor')
        .id('mif:assembler_caterium_alternate_transistor')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:annealed_copper_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:compactium_dust')
        .itemOut('3x modern_industrialization:compactium_battery')
        .id('mif:assembler_caterium_alternate_compactium_battery')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:aluminum_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:sodium_dust')
        .itemOut('3x modern_industrialization:sodium_battery')
        .id('mif:assembler_caterium_alternate_sodium_battery')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:tin_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:redstone_alloy_dust')
        .itemOut('3x modern_industrialization:redstone_battery')
        .id('mif:assembler_caterium_alternate_redstone_battery')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:annealed_copper_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:cadmium_dust')
        .itemOut('3x modern_industrialization:cadmium_battery')
        .id('mif:assembler_caterium_alternate_cadmium')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:superconductor_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:plutonium_dust')
        .itemOut('3x modern_industrialization:plutonium_battery')
        .id('mif:assembler_caterium_alternate_plutonium_battery')

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:caterium_plate')
        .itemIn('2x modern_industrialization:electrum_cable')
        .itemIn('4x modern_industrialization:battery_alloy_curved_plate')
        .itemIn('2x modern_industrialization:silicon_dust')
        .itemOut('3x modern_industrialization:silicon_battery')
        .id('mif:assembler_caterium_alternate_silicon_battery')
})
