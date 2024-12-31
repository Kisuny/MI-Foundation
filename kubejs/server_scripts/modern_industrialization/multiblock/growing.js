//priority: 0

ServerEvents.recipes(event => {

    // Special
    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("minecraft:golden_carrot")
        .itemIn("botania:golden_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 600)
        .fluidIn("minecraft:water", 2000)
        .itemOut("3x minecraft:golden_carrot")
        .itemOut("modern_industrialization:gold_tiny_dust")

    event.recipes.modern_industrialization.growing_chamber(64, 2400) //Mb, ticks
        .itemIn('4x ae2:charged_certus_quartz_crystal')
        .itemIn('minecraft:sculk_catalyst', 0)
        .fluidIn('modern_industrialization:high_pressure_steam', 600)
        .fluidIn('modern_industrialization:chlorine', 1000)
        .itemOut('minecraft:echo_shard', 0.3)

    // Blood bubble
    event.recipes.modern_industrialization.growing_chamber(32, 120) //Mb, ticks
        .itemIn('neepmeat:blood_bubble_sapling',0.6)
        .itemIn('botania:mutated_grass', 0)
        .fluidIn('modern_industrialization:oxygen', 200)
        .fluidIn('minecraft:water', 1000)
        .itemOut('4x neepmeat:blood_bubble_log')
        .itemOut('16x neepmeat:blood_bubble_leaves')
        .itemOut('6x neepmeat:blood_bubble')

    // spectrum

    const noxshrooms = ['slate','ebony','ivory','chestnut']

    noxshrooms.forEach(shroom => {
        event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn(`spectrum:${shroom}_noxshroom`, 0.2)
        .itemIn("spectrum:shimmel", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("spectrum:liquid_crystal", 50)
        .itemOut(`6x spectrum:${shroom}_noxcap_stem`)
        .itemOut(`2x spectrum:${shroom}_noxcap_gills`)
        .itemOut(`12x spectrum:${shroom}_noxcap_cap`)
        .itemOut(`2x spectrum:${shroom}_noxshroom`)
    });

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn('spectrum:clover', 0.5)
        .itemIn('minecraft:dirt', 0.6)
        .fluidIn('modern_industrialization:oxygen', 200)
        .fluidIn('minecraft:water', 1000)
        .itemOut('2x spectrum:clover')
        .itemOut('spectrum:four_leaf_clover', 0.3)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn('3x spectrum:quitoxic_reeds', 0.6)
        .itemIn('minecraft:clay', 0.6)
        .fluidIn('modern_industrialization:oxygen', 200)
        .fluidIn('minecraft:water', 1000)
        .itemOut('3x spectrum:quitoxic_reeds')
        .itemOut('minecraft:mud', 0.6)

    event.recipes.modern_industrialization.growing_chamber(96, 1200) //Mb, ticks
        .itemIn('spectrum:mermaids_gem', 0.6)
        .itemIn('minecraft:gravel', 0.0)
        .fluidIn('minecraft:water', 1000)
        .fluidIn('modern_industrialization:oxygen', 200)
        .itemOut('3x spectrum:mermaids_gem')

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn('spectrum:resonant_lily', 0.6)
        .fluidIn('modern_industrialization:oxygen', 200)
        .fluidIn('spectrum:liquid_crystal', 10)
        .itemOut('3x spectrum:resonant_lily')

    event.recipes.modern_industrialization.growing_chamber(64, 2400) //Mb, ticks
        .itemIn('spectrum:resonance_shard',0.3)
        .itemIn('botania:bifrost_perm', 0.0)
        .fluidIn("modern_industrialization:high_pressure_steam", 100)
        .fluidIn('spectrum:liquid_crystal', 50)
        .itemOut('spectrum:hummingstone')
        .itemOut('spectrum:hummingstone_glass', 0.4)
        
    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn('spectrum:doombloom_seed', 0.6)
        .fluidIn('modern_industrialization:oxygen', 200)
        .fluidIn('spectrum:liquid_crystal', 10)
        .itemOut('3x spectrum:doombloom_seed')


    // Fungi
    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:crimson_fungus", 0.2)
        .itemIn("minecraft:crimson_nylium", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("modern_industrialization:nether_air", 100)
        .itemOut("6x minecraft:crimson_stem")
        .itemOut("12x minecraft:nether_wart_block")
        .itemOut("2x minecraft:shroomlight")
        .itemOut("2x minecraft:crimson_fungus")
    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:warped_fungus", 0.2)
        .itemIn("minecraft:warped_nylium", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("modern_industrialization:nether_air", 100)
        .itemOut("6x minecraft:warped_stem")
        .itemOut("12x minecraft:warped_wart_block")
        .itemOut("2x minecraft:shroomlight")
        .itemOut("2x minecraft:warped_fungus")



    // Vanilla flowers
    const vanilla = [
        'minecraft:azure_bluet',
        'minecraft:allium',
        'minecraft:blue_orchid',
        'minecraft:poppy',
        'minecraft:pink_tulip',
        'minecraft:white_tulip',
        'minecraft:orange_tulip',
        'minecraft:red_tulip',
        'minecraft:oxeye_daisy',
        'minecraft:cornflower',
        'minecraft:lily_of_the_valley',
        'minecraft:dandelion',
        'minecraft:sunflower',
        'minecraft:lilac',
        'minecraft:peony',
        'minecraft:rose_bush'
    ];

    vanilla.forEach(flower => {
        event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
            .itemIn(flower)
            .itemIn("minecraft:grass_block", 0)
            .fluidIn("modern_industrialization:oxygen", 150)
            .fluidIn("minecraft:water", 350)
            .itemOut(`4x ${flower}`)
    });

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:light_gray_mystical_flower")
        .itemIn("botania:vivid_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:light_gray_mystical_flower")
        .itemOut("botania:light_gray_petal", 0.8)
        .itemOut("minecraft:light_gray_dye", 0.4)
        .itemOut("modern_industrialization:iron_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:gray_mystical_flower")
        .itemIn("botania:scorched_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:gray_mystical_flower")
        .itemOut("botania:gray_petal", 0.8)
        .itemOut("minecraft:gray_dye", 0.4)
        .itemOut("modern_industrialization:carbon_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:cyan_mystical_flower")
        .itemIn("botania:mutated_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:cyan_mystical_flower")
        .itemOut("botania:cyan_petal", 0.8)
        .itemOut("minecraft:cyan_dye", 0.4)
        .itemOut("modern_industrialization:aluminum_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:purple_mystical_flower")
        .itemIn("botania:mutated_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:purple_mystical_flower")
        .itemOut("botania:purple_petal", 0.8)
        .itemOut("minecraft:purple_dye", 0.4)
        .itemOut("modern_industrialization:mozanite_tiny_dust", 0.05)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:green_mystical_flower")
        .itemIn("botania:vivid_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:green_mystical_flower")
        .itemOut("botania:green_petal", 0.8)
        .itemOut("minecraft:green_dye", 0.4)
        .itemOut("modern_industrialization:beryllium_tiny_dust", 0.1)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:red_mystical_flower")
        .itemIn("botania:scorched_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:red_mystical_flower")
        .itemOut("botania:red_petal", 0.8)
        .itemOut("minecraft:red_dye", 0.4)
        .itemOut("modern_industrialization:redstone_tiny_dust")

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:black_mystical_flower")
        .itemIn("botania:scorched_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:black_mystical_flower")
        .itemOut("botania:black_petal", 0.8)
        .itemOut("minecraft:black_dye", 0.4)
        .itemOut("modern_industrialization:coal_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:light_blue_mystical_flower")
        .itemIn("botania:scorched_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:light_blue_mystical_flower")
        .itemOut("botania:light_blue_petal", 0.8)
        .itemOut("minecraft:light_blue_dye", 0.4)
        .itemOut("modern_industrialization:diamond_tiny_dust", 0.15)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:lime_mystical_flower")
        .itemIn("botania:vivid_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:lime_mystical_flower")
        .itemOut("botania:lime_petal", 0.8)
        .itemOut("minecraft:lime_dye", 0.4)
        .itemOut("modern_industrialization:uranium_tiny_dust", 0.1)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:magenta_mystical_flower")
        .itemIn("botania:mutated_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:magenta_mystical_flower")
        .itemOut("botania:magenta_petal", 0.8)
        .itemOut("minecraft:magenta_dye", 0.4)
        .itemOut("modern_industrialization:titanium_tiny_dust", 0.1)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:orange_mystical_flower")
        .itemIn("botania:golden_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:orange_mystical_flower")
        .itemOut("botania:orange_petal", 0.8)
        .itemOut("minecraft:orange_dye", 0.4)
        .itemOut("modern_industrialization:desh_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:yellow_mystical_flower")
        .itemIn("botania:golden_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:yellow_mystical_flower")
        .itemOut("botania:yellow_petal", 0.8)
        .itemOut("minecraft:yellow_dye", 0.4)
        .itemOut("modern_industrialization:gold_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:blue_mystical_flower")
        .itemIn("botania:vivid_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:blue_mystical_flower")
        .itemOut("botania:blue_petal", 0.8)
        .itemOut("minecraft:blue_dye", 0.4)
        .itemOut("modern_industrialization:lapis_tiny_dust")

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:pink_mystical_flower")
        .itemIn("botania:mutated_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:pink_mystical_flower")
        .itemOut("botania:pink_petal", 0.8)
        .itemOut("minecraft:pink_dye", 0.4)
        .itemOut("modern_industrialization:chromium_tiny_dust", 0.1)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:brown_mystical_flower")
        .itemIn("botania:golden_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:brown_mystical_flower")
        .itemOut("botania:brown_petal", 0.8)
        .itemOut("minecraft:brown_dye", 0.4)
        .itemOut("modern_industrialization:bauxite_tiny_dust", 0.2)

    event.recipes.modern_industrialization.growing_chamber(64, 600) //Mb, ticks
        .itemIn("botania:white_mystical_flower")
        .itemIn("botania:golden_grass", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("3x botania:white_mystical_flower")
        .itemOut("botania:white_petal", 0.8)
        .itemOut("minecraft:white_dye", 0.4)
        .itemOut("modern_industrialization:iridium_tiny_dust", 0.01)



    global.dyeColors.forEach(color => {
        if (color.name == 'brown' | color.name == 'orange' | color.name == 'white' | color.name == 'yellow') {
            event.recipes.modern_industrialization.growing_chamber(48, 600) //Mb, ticks
                .itemIn(`spectrum:${color.name}_sapling`, 0.1)
                .itemIn("botania:golden_grass", 0)
                .fluidIn("modern_industrialization:oxygen", 200)
                .fluidIn("minecraft:water", 1000)
                .itemOut(`16x spectrum:${color.name}_leaves`)
                .itemOut(`4x spectrum:${color.name}_log`)
                .itemOut('8x minecraft:stick')
        }
        else if (color.name == 'cyan' | color.name == 'pink' | color.name == 'purple' | color.name == 'magenta') {
            event.recipes.modern_industrialization.growing_chamber(48, 600) //Mb, ticks
                .itemIn(`spectrum:${color.name}_sapling`, 0.1)
                .itemIn("botania:mutated_grass", 0)
                .fluidIn("modern_industrialization:oxygen", 200)
                .fluidIn("minecraft:water", 1000)
                .itemOut(`16x spectrum:${color.name}_leaves`)
                .itemOut(`4x spectrum:${color.name}_log`)
                .itemOut('8x minecraft:stick')
        }
        else if (color.name == 'green' | color.name == 'lime' | color.name == 'blue' | color.name == 'light_gray') {
            event.recipes.modern_industrialization.growing_chamber(48, 600) //Mb, ticks
                .itemIn(`spectrum:${color.name}_sapling`, 0.1)
                .itemIn("botania:vivid_grass", 0)
                .fluidIn("modern_industrialization:oxygen", 200)
                .fluidIn("minecraft:water", 1000)
                .itemOut(`16x spectrum:${color.name}_leaves`)
                .itemOut(`4x spectrum:${color.name}_log`)
                .itemOut('8x minecraft:stick')
        }
        else if (color.name == 'red' | color.name == 'gray' | color.name == 'light_blue' | color.name == 'black') {
            event.recipes.modern_industrialization.growing_chamber(48, 600) //Mb, ticks
                .itemIn(`spectrum:${color.name}_sapling`, 0.1)
                .itemIn("botania:scorched_grass", 0)
                .fluidIn("modern_industrialization:oxygen", 200)
                .fluidIn("minecraft:water", 1000)
                .itemOut(`16x spectrum:${color.name}_leaves`)
                .itemOut(`4x spectrum:${color.name}_log`)
                .itemOut('8x minecraft:stick')
        }
    });

    // Wood
    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:oak_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:oak_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:oak_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:spruce_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:spruce_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:spruce_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:birch_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:birch_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:birch_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:jungle_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:jungle_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:jungle_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:acacia_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:acacia_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:acacia_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:dark_oak_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x minecraft:dark_oak_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x minecraft:dark_oak_leaves")

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("architects_palette:twisted_sapling", 0.1)
        .itemIn("minecraft:podzol", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 1000)
        .itemOut("4x architects_palette:twisted_log")
        .itemOut("8x minecraft:stick")
        .itemOut("16x architects_palette:twisted_leaves")

    // Crops

    event.recipes.modern_industrialization.growing_chamber(32, 600) //Mb, ticks
        .itemIn("minecraft:nether_wart")
        .itemIn("minecraft:soul_sand", 0)
        .fluidIn("modern_industrialization:methane", 300)
        .fluidIn("modern_industrialization:sugar_solution", 700)
        .itemOut("3x minecraft:nether_wart")
        .itemOut("2x minecraft:nether_wart", 0.5)
        .itemOut("modern_industrialization:ruby_tiny_dust")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:potato")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 200)
        .fluidIn("minecraft:water", 200)
        .itemOut("4x minecraft:potato")
        .itemOut("minecraft:poisonous_potato", 0.05)

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:carrot")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 150)
        .fluidIn("minecraft:water", 350)
        .itemOut("6x minecraft:carrot")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("neepmeat:whisper_wheat_seeds")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 500)
        .itemOut("8x neepmeat:whisper_wheat")
        .itemOut("neepmeat:whisper_wheat_seeds")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:wheat_seeds")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 500)
        .itemOut("8x minecraft:wheat")
        .itemOut("minecraft:wheat_seeds")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:pumpkin_seeds")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 500)
        .itemOut("4x minecraft:pumpkin")
        .itemOut("minecraft:pumpkin_seeds")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:melon_seeds")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 500)
        .itemOut("4x minecraft:melon")
        .itemOut("minecraft:melon_seeds")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:beetroot_seeds")
        .itemIn("minecraft:dirt", 0)
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 500)
        .itemOut("6x minecraft:beetroot")
        .itemOut("minecraft:beetroot_seeds")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:cactus", 0.5)
        .itemIn("minecraft:sand", 0)
        .fluidIn("modern_industrialization:oxygen", 150)
        .fluidIn("minecraft:water", 400)
        .itemOut("4x minecraft:cactus")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:sugar_cane")
        .itemIn("minecraft:sand", 0)
        .fluidIn("modern_industrialization:oxygen", 150)
        .fluidIn("minecraft:water", 500)
        .itemOut("6x minecraft:sugar_cane")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:kelp")
        .itemIn("minecraft:sand", 0)
        .fluidIn("modern_industrialization:oxygen", 50)
        .fluidIn("minecraft:water", 1500)
        .itemOut("8x minecraft:kelp")

    event.recipes.modern_industrialization.growing_chamber(16, 300) //Mb, ticks
        .itemIn("minecraft:bamboo")
        .fluidIn("modern_industrialization:oxygen", 100)
        .fluidIn("minecraft:water", 1000)
        .itemOut("6x minecraft:bamboo")

    event.recipes.modern_industrialization.growing_chamber(16, 600) //Mb, ticks
        .itemIn("minecraft:sweet_berries")
        .fluidIn("modern_industrialization:oxygen", 150)
        .fluidIn("minecraft:water", 750)
        .itemOut("4x minecraft:sweet_berries")

});
