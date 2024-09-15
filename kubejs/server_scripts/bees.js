ItemEvents.entityInteracted("kubejs:scoop", event =>{

    const entityList = ['bee','beehemoth','bee_queen']
    const { player, target, server } = event;
    const player_name = player.getName().getString()
    const dimension = player.getLevel().getDimension()

    function catchEntity(entity) {
        if(event.target.entityType.toShortString() !== entity) return
        server.runCommandSilent(`/execute in ${dimension} run particle minecraft:falling_nectar ${target.x} ${target.y} ${target.z} 0.3 0.3 0.3 0 10 normal`)
        server.runCommandSilent(`/playsound minecraft:block.beehive.enter player ${player_name} ${player.x} ${player.y} ${player.z}`)
        server.runCommandSilent(`/give ${player_name} kubejs:${entity}`)
        target.discard()
    }

    entityList.forEach(element => {
        catchEntity(element)
    });

    
});