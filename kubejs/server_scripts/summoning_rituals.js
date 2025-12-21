ServerEvents.recipes(event => {

    customPedestalCraft(event, {
        tier: 'basic', time: 1200, amethyst: 0, citrine: 4, experience: 1.0,
        pattern: [
            "YTR",
            " E ",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "bewitchment:dragons_blood_log" },
            "W": { "item": "bewitchment:golden_witch_altar" },
            "E": { "item": "minecraft:red_carpet" },
            "R": { "item": "architects_palette:withered_osseous_skull" },
            "T": { "item": "spectrum:star_fragment" },
            "Y": { "item": "minecraft:candle" },
        },
        result: {
            "item": "summoningrituals:altar",
            "count": 1
        },
        advancement: "kubejs:bewitchment/witch_altar"
    });

    event.recipes.summoningrituals
        .altar("bewitchment:bottle_of_blood")
        .input("bewitchment:athame")
        .sacrifice('spectrum:kindling')
        .sacrificeRegion(5, 5)
        .recipeTime(600)
        .dayTime('night')
        .itemOutput("kubejs:kindling_heart")


    event.recipes.summoningrituals
        .altar("minecraft:golden_apple")
        .input("2x numismatic-overhaul:gold_coin")
        .input("minecraft:wheat_seeds")
        .recipeTime(600)
        .mobOutput("goblintraders:goblin_trader")

    event.recipes.summoningrituals
        .altar("minecraft:golden_apple")
        .input("2x numismatic-overhaul:gold_coin")
        .input("minecraft:nether_wart")
        .recipeTime(600)
        .mobOutput("goblintraders:vein_goblin_trader")

    event.recipes.summoningrituals
        .altar('minecraft:torch')
        .mobOutput(
            SummoningOutput.mob('whisperwoods:moth')
                .count(4)
                .spread(4, 0, 4)
        )
        .input('minecraft:grass')
        .input('minecraft:glowstone_dust')
        .input('spirit:compressed_soul_sand')
        .dayTime('night')

    event.recipes.summoningrituals
        .altar('bewitchment:white_coffin')
        .mobOutput(
            SummoningOutput.mob('bewitchment:vampire')
                .count(2)
                .spread(4, 0, 4)
        )
        .input('2x minecraft:golden_apple')
        .input('8x minecraft:porkchop')
        .input('12x minecraft:leather')
        .input('bwplus:gold_goblet')
        .input('2x bwplus:soul')
        .dayTime('night')

    event.recipes.summoningrituals
        .altar('spectrum:blizzard_powder')
        .mobOutput(
            SummoningOutput.mob('whisperwoods:wisp')
                .data({color_variant: 1})
                .spread(4, 0, 4)
        )
        .mobOutput(
            SummoningOutput.mob('whisperwoods:wisp')
                .data({color_variant: 2})
                .spread(4, 0, 4)
        )
        .mobOutput(
            SummoningOutput.mob('whisperwoods:wisp')
                .data({color_variant: 3})
                .spread(4, 0, 4)
        )
        .mobOutput(
            SummoningOutput.mob('whisperwoods:wisp')
                .data({color_variant: 4})
                .spread(4, 0, 4)
        )
        .mobOutput(
            SummoningOutput.mob('whisperwoods:wisp')
                .data({color_variant: 5})
                .spread(4, 0, 4)
        )
        .input('8x spirit:soul_powder')
        .input('5x minecraft:soul_sand')
        .input('minecraft:soul_campfire')
        .input('2x mythicmetals:stormyx_ingot')
        .dayTime('night')

        event.recipes.summoningrituals
        .altar('minecraft:sculk_sensor')
        .mobOutput(
            SummoningOutput.mob('spectrum:preservation_turret')
                .count(1)
                .spread(4, 0, 4)
        )
        .input('32x minecraft:calcite')
        .input('spectrum:bismuth_flake')
        .input('2x minecraft:redstone_block')
        .input('2x mythicmetals:celestium_ingot')
        .blockBelow('spectrum:dragonbone')

        event.recipes.summoningrituals
        .altar('spectrum:midnight_chip')
        .mobOutput(
            SummoningOutput.mob('spectrum:eraser')
                .count(6)
                .spread(4, 0, 4)
        )
        .input('16x minecraft:string')
        .input('6x spectrum:vegetal')
        .blockBelow('spectrum:black_materia')


    // mini-bosses
    event.recipes.summoningrituals
        .altar('bewitchment:dragons_blood_sapling')
        .mobOutput(
            SummoningOutput.mob('whisperwoods:zotzpyre')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 120, Attributes: [
                        { Name: 'generic.max_health', Base: 120 },
                        { Name: 'generic.movement_speed', Base: 0.8 },
                        { Name: 'generic.armor', Base: 16 },
                        { Name: 'generic.attack_damage', Base: 23 }

                    ]
                })
        )
        .input('12x minecraft:stone')
        .input('bewitchment:bottle_of_blood')
        .input('bwplus:soul')
        .sacrifice('bat')
        .sacrificeRegion(5, 5)
        .recipeTime(600)
        .dayTime('night');

    event.recipes.summoningrituals
        .altar('numismatic-overhaul:silver_coin')
        .mobOutput(
            SummoningOutput.mob('bewitchment:werewolf')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 80, Attributes: [
                        { Name: 'generic.max_health', Base: 80 },
                        { Name: 'generic.movement_speed', Base: 0.8 },
                        { Name: 'generic.armor', Base: 4 },
                        { Name: 'generic.attack_damage', Base: 13 }

                    ]
                })
        )
        .input('12x modern_industrialization:silver_ingot')
        .input('bewitchment:bottle_of_blood')
        .input('bwplus:soul')
        .sacrifice('wolf')
        .sacrificeRegion(5, 5)
        .recipeTime(600)
        .dayTime('night');

    event.recipes.summoningrituals
        .altar('minecraft:shield')
        .mobOutput(
            SummoningOutput.mob('adventurez:enderwarthog')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 340,  Attributes: [
                        { Name: 'generic.max_health', Base: 340 },
                        { Name: 'generic.armor', Base: 12 },
                        { Name: 'generic.attack_damage', Base: 29 }

                    ]
                })
        )
        .input('2x bewitchment:grim_elixir')
        .input('2x minecraft:ender_eye')
        .input('minecraft:shield')
        .input('4x mythicmetals:celestium_ingot')
        .input('8x spectrum:purple_pigment')
        .input('bwplus:soul')
        .recipeTime(600)
        .blockBelow('minecraft:end_stone')
        .dayTime('night');

    event.recipes.summoningrituals
        .altar('minecraft:lava_bucket')
        .mobOutput(
            SummoningOutput.mob('adventurez:blaze_guardian')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 750, Attributes: [
                        { Name: 'generic.max_health', Base: 750 },
                        { Name: 'generic.movement_speed', Base: 0.4 },
                        { Name: 'generic.armor', Base: 36 }
                    ]
                })
        )
        .input('16x minecraft:blaze_rod')
        .input('minecraft:flint_and_steel')
        .input('4x bewitchment:fiery_serum')
        .input('minecraft:shield')
        .input('bwplus:soul')
        .sacrifice('blaze')
        .sacrificeRegion(5, 5)
        .recipeTime(600)
        .dayTime('night');

    event.recipes.summoningrituals
        .altar('bewitchment:mandrake_root')
        .mobOutput(
            SummoningOutput.mob('adventurez:orc')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 250, OrkSize:5, Attributes: [
                        { Name: 'generic.max_health', Base: 250 },
                        { Name: 'generic.movement_speed', Base: 0.4 },
                        { Name: 'generic.armor', Base: 32 },
                        { Name: 'generic.attack_damage', Base: 20 }
                    ]
                })
        )
        .input('4x minecraft:leather')
        .input('8x mythicmetals:orichalcum_ingot')
        .input('16x minecraft:oxidized_copper')
        .input('bwplus:soul')
        .sacrifice('sheep')
        .sacrificeRegion(5, 5)
        .recipeTime(600)
        .dayTime('night');

    event.recipes.summoningrituals
        .altar('bwplus:yew_sapling')
        .mobOutput(
            SummoningOutput.mob('bwplus:leshon')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 250, Attributes: [
                        { Name: 'generic.max_health', Base: 200 },
                        { Name: 'generic.movement_speed', Base: 0.5 },
                        { Name: 'generic.armor', Base: 22 },
                        { Name: 'generic.attack_damage', Base: 26 }
                    ]
                })
        )
        .input('32x minecraft:bone')
        .input('kubejs:zotzpyre_fang')
        .input('2x bewitchment:demon_horn')
        .input('bwplus:soul')
        .sacrifice('bewitchment:raven')
        .sacrificeRegion(5, 5)
        .recipeTime(500)
        .blockBelow('bwplus:yew_leaves')
        .dayTime('night');


    //bosses
    event.recipes.summoningrituals
        .altar('spectrum:iron_golem_head')
        .mobOutput(
            SummoningOutput.mob('adventurez:stone_golem')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 2200, DeathLootTable: "kubejs:mobs/stone_golem", Attributes: [
                        { Name: 'generic.max_health', Base: 2200 },
                        { Name: 'generic.movement_speed', Base: 0.2 },
                        { Name: 'generic.armor', Base: 8 },
                        { Name: 'generic.attack_damage', Base: 45 }
                    ]
                })
        )
        .input('12x minecraft:blackstone')
        .input('2x minecraft:netherite_scrap')
        .input('mythicmetals:unobtainium')
        .input('bwplus:soul')
        .sacrifice('minecraft:goat')
        .sacrificeRegion(5, 5)
        .recipeTime(1000)
        .blockBelow('minecraft:chiseled_polished_blackstone')
        .dayTime('night');

        event.recipes.summoningrituals
        .altar('#whisperwoods:ghost_light')
        .mobOutput(
            SummoningOutput.mob('whisperwoods:hirschgeist')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
                .data({
                    Health: 1500, Attributes: [
                        { Name: 'generic.max_health', Base: 1500 },
                        { Name: 'generic.armor', Base: 12 },
                        { Name: 'generic.attack_damage', Base: 28 }
                    ]
                })
        )
        .input('26x spirit:soul_powder')
        .input('4x minecraft:bone_block')
        .input('4x kubejs:zotzpyre_flesh')
        .input('6x mythicmetals:hallowed_ingot')
        .input('bwplus:soul')
        .sacrifice('minecraft:goat')
        .sacrificeRegion(30, 30)
        .recipeTime(1000)
        .dayTime('night');


    // Common mobs
    const simpleSummonRecipe = (event, args) => {
        event.recipes.summoningrituals
            .altar(args.catalyst)
            .mobOutput(
                SummoningOutput.mob(args.mob)
                    .count(args.amount || 1)
                    .spread(4, 1, 4)
            )
            .input(args.input)
            .input('bwplus:soul');
    };

    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:chicken', input: '8x minecraft:wheat_seeds' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:cow', input: '8x minecraft:wheat' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:pig', input: '8x minecraft:carrot' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:sheep', input: '4x #minecraft:wool' });
    simpleSummonRecipe(event, { catalyst: 'bewitchment:belladonna', mob: 'minecraft:cat', input: '8x minecraft:string' });
    simpleSummonRecipe(event, { catalyst: '#minecraft:overworld_natural_logs', mob: 'minecraft:bee', input: '4x minecraft:honeycomb' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:horse', input: '8x minecraft:beetroot' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:snow_block', mob: 'minecraft:goat', input: '4x #minecraft:wool' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:water_bucket', mob: 'minecraft:glow_squid', input: '8x minecraft:cyan_dye' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:water_bucket', mob: 'minecraft:squid', input: '8x minecraft:black_dye' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:water_bucket', mob: 'minecraft:dolphin', input: '8x minecraft:kelp' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:water_bucket', mob: 'minecraft:axolotl', input: '8x minecraft:pink_dye' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:frog', input: '4x minecraft:slime_ball' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:grass_block', mob: 'minecraft:fox', input: '4x minecraft:sweet_berries' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:stone', mob: 'minecraft:bat', input: '4x bewitchment:garlic' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:jungle_sapling', mob: 'minecraft:parrot', input: '8x minecraft:wheat_seeds' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:jungle_sapling', mob: 'minecraft:panda', input: '8x minecraft:bamboo' });
    simpleSummonRecipe(event, { catalyst: 'kubejs:unobtainium_nugget', mob: 'minecraft:enderman', input: '12x minecraft:black_dye' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:feather', mob: 'minecraft:phantom', input: '12x minecraft:leather' });
    simpleSummonRecipe(event, { catalyst: 'architects_palette:withered_osseous_skull', mob: 'minecraft:wither_skeleton', input: '12x minecraft:bone' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:flint_and_steel', mob: 'minecraft:blaze', input: '12x minecraft:orange_dye' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:netherite_scrap', mob: 'minecraft:evoker', input: '12x minecraft:emerald' });
    simpleSummonRecipe(event, { catalyst: 'bewitchment:belladonna_seeds', mob: 'bewitchment:raven', input: '12x minecraft:feather' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:fire_charge', mob: 'minecraft:ghast', input: '12x minecraft:soul_soil' });
    simpleSummonRecipe(event, { catalyst: 'minecraft:water_bucket', mob: 'minecraft:slime', input: '12x minecraft:lily_pad', amount: 4});
    simpleSummonRecipe(event, { catalyst: 'minecraft:lava_bucket', mob: 'minecraft:magma_cube', input: '12x minecraft:magma_block', amount: 4});
    simpleSummonRecipe(event, { catalyst: 'minecraft:hay_block', mob: 'minecraft:skeleton_horse', input: '12x minecraft:bone', amount: 2});
    simpleSummonRecipe(event, { catalyst: 'minecraft:bone', mob: 'minecraft:wolf', input: '12x minecraft:snowball', amount: 1});

})
