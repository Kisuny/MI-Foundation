ServerEvents.recipes(event => {

    event.remove({output:'naturescompass:naturescompass'})

    customPedestalCraft(event, {
        time: 400, topaz: 6, amethyst: 4, experience: 0.1,
        pattern: [
            "QWQ",
            "WEW",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "spectrum:vegetal" },
            "W": { "tag": "minecraft:logs" },
            "E": { "item": "minecraft:compass" }
        },
        result: {
            "item": "naturescompass:naturescompass",
            "count": 1
        },
        advancement: "spectrum:collect_vegetal",
    });

});