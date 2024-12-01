
ServerEvents.recipes(event => {

    // Filtered Ejector
    event.remove({id: 'neepmeat:item_transfer/filtered_ejector'});
    event.shapeless('neepmeat:filtered_ejector', [
        'neepmeat:ejector',
        'modern_industrialization:electronic_circuit'
    ]),
    // Advanced Item Router
    event.shapeless('neepmeat:advanced_router', [
        'neepmeat:router',
        'modern_industrialization:electronic_circuit'
    ]),
    // Pressing Basin
    event.remove({id: 'neepmeat:rendering/fat_collector'});
    event.shaped('neepmeat:collector', [
        'PBP',
        'CVC',
        'CSC'
    ], {
        P: '#modern_industrialization:fluid_pipes',
        B: 'neepmeat:fluid_buffer',
        C: 'modern_industrialization:meat_steel_curved_plate',
        V: 'ae2:quartz_vibrant_glass',
        S: 'modern_industrialization:steel_large_plate'
    })
    // Pressing Basin
    event.remove({id: 'neepmeat:machines/casting_basin'});
    event.shaped('neepmeat:casting_basin', [
        'L L',
        'PBP',
        'PPP'
    ], {
        L: 'modern_industrialization:meat_steel_large_plate',
        P: 'modern_industrialization:meat_steel_plate',
        B: 'modern_industrialization:blastproof_alloy_large_plate'
    })
    // Rendering Basin
    event.remove({id: 'neepmeat:rendering/rendering_basin'});
    event.shaped('neepmeat:crucible', [
        'P P',
        'P P',
        'PPP'
    ], {
        P: 'modern_industrialization:meat_steel_plate',
    })
    // Rock Drill
    event.remove({id: 'neepmeat:tools/rock_drill'});
    event.shaped('neepmeat:rock_drill', [
        'SAS',
        'CPC',
        'BRB'
    ], {
        S: 'minecraft:stick',
        A: 'modern_industrialization:analog_circuit',
        C: 'modern_industrialization:steel_curved_plate',
        P: 'modern_industrialization:piston',
        R: 'modern_industrialization:steel_rod',
        B: 'modern_industrialization:iron_bolt'
    })
    // Small Compressor
    event.remove({id: 'neepmeat:tools/small_compressor'});
    event.shaped('neepmeat:small_compressor', [
        'TAF',
        'BPF',
        'TbC'
    ], {
        T: 'neepmeat:basic_tank',
        B: 'neepmeat:fluid_buffer',
        F: 'neepmeat:fluid_pipe',
        P: 'modern_industrialization:pump',
        b: 'modern_industrialization:bronze_boiler',
        C: 'modern_industrialization:bronze_compressor',
        A: 'modern_industrialization:analog_circuit'
    })

    event.remove({id: 'neepmeat:machines/living_machine/fabricator'});
    event.shaped('neepmeat:fabricator', [
        'RNR',
        'CSC',
        'BAB'
    ], {
        R: 'modern_industrialization:redstone_alloy_plate',
        N: 'wiredredstone:bundled_cable',
        C: 'modern_industrialization:cupronickel_wire',
        S: 'modern_industrialization:steel_rod_magnetic',
        B: 'modern_industrialization:netherite_curved_plate',
        A: 'autoworkstations:iron_auto_crafting_table'
    })

    event.remove({id: 'neepmeat:machines/living_machine/extractor'});
    event.shaped('neepmeat:extractor', [
        'CPC',
        'PMP',
        'CPC'
    ], {
        M: 'neepmeat:meat_steel_component',
        C: 'modern_industrialization:meat_steel_curved_plate',
        P: 'modern_industrialization:osmium_large_plate',
    })

    event.remove({id: 'neepmeat:wood/blood_bubble_planks'});
    event.shapeless('2x neepmeat:blood_bubble_planks', [
        '#neepmeat:blood_bubble_logs'
    ]),
    event.shaped('neepmeat:pedestal', [
        '   ',
        'BPB',
        'BDB'
    ], {
        B: 'modern_industrialization:beryllium_plate',
        P: 'neepmeat:item_buffer',
        D: 'neepmeat:data_cable'
    });

    event.remove({id: 'neepmeat:ingredients/meat_steel_component'});
    event.shaped('neepmeat:meat_steel_component', [
        'RrR',
        'CLC',
        'RrR'
    ], {
        R: 'modern_industrialization:meat_steel_rod',
        C: 'modern_industrialization:meat_steel_curved_plate',
        L: 'modern_industrialization:meat_steel_large_plate',
        r: 'modern_industrialization:meat_steel_ring'
    })

    event.shaped('neepmeat:sacrificial_dagger', [
        'RB ',
        'PMD',
        'RB '
    ], {
        R: 'modern_industrialization:stainless_steel_rod',
        B: 'modern_industrialization:stainless_steel_bolt',
        P: 'modern_industrialization:piston',
        M: 'modern_industrialization:motor',
        D: 'modern_industrialization:invar_rotary_blade',
    })

    event.shaped('neepmeat:big_lever', [
        ' R ',
        'PGP',
        'PPP'
    ], {
        R: 'modern_industrialization:steel_rod',
        G: 'modern_industrialization:steel_gear',
        P: 'modern_industrialization:steel_plate',
    })

    // Item Pipe
    event.replaceInput({id: 'neepmeat:item_transfer/item_pipe'}, 'neepmeat:whisper_brass_ingot', 'modern_industrialization:bronze_plate');

    // Item Pump
    event.replaceInput({id: 'neepmeat:item_transfer/item_pump'}, 'neepmeat:whisper_brass_ingot', 'modern_industrialization:bronze_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/item_pump'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/item_pump'}, 'minecraft:iron_block', 'modern_industrialization:bronze_machine_casing');

    // Item Router
    event.replaceInput({id: 'neepmeat:item_transfer/router'}, 'neepmeat:whisper_brass_ingot', 'modern_industrialization:bronze_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/router'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/router'}, 'neepmeat:brain_rough', 'modern_industrialization:analog_circuit');

    // Smart Dumper
    event.replaceInput({id: 'neepmeat:item_transfer/dumper'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/dumper'}, 'neepmeat:brain_rough', 'modern_industrialization:analog_circuit');

    // Drain
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_drain'}, '#c:iron_ingots', 'modern_industrialization:steel_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_drain'}, '#c:copper_ingots', 'modern_industrialization:copper_plate');

    // Charnel Compactor
    event.replaceInput({id: 'neepmeat:ingredients/charnel_compactor'}, '#c:iron_ingots', 'modern_industrialization:meat_steel_plate');

    // Fluid Pipe
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_pipe'}, '#c:iron_ingots', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_pipe'}, '#c:copper_ingots', 'modern_industrialization:copper_curved_plate');

    // Redstone Pump
    event.replaceInput({id: 'neepmeat:fluid_transfer/redstone_pump'}, '#c:iron_ingots', 'modern_industrialization:iron_plate');
    // event.replaceInput({id: 'neepmeat:fluid_transfer/redstone_pump'}, 'minecraft:redstone_block', 'modern_industrialization:redstone_alloy_plate');

    // Fluid Buffer
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_buffer'}, '#c:copper_ingots', 'modern_industrialization:copper_plate');

    // Fluid Interface
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_port'}, '#c:iron_ingots', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_port'}, '#c:copper_ingots', 'modern_industrialization:copper_plate');

    // Basic Tank
    event.replaceInput({id: 'neepmeat:fluid_transfer/basic_tank'}, '#c:copper_ingots', 'modern_industrialization:copper_large_plate');

    // Glass Tank
    event.replaceInput({id: 'neepmeat:fluid_transfer/basic_glass_tank'}, '#c:copper_ingots', 'modern_industrialization:copper_large_plate');

    // Fluid Rationer
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_rationer'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_rationer'}, 'neepmeat:enlightened_brain', 'modern_industrialization:analog_circuit');

    // Chrono Separator
    event.replaceInput({id: 'neepmeat:machines/separator'}, 'neepmeat:meat_steel_ingot', 'modern_industrialization:meat_steel_large_plate');

    // Feeding Through
    event.replaceInput({id: 'neepmeat:machines/feeding_trough'}, '#c:iron_ingots', 'modern_industrialization:steel_plate');

    // Persistent Crafting Table
    event.replaceInput({id: 'neepmeat:machines/workstation'}, '#c:iron_ingots', 'modern_industrialization:steel_plate');

    // Ejector
    event.replaceInput({id: 'neepmeat:item_transfer/ejector'}, 'minecraft:redstone', 'modern_industrialization:redstone_alloy_plate');

    // Buffer
    event.replaceInput({id: 'neepmeat:item_transfer/buffer'}, '#c:iron_ingots', 'modern_industrialization:iron_plate');

    // Flame Jet
    event.replaceInput({id: 'neepmeat:machines/flame_jet'}, 'neepmeat:meat_steel_ingot', 'modern_industrialization:meat_steel_curved_plate');

    // Flex Tank
    event.replaceInput({id: 'neepmeat:fluid_transfer/flex_tank'}, 'minecraft:copper_ingot', 'modern_industrialization:cupronickel_large_plate');

    // Item Detector
    event.replaceInput({id: 'neepmeat:item_transfer/content_detector'}, 'minecraft:redstone', 'modern_industrialization:redstone_alloy_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/content_detector'}, 'neepmeat:brain_rough', 'modern_industrialization:analog_circuit');

    // Solidity Detector
    event.replaceInput({id: 'neepmeat:item_transfer/solidity_detector'}, 'minecraft:redstone', 'modern_industrialization:redstone_alloy_plate');
    event.replaceInput({id: 'neepmeat:item_transfer/solidity_detector'}, 'neepmeat:brain_rough', 'modern_industrialization:analog_circuit');

    // Fluid Gauge
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_gauge'}, 'minecraft:copper_ingot', 'modern_industrialization:copper_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/fluid_gauge'}, 'minecraft:iron_nugget', 'wiredredstone:red_alloy_wire');

    // Item Gauge
    event.replaceInput({id: 'neepmeat:fluid_transfer/item_gauge'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:fluid_transfer/item_gauge'}, 'minecraft:iron_nugget', 'wiredredstone:red_alloy_wire');

    // Multi Tank
    event.replaceInput({id: 'neepmeat:fluid_transfer/multi_tank'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');

    // Pipette
    event.replaceInput({id: 'neepmeat:tools/pipette'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate');
    event.replaceInput({id: 'neepmeat:tools/pipette'}, 'minecraft:iron_nugget', 'modern_industrialization:stainless_steel_bolt');

    // Holding Track
    event.replaceInput({id: 'neepmeat:machines/holding_track'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod');
    event.replaceInput({id: 'neepmeat:machines/holding_track'}, 'minecraft:piston', 'modern_industrialization:piston');
    event.replaceInput({id: 'neepmeat:machines/holding_track'}, 'minecraft:redstone', 'wiredredstone:red_alloy_wire');

    // Rider Control Rail
    event.replaceInput({id: 'neepmeat:machines/control_track'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_rod');
    event.replaceInput({id: 'neepmeat:machines/control_track'}, 'minecraft:piston', 'modern_industrialization:piston');

    // Dumping Rail
    event.replaceInput({id: 'neepmeat:machines/dumping_track'}, 'minecraft:redstone', 'wiredredstone:red_alloy_wire');

    // Networking Tool
    event.replaceInput({id: 'neepmeat:tools/networking_tool'}, 'minecraft:iron_bars', 'modern_industrialization:meat_steel_rod');

})
