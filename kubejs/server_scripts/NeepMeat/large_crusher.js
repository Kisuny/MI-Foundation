const large_crushing = [
    // Iron ore
    {
        main: {
            ore_block: 'minecraft:iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_nickel',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_nickel',
            amount: 1,
            chance: 0.4
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:raw_nickel',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // Gold ore
    {
        main: {
            ore_block: 'minecraft:gold_ore',
            ore_raw: 'minecraft:raw_gold',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_copper',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_gold_ore',
            ore_raw: 'minecraft:raw_gold',
            min: 3,
            max: 6
        },
        extra: {
            id: 'minecraft:raw_copper',
            amount: 1,
            chance: 0.4
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_gold_ore',
            ore_raw: 'minecraft:raw_gold',
            min: 8,
            max: 12
        },
        extra: {
            id: 'minecraft:raw_copper',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // Redstone ore
    {
        main: {
            ore_block: 'minecraft:redstone_ore',
            ore_raw: 'modern_industrialization:redstone_crushed_dust',
            min: 6,
            max: 10
        },
        extra: {
            id: 'modern_industrialization:chromium_crushed_dust',
            amount: 1,
            chance: 0.1
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_redstone_ore',
            ore_raw: 'modern_industrialization:redstone_crushed_dust',
            min: 6,
            max: 12
        },
        extra: {
            id: 'modern_industrialization:chromium_crushed_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_redstone_ore',
            ore_raw: 'modern_industrialization:redstone_crushed_dust',
            min: 8,
            max: 16
        },
        extra: {
            id: 'modern_industrialization:chromium_crushed_dust',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 40
    },
    // emerald ore
    {
        main: {
            ore_block: 'minecraft:emerald_ore',
            ore_raw: 'modern_industrialization:emerald_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:beryllium_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_emerald_ore',
            ore_raw: 'modern_industrialization:emerald_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:beryllium_dust',
            amount: 1,
            chance: 0.4
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_emerald_ore',
            ore_raw: 'modern_industrialization:emerald_crushed_dust',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:beryllium_dust',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // lapis ore
    {
        main: {
            ore_block: 'minecraft:lapis_ore',
            ore_raw: 'modern_industrialization:lapis_crushed_dust',
            min: 16,
            max: 24
        },
        extra: {
            id: 'modern_industrialization:sodium_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_lapis_ore',
            ore_raw: 'modern_industrialization:lapis_crushed_dust',
            min: 16,
            max: 32
        },
        extra: {
            id: 'modern_industrialization:sodium_dust',
            amount: 2,
            chance: 0.4
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_lapis_ore',
            ore_raw: 'modern_industrialization:lapis_crushed_dust',
            min: 24,
            max: 48
        },
        extra: {
            id: 'modern_industrialization:sodium_dust',
            amount: 3,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // diamond ore
    {
        main: {
            ore_block: 'minecraft:diamond_ore',
            ore_raw: 'modern_industrialization:diamond_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:carbon_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_diamond_ore',
            ore_raw: 'modern_industrialization:diamond_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:carbon_dust',
            amount: 1,
            chance: 0.4
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_diamond_ore',
            ore_raw: 'modern_industrialization:diamond_crushed_dust',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:carbon_dust',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // coal ore
    {
        main: {
            ore_block: 'minecraft:coal_ore',
            ore_raw: 'modern_industrialization:coal_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:diamond_dust',
            amount: 1,
            chance: 0.03
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_coal_ore',
            ore_raw: 'modern_industrialization:coal_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:diamond_dust',
            amount: 1,
            chance: 0.05
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_coal_ore',
            ore_raw: 'modern_industrialization:coal_crushed_dust',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:diamond_dust',
            amount: 2,
            chance: 0.1
        },
        exp: 10,
        time: 40
    },
    // copper ore
    {
        main: {
            ore_block: 'minecraft:copper_ore',
            ore_raw: 'minecraft:raw_copper',
            min: 8,
            max: 14
        },
        extra: {
            id: 'minecraft:raw_gold',
            amount: 1,
            chance: 0.15
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'minecraft:deepslate_copper_ore',
            ore_raw: 'minecraft:raw_copper',
            min: 8,
            max: 18
        },
        extra: {
            id: 'minecraft:raw_gold',
            amount: 1,
            chance: 0.3
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_copper_ore',
            ore_raw: 'minecraft:raw_copper',
            min: 12,
            max: 24
        },
        extra: {
            id: 'minecraft:raw_gold',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // amethyst ore
    {
        main: {
            ore_block: 'spectrum:amethyst_ore',
            ore_raw: 'spectrum:amethyst_powder',
            min: 6,
            max: 10
        },
        extra: {
            id: 'minecraft:amethyst_shard',
            amount: 3,
            chance: 0.15
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_amethyst_ore',
            ore_raw: 'spectrum:amethyst_powder',
            min: 6,
            max: 12
        },
        extra: {
            id: 'minecraft:amethyst_shard',
            amount: 3,
            chance: 0.3
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_amethyst_ore',
            ore_raw: 'spectrum:amethyst_powder',
            min: 8,
            max: 16
        },
        extra: {
            id: 'minecraft:amethyst_shard',
            amount: 6,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // citrine ore
    {
        main: {
            ore_block: 'spectrum:citrine_ore',
            ore_raw: 'spectrum:citrine_powder',
            min: 6,
            max: 10
        },
        extra: {
            id: 'spectrum:citrine_shard',
            amount: 3,
            chance: 0.15
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_citrine_ore',
            ore_raw: 'spectrum:citrine_powder',
            min: 6,
            max: 12
        },
        extra: {
            id: 'spectrum:citrine_shard',
            amount: 3,
            chance: 0.3
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_citrine_ore',
            ore_raw: 'spectrum:citrine_powder',
            min: 8,
            max: 16
        },
        extra: {
            id: 'spectrum:citrine_shard',
            amount: 6,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // topaz ore
    {
        main: {
            ore_block: 'spectrum:topaz_ore',
            ore_raw: 'spectrum:topaz_powder',
            min: 6,
            max: 10
        },
        extra: {
            id: 'spectrum:topaz_shard',
            amount: 3,
            chance: 0.15
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_topaz_ore',
            ore_raw: 'spectrum:topaz_powder',
            min: 6,
            max: 12
        },
        extra: {
            id: 'spectrum:topaz_shard',
            amount: 3,
            chance: 0.3
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_topaz_ore',
            ore_raw: 'spectrum:topaz_powder',
            min: 8,
            max: 16
        },
        extra: {
            id: 'spectrum:topaz_shard',
            amount: 6,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // onyx ore
    {
        main: {
            ore_block: 'spectrum:onyx_ore',
            ore_raw: 'spectrum:onyx_powder',
            min: 6,
            max: 10
        },
        extra: {
            id: 'spectrum:onyx_shard',
            amount: 3,
            chance: 0.15
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_onyx_ore',
            ore_raw: 'spectrum:onyx_powder',
            min: 6,
            max: 12
        },
        extra: {
            id: 'spectrum:onyx_shard',
            amount: 3,
            chance: 0.3
        },
        exp: 20,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_onyx_ore',
            ore_raw: 'spectrum:onyx_powder',
            min: 8,
            max: 16
        },
        extra: {
            id: 'spectrum:onyx_shard',
            amount: 6,
            chance: 0.6
        },
        exp: 40,
        time: 40
    },
    // moonstone ore
    {
        main: {
            ore_block: 'spectrum:moonstone_ore',
            ore_raw: 'spectrum:moonstone_powder',
            min: 6,
            max: 10
        },
        extra: {
            id: 'spectrum:moonstone_shard',
            amount: 3,
            chance: 0.15
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_moonstone_ore',
            ore_raw: 'spectrum:moonstone_powder',
            min: 6,
            max: 12
        },
        extra: {
            id: 'spectrum:moonstone_shard',
            amount: 3,
            chance: 0.3
        },
        exp: 20,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_moonstone_ore',
            ore_raw: 'spectrum:moonstone_powder',
            min: 8,
            max: 16
        },
        extra: {
            id: 'spectrum:moonstone_shard',
            amount: 6,
            chance: 0.6
        },
        exp: 40,
        time: 40
    },
    // shimmerstone ore
    {
        main: {
            ore_block: 'spectrum:shimmerstone_ore',
            ore_raw: 'spectrum:shimmerstone_gem',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:glowstone_dust',
            amount: 1,
            chance: 0.15
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_shimmerstone_ore',
            ore_raw: 'spectrum:shimmerstone_gem',
            min: 3,
            max: 6
        },
        extra: {
            id: 'minecraft:glowstone_dust',
            amount: 1,
            chance: 0.3
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_shimmerstone_ore',
            ore_raw: 'spectrum:shimmerstone_gem',
            min: 4,
            max: 8
        },
        extra: {
            id: 'minecraft:glowstone_dust',
            amount: 2,
            chance: 0.6
        },
        exp: 10,
        time: 40
    },
    // azurite ore
    {
        main: {
            ore_block: 'spectrum:azurite_ore',
            ore_raw: 'spectrum:raw_azurite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 1,
            chance: 0.1
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_azurite_ore',
            ore_raw: 'spectrum:raw_azurite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_azurite_ore',
            ore_raw: 'spectrum:raw_azurite',
            min: 4,
            max: 8
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 40
    },
    // malachite ore
    {
        main: {
            ore_block: 'spectrum:malachite_ore',
            ore_raw: 'spectrum:raw_malachite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_prometheum',
            amount: 1,
            chance: 0.1
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'spectrum:deepslate_malachite_ore',
            ore_raw: 'spectrum:raw_malachite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_prometheum',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 30
    },
    {
        main: {
            ore_block: 'spectrum:blackslag_malachite_ore',
            ore_raw: 'spectrum:raw_malachite',
            min: 4,
            max: 8
        },
        extra: {
            id: 'mythicmetals:raw_prometheum',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 40
    },
    // Stratine
    {
        main: {
            ore_block: 'spectrum:stratine_ore',
            ore_raw: 'spectrum:stratine_fragments',
            min: 3,
            max: 5
        },
        extra: {
            id: 'spectrum:stratine_gem',
            amount: 1,
            chance: 0.05
        },
        exp: 10,
        time: 40
    },
    // Paltaeria
    {
        main: {
            ore_block: 'spectrum:paltaeria_ore',
            ore_raw: 'spectrum:paltaeria_fragments',
            min: 3,
            max: 5
        },
        extra: {
            id: 'spectrum:paltaeria_gem',
            amount: 1,
            chance: 0.05
        },
        exp: 10,
        time: 40
    },
    // Mars Iron ore
    {
        main: {
            ore_block: 'ad_astra:mars_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:raw_antimony',
            amount: 3,
            chance: 0.5
        },
        exp: 15,
        time: 40
    },
    // Mars Ice Shard Ore
    {
        main: {
            ore_block: 'ad_astra:mars_ice_shard_ore',
            ore_raw: 'ad_astra:ice_shard',
            min: 6,
            max: 12
        },
        extra: {
            id: 'modern_industrialization:quartz_blend_dust',
            amount: 3,
            chance: 0.4
        },
        exp: 15,
        time: 40
    },
    // Mars Ostrum Ore
    {
        main: {
            ore_block: 'ad_astra:mars_ostrum_ore',
            ore_raw: 'ad_astra:raw_ostrum',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_vanadinite',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Deepslate Ostrum Ore
    {
        main: {
            ore_block: 'ad_astra:deepslate_ostrum_ore',
            ore_raw: 'ad_astra:raw_ostrum',
            min: 4,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_vanadinite',
            amount: 1,
            chance: 0.4
        },
        exp: 15,
        time: 40
    },
    // Mars Diamond Ore
    {
        main: {
            ore_block: 'ad_astra:mars_diamond_ore',
            ore_raw: 'modern_industrialization:diamond_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_gadolinite',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Venus Calorite Ore
    {
        main: {
            ore_block: 'ad_astra:venus_calorite_ore',
            ore_raw: 'ad_astra:raw_calorite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_titanium',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Deepslate Calorite Ore
    {
        main: {
            ore_block: 'ad_astra:deepslate_calorite_ore',
            ore_raw: 'ad_astra:raw_calorite',
            min: 4,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_titanium',
            amount: 1,
            chance: 0.4
        },
        exp: 15,
        time: 40
    },
    // Venus Coal Ore
    {
        main: {
            ore_block: 'ad_astra:venus_coal_ore',
            ore_raw: 'modern_industrialization:coal_crushed_dust',
            min: 4,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_roquesite',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Venus Diamond Ore
    {
        main: {
            ore_block: 'ad_astra:venus_diamond_ore',
            ore_raw: 'modern_industrialization:diamond_crushed_dust',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:emerald_crushed_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Venus Gold Ore
    {
        main: {
            ore_block: 'ad_astra:venus_gold_ore',
            ore_raw: 'minecraft:raw_gold',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:raw_platinum',
            amount: 1,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Moon Ice Shard Ore
    {
        main: {
            ore_block: 'ad_astra:moon_ice_shard_ore',
            ore_raw: 'ad_astra:ice_shard',
            min: 6,
            max: 10
        },
        extra: {
            id: 'modern_industrialization:raw_iridium',
            amount: 1,
            chance: 0.05
        },
        exp: 15,
        time: 40
    },
    // Deepslate Ice Shard Ore
    {
        main: {
            ore_block: 'ad_astra:deepslate_ice_shard_ore',
            ore_raw: 'ad_astra:ice_shard',
            min: 6,
            max: 12
        },
        extra: {
            id: 'modern_industrialization:lapis_crushed_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Moon Iron ore
    {
        main: {
            ore_block: 'ad_astra:moon_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 4,
            max: 8
        },
        extra: {
            id: 'modern_industrialization:raw_tin',
            amount: 2,
            chance: 0.5
        },
        exp: 15,
        time: 40
    },
    // Moon Desh ore
    {
        main: {
            ore_block: 'ad_astra:moon_desh_ore',
            ore_raw: 'ad_astra:raw_desh',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_brookite',
            amount: 1,
            chance: 0.3
        },
        exp: 15,
        time: 40
    },
    // Deepslate Desh ore
    {
        main: {
            ore_block: 'ad_astra:deepslate_desh_ore',
            ore_raw: 'ad_astra:raw_desh',
            min: 4,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_brookite',
            amount: 1,
            chance: 0.6
        },
        exp: 15,
        time: 40
    },
    // Glacio Ice Shard Ore
    {
        main: {
            ore_block: 'ad_astra:glacio_ice_shard_ore',
            ore_raw: 'ad_astra:ice_shard',
            min: 8,
            max: 16
        },
        extra: {
            id: 'spectrum:moonstone_shard',
            amount: 4,
            chance: 0.25
        },
        exp: 15,
        time: 40
    },
    // Glacio Copper Ore
    {
        main: {
            ore_block: 'ad_astra:glacio_copper_ore',
            ore_raw: 'minecraft:raw_copper',
            min: 15,
            max: 30
        },
        extra: {
            id: 'spectrum:moonstone_shard',
            amount: 8,
            chance: 0.25
        },
        exp: 15,
        time: 40
    },
    // Glacio Lapis Ore
    {
        main: {
            ore_block: 'ad_astra:glacio_lapis_ore',
            ore_raw: 'modern_industrialization:lapis_crushed_dust',
            min: 20,
            max: 32
        },
        extra: {
            id: 'spectrum:raw_azurite',
            amount: 3,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Glacio Iron Ore
    {
        main: {
            ore_block: 'ad_astra:glacio_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 6,
            max: 9
        },
        extra: {
            id: 'spectrum:paltaeria_fragments',
            amount: 3,
            chance: 0.25
        },
        exp: 15,
        time: 40
    },
    // Glacio coal Ore
    {
        main: {
            ore_block: 'ad_astra:glacio_coal_ore',
            ore_raw: 'modern_industrialization:coal_crushed_dust',
            min: 5,
            max: 10
        },
        extra: {
            id: 'spectrum:onyx_powder',
            amount: 3,
            chance: 0.2
        },
        exp: 15,
        time: 40
    },
    // Mercury Iron Ore
    {
        main: {
            ore_block: 'ad_astra:mercury_iron_ore',
            ore_raw: 'minecraft:raw_iron',
            min: 6,
            max: 12
        },
        extra: {
            id: 'modern_industrialization:mozanite_crushed_dust',
            amount: 4,
            chance: 0.4
        },
        exp: 15,
        time: 40
    },
    // Uranium ore
    {
        main: {
            ore_block: 'modern_industrialization:uranium_ore',
            ore_raw: 'modern_industrialization:raw_uranium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:uranium_235_tiny_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_uranium_ore',
            ore_raw: 'modern_industrialization:raw_uranium',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:uranium_235_tiny_dust',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // antimony ore
    {
        main: {
            ore_block: 'modern_industrialization:antimony_ore',
            ore_raw: 'modern_industrialization:raw_antimony',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_tin',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_antimony_ore',
            ore_raw: 'modern_industrialization:raw_antimony',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_tin',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // Lignite ore
    {
        main: {
            ore_block: 'modern_industrialization:lignite_coal_ore',
            ore_raw: 'modern_industrialization:lignite_coal_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:bauxite_crushed_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_lignite_coal_ore',
            ore_raw: 'modern_industrialization:lignite_coal_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:bauxite_crushed_dust',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // vanadinite ore
    {
        main: {
            ore_block: 'modern_industrialization:vanadinite_ore',
            ore_raw: 'modern_industrialization:raw_vanadinite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_brookite',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_vanadinite_ore',
            ore_raw: 'modern_industrialization:raw_vanadinite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_brookite',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // brookite ore
    {
        main: {
            ore_block: 'modern_industrialization:brookite_ore',
            ore_raw: 'modern_industrialization:raw_brookite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:bauxite_crushed_dust',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_brookite_ore',
            ore_raw: 'modern_industrialization:raw_brookite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:bauxite_crushed_dust',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // gadolinite ore
    {
        main: {
            ore_block: 'modern_industrialization:gadolinite_ore',
            ore_raw: 'modern_industrialization:raw_gadolinite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_uranium',
            amount: 1,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_gadolinite_ore',
            ore_raw: 'modern_industrialization:raw_gadolinite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_uranium',
            amount: 1,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // bauxite ore
    {
        main: {
            ore_block: 'modern_industrialization:bauxite_ore',
            ore_raw: 'modern_industrialization:bauxite_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_copper',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_bauxite_ore',
            ore_raw: 'modern_industrialization:bauxite_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'minecraft:raw_copper',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // molybdenite ore
    {
        main: {
            ore_block: 'modern_industrialization:molybdenite_ore',
            ore_raw: 'modern_industrialization:raw_molybdenite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_iron',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_molybdenite_ore',
            ore_raw: 'modern_industrialization:raw_molybdenite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'minecraft:raw_iron',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // tungsten ore
    {
        main: {
            ore_block: 'modern_industrialization:tungsten_ore',
            ore_raw: 'modern_industrialization:raw_tungsten',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_silver',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_tungsten_ore',
            ore_raw: 'modern_industrialization:raw_tungsten',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_silver',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // tin ore
    {
        main: {
            ore_block: 'modern_industrialization:tin_ore',
            ore_raw: 'modern_industrialization:raw_tin',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_antimony',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_tin_ore',
            ore_raw: 'modern_industrialization:raw_tin',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_antimony',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // salt ore
    {
        main: {
            ore_block: 'modern_industrialization:salt_ore',
            ore_raw: 'modern_industrialization:salt_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:quartz_blend_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_salt_ore',
            ore_raw: 'modern_industrialization:salt_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:quartz_blend_dust',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // fluoroapatite ore
    {
        main: {
            ore_block: 'modern_industrialization:fluoroapatite_ore',
            ore_raw: 'modern_industrialization:raw_fluoroapatite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:cadmium_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_fluoroapatite_ore',
            ore_raw: 'modern_industrialization:raw_fluoroapatite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:cadmium_dust',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // roquesite ore
    {
        main: {
            ore_block: 'modern_industrialization:roquesite_ore',
            ore_raw: 'modern_industrialization:raw_roquesite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:tantalum_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_roquesite_ore',
            ore_raw: 'modern_industrialization:raw_roquesite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:tantalum_dust',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // iridium ore
    {
        main: {
            ore_block: 'modern_industrialization:iridium_ore',
            ore_raw: 'modern_industrialization:raw_iridium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_platinum',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_iridium_ore',
            ore_raw: 'modern_industrialization:raw_iridium',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_platinum',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // lead ore
    {
        main: {
            ore_block: 'modern_industrialization:lead_ore',
            ore_raw: 'modern_industrialization:raw_lead',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_silver',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_lead_ore',
            ore_raw: 'modern_industrialization:raw_lead',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_silver',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // nickel ore
    {
        main: {
            ore_block: 'modern_industrialization:nickel_ore',
            ore_raw: 'modern_industrialization:raw_nickel',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_iron',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_nickel_ore',
            ore_raw: 'modern_industrialization:raw_nickel',
            min: 3,
            max: 6
        },
        extra: {
            id: 'minecraft:raw_iron',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // mozanite ore
    {
        main: {
            ore_block: 'modern_industrialization:mozanite_ore',
            ore_raw: 'modern_industrialization:mozanite_crushed_dust',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_tungsten',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    {
        main: {
            ore_block: 'modern_industrialization:deepslate_mozanite_ore',
            ore_raw: 'modern_industrialization:mozanite_crushed_dust',
            min: 3,
            max: 6
        },
        extra: {
            id: 'modern_industrialization:raw_tungsten',
            amount: 2,
            chance: 0.4
        },
        exp: 10,
        time: 30
    },
    // titanium ore
    {
        main: {
            ore_block: 'modern_industrialization:titanium_ore',
            ore_raw: 'modern_industrialization:raw_titanium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:ruby_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    // platinum ore
    {
        main: {
            ore_block: 'modern_industrialization:platinum_ore',
            ore_raw: 'modern_industrialization:raw_platinum',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_gold',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    // quartz ore
    {
        main: {
            ore_block: 'modern_industrialization:quartz_ore',
            ore_raw: 'modern_industrialization:quartz_crushed_dust',
            min: 4,
            max: 6
        },
        extra: {
            id: 'ae2:certus_quartz_dust',
            amount: 2,
            chance: 0.2
        },
        exp: 5,
        time: 20
    },
    // mythril ore
    {
        main: {
            ore_block: 'mythicmetals:mythril_ore',
            ore_raw: 'mythicmetals:raw_mythril',
            min: 3,
            max: 5
        },
        extra: {
            id: 'spectrum:raw_azurite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_mythril_ore',
            ore_raw: 'mythicmetals:raw_mythril',
            min: 3,
            max: 6
        },
        extra: {
            id: 'spectrum:raw_azurite',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // morkite ore
    {
        main: {
            ore_block: 'mythicmetals:morkite_ore',
            ore_raw: 'mythicmetals:morkite',
            min: 4,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_morkite_ore',
            ore_raw: 'mythicmetals:morkite',
            min: 4,
            max: 8
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // carmot ore
    {
        main: {
            ore_block: 'mythicmetals:carmot_ore',
            ore_raw: 'mythicmetals:raw_carmot',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_adamantite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_carmot_ore',
            ore_raw: 'mythicmetals:raw_carmot',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_adamantite',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // adamantite ore
    {
        main: {
            ore_block: 'mythicmetals:adamantite_ore',
            ore_raw: 'mythicmetals:raw_adamantite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_carmot',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 40
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_adamantite_ore',
            ore_raw: 'mythicmetals:raw_adamantite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_carmot',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 50
    },
    // runite ore
    {
        main: {
            ore_block: 'mythicmetals:runite_ore',
            ore_raw: 'mythicmetals:raw_runite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_aquarium',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_runite_ore',
            ore_raw: 'mythicmetals:raw_runite',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_aquarium',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // prometheum ore
    {
        main: {
            ore_block: 'mythicmetals:prometheum_ore',
            ore_raw: 'mythicmetals:raw_prometheum',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_orichalcum',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_prometheum_ore',
            ore_raw: 'mythicmetals:raw_prometheum',
            min: 3,
            max: 6
        },
        extra: {
            id: 'mythicmetals:raw_orichalcum',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // orichalcum ore
    {
        main: {
            ore_block: 'mythicmetals:orichalcum_ore',
            ore_raw: 'mythicmetals:raw_orichalcum',
            min: 3,
            max: 5
        },
        extra: {
            id: 'spectrum:raw_malachite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_orichalcum_ore',
            ore_raw: 'mythicmetals:raw_orichalcum',
            min: 3,
            max: 6
        },
        extra: {
            id: 'spectrum:raw_malachite',
            amount: 2,
            chance: 0.4
        },
        exp: 15,
        time: 30
    },
    // unobtainium ore
    {
        main: {
            ore_block: 'mythicmetals:unobtainium_ore',
            ore_raw: 'mythicmetals:unobtainium',
            min: 2,
            max: 4
        },
        extra: {
            id: 'mythicmetals:raw_stormyx',
            amount: 2,
            chance: 0.2
        },
        exp: 20,
        time: 50
    },
    {
        main: {
            ore_block: 'mythicmetals:deepslate_unobtainium_ore',
            ore_raw: 'mythicmetals:unobtainium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_stormyx',
            amount: 2,
            chance: 0.4
        },
        exp: 40,
        time: 80
    },
    // banglum ore
    {
        main: {
            ore_block: 'mythicmetals:banglum_ore',
            ore_raw: 'mythicmetals:raw_banglum',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_palladium',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // stormyx ore
    {
        main: {
            ore_block: 'mythicmetals:stormyx_ore',
            ore_raw: 'mythicmetals:raw_stormyx',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_carmot',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // starrite ore
    {
        main: {
            ore_block: 'mythicmetals:starrite_ore',
            ore_raw: 'mythicmetals:starrite',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_kyber',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // kyber ore
    {
        main: {
            ore_block: 'mythicmetals:kyber_ore',
            ore_raw: 'mythicmetals:raw_kyber',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:starrite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // quadrillum ore
    {
        main: {
            ore_block: 'mythicmetals:quadrillum_ore',
            ore_raw: 'mythicmetals:raw_quadrillum',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_mythril',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // aquarium ore
    {
        main: {
            ore_block: 'mythicmetals:aquarium_ore',
            ore_raw: 'mythicmetals:raw_aquarium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:morkite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // palladium ore
    {
        main: {
            ore_block: 'mythicmetals:palladium_ore',
            ore_raw: 'mythicmetals:raw_palladium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'mythicmetals:raw_adamantite',
            amount: 2,
            chance: 0.2
        },
        exp: 10,
        time: 20
    },
    // osmium ore
    {
        main: {
            ore_block: 'mythicmetals:osmium_ore',
            ore_raw: 'mythicmetals:raw_osmium',
            min: 3,
            max: 5
        },
        extra: {
            id: 'modern_industrialization:raw_iridium',
            amount: 2,
            chance: 0.1
        },
        exp: 10,
        time: 20
    },
    // midas gold ore
    {
        main: {
            ore_block: 'mythicmetals:midas_gold_ore',
            ore_raw: 'mythicmetals:raw_midas_gold',
            min: 3,
            max: 5
        },
        extra: {
            id: 'minecraft:raw_gold',
            amount: 3,
            chance: 0.4
        },
        exp: 10,
        time: 20
    },
]

ServerEvents.recipes(event => {

    event.remove({type: 'neepmeat:advanced_crushing'})
    large_crushing.forEach(recipe => {
        event.recipes.neepmeat.advanced_crushing({
            "input": {
                "resource": recipe.main.ore_block,
                "amount": 1
            },
            "output": {
                "resource": recipe.main.ore_raw,
                "min": recipe.main.min,
                "max": recipe.main.max
            },
            "extra": {
                "resource": recipe.extra.id,
                "amount": recipe.extra.amount,
                "chance": recipe.extra.chance
            },
            "experience": recipe.exp,
            "processtime": recipe.time
        })
    })

})
