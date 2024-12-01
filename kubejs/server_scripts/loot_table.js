LootJS.modifiers((event) => {
    const structuresLootTable = {
        common: [
            /.*:chests\/village\/.*/,
            /.*:village\/.*/,
            /ad_astra:chests\/.*/,
            /spectrum:chests\/.*/,
            /dungeons_arise:chests\/.*/,
            /dungeons_arise_seven_seas:chests\/.*/,
            'minecraft:chests/shipwreck_supply',
            'artifacts:chests/campsite_barrel',
            'artifacts:chests/campsite_chest',
            'terralith:ruin/glacial/junk',
            'terralith:spire/common',
            'terralith:spire/junk',
            /mvs:.*/,
            /kaisyn:.*/,
            /the_bumblezone:structures\/.*/,
            'friendsandfoes:barrels/illusioner_shack_attic'
        ],
        rare: [
            /.*:chests\/stronghold_.*/,
            /.*:chests\/underwater_ruin_.*/,
            /dungeons_arise:chests.*treasure/,
            'minecraft:chests/ruined_portal',
            'minecraft:chests/shipwreck_treasure',
            'minecraft:chests/ancient_city',
            'minecraft:chests/bastion_other',
            'minecraft:chests/bastion_bridge',
            'minecraft:chests/igloo_chest',
            'minecraft:chests/nether_bridge',
            'minecraft:chests/simple_dungeon',
            'terralith:ruin/glacial/main_cs',
            'terralith:spire/rare',
            'terralith:underground/chest',
            'mvs:cartographer_tower',
            'mvs:cathedral_rare',
            'mvs:houses_rare',
            'mvs:large_carts',
            'mvs:large_carts_2',
            'mvs:jungle_tower',
            'mvs:rare',
            'dungeons_arise:chests/abandoned_temple/abandoned_temple_map',
            'dungeons_arise:chests/aviary/aviary_normal',
            'ad_astra:chests/temple/mars/temple',
            'dungeons_arise_seven_seas:chests/corsair_corvette/corsair_corvette_treasure',
            'dungeons_arise_seven_seas:chests/small_yacht/small_yacht_treasure',
            'dungeons_arise_seven_seas:chests/unicorn_galleon/unicorn_galleon_treasure',
            /probablychests:chests\/.*_pc_.*/,
            'friendsandfoes:barrels/illusioner_shack_basement'
        ],
        epic: [
            'minecraft:chests/abandoned_mineshaft',
            'minecraft:chests/buried_treasure',
            'minecraft:chests/pillager_outpost',
            'minecraft:chests/jungle_temple',
            'minecraft:chests/desert_pyramid',
            'minecraft:chests/woodland_mansion',
            'minecraft:chests/bastion_treasure',
            'minecraft:chests/end_city_treasure',
            'terralith:spire/treasure',
            'mvs:crystal',
            'probablychests:chests/gold_pc_chests',
            'dungeons_arise:chests/abandoned_temple/abandoned_temple_top',
            'dungeons_arise:chests/aviary/aviary_treasure',
            'dungeons_arise:chests/shiraz_palace/shiraz_palace_treasure',
            'dungeons_arise_seven_seas:chests/pirate_junk/pirate_junk_treasure',
            'dungeons_arise_seven_seas:chests/victory_frigate/victory_frigate_treasure',
            'dungeons_arise:chests/bandit_towers/bandit_towers_treasure',
            'friendsandfoes:chests/illusioner_shack',
            'artifacts:entities/mimic',
            'rottencreatures:entities/dead_beard',
            'rottencreatures:entities/immortal'
        ],
        mines_pools: [
            /dungeons_arise:chests\/mushroom_mines\/mushroom_mines_.*/,
            /dungeons_arise:chests\/scorched_mines\/scorched_mines_.*/,
            /dungeons_arise:chests\/mines_treasure_.*/,
            /probablychests:chests\/.*_pc_.*/,
            'minecraft:chests/village/village_weaponsmith',
            'minecraft:chests/village/village_toolsmith',
            'minecraft:chests/village/village_armorer',
        ]
    }

    const commonArtifacts = [
        'artifacts:pocket_piston',
        'artifacts:helium_flamingo',
        'artifacts:charm_of_sinking',
        'artifacts:obsidian_skull',
        'artifacts:thorn_pendant',
        'artifacts:steadfast_spikes',
        'artifacts:flame_pendant',
        'artifacts:kitty_slippers',
        'artifacts:universal_attractor',
        'artifacts:cross_necklace',
        'artifacts:power_glove',
        'artifacts:umbrella',
        'artifacts:plastic_drinking_hat',
        'artifacts:novelty_drinking_hat',
        'artifacts:scarf_of_invisibility',
        'artifacts:panic_necklace',
        'artifacts:bunny_hoppers',
        'artifacts:aqua_dashers',
        'artifacts:golden_hook',
        'artifacts:whoopee_cushion',
        'things:infernal_scepter',
        'things:socks',
        'things:rabbit_foot_charm',
        'things:luck_of_the_irish',
        'things:broken_watch',
        'things:displacement_page',
        'majruszsaccessories:discount_voucher',
        'majruszsaccessories:gambling_card',
        'majruszsaccessories:removal_card',
        'majruszsaccessories:reverse_card'
    ]

    // adding currency to table with rarity
    // Common strutures
    structuresLootTable.common.forEach(table => {
        event
        .addLootTableModifier(table)
        .pool((p) => {
            p.randomChance(0.4)
            p.addLoot('numismatic-overhaul:bronze_coin')
            p.limitCount([3, 40])
        })
        .pool((p) => {
            p.randomChance(0.1)
            p.addLoot('numismatic-overhaul:silver_coin')
        })
    });

    // Rare strutures
    structuresLootTable.rare.forEach(table => {
        event
        .addLootTableModifier(table)
        .pool((p) => {
            p.randomChance(0.6)
            p.addLoot('numismatic-overhaul:bronze_coin')
            p.limitCount([20, 70])
        })
        .pool((p) => {
            p.randomChance(0.2)
            p.addLoot('numismatic-overhaul:silver_coin')
            p.limitCount([4, 11])
        })

        event
        .addLootTableModifier(table)
        .randomChance(0.10)
        .addWeightedLoot(1, commonArtifacts)

        event
        .addLootTableModifier(table)
        .randomChance(0.4)
        .addLoot('kubejs:reforge_rune')

    });

    // Epic strutures
    structuresLootTable.epic.forEach(table => {
        event
        .addLootTableModifier(table)
        .pool((p) => {
            p.randomChance(0.6)
            p.addLoot('numismatic-overhaul:bronze_coin')
            p.limitCount([50, 100])
        })
        .pool((p) => {
            p.randomChance(0.17)
            p.addLoot('numismatic-overhaul:silver_coin')
            p.limitCount([8, 22])
        })
        .pool((p) => {
            p.randomChance(0.05)
            p.addLoot('numismatic-overhaul:gold_coin')
            p.limitCount([0, 1])
        })

        event
        .addLootTableModifier(table)
        .randomChance(0.6)
        .addLoot('kubejs:reforge_rune')
    });

    // mines
    structuresLootTable.mines_pools.forEach(table => {
        event
            .addLootTableModifier(table)
            .pool((p) => {
                p.randomChance(0.4)
                p.addWeightedLoot([1,3],
                    [
                        Item.of("mythicmetals:raw_adamantite"),
                        Item.of("mythicmetals:raw_aquarium"),
                        Item.of("mythicmetals:raw_banglum"),
                        Item.of("mythicmetals:raw_carmot"),
                        Item.of("mythicmetals:raw_kyber"),
                        Item.of("mythicmetals:raw_midas_gold"),
                        Item.of("mythicmetals:raw_mythril"),
                        Item.of("mythicmetals:raw_orichalcum"),
                        Item.of("mythicmetals:raw_palladium"),
                        Item.of("mythicmetals:raw_prometheum"),
                        Item.of("mythicmetals:raw_quadrillum"),
                        Item.of("mythicmetals:raw_runite"),
                        Item.of("mythicmetals:raw_stormyx"),
                        Item.of("mythicmetals:starrite"),
                        Item.of("mythicmetals:unobtainium").withChance(0.0001),
                        Item.of("mythicmetals:morkite")
                    ])
                p.limitCount([2, 5])
            })
    });

    // fishing from minecraft and spectrum

    const RandomBonus = Java.loadClass("net.minecraft.world.level.storage.loot.predicates.BonusLevelTableCondition");

    const condition = RandomBonus.bonusLevelFlatChance("kubejs:coins_instinct", [0, 0.15]).build();

    event
        .addLootTableModifier(["minecraft:gameplay/fishing", "spectrum:gameplay/universal_fishing"])
        .randomChance(0.3)
        .removeLoot("*")
        .addWeightedLoot([1, 1], [
            LootEntry.of('kubejs:mob_lootbag_uncommon').withWeight(70).limitCount([1, 2]),
            LootEntry.of('kubejs:food_lootbag_uncommon').withWeight(70).limitCount([1, 2]),
            LootEntry.of('kubejs:food_lootbag_rare').withWeight(50).limitCount([1, 2]),
            LootEntry.of('kubejs:magic_lootbag_uncommon').withWeight(50).limitCount([1, 2]),
            LootEntry.of('kubejs:early_lootbag_uncommon').withWeight(50).limitCount([1, 2]),
            LootEntry.of('kubejs:early_lootbag_rare').withWeight(40).limitCount([1, 2]),
            LootEntry.of('mythicmetals:aquarium_ingot').withWeight(130).limitCount([1, 4]),
            LootEntry.of('mythicmetals:banglum_ingot').withWeight(150).limitCount([1, 8]),
            LootEntry.of('mythicmetals:carmot_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:adamantite_ingot').withWeight(90).limitCount([1, 3]),
            LootEntry.of('mythicmetals:mythril_ingot').withWeight(100).limitCount([1, 3]),
            LootEntry.of('mythicmetals:orichalcum_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:palladium_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:prometheum_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:quadrillum_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:runite_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:stormyx_ingot').withWeight(120).limitCount([1, 4]),
            LootEntry.of('mythicmetals:unobtainium').withWeight(10).limitCount([1, 2]),
            LootEntry.of('mythicmetals:aquarium_pearl').withWeight(5),
            LootEntry.of('mythicmetals:banglum_chunk').withWeight(5),
            LootEntry.of('spectrum:citrine_shard').withWeight(200).limitCount([1, 16]),
            LootEntry.of('spectrum:topaz_shard').withWeight(200).limitCount([1, 16]),
            LootEntry.of('minecraft:amethyst_shard').withWeight(200).limitCount([1, 16]),
            LootEntry.of('spectrum:shimmerstone_gem').withWeight(200).limitCount([1, 8]),
            LootEntry.of('kubejs:ditcheryatina').withWeight(40),
            LootEntry.of('bwplus:soul').withWeight(40),
            LootEntry.of('probablychests:gold_key').withWeight(30),
            LootEntry.of('kubejs:kozel_dark').withWeight(20),
            LootEntry.of('simplyswords:empowered_remnant').withWeight(20),
            LootEntry.of('kubejs:tears_of_the_sea').withWeight(8),
        ])
        .addCondition(condition)
        .removeLoot('*')
        .pool((p) => {
            p.addWeightedLoot([1,1],
                [
                    LootEntry.of("numismatic-overhaul:bronze_coin").withWeight(1000).limitCount([10, 80]),
                    LootEntry.of("numismatic-overhaul:silver_coin").withWeight(200).limitCount([1, 9]),
                    LootEntry.of("numismatic-overhaul:gold_coin").withWeight(1).limitCount([1]),
                ]
            )
        })


    // removing all artifacts from loot tables
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot([/artifacts:.*/, 'neepmeat:integrator_egg'])

    event
        .addLootTableModifier('ad_astra:chests/temple/mars/temple')
        .randomChance(0.6)
        .addLoot('neepmeat:integrator_egg')



    event
        .addLootTableModifier("spectrum:chests/city_below/graveyard_bowl")
        .randomChance(0.6)
        .pool((p) => {
            p.addWeightedLoot(1, ['kubejs:fossilized_black_mystical_flower', 'kubejs:fossilized_red_mystical_flower', 'kubejs:fossilized_green_mystical_flower', 'kubejs:fossilized_brown_mystical_flower', 'kubejs:fossilized_blue_mystical_flower', 'kubejs:fossilized_purple_mystical_flower', 'kubejs:fossilized_cyan_mystical_flower', 'kubejs:fossilized_light_gray_mystical_flower', 'kubejs:fossilized_gray_mystical_flower', 'kubejs:fossilized_pink_mystical_flower', 'kubejs:fossilized_lime_mystical_flower', 'kubejs:fossilized_yellow_mystical_flower', 'kubejs:fossilized_light_blue_mystical_flower', 'kubejs:fossilized_magenta_mystical_flower', 'kubejs:fossilized_orange_mystical_flower', 'kubejs:fossilized_white_mystical_flower'])
            p.limitCount([1, 5], [5, 10])
        })

    event
        .addLootTableModifier('spectrum:chests/city_below/graveyard_bowl')
        .randomChance(0.1)
        .addLoot('kubejs:empty_beehive')

    event
        .addLootTableModifier("artifacts:entities/mimic")
        .removeLoot(/artifacts:.*/)

    event
        .addLootTableModifier("whisperwoods:entities/zotzpyre")
        .addWeightedLoot([1,3], 'kubejs:zotzpyre_flesh')
        .randomChance(0.5)
        .addLoot('kubejs:zotzpyre_fang')


        structuresLootTable.rare.forEach(table => {
            event
            .addLootTableModifier(table)
            .randomChance(0.10)
            .addWeightedLoot(1, commonArtifacts)
        });
    // artifacts for the bumblezone
    event
        .addLootTableModifier(/the_bumblezone:structures\/.*/)
        .randomChance(0.20)
        .addWeightedLoot(1, commonArtifacts)

        structuresLootTable.epic.forEach(table => {
            event
            .addLootTableModifier(table)
            .randomChance(0.20)
            .addWeightedLoot(1, commonArtifacts)
        });
    
    
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot(/travelersbackpack:.*/)

    event
        .addLootTableModifier('minecraft:chests/village/village_butcher')
        .randomChance(0.01)
        .addLoot('artifacts:everlasting_beef')

    event
        .addLootTableModifier('minecraft:chests/village/village_cartographer', 'friendsandfoes:chests/illusioner_shack',)
        .randomChance(0.01)
        .addLoot('endrem:cryptic_eye')

    event
        .addLootTableModifier('minecraft:chests/village/village_temple')
        .randomChance(0.01)
        .addLoot('endrem:evil_eye')

    event
        .addLootTableModifier(['bosses_of_mass_destruction:chests/lich_tower', 'terralith:spire/treasure', 'friendsandfoes:barrels/iceologer_cabin', 'friendsandfoes:chests/iceologer_cabin'])
        .randomChance(0.8)
        .addLoot('endrem:cold_eye')

    //creeperoverhaul custome loot
    event
    .addLootTableModifier('creeperoverhaul:entities/ocean_creeper', 'endermanoverhaul:entities/ocean_enderman')
    .randomChance(0.5)
    .addWeightedLoot([1,5], 'mythicmetals:raw_aquarium')
    .randomChance(0.01)
    .removeLoot('*')
    .addLoot('mythicmetals:aquarium_pearl')
    .randomChance(0.7)
    .removeLoot('*')
    .addLoot('artifacts:aqua_dashers')
    
    event
    .addLootTableModifier(
        'creeperoverhaul:entities/cave_creeper', 
        'endermanoverhaul:entities/cave_enderman', 
        'rottencreatures:entities/undead_miner/iron', 
        'rottencreatures:entities/undead_miner/gold',
        'rottencreatures:entities/undead_miner/diamond',
        'rottencreatures:entities/undead_miner/stone'
    )
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1,
            [
                Item.of("mythicmetals:raw_banglum"),
                Item.of("mythicmetals:morkite"),
            ])
        p.limitCount([1, 3])
    })
 
    event
    .addLootTableModifier('creeperoverhaul:entities/hills_creeper', 'endermanoverhaul:entities/windswept_hills_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_mythril")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/crimson_forest_enderman', 'creeperoverhaul:entities/dripstone_creeper')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_palladium")])
        p.limitCount([1, 3])
})
    event
    .addLootTableModifier('endermanoverhaul:entities/warped_forest_enderman', 'endermanoverhaul:entities/dark_oak_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_midas_gold")])
        p.limitCount([1, 3])
    })

    event
    .addLootTableModifier('endermanoverhaul:entities/soulsand_valley_enderman', 'endermanoverhaul:entities/savanna_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_stormyx")])
        p.limitCount([1, 3])
    })
    
    event
    .addLootTableModifier('endermanoverhaul:entities/end_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:unobtainium")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/end_islands_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:starrite")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/mushroom_fields_enderman', 'creeperoverhaul:entities/mushroom_creeper')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_adamantite")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/crimson_forest_enderman', 'mythicmetals:raw_prometheum')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_prometheum")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/flower_fields_enderman', 'creeperoverhaul:entities/bamboo_creeper', 'creeperoverhaul:entities/jungle_creeper')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_orichalcum")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/snowy_enderman', 'creeperoverhaul:entities/snowy_creeper')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_kyber")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/ice_spikes_enderman')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_runite")])
        p.limitCount([1, 3])
    })
    event
    .addLootTableModifier('endermanoverhaul:entities/swamp_enderman', 'creeperoverhaul:entities/swamp_creeper')
    .pool((p) => {
        p.randomChance(0.5)
        p.addWeightedLoot(1, [Item.of("mythicmetals:raw_quadrillum")])
        p.limitCount([1, 3])
    })

})
