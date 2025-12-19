let bannedItems = [
  ['spectrum:perturbed_eye', 'Doesnt work in modpack'], 
  ['kibe:cooler', 'Food duping'],
  ['bewitchment:oak_poppet_shelf', 'Server crash'],
  ['bewitchment:spruce_poppet_shelf', 'Server crash'],
  ['bewitchment:birch_poppet_shelf', 'Server crash'],
  ['bewitchment:jungle_poppet_shelf', 'Server crash'],
  ['bewitchment:acacia_poppet_shelf', 'Server crash'],
  ['bewitchment:dark_oak_poppet_shelf', 'Server crash'],
  ['bewitchment:crimson_poppet_shelf', 'Server crash'],
  ['bewitchment:warped_poppet_shelf', 'Server crash'],
  ['bewitchment:juniper_poppet_shelf', 'Server crash'],
  ['bewitchment:cypress_poppet_shelf', 'Server crash'],
  ['bewitchment:elder_poppet_shelf', 'Server crash'],
  ['bewitchment:dragons_blood_poppet_shelf', 'Server crash'],
];

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
