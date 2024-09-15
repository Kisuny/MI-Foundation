ServerEvents.recipes(event => {

    customEnchanterCraft(event, {
        time: 1200, experience: 500, advancement: "spectrum:lategame/spectrum_lategame",
        ingredients: [
            { "item": "kubejs:empty_beehive" },
            { "item": "kubejs:bee" },
            { "item": "kubejs:bee" },
            { "item": "minecraft:honeycomb" },
            { "item": "minecraft:honey_bottle" },
            { "item": "kubejs:bee" },
            { "item": "kubejs:bee" },
            { "item": "minecraft:honeycomb" },
            { "item": "minecraft:honey_bottle" }
        ],
        result: {
            "item": "kubejs:beehive"
        },
    });
})

ItemEvents.rightClicked("kubejs:beehive", event => {
    let dimension = event.player.level.dimension
    let target_block = event.target.block
    const BumblezoneAPI = Java.loadClass('com.telepathicgrunt.the_bumblezone.modcompat.BumblezoneAPI')

    if (dimension == 'the_bumblezone:the_bumblezone') {event.cancel()}
    if (target_block == 'minecraft:bee_nest' || target_block == 'minecraft:beehive') {
        event.player.tell(Text.of('Пожжжужим?').color(0xE79A3F))
        BumblezoneAPI.queueEntityForTeleportingToBumblezone(event.player)
        if (!event.player.isCreative()) { event.item.count-- }
        event.player.give('kubejs:empty_beehive')
    }
});
