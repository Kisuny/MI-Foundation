ItemEvents.entityInteracted(["kubejs:royal_scoop"], event =>{

    const royalEntityList = ['bee_queen']
    const { player, target, server } = event;
    const player_name = player.getName().getString()
    const dimension = player.getLevel().getDimension()

    function catchEntity(entity, scoopName) {
        if(event.target.entityType.toShortString() !== entity) return
        if(event.item !== scoopName) return
        server.runCommandSilent(`/execute in ${dimension} run particle minecraft:falling_nectar ${target.x} ${target.y} ${target.z} 0.3 0.3 0.3 0 10 normal`)
        server.runCommandSilent(`/playsound minecraft:block.beehive.enter player ${player_name} ${player.x} ${player.y} ${player.z}`)
        server.runCommandSilent(`/give ${player_name} kubejs:${entity}`)
        target.discard()
        event.getItem().damageValue++
        if (event.getItem().getDamageValue() >= event.getItem().getMaxDamage()) {
            event.getItem().count--
            server.runCommandSilent(`/playsound minecraft:item.shield.break player ${player_name} ${player.x} ${player.y} ${player.z}`)
        }
        
        
    }

    royalEntityList.forEach(element => {
        catchEntity(element, "kubejs:royal_scoop")
    });

    
});