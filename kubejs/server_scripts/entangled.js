ServerEvents.recipes(event => {





    event.remove({id: 'entangled:item'})
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, topaz: 8, citrine: 8, onyx: 2, experience: 2.0,
        pattern: [
            "RER",
            "YCY",
            " U "
        ],
        keys: {
            "C": { "item": "spectrum:paintbrush" },
            "R": { "item": "modern_industrialization:steel_rod" },
            "E": { "item": "minecraft:shears" },
            "Y": { "item": "modern_industrialization:steel_plate" },
            "U": { "item": "minecraft:stick" },
            
        },
        result: {
            "item": "entangled:item",
            "count": 1
        },
        advancement: "spectrum:create_onyx_shard"
    });

    event.remove({ id: 'entangled:block' })

    customPedestalCraft(event, {
        tier: 'complex', time: 1400, onyx: 32, moonstone: 32, experience: 2.0,
        pattern: [
            "UEU",
            "RCR",
            "UYU"
        ],
        keys: {
            "C": { "item": "modern_industrialization:configurable_chest" },
            "R": { "item": "modern_industrialization:electronic_circuit" },
            "E": { "item": "bosses_of_mass_destruction:charged_ender_pearl" },
            "Y": { "item": "modern_industrialization:advanced_machine_hull" },
            "U": { "tag": "endrem:eyes" },
            
        },
        result: {
            "item": "entangled:block",
            "count": 1
        },
        advancement: "spectrum:lategame/build_complex_pedestal_structure"
    });

    // event.recipes.neepmeat.manufacture({
    //     "base": {
    //         "id": 'ae2:wireless_receiver'
    //     },
    //     "steps":[
    //       {
    //         "id": "neepmeat:combine",
    //         "resource": 'ae2:spatial_cell_component_2'
    //       },
    //       {
    //         "id": "neepmeat:combine",
    //         "resource": 'neepmeat:control_unit'
    //       },
    //       {
    //         "id": "neepmeat:combine",
    //         "resource": 'neepmeat:meat_steel_component'
    //       },
    //       {
    //         "id": "neepmeat:combine",
    //         "resource": 'modern_industrialization:niobium_dust'
    //       },
    //       {
    //         "id": "neepmeat:inject",
    //         "resource": 'neepmeat:charged_work_fluid'
    //       },
    //     ],
    //     "result": {
    //       "resource": 'entangled:block',
    //       "amount": 1
    //     }
    // });


})