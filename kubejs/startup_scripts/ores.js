//priority: 1

WorldgenEvents.remove(event => {

    // remove oregen
    let remove_metals = [
        'mythicmetals:tin_ore',
        'mythicmetals:platinum_ore',
        'mythicmetals:silver_ore',
        'mythicmetals:manganese_ore',
        'expandeddelight:salt_ore'
    ]

    event.removeOres(ores => {
        ores.blocks = remove_metals;
    })


    event.removeFeatureById(
        'underground_ores',
        [
            'minecraft:ore_coal_upper',
            'minecraft:ore_coal_lower',
            'minecraft:ore_copper',
            'minecraft:ore_copper_large',
            'minecraft:ore_iron_upper',
            'minecraft:ore_iron_middle',
            'minecraft:ore_iron_small'
        ]
    );

    event.removeFeatureById(
        'raw_generation',
        [
            'ad_astra:mars_iron_ore',
            'ad_astra:mars_diamond_ore',
            'ad_astra:mars_ostrum_ore',
            'ad_astra:mars_ice_shard_ore',
            'ad_astra:moon_cheese_ore',
            'ad_astra:moon_desh_ore',
            'ad_astra:moon_iron_ore',
            'ad_astra:moon_ice_shard_ore',
            'ad_astra:venus_coal_ore',
            'ad_astra:venus_gold_ore',
            'ad_astra:venus_diamond_ore',
            'ad_astra:venus_calorite_ore',
            'ad_astra:mercury_iron_ore',
            'ad_astra:glacio_ice_shard_ore',
            'ad_astra:glacio_coal_ore',
            'ad_astra:glacio_iron_ore',
            'ad_astra:glacio_lapis_ore',
            'ad_astra:glacio_copper_ore'
        ]
    )
})
