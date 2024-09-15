ServerEvents.recipes(event => {
    const removeByOutput = [
        'bewitchment:silver_nugget',
        'bewitchment:raw_silver',
        'bewitchment:raw_silver_block',
        'bewitchment:silver_block',
        'bewitchment:silver_ingot',
        'bewitchment:salt_block',
        'bewitchment:salt',
        'whisperwoods:hand_of_fate',
        'bewitchment:hellish_bauble',
        'bewitchment:chalk',
        'bewitchment:golden_chalk',
        'bewitchment:fiery_chalk',
        'bewitchment:eldritch_chalk',
        'bewitchment:brazier',
        'bewitchment:mending_sigil',
        'bewitchment:cleansing_sigil',
        'bewitchment:judgment_sigil',
        'bewitchment:decay_sigil',
        'bewitchment:shrieking_sigil',
        'bewitchment:heavy_sigil',
        'bewitchment:sentinel_sigil',
        'bewitchment:shadows_sigil',
        'bewitchment:slippery_sigil',
        'bewitchment:extending_sigil',
        'bewitchment:smelly_sigil',
        'bewitchment:ruin_sigil',
        'bewitchment:crystal_ball',
        'bewitchment:cypress_broom',
        'bewitchment:elder_broom',
        'bewitchment:juniper_broom',
        'bewitchment:dragons_blood_broom',
        'bwplus:yew_broom',
        'bewitchment:protection_poppet',
        'bewitchment:death_protection_poppet',
        'bewitchment:voodoo_poppet',
        'bewitchment:voodoo_protection_poppet',
        'bewitchment:mending_poppet',
        'bewitchment:vampiric_poppet',
        'bewitchment:curse_poppet',
        'bewitchment:judgment_poppet',
        'bewitchment:fatigue_poppet',
        'bwplus:rgb_witch_wool',
        'bewitchment:oak_poppet_shelf', 
        'bewitchment:spruce_poppet_shelf', 
        'bewitchment:birch_poppet_shelf', 
        'bewitchment:jungle_poppet_shelf', 
        'bewitchment:acacia_poppet_shelf', 
        'bewitchment:dark_oak_poppet_shelf', 
        'bewitchment:crimson_poppet_shelf', 
        'bewitchment:warped_poppet_shelf', 
        'bewitchment:juniper_poppet_shelf', 
        'bewitchment:cypress_poppet_shelf', 
        'bewitchment:dragons_blood_poppet_shelf',
        'bewitchment:elder_poppet_shelf',
    ]
    removeByOutput.forEach(item => event.remove({ output: item }));

    event.shapeless('neepmeat:blood_bucket', ['4x bewitchment:bottle_of_blood', 'minecraft:bucket'])


    customPedestalCraft(event, {
        tier: 'basic', time: 1200, amethyst: 4, citrine: 16, topaz: 8, experience: 2.0,
        pattern: [
            "SZS",
            "HNH",
            " F "
        ],
        keys: {
            "N": { "item": "minecraft:netherite_ingot" },
            "H": { "item": "bewitchment:demon_horn" },
            "F": { "item": "bewitchment:fiery_serum" },
            "S": { "item": "minecraft:string" },
            "Z": { "item": "kubejs:zotzpyre_flesh" },
        },
        result: {
            "item": "bewitchment:hellish_bauble",
            "count": 1
        },
        advancement: "kubejs:bewitchment/witch_cauldron"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 400, citrine: 4, experience: 1.0,
        pattern: [
            "NFN",
            "NHN",
            "NHN"
        ],
        keys: {
            "N": { "item": "bewitchment:wood_ash" },
            "H": { "item": "minecraft:cobblestone" },
            "F": { "tag": "bewitchment:barks" }
        },
        result: {
            "item": "bewitchment:chalk",
            "count": 1
        },
        advancement: "kubejs:bewitchment/barks"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 400, citrine: 16, experience: 1.0,
        pattern: [
            "FNH",
            "   ",
            "   "
        ],
        keys: {
            "N": { "item": "bewitchment:cleansing_balm" },
            "H": { "item": "bewitchment:earth_ichor" },
            "F": { "item": "bewitchment:chalk" }
        },
        result: {
            "item": "bewitchment:golden_chalk",
            "count": 1
        },
        advancement: "kubejs:bewitchment/chalk"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 400, amethyst: 8, topaz: 8, experience: 1.0,
        pattern: [
            "FNH",
            "   ",
            "   "
        ],
        keys: {
            "N": { "item": "bewitchment:heaven_extract" },
            "H": { "item": "bewitchment:fiery_serum" },
            "F": { "item": "bewitchment:chalk" }
        },
        result: {
            "item": "bewitchment:fiery_chalk",
            "count": 1
        },
        advancement: "kubejs:bewitchment/chalk"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 400, amethyst: 16, experience: 1.0,
        pattern: [
            "FNH",
            "   ",
            "   "
        ],
        keys: {
            "N": { "item": "bewitchment:aqua_cerate" },
            "H": { "item": "bewitchment:grim_elixir" },
            "F": { "item": "bewitchment:chalk" }
        },
        result: {
            "item": "bewitchment:eldritch_chalk",
            "count": 1
        },
        advancement: "kubejs:bewitchment/chalk"
    });
    
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, amethyst: 16, onyx: 4, experience: 1.0,
        pattern: [
            "WQW",
            "RER",
            "TRT"
        ],
        keys: {
            "Q": { "item": "minecraft:nether_wart_block" },
            "W": { "item": "modern_industrialization:silver_plate" },
            "E": { "item": "modern_industrialization:silver_block" },
            "R": { "item": "modern_industrialization:iron_rod" },
            "T": { "item": "modern_industrialization:iron_bolt" }
        },
        result: {
            "item": "bewitchment:brazier",
            "count": 1
        },
        advancement: "kubejs:bewitchment/athame"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 200, amethyst: 16, onyx: 2, experience: 1.0,
        pattern: [
            "EEE",
            "EQE",
            "W W"
        ],
        keys: {
            "Q": { "item": "spectrum:amethyst_powder" },
            "W": { "item": "modern_industrialization:iron_rod" },
            "E": { "item": "spirit:soul_glass" }
        },
        result: {
            "item": "bewitchment:crystal_ball",
            "count": 1
        },
        advancement: "spectrum:midgame/spectrum_midgame"
    });

    const poppetCraftToPedestal = (output, itemList) => {
        customPedestalCraft(event, {
            tier: 'advanced', time: 1200, experience: 1.0,
            pattern: [
                " E ",
                "TWR",
                " Q "
            ],
            keys: {
                "Q": { "item": "minecraft:dried_kelp" },
                "W": { "item": "minecraft:hay_block" },
                "E": { "item": "minecraft:vine" },
                "R": { "item": itemList[0] },
                "T": { "item": itemList[1] }
            },
            result: {
                "item": output,
                "count": 1
            },
            advancement: "spectrum:midgame/spectrum_midgame"
        });
    };

    poppetCraftToPedestal('bewitchment:protection_poppet', ['bewitchment:spruce_bark','minecraft:iron_block'])
    poppetCraftToPedestal('bewitchment:death_protection_poppet', ['minecraft:ghast_tear','bewitchment:demon_heart'])
    poppetCraftToPedestal('bewitchment:voodoo_poppet', ['bewitchment:aconite','bewitchment:demon_heart'])
    poppetCraftToPedestal('bewitchment:voodoo_protection_poppet', ['bewitchment:birch_bark','bewitchment:oak_bark'])
    poppetCraftToPedestal('bewitchment:mending_poppet', ['bewitchment:garlic','minecraft:netherite_scrap'])
    poppetCraftToPedestal('bewitchment:vampiric_poppet', ['minecraft:ghast_tear','bewitchment:bottle_of_blood'])
    poppetCraftToPedestal('bewitchment:curse_poppet', ['bewitchment:snake_tongue','modern_industrialization:silver_ingot'])
    poppetCraftToPedestal('bewitchment:judgment_poppet', ['modern_industrialization:salt_dust','modern_industrialization:silver_ingot'])
    poppetCraftToPedestal('bewitchment:fatigue_poppet', ['minecraft:fermented_spider_eye','bewitchment:belladonna'])


    const sigilCraftToPedestal = (output, itemList) => {
        customPedestalCraft(event, {
            tier: 'advanced', time: 600, experience: 0.1,
            pattern: [
                "RQE",
                "QWQ",
                "EQR"
            ],
            keys: {
                "Q": { "item": "bewitchment:dragons_blood_resin" },
                "W": { "item": "minecraft:paper" },
                "E": { "item": itemList[0] },
                "R": { "item": itemList[1] }
            },
            result: {
                "item": output,
                "count": 1
            },
            advancement: "kubejs:bewitchment/dragons_blood_resin"
        });
    };

    sigilCraftToPedestal('bewitchment:mending_sigil', ['bewitchment:juniper_bark', 'bewitchment:spruce_bark'])
    sigilCraftToPedestal('bewitchment:cleansing_sigil', ['bewitchment:garlic', 'bewitchment:birch_bark'])
    sigilCraftToPedestal('bewitchment:judgment_sigil', ['modern_industrialization:salt_dust', 'modern_industrialization:silver_ingot'])
    sigilCraftToPedestal('bewitchment:decay_sigil', ['bewitchment:cypress_bark', 'bewitchment:belladonna'])
    sigilCraftToPedestal('bewitchment:shrieking_sigil', ['bewitchment:aconite', 'bewitchment:bottle_of_blood'])
    sigilCraftToPedestal('bewitchment:heavy_sigil', ['bewitchment:belladonna', 'minecraft:iron_ingot'])
    sigilCraftToPedestal('bewitchment:sentinel_sigil', ['bewitchment:aconite', 'bewitchment:ectoplasm'])
    sigilCraftToPedestal('bewitchment:shadows_sigil', ['bewitchment:elder_bark', 'bewitchment:snake_tongue'])
    sigilCraftToPedestal('bewitchment:slippery_sigil', ['minecraft:slime_ball', 'bewitchment:wood_ash'])
    sigilCraftToPedestal('bewitchment:extending_sigil', ['bewitchment:garlic', 'bewitchment:mandrake_root'])
    sigilCraftToPedestal('bewitchment:smelly_sigil', ['bewitchment:oak_bark', 'minecraft:rotten_flesh'])
    sigilCraftToPedestal('bewitchment:ruin_sigil', ['bewitchment:snake_tongue', 'bewitchment:bottle_of_blood'])

    
    const brooms = ['cypress', 'elder', 'dragons_blood', 'juniper']

    brooms.forEach(type => {
        customPedestalCraft(event, {
            tier: 'advanced', time: 2200, onyx: 16, experience: 2.0,
            pattern: [
                " W ",
                "TRT",
                "QEQ"
            ],
            keys: {
                "Q": { "item": `bewitchment:${type}_sapling` },
                "W": { "item": `bewitchment:${type}_log` },
                "E": { "item": "bewitchment:heaven_extract" },
                "R": { "item": "bewitchment:demon_heart" },
                "T": { "item": "modern_industrialization:star_platinum_plate" },
            },
            result: {
                "item": `bewitchment:${type}_broom`,
                "count": 1
            },
            advancement: "kubejs:bewitchment/collect_saplings"
        });
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 200, amethyst: 16, onyx: 2, experience: 1.0,
        pattern: [
            " W ",
            "TRT",
            "QEQ"
        ],
        keys: {
            "Q": { "item": "bwplus:yew_sapling" },
            "W": { "item": "bwplus:yew_log" },
            "E": { "item": "bewitchment:heaven_extract" },
            "R": { "item": "bewitchment:demon_heart" },
            "T": { "item": "modern_industrialization:star_platinum_plate" },
        },
        result: {
            "item": "bwplus:yew_broom",
            "count": 1
        },
        advancement: "kubejs:bewitchment/collect_saplings"
    });

});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('whisperwoods:entities/hirschgeist')
        .killedByPlayer() 
        .addLoot('kubejs:hirschgeist_heart')
    event
        .addLootTableModifier('whisperwoods:entities/moth')
        .randomChance(0.8)
        .killedByPlayer() 
        .addLoot('kubejs:moth_wings')
        .applyLootingBonus([0, 1]);
    
    // x2 loot when killed athame
    event
        .addLootTableModifier('bwplus:entities/niffler', 'whisperwoods:entities/moth', 'bwplus:entities/phoenix', 'bwplus:entities/unicorn')
        .matchMainHand(Item.of('bewitchment:athame'))
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 4);
            return itemStack
        });
});
