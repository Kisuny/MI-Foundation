ServerEvents.recipes(event => {
    event.remove({output:[
        'fwaystones:void_totem',
        'fwaystones:local_void',
        'fwaystones:waystone_scroll',
        'fwaystones:waystone', 
        'fwaystones:desert_waystone', 
        'fwaystones:red_desert_waystone', 
        'fwaystones:stone_brick_waystone', 
        'fwaystones:nether_brick_waystone', 
        'fwaystones:red_nether_brick_waystone', 
        'fwaystones:end_stone_brick_waystone', 
        'fwaystones:deepslate_brick_waystone', 
        'fwaystones:blackstone_brick_waystone',
        'fwaystones:abyss_watcher',
        'fwaystones:pocket_wormhole',
    ]});


    customPedestalCraft(event, {
        tier: 'simple', time: 200, amethyst: 2, experience: 0.1,
        pattern: [
            "   ",
            " W ",
            "   "
        ],
        keys: {
            "W": { "item": "minecraft:ender_pearl" },
        },
        result: {
            "item": "fwaystones:abyss_watcher",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });

    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:stone" },
        },
        result: {
            "item": "fwaystones:waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:sandstones" },
        },
        result: {
            "item": "fwaystones:desert_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:red_sandstones" },
        },
        result: {
            "item": "fwaystones:red_desert_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "minecraft:stone_bricks" },
        },
        result: {
            "item": "fwaystones:stone_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:nether_bricks" },
        },
        result: {
            "item": "fwaystones:nether_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "item": "minecraft:red_nether_bricks" },
        },
        result: {
            "item": "fwaystones:red_nether_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "item": "minecraft:end_stone_bricks" },
        },
        result: {
            "item": "fwaystones:end_stone_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:deepslate_bricks" },
        },
        result: {
            "item": "fwaystones:deepslate_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 6000, amethyst: 32, topaz:32, citrine: 32, experience: 8.0,
        pattern: [
            "TRT",
            "TWT",
            "EQE"
        ],
        keys: {
            "Q": { "item": "bewitchment:obsidian_witch_altar" },
            "W": { "item": "mythicmetals:orichalcum_ingot" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "item": "fwaystones:abyss_watcher" },
            "T": { "tag": "c:refined_blackstones" },
        },
        result: {
            "item": "fwaystones:blackstone_brick_waystone",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });

    customeFusionShrineCraft(event, {
        time: 36000, experience: 32.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "mythicmetals:durasteel_ingot", "count": 3 },
            { "item": "mythicmetals:celestium_ingot", "count": 3 },
            { "item": "minecraft:nether_star", "count": 1 },
            { "item": "spectrum:midnight_chip", "count": 16 }
        ],
        result: {
            "item": "fwaystones:pocket_wormhole"
        },
        advancement: "spectrum:midgame/collect_midnight_chip"
    }
    );
});
