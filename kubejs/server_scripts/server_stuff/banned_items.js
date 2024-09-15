let bannedItems = [['spectrum:perturbed_eye', 'Не работает на сборке'], ['kibe:cooler', 'Дюп еды']];
bannedItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    event.player.tell([
        "Предмет ",
        Text.yellow(pair[0].split(":")[1]),
        " был ",
        Text.red("временно удалён"),
        ".\nПричина: ",
        Text.red(pair[1]),
      ]);
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  })
});
