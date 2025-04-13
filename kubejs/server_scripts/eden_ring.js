BlockEvents.rightClicked(event => {
    if (event.item.id === "minecraft:flint_and_steel" && event.block.id === "minecraft:gold_block" && event.facing.getName() === "up") {
        
        const { player } = event;
        const COPPER = Java.loadClass("net.minecraft.world.level.block.Blocks").WAXED_COPPER_BLOCK;

        if (!player.persistentData.getBoolean("eden_portal_access")) {
            var pos = event.block.getPos();
            var level = event.getLevel();
            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) continue;
                    var block = level.getBlockState(pos.offset(i, 0, j)).getBlock();
                    if (block != COPPER) return;
                }
            }
            level.destroyBlock(pos, true, null, 0);
            event.player.tell(Text.string('Eden Portal is not allowed!').obfuscated().bold().darkPurple());
        } 
    }
});

// just for test
BlockEvents.rightClicked(event => {
    const { player } = event;
    if (event.item.id === "kubejs:dev_tool" && event.block.id === "botania:light_blue_mystical_flower") {
        
        let data = player.persistentData.getAllKeys();
        event.player.tell(data);
        player.persistentData.putBoolean("eden_portal_access", true)
    } else if (event.item.id === "kubejs:dev_tool" && event.block.id === "edenring:balloon_mushroom_log") {
        player.persistentData.remove("eden_portal_access")
        let data = player.persistentData.getAllKeys();
        event.player.tell(data);
    }
});

