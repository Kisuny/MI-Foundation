//priority: 0

ServerEvents.tags('item', event => {
    const pedestal_basic = [
        'spectrum:pedestal_basic_topaz',
        'spectrum:pedestal_basic_citrine',
        'spectrum:pedestal_basic_amethyst',
    ]
    const basic_gemstone_shards = [
        'spectrum:topaz_shard',
        'spectrum:citrine_shard',
        'minecraft:amethyst_shard',
    ]
    const basic_gemstone_powders = [
        'spectrum:topaz_powder',
        'spectrum:amethyst_powder',
        'spectrum:citrine_powder',
    ]
    const polished_gemstone_block = [
        'spectrum:topaz_storage_block',
        'spectrum:amethyst_storage_block',
        'spectrum:citrine_storage_block',
        'spectrum:onyx_storage_block',
    ]
    const notched_polished_block = [
        'spectrum:notched_polished_basalt',
        'spectrum:notched_polished_calcite',
    ]
    const gemstone_lamp = [
        'spectrum:topaz_calcite_lamp',
        'spectrum:amethyst_calcite_lamp',
        'spectrum:citrine_calcite_lamp',
        'spectrum:onyx_calcite_lamp',
        'spectrum:topaz_basalt_lamp',
        'spectrum:amethyst_basalt_lamp',
        'spectrum:citrine_basalt_lamp',
        'spectrum:onyx_basalt_lamp',
    ]
    const phantom_frame = [
        'spectrum:phantom_frame',
        'spectrum:glow_phantom_frame',
    ]
    const colored_lamp = [
        'spectrum:orange_lamp',
        'spectrum:magenta_lamp',
        'spectrum:yellow_lamp',
        'spectrum:lime_lamp',
        'spectrum:pink_lamp',
        'spectrum:cyan_lamp',
        'spectrum:purple_lamp',
        'spectrum:blue_lamp',
        'spectrum:brown_lamp',
        'spectrum:green_lamp',
        'spectrum:black_lamp',
        'spectrum:red_lamp',
    ]
    const colored_spore_blossom = [
        'spectrum:orange_spore_blossom',
        'spectrum:magenta_spore_blossom',
        'spectrum:light_blue_spore_blossom',
        'spectrum:yellow_spore_blossom',
        'spectrum:lime_spore_blossom',
        'spectrum:pink_spore_blossom',
        'spectrum:cyan_spore_blossom',
        'spectrum:purple_spore_blossom',
        'spectrum:blue_spore_blossom',
        'spectrum:brown_spore_blossom',
        'spectrum:green_spore_blossom',
        'spectrum:red_spore_blossom',
        'spectrum:black_spore_blossom',
    ]
    const colored_glowblock = [
        'spectrum:orange_glowblock',
        'spectrum:magenta_glowblock',
        'spectrum:light_blue_glowblock',
        'spectrum:yellow_glowblock',
        'spectrum:lime_glowblock',
        'spectrum:pink_glowblock',
        'spectrum:cyan_glowblock',
        'spectrum:purple_glowblock',
        'spectrum:blue_glowblock',
        'spectrum:brown_glowblock',
        'spectrum:green_glowblock',
        'spectrum:red_glowblock',
        'spectrum:black_glowblock',
    ]
    const fusion_shrine = [
        'spectrum:fusion_shrine_basalt',
        'spectrum:fusion_shrine_calcite',
    ]
    const polished_slabs = [
        'spectrum:polished_calcite_slab',
        'spectrum:polished_basalt_slab',
    ]
    const chiseled_gemstone_block = [
        'spectrum:topaz_chiseled_basalt',
        'spectrum:amethyst_chiseled_basalt',
        'spectrum:citrine_chiseled_basalt',
        'spectrum:onyx_chiseled_basalt',
        'spectrum:topaz_chiseled_calcite',
        'spectrum:amethyst_chiseled_calcite',
        'spectrum:citrine_chiseled_calcite',
        'spectrum:onyx_chiseled_calcite',
    ]
    const item_bowl = [
        'spectrum:item_bowl_calcite',
        'spectrum:item_bowl_basalt',
    ]
    const azure_dike_trinkets = [
        'spectrum:puff_circconst',
        'spectrum:azure_dike_belt',
        'spectrum:azure_dike_ring',
        'spectrum:shieldgrasp_amuconst',
    ]
    const onyx_chiseled_block = [
        'spectrum:onyx_chiseled_basalt',
        'spectrum:onyx_chiseled_calcite',
    ]

    // TODO: rework with «for» or «foreach»

    pedestal_basic.forEach(item => event.add('mif:pedestal_basic', item));
    basic_gemstone_shards.forEach(item => event.add('mif:basic_gemstone_shards', item));
    basic_gemstone_powders.forEach(item => event.add('mif:basic_gemstone_powders', item));
    polished_gemstone_block.forEach(item => event.add('mif:polished_gemstone_block', item));
    notched_polished_block.forEach(item => event.add('mif:notched_polished_block', item));
    gemstone_lamp.forEach(item => event.add('mif:gemstone_lamp', item));
    phantom_frame.forEach(item => event.add('mif:phantom_frame', item));
    colored_lamp.forEach(item => event.add('mif:colored_lamp', item));
    colored_spore_blossom.forEach(item => event.add('mif:colored_spore_blossom', item));
    colored_glowblock.forEach(item => event.add('mif:colored_glowblock', item));
    fusion_shrine.forEach(item => event.add('mif:fusion_shrine', item));
    polished_slabs.forEach(item => event.add('mif:polished_slabs', item));
    chiseled_gemstone_block.forEach(item => event.add('mif:chiseled_gemstone_block', item));
    item_bowl.forEach(item => event.add('mif:item_bowl', item));
    azure_dike_trinkets.forEach(item => event.add('mif:azure_dike_trinkets', item));
    onyx_chiseled_block.forEach(item => event.add('mif:onyx_chiseled_block', item));

    event.add('spectrum:calcites', 'minecraft:calcite');
    event.add('spectrum:basalts', 'minecraft:basalt');
});


ServerEvents.tags('block', event => {
    event.add('spectrum:crystal_apothecary_harvestable', 'kubejs:terrasteel_cluster')
});