ServerEvents.recipes(event => {
    event.remove({id: 'javd:portal_block'})

    customPedestalCraft(event, {
        tier: 'advanced', time: 1600, topaz: 8, amethyst: 8, citrine: 8, onyx: 32, experience: 4.0,
        pattern: [
            "QQQ",
            "QWQ",
            "QQQ"
        ],
        keys: {
            "W": { "item": "minecraft:ender_pearl" },
            "Q": { "item": "minecraft:obsidian" }
        },
        result: {
            "item": "javd:portal_block",
            "count": 1
        },
        advancement: "spectrum:create_onyx_shard"
    });
})