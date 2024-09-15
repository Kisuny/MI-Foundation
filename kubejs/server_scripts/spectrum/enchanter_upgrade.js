const customEnchanterUpgradeCraft = (event, args) => {
  event.custom({
    "type": "spectrum:enchantment_upgrade",
    "enchantment": args.enchantment,
    "levels": args.levels,
    "required_advancement": args.advancement
  })
}

ServerEvents.recipes(event => {

  customEnchanterUpgradeCraft(event, {
    enchantment: 'spirit:soul_reaper',
    advancement: 'spectrum:midgame/build_enchanting_structure',
    levels: [
      // 1 -> 2 lvl     
      {
        "experience": 400,
        "item": "spirit:soul_powder",
        "item_count": 32
      },
      // 2 -> 3 lvl
      {
        "experience": 800,
        "item": "spirit:soul_powder",
        "item_count": 128
      },
      // 3 -> 4 lvl
      {
        "experience": 1600,
        "item": "spirit:soul_powder",
        "item_count": 512
      }
    ],
  });
});



