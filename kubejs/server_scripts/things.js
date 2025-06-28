
ServerEvents.recipes(event =>{


    const removeList = [
        'things:bater_wucket',
        'things:ender_pouch',
        'things:monocle',
        'things:moss_necklace',
        'things:placebo',
        'things:displacement_tome',
        'things:displacement_page',
        'things:mining_gloves',
        'things:riot_gauntlet',
        'things:infernal_scepter',
        'things:hades_crystal',
        'things:enchanted_wax_gland',
        'things:rabbit_foot_charm',
        'things:luck_of_the_irish',
        'things:hardening_catalyst',
        'things:socks',
        'things:arm_extender',
        'things:shock_absorber',
        'things:broken_watch',
        'things:empty_agglomeration',
        'things:gleaming_compound'
    ]

    removeList.forEach(item => {
        event.remove({output: item})
    });


    customeFusionShrineCraft(event, {
        time: 600, experience: 1.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "things:socks", "count": 1 },
            { "item": "things:rabbit_foot_charm", "count": 1 },
            { "item": "things:gleaming_compound", "count": 8 },
            { "item": "bewitchment:earth_ichor", "count": 2 }
        ],
        result: {
            "item": "things:socks",
            "nbt": {Jumpy:1,Speed:0}
        },
        advancement: "spectrum:build_fusion_shrine"
    });

    customeFusionShrineCraft(event, {
        time: 600, experience: 1.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "things:socks", "count": 1 },
            { "item": "minecraft:sugar", "count": 12 },
            { "item": "things:gleaming_compound", "count": 8 },
            { "item": "bewitchment:earth_ichor", "count": 2 }
        ],
        result: {
            "item": "things:socks",
            "nbt": {Jumpy:0,Speed:2}
        },
        advancement: "spectrum:build_fusion_shrine"
    });
    customeFusionShrineCraft(event, {
        time: 200, experience: 0.1,
        fluid: "minecraft:lava",
        ingredients: [
            { "item": "things:gleaming_powder", "count": 16 },
            { "item": "kubejs:aquarium_diamond", "count": 1 },
            { "item": "bewitchment:grim_elixir", "count": 1 },
        ],
        result: {
            "item": "things:gleaming_compound"
        },
        advancement: "spectrum:build_fusion_shrine"
    });
    customeFusionShrineCraft(event, {
        time: 1200, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "bosses_of_mass_destruction:charged_ender_pearl", "count": 1 },
            { "item": "spectrum:midnight_chip", "count": 8 },
            { "item": "mythicmetals:durasteel_ingot", "count": 4 },
            { "item": "kubejs:star_core", "count": 1 },
            { "item": "bewitchment:demon_heart", "count": 2 },
            { "item": "minecraft:written_book", "count": 1 },
            { "item": "spectrum:dragonbone_chunk", "count": 24 },
        ],
        result: {
            "item": "things:displacement_tome"
        },
        advancement: "spectrum:lategame/break_cracked_dragonbone"
    });

    customEnchanterCraft(event, {
        time: 6000, experience: 5000, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "spectrum:moonstone_core"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"item": "spectrum:bedrock_storage_block"},
          {"item": "spectrum:bedrock_storage_block"},
          {"item": "kubejs:dragonbone_alloy"},
          {"item": "kubejs:dragonbone_alloy"},
          {"item": "spectrum:bedrock_storage_block"},
          {"item": "spectrum:bedrock_storage_block"}
        ],
        result: {
            "item": "things:hardening_catalyst"
        },
    });
    customEnchanterCraft(event, {
        time: 6000, experience: 5000, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "bosses_of_mass_destruction:charged_ender_pearl"},
          {"item": "kubejs:dragonbone_alloy"},
          {"item": "spectrum:refined_bloodstone"},
          {"item": "botania:narslimmus"},
          {"item": "spectrum:bottle_of_fading"},
          {"item": "kubejs:dragonbone_alloy"},
          {"item": "spectrum:refined_bloodstone"},
          {"item": "botania:narslimmus"},
          {"item": "spectrum:bottle_of_fading"}
        ],
        result: {
            "item": "things:empty_agglomeration"
        },
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 100, onyx: 4, experience: 0.5,
        pattern: [
            "TRT",
            "RCR",
            "TRT"
        ],
        keys: {
            "C": { "item": "minecraft:ender_pearl" },
            "T": { "item": "spectrum:bone_ash" },
            "R": { "item": "spectrum:quitoxic_powder" },
        },
        result: {
            "item": "kubejs:teleport_pearl",
            "count": 1
        },
        advancement: "things:displacement_tome"
    });



});
