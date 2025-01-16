//priority: 0

ServerEvents.recipes(event => {
    const removeByOutput = [
        'modern_industrialization:diesel_jetpack',
        'kubejs:refined_naquadah',
        'kubejs:refined_caterium',
        'kubejs:refined_turbinium'
    ];
    const removeByID = [
        'modern_industrialization:compressor/desh_ingot_to_plate',
        'modern_industrialization:compressor/ostrum_ingot_to_plate',
        'modern_industrialization:compressor/calorite_ingot_to_plate',
        'modern_industrialization:vanilla_recipes/chemical_reactor/amethyst',
        'modern_industrialization:materials/hsla_steel/smelting/dust_to_ingot_blasting',
        'modern_industrialization:materials/hsla_steel/smelting/dust_to_ingot_smelting',
        'modern_industrialization:materials/electrolyzer/uu_matter',
        'modern_industrialization:vanilla_recipes/implosion_compressor/nether_star',
        'modern_industrialization:electric_age/component/implosion_compressor/singularity',
        'modern_industrialization:electric_age/machine/assembler/replicator',
        'modern_industrialization:materials/naquadah/macerator/raw_metal',
        'modern_industrialization:materials/caterium/macerator/ore_to_raw',
        'modern_industrialization:materials/turbinium/macerator/ore_to_raw'
    ];
    removeByOutput.forEach(element => event.remove({ output: element }));
    removeByID.forEach(element => event.remove({ id: element }));


    // Pyrolyse Chamber
    event.recipes.modern_industrialization.pyrolyse_chamber(256, 160)
        .itemIn('23x minecraft:sugar')
        .fluidIn('modern_industrialization:nitrogen', 500)
        .itemOut('12x minecraft:charcoal')
        .fluidOut('modern_industrialization:sugar_solution', 1500)

    event.recipes.modern_industrialization.pyrolyse_chamber(256, 320)
        .itemIn('16x minecraft:coal')
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('16x modern_industrialization:coke')
        .fluidOut('modern_industrialization:creosote', 8000)

    event.recipes.modern_industrialization.pyrolyse_chamber(256, 320)
        .itemIn('16x modern_industrialization:coal_dust')
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('16x modern_industrialization:coke_dust')
        .fluidOut('modern_industrialization:creosote', 8000)

    event.recipes.modern_industrialization.pyrolyse_chamber(128, 640)
        .itemIn('16x minecraft:coal')
        .fluidIn('modern_industrialization:steam', 1000)
        .itemOut('16x modern_industrialization:coke')
        .fluidOut('modern_industrialization:creosote', 4000)

    event.recipes.modern_industrialization.pyrolyse_chamber(128, 640)
        .itemIn('16x modern_industrialization:coal_dust')
        .fluidIn('modern_industrialization:steam', 1000)
        .itemOut('16x modern_industrialization:coke_dust')
        .fluidOut('modern_industrialization:creosote', 4000)

    event.recipes.modern_industrialization.pyrolyse_chamber(256, 1280)
        .itemIn('8x minecraft:coal_block')
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('8x modern_industrialization:coke_block')
        .fluidOut('modern_industrialization:creosote', 32000)

    event.recipes.modern_industrialization.pyrolyse_chamber(256, 320)
        .itemIn('16x #minecraft:logs')
        .fluidIn('modern_industrialization:nitrogen', 1000)
        .itemOut('20x minecraft:charcoal')
        .fluidOut('modern_industrialization:wood_gas', 1500)

    event.recipes.modern_industrialization.pyrolyse_chamber(128, 640)
        .itemIn('16x #minecraft:logs')
        .fluidIn('modern_industrialization:steam', 1000)
        .itemOut('20x minecraft:charcoal')
        .fluidOut('modern_industrialization:wood_gas', 150)

    // Chemical Reactor
    event.recipes.modern_industrialization.chemical_reactor(128, 100)
        .fluidIn("modern_industrialization:ammonia_gas", 200)
        .fluidIn("modern_industrialization:hydrogen_peroxide", 100)
        .fluidOut("modern_industrialization:hydrazine", 100)
        .fluidOut("minecraft:water", 200)
    event.recipes.modern_industrialization.chemical_reactor(128, 100)
        .fluidIn("modern_industrialization:isopropyl_alcohol", 100)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidOut("modern_industrialization:acetone", 100)
        .fluidOut("modern_industrialization:hydrogen_peroxide", 100)
    event.recipes.modern_industrialization.chemical_reactor(128, 100)
        .fluidIn("modern_industrialization:propene", 100)
        .fluidIn("minecraft:water", 400)
        .fluidOut("modern_industrialization:isopropyl_alcohol", 100)
    event.recipes.modern_industrialization.chemical_reactor(128, 100)
        .fluidIn("modern_industrialization:hydrazine", 100)
        .fluidIn("modern_industrialization:cryofluid", 300)
        .fluidOut("modern_industrialization:advanced_rocket_fuel", 400)
    event.recipes.modern_industrialization.chemical_reactor(128, 200)
        .itemIn('5x modern_industrialization:fluoroapatite_dust')
        .itemIn('30x modern_industrialization:carbon_dust')
        .itemIn('21x modern_industrialization:quartz_dust')
        .itemOut('20x modern_industrialization:calcium_metasilicate_dust')
        .itemOut('6x modern_industrialization:phosphorus_dust')
        .fluidOut('modern_industrialization:carbon_monoxide_gas', 3000)
        .fluidOut('modern_industrialization:silicon_tetrafluoride_gas', 1000)
    event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('neepmeat:biomass')
        .fluidIn('modern_industrialization:ethanol',125)
        .fluidIn('modern_industrialization:sodium_hydroxide',30)
        .fluidOut('modern_industrialization:raw_biodiesel',500)

    event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .fluidIn('the_bumblezone:honey_fluid_still',1000)
        .fluidIn('modern_industrialization:ethanol',400)
        .fluidIn('modern_industrialization:sodium_hydroxide',100)
        .fluidOut('modern_industrialization:raw_biodiesel',1500)

    // Molecular Deconstructor


    // Blast Furnace
    event.recipes.modern_industrialization.blast_furnace(32, 100) //Mb, ticks
        .itemIn('modern_industrialization:coal_dust')
        .fluidOut('modern_industrialization:ammonia_gas', 20)

    event.recipes.modern_industrialization.blast_furnace(192, 1200) //Mb, ticks
        .itemIn('modern_industrialization:unobtanium_dust')
        .itemOut('modern_industrialization:unobtanium_hot_ingot')

    event.recipes.modern_industrialization.blast_furnace(96, 1200) //Mb, ticks
        .itemIn('modern_industrialization:indium_dust')
        .itemIn('modern_industrialization:phosphorus_dust')
        .itemOut('2x modern_industrialization:indium_phosphide_ingot')

    event.recipes.modern_industrialization.blast_furnace(32, 200)
        .itemIn('modern_industrialization:aluminum_double_ingot')
        .itemIn('minecraft:netherite_scrap')
        .fluidIn('modern_industrialization:soldering_alloy', 100)
        .itemOut('modern_industrialization:rocket_alloy_ingot')

    // Implosion Compressor
    event.recipes.modern_industrialization.implosion_compressor(256, 20)
        .itemIn('megacells:cell_component_16m')
        .itemIn('ae2:singularity')
        .itemIn('ae2:spatial_cell_component_16')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('megacells:bulk_cell_component')

    event.recipes.modern_industrialization.implosion_compressor(1, 10) //Eu, ticks
        .itemIn('modern_industrialization:naquadah_dust')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('kubejs:refined_naquadah')

    event.recipes.modern_industrialization.implosion_compressor(1, 10) //Eu, ticks
        .itemIn('modern_industrialization:yttrium_dust')
        .itemIn('16x ae2:sky_dust')
        .itemIn('4x wiredredstone:ender_redstone_mixture')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('3x modern_industrialization:compactium_dust')

    event.recipes.modern_industrialization.implosion_compressor(1, 10) //Eu, ticks
        .itemIn('modern_industrialization:nuke')
        .itemIn('16x ad_astra:glacio_stone')
        .itemOut('modern_industrialization:unobtanium_dust')

    // Forge hammer
    event.recipes.modern_industrialization.forge_hammer(20, 0) //Eu, ticks
        .itemIn('#c:salt_ores')
        .itemOut('2x modern_industrialization:salt_crushed_dust')

    //Packer
    event.recipes.modern_industrialization.packer(5, 100) //Eu, ticks
        .itemIn('minecraft:campfire')
        .itemIn('8x #c:cobblestone')
        .itemOut('minecraft:furnace')

    // Pipes
    event.remove({ id: 'modern_industrialization:steam_age/item_pipe_asbl' })
    event.remove({ id: 'modern_industrialization:assembler_generated/steam_age/item_pipe' })
    event.shaped('8x modern_industrialization:item_pipe', [
        'CAC',
        'P P',
        'CAC'
    ], {
        C: 'modern_industrialization:bronze_curved_plate',
        A: 'modern_industrialization:electronic_circuit',
        P: 'modern_industrialization:piston'
    });
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:bronze_curved_plate')
        .itemIn('2x modern_industrialization:electronic_circuit')
        .itemIn('2x modern_industrialization:piston')
        .itemOut('12x modern_industrialization:item_pipe')


    global.dyeColors.forEach(color => {
        event.remove({ id: `modern_industrialization:dyes/${color.name}/craft/item_pipe_direct` })
        event.remove({ id: `modern_industrialization:dyes/${color.name}/assembler/item_pipe_direct` })
        event.shaped(`8x modern_industrialization:${color.name}_item_pipe`, [
            'CAC',
            'GDG',
            'CAC'
        ], {
            C: 'modern_industrialization:bronze_curved_plate',
            A: 'modern_industrialization:electronic_circuit',
            G: 'modern_industrialization:piston',
            D: `minecraft:${color.name}_dye`
        });
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('4x modern_industrialization:bronze_curved_plate')
            .itemIn('2x modern_industrialization:electronic_circuit')
            .itemIn('2x modern_industrialization:piston')
            .itemIn(`minecraft:${color.name}_dye`)
            .itemOut(`12x modern_industrialization:${color.name}_item_pipe`)
        event.remove({ id: `modern_industrialization:dyes/${color.name}/craft/fluid_pipe_stained_glass` })
        event.remove({ id: `modern_industrialization:dyes/${color.name}/assembler/fluid_pipe_stained_glass` })
        event.shaped(`8x modern_industrialization:${color.name}_fluid_pipe`, [
            'CAC',
            'RPR',
            'CAC'
        ], {
            C: 'modern_industrialization:bronze_curved_plate',
            A: 'modern_industrialization:electronic_circuit',
            R: 'modern_industrialization:copper_rotor',
            P: `minecraft:${color.name}_stained_glass_pane`
        });
        event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('4x modern_industrialization:bronze_curved_plate')
            .itemIn('2x modern_industrialization:electronic_circuit')
            .itemIn('2x modern_industrialization:copper_rotor')
            .itemIn(`minecraft:${color.name}_stained_glass_pane`)
            .itemOut(`12x modern_industrialization:${color.name}_fluid_pipe`)
    })
    event.remove({ id: 'modern_industrialization:steam_age/fluid_pipe_asbl' })
    event.remove({ id: 'modern_industrialization:assembler_generated/steam_age/fluid_pipe' })
    event.shaped('8x modern_industrialization:fluid_pipe', [
        'CAC',
        'RPR',
        'CAC'
    ], {
        C: 'modern_industrialization:bronze_curved_plate',
        A: 'modern_industrialization:electronic_circuit',
        R: 'modern_industrialization:copper_rotor',
        P: 'minecraft:glass_pane'
    });
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:bronze_curved_plate')
        .itemIn('2x modern_industrialization:electronic_circuit')
        .itemIn('2x modern_industrialization:copper_rotor')
        .itemIn('minecraft:glass_pane')
        .itemOut('12x modern_industrialization:fluid_pipe')

    event.recipes.modern_industrialization.assembler(4, 100)
        .itemIn('3x minecraft:quartz')
        .itemIn('3x #c:glass_blocks')
        .itemIn('3x #minecraft:slabs')
        .itemOut('minecraft:daylight_detector')
    // ////////////////////////////////


    event.remove({ id: 'modern_industrialization:materials/packer/fire_bricks' })
    event.recipes.modern_industrialization.packer(2, 100) //Eu, ticks
        .itemIn('5x architects_palette:cerebral_plate')
        .itemIn('4x modern_industrialization:fire_clay_brick')
        .itemOut('modern_industrialization:fire_clay_bricks')

    event.remove({ id: 'modern_industrialization:armor/smithing/quantum_helmet' })
    event.recipes.modern_industrialization.packer(128, 600) //Eu, ticks
        .itemIn('ad_astra:jet_suit_helmet')
        .itemIn('kubejs:infinity_ingot')
        .itemOut('modern_industrialization:quantum_helmet')

    event.remove({ id: 'modern_industrialization:armor/smithing/quantum_chestplate' })
    event.recipes.modern_industrialization.packer(128, 600) //Eu, ticks
        .itemIn('ad_astra:jet_suit')
        .itemIn('kubejs:infinity_ingot')
        .itemOut('modern_industrialization:quantum_chestplate')

    event.remove({ id: 'modern_industrialization:armor/smithing/quantum_leggings' })
    event.recipes.modern_industrialization.packer(128, 600) //Eu, ticks
        .itemIn('ad_astra:jet_suit_pants')
        .itemIn('kubejs:infinity_ingot')
        .itemOut('modern_industrialization:quantum_leggings')

    event.remove({ id: 'modern_industrialization:armor/smithing/quantum_boots' })
    event.recipes.modern_industrialization.packer(128, 600) //Eu, ticks
        .itemIn('ad_astra:jet_suit_boots')
        .itemIn('kubejs:infinity_ingot')
        .itemOut('modern_industrialization:quantum_boots')

    event.remove({ id: 'modern_industrialization:tools/smithing/quantum_sword' })
    event.recipes.modern_industrialization.packer(128, 600) //Eu, ticks
        .itemIn('spectrum:glass_crest_ultra_greatsword')
        .itemIn('kubejs:infinity_ingot')
        .itemOut('modern_industrialization:quantum_sword')



    // Vacuum Freezer
    event.remove({ id: 'modern_industrialization:materials/vacuum_freezer/liquid_air' })
    event.recipes.modern_industrialization.vacuum_freezer(32, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:liquid_air', 1000)
        .dimension('minecraft:overworld')

    event.recipes.modern_industrialization.vacuum_freezer(32, 200) //Eu, ticks
        .fluidIn('kibe:liquid_xp', 160)
        .itemOut('vitalize:experience_cubed')
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.vacuum_freezer(16, 200) //Eu, ticks
            .fluidIn(`modern_industrialization:${color.name}_ink`, 1000)
            .itemOut(`spectrum:${color.name}_block`)
    });

    // Pressurizer
    event.remove({ id: 'modern_industrialization:materials/pressurizer/liquid_air' })
    event.recipes.modern_industrialization.pressurizer(8, 200) //Eu, ticks
        .itemIn('modern_industrialization:air_intake', 0)
        .fluidOut('modern_industrialization:liquid_air', 1000)
        .dimension('minecraft:overworld')

    // Bottler
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.bottler(4, 200)
            .itemIn('minecraft:glass_bottle')
            .fluidIn(`modern_industrialization:${color.name}_ink`, 100)
            .itemOut(`spectrum:${color.name}_pigment`)
    })
    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:glass_bottle')
        .fluidIn('the_bumblezone:royal_jelly_fluid_still', 250)
        .itemOut('the_bumblezone:royal_jelly_bottle')
    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('spectrum:midnight_solution', 1000)
        .itemOut('spectrum:midnight_solution_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('spectrum:dragonrot', 1000)
        .itemOut('spectrum:dragonrot_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('spectrum:liquid_crystal', 1000)
        .itemOut('spectrum:liquid_crystal_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('spectrum:mud', 1000)
        .itemOut('spectrum:mud_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('the_bumblezone:royal_jelly_fluid_still', 1000)
        .itemOut('the_bumblezone:royal_jelly_bucket')
    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('the_bumblezone:sugar_water_still', 1000)
        .itemOut('the_bumblezone:sugar_water_bucket')
    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('modern_industrialization:sugar_solution', 1000)
        .itemOut('modern_industrialization:sugar_solution_bucket')
    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('the_bumblezone:honey_fluid_still', 1000)
        .itemOut('the_bumblezone:honey_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('modern_industrialization:void', 1000)
        .itemOut('modern_industrialization:void_bucket')

    event.recipes.modern_industrialization.bottler(8, 400)
        .itemIn('minecraft:bucket')
        .fluidIn('kibe:liquid_xp', 1000)
        .itemOut('kibe:liquid_xp_bucket')
    event.recipes.modern_industrialization.bottler(8, 100) //Mb, ticks
        .fluidIn('kibe:liquid_xp',250)
        .itemIn('minecraft:glass_bottle')
        .itemOut('minecraft:experience_bottle')

    event.recipes.modern_industrialization.bottler(8, 100)
        .itemIn('minecraft:glass_bottle')
        .fluidIn('milk:still_milk', 100)
        .itemOut('farmersdelight:milk_bottle')

    // Void Pump
    event.recipes.modern_industrialization.void_pump(16, 200)
        .itemIn('#modern_industrialization:fluid_pipes', 0.1)
        .fluidOut('modern_industrialization:void', 100)
        .adjacentBlock("minecraft:bedrock", "below")


    // Replaced
    //
    const mi_fluid_pipes = [
        'modern_industrialization:steam_age/steel/wiremill_asbl',
        'modern_industrialization:steam_age/steel/unpacker_asbl',
        'modern_industrialization:steam_age/steel/steel_upgrade_asbl',
        'modern_industrialization:steam_age/steel/packer_asbl',
        'modern_industrialization:steam_age/bronze/water_pump_asbl',
        'modern_industrialization:steam_age/bronze/mixer_asbl',
        'modern_industrialization:steam_age/bronze/macerator_asbl',
        'modern_industrialization:steam_age/bronze/cutting_machine_asbl',
        'modern_industrialization:steam_age/bronze/compressor_asbl',
        'modern_industrialization:quarry/drill/copper_drill_asbl',
        'modern_industrialization:quarry/drill/bronze_drill_asbl',
        'modern_industrialization:assembler_generated/quarry/drill/bronze_drill',
        'modern_industrialization:assembler_generated/quarry/drill/copper_drill',
        'modern_industrialization:assembler_generated/steam_age/bronze/compressor',
        'modern_industrialization:assembler_generated/steam_age/bronze/cutting_machine',
        'modern_industrialization:assembler_generated/steam_age/bronze/macerator',
        'modern_industrialization:assembler_generated/steam_age/bronze/mixer',
        'modern_industrialization:assembler_generated/steam_age/bronze/water_pump',
        'modern_industrialization:assembler_generated/steam_age/steel/packer',
        'modern_industrialization:assembler_generated/steam_age/steel/steel_upgrade',
        'modern_industrialization:assembler_generated/steam_age/steel/unpacker',
        'modern_industrialization:assembler_generated/steam_age/steel/wiremill',
        'modern_industrialization:electric_age/machine/steam_turbine_asbl',
        'modern_industrialization:electric_age/machine/mixer_asbl',
        'modern_industrialization:electric_age/machine/water_pump_asbl',
        'modern_industrialization:assembler_generated/electric_age/machine/mixer',
        'modern_industrialization:assembler_generated/electric_age/machine/steam_turbine',
        'modern_industrialization:assembler_generated/electric_age/machine/water_pump',
        'modern_industrialization:electric_age/component/assembler/pump',
    ]
    const mi_item_pipes = [
        'modern_industrialization:steam_age/steel/unpacker_asbl',
        'modern_industrialization:steam_age/steel/quarry_asbl',
        'modern_industrialization:steam_age/steel/packer_asbl',
        'modern_industrialization:quarry/drill/copper_drill_asbl',
        'modern_industrialization:quarry/drill/bronze_drill_asbl',
        'modern_industrialization:quarry/drill/steel_drill_asbl',
        'modern_industrialization:quarry/drill/gold_drill_asbl',

        'modern_industrialization:assembler_generated/quarry/drill/bronze_drill',
        'modern_industrialization:assembler_generated/quarry/drill/gold_drill',
        'modern_industrialization:assembler_generated/quarry/drill/copper_drill',
        'modern_industrialization:assembler_generated/quarry/drill/steel_drill',
        'modern_industrialization:assembler_generated/steam_age/steel/packer',
        'modern_industrialization:assembler_generated/steam_age/steel/quarry',
        'modern_industrialization:assembler_generated/steam_age/steel/unpacker',
        'modern_industrialization:steam_age/steel/assembler/steam_quarry',
    ]
    mi_fluid_pipes.forEach(element => {
        event.replaceInput({id: element}, 'modern_industrialization:fluid_pipe', 'neepmeat:fluid_pipe');
    });
    mi_item_pipes.forEach(element => {
        event.replaceInput({id: element}, 'modern_industrialization:item_pipe', 'neepmeat:item_pipe');
    });
    event.replaceInput({id: 'modern_industrialization:electric_age/circuit/craft/quantum_circuit_asbl'}, 'modern_industrialization:processing_unit', 'kubejs:photonic_circuit')
    event.replaceInput({id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/quantum_circuit'}, 'modern_industrialization:processing_unit', 'kubejs:photonic_circuit')
    event.replaceInput({id: 'modern_industrialization:electric_age/blocks/assembler/quantum_barrel'}, 'modern_industrialization:singularity', 'ae2:singularity')
    event.replaceInput({id: 'modern_industrialization:electric_age/blocks/assembler/quantum_tank'}, 'modern_industrialization:singularity', 'ae2:singularity')
    event.replaceInput({}, 'yttr:yttrium_dust', 'modern_industrialization:yttrium_dust')
});
