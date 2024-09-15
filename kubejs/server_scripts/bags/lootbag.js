//priority: 500

// Open bag when rightClicked
ItemEvents.rightClicked(event => {
    function lootbag(lootbag, lootable) {
        if (event.item == lootbag) {
            let x = event.player.x
            let y = event.player.y
            let z = event.player.z
            let player = event.player.getName().getString()
            let dimension = event.player.getLevel().getDimension()

            event.server.runCommandSilent(`execute in ${event.level.dimension} run loot spawn ${x} ${y} ${z} loot ${lootable}`)
            event.server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup player ${player} ${x} ${y} ${z} 0.5 0.75 0.1`)
            event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:enchant ${x} ${y} ${z} 1 1 1 1 100 normal`)

            // In creative don't use bag
            if (!event.player.isCreative()) { event.item.count-- }
        }
    }

    // Use vanilla loot table for every type of bags
    global.lootbagType.forEach(type => {
        global.lootbagRarity.forEach(rarity => {
            lootbag(`kubejs:${type}_lootbag_${rarity}`, `lootbag:${type}/${rarity}`)
        });
    });

});


