ServerEvents.recipes(event => {

    event.remove({
        output: [
            'gobber2:gobber2_ring_vision',
            'gobber2:gobber2_ring_explorer',
            'gobber2:gobber2_medallion_hero',
            'gobber2:gobber2_staff_ensnarement',
            'gobber2:gobber2_staff_hostile_ensnarement',
            'gobber2:gobber2_staff_sniper',
            'gobber2:gobber2_staff_channeling',
            'gobber2:gobber2_sword_sniper',
            'gobber2:gobber2_goo',
            'gobber2:gobber2_gooey_apple',
            'gobber2:gobber2_gooey_bread',
            'gobber2:gobber2_gooey_beef',
            'gobber2:gobber2_gooey_beefstew',
            'gobber2:gobber2_goo_nether',
            'gobber2:gobber2_gooey_apple_nether',
            'gobber2:gobber2_gooey_bread_nether',
            'gobber2:gobber2_gooey_beef_nether',
            'gobber2:gobber2_gooey_beefstew_nether',
            'gobber2:gobber2_tree_axe_end',
            'gobber2:gobber2_hammer_end',
            'gobber2:gobber2_hammer_nether',
            'gobber2:gobber2_hammer',
            'gobber2:gobber2_excavator',
            'gobber2:gobber2_excavator_nether',
            'gobber2:gobber2_excavator_end',
            'gobber2:gobber2_ingot',
            'gobber2:gobber2_ingot_nether',
            'gobber2:gobber2_ingot_end',
            'gobber2:gobber2_glob_end',
            'gobber2:gobber2_glob_nether',
            'gobber2:gobber2_glob',
            'gobber2:gobber2_rod',
            'gobber2:gobber2_rod_nether',
            'gobber2:gobber2_rod_end',
            'gobber2:gobber2_ring',
            'gobber2:gobber2_ring_nether',
            'gobber2:gobber2_ring_end',
            'gobber2:gobber2_medallion_end',
            'gobber2:gobber2_medallion_nether',
            'gobber2:gobber2_medallion',
            'gobber2:gobber2_staff_clearing',
            'gobber2:gobber2_staff_transformation',
            'gobber2:gobber2_staff_farmer',
            'gobber2:gobber2_staff_nature',
            'gobber2:gobber2_staff_stars',
            'gobber2:gobber2_foo',
            'gobber2:gobber2_foo_nether',
            'gobber2:gobber2_foo_end',
            'gobber2:gobber2_medallion_healing',
            'gobber2:gobber2_medallion_healing2',
            'gobber2:gobber2_medallion_healing3',
            'gobber2:gobber2_medallion_breathing',
            'gobber2:gobber2_medallion_exp',
            'gobber2:gobber2_medallion_sea',
            'gobber2:gobber2_medallion_shielding',
            'gobber2:gobber2_medallion_suffering',
            'gobber2:gobber2_ring_above',
            'gobber2:gobber2_ring_ascent',
            'gobber2:gobber2_ring_attraction',
            'gobber2:gobber2_ring_blink',
            'gobber2:gobber2_ring_curing',
            'gobber2:gobber2_ring_dismissal',
            'gobber2:gobber2_ring_enderchest',
            'gobber2:gobber2_ring_haste',
            'gobber2:gobber2_ring_luck',
            'gobber2:gobber2_ring_phoenix',
            'gobber2:gobber2_ring_repair',
            'gobber2:gobber2_ring_return',
            'gobber2:gobber2_ring_stealth',
            'gobber2:gobber2_ring_strength',
            'gobber2:gobber2_ring_sunshine',
            'gobber2:gobber2_ring_swiftness',
            'gobber2:gobber2_ring_traveler',
            'gobber2:gobber2_ring_void',
            'gobber2:gobber2_ring_airwalking',
            'gobber2:gobber2_ring_miner',
            'gobber2:gobber2_ring_farmer',
            'gobber2:gobber2_tree_axe',
            'gobber2:gobber2_tree_axe_nether',
            'gobber2:gobber2_sword',
            'gobber2:gobber2_sword_nether',
            'gobber2:gobber2_sword_end',
            'gobber2:gobber2_bow',
            'gobber2:gobber2_bow_nether',
            'gobber2:gobber2_bow_end',
            'gobber2:gobber2_pickaxe',
            'gobber2:gobber2_pickaxe_nether',
            'gobber2:gobber2_pickaxe_end',
            'gobber2:gobber2_axe',
            'gobber2:gobber2_axe_nether',
            'gobber2:gobber2_axe_end',
            'gobber2:gobber2_shovel',
            'gobber2:gobber2_shovel_nether',
            'gobber2:gobber2_shovel_end',
            'gobber2:gobber2_hoe',
            'gobber2:gobber2_hoe_nether',
            'gobber2:gobber2_hoe_end',
            'gobber2:gobber2_paxel',
            'gobber2:gobber2_paxel_nether',
            'gobber2:gobber2_paxel_end',
            'gobber2:gobber2_helmet',
            'gobber2:gobber2_chestplate',
            'gobber2:gobber2_leggings',
            'gobber2:gobber2_boots',
            'gobber2:gobber2_helmet_nether',
            'gobber2:gobber2_chestplate_nether',
            'gobber2:gobber2_leggings_nether',
            'gobber2:gobber2_boots_nether',
            'gobber2:gobber2_helmet_end',
            'gobber2:gobber2_chestplate_end',
            'gobber2:gobber2_leggings_end',
            'gobber2:gobber2_boots_end',
            'gobber2:gobber2_links_end',
            'gobber2:gobber2_paxel_stars',
            'gobber2:dragon_elytra',
            'gobber2:dragon_star',
            'gobber2:gobber2_block',
            'gobber2:gobber2_block_nether',
            'gobber2:gobber2_block_end',
            'gobber2:gobber2_glass',
            'gobber2:gobber2_glass_nether',
            'gobber2:gobber2_glass_end'
        ]
    })
    event.remove({id: 'gobber2:gobber2_ring_teleport'})


    event.recipes.botania.terra_plate('3x gobber2:gobber2_ingot', ['gobber2:gobber2_glob', 'minecraft:diamond', 'minecraft:iron_ingot', 'minecraft:gold_ingot'], 100000)
    event.recipes.botania.terra_plate('3x gobber2:gobber2_ingot_nether', ['gobber2:gobber2_ingot', 'gobber2:gobber2_ingot', 'gobber2:gobber2_glob_nether', 'minecraft:netherite_scrap'], 150000)
    event.recipes.botania.terra_plate('3x gobber2:gobber2_ingot_end', ['gobber2:gobber2_ingot_nether', 'gobber2:gobber2_ingot_nether', 'gobber2:gobber2_glob_end', 'minecraft:chorus_flower'], 250000)

    customPedestalCraft(event, {
        tier: "complex", time: 400, moonstone: 16, onyx: 16, experience: 0.5,
        pattern: [
            "QQQ",
            "QQQ",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_globette_end" }
        },
        result: {
            "item": "gobber2:gobber2_glob_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 400, citrine: 16, onyx: 16, experience: 0.5,
        pattern: [
            "QQQ",
            "QQQ",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_globette_nether" }
        },
        result: {
            "item": "gobber2:gobber2_glob_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 400, topaz: 16, onyx: 16, experience: 0.5,
        pattern: [
            "QQQ",
            "QQQ",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_globette" }
        },
        result: {
            "item": "gobber2:gobber2_glob",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            "Q  ",
            "Q  ",
            "   "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot" }
        },
        result: {
            "item": "gobber2:gobber2_rod",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            " Q ",
            "Q Q",
            " Q "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot" }
        },
        result: {
            "item": "gobber2:gobber2_ring",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            "Q  ",
            "Q  ",
            "   "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot_nether" }
        },
        result: {
            "item": "gobber2:gobber2_rod_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            " Q ",
            "Q Q",
            " Q "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot_nether" }
        },
        result: {
            "item": "gobber2:gobber2_ring_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            "Q  ",
            "Q  ",
            "   "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot_end" }
        },
        result: {
            "item": "gobber2:gobber2_rod_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 50, experience: 0.5,
        pattern: [
            " Q ",
            "Q Q",
            " Q "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ingot_end" }
        },
        result: {
            "item": "gobber2:gobber2_ring_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    event.recipes.modern_industrialization.cutting_machine(20, 100)
        .itemIn('gobber2:gobber2_ingot')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('2x gobber2:gobber2_rod')

    event.recipes.modern_industrialization.cutting_machine(20, 100)
        .itemIn('gobber2:gobber2_ingot_nether')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('2x gobber2:gobber2_rod_nether')

    event.recipes.modern_industrialization.cutting_machine(20, 100)
        .itemIn('gobber2:gobber2_ingot_end')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('2x gobber2:gobber2_rod_end')

    event.recipes.modern_industrialization.compressor(20, 100)
        .itemIn('gobber2:gobber2_rod')
        .itemOut('gobber2:gobber2_ring')

    event.recipes.modern_industrialization.compressor(20, 100)
        .itemIn('gobber2:gobber2_rod_nether')
        .itemOut('gobber2:gobber2_ring_nether')

    event.recipes.modern_industrialization.compressor(20, 100)
        .itemIn('gobber2:gobber2_rod_end')
        .itemOut('gobber2:gobber2_ring_end')

    event.recipes.botania.runic_altar('gobber2:gobber2_medallion',
        [
            'gobber2:gobber2_ingot',
            'gobber2:gobber2_ingot',
            'gobber2:gobber2_ingot',
            'gobber2:gobber2_ingot',
            'gobber2:gobber2_ingot',
            'modern_industrialization:runite_large_plate'
        ], 10000)
    event.recipes.botania.runic_altar('gobber2:gobber2_medallion_nether',
        [
            'gobber2:gobber2_ingot_nether',
            'gobber2:gobber2_ingot_nether',
            'gobber2:gobber2_ingot_nether',
            'gobber2:gobber2_ingot_nether',
            'gobber2:gobber2_ingot_nether',
            'modern_industrialization:runite_large_plate'
        ], 20000)
    event.recipes.botania.runic_altar('gobber2:gobber2_medallion_end',
        [
            'gobber2:gobber2_ingot_end',
            'gobber2:gobber2_ingot_end',
            'gobber2:gobber2_ingot_end',
            'gobber2:gobber2_ingot_end',
            'gobber2:gobber2_ingot_end',
            'modern_industrialization:runite_large_plate'
        ], 40000)


    customPedestalCraft(event, {
        tier: "complex", time: 2000, moonstone: 20, experience: 0.5,
        pattern: [
            " QE",
            " WQ",
            "W  "
        ],
        keys: {
            "Q": { "item": "spectrum:green_pigment" },
            "W": { "item": "gobber2:gobber2_rod" },
            "E": { "item": "spectrum:four_leaf_clover" },
        },
        result: {
            "item": "gobber2:gobber2_staff_clearing",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 10, citrine: 10, experience: 0.5,
        pattern: [
            " QE",
            " WQ",
            "W  "
        ],
        keys: {
            "Q": { "item": "spectrum:blue_pigment" },
            "W": { "item": "gobber2:gobber2_rod" },
            "E": { "item": "spectrum:paltaeria_gem" },
        },
        result: {
            "item": "gobber2:gobber2_staff_transformation",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 10, citrine: 10, topaz: 10, moonstone: 10, experience: 0.5,
        pattern: [
            "Q  ",
            "W  ",
            "   "
        ],
        keys: {
            "Q": { "item": "gobber2:gobber2_ring_farmer" },
            "W": { "item": "gobber2:gobber2_hoe" },
        },
        result: {
            "item": "gobber2:gobber2_staff_farmer",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 20, experience: 0.5,
        pattern: [
            " RE",
            " WT",
            "W  "
        ],
        keys: {
            "W": { "item": "gobber2:gobber2_rod_nether" },
            "E": { "item": "minecraft:sugar_cane" },
            "R": { "item": "minecraft:mangrove_propagule" },
            "T": { "item": "minecraft:oak_sapling" },
        },
        result: {
            "item": "gobber2:gobber2_staff_nature",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 10, onyx: 10, experience: 0.5,
        pattern: [
            " RE",
            " WR",
            "W  "
        ],
        keys: {
            "W": { "item": "gobber2:gobber2_rod_nether" },
            "E": { "item": "spectrum:star_fragment" },
            "R": { "item": "spectrum:stardust" },
        },
        result: {
            "item": "gobber2:gobber2_staff_stars",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });


    //medallions
    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 50, experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        keys: {
            "C": { "item": "minecraft:enchanted_golden_apple" },
            "B": { "item": "minecraft:rabbit_foot" },
            "A": { "item": "gobber2:gobber2_medallion" },
        },
        result: {
            "item": "gobber2:gobber2_medallion_healing",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 50, onyx: 50, experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CDC"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_medallion_nether"
            },
            "B":
            {
                "item": "minecraft:ghast_tear"
            },
            "C":
            {
                "item": "minecraft:weeping_vines"
            },
            "D":
            {
                "item": "gobber2:gobber2_medallion_healing"
            }
        },
        result: {
            "item": "gobber2:gobber2_medallion_healing2",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });

    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 50, onyx: 50, moonstone: 50, experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CDC"
          ],
        keys: {
            "A":
            {
              "item": "gobber2:gobber2_medallion_end"
            },
            "B":
            {
              "item": "minecraft:nether_star"
            },
            "C":
            {
              "item": "minecraft:end_crystal"
            },
            "D":
            {
              "item": "gobber2:gobber2_medallion_healing2"
            }
          },
        result: {
            "item": "gobber2:gobber2_medallion_healing3",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 20, topaz: 20, experience: 0.5,
        pattern: [
            " B ",
            "BAB",
            " B "
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_medallion"
            },
            "B":
            {
                "item": "minecraft:pufferfish"
            }
        },
        result: {
            "item": "gobber2:gobber2_medallion_breathing",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, citrine: 64, onyx: 10, experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_medallion_nether"
            },
            "B":
            {
                "item": "spectrum:pure_emerald"
            },
            "C":
            {
                "item": "minecraft:experience_bottle"
            }
        },
        result: {
            "item": "gobber2:gobber2_medallion_exp",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 64,  experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_medallion_end"
            },
            "B":
            {
                "item": "minecraft:heart_of_the_sea"
            },
            "C":
            {
                "item": "minecraft:conduit"
            }
        },
        result: {
            "item": "gobber2:gobber2_medallion_sea",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, amethyst: 40, topaz: 40, experience: 0.5,
        pattern: [
            "CBC",
            "BAB",
            "CDC"
          ],
        keys: {
            "A":
            {
              "item": "gobber2:gobber2_medallion_nether"
            },
            "B":
            {
              "item": "minecraft:ghast_tear"
            },
            "C":
            {
              "item": "minecraft:arrow"
            },
            "D":
            {
              "item": "gobber2:gobber2_bow_nether"
            }
          },
        result: {
            "item": "gobber2:gobber2_medallion_shielding",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 50, experience: 0.5,
        pattern: [
            "CDC",
            "BAB",
            "CDC"
          ],
        keys: {
            "A":
            {
              "item": "gobber2:gobber2_medallion_end"
            },
            "B":
            {
              "item": "minecraft:nether_star"
            },
            "C":
            {
              "item": "gobber2:gobber2_ingot_end"
            },
            "D":
            {
              "item": "gobber2:gobber2_sword_end"
            }
          },
        result: {
            "item": "gobber2:gobber2_medallion_suffering",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    // Avg
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "I",
            "I",
            "S"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "S": { "item": "gobber2:gobber2_rod" }	
        },
        result: {
            "item": "gobber2:gobber2_sword",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "I",
            "I",
            "S"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" },
            "S": { "item": "gobber2:gobber2_rod_end" }	
        },
        result: {
            "item": "gobber2:gobber2_sword_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "I",
            "I",
            "S"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" },
            "S": { "item": "gobber2:gobber2_rod_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_sword_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            " IS",
            "I S",
            " IS"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_rod" },
            "S": { "item": "minecraft:string" }	
        },
        result: {
            "item": "gobber2:gobber2_bow",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            " IS",
            "I S",
            " IS"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_rod_end" },
            "S": { "item": "minecraft:string" }	
        },
        result: {
            "item": "gobber2:gobber2_bow_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            " IS",
            "I S",
            " IS"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_rod_nether" },
            "S": { "item": "minecraft:string" }	
        },
        result: {
            "item": "gobber2:gobber2_bow_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "III",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "S": { "item": "gobber2:gobber2_rod" }	
        },
        result: {
            "item": "gobber2:gobber2_pickaxe",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "III",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" },
            "S": { "item": "gobber2:gobber2_rod_end" }	
        },
        result: {
            "item": "gobber2:gobber2_pickaxe_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "III",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" },
            "S": { "item": "gobber2:gobber2_rod_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_pickaxe_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            "IS ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "S": { "item": "gobber2:gobber2_rod" }	
        },
        result: {
            "item": "gobber2:gobber2_axe",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            "IS ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" },
            "S": { "item": "gobber2:gobber2_rod_end" }	
        },
        result: {
            "item": "gobber2:gobber2_axe_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            "IS ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" },
            "S": { "item": "gobber2:gobber2_rod_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_axe_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            " I ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "S": { "item": "gobber2:gobber2_rod" }	
        },
        result: {
            "item": "gobber2:gobber2_shovel",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            " I ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" },
            "S": { "item": "gobber2:gobber2_rod_end" }	
        },
        result: {
            "item": "gobber2:gobber2_shovel_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            " I ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" },
            "S": { "item": "gobber2:gobber2_rod_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_shovel_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "S": { "item": "gobber2:gobber2_rod" }	
        },
        result: {
            "item": "gobber2:gobber2_hoe",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" },
            "S": { "item": "gobber2:gobber2_rod_end" }	
        },
        result: {
            "item": "gobber2:gobber2_hoe_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "II ",
            " S ",
            " S "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" },
            "S": { "item": "gobber2:gobber2_rod_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_hoe_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "BCA",
            " D ",
            " D "
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_pickaxe"
            },
            
            "B":
            {
                "item": "gobber2:gobber2_axe"
            },
                    
            "C":
            {
                "item": "gobber2:gobber2_shovel"
            },      
            "D":
            {
                "item": "gobber2:gobber2_rod"
            }
        },
        result: {
            "item": "gobber2:gobber2_paxel",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "BCA",
            " D ",
            " D "
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_pickaxe_end"
            },
            
            "B":
            {
                "item": "gobber2:gobber2_axe_end"
            },
                    
            "C":
            {
                "item": "gobber2:gobber2_shovel_end"
            },      
            "D":
            {
                "item": "gobber2:gobber2_rod_end"
            }
        },
        result: {
            "item": "gobber2:gobber2_paxel_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "BCA",
            " D ",
            " D "
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_pickaxe_nether"
            },
            
            "B":
            {
                "item": "gobber2:gobber2_axe_nether"
            },
                    
            "C":
            {
                "item": "gobber2:gobber2_shovel_nether"
            },      
            "D":
            {
                "item": "gobber2:gobber2_rod_nether"
            }
        },
        result: {
            "item": "gobber2:gobber2_paxel_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:40, experience: 0.5,
        pattern: [
            "A  ",
            "B  ",
            "   "
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_paxel_end"
            },
            
            "B":
            {
                "item": "gobber2:gobber2_staff_stars"
            }
        },
        result: {
            "item": "gobber2:gobber2_paxel_stars",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "IEI",
            "I I",
            "   "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "E": { "item": "spectrum:pure_emerald" }	
        },
        result: {
            "item": "gobber2:gobber2_helmet",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "GGG",
            "G G",
            "   "
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_links_end"
            }
        },
        result: {
            "item": "gobber2:gobber2_helmet_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "GSG",
            "G G",
            "   "
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_ingot_nether"
            },
            "S":
            {
                "item": "minecraft:nether_star"
            }
        },
        result: {
            "item": "gobber2:gobber2_helmet_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "I I",
            "IEI",
            "III"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "E": { "item": "spectrum:pure_emerald" }	
        },
        result: {
            "item": "gobber2:gobber2_chestplate",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "G G",
            "GGG",
            "GGG"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_links_end"
            }
        },
        result: {
            "item": "gobber2:gobber2_chestplate_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "G G",
            "GSG",
            "GGG"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_ingot_nether"
            },
            "S":
            {
                "item": "minecraft:nether_star"
            }
        },
        result: {
            "item": "gobber2:gobber2_chestplate_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "IEI",
            "I I",
            "I I"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "E": { "item": "spectrum:pure_emerald" }	
        },
        result: {
            "item": "gobber2:gobber2_leggings",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "GGG",
            "G G",
            "G G"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_links_end"
            }
        },
        result: {
            "item": "gobber2:gobber2_leggings_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "GSG",
            "G G",
            "G G"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_ingot_nether"
            },
            "S":
            {
                "item": "minecraft:nether_star"
            }
        },
        result: {
            "item": "gobber2:gobber2_leggings_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 20, citrine: 20, amethyst: 20, onyx:0, moonstone:0, experience: 0.5,
        pattern: [
            "I E",
            "I I",
            "   "
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" },
            "E": { "item": "spectrum:pure_emerald" }	
        },
        result: {
            "item": "gobber2:gobber2_boots",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 60, citrine: 60, amethyst: 60, onyx: 60, moonstone:0, experience: 0.5,
        pattern: [
            "   ",
            "G G",
            "G G"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_links_end"
            }
        },
        result: {
            "item": "gobber2:gobber2_boots_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 40, citrine: 40, amethyst: 40, onyx: 20, moonstone:0, experience: 0.5,
        pattern: [
            "   ",
            "G S",
            "G G"
        ],
        keys: {
            "G":
            {
                "item": "gobber2:gobber2_ingot_nether"
            },
            "S":
            {
                "item": "minecraft:nether_star"
            }
        },
        result: {
            "item": "gobber2:gobber2_boots_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 0, citrine: 0, amethyst: 0, onyx: 20, moonstone:32, experience: 0.5,
        pattern: [
            "AAA",
            "BAB",
            "AAA"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_ring_end"
            },
            "B":
            {
                "item": "minecraft:nether_star"
            }    
        },
        result: {
            "item": "gobber2:gobber2_links_end",
            "count": 8
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, topaz: 0, citrine: 0, amethyst: 30, onyx: 24, moonstone:32, experience: 0.5,
        pattern: [
            "DAD",
            "CBC",
            "DCD"
        ],
        keys: {
            "A":
            {
                "item": "minecraft:dragon_head"
            },
            "B":
            {
                "item": "minecraft:nether_star"
            },
            "C":
            {
                "item": "gobber2:gobber2_ingot_end"
            },
            "D":
            {
                "item": "minecraft:dragon_breath"
            }
        },
        result: {
            "item": "gobber2:dragon_star",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "III",
            "III",
            "III"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot" }	
        },
        result: {
            "item": "gobber2:gobber2_block",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "III",
            "III",
            "III"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_nether" }	
        },
        result: {
            "item": "gobber2:gobber2_block_nether",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "III",
            "III",
            "III"
        ],
        keys: {
            "I": { "item": "gobber2:gobber2_ingot_end" }	
        },
        result: {
            "item": "gobber2:gobber2_block_end",
            "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "ABB",
            "BBB",
            "BBB"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_glob_end"
            },
            "B":
            {
                "item": "minecraft:glass",
                "data": 0
            }
        },
        result: {
            "item": "gobber2:gobber2_glass_end",
            "count": 16
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "ABB",
            "BBB",
            "BBB"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_glob_nether"
            },
            "B":
            {
                "item": "minecraft:glass",
                "data": 0
            }
        },
        result: {
            "item": "gobber2:gobber2_glass_nether",
            "count": 16
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2000, onyx: 0, experience: 0.5,
        pattern: [
            "ABB",
            "BBB",
            "BBB"
        ],
        keys: {
            "A":
            {
                "item": "gobber2:gobber2_glob"
            },
            "B":
            {
                "item": "minecraft:glass",
                "data": 0
            }
        },
        result: {
            "item": "gobber2:gobber2_glass",
            "count": 16
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal",
    });
    //rings

    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_ascent", "count": 1 },
            {"item": "spectrum:pure_lapis", "count": 32 },
            {"item": "spectrum:pure_emerald", "count": 32 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_above", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "minecraft:feather", "count": 8 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_ascent", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "spectrum:pure_lapis", "count": 10 },
            {"item": "botania:lens_magnet", "count": 1 },
            {"item": "spectrum:pure_redstone", "count": 10 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_attraction", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "spectrum:stardust", "count": 12 },
            {"item": "endermanoverhaul:ancient_pearl", "count": 1 },
            {"item": "endermanoverhaul:corrupted_pearl", "count": 1 },
            {"item": "endermanoverhaul:bubble_pearl", "count": 1 },
            {"item": "endermanoverhaul:summoner_pearl", "count": 1 },
            {"item": "spectrum:quitoxic_powder", "count": 10 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_void", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "minecraft:fermented_spider_eye", "count": 8 },
            {"item": "spectrum:moonstruck_nectar", "count": 1 },
            {"item": "spectrum:purple_star_candy", "count": 1 },
            {"item": "spectrum:quitoxic_powder", "count": 10 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_curing", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "spectrum:refined_azurite", "count": 8 },
            {"item": "spectrum:refined_malachite", "count": 4 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_dismissal", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "kibe:entangled_bag", "count": 1 },
            {"tag": "endrem:eyes", "count": 4 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_enderchest", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "spectrum:refined_malachite", "count": 6 },
            {"item": "mythicmetals:celestium_ingot", "count": 4 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_haste", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "spectrum:shimmerstone_gem", "count": 24 },
            {"item": "majruszsaccessories:lucky_rock", "count": 1 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_luck", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "spectrum:storm_stone", "count": 8 },
            {"tag": "c:pickaxes", "count": 1 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_miner", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "spectrum:fiery_powder", "count": 16 },
            {"item": "minecraft:magma_block", "count": 16 },
            {"item": "minecraft:magma_cream", "count": 16 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_phoenix", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "spectrum:bedrock_dust", "count": 16 },
            {"item": "spectrum:paltaeria_fragments", "count": 4 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_repair", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"tag": "minecraft:beds", "count": 4 },
            {"item": "things:recall_potion", "count": 16 },
            {"item": "minecraft:ender_pearl", "count": 8 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_return", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "spectrum:resonance_shard", "count": 8 },
            {"item": "spectrum:neolith", "count": 8 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_stealth", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "minecraft:beacon", "count": 4 },
            {"item": "spectrum:stratine_gem", "count": 4 },
            {"item": "mythicmetals:durasteel_ingot", "count": 8 },
            {"item": "minecraft:blaze_rod", "count": 16 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_strength", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "minecraft:sunflower", "count": 64 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_sunshine", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "minecraft:rabbit_foot", "count": 4 },
            {"item": "minecraft:phantom_membrane", "count": 32 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_swiftness", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "things:displacement_page", "count": 1 },
            {"item": "kubejs:star_core", "count": 12 },
            {"item": "bosses_of_mass_destruction:charged_ender_pearl", "count": 1 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_teleport", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "gobber2:gobber2_leggings_end", "count": 1 },
            {"item": "gobber2:gobber2_ring_ascent", "count": 1 },
            {"item": "gobber2:gobber2_ring_blink", "count": 1 },
            {"item": "gobber2:gobber2_ring_swiftness", "count": 1 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_traveler", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_nether", "count": 1 },
            {"item": "minecraft:feather", "count": 32 },
            {"item": "minecraft:ghast_tear", "count": 12 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_airwalking", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring", "count": 1 },
            {"item": "spectrum:vegetal", "count": 12 },
            {"item": "mythicmetals:prometheum_ingot", "count": 6 },
            {"item": "mysticalagriculture:mystical_fertilizer", "count": 16 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_farmer", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
    customeFusionShrineCraft(event, {
        time: 600, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "gobber2:gobber2_ring_end", "count": 1 },
            {"item": "minecraft:ender_pearl", "count": 10 },
            {"item": "minecraft:rabbit_foot", "count": 6 },
            {"item": "spectrum:storm_stone", "count": 16 },
            {"item": "spectrum:bismuth_crystal", "count": 4 }
        ],
        result: {
            "item": "gobber2:gobber2_ring_blink", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });

    customeFusionShrineCraft(event, {
        time: 1200, experience: 20.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "minecraft:dragon_head", "count": 1 },
            {"item": "minecraft:elytra", "count": 1 },
            {"item": "kibe:angel_ring", "count": 1 },
            {"item": "gobber2:gobber2_ingot_end", "count": 12 },
            {"item": "minecraft:dragon_breath", "count": 12 }
        ],
        result: {
            "item": "gobber2:dragon_elytra", "count": 1
        },
        advancement: "spectrum:lategame/craft_moonstone_pedestal"
    });
})