ServerEvents.recipes(event => {

    event.remove({ output: 
        [
            'tctimod:lost_sack', 
            'tctimod:cursed_sack', 
            'tatimod:ancient_sack', 
            'tatimod:precious_sack',
            'dragonsteel:ender_dragonsteel_sword',
            'dragonsteel:ender_dragonsteel_shovel',
            'dragonsteel:ender_dragonsteel_pickaxe',
            'dragonsteel:ender_dragonsteel_axe',
            'dragonsteel:star_alloy_sword',
            'dragonsteel:star_alloy_shovel',
            'dragonsteel:star_alloy_pickaxe',
            'dragonsteel:star_alloy_axe',
            'runes:crafting_altar',
            'spell_engine:spell_binding'
        ]
    });


        

    const reciped_id_list = [
        'dragonsteel:star_alloy_ingot',
        'dragonsteel:ender_dragonsteel_ingot',
    ]

    reciped_id_list.forEach(id => {
        event.remove({ id: id});
    });


    customPedestalCraft(event, {
        tier: 'advanced', time: 600, onyx: 32, topaz: 64, experience: 2.0,
        pattern: [
            "CCC",
            "TTT",
            "   "
        ],
        keys: {
            "C": { "item": "minecraft:netherite_ingot" },
            "T": { "item": "dragonscale:ender_dragon_scale" }
        },
        result: {
            "item": "dragonsteel:ender_dragonsteel_ingot",
            "count": 1
        },
        advancement: "spectrum:midgame/spectrum_midgame"
    })
    customPedestalCraft(event, {
        tier: 'advanced', time: 600, onyx: 32, citrine: 64, experience: 2.0,
        pattern: [
            "CCC",
            "TTT",
            "   "
        ],
        keys: {
            "C": { "item": "minecraft:netherite_ingot" },
            "T": { "item": "dragonsteel:nether_star_fragment" }
        },
        result: {
            "item": "dragonsteel:star_alloy_ingot",
            "count": 1
        },
        advancement: "spectrum:midgame/spectrum_midgame"
    })

    customPedestalCraft(event, {
        tier: 'basic', time: 1000, citrine: 24, topaz:16, amethyst: 16, experience: 1.0,
        pattern: [
            "CTC",
            " T ",
            "TTT"
        ],
        keys: {
            "C": { "item": "minecraft:gold_ingot" },
            "T": { "item": "minecraft:polished_andesite" },
        },
        result: {
            "item": "runes:crafting_altar",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 1000, citrine: 24, amethyst: 46, experience: 1.0,
        pattern: [
            " Q ",
            "EWE",
            "RRR"
        ],
        keys: {
            "Q": { "item": "minecraft:book" },
            "W": { "item": "minecraft:gold_ingot" },
            "E": { "item": "minecraft:amethyst_shard" },
            "R": { "item": "minecraft:polished_diorite" }
        },
        result: {
            "item": "spell_engine:spell_binding",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });

});