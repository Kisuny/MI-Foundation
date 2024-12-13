// basic: Cyan, Magenta and Yellow pedestal variants
// simple: CMY pedestal variant with matching structure
// advanced: Onyx pedestal variant with matching structure
// complex: Moonstone pedestal variant with matching structure

const customPedestalCraft = (event, args) => {
    event.custom({
        "type": "spectrum:pedestal",
        "time": args.time,
        "tier": args.tier || "basic",
        "cyan": args.topaz || 0,
        "magenta": args.amethyst || 0,
        "yellow": args.citrine || 0,
        "white": args.moonstone || 0,
        "black": args.onyx || 0,
        "experience": args.experience || 0.0,
        "pattern": args.pattern,
        "key": args.keys,
        "result": args.result,
        "required_advancement": args.advancement,
        "disable_yield_upgrades": args.yield_upgrades || false,
    });
};


ServerEvents.recipes(event => {

    // T4 crafts
    customPedestalCraft(event, {
        tier: "complex", time: 400, onyx: 8, experience: 0.5, yield_upgrades: true,
        pattern: [
            "WWW",
            "WQW",
            "WWW"
        ],
        keys: {
            "Q": { "item": "mythicmetals:raw_runite" },
            "W": { "item": "spectrum:paltaeria_fragments" },
        },
        result: {
            "item": "spectrum:paltaeria_gem",
            "count": 1
        },
        advancement: "spectrum:hidden/collect_paltaeria_gem",
    });
    customPedestalCraft(event, {
        tier: "complex", time: 1200, topaz: 4, amethyst: 8, moonstone: 2, onyx: 8, experience: 2.0,
        pattern: [
            " WQ",
            " EW",
            "E  "
        ],
        keys: {
            "Q": { "item": "spectrum:paltaeria_gem" },
            "W": { "item": "mythicmetals:celestium_ingot" },
            "E": { "item": "modern_industrialization:basalt_rod" },
        },
        result: {
            "item": "spectrum:exchanging_staff",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/exchanging_staff"
    });
    customPedestalCraft(event, {
        tier: "complex", time: 2400, topaz: 16, amethyst: 32, onyx: 8, experience: 8.0,
        pattern: [
            "YTY",
            "ERE",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:durasteel_plate" },
            "W": { "item": "spectrum:paltaeria_gem" },
            "E": { "item": "modern_industrialization:calcite_plate" },
            "R": { "item": "mythicmetals:unobtainium_block" },
            "T": { "item": "spectrum:liquid_crystal_bucket" },
            "Y": { "item": "spectrum:bismuth_crystal" },
        },
        result: {
            "item": "spectrum:crystallarieum",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/crystallarieum"
    });
    customPedestalCraft(event, {
        tier: "complex", time: 12000, moonstone: 32, onyx: 32, experience: 4.0,
        pattern: [
            "WQW",
            "RER",
            "TTT"
        ],
        keys: {
            "Q": { "item": "mythicmetals:metallurgium_ingot" },
            "W": { "item": "spectrum:stratine_gem" },
            "E": { "item": "kubejs:star_core" },
            "R": { "item": "mythicmetals:celestium_ingot" },
            "T": { "item": "modern_industrialization:durasteel_plate" },
        },
        result: {
            "item": "spectrum:upgrade_yield",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_yield"
    });
    customPedestalCraft(event, {
        tier: "complex", time: 24000, amethyst: 32, moonstone: 32, onyx: 32, experience: 16.0,
        pattern: [
            "EWE",
            "WQW",
            "EWE"
        ],
        keys: {
            "Q": { "item": "spectrum:paltaeria_gem" },
            "W": { "item": "kubejs:sharped_amethyst" },
            "E": { "item": "modern_industrialization:metallurgium_plate" }
        },
        result: {
            "item": "spectrum:celestial_pocketwatch",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/celestial_pocketwatch"
    });
    customPedestalCraft(event, {
        tier: "complex", time: 1200, amethyst: 8, citrine: 16, onyx: 8, experience: 16.0,
        pattern: [
            "EBC",
            " TB",
            "T E"
        ],
        keys: {
            "C": { "item": "spectrum:effulgent_feather" },
            "T": { "item": "modern_industrialization:basalt_rod" },
            "B": { "item": "kubejs:dragonbone_alloy" },
            "E": { "item": "spectrum:dragonbone_chunk" },
        },
        result: {
            "item": "spectrum:dragonrending_pickaxe",
            "nbt": { "Enchantments": [{ "id": "spectrum:razing", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/dragonrending_pickaxe"
    });
    customPedestalCraft(event, {
        tier: "complex", time: 1200, citrine: 16, onyx: 8, experience: 16.0,
        pattern: [
            "BRT",
            " CR",
            "C B"
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_rod" },
            "T": { "item": "spectrum:resonance_shard" },
            "R": { "item": "modern_industrialization:celestium_plate" },
            "B": { "item": "spectrum:moonstone_shard" },
        },
        result: {
            "item": "spectrum:resonant_pickaxe",
            "nbt": { "Enchantments": [{ "id": "spectrum:resonance", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/resonant_pickaxe"
    });
    // T3 Crafts
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, citrine: 8, experience: 2.0,
        pattern: [
            " C ",
            "CTC",
            " R "
        ],
        keys: {
            "C": { "item": "modern_industrialization:onyx_plate" },
            "T": { "item": "minecraft:redstone" },
            "R": { "item": "modern_industrialization:banglum_plate" },
        },
        result: {
            "item": "spectrum:crescent_clock",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/crescent_clock"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 1600, topaz: 8, citrine: 4, onyx: 2, experience: 2.0,
        pattern: [
            "TRT",
            "WEW",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:basalt_plate" },
            "W": { "item": "modern_industrialization:calcite_plate" },
            "E": { "item": "spectrum:stratine_fragments" },
            "R": { "item": "spectrum:red_pigment" },
            "T": { "item": "modern_industrialization:copper_plate" },
        },
        result: {
            "item": "spectrum:restocking_chest",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/restocking_chest"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 3600, topaz: 8, amethyst: 8, citrine: 8, onyx: 4, experience: 4.0,
        pattern: [
            "QQQ",
            "WRW",
            "EEE"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:runite_plate" },
            "W": { "item": "spectrum:stratine_gem" },
            "E": { "item": "modern_industrialization:quadrillum_plate" },
            "R": { "item": "kibe:vacuum_hopper" },
        },
        result: {
            "item": "spectrum:black_hole_chest",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/black_hole_chest"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 1200, topaz: 4, amethyst: 8, citrine: 4, onyx: 2, experience: 4.0,
        pattern: [
            "TRT",
            "YEY",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:quadrillum_plate" },
            "W": { "item": "mythicmetals:hallowed_ingot" },
            "E": { "item": "mythicmetals:runite_ingot" },
            "R": { "item": "mythicmetals:star_platinum" },
            "T": { "item": "modern_industrialization:stormyx_plate" },
            "Y": { "item": "modern_industrialization:calcite_plate" },
        },
        result: {
            "item": "spectrum:upgrade_speed",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_speed"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, onyx: 4, experience: 0.5, disable_yield_upgrades: true,
        pattern: [
            "WWW",
            "WQW",
            "WWW"
        ],
        keys: {
            "Q": { "item": "mythicmetals:raw_banglum" },
            "W": { "item": "spectrum:stratine_fragments" },
        },
        result: {
            "item": "spectrum:stratine_gem",
            "count": 1
        },
        advancement: "spectrum:hidden/collect_stratine_gem"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 240, topaz: 2, amethyst: 2, citrine: 2, onyx: 2, experience: 1.0,
        pattern: [
            "TQT",
            "ERE",
            "WQW"
        ],
        keys: {
            "Q": { "item": "spectrum:mermaids_gem" },
            "W": { "item": "mythicmetals:hallowed_ingot" },
            "E": { "item": "spectrum:shimmerstone_gem" },
            "R": { "item": "minecraft:bucket" },
            "T": { "item": "mythicmetals:stormyx_ingot" },
        },
        result: {
            "item": "spectrum:liquid_crystal_bucket",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/liquid_crystal"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 200, experience: 0.5,
        pattern: [
            " Q ",
            "QWQ",
            "EQ "
        ],
        keys: {
            "Q": { "item": "modern_industrialization:basalt_plate" },
            "W": { "item": "modern_industrialization:basalt_ring" },
            "E": { "item": "kubejs:raw_magical_steel" },
        },
        result: {
            "item": "spectrum:fanciful_circlet",
            "count": 1
        },
        advancement: "spectrum:unlocks/trinkets/fanciful_circlet"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 1200, amethyst: 8, citrine: 8, onyx: 2, experience: 4.0,
        pattern: [
            "EQE",
            "RWR",
            "TTT"
        ],
        keys: {
            "Q": { "item": "spectrum:quitoxic_powder" },
            "W": { "item": "spectrum:stratine_fragments" },
            "E": { "item": "modern_industrialization:banglum_plate" },
            "R": { "item": "modern_industrialization:calcite_plate" },
            "T": { "item": "modern_industrialization:basalt_plate" },
        },
        result: {
            "item": "spectrum:potion_workshop",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/potion_workshop"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 400, amethyst: 8, onyx: 2, experience: 2.0,
        pattern: [
            "QWQ",
            "RWR",
            "RER"
        ],
        keys: {
            "Q": { "item": "spectrum:stratine_fragments" },
            "W": { "item": "mythicmetals:runite_block" },
            "E": { "item": "modern_industrialization:calcite_plate" },
            "R": { "item": "modern_industrialization:basalt_plate" },
        },
        result: {
            "item": "spectrum:enchanter",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/enchanter"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, citrine: 16, onyx: 0, experience: 4.0,
        pattern: [
            " E ",
            "EWE",
            "WQW"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:stormyx_large_plate" },
            "W": { "item": "modern_industrialization:quadrillum_plate" },
            "E": { "item": "spectrum:storm_stone" },
        },
        result: {
            "item": "spectrum:crystal_apothecary",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/crystal_apothecary"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 200, topaz: 2, amethyst: 2, citrine: 2, experience: 2.0,
        pattern: [
            "ERE",
            "WQW",
            "ERE"
        ],
        keys: {
            "Q": { "item": "minecraft:glass_bottle" },
            "W": { "item": "spectrum:neolith" },
            "E": { "item": "modern_industrialization:orichalcum_plate" },
            "R": { "item": "spectrum:raw_azurite" },
        },
        result: {
            "item": "spectrum:bottle_of_decay_away",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/bottle_of_decay_away"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 1200, onyx: 2, experience: 2.0,
        pattern: [
            "EQE",
            " W ",
            "RER"
        ],
        keys: {
            "Q": { "item": "spectrum:item_bowl_calcite" },
            "W": { "item": "kubejs:hirschgeist_heart" },
            "E": { "item": "modern_industrialization:calcite_plate" },
            "R": { "item": "spectrum:azurite_block" },
        },
        result: {
            "item": "spectrum:spirit_instiller",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/spirit_instiller"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 12000, topaz: 64, amethyst: 64, citrine: 64, onyx: 16, experience: 4.0,
        pattern: [
            "TYT",
            "EWQ",
            "RRR"
        ],
        keys: {
            "Q": { "item": "mythicmetals:hallowed_ingot" },
            "W": { "item": "mythicmetals:celestium_ingot" },
            "E": { "item": "mythicmetals:runite_ingot" },
            "R": { "item": "modern_industrialization:durasteel_plate" },
            "T": { "item": "modern_industrialization:orichalcum_plate" },
            "Y": { "item": "modern_industrialization:azurite_plate" },
        },
        result: {
            "item": "spectrum:upgrade_efficiency",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_efficiency"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 600, citrine: 8, experience: 2.0,
        pattern: [
            "EEE",
            "WQW",
            "EEE"
        ],
        keys: {
            "Q": { "item": "minecraft:book" },
            "W": { "item": "spectrum:jade_vine_petals" },
            "E": { "item": "mythicmetals:midas_gold_ingot" },
        },
        result: {
            "item": "spectrum:gilded_book",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/gilded_book"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 600, topaz: 8, amethyst: 8, citrine: 16, onyx: 4, experience: 8.0,
        pattern: [
            " E ",
            "EWE",
            "RQR"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:palladium_plate" },
            "W": { "item": "spectrum:stratine_gem" },
            "E": { "item": "modern_industrialization:calcite_plate" },
            "R": { "item": "modern_industrialization:basalt_plate" },
        },
        result: {
            "item": "spectrum:cinderhearth",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/cinderhearth"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 12000, topaz: 8, amethyst: 16, citrine: 8, onyx: 16, experience: 8.0,
        pattern: [
            " R ",
            "WEW",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:durasteel_plate" },
            "W": { "item": "spectrum:storm_stone" },
            "E": { "item": "spectrum:upgrade_speed" },
            "R": { "item": "mythicmetals:celestium_ingot" },
        },
        result: {
            "item": "spectrum:upgrade_speed2",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_speed2"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 160, amethyst: 16, onyx: 4, experience: 2.0,
        pattern: [
            "QWQ",
            "WEW",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:prometheum_plate" },
            "W": { "item": "modern_industrialization:stormyx_plate" },
            "E": { "item": "mythicmetals:raw_quadrillum" },
        },
        result: {
            "item": "spectrum:knowledge_gem",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/knowledge_gem"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 2400, topaz: 8, amethyst: 16, citrine: 8, experience: 16.0,
        pattern: [
            "WQW",
            "RTR",
            "EEE"
        ],
        keys: {
            "Q": { "item": "spectrum:storm_stone" },
            "W": { "item": "mythicmetals:kyber_ingot" },
            "E": { "item": "modern_industrialization:basalt_plate" },
            "R": { "item": "modern_industrialization:calcite_plate" },
            "T": { "item": "mythicmetals:prometheum_block" },
        },
        result: {
            "item": "spectrum:upgrade_experience",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_experience"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 5500, topaz: 8, amethyst: 16, citrine: 8, experience: 32.0,
        pattern: [
            "RTR",
            "WEW",
            "QQQ"
        ],
        keys: {
            "Q": { "item": "modern_industrialization:durasteel_plate" },
            "W": { "item": "modern_industrialization:calcite_plate" },
            "E": { "item": "spectrum:upgrade_experience" },
            "R": { "item": "spectrum:storm_stone" },
            "T": { "item": "spectrum:moonstone_shard" },
        },
        result: {
            "item": "spectrum:upgrade_experience2",
            "count": 1
        },
        advancement: "spectrum:unlocks/upgrades/upgrade_experience2"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 200, experience: 0.5,
        pattern: [
            " Q ",
            "Q Q",
            "WQ "
        ],
        keys: {
            "Q": { "item": "minecraft:leather" },
            "W": { "item": "mythicmetals:midas_gold_ingot" },
        },
        result: {
            "item": "spectrum:fanciful_belt",
            "count": 1
        },
        advancement: "spectrum:unlocks/trinkets/fanciful_belt"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 200, experience: 0.5,
        pattern: [
            " Q ",
            "Q Q",
            "WQ "
        ],
        keys: {
            "Q": { "item": "minecraft:lapis_lazuli" },
            "W": { "item": "mythicmetals:midas_gold_ingot" },
        },
        result: {
            "item": "spectrum:fanciful_pendant",
            "count": 1
        },
        advancement: "spectrum:unlocks/trinkets/fanciful_pendant"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 200, experience: 0.5,
        pattern: [
            "Q Q",
            "QQQ",
            "WWW"
        ],
        keys: {
            "Q": { "item": "minecraft:leather" },
            "W": { "item": "modern_industrialization:midas_gold_plate" },
        },
        result: {
            "item": "spectrum:fanciful_gloves",
            "count": 1
        },
        advancement: "spectrum:unlocks/trinkets/fanciful_gloves"
    });
    customPedestalCraft(event, {
        tier: 'advanced', time: 800, topaz: 8, experience: 1.0,
        pattern: [
            "QQQ",
            "RWE",
            "RRR"
        ],
        keys: {
            "Q": { "item": "spectrum:pyrite" },
            "W": { "item": "spectrum:storm_stone" },
            "E": { "item": "mythicmetals:adamantite_ingot" },
            "R": { "item": "modern_industrialization:citrine_plate" },
        },
        result: {
            "item": "spectrum:block_breaker",
            "count": 1
        },
        advancement: "spectrum:unlocks/redstone/block_breaker"
    });
    // T2 crafts
    // Drawer upgrade 3
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, topaz: 4, amethyst: 6, experience: 2.0,
        pattern: [
            "CRB",
            " TR",
            "T C"
        ],
        keys: {
            "C": { "item": "minecraft:phantom_membrane" },
            "T": { "item": "modern_industrialization:basalt_rod" },
            "R": { "item": "kubejs:raw_magical_steel" },
            "B": { "item": "spectrum:quitoxic_powder" },
        },
        result: {
            "item": "spectrum:oblivion_pickaxe",
            "nbt": { "Enchantments": [{ "id": "spectrum:voiding", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/oblivion_pickaxe"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 40, topaz: 8, amethyst: 2, experience: 2.0,
        pattern: [
            "EQE",
            "QWQ",
            "EQE"
        ],
        keys: {
            "Q": { "item": "minecraft:bamboo" },
            "W": { "item": "minecraft:phantom_membrane" },
            "E": { "item": "mythicmetals:kyber_ingot" }
        },
        result: {
            "item": "spectrum:enchantment_canvas",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/enchantment_canvas"

    });
    customPedestalCraft(event, {
        tier: 'simple', time: 300, topaz: 1, amethyst: 1, citrine: 1, experience: 1.0,
        pattern: [
            "SGS",
            "GPG",
            "SGS"
        ],
        keys: {
            "P": { "tag": "spectrum:pigments" },
            "G": { "item": "minecraft:glass" },
            "S": { "item": "spectrum:shimmerstone_gem" }
        },
        result: {
            "item": "spectrum:ink_flask",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/basic_ink_storage_items"
    });

    customPedestalCraft(event, {
        tier: 'simple', time: 600, topaz: 2, amethyst: 2, citrine: 2, experience: 2.0,
        pattern: [
            "RRS",
            "RC ",
            " C "
        ],
        keys: {
            "C": { "item": "minecraft:stick" },
            "R": { "tag": "c:iron_plates" },
            "S": { "item": "kubejs:raw_magical_steel" },
        },
        result: {
            "item": "spectrum:multitool",
            "nbt": { "Enchantments": [{ "id": "minecraft:efficiency", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:build_basic_pedestal_structure"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 400, topaz: 4, amethyst: 4, citrine: 4, experience: 1.0,
        pattern: [
            "TSR",
            "CCC",
            "   "
        ],
        keys: {
            "C": { "item": "minecraft:stone" },
            "R": { "item": "minecraft:redstone" },
            "S": { "item": "modern_industrialization:onyx_plate" },
            "T": { "item": "minecraft:redstone_torch" },
        },
        result: {
            "item": "spectrum:redstone_wireless",
            "count": 2
        },
        advancement: "spectrum:create_onyx_shard"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, topaz: 4, citrine: 16, experience: 2.0,
        pattern: [
            " AT",
            " RA",
            "C  "
        ],
        keys: {
            "C": { "item": "modern_industrialization:calcite_rod" },
            "R": { "item": "minecraft:stick" },
            "A": { "item": "mythicmetals:mythril_ingot" },
            "T": { "item": "spectrum:shimmerstone_gem" },
        },
        result: {
            "item": "spectrum:radiance_staff",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/radiance_staff"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 600, topaz: 8, amethyst: 8, citrine: 8, experience: 2.0, yield_upgrades: true,
        pattern: [
            "TAT",
            "TRT",
            "TCT"
        ],
        keys: {
            "C": { "item": "spectrum:topaz_storage_block" },
            "R": { "item": "spectrum:amethyst_storage_block" },
            "A": { "item": "spectrum:citrine_storage_block" },
            "T": { "item": "modern_industrialization:calcite_plate" },
        },
        result: {
            "item": "spectrum:fusion_shrine_calcite",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/fusion_shrine"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 600, topaz: 8, amethyst: 8, citrine: 8, experience: 2.0, yield_upgrades: true,
        pattern: [
            "BAB",
            "TRT",
            "BCB"
        ],
        keys: {
            "C": { "item": "spectrum:topaz_storage_block" },
            "R": { "item": "spectrum:amethyst_storage_block" },
            "A": { "item": "spectrum:citrine_storage_block" },
            "T": { "item": "modern_industrialization:calcite_plate" },
            "B": { "item": "modern_industrialization:basalt_plate" },
        },
        result: {
            "item": "spectrum:fusion_shrine_basalt",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/fusion_shrine",
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, topaz: 12, citrine: 4, experience: 2.0,
        pattern: [
            " RA",
            " TR",
            "C  "
        ],
        keys: {
            "C": { "item": "modern_industrialization:calcite_rod" },
            "R": { "item": "mythicmetals:palladium_ingot" },
            "A": { "item": "spectrum:stratine_fragments" },
            "T": { "item": "minecraft:stick" },
        },
        result: {
            "item": "spectrum:constructors_staff",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/constructors_staff"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, topaz: 12, citrine: 4, experience: 2.0,
        pattern: [
            "C C",
            "AQR",
            "TTT"
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_plate" },
            "R": { "item": "spectrum:yellow_pigment" },
            "A": { "item": "spectrum:cyan_pigment" },
            "Q": { "item": "spectrum:magenta_pigment" },
            "T": { "item": "modern_industrialization:calcite_plate" },
        },
        result: {
            "item": "spectrum:color_picker",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/color_picker"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 1200, amethyst: 12, citrine: 4, experience: 2.0,
        pattern: [
            "CRB",
            " QR",
            "T C"
        ],
        keys: {
            "C": { "item": "mythicmetals:prometheum_ingot" },
            "R": { "item": "mythicmetals:banglum_ingot" },
            "Q": { "item": "minecraft:moss_block" },
            "T": { "item": "minecraft:stick" },
            "B": { "item": "spectrum:brown_pigment" }
        },
        result: {
            "item": "spectrum:natures_staff",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/natures_staff"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 600, amethyst: 4, experience: 2.0,
        pattern: [
            "CAC",
            "ARA",
            "CAC"
        ],
        keys: {
            "C": { "item": "modern_industrialization:orichalcum_plate" },
            "R": { "item": "spectrum:mermaids_gem" },
            "A": { "item": "modern_industrialization:aquarium_plate" }
        },
        result: {
            "item": "spectrum:block_flooder",
            "count": 4
        },
        advancement: "spectrum:unlocks/blocks/block_flooder"
    });
    // T1 crafts
    customPedestalCraft(event, {
        tier: 'basic', time: 300, amethyst: 8, citrine: 8, experience: 2.0,
        pattern: [
            " A ",
            " A ",
            " S "
        ],
        keys: {
            "S": { "item": "modern_industrialization:midas_gold_plate" },
            "A": { "item": "kubejs:sharped_amethyst" }
        },
        result: {
            "item": "spectrum:razor_falchion",
            "nbt": { "Enchantments": [{ "id": "minecraft:looting", "lvl": "3s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/razor_falchion"
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 8, experience: 0.5,
        pattern: [
            " TE",
            "REW",
            "E Q"
        ],
        keys: {
            "Q": { "item": "spectrum:mermaids_gem" },
            "W": { "item": "minecraft:string" },
            "E": { "item": "modern_industrialization:basalt_rod" },
            "R": { "item": "mythicmetals:aquarium_pearl" },
            "T": { "item": "kubejs:tears_of_the_sea" },
        },
        result: {
            "item": "spectrum:lagoon_rod",
            "nbt": { "Enchantments": [{ "id": "minecraft:lure", "lvl": "3s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/lagoon_rod"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 600, topaz: 16, experience: 0.5,
        pattern: [
            "WET",
            " RE",
            "R W"
        ],
        keys: {
            "W": { "item": "modern_industrialization:topaz_plate" },
            "E": { "item": "mythicmetals:runite_ingot" },
            "R": { "item": "modern_industrialization:basalt_rod" },
            "T": { "item": "spectrum:mermaids_gem" },
        },
        result: {
            "item": "spectrum:tender_pickaxe",
            "nbt": { "Enchantments": [{ "id": "minecraft:silk_touch", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/tender_pickaxe"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 200, topaz: 8, experience: 1.0,
        pattern: [
            "BBB",
            "RTC",
            "CCC"
        ],
        keys: {
            "C": { "item": "modern_industrialization:calcite_large_plate" },
            "T": { "item": "modern_industrialization:topaz_plate" },
            "R": { "item": "minecraft:redstone" },
            "B": { "item": "modern_industrialization:banglum_plate" },
        },
        result: {
            "item": "spectrum:block_placer",
            "count": 1
        },
        advancement: "spectrum:unlocks/redstone/block_placer"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 200, citrine: 8, experience: 1.0,
        pattern: [
            "TCR",
            "BBB",
            "   "
        ],
        keys: {
            "C": { "item": "modern_industrialization:citrine_plate" },
            "T": { "item": "minecraft:redstone_torch" },
            "R": { "item": "minecraft:redstone" },
            "B": { "item": "minecraft:stone" },
        },
        result: {
            "item": "spectrum:redstone_calculator",
            "count": 1
        },
        advancement: "spectrum:unlocks/redstone/redstone_calculator"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 200, topaz: 8, experience: 1.0,
        pattern: [
            "TAR",
            "CCC",
            "   "
        ],
        keys: {
            "C": { "item": "modern_industrialization:copper_plate" },
            "R": { "item": "minecraft:redstone" },
            "A": { "item": "modern_industrialization:amethyst_plate" },
            "T": { "item": "minecraft:redstone_torch" },
        },
        result: {
            "item": "spectrum:redstone_timer",
            "count": 1
        },
        advancement: "spectrum:unlocks/redstone/redstone_timer"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 600, citrine: 8, experience: 2.0,
        pattern: [
            "TAR",
            " CA",
            "C T"
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_rod" },
            "R": { "item": "spectrum:shimmerstone_gem" },
            "A": { "item": "modern_industrialization:midas_gold_plate" },
            "T": { "item": "modern_industrialization:citrine_plate" },
        },
        result: {
            "item": "spectrum:lucky_pickaxe",
            "nbt": { "Enchantments": [{ "id": "minecraft:fortune", "lvl": "3s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/lucky_pickaxe"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 800, amethyst: 4, citrine: 8, experience: 2.0,
        pattern: [
            "ZAC",
            "ARS",
            "R T"
        ],
        keys: {
            "C": { "item": "minecraft:blaze_rod" },
            "R": { "item": "mythicmetals:palladium_ingot" },
            "A": { "item": "spectrum:orange_pigment" },
            "S": { "item": "minecraft:string" },
            "T": { "item": "mythicmetals:banglum_chunk" },
            "Z": { "item": "kubejs:tears_of_the_sea" }
        },
        result: {
            "item": "spectrum:molten_rod",
            "nbt": { "Enchantments": [{ "id": "spectrum:autosmelt", "lvl": "1s" }] },
            "count": 1
        },
        advancement: "spectrum:unlocks/equipment/molten_rod"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 160, amethyst: 8, experience: 0.5,
        pattern: [
            "AAA",
            "CRC",
            "AAA"
        ],
        keys: {
            "C": { "item": "kubejs:raw_magical_steel" },
            "R": { "tag": "spectrum:pigments" },
            "A": { "tag": "spectrum:colored_planks" },
        },
        result: {
            "item": "spectrum:titration_barrel",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/titration_barrel"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 240, topaz: 16, experience: 0.5,
        pattern: [
            "CAC",
            "ARA",
            "AAA"
        ],
        keys: {
            "C": { "item": "mythicmetals:kyber_ingot" },
            "R": { "item": "spectrum:quitoxic_powder" },
            "A": { "item": "minecraft:rabbit_hide" },
        },
        result: {
            "item": "spectrum:bottomless_bundle",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/bottomless_bundle"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 8, experience: 2.0,
        pattern: [
            "RAR",
            "CTC",
            "CCC"
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_plate" },
            "R": { "item": "modern_industrialization:iron_plate" },
            "A": { "item": "modern_industrialization:calcite_plate" },
            "T": { "item": "kubejs:raw_magical_steel" },
        },
        result: {
            "item": "spectrum:compacting_chest",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/compacting_chest"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 120, citrine: 8, experience: 1.0,
        pattern: [
            "AAA",
            "CRC",
            "CCC"
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_plate" },
            "R": { "item": "minecraft:red_dye" },
            "A": { "item": "modern_industrialization:calcite_plate" },
        },
        result: {
            "item": "spectrum:private_chest",
            "count": 1
        },
        advancement: "spectrum:unlocks/blocks/private_chest"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 40, amethyst: 2, experience: 0.1,
        pattern: [
            "CC ",
            "RR ",
            "   "
        ],
        keys: {
            "C": { "item": "modern_industrialization:basalt_plate" },
            "R": { "item": "modern_industrialization:calcite_plate" },
        },
        result: {
            "item": "spectrum:crafting_tablet",
            "count": 1
        },
        advancement: "spectrum:unlocks/items/crafting_tablet"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 100, topaz: 2, experience: 0.1,
        pattern: [
            " W ",
            "WQW",
            " W "
        ],
        keys: {
            "Q": { "item": "minecraft:diamond" },
            "W": { "item": "modern_industrialization:aquarium_plate" },
        },
        result: {
            "item": "kubejs:aquarium_diamond",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 500, topaz: 2, amethyst: 2, citrine: 2, experience: 0.5,
        pattern: [
            " W ",
            "WQW",
            " W "
        ],
        keys: {
            "Q": { "item": "kubejs:ditcheryatina" },
            "W": { "item": "minecraft:rabbit_hide" },
        },
        result: {
            "item": "minecraft:rabbit_foot",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 100, topaz: 1, amethyst: 1, experience: 0.1,
        pattern: [
            " W ",
            "WQW",
            " W "
        ],
        keys: {
            "Q": { "item": "minecraft:ender_pearl" },
            "W": { "item": "modern_industrialization:prometheum_plate" },
        },
        result: {
            "item": "kubejs:prometheum_ender_pearl",
            "count": 1
        },
        advancement: "spectrum:craft_using_pedestal"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 200, topaz: 4, citrine: 4, experience: 1.0,
        pattern: [
            "WWW",
            "QER",
            "RRR"
        ],
        keys: {
            "Q": { "item": "mythicmetals:adamantite_ingot" },
            "W": { "item": "modern_industrialization:banglum_plate" },
            "E": { "item": "spectrum:storm_stone" },
            "R": { "item": "modern_industrialization:basalt_plate" },
        },
        result: {
            "item": "spectrum:block_detector",
            "count": 1
        },
        advancement: "spectrum:unlocks/redstone/block_detector"
    });

    const gemForArrow = ['malachite', 'onyx', 'moonstone', 'topaz', 'amethyst', 'citrine']
    gemForArrow.forEach(arrow => {
        customPedestalCraft(event, {
            tier: 'basic', time: 200, experience: 1.0,
            pattern: [
                " E ",
                "QRQ",
                "TWT"
            ],
            keys: {
                "Q": { "item": `modern_industrialization:${arrow}_nugget` },
                "W": { "item": "spectrum:effulgent_feather" },
                "E": { "item": "kubejs:sharped_amethyst" },
                "R": { "item": "modern_industrialization:basalt_rod" },
                "T": { "item": "modern_industrialization:malachite_nugget" },
            },
            result: {
                "item": `spectrum:${arrow}_glass_arrow`,
                "count": 8
            },
            advancement: "spectrum:unlocks/malachite/glass_arrows",
        })
    });


    // Enhanced Drills
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
    drillTypes.forEach(element => {
        customPedestalCraft(event, {
            tier: 'complex', time: 400, topaz: 4, citrine: 16,moonstone: 8, experience: 2.0,
            pattern: [
                "BCP",
                "GRC",
                "BGB"
            ],
            keys: {
                "R": { "item": `modern_industrialization:${element}_rod` },
                "G": { "item": `modern_industrialization:${element}_gear` },
                "B": { "item": `modern_industrialization:${element}_bolt` },
                "P": { "item": "modern_industrialization:malachite_plate" },
                "C": { "item": "modern_industrialization:malachite_curved_plate" },
            },
            result: {
                "item": `kubejs:malachite_enhanced_${element}_drill_head`,
                "count": 1
            },
            advancement: 'spectrum:lategame/grow_malachite_in_crystallarieum'
        });
        customPedestalCraft(event, {
            tier: 'advanced', time: 200, amethyst: 6,topaz: 8, citrine: 2,onyx: 8, experience: 2.0,
            pattern: [
                "BCP",
                "GRC",
                "BGB"
            ],
            keys: {
                "R": { "item": `modern_industrialization:${element}_rod` },
                "G": { "item": `modern_industrialization:${element}_gear` },
                "B": { "item": `modern_industrialization:${element}_bolt` },
                "P": { "item": "modern_industrialization:azurite_plate" },
                "C": { "item": "modern_industrialization:azurite_curved_plate" },
            },
            result: {
                "item": `kubejs:azurite_plated_${element}_drill_head`,
                "count": 1
            },
            advancement: 'spectrum:midgame/create_refined_azurite'
        });
    });
});
