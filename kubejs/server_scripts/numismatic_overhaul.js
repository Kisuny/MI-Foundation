BlockEvents.broken('numismatic-overhaul:shop' ,event => {
 
    const blockEntity = event.getBlock().getEntity();
    const owner = blockEntity.getOwner();
    const player = event.getPlayer();

    if (player.stringUuid !== owner){
        event
            .getServer()
            .runCommandSilent(`tellraw ${player.getUsername()} "§cYou don't own this store, you're not allowed to break it"`)
        event.cancel();
    };
});
