ServerEvents.recipes(event => {

    event.remove({output: 'gofish:simple_lure'})

    customPedestalCraft(event, {
        tier: 'simple', time: 200, amethyst: 4, citrine: 4, topaz: 4, experience: 2.0,
        pattern: [
            "RCC",
            "C C",
            "   "
        ],
        keys: {
            "C": { "item": "minecraft:iron_nugget" },
            "R": { "item": "minecraft:feather" },
        },
        result: {
            "item": "gofish:simple_lure",
            "count": 1
        },
        advancement: "spectrum:place_pedestal"
    });

});


LootJS.modifiers((event) => {

    const fishingLootTable = [
        Item.of('kubejs:mob_lootbag_uncommon').withChance(10),
        Item.of('kubejs:food_lootbag_uncommon').withChance(10),
        Item.of('kubejs:food_lootbag_rare').withChance(5),
        Item.of('kubejs:magic_lootbag_uncommon').withChance(10),
        Item.of('kubejs:early_lootbag_uncommon').withChance(10),
        Item.of('kubejs:early_lootbag_rare').withChance(1),
        Item.of('mythicmetals:aquarium_ingot').withChance(40),
        Item.of('mythicmetals:banglum_ingot').withChance(40),
        Item.of('mythicmetals:carmot_ingot').withChance(40),
        Item.of('mythicmetals:adamantite_ingot').withChance(40),
        Item.of('mythicmetals:mythril_ingot').withChance(40),
        Item.of('mythicmetals:orichalcum_ingot').withChance(40),
        Item.of('mythicmetals:palladium_ingot').withChance(40),
        Item.of('mythicmetals:prometheum_ingot').withChance(40),
        Item.of('mythicmetals:quadrillum_ingot').withChance(40),
        Item.of('mythicmetals:runite_ingot').withChance(40),
        Item.of('mythicmetals:stormyx_ingot').withChance(15),
        Item.of('mythicmetals:unobtainium').withChance(15),
        Item.of('mythicmetals:aquarium_pearl').withChance(1),
        Item.of('mythicmetals:banglum_chunk').withChance(1),
    ]
    event
        .addLootTableModifier(["gofish:gameplay/fishing/diamond_crate", "gofish:gameplay/fishing/astral_crate"])
        .addWeightedLoot([0, 6], fishingLootTable);

    event
        .addLootTableModifier(["gofish:gameplay/fishing/golden_crate", "gofish:gameplay/fishing/end_crate", "gofish:gameplay/fishing/gilded_blackstone_crate"])
        .addWeightedLoot([0, 3], fishingLootTable);

    event
        .addLootTableModifier(["gofish:gameplay/fishing/iron_crate", "gofish:gameplay/fishing/soul_crate", ])
        .addWeightedLoot([0, 2], fishingLootTable);
    
    event
        .addLootTableModifier(["gofish:gameplay/fishing/supply_crate", "gofish:gameplay/fishing/wooden_crate", ])
        .addWeightedLoot([0, 1], fishingLootTable);

});