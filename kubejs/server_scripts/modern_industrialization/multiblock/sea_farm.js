let sea_farm_fishes = [
    {
        fish: "minecraft:salmon",
    },
    {
        fish: "minecraft:cod",
    },
    {
        fish: "minecraft:tropical_fish",
        extra_items: [
            ["minecraft:nautilus_shell", 0.05],
            ["minecraft:sea_pickle", 0.1],
        ]
    },
    {
        fish: "minecraft:pufferfish",
    },
    {
        fish: "minecraft:turtle_egg",
        time: 3200,
        food: "minecraft:seagrass",
        extra_items: [
            ["1x minecraft:scute", 1],
        ]
    },
    {
        fish: "spectrum:crawfish",
        time: 1600,
        food: "minecraft:seagrass",
        fluid: "spectrum:mud", 
        fluid_amount: 250,
        output_amount: 8,
    },
    {
        fish: "spectrum:koi",
        time: 1600,
        food: "minecraft:seagrass",
        fluid: "spectrum:liquid_crystal", 
        fluid_amount: 250,
        output_amount: 8,
    },
    {
        fish: "minecraft:ink_sac",
        time: 3200,
        food: "minecraft:seagrass",
    },
]

function add_fish_craft(event, item) {
    let cost = item.cost ? item.cost : 16
    let time = item.time ? item.time : 1600
    let food = item.food ? item.food : "minecraft:kelp"
    let output_amount = item.output_amount ? item.output_amount : 2
    let fluid = item.fluid ? item.fluid : "minecraft:water"
    let fluid_amount = item.fluid_amount ? item.fluid_amount : 250

    event = event.recipes.modern_industrialization.sea_farm(cost, time)
        .itemIn(`2x ${item.fish}`, 0)
        .itemIn(food)
        .itemOut(`${output_amount}x ${item.fish}`)
        .fluidIn(`${fluid}`, fluid_amount)

    if (item.extra_items) {
        item.extra_items.forEach(element => {
            event = event.itemOut(element[0], element[1])
        });
    }
}

ServerEvents.recipes(event => {
    sea_farm_fishes.forEach(element => {
        add_fish_craft(event, element)
        console.log(element.fluid);
        console.log(element.fluid_amount);
    });
})
