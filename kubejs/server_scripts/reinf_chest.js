ServerEvents.recipes(event => {
    event.replaceInput({id: 'reinfchest:copper_chest'}, 'minecraft:copper_ingot', 'modern_industrialization:copper_large_plate')
    event.replaceInput({id: 'reinfchest:iron_chest'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_large_plate')
    event.replaceInput({id: 'reinfchest:gold_chest'}, 'minecraft:gold_ingot', 'modern_industrialization:gold_large_plate')

    event.remove({output: "reinfchest:diamond_chest"})
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, topaz: 8, onyx: 2, experience: 2.0,
        pattern: [
            "CCC",
            "CTC",
            "CCC"
        ],
        keys: {
            "C": { "item": "modern_industrialization:diamond_large_plate" },
            "T": { "item": "reinfchest:gold_chest" }
        },
        result: {
            "item": "reinfchest:diamond_chest",
            "count": 1
        },
        advancement: "spectrum:midgame/build_advanced_pedestal_structure"
    });


});

