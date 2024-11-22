const customePotionWorkshopCraft = (event, args) => {
    event.custom({
        "type": "spectrum:potion_workshop_crafting",
        "base_ingredient": args.base_ingredient,
        "use_up_base_ingredient": args.use_up_base_ingredien || true,
        "color": args.color,
        "required_advancement": args.advancement,
        "ingredient1": { "item": args.input1 },
        "ingredient2": { "item": args.input2 },
        "ingredient3": { "item": args.input3 },
        "result": args.output 
    });
};

ServerEvents.recipes(event => {
    // base_ingredient, color, input1, input2, input3, output, use base ingredient?
    customePotionWorkshopCraft(event, {
        base_ingredient: {"item": "minecraft:bucket", "count": 1},
        color: 11972050,
        input1: 'mythicmetals:stormyx_ingot',
        input2: 'mythicmetals:hallowed_ingot',
        input3: 'spectrum:shimmerstone_gem',
        output: {"item":'spectrum:liquid_crystal_bucket', "count": 1}
    });
    
    customePotionWorkshopCraft(event, {
        base_ingredient: {"item": 'minecraft:glass_bottle', "count": 3},
        color: 11972050,
        input1: 'spectrum:stardust',
        input2: 'kubejs:artifact_dust',
        input3: 'minecraft:ender_pearl',
        output: {"item":"things:recall_potion", "count": 3},
        advancement: "spectrum:collect_star_fragment"
    });
});
