//priority: 500
const modernPure1 = [
    'antimony',
    'lead',
    'nickel',
    'aluminum',
    'tin',
    'tungsten',
    'silver',
    'uranium',
    'iridium',
    'titanium',
    'platinum',
    'chromium',
    'beryllium',
    'desh',
    'ostrum',
    'calorite',
]

StartupEvents.registry('item', event => {

    // Simple function for simple items
    let simpleItemAdd = (args) => {
        {
            event.create(args.item)
                .texture(`kubejs:item/${args.item}`)
                .rarity(args.rarity || 'common')
                .glow(args.isGlow || false)
                .maxStackSize(args.stackSize || 64)
                .translationKey(`item.kubejs.${args.item}`)
        }
    }
    simpleItemAdd({ item: 'chromatically_stable_circuit', rarity: 'epic' })
    simpleItemAdd({ item: 'photonic_circuit_board', rarity: 'rare' })
    simpleItemAdd({ item: 'photonic_circuit', rarity: 'rare' })
    simpleItemAdd({ item: 'dragonbone_alloy', rarity: 'rare' })
    simpleItemAdd({ item: 'tears_of_the_sea', rarity: 'rare', isGlow: true })
    simpleItemAdd({ item: 'hirschgeist_heart', rarity: 'rare'})
    simpleItemAdd({ item: 'kindling_heart', rarity: 'rare'})
    simpleItemAdd({ item: 'dragon_heart', rarity: 'rare', stackSize: 1})
    simpleItemAdd({ item: 'essence_of_flight', rarity: 'epic', stackSize: 8})
    simpleItemAdd({ item: 'teleport_pearl', rarity: 'rare', stackSize: 16})
    simpleItemAdd({ item: 'spectral_circuit_board', rarity: 'uncommon' })
    simpleItemAdd({ item: 'star_core', rarity: 'epic', isGlow: true })
    simpleItemAdd({ item: 'midnight_feather', rarity: 'epic', isGlow: true })
    simpleItemAdd({ item: 'raw_magical_steel' })
    simpleItemAdd({ item: 'moth_wings', rarity: 'uncommon' })
    simpleItemAdd({ item: 'zotzpyre_fang', rarity: 'uncommon'})
    simpleItemAdd({ item: 'crystal_fiery', rarity: 'uncommon', stackSize: 1})
    simpleItemAdd({ item: 'unobtainium_nugget' })
    simpleItemAdd({ item: 'calcite_dust' })
    simpleItemAdd({ item: 'calcite_brick' })
    simpleItemAdd({ item: 'basalt_dust' })
    simpleItemAdd({ item: 'basalt_brick' })
    simpleItemAdd({ item: 'sharped_amethyst' })
    simpleItemAdd({ item: 'pure_terrasteel' })
    simpleItemAdd({ item: 'aquarium_diamond' })
    simpleItemAdd({ item: 'prometheum_ender_pearl' })
    simpleItemAdd({ item: 'infinity_catalyst', rarity: 'epic' })
    simpleItemAdd({ item: 'neutronium_ingot' })
    simpleItemAdd({ item: 'neutron_nugget' })
    simpleItemAdd({ item: 'neutron_pile' })
    simpleItemAdd({ item: 'infinity_ingot', rarity: 'epic' })
    simpleItemAdd({ item: 'reforge_rune', rarity: 'epic', stackSize: 16})
    simpleItemAdd({ item: 'neutron_capturing_mesh', rarity: 'rare', stackSize: 1 })
    simpleItemAdd({ item: 'leather_patch', stackSize: 8 })
    simpleItemAdd({ item: 'catalyst_terrasteel' })
    simpleItemAdd({ item: 'photoelectric_cell' })
    simpleItemAdd({ item: 'impregnated_sheathing'})
    simpleItemAdd({ item: 'mining_drone', rarity: 'rare', stackSize: 16})
    simpleItemAdd({ item: 'artifact_dust', stackSize: 16, rarity: 'epic' })
    simpleItemAdd({ item: 'empty_beehive', stackSize: 1 })
    simpleItemAdd({ item: 'beehive', stackSize: 1, rarity: 'rare' })
    simpleItemAdd({ item: 'bee', rarity: 'common', stackSize: 64})
    simpleItemAdd({ item: 'beehemoth', rarity: 'uncommon', stackSize: 16})
    simpleItemAdd({ item: 'bee_queen', rarity: 'rare', stackSize: 1})
    simpleItemAdd({ item: 'necrodermal_affected_bee', rarity: 'rare', stackSize: 64})
    simpleItemAdd({ item: 'nullodermal_affected_bee', rarity: 'rare', stackSize: 64})
    simpleItemAdd({ item: 'necrodermal_affected_beehemoth', rarity: 'rare', stackSize: 16})
    simpleItemAdd({ item: 'nullodermal_affected_beehemoth', rarity: 'rare', stackSize: 16})
    simpleItemAdd({ item: 'raw_turbinium', rarity: 'uncommon'})
    simpleItemAdd({ item: 'refined_turbinium', rarity: 'rare'})
    simpleItemAdd({ item: 'raw_caterium', rarity: 'uncommon'})
    simpleItemAdd({ item: 'refined_caterium', rarity: 'rare'})
    simpleItemAdd({ item: 'octiron_shards', rarity: 'rare'})
    simpleItemAdd({ item: 'raw_naquadah', rarity: 'uncommon'})
    simpleItemAdd({ item: 'refined_naquadah', rarity: 'rare'})
    simpleItemAdd({ item: 'infinity_plate', rarity: 'epic', stackSize: 64})
    simpleItemAdd({ item: 'neutronium_plate', stackSize: 64})
    simpleItemAdd({ item: 'building_card', stackSize: 1, rarity: 'rare'})
    simpleItemAdd({ item: 'desctruction_card', stackSize: 1, rarity: 'rare'})
    simpleItemAdd({ item: 'exchanging_card', stackSize: 1, rarity: 'rare'})
    simpleItemAdd({ item: 'demagnetized_magnet_part', stackSize: 16})
    simpleItemAdd({ item: 'magnet_part', stackSize: 16})
    simpleItemAdd({ item: 'rune_template'})

    event.create("dev_tool", "pickaxe")
        .texture(`kubejs:item/dev_tool`)
        .maxStackSize(1)
        .rarity('epic')
        .modifyTier(tier => {
            tier.setLevel(69)
            tier.setUses(696969)
            tier.setSpeed(69)
            tier.setAttackDamageBonus(6970)
            tier.setEnchantmentValue(69)
            tier.setRepairIngredient(Ingredient.custom(item => {
                if (item.id == "minecraft:command_block") return true;
                return false;
            }))
        })
        .translationKey(`item.kubejs.dev_tool`)

    event.create("scoop")
    .maxDamage(20)
    .unstackable()
    .texture(`kubejs:item/scoop`)
    .translationKey(`item.kubejs.scoop`)

    event.create("royal_scoop")
    .maxDamage(1)
    .unstackable()
    .texture(`kubejs:item/royal_scoop`)
    .translationKey(`item.kubejs.royal_scoop`)

    modernPure1.forEach(element => {
        simpleItemAdd({ item: `pure_${element}` })
    })


    // Flowers
    global.dyeColors.forEach(color => {
        event.create(`fossilized_${color.name}_mystical_flower`)
            .texture(`kubejs:item/flowers/${color.name}_mystical_flower`)
    })


    // Drills (Narcos)
    const drillTypes = [
        'aluminum',
        'bronze',
        'calorite',
        'copper',
        'desh',
        'gold',
        'ostrum',
        'stainless_steel',
        'steel',
        'titanium',
    ]
    drillTypes.forEach(type => {
        // event.create(`bedrock_reinforced_${type}_drill`)
        //     .texture(`kubejs:item/reinforced_drills/${type}`)
        //     .rarity('uncommon')
        event.create(`durasteel_reinforced_${type}_drill`)
            .texture(`kubejs:item/reinforced_drills/${type}`)
            .rarity('uncommon')
        event.create(`neutronium_augmented_${type}_drill`)
            .texture(`kubejs:item/reinforced_drills/neutronium_augmented_${type}_drill`)
            .rarity('epic')
        event.create(`neutronium_augmented_${type}_drill_head`)
            .texture(`kubejs:item/reinforced_drills/neutronium_augmented_${type}_drill_head`)
            .rarity('epic')
        event.create(`azurite_plated_${type}_drill`)
            .texture(`kubejs:item/reinforced_drills/azurite_plated_${type}_drill`)
            .rarity('uncommon')
        event.create(`azurite_plated_${type}_drill_head`)
            .texture(`kubejs:item/reinforced_drills/azurite_plated_${type}_drill_head`)
            .rarity('uncommon')
        event.create(`malachite_enhanced_${type}_drill`)
            .texture(`kubejs:item/reinforced_drills/malachite_enhanced_${type}_drill`)
            .rarity('rare')
        event.create(`malachite_enhanced_${type}_drill_head`)
            .texture(`kubejs:item/reinforced_drills/malachite_enhanced_${type}_drill_head`)
            .rarity('rare')
    })

    const singTypes = [
        'antimony',
        'lead',
        'nickel',
        'aluminum',
        'tin',
        'tungsten',
        'silver',
        'uranium',
        'iridium',
        'titanium',
        'platinum',
        'chromium',
        'beryllium',
        'banglum',
        'carmot',
        'kyber',
        'mythril',
        'orichalcum',
        'osmium',
        'quadrillum',
        'prometheum',
        'iron',
        'redstone',
        'gold',
        'diamond',
        'emerald',
        'lapis',
        'quartz',
        'amethyst',
        'netherite',
        'citrine',
        'topaz',
        'onyx',
        'moonstone',
        'copper'
    ]
    singTypes.forEach(type => {
        event.create(`${type}_singularity`)
            .texture(`kubejs:item/singularity/${type}_singularity`)
            .rarity('epic')
            .glow(true)
    })

    const dataCardTypes = [
        'moon',
        'mars',
        'venus',
        'mercury',
        'glacio',
    ]
    dataCardTypes.forEach(type => {
        event.create(`${type}_data_card`)
            .texture(`kubejs:item/data_cards/${type}`)
        event.create(`advanced_${type}_data_card`)
            .texture(`kubejs:item/data_cards/${type}`)
            .glow(true)
            .rarity('rare')
    })


    // Bags
    global.lootbagTypes.forEach(type => {
        global.lootbagRarities.forEach(rarity => {
            if (rarity.name == 'epic') {
                event.create(`${type.name}_lootbag_${rarity.name}`)
                    .texture(`kubejs:item/bags/tool_pouch_${type.color}`)
                    .rarity(rarity.name)
                    .glow(true)
            } else {
                event.create(`${type.name}_lootbag_${rarity.name}`)
                    .texture(`kubejs:item/bags/tool_pouch_${type.color}`)
                    .rarity(rarity.name)
                    .glow(false)
            }
        })
    })
})



