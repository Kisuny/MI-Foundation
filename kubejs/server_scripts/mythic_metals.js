//priority: 0

// input[{}], output{}, forge tier, fuel
const alloyForgeryCraft = (event, input, output, forge_tier, fuel) => {
    event.custom({
        "type": "alloy_forgery:forging",
        "inputs": input,
        "output": output,
        "min_forge_tier": forge_tier || 1,
        "fuel_per_tick": fuel || 50
    })
};

ServerEvents.recipes(event => {
    const delete_this = [
        // Tin
        'mythicmetals:tin_ore',
        'mythicmetals:raw_tin_block',
        'mythicmetals:raw_tin',
        'mythicmetals:tin_nugget',
        'mythicmetals:tin_ingot',
        'mythicmetals:tin_block',
        'mythicmetals:tin_anvil',
        // Platinum
        'mythicmetals:platinum_ore',
        'mythicmetals:raw_platinum_block',
        'mythicmetals:raw_platinum',
        'mythicmetals:platinum_nugget',
        'mythicmetals:platinum_ingot',
        'mythicmetals:platinum_block',
        'mythicmetals:platinum_anvil',
        // Silver
        'mythicmetals:silver_ore',
        'mythicmetals:raw_silver_block',
        'mythicmetals:raw_silver',
        'mythicmetals:silver_nugget',
        'mythicmetals:silver_ingot',
        'mythicmetals:silver_block',
        'mythicmetals:silver_anvil',
        'mythicmetals:silver_boots',
        'mythicmetals:silver_leggings',
        'mythicmetals:silver_chestplate',
        'mythicmetals:silver_helmet',
        'mythicmetals:silver_sword',
        'mythicmetals:silver_axe',
        'mythicmetals:silver_pickaxe',
        'mythicmetals:silver_shovel',
        'mythicmetals:silver_hoe',
        // Manganese
        'mythicmetals:manganese_ore',
        'mythicmetals:raw_manganese_block',
        'mythicmetals:raw_manganese',
        'mythicmetals:manganese_nugget',
        'mythicmetals:manganese_ingot',
        'mythicmetals:manganese_block',
        'mythicmetals:manganese_anvil',
        // Steel
        'mythicmetals:steel_nugget',
        'mythicmetals:steel_ingot',
        'mythicmetals:steel_block',
        'mythicmetals:steel_anvil',
        'mythicmetals:steel_boots',
        'mythicmetals:steel_leggings',
        'mythicmetals:steel_chestplate',
        'mythicmetals:steel_helmet',
        'mythicmetals:steel_sword',
        'mythicmetals:steel_axe',
        'mythicmetals:steel_pickaxe',
        'mythicmetals:steel_shovel',
        'mythicmetals:steel_hoe',
        // Copper
        'mythicmetals:copper_nugget',
        'mythicmetals:copper_boots',
        'mythicmetals:copper_leggings',
        'mythicmetals:copper_chestplate',
        'mythicmetals:copper_helmet',
        'mythicmetals:copper_sword',
        'mythicmetals:copper_axe',
        'mythicmetals:copper_pickaxe',
        'mythicmetals:copper_shovel',
        'mythicmetals:copper_hoe',
        // Bronze
        'mythicmetals:bronze_nugget',
        'mythicmetals:bronze_ingot',
        'mythicmetals:bronze_block',
        'mythicmetals:bronze_boots',
        'mythicmetals:bronze_leggings',
        'mythicmetals:bronze_chestplate',
        'mythicmetals:bronze_helmet',
        'mythicmetals:bronze_sword',
        'mythicmetals:bronze_axe',
        'mythicmetals:bronze_pickaxe',
        'mythicmetals:bronze_shovel',
        'mythicmetals:bronze_hoe',
        'mythicmetals:bronze_anvil',
        // Quadrillum
        'mythicmetals:quadrillum_axe',
        'mythicmetals:quadrillum_pickaxe',
        'mythicmetals:quadrillum_shovel',
        'mythicmetals:quadrillum_hoe',
        'mythicmetals:quadrillum_nuke_core',
        // Runite
        'mythicmetals:runite_sword',
        'mythicmetals:runite_axe',
        'mythicmetals:runite_pickaxe',
        'mythicmetals:runite_shovel',
        'mythicmetals:runite_hoe',
        // Osmium
        'mythicmetals:osmium_boots',
        'mythicmetals:osmium_leggings',
        'mythicmetals:osmium_chestplate',
        'mythicmetals:osmium_helmet',
        'mythicmetals:osmium_sword',
        'mythicmetals:osmium_axe',
        'mythicmetals:osmium_pickaxe',
        'mythicmetals:osmium_shovel',
        'mythicmetals:osmium_hoe',
        'mythicmetals:osmium_anvil',
        // Banglum
        'mythicmetals:banglum_sword',
        'mythicmetals:banglum_axe',
        'mythicmetals:banglum_pickaxe',
        'mythicmetals:banglum_shovel',
        'mythicmetals:banglum_hoe',
        'mythicmetals:banglum_nuke_core',
        // Carmot
        'mythicmetals:carmot_nuke_core',
        // bullshit
        'mythicmetals:froge',
        'mythicmetals:doge',
        // alloy
        // 'mythicmetals:metallurgium_ingot',
        // 'mythicmetals:durasteel_ingot',
        // 'mythicmetals:hallowed_ingot',
        // 'mythicmetals:celestium_ingot',
        "mythicmetals:midas_gold_chestplate"
    ]

    event.remove({ id: 'mythicmetals:alloy_forge/alloy_star_platinum_from_raw_ores' })
    event.remove({ id: 'mythicmetals:alloy_forge/alloy_star_platinum_from_ores' })
    event.remove({ id: 'mythicmetals:alloy_forge/alloy_star_platinum_from_ingots' })
    event.remove({ id: 'alloy_forgery:compat/aluminum_ingot_from_ores' })
    event.remove({ id: 'alloy_forgery:compat/alloys/steel_from_ores' })
    event.remove({ id: 'alloy_forgery:compat/alloys/steel_from_ingots' })
    event.remove({ id: 'alloy_forgery:compat/alloys/steel_from_raw_ores' })
    event.remove({ id: 'mythicmetals:crafting/activator_rails_from_quadrillum' })

    const delete_this_2 = [
        'mythicmetals:alloy_forge/alloy_metallurgium_from_raw_ores',
        'mythicmetals:alloy_forge/alloy_metallurgium_from_ores',
        'mythicmetals:alloy_forge/alloy_metallurgium_from_ingots_alt',
        'mythicmetals:alloy_forge/alloy_metallurgium_from_ingots',
        'mythicmetals:alloy_forge/alloy_hallowed_from_raw_ores',
        'mythicmetals:alloy_forge/alloy_hallowed_from_ores',
        'mythicmetals:alloy_forge/alloy_hallowed_from_ingots',
        'mythicmetals:alloy_forge/alloy_celestium_from_ingots',
        'mythicmetals:alloy_forge/alloy_celestium_from_ingots_alt',
        'mythicmetals:alloy_forge/alloy_celestium_from_raw_ores',
        'mythicmetals:alloy_forge/alloy_celestium_from_ores',

    ]
    delete_this_2.forEach(element => {
        event.remove({ id: element })
    });

    // 'mythicmetals:star_platinum',
    delete_this.forEach(element => {
        event.remove({ output: element })
    })
    event.remove({ id: 'mythicmetals:crafting/flint_and_steel' })
    event.remove({ id: 'mythicmetals:blasting/blast_unobtainium' })
    event.remove({ id: 'mythicmetals:blasting/blast_starrite' })
    event.remove({ id: 'mythicmetals:smelting/morkite_from_ores' })
    event.remove({ id: 'mythicmetals:smelting/starrite_from_ores' })

    event.shapeless('mythicmetals:unobtainium', ['9x kubejs:unobtainium_nugget'])
    event.shapeless('9x kubejs:unobtainium_nugget', ['mythicmetals:unobtainium'])
    // REMOVE BLASTING AND SMELTING
    let ores = ['banglum', 'aquarium', 'adamantite', 'prometheum', 'quadrillum', 'runite', 'stormyx', 'palladium', 'orichalcum', 'midas_gold', 'kyber', 'carmot']

    ores.forEach(ingot => event.remove({ id: `mythicmetals:smelting/${ingot}_ingot_from_ores` }))
    ores.forEach(ingot => event.remove({ id: `mythicmetals:blasting/blast_${ingot}_ingot_from_ores` }))

    // duplicated from alloy forgery
    let alloyForgeryDuplicated = ['adamantite', 'orichalcum', 'palladium']
    alloyForgeryDuplicated.forEach(item => event.remove({ id: `alloy_forgery:compat/${item}_ingot_from_ores` }))

    // Hallowed ingot
    alloyForgeryCraft(event,
        [
            { 'item': 'spectrum:shimmerstone_gem' },
            { 'item': 'mythicmetals:carmot_ingot' },
            { 'item': 'mythicmetals:mythril_ingot' },
            { 'item': 'mythicmetals:orichalcum_ingot' },
        ],
        { 'id': 'mythicmetals:hallowed_ingot', 'count': 1 },
        3);
    // Durasteel
    alloyForgeryCraft(event,
        [
            { 'item': 'kubejs:raw_magical_steel' },
            { 'item': 'mythicmetals:adamantite_ingot' },
            { 'item': 'spectrum:bedrock_dust' },
        ],
        { 'id': 'mythicmetals:durasteel_ingot', 'count': 1 },
        3);
    // magical steel
    alloyForgeryCraft(event,
        [
            { 'tag': 'spectrum:gemstone_powders', 'count': 4 },
            { 'item': 'mythicmetals:banglum_ingot', 'count': 2 },
            { 'item': 'minecraft:iron_ingot' },
        ],
        { 'id': 'kubejs:raw_magical_steel', 'count': 1 },
        2, 5);
    // star_platinum
    alloyForgeryCraft(event,
        [
            { 'item': 'modern_industrialization:raw_platinum' },
            { 'item': 'mythicmetals:starrite' },
            { 'item': 'spectrum:star_fragment' },
            { 'item': 'spectrum:stardust' },
        ],
        { 'id': 'mythicmetals:star_platinum', 'count': 1 },
        2, 50);
    // celestium ingot
    alloyForgeryCraft(event,
        [
            { 'item': 'mythicmetals:starrite' },
            { 'item': 'modern_industrialization:raw_platinum' },
            { 'item': 'mythicmetals:carmot_ingot' },
            { 'item': 'mythicmetals:stormyx_ingot' },
            { 'item': 'mythicmetals:unobtainium' },
            { 'item': 'spectrum:stardust' },
            { 'item': 'spectrum:star_fragment' },
        ],
        { 'id': 'mythicmetals:celestium_ingot', 'count': 1 },
        3, 120);
    alloyForgeryCraft(event,
        [
            { 'item': 'mythicmetals:star_platinum' },
            { 'item': 'mythicmetals:carmot_ingot' },
            { 'item': 'mythicmetals:kyber_ingot' },
            { 'item': 'mythicmetals:unobtainium' },
        ],
        { 'id': 'mythicmetals:celestium_ingot', 'count': 1 },
        3, 40);
    alloyForgeryCraft(event,
        [
            { 'item': 'mythicmetals:palladium_ingot' },
            { 'item': 'mythicmetals:unobtainium' },
            { 'item': 'mythicmetals:adamantite_ingot' },
            { 'item': 'mythicmetals:mythril_ingot' },
            { 'item': 'mythicmetals:orichalcum_ingot' },
            { 'item': 'spectrum:refined_malachite' },
            { 'item': 'spectrum:refined_azurite' },
            { 'item': 'spectrum:refined_bloodstone' },
        ],
        { 'id': 'mythicmetals:metallurgium_ingot', 'count': 1 },
        4, 80);
    alloyForgeryCraft(event,
        [
            { 'item': 'spectrum:dragonbone_chunk', 'count': 4},
            { 'item': 'mythicmetals:unobtainium' },
            { 'item': 'mythicmetals:adamantite_ingot' },
            { 'item': 'spectrum:refined_bloodstone' },
            { 'item': 'mythicmetals:celestium_ingot' },
        ],
        { 'id': 'kubejs:dragonbone_alloy', 'count': 1 },
        4, 100);
    const rep_metals = [
        'adamantite',
        'aquarium',
        'durasteel',
        'hallowed',
        'kyber',
        'mythril',
        'orichalcum',
        'palladium',
        'prometheum',
        'stormyx',
        'banglum',
        'runite',

    ]
    // const types = [
    //     'armor',
    //     'axe',
    // ]
    // Quadrillum
    event.replaceInput({id: `mythicmetals:sword/quadrillum_sword`}, `mythicmetals:quadrillum_ingot`,`modern_industrialization:quadrillum_plate`);
    // Midas Gold
    event.replaceInput({id: `mythicmetals:sword/midas_gold_sword`}, `mythicmetals:midas_gold_ingot`,`modern_industrialization:midas_gold_plate`);
    event.replaceInput({id: `mythicmetals:armor/midas_gold_helmet`}, `mythicmetals:midas_gold_ingot`,`modern_industrialization:midas_gold_plate`);
    event.replaceInput({id: `mythicmetals:armor/midas_gold_leggings`}, `mythicmetals:midas_gold_ingot`,`modern_industrialization:midas_gold_plate`);
    event.replaceInput({id: `mythicmetals:armor/midas_gold_boots`}, `mythicmetals:midas_gold_ingot`,`modern_industrialization:midas_gold_plate`);
    event.shaped(`mythicmetals:midas_gold_chestplate`, [
        'P P',
        'PLP',
        'PLP'
    ], {
            P: `modern_industrialization:midas_gold_plate`,
            L: `modern_industrialization:midas_gold_large_plate`
        })

    event.replaceInput({id: `mythicmetals:armor/star_platinum_helmet`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.replaceInput({id: `mythicmetals:armor/star_platinum_leggings`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.replaceInput({id: `mythicmetals:armor/star_platinum_boots`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.replaceInput({id: `mythicmetals:axe/star_platinum_axe`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.replaceInput({id: `mythicmetals:shovel/star_platinum_shovel`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.replaceInput({id: `mythicmetals:sword/star_platinum_sword`}, `mythicmetals:star_platinum`,`modern_industrialization:star_platinum_plate`);
    event.remove({ id: `mythicmetals:pickaxe/star_platinum_pickaxe` })
    event.shaped(`mythicmetals:star_platinum_pickaxe`, [
        'PPI',
        ' S ',
        ' S '
    ], {
            P: `modern_industrialization:star_platinum_plate`,
            I: `mythicmetals:star_platinum`,
            S: 'minecraft:stick'
        })
    event.remove({ id: `mythicmetals:hoe/star_platinum_hoe` })
    event.shaped(`mythicmetals:star_platinum_hoe`, [
        'PI ',
        ' S ',
        ' S '
    ], {
            P: `modern_industrialization:star_platinum_plate`,
            I: `mythicmetals:star_platinum`,
            S: 'minecraft:stick'
        })
    event.remove({ id: `mythicmetals:armor/star_platinum_chestplate` })
    event.shaped(`mythicmetals:star_platinum_chestplate`, [
        'P P',
        'PLP',
        'PLP'
    ], {
            P: `modern_industrialization:star_platinum_plate`,
            L: `modern_industrialization:star_platinum_large_plate`
        })
    rep_metals.forEach(element => {
        event.replaceInput({id: `mythicmetals:armor/${element}_helmet`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.replaceInput({id: `mythicmetals:armor/${element}_leggings`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.replaceInput({id: `mythicmetals:armor/${element}_boots`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.replaceInput({id: `mythicmetals:axe/${element}_axe`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.replaceInput({id: `mythicmetals:shovel/${element}_shovel`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.replaceInput({id: `mythicmetals:sword/${element}_sword`}, `mythicmetals:${element}_ingot`,`modern_industrialization:${element}_plate`);
        event.remove({ id: `mythicmetals:pickaxe/${element}_pickaxe` })
        event.shaped(`mythicmetals:${element}_pickaxe`, [
            'PPI',
            ' S ',
            ' S '
        ], {
                P: `modern_industrialization:${element}_plate`,
                I: `mythicmetals:${element}_ingot`,
                S: 'minecraft:stick'
            })
        event.remove({ id: `mythicmetals:hoe/${element}_hoe` })
        event.shaped(`mythicmetals:${element}_hoe`, [
            'PI ',
            ' S ',
            ' S '
        ], {
                P: `modern_industrialization:${element}_plate`,
                I: `mythicmetals:${element}_ingot`,
                S: 'minecraft:stick'
            })
        event.remove({ id: `mythicmetals:armor/${element}_chestplate` })
        event.shaped(`mythicmetals:${element}_chestplate`, [
            'P P',
            'PLP',
            'PLP'
        ], {
                P: `modern_industrialization:${element}_plate`,
                L: `modern_industrialization:${element}_large_plate`
            })
    });
})

