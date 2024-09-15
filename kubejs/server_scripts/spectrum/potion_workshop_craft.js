const customePotionWorkshopCraft = (event, args) => {
    event.custom({
        "type": "spectrum:potion_workshop_crafting",
        "base_ingredient": { "item": args.base_ingredient },
        "use_up_base_ingredient": args.use_up_base_ingredien || true,
        "color": args.color,
        "ingredient1": { "item": args.input1 },
        "ingredient2": { "item": args.input2 },
        "ingredient3": { "item": args.input3 },
        "result": { "item": args.output }
    });
};

ServerEvents.recipes(event => {
    // base_ingredient, color, input1, input2, input3, output, use base ingredient?
    customePotionWorkshopCraft(event, {
        base_ingredient: 'minecraft:bucket',
        color: 11972050,
        input1: 'mythicmetals:stormyx_ingot',
        input2: 'mythicmetals:hallowed_ingot',
        input3: 'spectrum:shimmerstone_gem',
        output: 'spectrum:liquid_crystal_bucket'
    });
});
