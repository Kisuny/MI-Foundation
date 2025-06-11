//priority: 0

ServerEvents.recipes(event => {

    // Generic removal
    const rem = [
        'ae2:silicon',
        'ae2:vibration_chamber',
        'ae2:spatial_anchor'
    ]

    rem.forEach(element => event.remove({ output: element }))

    const cifri = [1, 2, 4, 16, 64, 128, 256]

    cifri.forEach(element => {
        event.remove({ id: `ae2:network/cells/item_storage_cell_${element}k` })
        event.remove({ id: `megacells:cells/standard/item_storage_cell_${element}m` })
        event.remove({ id: `ae2:network/cells/fluid_storage_cell_${element}k` })
        event.remove({ id: `megacells:cells/standard/fluid_storage_cell_${element}m` })
        event.remove({ id: `ae2:network/cells/spatial_storage_cell_${element}_cubed` })
    })


    // Smithing Table
    event.smithing(
        Item.of('ae2:annihilation_plane', '{RepairCost:1}').enchant('minecraft:fortune', 5),  // arg 1: output
        'ae2:annihilation_plane', // arg 2: the item to be upgraded
        Item.of('minecraft:enchanted_book').enchant('fortune', 5)   // arg 3: the upgrade item
    )


    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "item": "modern_industrialization:silicon_ingot"
                },
                "top": {
                    "item": "ae2:silicon_press"
                }
            },
            "mode": "inscribe",
            "result": {
                "item": "ae2:printed_silicon"
            }
        })
// Crafting Table
event.shapeless('ae2:interface', [
    'ae2:cable_interface',
])
event.shapeless('ae2:pattern_provider', [
    'ae2:cable_pattern_provider',
])
event.remove({ output: 'ae2:fluix_glass_cable' })
event.shaped('4x ae2:fluix_glass_cable', [
    'SSS',
    'AAA',
    'SSS'
], {
    S: 'ae2:fluix_crystal',
    A: 'ae2:quartz_fiber'
})

event.remove({ output: 'ae2:quartz_fiber' })
event.shaped('3x ae2:quartz_fiber', [
    'SAS',
    'AAA',
    'SAS'
], {
    S: 'minecraft:glass',
    A: 'modern_industrialization:quartz_blend_dust'
})

event.remove({ output: 'ae2:charger' })
event.shaped('ae2:charger', [
    'SAS',
    'B B',
    'SAS'
], {
    S: 'modern_industrialization:tin_large_plate',
    A: 'modern_industrialization:cupronickel_coil',
    B: 'ae2:fluix_crystal'
})

//EBF
event.remove({ output: 'ae2:quartz_glass' })
event.recipes.modern_industrialization.blast_furnace(32, 100)
    .itemIn('4x minecraft:glass')
    .itemIn('5x modern_industrialization:quartz_blend_dust')
    .itemOut('ae2:quartz_glass')

//Polarizer
event.remove({ output: 'ae2:quartz_vibrant_glass' })
event.recipes.modern_industrialization.polarizer(8, 100)
    .itemIn('ae2:quartz_glass')
    .itemIn('4x modern_industrialization:cupronickel_wire_magnetic')
    .itemOut('ae2:quartz_vibrant_glass')

