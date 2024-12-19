//priority: 0

ServerEvents.recipes(event => {

    const removeByOutput = [
        'kibe:trash_can',
        'kibe:pocket_trash_can',
        'kibe:wither_proof_block',
        'kibe:wither_proof_sand',
        'kibe:obsidian_sand',
        'kibe:wither_builder',
        'kibe:magnet',
        'kibe:cursed_seeds',
        'kibe:diamond_ring',
        'kibe:magma_ring',
        'kibe:light_ring',
        'kibe:water_ring',
        'kibe:angel_ring',
        'kibe:golden_lasso',
        'kibe:cursed_lasso',
        'kibe:diamond_lasso',
        'kibe:void_bucket',
        'kibe:entangled_tank',
        'kibe:entangled_chest',
        'kibe:entangled_bag',
        'kibe:entangled_bucket',
        'kibe:cooler',
        'kibe:slime_sling',
        'kibe:slime_boots',
        'kibe:white_elevator',
        'kibe:big_torch',
        'kibe:tank',
        'kibe:vacuum_hopper',
        'kibe:drawbridge',
        'kibe:placer', 
        'kibe:breaker'
    ];
    removeByOutput.forEach(item => event.remove({ output: item }));

    // gliders
    global.dyeColors.forEach(color => {
        event.remove({output: `kibe:${color.name}_glider`})
        event.shaped(`kibe:${color.name}_glider`, [
            ' E ',
            'ADB',
            'C C'
        ], {
            A: 'kibe:glider_left_wing',
            B: 'kibe:glider_right_wing',
            C: 'modern_industrialization:aluminum_rod',
            D: 'modern_industrialization:aluminum_ring',
            E: `minecraft:${color.name}_dye`
        });
    });

    event.shaped(`kibe:tank`, [
        "WRW",
        "QEQ",
        "WRW"
    ], {
        Q: "minecraft:glass",
        W: "minecraft:obsidian",
        E: "mythicmetals:starrite",
        R: "kubejs:raw_magical_steel",
    });


    customPedestalCraft(event, {
        tier: "advanced", time: 240, topaz: 4, amethyst: 4, onyx: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            'NBN',
            'BSB',
            'NBN'
        ],
        keys: {
            "S": { "item": "minecraft:soul_sand" },
            "B": { "item": "spectrum:bedrock_dust" },
            "N": { "item": "minecraft:netherite_scrap" }
        },
        result: {
            "item": "kibe:wither_proof_sand",
            "count": 4
        },
        advancement: "spectrum:midgame/break_decayed_bedrock"
    });

    customeFusionShrineCraft(event, {
        time: 6000, experience: 10.0, yield_upgrades: true,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "mythicmetals:midas_gold_ingot", "count": 3 },
            { "item": "spectrum:pure_gold", "count": 2 },
            { "item": "kubejs:aquarium_diamond", "count": 1 },
            { "item": "spectrum:fanciful_bismuth_ring", "count": 1 }
        ],
        result: {
            "item": "kibe:diamond_ring"
        },
        advancement: "spectrum:lategame/collect_bismuth_crystal"
    }
    );
    customeFusionShrineCraft(event, {
        time: 6000, experience: 10.0, yield_upgrades: true,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "minecraft:glow_ink_sac", "count": 2 },
            { "item": "minecraft:glowstone", "count": 4 },
            { "item": "minecraft:soul_torch", "count": 4 },
            { "item": "kibe:diamond_ring", "count": 1 }
        ],
        result: {
            "item": "kibe:light_ring"
        },
        advancement: "spectrum:lategame/collect_bismuth_crystal"
    }
    );
    customeFusionShrineCraft(event, {
        time: 36000, experience: 130.0, yield_upgrades: true,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "botania:flight_tiara", "count": 1 },
            { "item": "kibe:diamond_ring", "count": 1 },
            { "item": "minecraft:end_crystal", "count": 2 },
            { "item": "minecraft:elytra", "count": 1 },
            { "item": "minecraft:nether_star", "count": 9 },
            { "item": "bosses_of_mass_destruction:obsidian_heart", "count": 1 },
            { "item": "kubejs:essence_of_flight", "count": 5 },
        ],
        result: {
            "item": "kibe:angel_ring"
        },
        advancement: "spectrum:lategame/collect_bismuth_crystal"
    }
    );

    customEnchanterCraft(event, {
        time: 800, experience: 500, advancement: "spectrum:midgame/build_enchanting_structure", yield_upgrades: true,
        ingredients: [
          {"item": "minecraft:lead"},
          {"item": "mythicmetals:midas_gold_ingot"},
          {"item": "mythicmetals:midas_gold_ingot"},
          {"item": "minecraft:string"},
          {"item": "minecraft:ender_eye"},
          {"item": "mythicmetals:midas_gold_ingot"},
          {"item": "mythicmetals:midas_gold_ingot"},
          {"item": "minecraft:string"},
          {"item": "minecraft:ender_eye"}
        ],
        result: {
            "item": "kibe:golden_lasso"
        },
    });
    customEnchanterCraft(event, {
        time: 800, experience: 500, advancement: "spectrum:midgame/build_enchanting_structure", yield_upgrades: true,
        ingredients: [
          {"item": "kibe:golden_lasso"},
          {"item": "kibe:cursed_droplets"},
          {"item": "kibe:cursed_droplets"},
          {"item": "bewitchment:grim_elixir"},
          {"item": "bewitchment:curse_poppet"},
          {"item": "kibe:cursed_droplets"},
          {"item": "kibe:cursed_droplets"},
          {"item": "bewitchment:grim_elixir"},
          {"item": "bewitchment:voodoo_poppet"}
        ],
        result: {
            "item": "kibe:cursed_lasso"
        },
    });
    customEnchanterCraft(event, {
        time: 800, experience: 1000, advancement: "spectrum:midgame/build_enchanting_structure", yield_upgrades: true,
        ingredients: [
          {"item": "minecraft:lead"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "kibe:golden_lasso"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "kibe:cursed_lasso"}
        ],
        result: {
            "item": "kibe:diamond_lasso"
        },
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 2400, topaz: 32, amethyst: 32, onyx: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            " Q ",
            "EWE",
            " E "
        ],
        keys: {
            "Q": { "item": "minecraft:ender_eye" },
            "W": { "item": "modern_industrialization:trash_can" },
            "E": { "item": "minecraft:obsidian" }
        },
        result: {
            "item": "kibe:void_bucket",
            "count": 1
        },
        advancement: "spectrum:midgame/spectrum_midgame"
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 2400, citrine: 16, onyx: 32, experience: 8.0, yield_upgrades: true,
        pattern: [
            "TWT",
            "QEQ",
            "TRT"
        ],
        keys: {
            "Q": { "item": "spectrum:radiating_ender" },
            "W": { "item": "simplyswords:runic_tablet" },
            "E": { "item": "modern_industrialization:aluminum_tank" },
            "R": { "item": "mythicmetals:midas_gold_block" },
            "T": { "item": "minecraft:blaze_rod" },
        },
        result: {
            "item": "kibe:entangled_tank",
            "count": 1
        },
        advancement: "spectrum:get_radiating_ender"
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 2400, citrine: 32, onyx: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            "TWT",
            "QEQ",
            "TRT"
        ],
        keys: {
            "Q": { "item": "spectrum:radiating_ender" },
            "W": { "item": "simplyswords:runic_tablet" },
            "E": { "item": "modern_industrialization:aluminum_barrel" },
            "R": { "item": "mythicmetals:midas_gold_block" },
            "T": { "item": "minecraft:blaze_rod" },
        },
        result: {
            "item": "kibe:entangled_chest",
            "count": 1
        },
        advancement: "spectrum:get_radiating_ender"
    });
    customEnchanterCraft(event, {
        time: 1200, experience: 500, advancement: "spectrum:collect_quitoxic_reeds",
        ingredients: [
          {"item": "kibe:entangled_chest"},
          {"item": "adventurez:orc_skin"},
          {"item": "adventurez:orc_skin"},
          {"item": "spectrum:bottomless_bundle"},
          {"item": "minecraft:ender_eye"},
          {"item": "adventurez:orc_skin"},
          {"item": "adventurez:orc_skin"},
          {"item": "spectrum:bottomless_bundle"},
          {"item": "minecraft:ender_eye"}
        ],
        result: {
            "item": "kibe:entangled_bag"
        },
    });
    customEnchanterCraft(event, {
        time: 1200, experience: 500, advancement: "spectrum:collect_quitoxic_reeds",
        ingredients: [
          {"item": "kibe:entangled_tank"},
          {"item": "adventurez:orc_skin"},
          {"item": "adventurez:orc_skin"},
          {"item": "kibe:void_bucket"},
          {"item": "minecraft:ender_eye"},
          {"item": "adventurez:orc_skin"},
          {"item": "adventurez:orc_skin"},
          {"item": "kibe:void_bucket"},
          {"item": "minecraft:ender_eye"}
        ],
        result: {
            "item": "kibe:entangled_bucket"
        },
    });

    customPedestalCraft(event, {
        tier: "simple", time: 400, topaz: 16, experience: 1.0, yield_upgrades: true,
        pattern: [
            "RQR",
            "EWE",
            "RER"
        ],
        keys: {
            "Q": { "item": "minecraft:powder_snow_bucket" },
            "W": { "item": "spectrum:compacting_chest" },
            "E": { "item": "minecraft:snow_block" },
            "R": { "item": "minecraft:blue_ice" }
        },
        result: {
            "item": "kibe:cooler",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: "simple", time: 400, topaz: 8, citrine:8, experience: 1.0, yield_upgrades: true,
        pattern: [
            "EWE",
            "Q Q",
            " Q "
        ],
        keys: {
            "Q": { "item": "minecraft:slime_ball" },
            "W": { "item": "minecraft:slime_block" },
            "E": { "item": "minecraft:string" },
        },
        result: {
            "item": "kibe:slime_sling",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: "simple", time: 400, topaz: 8, citrine:8, experience: 1.0, yield_upgrades: true,
        pattern: [
            "Q Q",
            "W W",
            "   "
        ],
        keys: {
            "Q": { "item": "minecraft:slime_ball" },
            "W": { "item": "minecraft:slime_block" },
        },
        result: {
            "item": "kibe:slime_boots",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 2800, citrine:32, onyx: 16, experience: 5.0, yield_upgrades: true,
        pattern: [
            " R ",
            "QEQ",
            "QWQ"
        ],
        keys: {
            "Q": { "tag": "minecraft:overworld_natural_logs" },
            "W": { "item": "mythicmetals:midas_gold_block" },
            "E": { "item": "bosses_of_mass_destruction:mob_ward" },
            "R": { "item": "kubejs:crystal_fiery" },
        },
        result: {
            "item": "kibe:big_torch",
            "count": 1
        },
        advancement: "spectrum:midgame/spectrum_midgame"
    });
    // customPedestalCraft(event, {
    //     tier: "simple", time: 600, amethyst: 8, experience: 1.0,
    //     pattern: [
    //         "WRW",
    //         "QEQ",
    //         "WRW"
    //     ],
    //     keys: {
    //         "Q": { "item": "minecraft:glass" },
    //         "W": { "item": "minecraft:obsidian" },
    //         "E": { "item": "mythicmetals:starrite" },
    //         "R": { "item": "kubejs:raw_magical_steel" },
    //     },
    //     result: {
    //         "item": "kibe:tank",
    //         "count": 2
    //     },
    //     advancement: "spectrum:craft_using_pedestal"
    // });
    customPedestalCraft(event, {
        tier: "simple", time: 2800, amethyst: 16, experience: 1.0,
        pattern: [
            "RQR",
            "EWT",
            "RQR"
        ],
        keys: {
            "Q": { "item": "minecraft:iron_bars" },
            "W": { "item": "minecraft:ender_eye" },
            "E": { "item": "spectrum:compacting_chest" },
            "R": { "item": "kubejs:raw_magical_steel" },
            "T": { "item": "minecraft:bucket" },
        },
        result: {
            "item": "kibe:vacuum_hopper",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });
    customPedestalCraft(event, {
        tier: "advanced", time: 2800, amethyst: 16, onyx: 16, topaz: 16, experience: 1.0,
        pattern: [
            "QQQ",
            "RWR",
            "RER"
        ],
        keys: {
            "Q": { "item": "spirit:compressed_soul_powder_block" },
            "W": { "item": "minecraft:dispenser" },
            "E": { "item": "minecraft:nether_star" },
            "R": { "item": "spectrum:bedrock_storage_block" },
        },
        result: {
            "item": "kibe:wither_builder",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });

    global.dyeColors.forEach(color => {
        event.remove({ id: `kibe:${color.name}_elevator` })
        customPedestalCraft(event, {
            tier: "simple", time: 400, topaz: 8, citrine:8, experience: 1.0, yield_upgrades: true,
            pattern: [
                "RQR",
                "WEW",
                "RWR"
            ],
            keys: {
                "Q": { "item": "architects_palette:ender_pearl_block" },
                "W": { "item": "kubejs:raw_magical_steel" },
                "E": { "item": "minecraft:piston" },
                "R": { "item": `minecraft:${color.name}_wool` },
            },
            result: {
                "item": `kibe:${color.name}_elevator`,
                "count": 1
            },
            advancement: "spectrum:craft_cmy_pedestal"
        });
    })
})
