BlockEvents.broken('numismatic-overhaul:shop' ,event => {
 
    const blockEntity = event.getBlock().getEntity();
    const owner = blockEntity.getOwner();
    const player = event.getPlayer();

    if (player.stringUuid !== owner){
        event
            .getServer()
            .runCommandSilent(`tellraw ${player.getUsername()} "§cТы не владалец этого магазина, тебе запрещено его ломать"`)
        event.cancel();
    };
});
