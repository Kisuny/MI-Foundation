ServerEvents.recipes(event => {

    const removeByID = [
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:iron_backpack_from_copper',
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack',
        'sophisticatedbackpacks:upgrade_base',
    ]

    const removeByOutput = [
        "sophisticatedbackpacks:battery_upgrade",
        "sophisticatedbackpacks:stack_upgrade_starter_tier",
        "sophisticatedbackpacks:stack_upgrade_tier_1",
        "sophisticatedbackpacks:stack_upgrade_tier_2",
        "sophisticatedbackpacks:stack_upgrade_tier_3",
        "sophisticatedbackpacks:stack_upgrade_tier_4",
    ]

    removeByID.forEach(item => {
        event.remove({id: item})
    });

    removeByOutput.forEach(item => {
        event.remove({output: item})
    })

    event.remove({mod: "travelersbackpack"})

    

    event.remove({ id: 'sophisticatedbackpacks:magnet_upgrade' })
    event.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'RER',
        'EWE',
        'T T'
    ], {
        W: 'sophisticatedbackpacks:pickup_upgrade',
        E: 'minecraft:iron_ingot',
        R: 'minecraft:ender_pearl',
        T: 'kubejs:magnet_part',
    })

    event.remove({ id: 'sophisticatedbackpacks:advanced_magnet_upgrade' })
    event.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'RER',
        'EWE',
        'T T'
    ], {
        W: 'sophisticatedbackpacks:advanced_pickup_upgrade',
        E: 'minecraft:iron_ingot',
        R: 'minecraft:ender_pearl',
        T: 'kubejs:magnet_part',
    })

    event.remove({ id: 'sophisticatedbackpacks:tool_swapper_upgrade' })
    event.shaped('sophisticatedbackpacks:tool_swapper_upgrade', [
        'WRW',
        'UET',
        'QYQ'
    ], {
        Q: 'spectrum:pure_iron',
        W: 'spectrum:pure_redstone',
        E: 'sophisticatedbackpacks:upgrade_base',
        R: 'mythicmetals:celestium_sword',
        T: 'mythicmetals:celestium_axe',
        Y: 'mythicmetals:celestium_shovel',
        U: 'mythicmetals:celestium_pickaxe',
    })

    event.remove({ id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade' })
    event.shaped('sophisticatedbackpacks:advanced_tool_swapper_upgrade', [
        ' Q ',
        'ERE',
        'WWW'
    ], {
        Q: 'spectrum:pure_diamond',
        W: 'spectrum:pure_redstone',
        E: 'spectrum:pure_gold',
        R: 'sophisticatedbackpacks:tool_swapper_upgrade',
    })

    event.remove({ id: 'sophisticatedbackpacks:feeding_upgrade' })
    event.shaped('sophisticatedbackpacks:feeding_upgrade', [
        ' Q ',
        'TER',
        ' W '
    ], {
        Q: 'spectrum:enchanted_golden_carrot',
        W: 'bosses_of_mass_destruction:charged_ender_pearl',
        E: 'sophisticatedbackpacks:upgrade_base',
        R: 'minecraft:glistering_melon_slice',
        T: 'minecraft:enchanted_golden_apple',
    })

    event.remove({ id: 'sophisticatedbackpacks:advanced_feeding_upgrade' })
    event.shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
        ' Q ',
        'ERE',
        'WWW'
    ], {
        Q: 'spectrum:pure_diamond',
        W: 'spectrum:pure_redstone',
        E: 'spectrum:pure_gold',
        R: 'sophisticatedbackpacks:feeding_upgrade',
    })
    
    event.remove({ id: 'sophisticatedbackpacks:inception_upgrade' })
    event.shaped('sophisticatedbackpacks:inception_upgrade', [
        'ERE',
        'QWQ',
        'EQE'
    ], {
        Q: 'spectrum:pure_diamond',
        W: 'sophisticatedbackpacks:upgrade_base',
        E: 'bosses_of_mass_destruction:charged_ender_pearl',
        R: 'gobber2:gobber2_ingot_end',
    })


    customPedestalCraft(event, {
        tier: 'basic', time: 600, citrine: 8, topaz: 8, amethyst: 8, experience: 0.5,
        pattern: [
            "EWE",
            "W W",
            "EWE"
        ],
        keys: {
            "E": { "item": "kubejs:leather_patch" },
            "W": { "item": "minecraft:string" },
        },
        result: {
            "item": "sophisticatedbackpacks:upgrade_base",
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
            "W": { "item": "modern_industrialization:copper_large_plate" },
            "E": { "item": "sophisticatedbackpacks:backpack" }
        },
        result: {
            "item": "sophisticatedbackpacks:copper_backpack",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
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
            "W": { "item": "modern_industrialization:iron_large_plate" },
            "E": { "item": "sophisticatedbackpacks:copper_backpack" }
        },
        result: {
            "item": "sophisticatedbackpacks:iron_backpack",
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
            "W": { "item": "modern_industrialization:midas_gold_large_plate" },
            "E": { "item": "sophisticatedbackpacks:iron_backpack" }
        },
        result: {
            "item": "sophisticatedbackpacks:gold_backpack",
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
            "W": { "item": "modern_industrialization:diamond_large_plate" },
            "Q": { "item": "modern_industrialization:metallurgium_plate" },
            "E": { "item": "sophisticatedbackpacks:gold_backpack" }
        },
        result: {
            "item": "sophisticatedbackpacks:diamond_backpack",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });
    
    customPedestalCraft(event, {
        tier: 'complex', time: 9600, citrine: 63, topaz: 64, amethyst: 64, moonstone: 32, onyx: 64, experience: 32.0,
        pattern: [
            "WQW",
            "QEQ",
            "WQW"
        ],
        keys: {
            "W": { "item": "minecraft:netherite_ingot" },
            "Q": { "item": "gobber2:gobber2_ingot_end" },
            "E": { "item": "sophisticatedbackpacks:diamond_backpack" }
        },
        result: {
            "item": "sophisticatedbackpacks:netherite_backpack",
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
    // Backpack
    customPedestalCraft(event, {
        tier: 'basic', time: 1200, topaz: 8, citrine: 8, experience: 1.0,
        pattern: [
            "TQT",
            "QEQ",
            "TRT"
        ],
        keys: {
            "Q": { "item": "kubejs:leather_patch" },
            "E": { "item": "minecraft:barrel" },
            "R": { "item": "minecraft:bundle" },
            "T": { "item": "modern_industrialization:midas_gold_plate" }
        },
        result: {
            "item": "sophisticatedbackpacks:backpack",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

    // t1 stack upgrade
    customPedestalCraft(event, {
        tier: 'basic', time: 600, topaz: 12, experience: 0.5,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "sophisticatedbackpacks:upgrade_base" },
            "T": { "item": "kubejs:raw_magical_steel" }
        },
        result: {
            "item": "sophisticatedbackpacks:stack_upgrade_starter_tier",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

    // t2 stack upgrade
    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 16, citrine: 16, experience: 1.0,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "sophisticatedbackpacks:stack_upgrade_starter_tier" },
            "T": { "item": "mythicmetals:adamantite_ingot" }
        },
        result: {
            "item": "sophisticatedbackpacks:stack_upgrade_tier_1",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });

    // t3 stack upgrade
    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 16, citrine: 16, experience: 1.0,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "sophisticatedbackpacks:stack_upgrade_tier_1" },
            "T": { "item": "mythicmetals:celestium_ingot" }
        },
        result: {
            "item": "sophisticatedbackpacks:stack_upgrade_tier_2",
            "count": 1
        },
        advancement: "spectrum:collect_star_fragment"
    });

    // t4 stack upgrade
    customPedestalCraft(event, {
        tier: 'simple', time: 1000, topaz: 20, citrine: 20, amethyst : 20,  experience: 2.0,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "sophisticatedbackpacks:stack_upgrade_tier_2" },
            "T": { "item": "mythicmetals:durasteel_ingot" }
        },
        result: {
            "item": "sophisticatedbackpacks:stack_upgrade_tier_3",
            "count": 1
        },
        advancement: "spectrum:midgame/break_decayed_bedrock"
    });

    // t5 stack upgrade
    customPedestalCraft(event, {
        tier: 'simple', time: 1000, topaz: 20, citrine: 20, amethyst : 20,  experience: 2.0,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "sophisticatedbackpacks:stack_upgrade_tier_3" },
            "T": { "item": "spectrum:refined_malachite" }
        },
        result: {
            "item": "sophisticatedbackpacks:stack_upgrade_tier_4",
            "count": 1
        },
        advancement: "spectrum:lategame/collect_malachite"
    });

});