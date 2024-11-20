ServerEvents.recipes(event => {

    const removeByID = [
        'travelersbackpack:standard',
    ]

    const removeByOutput = [
        'travelersbackpack:blank_upgrade', 
        'travelersbackpack:iron_tier_upgrade', 
        'travelersbackpack:gold_tier_upgrade', 
        'travelersbackpack:diamond_tier_upgrade', 
        'travelersbackpack:netherite_tier_upgrade', 
        'travelersbackpack:crafting_upgrade',
        'travelersbackpack:hose',
        'travelersbackpack:backpack_tank',
    ]

    removeByID.forEach(item => {
        event.remove({id: item})
    });

    removeByOutput.forEach(item => {
        event.remove({output: item})
    })
    // travelersbackpack:squid
    const removeByBackpackName = [
        'squid',
        'chicken',
        'sheep',
        'pig',
        'cow',
        'horse',
        'ocelot',
        'fox',
        'wolf',
        'bee',
        'wither',
        'spider',
        'skeleton',
        'magma_cube',
        'ghast',
        'blaze',
        'enderman',
        'dragon',
        'creeper',
        'pumpkin',
        'melon',
        'hay',
        'cactus',
        'cake',
        'sponge',
        'snow',
        'sandstone',
        'nether',
        'end',
        'bookshelf',
        'quartz',
        'coal',
        'redstone',
        'lapis'
    ]

    removeByBackpackName.forEach(backpack => {
        event.remove({id: `travelersbackpack:${backpack}`})
    });

    event.shaped('travelersbackpack:hose', [
        'PEE',
        '  E',
        '  E'
    ], {
        P: 'travelersbackpack:hose_nozzle',
        E: 'modern_industrialization:rubber_sheet'
    });

    event.shaped('travelersbackpack:backpack_tank', [
        'EPE',
        'E E',
        'EPE'
    ], {
        P: 'modern_industrialization:iron_ring',
        E: 'minecraft:glass'
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 600, citrine: 8, topaz: 8, amethyst: 8, experience: 0.5,
        pattern: [
            "EEE",
            "WQW",
            "EEE"
        ],
        keys: {
            "Q": { "item": "minecraft:bundle" },
            "W": { "item": "travelersbackpack:backpack_tank" },
            "E": { "item": "kubejs:leather_patch" },
        },
        result: {
            "item": "travelersbackpack:blank_upgrade",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });
    
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, citrine: 16, topaz: 16, amethyst: 16, experience: 1.0,
        pattern: [
            "WQW",
            "QEQ",
            "WQW"
        ],
        keys: {
            "Q": { "item": "kubejs:raw_magical_steel" },
            "W": { "item": "modern_industrialization:iron_large_plate" },
            "E": { "item": "travelersbackpack:blank_upgrade" }
        },
        result: {
            "item": "travelersbackpack:iron_tier_upgrade",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 2400, citrine: 32, topaz: 32, amethyst:32, onyx: 16, experience: 16.0,
        pattern: [
            "WQW",
            "QEQ",
            "WQW"
        ],
        keys: {
            "Q": { "item": "mythicmetals:celestium_ingot" },
            "W": { "item": "modern_industrialization:midas_gold_large_plate" },
            "E": { "item": "travelersbackpack:blank_upgrade" }
        },
        result: {
            "item": "travelersbackpack:gold_tier_upgrade",
            "count": 1
        },
        advancement: "spectrum:craft_onyx_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 4800, citrine: 63, topaz: 64, amethyst: 64, onyx: 32, experience: 32.0,
        pattern: [
            "WQW",
            "QEQ",
            "WQW"
        ],
        keys: {
            "Q": { "item": "mythicmetals:durasteel_ingot" },
            "W": { "item": "modern_industrialization:diamond_large_plate" },
            "E": { "item": "travelersbackpack:blank_upgrade" }
        },
        result: {
            "item": "travelersbackpack:diamond_tier_upgrade",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'complex', time: 9600, citrine: 63, topaz: 64, amethyst: 64, moonstone: 32, onyx: 64, experience: 32.0,
        pattern: [
            "WQW",
            "QEQ",
            "WQW"
        ],
        keys: {
            "Q": { "item": "minecraft:netherite_ingot" },
            "W": { "item": "modern_industrialization:metallurgium_plate" },
            "E": { "item": "travelersbackpack:blank_upgrade" }
        },
        result: {
            "item": "travelersbackpack:netherite_tier_upgrade",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 1200, citrine: 16, experience: 1.0,
        pattern: [
            "Q  ",
            "W  ",
            "   "
        ],
        keys: {
            "Q": { "item": "neepmeat:workstation" },
            "W": { "item": "travelersbackpack:blank_upgrade" }
        },
        result: {
            "item": "travelersbackpack:crafting_upgrade",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 200, citrine: 8, experience: 0.5,
        pattern: [
            "QQQ",
            "QWQ",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "minecraft:leather" },
            "W": { "item": "minecraft:string" }
        },
        result: {
            "item": "kubejs:leather_patch",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 1200, topaz: 8, citrine: 8, experience: 1.0,
        pattern: [
            "TQT",
            "WEW",
            "TRT"
        ],
        keys: {
            "Q": { "item": "kubejs:leather_patch" },
            "W": { "item": "travelersbackpack:backpack_tank" },
            "E": { "item": "travelersbackpack:red_sleeping_bag" },
            "R": { "item": "minecraft:bundle" },
            "T": { "item": "modern_industrialization:midas_gold_plate" }
        },
        result: {
            "item": "travelersbackpack:standard",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });


});