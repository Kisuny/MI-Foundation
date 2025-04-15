ServerEvents.recipes(event => {

    event.remove({output: 'lost_idols:undying_idol'})

    customeFusionShrineCraft(event, {
        time: 600, experience: 2.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            {"item": "spectrum:pure_gold", "count": 24 },
            {"item": "minecraft:totem_of_undying", "count": 1 },
            {"item": "spectrum:pure_emerald", "count": 12 },
            {"item": "mythicmetals:metallurgium_ingot", "count": 4 }
        ],
        result: {
            "item": "lost_idols:undying_idol", "count": 1
        },
        advancement: "spectrum:lategame/grow_bloodstone_in_crystallarieum"
    });

});