//priority: 0

const apothecary = [
    { type: 'default', material: 'minecraft:cobblestone' },
    { type: 'forest', material: 'botania:metamorphic_forest_cobblestone' },
    { type: 'plains', material: 'botania:metamorphic_plains_cobblestone' },
    { type: 'mountain', material: 'botania:metamorphic_mountain_cobblestone' },
    { type: 'fungal', material: 'botania:metamorphic_fungal_cobblestone' },
    { type: 'swamp', material: 'botania:metamorphic_swamp_cobblestone' },
    { type: 'desert', material: 'botania:metamorphic_desert_cobblestone' },
    { type: 'taiga', material: 'botania:metamorphic_taiga_cobblestone' },
    { type: 'mesa', material: 'botania:metamorphic_mesa_cobblestone' },
    { type: 'mossy', material: 'minecraft:mossy_cobblestone' },
    { type: 'livingrock', material: 'botania:livingrock' },
    { type: 'deepslate', material: 'minecraft:cobbled_deepslate' },
];

ServerEvents.recipes(event => {

    const removeByID = [
        'botania:mana_infusion/manasteel',
        'botania:flugel_eye',
        'botania:laputa_shard',
        'botania:manasteel_helmet',
        'botania:manasteel_chestplate',
        'botania:manasteel_leggings',
        'botania:manasteel_boots',
        'botania:manasteel_pick',
        'botania:manasteel_shovel',
        'botania:manasteel_shears',
        'botania:manasteel_axe',
        'botania:manasteel_hoe',
        'botania:manasteel_sword',
        'botania:elementium_helmet',
        'botania:elementium_chestplate',
        'botania:elementium_leggings',
        'botania:elementium_boots',
        'botania:elementium_pickaxe',
        'botania:elementium_shovel',
        'botania:elementium_axe',
        'botania:elementium_hoe',
        'botania:elementium_sword',
        'botania:terrasteel_helmet',
        'botania:terrasteel_chestplate',
        'botania:terrasteel_leggings',
        'botania:terrasteel_boots',
        'botania:pure_daisy/livingrock',
        'botania:pure_daisy/livingwood',
        'botania:terra_plate/terrasteel_ingot',
        'botania:livingwood_twig',
        'botania:dreamwood_twig',
        'botania:mana_infusion/manasteel_block',
        'botania:mana_infusion/mana_diamond_block',
        'botania:mana_tablet_alt',
        'botania:runic_altar',
        'botania:runic_altar_alt',
        'botania:fabulous_pool',
        'botania:runic_altar/water',
        'botania:runic_altar/fire',
        'botania:runic_altar/earth',
        'botania:runic_altar/air',
        'botania:runic_altar/winter',
        'botania:runic_altar/autumn',
        'botania:runic_altar/summer',
        'botania:runic_altar/spring',
        'botania:runic_altar/mana',
        'botania:runic_altar/lust',
        'botania:runic_altar/gluttony',
        'botania:runic_altar/greed',
        'botania:runic_altar/sloth',
        'botania:runic_altar/wrath',
        'botania:runic_altar/envy',
        'botania:runic_altar/pride',
    ];
    const removeByOutput = [
        'botania:ender_hand',
        'botania:fertilizer',
        'botania:mana_pearl',
        'botania:mana_diamond',
        'botania:spawner_mover',
        'botania:black_hole_talisman',
        'botania:mining_ring',
        'botania:reach_ring',
        'botania:speed_up_belt',
        'botania:super_travel_belt',
        'botania:travel_belt',
        'botania:magnet_ring_greater',
        'botania:magnet_ring',
        'botania:water_ring',
        'botania:knockback_belt',
        'botania:exchange_rod',
        'botania:twig_wand',
        'botania:tornado_rod',
        'botania:fire_rod',
        'botania:smelt_rod',
        'botania:divining_rod',
        'botania:rainbow_rod',
        'botania:dirt_rod',
        'botania:skydirt_rod',
        'botania:terraform_rod',
        'botania:cobble_rod',
        'botania:water_rod',
        'botania:diva_charm',
        'botania:goddess_charm',
        'botania:third_eye',
        'botania:cloud_pendant',
        'botania:super_cloud_pendant',
        'botania:lava_pendant',
        'botania:super_lava_pendant',
        'botania:mana_ring',
        'botania:mana_ring_greater',
        'botania:swap_ring',
        'botania:aura_ring',
        'botania:aura_ring_greater',
        'botania:dodge_ring',
        'botania:pixie_ring',
        'botania:ice_pendant',
        'botania:gravity_rod',
        'botania:missile_rod',
        'botania:terra_pick',
        'botania:terra_axe',
        'botania:flight_tiara',
        'botania:terra_sword',
        'botania:star_sword',
        'botania:thunder_sword',
        'botania:open_bucket',
        'botania:bauble_box',
        'botania:dreamwood_wand',
        'botania:obedience_stick',
        'botania:flower_bag',
        'botania:natura_pylon',
        'botania:gaia_pylon',
        'botania:bellows',
        'botania:spawner_claw',
        'botania:mana_distributor',
        'botania:mana_void',
        'botania:terra_plate',
        'botania:brewery',
        'botania:runic_altar',
        'botania:mana_pylon',
        'botania:mana_tablet',
        'botania:mana_fluxfield',
        'botania:mana_spreader',
        'botania:elven_spreader',
        'botania:gaia_spreader',
        'botania:mana_pool',
        'botania:alfheim_portal',
        'botania:diluted_pool',
        'botania:alchemy_catalyst',
        'botania:conjuration_catalyst',
        'botania:mana_mirror',
    ];

    removeByID.forEach(item => event.remove({ id: item }));
    removeByOutput.forEach(item => event.remove({ output: item }));

    event.recipes.botania.terra_plate('kubejs:catalyst_terrasteel', ['botania:manasteel_ingot','botania:mana_diamond','botania:mana_pearl'], 250000)

    global.dyeColors.forEach(color => {
        event.remove({ id: `botania:petal_${color.name}_double` });
        event.remove({ id: `botania:${color.name}_shiny_flower` });
        event.remove({ id: `botania:${color.name}_floating_flower` });
        event.remove({ id: `spectrum:mod_integration/botania/anvil_crushing/petals/${color.name}_mystical_flower_to_petals` })
        event.remove({ id: `spectrum:mod_integration/botania/anvil_crushing/petals/${color.name}_double_flower_to_petals` })
        event.shapeless(`botania:${color.name}_petal`, [`botania:${color.name}_double_flower`])
        customPedestalCraft(event, {
            tier: 'basic', time: 100, yield_upgrades: true,
            pattern: [
                " R ",
                " C ",
                " T "
            ],
            keys: {
                "C": { "item": "botania:grass_seeds" },
                "T": { "item": "minecraft:dirt" },
                "R": { "item": `botania:${color.name}_shiny_flower` },
            },
            result: {
                "item": `botania:${color.name}_floating_flower`,
                "count": 1
            },
            advancement: "spectrum:collect_shimmerstone"
        });
        event.recipes.spectrum.spirit_instiller({
            "time": 400,
            "experience": 30.0,
            "secret": false,
            "ingredient1": {
                "item": "spectrum:liquid_crystal_bucket"
            },
            "ingredient2": {
                "item": "spectrum:vegetal",
                "count": 8
            },
            "center_ingredient": {
                "item": `kubejs:fossilized_${color.name}_mystical_flower`,
            },
            "result": {
                "item": `botania:${color.name}_mystical_flower`
            },
            "required_advancement": "spectrum:unlocks/blocks/spirit_instiller"
        });
    });

    for (let i = 0; i <= 15; i++) {
        event.remove({ id: `botania:mushroom_${i}` });
    };


    event.recipes.botania.mana_infusion("botania:manasteel_ingot", "modern_industrialization:steel_ingot", 2000)
    event.recipes.botania.mana_infusion("botania:manasteel_ingot", "kubejs:raw_magical_steel", 1000)


    event.recipes.botania.mana_infusion("botania:mana_diamond", "kubejs:aquarium_diamond", 10000)
    event.recipes.botania.mana_infusion("botania:mana_pearl", "kubejs:prometheum_ender_pearl", 6000)

    event.recipes.botania.mana_infusion("modern_industrialization:liquid_mana_bucket", "minecraft:bucket", 10000)

    event.recipes.botania.pure_daisy('botania:livingrock', 'spectrum:blackslag')
    event.recipes.botania.pure_daisy('botania:livingwood_log', '#spectrum:noxcap_stems')

    event.blasting('2x botania:terrasteel_nugget', 'kubejs:pure_terrasteel')


    // Weather runes
    event.recipes.botania.runic_altar('4x botania:rune_water',
        [
            'modern_industrialization:runite_large_plate',
            'spectrum:mermaids_gem',
            'mythicmetals:aquarium_ingot',
            'botania:mana_powder',
            'minecraft:fishing_rod',
            'bewitchment:aqua_cerate',
            'minecraft:sugar_cane',
        ], 5000
    );
    event.recipes.botania.runic_altar('4x botania:rune_fire',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:nether_wart',
            'botania:mana_powder',
            'minecraft:nether_brick',
            'minecraft:gunpowder',
            'botania:manasteel_ingot',
            'bewitchment:fiery_serum',
            'spectrum:stratine_fragments',
            'spectrum:fiery_powder'
        ], 5000
    );
    event.recipes.botania.runic_altar('4x botania:rune_earth',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:red_mushroom',
            'minecraft:coal_block',
            'minecraft:stone',
            'botania:mana_powder',
            'botania:manasteel_ingot',
            'spectrum:vegetal',
            'bewitchment:earth_ichor',
            'spectrum:clover',
        ], 5000
    );
    event.recipes.botania.runic_altar('4x botania:rune_air',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:string',
            'minecraft:feather',
            'minecraft:white_wool',
            'botania:manasteel_ingot',
            'bewitchment:heaven_extract',
            'botania:mana_powder'
        ], 5000
    );

    // Season runes
    event.recipes.botania.runic_altar('4x botania:rune_winter',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:snow_block',
            'mythicmetals:kyber_ingot',
            'mythicmetals:carmot_ingot',
            'spectrum:blizzard_powder',
            'botania:rune_earth',
            'botania:rune_water',
            'farmersdelight:milk_bottle',
            'minecraft:cookie',
            'minecraft:white_wool',
            'whisperwoods:ghost_light_gold',
        ], 20000
    );
    event.recipes.botania.runic_altar('4x botania:rune_autumn',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:honeycomb',
            'minecraft:jungle_leaves',
            'spectrum:resonant_lily',
            'botania:rune_air',
            'botania:rune_fire',
            'minecraft:spider_eye',
            'spectrum:paltaeria_fragments',
            'whisperwoods:ghost_light_fiery_orange',
        ], 20000
    );
    event.recipes.botania.runic_altar('4x botania:rune_summer',
        [
            'modern_industrialization:runite_large_plate',
            'spectrum:bone_ash',
            'spectrum:doombloom_seed',
            'minecraft:melon_slice',
            'botania:rune_air',
            'botania:rune_earth',
            'minecraft:slime_ball',
            'minecraft:sand',
            'whisperwoods:ghost_light_electric_blue',
        ], 20000
    );
    event.recipes.botania.runic_altar('4x botania:rune_spring',
        [
            'modern_industrialization:runite_large_plate',
            'minecraft:sugar',
            'spectrum:quitoxic_reeds',
            'spectrum:four_leaf_clover',
            'botania:rune_fire',
            'botania:rune_water',
            'mythicmetals:aquarium_ingot',
            'minecraft:wheat',
            'whisperwoods:ghost_light_magic_purple'
        ], 20000
    );
    // Mana rune
    event.recipes.botania.runic_altar('4x botania:rune_mana',
        [
            'mythicmetals:carmot_ingot',
            'mythicmetals:kyber_ingot',
            'mythicmetals:hallowed_ingot',
            'spectrum:moonstone_shard',
            'spectrum:onyx_shard',
            'spectrum:citrine_shard',
            'spectrum:topaz_shard',
            'botania:mana_pearl',
            'botania:manasteel_ingot',
            'modern_industrialization:runite_large_plate',
            'mythicmetals:stormyx_ingot',
            'spectrum:mermaids_gem'
        ], 30000
    );
    // Sins runes
    event.recipes.botania.runic_altar('4x botania:rune_lust',
        [
            'minecraft:rabbit_foot',
            'mythicmetals:starrite',
            'mythicmetals:kyber_ingot',
            'mythicmetals:carmot_ingot',
            'spectrum:purple_pigment',
            'spectrum:magenta_pigment',
            'bewitchment:snake_tongue',
            'botania:rune_air',
            'botania:rune_summer',
            'botania:mana_diamond',
            'modern_industrialization:runite_large_plate'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_gluttony',
        [
            'botania:mana_diamond',
            'botania:rune_winter',
            'botania:rune_fire',
            'minecraft:cooked_beef',
            'bewitchment:witchberry',
            'minecraft:golden_apple',
            'modern_industrialization:runite_large_plate'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_greed',
        [
            'modern_industrialization:runite_large_plate',
            'spectrum:midnight_chip',
            'mythicmetals:midas_gold_block',
            'minecraft:ender_eye',
            'botania:rune_spring',
            'botania:rune_water',
            'botania:mana_diamond'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_sloth',
        [
            'modern_industrialization:runite_large_plate',
            'spectrum:stratine_fragments',
            'spectrum:paltaeria_fragments',
            'bewitchment:aconite',
            'spectrum:crawfish',
            'botania:rune_autumn',
            'botania:rune_air',
            'botania:mana_diamond'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_wrath',
        [
            'botania:mana_diamond',
            'botania:rune_winter',
            'botania:rune_earth',
            'spectrum:mermaids_gem',
            'spectrum:doombloom_seed',
            'bewitchment:grim_elixir',
            'spectrum:midnight_chip',
            'modern_industrialization:runite_large_plate'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_envy',
        [
            'modern_industrialization:runite_large_plate',
            'spectrum:four_leaf_clover',
            'spectrum:bismuth_flake',
            'spectrum:neolith',
            'mythicmetals:midas_gold_ingot',
            'botania:rune_winter',
            'botania:rune_water',
            'botania:mana_diamond'
        ], 40000
    );
    event.recipes.botania.runic_altar('4x botania:rune_pride',
        [
            'botania:rune_fire',
            'botania:rune_summer',
            'mythicmetals:durasteel_ingot',
            'mythicmetals:unobtainium',
            'mythicmetals:kyber_ingot',
            'mythicmetals:carmot_ingot',
            'bewitchment:cleansing_balm',
            'mythicmetals:stormyx_ingot',
            'spectrum:refined_malachite',
            'modern_industrialization:runite_large_plate',
            'botania:mana_diamond'
        ], 40000
    );

    apothecary.forEach(item => {
        event.remove({ output: `botania:apothecary_${item.type}` });
        customPedestalCraft(event, {
            tier: 'basic', time: 200, topaz: 2, amethyst: 2, citrine: 2, experience: 0.5, yield_upgrades: true,
            pattern: [
                "BAB",
                "CBC",
                "BBB"
            ],
            keys: {
                "A": { "tag": "botania:petals" },
                "B": { "item": item.material },
                "C": { "item": "modern_industrialization:azurite_nugget" }
            },
            result: {
                "item": `botania:apothecary_${item.type}`,
                "count": 1
            },
            advancement: "spectrum:unlocks/resources/refined_azurite"
        });
    });

    // pedestal recipes
    customPedestalCraft(event, {
        tier: "advanced", time: 6000, topaz: 8, amethyst: 16, onyx: 1, experience: 2.0, yield_upgrades: true,
        pattern: [
            "RTR",
            "WEW",
            " Q "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:terrasteel_large_plate" },
            "W": { "item": "modern_industrialization:terrasteel_plate" },
            "E": { "item": "botania:elementium_helmet" },
            "R": { "item": "botania:livingwood_twig" },
            "T": { "item": "botania:rune_spring" },
        },
        result: {
            "item": "botania:terrasteel_helmet",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 6000, topaz: 8, amethyst: 16, onyx: 1, experience: 2.0, yield_upgrades: true,
        pattern: [
            "RTR",
            "WEW",
            " W "
        ],
        keys: {
            "W": { "item": "modern_industrialization:terrasteel_large_plate" },
            "E": { "item": "botania:elementium_chestplate" },
            "R": { "item": "botania:livingwood_twig" },
            "T": { "item": "botania:rune_summer" },
        },
        result: {
            "item": "botania:terrasteel_chestplate",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 6000, topaz: 8, amethyst: 16, onyx: 1, experience: 2.0, yield_upgrades: true,
        pattern: [
            "RTR",
            "QEQ",
            " W "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:terrasteel_large_plate" },
            "W": { "item": "modern_industrialization:terrasteel_plate" },
            "E": { "item": "botania:elementium_leggings" },
            "R": { "item": "botania:livingwood_twig" },
            "T": { "item": "botania:rune_autumn" },
        },
        result: {
            "item": "botania:terrasteel_leggings",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 6000, topaz: 8, amethyst: 16, onyx: 1, experience: 2.0, yield_upgrades: true,
        pattern: [
            "RTR",
            "WEW",
            " W "
        ],
        keys: {
            "W": { "item": "modern_industrialization:terrasteel_plate" },
            "E": { "item": "botania:elementium_boots" },
            "R": { "item": "botania:livingwood_twig" },
            "T": { "item": "botania:rune_winter" },
        },
        result: {
            "item": "botania:terrasteel_boots",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 72000, topaz: 16, amethyst: 32, citrine: 64, onyx: 2, moonstone: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            "TRT",
            "QEQ",
            " W "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:terrasteel_large_plate" },
            "W": { "item": "spectrum:glass_crest_workstaff" },
            "E": { "item": "kubejs:star_core" },
            "R": { "item": "botania:mana_mirror" },
            "T": { "item": "kubejs:dragonbone_alloy" },
        },
        result: {
            "item": "botania:terra_pick",
            "nbt": {mana:9999},
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 12000, topaz: 16, amethyst: 8, onyx: 2, experience: 4.0, yield_upgrades: true,
        pattern: [
            "WQ ",
            "WE ",
            " E "
        ],
        keys: {
            "Q": { "item": "botania:mana_mirror" },
            "W": { "item": "modern_industrialization:terrasteel_large_plate" },
            "E": { "item": "botania:livingwood_twig" },
        },
        result: {
            "item": "botania:terra_axe",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 12000, topaz: 4, amethyst: 16, onyx: 8, experience: 4.0, yield_upgrades: true,
        pattern: [
            " Q ",
            " Q ",
            " W "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:terrasteel_large_plate" },
            "W": { "item": "botania:livingwood_twig" },
        },
        result: {
            "item": "botania:terra_sword",
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 12000, amethyst: 16, citrine: 4, experience: 4.0, yield_upgrades: true,
        pattern: [
            "  Q",
            "ER ",
            "WE "
        ],
        keys: {
            "Q": { "item": "botania:elementium_ingot" },
            "W": { "item": "botania:terra_sword" },
            "E": { "item": "botania:ender_air_bottle" },
            "R": { "item": "botania:dragonstone" },
        },
        result: {
            "item": "botania:star_sword",
            "count": 1
        },
        advancement: "botania:main/terrasteel_weapon_craft",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 12000, topaz: 16, amethyst: 16, onyx: 4, experience: 4.0, yield_upgrades: true,
        pattern: [
            "  W",
            "RE ",
            "QR "
        ],
        keys: {
            "Q": { "item": "botania:terra_sword" },
            "W": { "item": "botania:elementium_ingot" },
            "E": { "item": "botania:mana_diamond" },
            "R": { "item": "botania:ender_air_bottle" },
        },
        result: {
            "item": "botania:thunder_sword",
            "count": 1
        },
        advancement: "botania:main/terrasteel_weapon_craft",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 1200, topaz: 4, amethyst: 8, experience: 2.0, yield_upgrades: true,
        pattern: [
            "E E",
            "QWQ",
            " Q "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:celestium_plate" },
            "W": { "item": "spectrum:resonance_shard" },
            "E": { "item": "modern_industrialization:elementium_plate" },
        },
        result: {
            "item": "botania:open_bucket",
            "count": 1
        },
        advancement: "botania:main/elf_portal_open",
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 1200, topaz: 8, amethyst: 2, experience: 1.0, yield_upgrades: true,
        pattern: [
            " E ",
            "EWQ",
            " E "
        ],
        keys: {
            "Q": { "item": "mythicmetals:midas_gold_ingot" },
            "W": { "item": "minecraft:chest" },
            "E": { "item": "modern_industrialization:manasteel_plate" },
        },
        result: {
            "item": "botania:bauble_box",
            "count": 1
        },
        advancement: "botania:main/mana_pool_pickup",
    });
    // fusion shrine recipes
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:feather", "count": 8 },
            { "item": "botania:livingwood_twig", "count": 4 },
            { "item": "botania:rune_air", "count": 1 },
        ],
        result: {
            "item": "botania:tornado_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:blaze_powder", "count": 1 },
            { "item": "botania:rune_fire", "count": 1 },
            { "item": "botania:livingwood_twig", "count": 4 },
        ],
        result: {
            "item": "botania:fire_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:livingwood_twig", "count": 4 },
            { "item": "minecraft:blaze_rod", "count": 4 },
            { "item": "botania:rune_fire", "count": 1 },
        ],
        result: {
            "item": "botania:smelt_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:livingwood_twig", "count": 16 },
            { "item": "mythicmetals:hallowed_ingot", "count": 4 },
            { "item": "botania:mana_diamond", "count": 1 },
        ],
        result: {
            "item": "botania:divining_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:dragonstone", "count": 1 },
            { "item": "botania:pixie_dust", "count": 2 },
            { "item": "botania:elementium_ingot", "count": 4 },
            { "item": "mythicmetals:celestium_ingot", "count": 2 },
        ],
        result: {
            "item": "botania:rainbow_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_earth", "count": 1 },
            { "item": "botania:livingwood_twig", "count": 4 },
            { "item": "minecraft:dirt", "count": 8 },
        ],
        result: {
            "item": "botania:dirt_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_air", "count": 1 },
            { "item": "botania:pixie_dust", "count": 1 },
            { "item": "botania:dirt_rod", "count": 1 },
        ],
        result: {
            "item": "botania:skydirt_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:cobblestone", "count": 8 },
            { "item": "botania:livingwood_twig", "count": 4 },
            { "item": "botania:rune_water", "count": 1 },
            { "item": "botania:rune_fire", "count": 1 },
        ],
        result: {
            "item": "botania:cobble_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_water", "count": 1 },
            { "item": "botania:livingwood_twig", "count": 4 },
            { "item": "minecraft:water_bucket", "count": 1 },
        ],
        result: {
            "item": "botania:water_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:life_essence", "count": 2 },
            { "item": "mythicmetals:midas_gold_ingot", "count": 3 },
            { "item": "botania:rune_pride", "count": 1 },
            { "item": "botania:tiny_planet", "count": 1 },
        ],
        result: {
            "item": "botania:diva_charm"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "mythicmetals:celestium_ingot", "count": 2 },
            { "item": "botania:rune_water", "count": 2 },
            { "item": "botania:rune_spring", "count": 2 },
            { "item": "botania:pink_petal", "count": 2 },
        ],
        result: {
            "item": "botania:goddess_charm"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:ender_eye", "count": 1 },
            { "item": "minecraft:golden_carrot", "count": 4 },
            { "item": "botania:rune_earth", "count": 1 },
            { "item": "botania:mana_diamond", "count": 1 },
            { "item": "mythicmetals:runite_ingot", "count": 2 },
            { "item": "minecraft:quartz_block", "count": 4 },
        ],
        result: {
            "item": "botania:third_eye"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:feather", "count": 4 },
            { "item": "botania:mana_string", "count": 4 },
            { "item": "botania:rune_air", "count": 1 },
            { "item": "botania:rune_autumn", "count": 1 },
        ],
        result: {
            "item": "botania:cloud_pendant"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_air", "count": 2 },
            { "item": "botania:life_essence", "count": 1 },
            { "item": "botania:cloud_pendant", "count": 1 },
            { "item": "mythicmetals:celestium_ingot", "count": 1 },
            { "item": "artifacts:cloud_in_a_bottle", "count": 1 },
            { "item": "minecraft:ghast_tear", "count": 4 },
            { "item": "minecraft:white_wool", "count": 2 },
        ],
        result: {
            "item": "botania:super_cloud_pendant"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "artifacts:obsidian_skull", "count": 1 },
            { "item": "spectrum:fiery_powder", "count": 4 },
            { "item": "botania:mana_string", "count": 4 },
            { "item": "botania:rune_summer", "count": 1 },
            { "item": "botania:rune_fire", "count": 1 },
        ],
        result: { "item": "botania:lava_pendant" },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "mythicmetals:banglum_ingot", "count": 3 },
            { "item": "botania:lava_pendant", "count": 1 },
            { "item": "botania:rune_fire", "count": 1 },
            { "item": "spectrum:fiery_powder", "count": 4 },
            { "item": "botania:life_essence", "count": 1 },
            { "item": "mythicmetals:adamantite_ingot", "count": 3 },
            { "item": "minecraft:blaze_rod", "count": 5 },
        ],
        result: { "item": "botania:super_lava_pendant" },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:grass_seeds", "count": 1 },
            { "item": "botania:rune_winter", "count": 1 },
            { "item": "botania:rune_summer", "count": 1 },
            { "item": "botania:rune_autumn", "count": 1 },
            { "item": "botania:rune_spring", "count": 1 },
            { "item": "botania:terrasteel_ingot", "count": 1 },
        ],
        result: {
            "item": "botania:terraform_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "modern_industrialization:runite_ring", "count": 1 },
            { "item": "botania:mana_tablet", "count": 1 },
        ],
        result: {
            "item": "botania:mana_ring"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:mana_ring", "count": 1 },
            { "item": "botania:terrasteel_ingot", "count": 1 },
            { "item": "modern_industrialization:terrasteel_ring", "count": 1 },
        ],
        result: {
            "item": "botania:mana_ring_greater"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:dragonstone", "count": 2 },
            { "item": "botania:dreamwood_twig", "count": 6 },
            { "item": "minecraft:hay_block", "count": 1 },
        ],
        result: {
            "item": "botania:gravity_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:dreamwood_twig", "count": 6 },
            { "item": "botania:life_essence", "count": 2 },
            { "item": "botania:dragonstone", "count": 5 },
        ],
        result: {
            "item": "botania:missile_rod"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_mana", "count": 1 },
            { "item": "modern_industrialization:runite_ring", "count": 1 },
        ],
        result: {
            "item": "botania:aura_ring"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "modern_industrialization:terrasteel_ring", "count": 1 },
            { "item": "botania:terrasteel_ingot", "count": 1 },
            { "item": "botania:aura_ring", "count": 1 },
        ],
        result: {
            "item": "botania:aura_ring_greater"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "minecraft:clay", "count": 1 },
            { "item": "modern_industrialization:runite_ring", "count": 1 },
        ],
        result: {
            "item": "botania:swap_ring"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_air", "count": 1 },
            { "item": "modern_industrialization:runite_ring", "count": 1 },
            { "item": "minecraft:emerald_block", "count": 1 },
        ],
        result: {
            "item": "botania:dodge_ring"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:elementium_ingot", "count": 4 },
            { "item": "modern_industrialization:elementium_ring", "count": 1 },
            { "item": "botania:pixie_dust", "count": 1 },
        ],
        result: {
            "item": "botania:pixie_ring"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:mana_string", "count": 4 },
            { "item": "modern_industrialization:runite_ring", "count": 1 },
            { "item": "botania:rune_winter", "count": 1 },
            { "item": "botania:rune_water", "count": 1 },
        ],
        result: {
            "item": "botania:ice_pendant"
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customeFusionShrineCraft(event, {
        time: 14400, experience: 16.0,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "kubejs:kindling_heart", "count": 1 },
            { "item": "kubejs:dragon_heart", "count": 1 },
            { "item": "kubejs:midnight_feather", "count": 16 },
            { "item": "naturalist:butterfly", "count": 1 },
            { "item": "kubejs:moth_wings", "count": 16 },
        ],
        result: {
            "item": "kubejs:essence_of_flight"
        },
        advancement: "spectrum:lategame/remember_kindling"
    });
    customeFusionShrineCraft(event, {
        time: 72000, experience: 16.0, yield_upgrades: true,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "kubejs:star_core", "count": 8 },
            { "item": "botania:gaia_ingot", "count": 2 },
            { "item": "botania:dragonstone", "count": 16 },
            { "item": "modern_industrialization:durasteel_plate", "count": 4 },
            { "item": "kubejs:essence_of_flight", "count": 1 },
        ],
        result: {
            "item": "botania:flight_tiara",
            "nbt": {variant:0},
            "count": 1
        },
        advancement: "botania:main/terrasteel_pickup"
    });

    customPedestalCraft(event, {
        time: 800, amethyst: 6, citrine: 4, experience: 0.5,
        pattern: [
            " WQ",
            " QW",
            "Q  "
        ],
        keys: {
            "Q": { "item": "botania:livingwood_twig" },
            "W": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:twig_wand",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier:'advanced' ,time: 800, topaz: 4, onyx: 2, experience: 0.5,
        pattern: [
            " WQ",
            " QW",
            "Q  "
        ],
        keys: {
            "Q": { "item": "botania:dreamwood_twig" },
            "W": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:dreamwood_wand",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 2, experience: 0.5,
        pattern: [
            "  W",
            " Q ",
            "Q  "
        ],
        keys: {
            "Q": { "item": "botania:livingwood_twig" },
            "W": { "item": "botania:manasteel_ingot" },
        },
        result: {
            "item": "botania:obedience_stick",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 4, experience: 0.5,
        pattern: [
            "QWQ",
            "Q Q",
            " Q "
        ],
        keys: {
            "Q": { "tag": "minecraft:wool" },
            "W": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:flower_bag",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced',time: 800, topaz: 4, amethyst:2, onyx: 6, experience: 0.5,
        pattern: [
            " E ",
            "WQW",
            " E ",
        ],
        keys: {
            "Q": { "item": "minecraft:ender_eye" },
            "W": { "item": "modern_industrialization:durasteel_plate" },
            "E": { "item": "botania:terrasteel_ingot" },
        },
        result: {
            "item": "botania:natura_pylon",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced',time: 800, topaz: 8, amethyst: 16, onyx: 2, experience: 0.5, yield_upgrades: true,
        pattern: [
            "QWR",
            "TET",
            "RWQ",
        ],
        keys: {
            "Q": { "item": "botania:elementium_ingot" },
            "W": { "item": "botania:dragonstone" },
            "E": { "item": "botania:mana_pylon" },
            "R": { "item": "botania:pixie_dust" },
            "T": { "item": "modern_industrialization:celestium_plate" },
        },
        result: {
            "item": "botania:gaia_pylon",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, citrine: 4, experience: 0.5,
        pattern: [
            "QQQ",
            "WE ",
            "QQQ",
        ],
        keys: {
            "Q": { "item": "botania:livingwood_slab" },
            "W": { "item": "botania:rune_air" },
            "E": { "item": "minecraft:leather" },
        },
        result: {
            "item": "botania:bellows",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced',time: 800, topaz: 8, onyx: 4, experience: 0.5, yield_upgrades: true,
        pattern: [
            "TRT",
            "QEQ",
            "QWQ",
        ],
        keys: {
            "Q": { "item": "minecraft:prismarine_bricks" },
            "W": { "item": "botania:ender_air_bottle" },
            "E": { "item": "botania:manasteel_block" },
            "R": { "item": "botania:elementium_ingot" },
            "T": { "item": "minecraft:blaze_rod" },
        },
        result: {
            "item": "botania:spawner_claw",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 2, citrine: 2, experience: 0.5,
        pattern: [
            "WWW",
            "Q Q",
            "WWW",
        ],
        keys: {
            "Q": { "item": "botania:manasteel_ingot" },
            "W": { "item": "botania:livingrock" }
        },
        result: {
            "item": "botania:mana_distributor",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, citrine: 2, onyx: 1, experience: 0.5,
        pattern: [
            "WWW",
            "Q Q",
            "WWW",
        ],
        keys: {
            "Q": { "item": "minecraft:obsidian" },
            "W": { "item": "botania:livingrock" }
        },
        result: {
            "item": "botania:mana_void",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 4, onyx: 8, experience: 0.5, yield_upgrades: true,
        pattern: [
            "YYY",
            "WUQ",
            "ETR",
        ],
        keys: {
            "Q": { "item": "botania:rune_fire" },
            "W": { "item": "botania:rune_water" },
            "E": { "item": "botania:rune_earth" },
            "R": { "item": "botania:rune_air" },
            "T": { "item": "botania:rune_mana" },
            "Y": { "item": "minecraft:lapis_block" },
            "U": { "item": "botania:manasteel_block" }
        },
        result: {
            "item": "botania:terra_plate",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 4, onyx: 4, amethyst: 8, citrine: 2, experience: 0.5, yield_upgrades: true,
        pattern: [
            "WRW",
            "WEW",
            "WQW",
        ],
        keys: {
            "Q": { "item": "botania:rune_mana" },
            "W": { "item": "botania:livingrock" },
            "E": { "item": "botania:manasteel_block" },
            "R": { "item": "minecraft:brewing_stand" }
        },
        result: {
            "item": "botania:brewery",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 4, onyx: 4, citrine: 4, experience: 0.5, yield_upgrades: true,
        pattern: [
            "RWR",
            "WEW",
            "QQQ",
        ],
        keys: {
            "Q": { "item": "botania:livingrock" },
            "W": { "item": "modern_industrialization:runite_large_plate" },
            "E": { "item": "botania:mana_diamond_block" },
            "R": { "item": "mythicmetals:hallowed_ingot" }
        },
        result: {
            "item": "botania:runic_altar",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 8, onyx: 2, citrine: 8, experience: 0.5,
        pattern: [
            " W ",
            "QEQ",
            " W ",
        ],
        keys: {
            "Q": { "item": "modern_industrialization:hallowed_plate" },
            "W": { "item": "modern_industrialization:midas_gold_plate" },
            "E": { "item": "botania:mana_diamond" },
        },
        result: {
            "item": "botania:mana_pylon",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 4, amethyst: 4, citrine: 4, experience: 0.5,
        pattern: [
            "QQQ",
            "QEQ",
            "WWW",
        ],
        keys: {
            "Q": { "item": "botania:livingrock" },
            "W": { "item": "modern_industrialization:calcite_plate" },
            "E": { "item": "botania:mana_pearl" },
        },
        result: {
            "item": "botania:mana_tablet",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 16, amethyst: 16, citrine: 16, onyx: 8, experience: 0.5, yield_upgrades: true,
        pattern: [
            "QWQ",
            "WEW",
            "QWQ",
        ],
        keys: {
            "Q": { "item": "botania:livingrock" },
            "W": { "item": "spectrum:refined_bloodstone" },
            "E": { "item": "modern_industrialization:hv_storage_unit" },
        },
        result: {
            "item": "botania:mana_fluxfield",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 4, amethyst: 4, citrine: 4, experience: 0.5,
        pattern: [
            "WEW",
            "QR ",
            "WEW",
        ],
        keys: {
            "Q": { "item": "mythicmetals:midas_gold_ingot" },
            "W": { "item": "botania:livingwood_log" },
            "E": { "item": "mythicmetals:hallowed_ingot" },
            "R": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:mana_spreader",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 4, amethyst: 4, onyx: 4, experience: 0.5,
        pattern: [
            "WEW",
            "QRT",
            "WEW",
        ],
        keys: {
            "Q": { "item": "mythicmetals:durasteel_ingot" },
            "W": { "item": "botania:dreamwood_log" },
            "E": { "item": "mythicmetals:celestium_ingot" },
            "R": { "tag": "botania:petals" },
            "T": { "item": "botania:elementium_ingot"}
        },
        result: {
            "item": "botania:elven_spreader",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 800, topaz: 4, amethyst: 4, citrine: 4, experience: 0.5,
        pattern: [
            "W W",
            "QEQ",
            "QQQ",
        ],
        keys: {
            "Q": { "item": "botania:livingrock" },
            "W": { "item": "kubejs:raw_magical_steel" },
            "E": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:mana_pool",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        time: 400, topaz: 2, amethyst: 2, citrine: 2, experience: 0.5,
        pattern: [
            "W W",
            "QEQ",
            "QQQ",
        ],
        keys: {
            "Q": { "item": "botania:livingrock_slab" },
            "W": { "item": "kubejs:raw_magical_steel" },
            "E": { "tag": "botania:petals" },
        },
        result: {
            "item": "botania:diluted_pool",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'complex', time: 2400, topaz: 6, amethyst: 6, citrine: 6, onyx: 8, moonstone: 8, experience: 0.5,
        pattern: [
            "QQQ",
            "REW",
            "QQQ",
        ],
        keys: {
            "Q": { "item": "botania:bifrost_perm" },
            "W": { "item": "botania:gaia_ingot" },
            "E": { "item": "botania:elven_spreader" },
            "R": { "item": "mythicmetals:metallurgium_ingot" },
        },
        result: {
            "item": "botania:gaia_spreader",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'complex', time: 2400, topaz: 32, amethyst: 32, citrine: 32, onyx: 32, moonstone: 32, experience: 0.5, yield_upgrades: true,
        pattern: [
            "QWQ",
            "RER",
            "QWQ",
        ],
        keys: {
            "Q": { "item": "botania:livingwood_log" },
            "W": { "item": "modern_industrialization:metallurgium_plate" },
            "E": { "item": "spectrum:moonstone_core" },
            "R": { "item": "botania:terrasteel_ingot" },
        },
        result: {
            "item": "botania:alfheim_portal",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 4, citrine: 8, onyx: 2, experience: 0.5,
        pattern: [
            "QWQ",
            "RER",
            "QWQ",
        ],
        keys: {
            "Q": { "item": "botania:livingrock" },
            "W": { "item": "mythicmetals:midas_gold_ingot" },
            "E": { "item": "botania:mana_pearl" },
            "R": { "item": "minecraft:brewing_stand" },
        },
        result: {
            "item": "botania:alchemy_catalyst",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, amethyst: 16, citrine: 8, onyx: 4, experience: 0.5,
        pattern: [
            "RER",
            "WQW",
            "RWR",
        ],
        keys: {
            "Q": { "item": "botania:alchemy_catalyst" },
            "W": { "item": "botania:elementium_ingot" },
            "E": { "item": "botania:pixie_dust" },
            "R": { "item": "botania:livingrock" },
        },
        result: {
            "item": "botania:conjuration_catalyst",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, amethyst: 4, onyx: 2, topaz: 8, experience: 0.5,
        pattern: [
            " QW",
            " RE",
            "T  ",
        ],
        keys: {
            "Q": { "item": "botania:mana_pearl" },
            "W": { "item": "modern_industrialization:calcite_plate" },
            "E": { "item": "botania:terrasteel_ingot" },
            "R": { "item": "botania:livingwood_twig" },
            "T": { "item": "botania:mana_tablet" },
        },
        result: {
            "item": "botania:mana_mirror",
            "count": 1
        },
        advancement: "spectrum:midgame/build_spirit_instiller_structure"
    });


    // Crafting Table Shaped
    event.shaped('botania:manasteel_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:manasteel_plate',
    });

    event.shaped('botania:manasteel_chestplate', [
        'P P',
        'PLP',
        'PLP'
    ], {
        P: 'modern_industrialization:manasteel_plate',
        L: 'modern_industrialization:manasteel_large_plate'
    });

    event.shaped('botania:manasteel_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'modern_industrialization:manasteel_plate',
    });

    event.shaped('botania:manasteel_boots', [
        'P P',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:manasteel_plate',
    });

    event.shaped('botania:manasteel_pick', [
        'PPI',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:manasteel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig'
    });

    event.shaped('botania:manasteel_shovel', [
        ' P ',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:manasteel_plate',
        T: 'botania:livingwood_twig'
    });

    event.shaped('botania:manasteel_shears', [
        'P  ',
        ' P ',
        '   '
    ], {
        P: 'modern_industrialization:manasteel_plate',
    });

    event.shaped('botania:manasteel_axe', [
        'PI ',
        'PT ',
        ' T '
    ], {
        P: 'modern_industrialization:manasteel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig'
    });

    event.shaped('botania:manasteel_hoe', [
        'PI ',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:manasteel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig'
    });

    event.shaped('botania:manasteel_sword', [
        ' P ',
        ' P ',
        ' T '
    ], {
        P: 'modern_industrialization:manasteel_plate',
        T: 'botania:livingwood_twig'
    });

    event.shaped('botania:elementium_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:elementium_plate',
    });

    event.shaped('botania:elementium_chestplate', [
        'P P',
        'PLP',
        'PLP'
    ], {
        P: 'modern_industrialization:elementium_plate',
        L: 'modern_industrialization:elementium_large_plate'
    });

    event.shaped('botania:elementium_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'modern_industrialization:elementium_plate',
    });

    event.shaped('botania:elementium_boots', [
        'P P',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:elementium_plate',
    });

    event.shaped('botania:elementium_pickaxe', [
        'PPI',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig'
    });

    event.shaped('botania:elementium_shovel', [
        ' P ',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:elementium_plate',
        T: 'botania:dreamwood_twig'
    });

    event.shaped('botania:elementium_axe', [
        'PI ',
        'PT ',
        ' T '
    ], {
        P: 'modern_industrialization:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig'
    });

    event.shaped('botania:elementium_hoe', [
        'PI ',
        ' T ',
        ' T '
    ], {
        P: 'modern_industrialization:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig'
    });

    event.shaped('botania:elementium_sword', [
        ' P ',
        ' P ',
        ' T '
    ], {
        P: 'modern_industrialization:elementium_plate',
        T: 'botania:dreamwood_twig'
    });

    // Cutting Machine
    event.recipes.modern_industrialization.cutting_machine(8, 100) //Eu, ticks
        .itemIn('#botania:dreamwood_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('4x botania:dreamwood_twig');

    event.recipes.modern_industrialization.cutting_machine(8, 100) //Eu, ticks
        .itemIn('#botania:livingwood_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('4x botania:livingwood_twig');

    // Centrifuge
    event.recipes.modern_industrialization.centrifuge(16, 300) //Eu, ticks
        .itemIn('modern_industrialization:ancient_fossil_block')
        .fluidIn('modern_industrialization:acrylic_acid', 200)
        .itemOut('kubejs:fossilized_black_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_blue_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_brown_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_gray_mystical_flower', 0.08);

    event.recipes.modern_industrialization.centrifuge(16, 300) //Eu, ticks
        .itemIn('modern_industrialization:ancient_fossil_block')
        .fluidIn('modern_industrialization:hydrochloric_acid', 200)
        .itemOut('kubejs:fossilized_cyan_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_green_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_light_blue_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_light_gray_mystical_flower', 0.08);

    event.recipes.modern_industrialization.centrifuge(16, 300) //Eu, ticks
        .itemIn('modern_industrialization:ancient_fossil_block')
        .fluidIn('modern_industrialization:sulfuric_acid', 200)
        .itemOut('kubejs:fossilized_lime_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_magenta_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_pink_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_orange_mystical_flower', 0.08);

    event.recipes.modern_industrialization.centrifuge(16, 300) //Eu, ticks
        .itemIn('modern_industrialization:ancient_fossil_block')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:fossilized_purple_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_red_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_white_mystical_flower', 0.08)
        .itemOut('kubejs:fossilized_yellow_mystical_flower', 0.08);

    event.recipes.modern_industrialization.centrifuge(12, 200) //Eu, ticks
        .itemIn('botania:white_mystical_flower')
        .itemOut('modern_industrialization:iridium_tiny_dust', 0.01)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:orange_mystical_flower')
        .itemOut('modern_industrialization:desh_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:magenta_mystical_flower')
        .itemOut('modern_industrialization:titanium_tiny_dust', 0.1)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:light_blue_mystical_flower')
        .itemOut('modern_industrialization:diamond_tiny_dust', 0.15)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:yellow_mystical_flower')
        .itemOut('modern_industrialization:gold_tiny_dust', 0.20)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:lime_mystical_flower')
        .itemOut('modern_industrialization:uranium_tiny_dust', 0.1)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:pink_mystical_flower')
        .itemOut('modern_industrialization:chromium_tiny_dust', 0.1)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:gray_mystical_flower')
        .itemOut('modern_industrialization:carbon_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:light_gray_mystical_flower')
        .itemOut('modern_industrialization:iron_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:cyan_mystical_flower')
        .itemOut('modern_industrialization:aluminum_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:purple_mystical_flower')
        .itemOut('modern_industrialization:mozanite_tiny_dust', 0.05)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:blue_mystical_flower')
        .itemOut('modern_industrialization:lapis_tiny_dust')
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:brown_mystical_flower')
        .itemOut('modern_industrialization:bauxite_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:green_mystical_flower')
        .itemOut('modern_industrialization:beryllium_tiny_dust', 0.1)
        .fluidOut('modern_industrialization:plant_oil', 500);

    event.recipes.modern_industrialization.centrifuge(8, 200) //Eu, ticks
        .itemIn('botania:black_mystical_flower')
        .itemOut('modern_industrialization:coal_tiny_dust', 0.2)
        .fluidOut('modern_industrialization:plant_oil', 500);
});