StartupEvents.registry("block", (event) => {

    modernPure1.forEach(element => {
        [`small_${element}_bud`, `large_${element}_bud`, `${element}_cluster`].forEach(kind => {
            JsonIO.write(`kubejs/assets/kubejs/models/block/${kind}.json`, {
                "parent": "minecraft:block/cross",
                "textures": {
                    "0": `kubejs:block/${kind}`,
                    "particle": `kubejs:block/${kind}`
                },
                "elements": [
                    {
                        "from": [0, -2, 8],
                        "to": [16, 16, 8],
                        "rotation": { "angle": 45, "axis": "y", "origin": [8, 0, 8] },
                        "faces": {
                            "north": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "east": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "south": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "west": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "up": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "down": { "uv": [0, 0, 16, 16], "texture": "#0" }
                        }
                    },
                    {
                        "from": [8, -2, 0],
                        "to": [8, 16, 16],
                        "rotation": { "angle": 45, "axis": "y", "origin": [8, 0, 8] },
                        "faces": {
                            "north": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "east": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "south": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "west": { "uv": [0, 0, 16, 16], "texture": "#0" },
                            "up": { "uv": [0, 0, 16, 16], "rotation": 270, "texture": "#0" },
                            "down": { "uv": [0, 0, 16, 16], "rotation": 90, "texture": "#0" }
                        }
                    }
                ],
                "display": {}
            })
            if (kind == `${element}_cluster`) {
                event.create(kind)
                    .material('glass')
                    .hardness(0.5)
                    // .textureAll('kubejs:block/terrasteel_cluster')
                    .model(`kubejs:block/${kind}`)
                    //.item('kubejs:item/soulstone')
                    .defaultCutout()
                    .box(4, 0, 4, 12, 6, 12, true)
                    .requiresTool(true)
                    .tagBlock('minecraft:mineable/pickaxe')
                    .tagBlock('c:clusters')
                    .property(BlockProperties.WATERLOGGED)
                    .item(item =>
                        item.modelJson({
                            parent: 'minecraft:item/generated',
                            textures: {
                                layer0: `kubejs:block/${kind}`,
                            },
                        })
                    )
                    .lootTable = (loot) => {
                        loot.type = "minecraft:block"
                        loot.addPool((pool) => {
                            pool.survivesExplosion()
                            pool.addEntry({
                                "type": "minecraft:item",
                                "name": `kubejs:${element}_cluster`,
                                "conditions": [
                                    {
                                        "condition": "minecraft:match_tool",
                                        "predicate": {
                                            "enchantments": [
                                                {
                                                    "enchantment": "minecraft:silk_touch",
                                                    "levels": {
                                                        "min": 1
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            })
                            pool.addEntry({
                                "type": "minecraft:item",
                                "name": `kubejs:pure_${element}`,
                                "functions": [
                                    {
                                        "function": "minecraft:set_count",
                                        "count": {
                                            "min": 3,
                                            "max": 5
                                        },
                                        "add": false
                                    }
                                ]
                            }
                            )
                            // type: "minecraft:item",
                            // name: `kubejs:pure_${element}`
                        })
                    }
            } else {
                event.create(kind)
                    .material('glass')
                    .hardness(0.5)
                    // .textureAll('kubejs:block/terrasteel_cluster')
                    .model(`kubejs:block/${kind}`)
                    //.item('kubejs:item/soulstone')
                    .defaultCutout()
                    .box(4, 0, 4, 12, 6, 12, true)
                    .requiresTool(true)
                    .tagBlock('minecraft:mineable/pickaxe')
                    .tagBlock('c:clusters')
                    .property(BlockProperties.WATERLOGGED)
                    .item(item =>
                        item.modelJson({
                            parent: 'minecraft:item/generated',
                            textures: {
                                layer0: `kubejs:block/${kind}`,
                            },
                        })
                    )
            }
        })
    })

    event.create("focal_lens")
        .material('glass')

    event.create("stable_mob_spawner")
        .material('heavy_metal')
        .defaultCutout()
        .translationKey('block.kubejs.stable_mob_spawner')

    event.create('terrasteel_cluster')
        .material('glass')
        .hardness(0.5)
        // .textureAll('kubejs:block/terrasteel_cluster')
        .model('kubejs:block/terrasteel_cluster')
        //.item('kubejs:item/soulstone')
        .defaultCutout()
        .box(4, 0, 4, 12, 6, 12, true)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .property(BlockProperties.WATERLOGGED)
        .item(item =>
            item.modelJson({
                parent: 'minecraft:item/generated',
                textures: {
                    layer0: 'kubejs:block/terrasteel_cluster',
                },
            })
        )
        .lootTable = (loot) => {
            loot.type = "minecraft:block"
            loot.addPool((pool) => {
                pool.survivesExplosion()
                pool.addEntry({
                    type: "minecraft:item",
                    name: "botania:terrasteel_nugget"
                })
            })
        }


    event.create('terrasteel_large_bud')
        .material('glass')
        .textureAll('kubejs:block/terrasteel_large_bud')
        .model('kubejs:block/terrasteel_large_bud')
        //.item('kubejs:item/soulstone')
        .defaultCutout()
        .box(4, 0, 4, 12, 6, 12)
        //.item(i => i.texture('kubejs:item/soulstone'))
        .item(item =>
            item.modelJson({
                parent: 'minecraft:item/generated',
                textures: {
                    layer0: 'kubejs:block/terrasteel_large_bud',
                },
            })
        )

    event.create('terrasteel_small_bud')
        .material('glass')
        .textureAll('kubejs:block/terrasteel_small_bud')
        .model('kubejs:block/terrasteel_small_bud')
        //.item('kubejs:item/soulstone')
        .defaultCutout()
        .box(4, 0, 4, 12, 6, 12)
        //.item(i => i.texture('kubejs:item/soulstone'))
        .item(item =>
            item.modelJson({
                parent: 'minecraft:item/generated',
                textures: {
                    layer0: 'kubejs:block/terrasteel_small_bud',
                },
            })
        )
})


StartupEvents.registry('fluid', event => {

});
