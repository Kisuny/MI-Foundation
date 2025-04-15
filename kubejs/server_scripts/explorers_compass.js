ServerEvents.recipes(event => {

    event.remove({output:'explorerscompass:explorerscompass'})

    customPedestalCraft(event, {
        time: 400, citrine: 12, amethyst: 8, experience: 0.1,
        pattern: [
            "QWQ",
            "WEW",
            "QWQ"
        ],
        keys: {
            "Q": { "item": "spectrum:quitoxic_powder" },
            "W": { "item": "minecraft:cracked_stone_bricks" },
            "E": { "item": "minecraft:compass" }
        },
        result: {
            "item": "explorerscompass:explorerscompass",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds",
    });

});