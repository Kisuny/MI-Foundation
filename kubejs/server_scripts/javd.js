ServerEvents.recipes(event => {
    event.remove({id: 'javd:portal_block'})

    customeFusionShrineCraft(event, {
        time: 1200, experience: 8.0,
        fluid: "modern_industrialization:void",
        ingredients: [
            {"item": "bosses_of_mass_destruction:void_thorn", "count": 1 },
            {"item": "mythicmetals:durasteel_ingot", "count": 16 },
            {"item": "spectrum:bottle_of_ruin", "count": 1 },
            {"item": "botania:world_seed", "count": 4 }
        ],
        result: {
            "item": "javd:portal_block"
        },
        advancement: "spectrum:build_fusion_shrine"
    });

})