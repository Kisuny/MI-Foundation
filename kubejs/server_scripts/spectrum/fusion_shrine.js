const customeFusionShrineCraft = (event, args) => {
  event.custom({
    "type": "spectrum:fusion_shrine",
    "time": args.time,
    "experience": args.experience,
    "fluid": args.fluid,
    "ingredients": args.ingredients,
    "result": args.result,
    "required_advancement": args.advancement,
    "world_conditions": args.worldConditions || [],
    "start_crafting_effect": args.startEffect || "/playsound yttr:effector_open ambient @p ~ ~2 ~",
    "during_crafting_effects": args.duringEffect || [],
    "finish_crafting_effect": args.finishEffect || "/playsound yttr:effector_close ambient @p ~ ~2 ~",
    "description": args.description,
    "disable_yield_upgrades": args.yield_upgrades || false
  });
};

const drill_types = [
    'aluminum',
    'bronze',
    'titanium',
    'copper',
    'desh',
    'ostrum',
    'calorite',
    'stainless_steel',
    'steel',
    'gold'
]

ServerEvents.recipes(event => {
    let bedrockToolsCraft = (type, midasGoldAmount, onyxPlateAmount, durasteelAmount, stratineFragAmount, output, nbt) => {
        customeFusionShrineCraft(event, {
            time: 1200, experience: 16.0,
            fluid: "spectrum:midnight_solution",
            ingredients: [
                { "item": `${type}`, "count": 1 },
                { "item": "modern_industrialization:midas_gold_plate", "count": midasGoldAmount },
                { "item": "modern_industrialization:onyx_plate", "count": onyxPlateAmount },
                { "item": "mythicmetals:durasteel_ingot", "count": durasteelAmount },
                { "item": "spectrum:stratine_gem", "count": 1 },
                { "item": "spectrum:stratine_fragments", "count": stratineFragAmount },
            ],
            result: {
                "item": `${output}`,
                "nbt": { "Enchantments": nbt }
            },
            advancement: "spectrum:unlocks/equipment/bedrock_tools"
        });
    };



    bedrockToolsCraft('minecraft:golden_helmet', 8, 8, 10, 5, 'spectrum:bedrock_helmet', [{ "id": "minecraft:protection", "lvl": "5s" }]);
    bedrockToolsCraft('minecraft:golden_chestplate', 8, 8, 16, 8, 'spectrum:bedrock_chestplate', [{ "id": "minecraft:projectile_protection", "lvl": "5s" }]);
    bedrockToolsCraft('minecraft:golden_leggings', 8, 8, 14, 7, 'spectrum:bedrock_leggings', [{ "id": "minecraft:blast_protection", "lvl": "5s" }]);
    bedrockToolsCraft('minecraft:golden_boots', 8, 8, 8, 4, 'spectrum:bedrock_boots', [{ "id": "minecraft:fire_protection", "lvl": "5s" }]);
    bedrockToolsCraft('minecraft:golden_shovel', 1, 1, 2, 1, 'spectrum:bedrock_shovel', [{ "id": "minecraft:efficiency", "lvl": "6s" }]);
    bedrockToolsCraft('minecraft:golden_sword', 2, 2, 4, 2, 'spectrum:bedrock_sword', [{ "id": "minecraft:sharpness", "lvl": "6s" }]);
    bedrockToolsCraft('minecraft:crossbow', 5, 5, 10, 2, 'spectrum:bedrock_crossbow', [{ "id": "minecraft:quick_charge", "lvl": "4s" }]);
    bedrockToolsCraft('minecraft:golden_axe', 3, 3, 6, 3, 'spectrum:bedrock_axe', [{ "id": "minecraft:efficiency", "lvl": "6s" }]);
    bedrockToolsCraft('minecraft:golden_hoe', 2, 2, 4, 2, 'spectrum:bedrock_hoe', [{ "id": "minecraft:fortune", "lvl": "4s" }]);
    bedrockToolsCraft('minecraft:fishing_rod', 3, 3, 6, 2, 'spectrum:bedrock_fishing_rod', [{ "id": "minecraft:luck_of_the_sea", "lvl": "4s" }]);
    bedrockToolsCraft('minecraft:golden_pickaxe', 3, 3, 6, 3, 'spectrum:bedrock_pickaxe', [{ "id": "minecraft:silk_touch", "lvl": "1s" }]);
    bedrockToolsCraft('minecraft:shears', 2, 2, 4, 2, 'spectrum:bedrock_shears', [{ "id": "minecraft:efficiency", "lvl": "6s" }]);
    bedrockToolsCraft('minecraft:bow', 4, 4, 8, 2, 'spectrum:bedrock_bow', [{ "id": "minecraft:power", "lvl": "6s" }]);

    drill_types.forEach(type => {
        customeFusionShrineCraft(event, {
            time: 200, experience: 2.0,
            fluid: "spectrum:liquid_crystal",
            ingredients: [
                { "item": `modern_industrialization:${type}_drill`, "count": 1 },
                { "item": 'spectrum:quitoxic_powder', "count": 1 },
                { "item": "mythicmetals:durasteel_ingot", "count": 1 },
            ],
            result: {
                "item": `kubejs:durasteel_reinforced_${type}_drill`
            },
            advancement: "spectrum:midgame/break_decayed_bedrock"
        })
    });

    event.remove({id: 'spectrum:fusion_shrine/refined_azurite'})
    customeFusionShrineCraft(event, {
        time: 600, experience: 4.0,
        fluid: "minecraft:water",
        ingredients: [
            { "item": "spectrum:raw_azurite", "count": 4 },
            { "item": "spectrum:neolith" },
            { "item": "modern_industrialization:diamond_dust" }
        ],
        result: {
            "item": "spectrum:refined_azurite"
        },
        finish_crafting_effect: "single_visual_explosion_on_shrine",
        advancement: "spectrum:unlocks/resources/refined_azurite"
    });

    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_stone_ring", "count": 1 },
            { "item": "spectrum:four_leaf_clover", "count": 2 },
            { "item": "mythicmetals:celestium_ingot", "count": 8 },
        ],
        result: {
            "item": "spectrum:heartsingers_reward"
        },
        advancement: "spectrum:unlocks/trinkets/heartsingers_reward"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_circlet", "count": 1 },
            { "item": "modern_industrialization:celestium_plate", "count": 8 },
            { "item": "spectrum:moonstone_powder", "count": 8 },
            { "item": "spectrum:blood_orchid_petal", "count": 4 },
            { "item": "spectrum:refined_malachite", "count": 8 },
        ],
        result: {
            "item": "spectrum:circlet_of_arrogance"
        },
        advancement: "spectrum:unlocks/trinkets/circlet_of_arrogance"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_circlet", "count": 1 },
            { "item": "spectrum:mermaids_gem", "count": 2 },
            { "item": "minecraft:phantom_membrane", "count": 8 },
            { "item": "modern_industrialization:banglum_plate", "count": 8 },
            { "item": "mythicmetals:star_platinum", "count": 4 },
        ],
        result: {
            "item": "spectrum:whispy_circlet"
        },
        advancement: "spectrum:unlocks/trinkets/whispy_circlet"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_circlet", "count": 1 },
            { "item": "mythicmetals:celestium_ingot", "count": 4 },
            { "item": "spectrum:neolith", "count": 4 },
            { "item": "spectrum:stratine_gem", "count": 1 },
            { "item": "bewitchment:hellish_bauble", "count": 1 },
        ],
        result: {
            "item": "spectrum:ashen_circlet"
        },
        advancement: "spectrum:unlocks/trinkets/ashen_circlet"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_bismuth_ring", "count": 1 },
            { "item": "spectrum:neolith", "count": 8 },
            { "item": "spectrum:fiery_powder", "count": 4 },
            { "item": "mythicmetals:celestium_ingot", "count": 8 },
            { "item": "spectrum:pyrite_chunk", "count": 8 },
        ],
        result: {
            "item": "spectrum:ring_of_pursuit"
        },
        advancement: "spectrum:unlocks/trinkets/ring_of_pursuit"
    }
    );
    customeFusionShrineCraft(event, {
        time: 12000, experience: 8.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_bismuth_ring", "count": 1 },
            { "item": "spectrum:moonstone_shard", "count": 64 },
            { "item": "mythicmetals:unobtainium_block", "count": 64 },
            { "item": "spectrum:resonant_lily", "count": 1 },
        ],
        result: {
            "item": "spectrum:neat_ring"
        },
        advancement: "spectrum:unlocks/trinkets/neat_ring",
        startEffect: "play_glass_breaking_sound",
        duringEffect: [
            "nothing",
            "lightning_on_shrine",
            "nothing",
            "explosions_and_lightning_around_shrine",
            "explosions_and_lightning_around_shrine",
            "explosions_and_lightning_around_shrine",
            "nothing"
        ],
        finishEffect: "ridiculously_squeaky_fart"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spectrum:fanciful_gloves", "count": 1 },
            { "item": "mythicmetals:celestium_ingot", "count": 8 },
            { "item": "mythicmetals:orichalcum_ingot", "count": 8 },
            { "item": "mythicmetals:runite_ingot", "count": 8 },
        ],
        result: {
            "item": "spectrum:gloves_of_dawns_grasp"
        },
        advancement: "spectrum:unlocks/trinkets/gloves_of_dawns_grasp"
    }
    );
    customeFusionShrineCraft(event, {
        time: 24000, experience: 5.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "spirit:broken_spawner", "count": 1 },
            { "item": "bosses_of_mass_destruction:ancient_anima", "count": 1 },
            { "item": "spectrum:vegetal", "count": 8 },
            { "item": "spectrum:four_leaf_clover", "count": 1 },
            { "item": "modern_industrialization:celestium_plate", "count": 2 },
            { "item": "bewitchment:earth_ichor", "count": 4 },
        ],
        result: {
            "item": "kubejs:stable_mob_spawner"
        },
        advancement: "kubejs:broken_mob_spawner"
    }
    );
    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "mythicmetals:starrite", "count": 1 },
            {"item": "spectrum:neolith", "count": 4 },
            {"item": "spectrum:midnight_chip", "count": 2 },
            {"item": "spectrum:stardust", "count": 4 },
            {"item": "mythicmetals:unobtainium", "count": 1 },
            {"item": "spectrum:downstone_fragments", "count": 1 },
        ],
        result: {
            "item": "architects_palette:unobtanium", "count": 3
        },
        advancement: "spectrum:lategame/collect_downstone_fragments"
    });
    customeFusionShrineCraft(event, {
        time: 6000, experience: 4.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "minecraft:book", "count": 1 },
            {"item": "numismatic-overhaul:gold_coin", "count": 16 },
            {"item": "artifacts:universal_attractor", "count": 1 },
            {"item": "mythicmetals:celestium_ingot", "count": 16 }
        ],
        result: {
            "item": "minecraft:enchanted_book",
            "nbt": {"StoredEnchantments": [{"id": "kubejs:coins_instinct", "lvl": "1s"}]}
        },
        advancement: "spectrum:build_fusion_shrine"
    });
});
