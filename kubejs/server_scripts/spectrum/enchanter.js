const customEnchanterCraft = (event, args) => {
    event.custom({
        "type": "spectrum:enchanter",
        "time": args.time || 300,
        "required_experience": args.experience || 100,
        //max 9 items
        "ingredients": args.ingredients,
        "result": args.result,
        "required_advancement": args.advancement
    })
}

function customEnchanterUpgradeCraft(event, { enchantment, required_advancement, levels }) {
    event.custom({
        type: "spectrum:enchantment_upgrade",
        enchantment: enchantment,
        levels: levels,
        required_advancement: required_advancement
    });
}

ServerEvents.recipes(event => {

    const CUSTOM_ENCHANT_BOOK_CRAFTS = [
    { name: "yigd:soulbound", max_level: 1, pigment_color: "spectrum:light_blue_pigment", item_1: "bwplus:soul", item_2: "spirit:compressed_soul_powder_block", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spirit:soul_reaper", max_level: 3, pigment_color: "spectrum:cyan_pigment", item_1: "bwplus:soul", item_2: "bosses_of_mass_destruction:soul_star", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "travelstaff:teleportation", max_level: 1, pigment_color: "spectrum:cyan_pigment", item_1: "minecraft:ender_pearl", item_2: "spectrum:stardust", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "travelstaff:range", max_level: 3, pigment_color: "spectrum:blue_pigment", item_1: "mythicmetals:runite_ingot", item_2: "mythicmetals:celestium_ingot", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "things:retribution", max_level: 1, pigment_color: "spectrum:light_blue_pigment", item_1: "minecraft:oak_planks", item_2: "minecraft:iron_ingot", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:energize", max_level: 5, pigment_color: "spectrum:yellow_pigment", item_1: "spectrum:storm_stone", item_2: "minecraft:golden_apple", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:spell_power", max_level: 5, pigment_color: "spectrum:magenta_pigment", item_1: "kubejs:artifact_dust", item_2: "spectrum:neolith", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:soulfrost", max_level: 5, pigment_color: "spectrum:cyan_pigment", item_1: "minecraft:soul_lantern", item_2: "spectrum:blizzard_powder", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:sunfire", max_level: 5, pigment_color: "spectrum:orange_pigment", item_1: "spectrum:fiery_powder", item_2: "minecraft:fire_charge", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:critical_damage", max_level: 5, pigment_color: "spectrum:purple_pigment", item_1: "minecraft:flint", item_2: "spectrum:stardust", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:magic_protection", max_level: 4, pigment_color: "spectrum:purple_pigment", item_1: "spectrum:stardust", item_2: "spectrum:bedrock_dust", advancement: "spectrum:midgame/break_decayed_bedrock" },
    { name: "spell_engine:spell_infinity", max_level: 1, pigment_color: "spectrum:black_pigment", item_1: "spectrum:neolith", item_2: "spectrum:star_fragment", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:haste", max_level: 5, pigment_color: "spectrum:magenta_pigment", item_1: "minecraft:rabbit_foot", item_2: "tgacmod:haste_infused_catalyst", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "spell_power:critical_chance", max_level: 5, pigment_color: "spectrum:red_pigment", item_1: "minecraft:flint", item_2: "spectrum:star_fragment", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "the_bumblezone:comb_cutter", max_level: 1, pigment_color: "spectrum:orange_pigment", item_1: "minecraft:honeycomb", item_2: "minecraft:shears", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "the_bumblezone:potent_poison", max_level: 3, pigment_color: "spectrum:green_pigment", item_1: "minecraft:spider_eye", item_2: "spectrum:quitoxic_powder", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "the_bumblezone:neurotoxins", max_level: 2, pigment_color: "spectrum:green_pigment", item_1: "minecraft:poisonous_potato", item_2: "minecraft:spider_eye", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "gobber2:smithblade", max_level: 5, pigment_color: "spectrum:black_pigment", item_1: "spectrum:storm_stone", item_2: "minecraft:anvil", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "gobber2:solidfooting", max_level: 1, pigment_color: "spectrum:brown_pigment", item_1: "spectrum:neolith", item_2: "botania:ender_air_bottle", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "gobber2:untouchable", max_level: 4, pigment_color: "spectrum:pink_pigment", item_1: "spectrum:bedrock_dust", item_2: "minecraft:cactus", advancement: "spectrum:midgame/break_decayed_bedrock" },
    { name: "gobber2:blessing", max_level: 1, pigment_color: "spectrum:purple_pigment", item_1: "minecraft:enchanted_golden_apple", item_2: "minecraft:glistering_melon_slice", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "gobber2:fluid_master", max_level: 1, pigment_color: "spectrum:blue_pigment", item_1: "kibe:fluid_hopper", item_2: "minecraft:bucket", advancement: "spectrum:midgame/build_enchanting_structure" },
    { name: "buildinggadgets:silk_touch", max_level: 1, pigment_color: "spectrum:cyan_pigment", item_1: "spectrum:refined_azurite", item_2: "spectrum:mermaids_gem", advancement: "spectrum:midgame/build_enchanting_structure" },
]

function generateLevels(fromLevel, toLevel, buildLevel) {
    const arr = [];
    for (let lvl = fromLevel; lvl < toLevel; lvl++) {
        arr.push(buildLevel(lvl));
    }
    return arr;
}

    const EXP_BASE = 200;
    const EXP_MULTIPLIER = 2;
    const COUNT_BASE = 8;
    const COUNT_MULTIPLIER = 4;
    const seen = new Set();
    // For Enchanter Upgrade
    CUSTOM_ENCHANT_BOOK_CRAFTS.forEach(cfg => {
        if (cfg.max_level <= 1) return;
        if (seen.has(cfg.name)) return;
        seen.add(cfg.name);

        const levelsArr = generateLevels(1, cfg.max_level, lvl => ({
            experience: Math.floor(EXP_BASE * Math.pow(EXP_MULTIPLIER, lvl - 1)),
            item: cfg.pigment_color,
            item_count: Math.floor(COUNT_BASE * Math.pow(COUNT_MULTIPLIER, lvl - 1))
        }));

        customEnchanterUpgradeCraft(event, {
            enchantment: cfg.name,
            required_advancement: cfg.advancement,
            levels: levelsArr
        });
    });


    // For Enchanter Craft
    CUSTOM_ENCHANT_BOOK_CRAFTS.forEach(element => {
        customEnchanterCraft(event, {
            time: 300, experience: 100, advancement: element.advancement,
            ingredients: [
                { "item": "minecraft:book" },
                { "item": element.pigment_color },
                { "item": element.pigment_color },
                { "item": element.item_1 },
                { "item": element.item_2 },
                { "item": element.pigment_color },
                { "item": element.pigment_color },
                { "item": element.item_1 },
                { "item": element.item_2 }
            ],
            result: {
                "item": "minecraft:enchanted_book",
                "nbt": `{StoredEnchantments:[{id:\"${element.name}\",lvl:1s}]}`
            },
        });
    });


    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
            { "item": "spectrum:upgrade_speed2" },
            { "item": "spectrum:pure_iron" },
            { "item": "spectrum:pure_iron" },
            { "item": "mythicmetals:celestium_ingot" },
            { "tag": "botania:petals" },
            { "item": "spectrum:pure_iron" },
            { "item": "spectrum:pure_iron" },
            { "item": "mythicmetals:celestium_ingot" },
            { "tag": "botania:petals" }
        ],
        result: {
            "item": "spectrum:upgrade_speed3"
        },
    });
    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
            { "item": "spectrum:upgrade_efficiency" },
            { "item": "spectrum:pure_emerald" },
            { "item": "spectrum:pure_emerald" },
            { "item": "mythicmetals:metallurgium_ingot" },
            { "tag": "botania:petals" },
            { "item": "spectrum:pure_emerald" },
            { "item": "spectrum:pure_emerald" },
            { "item": "mythicmetals:metallurgium_ingot" },
            { "tag": "botania:petals" }
        ],
        result: {
            "item": "spectrum:upgrade_efficiency2"
        },
    });
    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
            { "item": "spectrum:upgrade_yield" },
            { "item": "spectrum:pure_diamond" },
            { "item": "spectrum:pure_diamond" },
            { "item": "mythicmetals:metallurgium_ingot" },
            { "tag": "botania:petals" },
            { "item": "spectrum:pure_diamond" },
            { "item": "spectrum:pure_diamond" },
            { "item": "mythicmetals:metallurgium_ingot" },
            { "tag": "botania:petals" }
        ],
        result: {
            "item": "spectrum:upgrade_yield2"
        },
    });
});