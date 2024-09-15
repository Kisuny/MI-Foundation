const drawers = [
    'extended_drawers:single_drawer',
    'extended_drawers:double_drawer',
    'extended_drawers:quad_drawer'
]

// const drawer_upgrades = [
//
// ]


ServerEvents.recipes(event => {
    drawers.forEach((item) => {
        event.replaceInput({id: item}, 'minecraft:chest', 'minecraft:barrel')
    })
    event.replaceInput({id: 'extended_drawers:upgrade_frame'}, 'minecraft:cobblestone', 'modern_industrialization:bronze_rod')
    event.replaceInput({id: 'extended_drawers:downgrade'}, 'minecraft:stick', 'modern_industrialization:bronze_rod')
    event.replaceInput({id: 'extended_drawers:t1_upgrade'}, 'minecraft:stick', 'modern_industrialization:bronze_rod')
    event.replaceInput({id: 'extended_drawers:t2_upgrade'}, 'minecraft:stick', 'modern_industrialization:bronze_rod')
    event.replaceInput({id: 'extended_drawers:t2_upgrade'}, 'minecraft:iron_block', 'modern_industrialization:iron_large_plate')
    event.replaceInput({id: 'extended_drawers:access_point'}, 'extended_drawers:single_drawer', 'neepmeat:router')
    event.replaceInput({id: 'extended_drawers:access_point'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate')
    event.replaceInput({id: 'extended_drawers:access_point'}, 'minecraft:cobblestone', 'modern_industrialization:copper_rod')
    event.replaceInput({id: 'extended_drawers:compacting_drawer'}, 'minecraft:cobblestone', 'modern_industrialization:iron_large_plate')
    event.replaceInput({id: 'extended_drawers:compacting_drawer'}, 'minecraft:iron_block', 'modern_industrialization:steel_packer')
    event.replaceInput({id: 'extended_drawers:compacting_drawer'}, 'minecraft:piston', 'modern_industrialization:piston')
    event.replaceInput({id: 'extended_drawers:compacting_drawer'}, 'minecraft:chest', 'minecraft:barrel')

    event.remove({id:'extended_drawers:t3_upgrade' })
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, topaz: 6, amethyst: 2, experience: 2.0,
        pattern: [
            "RRR",
            "UPU",
            "RRR"
        ],
        keys: {
            "R": { "item": 'minecraft:blaze_rod' },
            "U": { "item": 'extended_drawers:t2_upgrade' },
            "P": { "item": 'modern_industrialization:mythril_large_plate' },
        },
        result: {
            "item": 'extended_drawers:t3_upgrade',
            "count": 1
        },
        advancement: 'spectrum:midgame/build_advanced_pedestal_structure'
    });
    event.remove({id:'extended_drawers:t4_upgrade' })
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, topaz: 6, amethyst: 6, onyx: 4, experience: 2.0,
        pattern: [
            "RRR",
            "UPU",
            "RRR"
        ],
        keys: {
            "R": { "item": 'modern_industrialization:azurite_rod' },
            "U": { "item": 'extended_drawers:t3_upgrade' },
            "P": { "item": 'spectrum:neolith' },
        },
        result: {
            "item": 'extended_drawers:t4_upgrade',
            "count": 1
        },
        advancement: 'spectrum:midgame/create_refined_azurite'
    });
})
