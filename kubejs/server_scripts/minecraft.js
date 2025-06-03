//priority: 0

ServerEvents.recipes(event => {
    const removeByOutput = [
        'minecraft:furnace'
    ]
    removeByOutput.forEach(element => event.remove({ output: element }))

    const removeByID = [
        'modern_industrialization:vanilla_recipes/easy_chest',
        'mythicmetals:crafting/smithing_table_from_quadrillum',
        'simple_backpack:bundle',
        'minecraft:bread',
    ]
    removeByID.forEach(element => event.remove({ id: element }))

    event.remove({ output: 'minecraft:oak_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:spruce_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:birch_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:jungle_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:acacia_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:dark_oak_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:crimson_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:warped_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'minecraft:mangrove_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'bewitchment:juniper_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'bewitchment:elder_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'bwplus:yew_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'bewitchment:dragons_blood_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ output: 'bewitchment:cypress_planks', type: 'minecraft:crafting_shapeless' })
    event.remove({ id: 'modern_industrialization:vanilla_recipes/clay_uncrafting' })

    global.dyeColors.forEach(color => {
        event.remove({ output: `spectrum:${color.name}_planks`, type: 'minecraft:crafting_shapeless' })
    });

    // Implosion Compressor
    event.recipes.modern_industrialization.implosion_compressor(196, 10) //Eu, ticks
        .itemIn('modern_industrialization:industrial_tnt')
        .itemIn('5x minecraft:bone_block')
        .itemOut('minecraft:wither_skeleton_skull')


    // Crafting Table
    event.shapeless('2x minecraft:oak_planks', ['#minecraft:oak_logs'])
    event.shapeless('2x minecraft:spruce_planks', ['#minecraft:spruce_logs'])
    event.shapeless('2x minecraft:birch_planks', ['#minecraft:birch_logs'])
    event.shapeless('2x minecraft:jungle_planks', ['#minecraft:jungle_logs'])
    event.shapeless('2x minecraft:acacia_planks', ['#minecraft:acacia_logs'])
    event.shapeless('2x minecraft:dark_oak_planks', ['#minecraft:dark_oak_logs'])
    event.shapeless('2x minecraft:crimson_planks', ['#minecraft:crimson_stems'])
    event.shapeless('2x minecraft:warped_planks', ['#minecraft:warped_stems'])
    event.shapeless('2x minecraft:mangrove_planks', ['minecraft:mangrove_log'])
    event.shapeless('2x bewitchment:juniper_planks', ['#bewitchment:juniper_logs'])
    event.shapeless('2x bewitchment:elder_planks', ['#bewitchment:elder_logs'])
    event.shapeless('2x bewitchment:dragons_blood_planks', ['#bewitchment:dragons_blood_logs'])
    event.shapeless('2x bwplus:yew_planks', ['#bwplus:yew_logs'])
    event.shapeless('2x bewitchment:cypress_planks', ['#bewitchment:cypress_logs'])

    global.dyeColors.forEach(color => {
        event.shapeless(`2x spectrum:${color.name}_planks`, [`#spectrum:${color.name}_logs`])
    });

    event.remove({ id: 'minecraft:ender_chest' })
    event.shaped('minecraft:ender_chest', [
        'PRP',
        'PEP',
        'PPP'
    ], {
        P: 'modern_industrialization:compactium_plate',
        E: 'minecraft:ender_eye',
        R: 'ae2:wireless_receiver'
    })

    event.remove({ id: 'minecraft:stick' })
    event.shaped('2x minecraft:stick', [
        'S  ',
        'S  ',
        '   '
    ], {
        S: '#minecraft:planks'
    })
    event.remove({ id: 'minecraft:activator_rail' })
    event.shaped('6x minecraft:activator_rail', [
        'IWI',
        'PRP',
        'IWI'
    ], {
        I: 'modern_industrialization:iron_rod',
        P: 'modern_industrialization:iron_plate',
        R: 'wiredredstone:red_alloy_wire',
        W: '#minecraft:planks'
    })


    event.remove({ id: 'minecraft:detector_rail' })
    event.shaped('6x minecraft:detector_rail', [
        'ISI',
        'PWP',
        'IRI'
    ], {
        I: 'modern_industrialization:iron_rod',
        P: 'modern_industrialization:iron_plate',
        W: '#minecraft:planks',
        R: 'minecraft:redstone',
        S: 'minecraft:stone_pressure_plate'
    })

    event.remove({ id: 'minecraft:powered_rail' })
    event.shaped('6x minecraft:powered_rail', [
        'RTR',
        'PWP',
        'RTR'
    ], {
        R: 'modern_industrialization:gold_rod',
        P: 'modern_industrialization:iron_plate',
        W: '#minecraft:planks',
        T: 'wiredredstone:red_alloy_wire'
    })

    event.remove({ id: 'minecraft:rail' })
    event.shaped('8x minecraft:rail', [
        'R R',
        'PWP',
        'R R'
    ], {
        R: 'modern_industrialization:iron_rod',
        P: 'modern_industrialization:iron_plate',
        W: '#minecraft:planks'
    })

    event.remove({ id: 'minecraft:shield' })
    event.shaped('minecraft:shield', [
        'PWP',
        'PWP',
        'PWP'
    ], {
        P: 'modern_industrialization:iron_plate',
        W: '#minecraft:planks'
    })

    event.remove({ id: 'minecraft:smithing_table' })
    event.shaped('minecraft:smithing_table', [
        'PWP',
        'WAW',
        'PWP'
    ], {
        P: 'modern_industrialization:iron_plate',
        A: 'minecraft:anvil',
        W: '#minecraft:planks'
    })

    event.remove({ id: 'minecraft:stonecutter' })
    event.shaped('minecraft:stonecutter', [
        ' P ',
        'WSW',
        'SSS'
    ], {
        P: 'modern_industrialization:iron_plate',
        W: '#minecraft:planks',
        S: 'minecraft:smooth_stone_slab'
    })
    event.remove({ id: 'minecraft:tripwire_hook' })
    event.shaped('2x minecraft:tripwire_hook', [
        ' R ',
        ' S ',
        ' W '
    ], {
        R: 'modern_industrialization:iron_ring',
        S: 'minecraft:stick',
        W: '#minecraft:planks'
    })
    event.remove({ id: 'minecraft:cauldron' })
    event.shaped('minecraft:cauldron', [
        'P P',
        'P P',
        'PPP'
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:clock' })
    event.shaped('minecraft:clock', [
        ' C ',
        'CRC',
        ' C '
    ], {
        C: 'modern_industrialization:gold_curved_plate',
        R: 'minecraft:redstone'
    })

    event.remove({ id: 'minecraft:compass' })
    event.shaped('minecraft:compass', [
        ' P ',
        'PRP',
        ' P '
    ], {
        P: 'modern_industrialization:iron_plate',
        R: 'minecraft:redstone'
    })

    event.remove({ id: 'minecraft:crafting_table' })
    event.shaped('minecraft:crafting_table', [
        'FF ',
        'LL ',
        '   '
    ], {
        L: '#minecraft:logs_that_burn',
        F: 'minecraft:flint'
    })

    event.remove({ id: 'minecraft:minecart' })
    event.shaped('minecraft:minecart', [
        '   ',
        'P P',
        'PPP'
    ], {
        P: 'modern_industrialization:iron_plate'
    })


    event.remove({ id: 'minecraft:iron_trapdoor' })
    event.shaped('minecraft:iron_trapdoor', [
        'PPP',
        'PPP',
        '   '
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_sword' })
    event.shaped('minecraft:iron_sword', [
        ' P ',
        ' P ',
        ' S '
    ], {
        P: 'modern_industrialization:iron_plate',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:iron_shovel' })
    event.shaped('minecraft:iron_shovel', [
        ' P ',
        ' S ',
        ' S '
    ], {
        S: 'minecraft:stick',
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_leggings' })
    event.shaped('minecraft:iron_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_hoe' })
    event.shaped('minecraft:iron_hoe', [
        'PI ',
        ' S ',
        ' S '
    ], {
        P: 'modern_industrialization:iron_plate',
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:iron_helmet' })
    event.shaped('minecraft:iron_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_door' })
    event.shaped('minecraft:iron_door', [
        'PP ',
        'PP ',
        'PP '
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_chestplate' })
    event.shaped('minecraft:iron_chestplate', [
        'P P',
        'PLP',
        'PLP'
    ], {
        P: 'modern_industrialization:iron_plate',
        L: 'modern_industrialization:iron_large_plate'
    })

    event.remove({ id: 'minecraft:iron_boots' })
    event.shaped('minecraft:iron_boots', [
        'P P',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:iron_bars' })
    event.shaped('16x minecraft:iron_bars', [
        'RRR',
        'RRR',
        '   '
    ], {
        R: 'modern_industrialization:iron_rod'
    })

    event.remove({ id: 'minecraft:iron_axe' })
    event.shaped('minecraft:iron_axe', [
        'PI ',
        'PS ',
        ' S '
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick',
        P: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'minecraft:hopper' })
    event.shaped('minecraft:hopper', [
        'P P',
        'PCP',
        ' P '
    ], {
        P: 'modern_industrialization:iron_plate',
        C: 'minecraft:chest'
    })

    event.remove({ id: 'minecraft:golden_sword' })
    event.shaped('minecraft:golden_sword', [
        ' P ',
        ' I ',
        ' S '
    ], {
        P: 'modern_industrialization:gold_plate',
        I: 'minecraft:gold_ingot',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:golden_shovel' })
    event.shaped('minecraft:golden_shovel', [
        ' P ',
        ' S ',
        ' S '
    ], {
        P: 'modern_industrialization:gold_plate',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:golden_pickaxe' })
    event.shaped('minecraft:golden_pickaxe', [
        'PPI',
        ' S ',
        ' S '
    ], {
        S: 'minecraft:stick',
        P: 'modern_industrialization:gold_plate',
        I: 'minecraft:gold_ingot'
    })

    event.remove({ id: 'minecraft:golden_leggings' })
    event.shaped('minecraft:golden_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'modern_industrialization:gold_plate'
    })

    event.remove({ id: 'minecraft:golden_hoe' })
    event.shaped('minecraft:golden_hoe', [
        'PI ',
        ' S ',
        ' S '
    ], {
        I: 'minecraft:gold_ingot',
        P: 'modern_industrialization:gold_plate',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:golden_helmet' })
    event.shaped('minecraft:golden_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:gold_plate'
    })

    event.remove({ id: 'minecraft:golden_chestplate' })
    event.shaped('minecraft:golden_chestplate', [
        'P P',
        'PLP',
        'PLP'
    ], {
        P: 'modern_industrialization:gold_plate',
        L: 'modern_industrialization:gold_large_plate'
    })

    event.remove({ id: 'minecraft:golden_boots' })
    event.shaped('minecraft:golden_boots', [
        'P P',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:gold_plate'
    })

    event.remove({ id: 'minecraft:golden_axe' })
    event.shaped('minecraft:golden_axe', [
        'PI ',
        'PS ',
        ' S '
    ], {
        P: 'modern_industrialization:gold_plate',
        I: 'minecraft:gold_ingot',
        S: 'minecraft:stick'
    })

    event.shaped('minecraft:furnace', [
        'CCC',
        'CFC',
        'CCC'
    ], {
        C: '#c:cobblestone',
        F: 'minecraft:campfire'
    })

    event.remove({ id: 'minecraft:flint_and_steel' })
    event.shaped('minecraft:flint_and_steel', [
        'S  ',
        ' F ',
        '   '
    ], {
        S: 'modern_industrialization:steel_rod',
        F: 'minecraft:flint'
    })

    event.remove({ id: 'minecraft:enchanting_table' })
    event.shaped('minecraft:enchanting_table', [
        ' B ',
        'DOD',
        'OCO'
    ], {
        B: 'minecraft:book',
        C: 'minecraft:crying_obsidian',
        O: 'minecraft:obsidian',
        D: 'modern_industrialization:diamond_plate'
    })

    event.remove({ id: 'minecraft:diamond_sword' })
    event.shaped('minecraft:diamond_sword', [
        ' P ',
        ' D ',
        ' S '
    ], {
        P: 'modern_industrialization:diamond_plate',
        D: 'minecraft:diamond',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:diamond_shovel' })
    event.shaped('minecraft:diamond_shovel', [
        ' P ',
        ' S ',
        ' S '
    ], {
        P: 'modern_industrialization:diamond_plate',
        S: 'minecraft:stick',
    })

    event.remove({ id: 'minecraft:diamond_pickaxe' })
    event.shaped('minecraft:diamond_pickaxe', [
        'PPD',
        ' S ',
        ' S '
    ], {
        P: 'modern_industrialization:diamond_plate',
        D: 'minecraft:diamond',
        S: 'minecraft:stick'
    })

    event.remove({ id: 'minecraft:diamond_leggings' })
    event.shaped('minecraft:diamond_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'modern_industrialization:diamond_plate'
    })
    event.remove({ id: 'minecraft:diamond_hoe' })
    event.shaped('minecraft:diamond_hoe', [
        'PD ',
        ' S ',
        ' S '
    ], {
        S: 'minecraft:stick',
        P: 'modern_industrialization:diamond_plate',
        D: 'minecraft:diamond'
    })

    event.remove({ id: 'minecraft:diamond_helmet' })
    event.shaped('minecraft:diamond_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:diamond_plate'
    })

    event.remove({ id: 'minecraft:diamond_chestplate' })
    event.shaped('minecraft:diamond_chestplate', [
        'P P',
        'PLP',
        'PLP'
    ], {
        P: 'modern_industrialization:diamond_plate',
        L: 'modern_industrialization:diamond_large_plate'
    })

    event.remove({ id: 'minecraft:diamond_boots' })
    event.shaped('minecraft:diamond_boots', [
        'P P',
        'P P',
        '   '
    ], {
        P: 'modern_industrialization:diamond_plate'
    })

    event.remove({ id: 'minecraft:diamond_axe' })
    event.shaped('minecraft:diamond_axe', [
        'PD ',
        'PS ',
        ' S '
    ], {
        P: 'modern_industrialization:diamond_plate',
        S: 'minecraft:stick',
        D: 'minecraft:diamond'
    })

    event.remove({ id: 'minecraft:crossbow' })
    event.shaped('minecraft:crossbow', [
        'TIT',
        'SBS',
        ' C '
    ], {
        I: 'modern_industrialization:iron_bolt',
        B: 'minecraft:bow',
        S: 'minecraft:string',
        C: 'minecraft:stick',
        T: 'minecraft:tripwire_hook'
    })

    event.remove({ id: 'minecraft:bucket' })
    event.shaped('minecraft:bucket', [
        'I I',
        ' I ',
        '   '
    ], {
        I: 'modern_industrialization:iron_plate',
    })

    event.remove({ id: 'minecraft:brewing_stand' })
    event.shaped('minecraft:brewing_stand', [
        'BRB',
        ' Z ',
        'PPP'
    ], {
        B: 'modern_industrialization:steel_bolt',
        R: 'modern_industrialization:steel_ring',
        Z: 'minecraft:blaze_rod',
        P: 'modern_industrialization:steel_plate'
    })

    event.remove({ id: 'minecraft:blast_furnace' })
    event.shaped('minecraft:blast_furnace', [
        'PPP',
        'PFP',
        'SSS'
    ], {
        P: 'modern_industrialization:iron_plate',
        F: 'minecraft:furnace',
        S: 'minecraft:smooth_stone'
    })

    event.remove({ id: 'minecraft:iron_pickaxe' })
    event.shaped('minecraft:iron_pickaxe', [
        'PPI',
        ' S ',
        ' S '
    ], {
        P: 'modern_industrialization:iron_plate',
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    })
    event.remove({ id: 'minecraft:shears' })
    event.shaped('minecraft:shears', [
        'P  ',
        ' P ',
        '   '
    ], {
        P: 'modern_industrialization:iron_plate',
    })
    event.shaped('minecraft:bundle', [
        ' I ',
        'P P',
        ' P '
    ], {
        P: 'minecraft:leather',
        I: 'minecraft:string',
    })

    // Bottler
})