//Assembler
event.remove({ output: 'ae2:cell_component_1k' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:electronic_circuit')
    .itemIn('ae2:logic_processor')
    .itemIn('4x ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:cell_component_1k')

event.remove({ output: 'ae2:cell_component_4k' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:cell_component_1k')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('ad_astra:desh_plate')
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:cell_component_4k')

event.remove({ output: 'ae2:cell_component_16k' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:cell_component_4k')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('ad_astra:ostrum_plate')
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:cell_component_16k')

event.remove({ output: 'ae2:cell_component_64k' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:cell_component_16k')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('ad_astra:ostrum_plate')
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:cell_component_64k')

event.remove({ output: 'ae2:cell_component_256k' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:cell_component_64k')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('ad_astra:calorite_plate')
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:cell_component_256k')

event.remove({ output: 'ae2:advanced_card' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:basic_card')
    .itemIn('modern_industrialization:advanced_upgrade')
    .itemOut('ae2:advanced_card')

event.remove({ output: 'ae2:annihilation_core' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:digital_circuit_board')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:logic_processor')
    .itemIn('modern_industrialization:silicon_n_doped_plate')
    .itemIn('3x modern_industrialization:electrum_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemOut('ae2:annihilation_core')

event.remove({ output: 'ae2:basic_card' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:silicon_plate')
    .itemIn('2x modern_industrialization:electrum_wire')
    .itemIn('ae2:calculation_processor')
    .fluidIn('modern_industrialization:polyethylene', 50)
    .itemOut('ae2:basic_card')

event.remove({ output: 'ae2:biometric_card' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:redstone_battery')
    .itemIn('ae2:basic_card')
    .itemIn('ae2:engineering_processor')
    .itemIn('ae2:semi_dark_monitor')
    .itemOut('ae2:biometric_card')

event.remove({ output: 'ae2:blank_pattern' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:electronic_circuit_board')
    .itemIn('2x ae2:quartz_vibrant_glass')
    .itemIn('2x modern_industrialization:electrum_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemIn('3x modern_industrialization:tin_plate')
    .fluidIn('modern_industrialization:soldering_alloy', 100)
    .fluidIn('modern_industrialization:molten_redstone', 50)
    .itemOut('ae2:blank_pattern')

event.remove({ output: 'ae2:cell_workbench' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:io_port')
    .itemIn('minecraft:crafting_table')
    .itemIn('ae2:certus_quartz_wrench')
    .fluidIn('modern_industrialization:soldering_alloy', 500)
    .itemOut('ae2:cell_workbench')

event.remove({ output: 'ae2:crafting_unit' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:advanced_machine_hull')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:logic_processor')
    .itemIn('modern_industrialization:and_gate')
    .itemIn('modern_industrialization:or_gate')
    .itemIn('modern_industrialization:not_gate')
    .fluidIn('modern_industrialization:soldering_alloy', 300)
    .itemOut('ae2:crafting_unit')

event.remove({ output: 'ae2:quartz_growth_accelerator' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_block')
    .itemIn('4x ae2:fluix_glass_cable')
    .itemIn('16x modern_industrialization:inductor')
    .itemIn('modern_industrialization:large_motor')
    .itemIn('16x modern_industrialization:tin_curved_plate')
    .itemIn('4x modern_industrialization:cupronickel_wire_magnetic')
    .itemOut('ae2:quartz_growth_accelerator')

event.remove({ output: 'ae2:energy_acceptor' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:energy_cell')
    .itemIn('modern_industrialization:mv_hv_transformer')
    .itemIn('2x ae2:fluix_glass_cable')
    .fluidIn('modern_industrialization:soldering_alloy', 500)
    .itemOut('ae2:energy_acceptor')

event.remove({ output: 'ae2:energy_cell' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:mv_storage_unit')
    .itemIn('16x ae2:fluix_crystal')
    .itemIn('3x ae2:quartz_vibrant_glass')
    .itemIn('4x modern_industrialization:aluminum_wire')
    .itemIn('2x modern_industrialization:cupronickel_wire_magnetic')
    .itemOut('ae2:energy_cell')

event.remove({ output: 'ae2:fluix_covered_dense_cable' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:fluix_covered_cable')
    .itemIn('modern_industrialization:calorite_curved_plate')
    .itemIn('architects_palette:spool')
    .fluidIn('modern_industrialization:nylon', 100)
    .itemOut('ae2:fluix_covered_dense_cable')

event.remove({ output: 'ae2:fluix_smart_dense_cable' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_covered_dense_cable')
    .itemIn('ae2:semi_dark_monitor')
    .itemIn('ae2:calculation_processor')
    .itemIn('modern_industrialization:calorite_large_plate')
    .itemOut('ae2:fluix_smart_dense_cable')

event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:fluix_crystal')
    .itemIn('2x ae2:quartz_fiber')
    .itemOut('4x ae2:fluix_glass_cable')

event.remove({ output: 'ae2:fluix_smart_cable' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_covered_cable')
    .itemIn('ae2:semi_dark_monitor')
    .itemIn('ae2:calculation_processor')
    .itemIn('modern_industrialization:ostrum_curved_plate')
    .itemOut('ae2:fluix_smart_cable')

event.remove({ output: 'ae2:fluix_covered_cable' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('architects_palette:spool')
    .itemIn('2x ae2:fluix_glass_cable')
    .fluidIn('modern_industrialization:nylon', 75)
    .itemOut('ae2:fluix_covered_cable')

event.remove({ output: 'ae2:formation_core' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:digital_circuit_board')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:logic_processor')
    .itemIn('modern_industrialization:silicon_p_doped_plate')
    .itemIn('3x modern_industrialization:electrum_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemOut('ae2:formation_core')

event.remove({ output: 'ae2:semi_dark_monitor' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('3x ae2:quartz_vibrant_glass')
    .itemIn('2x modern_industrialization:diode')
    .itemIn('4x modern_industrialization:electrum_fine_wire')
    .itemOut('ae2:semi_dark_monitor')

event.remove({ output: 'ae2:chest' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:advanced_machine_hull')
    .itemIn('ae2:item_cell_housing')
    .itemIn('2x ae2:quartz_vibrant_glass')
    .itemIn('2x ae2:fluix_glass_cable')
    .itemIn('ae2:terminal')
    .fluidIn('modern_industrialization:soldering_alloy', 700)
    .itemOut('ae2:chest')

event.remove({ output: 'ae2:controller' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:advanced_machine_hull')
    .itemIn('4x ae2:engineering_processor')
    .itemIn('4x ae2:fluix_crystal')
    .itemIn('4x ae2:smooth_sky_stone_block')
    .itemIn('16x ae2:fluix_glass_cable')
    .fluidIn('modern_industrialization:soldering_alloy', 1000)
    .fluidIn('modern_industrialization:polyethylene', 500)
    .itemOut('ae2:controller')

event.remove({ output: 'ae2:drive' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:advanced_machine_hull')
    .itemIn('2x ae2:engineering_processor')
    .itemIn('10x ae2:item_cell_housing')
    .itemIn('10x ae2:fluix_glass_cable')
    .fluidIn('modern_industrialization:soldering_alloy', 1000)
    .fluidIn('modern_industrialization:polyethylene', 500)
    .itemOut('ae2:drive')

event.remove({ output: 'ae2:fluid_cell_housing' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:calorite_large_plate')
    .itemIn('2x modern_industrialization:stainless_steel_plate')
    .itemIn('6x modern_industrialization:platinum_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemIn('2x ae2:quartz_vibrant_glass')
    .itemOut('ae2:fluid_cell_housing')

event.remove({ output: 'ae2:interface' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:formation_core')
    .itemIn('ae2:annihilation_core')
    .itemIn('ae2:item_cell_housing')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('ae2:interface')

event.remove({ output: 'ae2:io_port' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('2x computercraft:disk_drive')
    .itemIn('2x ae2:logic_processor')
    .itemIn('ae2:fluix_glass_cable')
    .fluidIn('modern_industrialization:soldering_alloy', 700)
    .itemOut('ae2:io_port')

event.remove({ output: 'ae2:item_cell_housing' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:tin_large_plate')
    .itemIn('2x ae2:quartz_vibrant_glass')
    .itemIn('2x modern_industrialization:electrum_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemIn('3x modern_industrialization:carbon_plate')
    .fluidIn('modern_industrialization:soldering_alloy', 100)
    .fluidIn('modern_industrialization:molten_redstone', 50)
    .itemOut('ae2:item_cell_housing')

event.remove({ output: 'appbot:mana_cell_housing' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('modern_industrialization:manasteel_large_plate')
    .itemIn('2x modern_industrialization:silver_plate')
    .itemIn('6x modern_industrialization:terrasteel_fine_wire')
    .itemIn('ae2:fluix_dust')
    .itemIn('2x ae2:quartz_vibrant_glass')
    .itemIn('3x botania:life_essence')
    .itemOut('appbot:mana_cell_housing')

event.remove({ output: 'ae2:me_p2p_tunnel' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_smart_cable')
    .itemIn('ae2:semi_dark_monitor')
    .itemIn('ae2:fluix_pearl')
    .itemIn('ae2:engineering_processor')
    .itemOut('ae2:me_p2p_tunnel')

event.remove({ output: 'ae2:security_station' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:biometric_card')
    .itemIn('ae2:cell_component_16k')
    .itemIn('ae2:chest')
    .itemIn('2x ae2:fluix_smart_cable')
    .itemOut('ae2:security_station')

event.remove({ output: 'ae2:memory_card' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:engineering_processor')
    .itemIn('ae2:basic_card')
    .itemIn('modern_industrialization:gold_curved_plate')
    .itemOut('ae2:memory_card')

event.remove({ output: 'ae2:molecular_assembler' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:annihilation_core')
    .itemIn('ae2:formation_core')
    .itemIn('modern_industrialization:assembler')
    .itemIn('4x ae2:quartz_vibrant_glass')
    .itemIn('8x modern_industrialization:electrum_fine_wire')
    .fluidIn('modern_industrialization:soldering_alloy', 300)
    .itemOut('ae2:molecular_assembler')

event.remove({ output: 'ae2:pattern_provider' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:interface')
    .itemIn('ae2:blank_pattern')
    .itemOut('ae2:pattern_provider')

event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('3x modern_industrialization:quartz_blend_dust')
    .itemIn('2x minecraft:glass')
    .itemOut('3x ae2:quartz_fiber')

event.remove({ output: 'ae2:wireless_booster' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_dust')
    .itemIn('ae2:ender_dust')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:turbo_upgrade')
    .itemOut('ae2:wireless_booster')

event.remove({ output: 'ae2:wireless_receiver' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_pearl')
    .itemIn('modern_industrialization:stainless_steel_large_plate')
    .itemIn('modern_industrialization:stainless_steel_rod_magnetic')
    .itemIn('4x modern_industrialization:platinum_fine_wire')
    .fluidIn('modern_industrialization:argon', 25)
    .itemOut('ae2:wireless_receiver')

event.remove({ output: 'ae2:quantum_ring' })
event.recipes.modern_industrialization.assembler(64, 600)
    .itemIn('16x modern_industrialization:aluminum_cable')
    .itemIn('4x ae2:fluix_smart_dense_cable')
    .itemIn('kubejs:photonic_circuit')
    .itemIn('2x modern_industrialization:compactium_large_plate')
    .itemIn('2x modern_industrialization:unobtanium_large_plate')
    .fluidIn('modern_industrialization:argon', 500)
    .fluidIn('modern_industrialization:cryofluid', 1000)
    .itemOut('2x ae2:quantum_ring')

event.remove({ output: 'ae2:condenser' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('megacells:mega_energy_cell')
    .itemIn('4x modern_industrialization:unobtanium_large_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('ae2:condenser')

event.remove({ output: 'ae2:quantum_link' })
event.recipes.modern_industrialization.assembler(64, 600)
    .itemIn('ae2:quartz_vibrant_glass')
    .itemIn('4x ae2:fluix_pearl')
    .itemIn('16x modern_industrialization:aluminum_wire')
    .itemIn('2x modern_industrialization:cupronickel_wire_magnetic')
    .fluidIn('modern_industrialization:argon', 300)
    .itemOut('ae2:quantum_link')

event.remove({ output: 'megacells:bulk_item_cell' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('megacells:mega_item_cell_housing')
    .itemIn('megacells:bulk_cell_component')
    .itemOut('megacells:bulk_item_cell')

event.remove({ output: 'megacells:mega_crafting_unit' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:crafting_unit')
    .itemIn('2x ae2:fluix_smart_dense_cable')
    .itemIn('ae2:formation_core')
    .itemIn('ae2:annihilation_core')
    .itemIn('modern_industrialization:unobtanium_large_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('megacells:mega_crafting_unit')

// MEGA Decompression Module
event.remove({ id: 'megacells:crafting/decompression_module' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('megacells:compression_card')
    .itemIn('2x ae2:fluix_smart_dense_cable')
    .itemIn('2x ae2:engineering_processor')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:logic_processor')
    .itemIn('modern_industrialization:unobtanium_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('megacells:decompression_module')

// MEGA Pattern Provider
event.remove({ id: 'megacells:network/mega_pattern_provider' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:pattern_provider')
    .itemIn('2x ae2:fluix_smart_dense_cable')
    .itemIn('2x ae2:blank_pattern')
    .itemIn('modern_industrialization:unobtanium_large_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('megacells:mega_pattern_provider')

event.remove({ output: 'megacells:mega_fluid_cell_housing' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluid_cell_housing')
    .itemIn('2x modern_industrialization:unobtanium_large_plate')
    .itemIn('2x modern_industrialization:compactium_large_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('megacells:mega_fluid_cell_housing')

event.remove({ output: 'megacells:mega_item_cell_housing' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:item_cell_housing')
    .itemIn('2x modern_industrialization:unobtanium_large_plate')
    .itemIn('2x modern_industrialization:compactium_large_plate')
    .fluidIn('modern_industrialization:argon', 100)
    .itemOut('megacells:mega_item_cell_housing')

event.remove({ output: 'ae2:spatial_pylon' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:fluix_smart_dense_cable')
    .itemIn('ae2:fluix_pearl')
    .itemIn('2x ae2:fluix_crystal')
    .itemIn('modern_industrialization:unobtanium_large_plate')
    .itemIn('modern_industrialization:compactium_large_plate')
    .fluidIn('modern_industrialization:argon', 300)
    .itemOut('ae2:spatial_pylon')

//Clean Room
event.remove({ output: 'megacells:cell_component_1m' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:cell_component_256k')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:beryllium_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('megacells:cell_component_1m')

event.remove({ output: 'megacells:cell_component_4m' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x megacells:cell_component_1m')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:beryllium_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('megacells:cell_component_4m')

event.remove({ output: 'megacells:cell_component_16m' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x megacells:cell_component_4m')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:beryllium_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('megacells:cell_component_16m')

event.remove({ output: 'megacells:cell_component_64m' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x megacells:cell_component_16m')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:beryllium_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('megacells:cell_component_64m')

event.remove({ output: 'megacells:cell_component_256m' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x megacells:cell_component_64m')
    .itemIn('ae2:calculation_processor')
    .itemIn('ae2:certus_quartz_crystal')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:beryllium_plate')
    .itemIn('ae2:quartz_vibrant_glass')
    .itemOut('megacells:cell_component_256m')

event.remove({ output: 'ae2:spatial_cell_component_2' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('kubejs:photonic_circuit')
    .itemIn('ae2:fluix_pearl')
    .itemIn('modern_industrialization:monocrystalline_silicon')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:amethyst_lens')
    .fluidIn('modern_industrialization:argon', 300)
    .fluidIn('neepmeat:charged_work_fluid', 100)
    .itemOut('ae2:spatial_cell_component_2')

event.remove({ output: 'ae2:spatial_cell_component_16' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:spatial_cell_component_2')
    .itemIn('kubejs:photonic_circuit')
    .itemIn('ae2:fluix_pearl')
    .itemIn('modern_industrialization:monocrystalline_silicon')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:amethyst_lens')
    .fluidIn('modern_industrialization:argon', 300)
    .fluidIn('neepmeat:charged_work_fluid', 100)
    .itemOut('ae2:spatial_cell_component_16')

event.remove({ output: 'ae2:spatial_cell_component_128' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x ae2:spatial_cell_component_16')
    .itemIn('modern_industrialization:quantum_circuit')
    .itemIn('ae2:fluix_pearl')
    .itemIn('modern_industrialization:monocrystalline_silicon')
    .itemIn('modern_industrialization:unobtanium_plate')
    .itemIn('modern_industrialization:amethyst_lens')
    .fluidIn('modern_industrialization:argon', 300)
    .fluidIn('neepmeat:charged_work_fluid', 100)
    .itemOut('ae2:spatial_cell_component_128')

event.remove({ output: 'ae2:inscriber' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('4x modern_industrialization:piston')
    .itemIn('2x ae2:fluix_crystal')
    .itemIn('4x modern_industrialization:tin_large_plate')
    .itemIn('modern_industrialization:redstone_battery')
    .itemIn('4x modern_industrialization:aluminum_wire')
    .fluidIn('modern_industrialization:soldering_alloy', 300)
    .itemOut('ae2:inscriber')

event.remove({ output: 'ae2:spatial_io_port' })
event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn('ae2:io_port')
    .itemIn('kubejs:photonic_circuit')
    .itemIn('4x ae2:fluix_glass_cable')
    .itemIn('megacells:mega_item_cell_housing')
    .itemIn('3x ae2:quartz_vibrant_glass')
    .itemOut('ae2:spatial_io_port')
// Replace Input
//
const redtorch_rep = [
    'modern_industrialization:electric_age/component/craft/redstone_control_module_asbl',
    'ae2:network/parts/level_emitter',
    'ae2:network/parts/energy_level_emitter',
    'ae2:materials/cardredstone',
    'ae2:materials/cardinverter',
    'modern_industrialization:assembler_generated/electric_age/component/craft/redstone_control_module',
    'modern_industrialization:vanilla_recipes/packer/activator_rail',
]

redtorch_rep.forEach(item => {
    event.replaceInput({ id: item }, 'minecraft:redstone_torch', 'wiredredstone:red_alloy_wire')
})
event.replaceInput({ id: 'ae2:tools/misctools_entropy_manipulator' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod')
event.replaceInput({ id: 'ae2:tools/network_color_applicator' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod')
event.replaceInput({ id: 'ae2:tools/misctools_charged_staff' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod')
event.replaceInput({ id: 'ae2:tools/certus_quartz_cutting_knife' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate')
event.replaceInput({ id: 'ae2:tools/nether_quartz_cutting_knife' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate')
event.replaceInput({ id: 'minecraft:piston' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate')
event.replaceInput({ id: 'ae2:tools/matter_cannon' }, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod')
event.replaceInput({ id: 'ae2:network/parts/import_bus' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_plate')
event.replaceInput({ id: 'ae2:network/parts/export_bus' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_plate')
event.replaceInput({ id: 'ae2wtlib:magnet_card' }, 'minecraft:iron_block', 'modern_industrialization:neodymium_dust')
event.replaceInput({ id: 'ae2wtlib:magnet_card' }, 'minecraft:redstone_block', 'modern_industrialization:cupronickel_wire_magnetic')
event.replaceInput({ id: 'ae2wtlib:magnet_card' }, 'minecraft:lapis_block', 'modern_industrialization:stainless_steel_rod_magnetic')
event.replaceInput({ id: 'ae2:network/parts/formation_plane_alt' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_large_plate')
event.replaceInput({ id: 'ae2:network/parts/formation_plane' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_large_plate')
event.replaceInput({ id: 'ae2:network/parts/annihilation_plane_alt2' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_large_plate')
event.replaceInput({ id: 'ae2:network/parts/annihilation_plane_alt' }, 'minecraft:iron_ingot', 'modern_industrialization:aluminum_large_plate')
})
