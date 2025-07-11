ServerEvents.recipes(event => {

    event.remove({output:"bards:iron_flute"})

    event.shaped('bards:iron_flute', [
        ' WQ',
        'WQW',
        'QW '
    ], {
        Q: 'minecraft:iron_nugget',
        W: 'minecraft:iron_ingot'
    })

    event.remove({
        output:
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
        event.remove({ id: id });
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
        tier: 'basic', time: 1000, citrine: 24, topaz: 16, amethyst: 16, experience: 1.0,
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


    const armor_type = ['head', 'chest', 'legs', 'feet']
    const t2_armor = [
        {
            t2_armor_piece: 'bards:bard_armor_t2_',
            t1_armor_piece: 'bards:bard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:popped_chorus_fruit",
                item_2: "minecraft:popped_chorus_fruit",
                item_3: "minecraft:popped_chorus_fruit",
                item_4: "minecraft:ender_pearl",
                item_5: "minecraft:ender_pearl",
                item_6: "minecraft:leather",
                item_7: "minecraft:leather",
                item_8: "minecraft:feather",
            },
        },
        {
            t2_armor_piece: 'battlemages:fire_battlemage_armor_t2_',
            t1_armor_piece: 'battlemages:fire_battlemage_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:blaze_powder",
                item_2: "minecraft:blaze_powder",
                item_3: "minecraft:blaze_powder",
                item_4: "minecraft:blaze_powder",
                item_5: "minecraft:blaze_powder",
                item_6: "elemental_metals:fire_infused_iron_ingot",
                item_7: "elemental_metals:fire_infused_iron_ingot",
                item_8: "elemental_metals:fire_infused_iron_ingot",
            },
        },
        {
            t2_armor_piece: 'battlemages:frost_battlemage_armor_t2_',
            t1_armor_piece: 'battlemages:frost_battlemage_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:blue_ice",
                item_2: "minecraft:blue_ice",
                item_3: "minecraft:blue_ice",
                item_4: "minecraft:blue_ice",
                item_5: "minecraft:blue_ice",
                item_6: "elemental_metals:frost_infused_iron_ingot",
                item_7: "elemental_metals:frost_infused_iron_ingot",
                item_8: "elemental_metals:frost_infused_iron_ingot",
            },
        },
        {
            t2_armor_piece: 'battlemages:arcane_battlemage_armor_t2_',
            t1_armor_piece: 'battlemages:arcane_battlemage_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:ender_pearl",
                item_2: "minecraft:ender_pearl",
                item_3: "minecraft:ender_pearl",
                item_4: "minecraft:ender_pearl",
                item_5: "minecraft:ender_pearl",
                item_6: "elemental_metals:arcane_infused_iron_ingot",
                item_7: "elemental_metals:arcane_infused_iron_ingot",
                item_8: "elemental_metals:arcane_infused_iron_ingot",
            },
        },
        {
            t2_armor_piece: 'blood_mages:blood_mage_armor_t2_',
            t1_armor_piece: 'blood_mages:blood_mage_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:red_wool",
                item_2: "minecraft:gold_ingot",
                item_3: "minecraft:gold_ingot",
                item_4: "minecraft:gold_ingot",
                item_5: "minecraft:leather",
                item_6: "minecraft:leather",
                item_7: "minecraft:leather",
                item_8: "minecraft:leather",
            },
        },
        {
            t2_armor_piece: 'druid:druids_armor_t2_',
            t1_armor_piece: 'druid:druids_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:green_wool",
                item_2: "minecraft:gold_ingot",
                item_3: "minecraft:gold_ingot",
                item_4: "minecraft:gold_ingot",
                item_5: "minecraft:leather",
                item_6: "minecraft:leather",
                item_7: "minecraft:leather",
                item_8: "minecraft:leather",
            },
        },
        {
            t2_armor_piece: 'fpapmod:fell_paladin_armor_t2_',
            t1_armor_piece: 'fpapmod:fell_paladin_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:ender_pearl",
                item_2: "minecraft:gold_ingot",
                item_3: "minecraft:gold_ingot",
                item_4: "minecraft:iron_ingot",
                item_5: "minecraft:iron_ingot",
                item_6: "minecraft:leather",
                item_7: "minecraft:leather",
                item_8: "minecraft:leather",
            },
        },
        {
            t2_armor_piece: 'fpapmod:fell_priest_robe_t2_',
            t1_armor_piece: 'fpapmod:fell_priest_robe_t1_',
            craft_material_list: {
                item_1: "minecraft:ender_pearl",
                item_2: "minecraft:black_wool",
                item_3: "minecraft:black_wool",
                item_4: "minecraft:black_wool",
                item_5: "minecraft:black_wool",
                item_6: "minecraft:black_wool",
                item_7: "minecraft:gold_ingot",
                item_8: "minecraft:gold_ingot",
            },
        },
        {
            t2_armor_piece: 'morewizardsmod:lightning_wizard_armor_t2_',
            t1_armor_piece: 'morewizardsmod:lightning_wizard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:magenta_wool",
                item_2: "minecraft:magenta_wool",
                item_3: "minecraft:magenta_wool",
                item_4: "minecraft:magenta_wool",
                item_5: "minecraft:magenta_wool",
                item_6: "minecraft:gold_ingot",
                item_7: "minecraft:gold_ingot",
                item_8: "minecraft:gold_ingot",
            },
        },
        {
            t2_armor_piece: 'morewizardsmod:soul_wizard_armor_t2_',
            t1_armor_piece: 'morewizardsmod:soul_wizard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:cyan_wool",
                item_2: "minecraft:cyan_wool",
                item_3: "minecraft:cyan_wool",
                item_4: "minecraft:cyan_wool",
                item_5: "minecraft:cyan_wool",
                item_6: "minecraft:gold_ingot",
                item_7: "minecraft:gold_ingot",
                item_8: "minecraft:gold_ingot",
            },
        },
        {
            t2_armor_piece: 'paladins:crusader_armor_',
            t1_armor_piece: 'paladins:paladin_armor_',
            craft_material_list: {
                item_1: "minecraft:ghast_tear",
                item_2: "minecraft:gold_ingot",
                item_3: "minecraft:gold_ingot",
                item_4: "minecraft:iron_ingot",
                item_5: "minecraft:iron_ingot",
                item_6: "minecraft:leather",
                item_7: "minecraft:leather",
                item_8: "minecraft:feather",
            },
        },
        {
            t2_armor_piece: 'paladins:prior_robe_',
            t1_armor_piece: 'paladins:priest_robe_',
            craft_material_list: {
                item_1: "minecraft:ghast_tear",
                item_2: "minecraft:gold_ingot",
                item_3: "minecraft:gold_ingot",
                item_4: "minecraft:light_gray_wool",
                item_5: "minecraft:light_gray_wool",
                item_6: "minecraft:light_gray_wool",
                item_7: "minecraft:light_gray_wool",
                item_8: "minecraft:light_gray_wool",
            },
        },
        {
            t2_armor_piece: 'fallenwizardsmod:dark_fire_wizard_armor_t2_',
            t1_armor_piece: 'fallenwizardsmod:dark_fire_wizard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:orange_wool",
                item_2: "minecraft:orange_wool",
                item_3: "minecraft:orange_wool",
                item_4: "minecraft:orange_wool",
                item_5: "minecraft:orange_wool",
                item_6: "minecraft:blaze_powder",
                item_7: "minecraft:blaze_powder",
                item_8: "minecraft:blaze_powder",
            },
        },
        {
            t2_armor_piece: 'fallenwizardsmod:dark_arcane_wizard_armor_t2_',
            t1_armor_piece: 'fallenwizardsmod:dark_arcane_wizard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:magenta_wool",
                item_2: "minecraft:magenta_wool",
                item_3: "minecraft:magenta_wool",
                item_4: "minecraft:magenta_wool",
                item_5: "minecraft:magenta_wool",
                item_6: "minecraft:ender_pearl",
                item_7: "minecraft:ender_pearl",
                item_8: "minecraft:ender_pearl",
            },
        },
        {
            t2_armor_piece: 'fallenwizardsmod:dark_frost_wizard_armor_t2_',
            t1_armor_piece: 'fallenwizardsmod:dark_frost_wizard_armor_t1_',
            craft_material_list: {
                item_1: "minecraft:light_blue_wool",
                item_2: "minecraft:light_blue_wool",
                item_3: "minecraft:light_blue_wool",
                item_4: "minecraft:light_blue_wool",
                item_5: "minecraft:light_blue_wool",
                item_6: "minecraft:prismarine_crystals",
                item_7: "minecraft:prismarine_crystals",
                item_8: "minecraft:prismarine_crystals",
            },
        }
    ];

    armor_type.forEach(type => {
        t2_armor.forEach(armor => {
            event.remove({output: armor.t2_armor_piece + type})
            customEnchanterCraft(event, {
                time: 600, experience: 69, advancement: "spectrum:midgame/build_enchanting_structure",
                ingredients: [
                    { "item": armor.t1_armor_piece + type },
                    { "item": armor.craft_material_list.item_1 },
                    { "item": armor.craft_material_list.item_2 },
                    { "item": armor.craft_material_list.item_3 },
                    { "item": armor.craft_material_list.item_4 },
                    { "item": armor.craft_material_list.item_5 },
                    { "item": armor.craft_material_list.item_6 },
                    { "item": armor.craft_material_list.item_7 },
                    { "item": armor.craft_material_list.item_8 },
                ],
                result: {
                    "item": armor.t2_armor_piece + type
                },
            });
        });
        
    });

});