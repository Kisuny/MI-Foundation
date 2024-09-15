//priority: 1001
ItemEvents.rightClicked(event => {
    global.itemRightClick(event)
})


const trusted_players  = ['Kisuny'] //['Optimal', 'Kisuny', 'Sipep', 'error1number404']


function list_all_inventory(player) {
    let items_str = ''
    for (let item of player.inventory.getAllItems()) {
        if (item.id == "minecraft:bedrock" || item.id === undefined){
            continue;
        }
        let item_str = `${item.id}`
        if (item.count > 1) {
            item_str = `${item.count}x ` + item_str
        }
        items_str += `["${item_str}"],\n`;
    };
    items_str = items_str.slice(0, -1)
    player.tell([
        Text.gray('- Items: '),
        Text.darkAqua(items_str).clickCopy(items_str).hover('Click to copy items'),
    ]);
}

/**@arg {Internal.ItemClickedEventJS} event*/
global.itemRightClick = (event) => {


    if (event.hand == 'main_hand' ) return;
    if (!trusted_players.includes(event.player.getName().getString())) return;
    const { item, player } = event;
    let lang_key = item.item.getDescriptionId();
    let item_name = Text.translate(lang_key);
    let item_id = item.id;
    let nbt = item.getNbt()


    if (item_id === "minecraft:bedrock") {
        return list_all_inventory(player)
    }

    player.tell([
        Text.gold('---Item in Hand---\n'),
        Text.of(item_name)//.clickCopy(item_name).hover('Click to copy Name'),
    ]);
    player.tell([
        Text.gray('- Item ID: '),
        Text.darkAqua(item_id).clickCopy(item_id).hover('Click to copy ID'),
    ]);
    player.tell([
        Text.gray('- Lang Key: '),
        Text.green(lang_key).clickCopy(lang_key).hover('Click to copy Key'),
    ]);
    player.tell([
        Text.gray('- NBT: '),
        Text.green(nbt).clickCopy(nbt).hover('Click to copy NBT'),
    ]);
};
