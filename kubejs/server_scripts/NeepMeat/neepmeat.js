
//priority: 0
ServerEvents.recipes(event => {
    event.remove({type: 'neepmeat:advanced_block_crushing'})

    const removeByOutput = [
        'neepmeat:copper_coil',
        'neepmeat:stator',
        'neepmeat:refractory_brick',
        'neepmeat:whisper_brass_ingot',
        'neepmeat:flywheel',
        'neepmeat:can',
        'neepmeat:robotic_arm',
        'meatweapons:assault_drill',
        'neepmeat:assault_drill',
        'neepmeat:surgery_platform',
        'neepmeat:pylon',
        'neepmeat:upgrade_manager',
    ];
    const removeByID = [
        'neepmeat:machines/small_trommel',
        'neepmeat:machines/fluid_exciter',
        // 'neepmeat:machines/well_head',
        'neepmeat:machines/mixer',
        'neepmeat:machines/large_mincer',
        'neepmeat:machines/item_mincer',
        'neepmeat:machines/robotic_arm',
        'neepmeat:machines/redstone_interface',
        'neepmeat:machines/assembler',
        'neepmeat:machines/plc',
        'neepmeat:machines/transducer',
        'neepmeat:ingredients/sacrifical_dagger',
        'neepmeat:ingredients/bioelectric_organ',
        // 'neepmeat:rendering/fat_collector',
        // 'neepmeat:fluid_transfer/bottler',
        'neepmeat:fluid_transfer/advanced_tank',
        'neepmeat:fluid_transfer/advanced_flex_tank',
        'neepmeat:kinetic/stirling_engine',
        'neepmeat:kinetic/motor_unit',
        'neepmeat:kinetic/deployer',
        'neepmeat:building/television_off',
        'neepmeat:building/big_lever',
        'neepmeat:kinetic/breaker',
        'neepmeat:kinetic/advanced_motor',
        'neepmeat:tools/dosimeter',
        'neepmeat:tools/goggles',
        'neepmeat:manufacture/vascular_conduit',
        'meatweapons:assault_drill',
        'neepmeat:kinetic/grinder',
        'neepmeat:thermal/alloy_kiln',
        'neepmeat:thermal/heater',
        'neepmeat:alloys/whisper_brass_ingot',
        // 'neepmeat:manufacture/charnel_pump',
        'neepmeat:manufacture/pylon',
        'neepmeat:manufacture/pipe_driver',
        'neepmeat:manufacture/airtruck',
        'neepmeat:manufacture/phage_ray',
        'neepmeat:manufacture/surgery_platform',
        'neepmeat:machines/pedestal',
        'neepmeat:machines/living_machine/item_output_port',
        'neepmeat:machines/living_machine/fluid_input_port',
        'neepmeat:machines/living_machine/fluid_output_port',
        'neepmeat:machines/living_machine/motor_port',
        'neepmeat:machines/living_machine/living_machine_controller',
        'neepmeat:machines/living_machine/machine_block',
        'neepmeat:machines/living_machine/blood_bubble_machine_block',
        'neepmeat:machines/living_machine/large_hopper',
        'neepmeat:machines/living_machine/meat_steel_machine_block',
        'neepmeat:kinetic/advanced_motor_upgrading',
        // 'neepmeat:machines/farming_scutter',
        // 'neepmeat:item_transfer/filtered_ejector',
        // 'neepmeat:machines/living_machine/stomach'

    ];
    removeByOutput.forEach(element => event.remove({ output: element }));
    removeByID.forEach(element => event.remove({ id: element }));

    // Replace Input
    event.replaceInput({id: 'neepmeat:item_transfer/item_requester'}, 'neepmeat:enlightened_brain', 'modern_industrialization:electronic_circuit')
    event.replaceInput({id: 'neepmeat:machines/living_machine/tree_vacuum'}, 'neepmeat:meat_steel_ingot', 'modern_industrialization:meat_steel_curved_plate')

    event.remove({type: 'neepmeat:grinding'});
    event.remove({type: 'neepmeat:pressing'});
    event.remove({type: 'neepmeat:mixing'});
    event.remove({type: 'neepmeat:alloy_smelting'});
    event.remove({type: 'neepmeat:trommel'});


})
