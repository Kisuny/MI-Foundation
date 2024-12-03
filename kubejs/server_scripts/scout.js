ServerEvents.recipes(event => {
    event.remove({output: [
        'scout:satchel',
        'scout:upgraded_satchel',
        'scout:pouch',
        'scout:upgraded_pouch',
        'scout:satchel_strap',
    ]})
    customPedestalCraft(event, {
        tier: 'basic', time: 100, topaz: 4, experience: 0.1,
        pattern: [
            "CRC",
            "   ",
            "   "
        ],
        keys: {
            "C": { "item": "scout:tanned_leather" },
            "R": { "item": "minecraft:string" },
        },
        result: {
            "item": "scout:satchel_strap",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });
    
    customPedestalCraft(event, {
        tier: 'basic', time: 400, topaz: 8, amethyst: 8, citrine: 8, experience: 0.5,
        pattern: [
            "WEW",
            "EQE",
            "WEW"
        ],
        keys: {
            "Q": { "item": "minecraft:stone_button" },
            "W": { "item": "minecraft:string" },
            "E": { "item": "minecraft:leather" },
        },
        result: {
            "item": "scout:pouch",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 16, amethyst: 16, citrine: 16, experience: 0.5,
        pattern: [
            "RER",
            "EWE",
            "QEQ"
        ],
        keys: {
            "Q": { "item": "minecraft:string" },
            "W": { "item": "minecraft:stone_button" },
            "E": { "item": "scout:tanned_leather" },
            "R": { "item": "scout:satchel_strap" },
        },
        result: {
            "item": "scout:satchel",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });
    customEnchanterCraft(event, {
        time: 1200, experience: 200, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "scout:satchel"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"}
        ],
        result: {
            "item": "scout:upgraded_satchel"
        },
    });
    customEnchanterCraft(event, {
        time: 600, experience: 100, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "scout:pouch"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"},
          {"item": "modern_industrialization:diamond_plate"}
        ],
        result: {
            "item": "scout:upgraded_pouch"
        },
    });
});