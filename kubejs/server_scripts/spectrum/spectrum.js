//priority: 0

ServerEvents.recipes(event => {
    const removeMeDaddyPls = [
        'spectrum:pedestal/tier1/vanilla/bundle',
        'spectrum:pedestal/tier2/multitool',
        'spectrum:pedestal/tier1/tools/razor_falchion',
        'spectrum:pedestal/tier1/tools/razor_falchion',
        'spectrum:fusion_shrine/bedrock/bedrock_helmet',
        'spectrum:fusion_shrine/bedrock/bedrock_chestplate',
        'spectrum:fusion_shrine/bedrock/bedrock_leggings',
        'spectrum:fusion_shrine/bedrock/bedrock_boots',
    ];

    const removeByOutput = [
        'spectrum:pedestal_basic_amethyst',
        'spectrum:pedestal_basic_topaz',
        'spectrum:pedestal_basic_citrine',
        'spectrum:block_placer',
        'spectrum:oblivion_pickaxe',
        'spectrum:redstone_timer',
        'spectrum:lucky_pickaxe',
        'spectrum:titration_barrel',
        'spectrum:crescent_clock',
        'spectrum:redstone_wireless',
        'spectrum:redstone_calculator',
        'spectrum:molten_rod',
        'spectrum:radiance_staff',
        'spectrum:bottomless_bundle',
        'spectrum:compacting_chest',
        'spectrum:private_chest',
        'spectrum:fusion_shrine_basalt',
        'spectrum:fusion_shrine_calcite',
        'spectrum:crafting_tablet',
        'spectrum:constructors_staff',
        'spectrum:color_picker',
        'spectrum:natures_staff',
        'spectrum:restocking_chest',
        'spectrum:upgrade_speed',
        'spectrum:upgrade_speed2',
        'spectrum:black_hole_chest',
        'spectrum:stratine_gem',
        'spectrum:block_flooder',
        'spectrum:lagoon_rod',
        'spectrum:tender_pickaxe',
        'spectrum:liquid_crystal_bucket',
        'spectrum:fanciful_circlet',
        'spectrum:potion_workshop',
        'spectrum:enchanter',
        'spectrum:crystal_apothecary',
        'spectrum:malachite_glass_arrow',
        'spectrum:topaz_glass_arrow',
        'spectrum:amethyst_glass_arrow',
        'spectrum:citrine_glass_arrow',
        'spectrum:onyx_glass_arrow',
        'spectrum:moonstone_glass_arrow',
        'spectrum:bottle_of_decay_away',
        'spectrum:spirit_instiller',
        'spectrum:upgrade_efficiency',
        'spectrum:gilded_book',
        'spectrum:cinderhearth',
        'spectrum:knowledge_gem',
        'spectrum:paltaeria_gem',
        'spectrum:exchanging_staff',
        'spectrum:crystallarieum',
        'spectrum:block_detector',
        'spectrum:upgrade_experience',
        'spectrum:upgrade_experience2',
        'spectrum:upgrade_yield',
        'spectrum:dragonrending_pickaxe',
        'spectrum:resonant_pickaxe',
        'spectrum:block_breaker',
        'spectrum:bedrock_pickaxe',
        'spectrum:heartsingers_reward',
        'spectrum:ominous_sapling',
        'spectrum:fanciful_pendant',
        'spectrum:fanciful_belt',
        'spectrum:fanciful_gloves',
        'spectrum:enchantment_canvas',
        'spectrum:bedrock_shovel',
        'spectrum:bedrock_sword',
        'spectrum:bedrock_crossbow',
        'spectrum:bedrock_axe',
        'spectrum:bedrock_hoe',
        'spectrum:bedrock_fishing_rod',
        'spectrum:bedrock_pickaxe',
        'spectrum:bedrock_shears',
        'spectrum:bedrock_bow',
        'spectrum:circlet_of_arrogance',
        'spectrum:whispy_circlet',
        'spectrum:ashen_circlet',
        'spectrum:ring_of_pursuit',
        'spectrum:neat_ring',
        'spectrum:gloves_of_dawns_grasp',
        'spectrum:upgrade_yield2',
        'spectrum:upgrade_efficiency2',
        'spectrum:upgrade_speed3',
        'spectrum:ink_flask',
        'spectrum:perturbed_eye',
    ];

    removeMeDaddyPls.forEach(item => event.remove({ id: item }));
    removeByOutput.forEach(item => event.remove({ output: item }));

    // Gemstones macerating
    const gems = [
        'topaz',
        'citrine',
        'onyx',
        'moonstone'
    ]
    gems.forEach(gem => {
        let buds = [
            { name: `spectrum:${gem}_shard`, count: 2 },
            { name: `spectrum:small_${gem}_bud`, count: 1 },
            { name: `spectrum:medium_${gem}_bud`, count: 2 },
            { name: `spectrum:large_${gem}_bud`, count: 3 },
            { name: `spectrum:${gem}_cluster`, count: 4 },
            { name: `spectrum:${gem}_block`, count: 2 },
        ]
        buds.forEach(element => {
            event.recipes.modern_industrialization.macerator(2, 100)
                .itemIn(element.name)
                .itemOut(`${element.count}x spectrum:${gem}_powder`)
        });
    });

    let buds2 = [
        { name: `minecraft:amethyst_shard`, count: 2 },
        { name: `minecraft:small_amethyst_bud`, count: 1 },
        { name: `minecraft:medium_amethyst_bud`, count: 2 },
        { name: `minecraft:large_amethyst_bud`, count: 3 },
        { name: `minecraft:amethyst_cluster`, count: 4 },
        { name: `minecraft:amethyst_block`, count: 2 },
    ]
    buds2.forEach(element => {
        event.recipes.modern_industrialization.macerator(2, 100)
            .itemIn(element.name)
            .itemOut(`${element.count}x spectrum:amethyst_powder`)
    });
    const gemstones_macerating = (eu, duraion, itemIn, itemOut) => {
        event.recipes.modern_industrialization.macerator(eu, duraion) //Eu, ticks
            .itemIn(itemIn)
            .itemOut(itemOut);
    };

    gemstones_macerating(2, 100, '#c:ice', 'spectrum:blizzard_powder');
    gemstones_macerating(2, 100, 'ad_astra:ice_shard', '8x spectrum:blizzard_powder');
    gemstones_macerating(2, 100, 'spectrum:frostbite_crystal', '16x spectrum:blizzard_powder');
    gemstones_macerating(2, 100, 'minecraft:magma_block', 'spectrum:fiery_powder');
    gemstones_macerating(8, 100, 'spectrum:blazing_crystal', '16x spectrum:fiery_powder');
    gemstones_macerating(2, 100, 'spectrum:quitoxic_reeds', '4x spectrum:quitoxic_powder');

    event.smelting('kubejs:basalt_brick', 'kubejs:basalt_dust');
    event.smelting('kubejs:calcite_brick', 'kubejs:calcite_dust');

    event.shapeless('2x kubejs:sharped_amethyst', '2x minecraft:amethyst_shard')
    let PedestalCraft = (output, carpet, plate) => {
        event.shaped(output, [
            'CPC',
            'ATA',
            'EME'
        ], {
            P: 'modern_industrialization:calcite_plate',
            A: plate,
            C: carpet,
            T: 'minecraft:smithing_table',
            M: 'kubejs:raw_magical_steel',
            E: '#minecraft:planks',
        });
    };
    PedestalCraft('spectrum:pedestal_basic_amethyst', 'minecraft:purple_carpet', 'modern_industrialization:amethyst_plate');
    PedestalCraft('spectrum:pedestal_basic_topaz', 'minecraft:cyan_carpet', 'modern_industrialization:topaz_plate');
    PedestalCraft('spectrum:pedestal_basic_citrine', 'minecraft:yellow_carpet', 'modern_industrialization:citrine_plate');
});

LootJS.modifiers((event) => {
    let shooting_stars = [
        'fiery',
        'colorful',
        'gemstone',
        'glistering',
        'pristine',
    ];

    for (let star of shooting_stars) {
        event
            .addLootTableModifier(`spectrum:entity/shooting_star/shooting_star_${star}`)
            .randomChance(0.01)
            .addLoot('kubejs:star_core')
    };
});
