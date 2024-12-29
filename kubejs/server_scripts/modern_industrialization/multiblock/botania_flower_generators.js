let flower_generation_recipes = [
    {
        fluid: ["minecraft:water", 1000],
        mana: 8,
        flower: "hydroangeas",
    },
    {
        fluid: ["minecraft:lava", 50],
        mana: 50,
        flower: "thermalily",
    },
    {
        item: ["5x minecraft:tnt"],
        mana: 2250,
        flower: "entropinnyum",
    },
    {
        item: ["5x mythicmetals:banglum_tnt"],
        mana: 2250,
        flower: "entropinnyum",
    },
    {
        item: ["5x modern_industrialization:industrial_tnt"],
        mana: 2250,
        flower: "entropinnyum",
    },  
    {
        item: ["16x #minecraft:leaves"],
        mana: 800,
        flower: "munchdew",
    },
    {
        item: ["minecraft:slime_block"],
        mana: 300,
        flower: "narslimmus",
    },
    {
        item: ["minecraft:slime_ball"],
        mana: 33,
        flower: "narslimmus",
    },
    {
        item: ["#c:cooked_meat"],
        mana: 1120,
        flower: "gourmaryllis",
    },
    {
        item: ["minecraft:baked_potato"],
        mana: 560,
        flower: "gourmaryllis",
    },
    {
        item: ["minecraft:golden_carrot"],
        mana: 1568,
        flower: "gourmaryllis",
    },
    {
        item: ["minecraft:dried_kelp"],
        mana: 50,
        flower: "gourmaryllis",
    },
    {
        item: ["#c:raw_meat"],
        mana: 250,
        flower: "gourmaryllis",
    },
    {
        item: ["#botania:special_flowers"],
        mana: 750,
        flower: "rafflowsia",
    },
    {
        fluid: ["minecraft:lava", 1000],
        mana: 1250,
        flower: "endoflame",
    },
    {
        item: ["#c:coal"],
        mana: 100,
        flower: "endoflame",
    },
    {
        item: ["#minecraft:planks"],
        mana: 10,
        flower: "endoflame",
    },
    {
        item: ["#minecraft:logs_that_burn"],
        mana: 10,
        flower: "endoflame",
    },
    {
        item: ["#c:coal_dusts"],
        mana: 100,
        flower: "endoflame",
    },
    {
        item: ["#c:lignite_coal_dusts"],
        mana: 100,
        flower: "endoflame",
    },
    {
        item: ["modern_industrialization:coke"],
        mana: 400,
        flower: "endoflame",
    },
    {
        item: ["modern_industrialization:coke_dust"],
        mana: 400,
        flower: "endoflame",
    },
    {
        item: ["modern_industrialization:carbon_dust"],
        mana: 400,
        flower: "endoflame",
    },
    {
        fluid: ["kibe:liquid_xp", 5000],
        mana: 1500,
        flower: "rosa_arcana",
    },
    {
        item:["minecraft:shulker_shell"],
        mana: 7500,
        time: 1000,
        flower: "shulk_me_not",
    },
    {
        item:["60x #minecraft:wool"],
        mana: 1800,
        time: 120,
        flower: "spectrolus",
    },
    {
        item:["minecraft:cake"],
        mana: 450,
        flower: "kekimurus",
    },
]



function add_flower_generation(event, item) {
    let flowers_to_gens = {
        hydroangeas: event.recipes.modern_industrialization.hydroangeas_generator,
        thermalily: event.recipes.modern_industrialization.thermalily_generator,
        entropinnyum: event.recipes.modern_industrialization.entropinnyum_generator,
        munchdew: event.recipes.modern_industrialization.munchdew_generator,
        narslimmus: event.recipes.modern_industrialization.narslimmus_generator,
        gourmaryllis: event.recipes.modern_industrialization.gourmaryllis_generator,
        rafflowsia: event.recipes.modern_industrialization.rafflowsia_generator,
        endoflame: event.recipes.modern_industrialization.endoflame_generator,
        rosa_arcana: event.recipes.modern_industrialization.rosa_arcana_generator,
        shulk_me_not: event.recipes.modern_industrialization.shulk_me_not_generator,
        spectrolus: event.recipes.modern_industrialization.spectrolus_generator,
        kekimurus: event.recipes.modern_industrialization.kekimurus_generator,
    }
    let time = item.time ? item.time : 200
    let cost = item.cost ? item.cost : 16
    event = flowers_to_gens[item.flower](cost, time)

    if (item.fluid) {
        event = event.fluidIn(item.fluid[0], item.fluid[1])
    }
    if (item.item) {
        event = event.itemIn(item.item[0], item.item[1] !== undefined ? item.item[1] : 1)
    }
    if (item.item_out) {
        event = event.itemOut(item.item_out[0], item.item_out[1] !== undefined ? item.item_out[1] : 1)
    }

    event = event.fluidOut("modern_industrialization:liquid_mana", item.mana)
}


ServerEvents.recipes(event => {
    flower_generation_recipes.forEach(element => {
        add_flower_generation(event, element)
    });
})