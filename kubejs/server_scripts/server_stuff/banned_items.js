let bannedItems = [['spectrum:perturbed_eye', 'Doesnt work in modpack'], ['kibe:cooler', 'Food duping']];
bannedItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    event.player.tell([
        "Item ",
        Text.yellow(pair[0].split(":")[1]),
        " has been ",
        Text.red("temporarily removed"),
        ".\nReason: ",
        Text.red(pair[1]),
      ]);
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  })
});
