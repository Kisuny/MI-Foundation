//priority: 0

ServerEvents.recipes(event => {
    
    const animal_pen_types = [
        "oak",
        "spruce",
        "birch",
        "acacia",
        "jungle",
        "dark_oak",
        "crimson",
        "warped",
        "mangrove"
    ]
    animal_pen_types.forEach(type => {
        event.remove({ output: `animal_pen:animal_pen_${type}` })
        customPedestalCraft(event, {
            tier: "simple", time: 400, topaz: 8, amethyst: 8, citrine: 8, experience: 1.0,
            pattern: [
                "EQE",
                "WWW",
                "   "
            ],
            keys: {
                "Q": { "item": "spectrum:shimmerstone_gem" },
                "W": { "item": "minecraft:smooth_stone_slab" },
                "E": { "item": `minecraft:${type}_fence` },
            },
            result: {
                "item": `animal_pen:animal_pen_${type}`,
                "count": 1
            },
            advancement: "spectrum:build_basic_pedestal_structure"
        });
    });

    event.remove({ output: "animal_pen:aquarium_block" })
    customPedestalCraft(event, {
            tier: "simple", time: 400, topaz: 8, amethyst: 8, citrine: 8, experience: 1.0,
            pattern: [
                "WQW",
                "WEW",
                " R "
            ],
            keys: {
                "Q": { "item": "spectrum:shimmerstone_gem" },
                "W": { "item": "minecraft:glass" },
                "E": { "item": "minecraft:water_bucket" },
                "R": { "item": "minecraft:stone" },
            },
            result: {
                "item": "animal_pen:aquarium_block",
                "count": 1
            },
            advancement: "spectrum:build_basic_pedestal_structure"
        });


})
