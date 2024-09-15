const customEnchanterCraft = (event, args) =>{
    event.custom({
        "type": "spectrum:enchanter",
        "time": args.time || 300,
        "required_experience": args.experience || 100,
        //max 9 items
        "ingredients": args.ingredients,
        "result": args.result,
        "required_advancement": args.advancement
      })
}

ServerEvents.recipes(event =>{
    customEnchanterCraft(event, {
        time: 1200, experience: 500, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "minecraft:book"},
          {"item": "spirit:soul_steel_ingot"},
          {"item": "spirit:soul_steel_ingot"},
          {"item": "spirit:compressed_soul_powder_block"},
          {"item": "spectrum:light_blue_pigment"},
          {"item": "spirit:soul_steel_ingot"},
          {"item": "spirit:soul_steel_ingot"},
          {"item": "spirit:compressed_soul_powder_block"},
          {"item": "spectrum:light_blue_pigment"}
        ],
        result: {
            "item": "minecraft:enchanted_book",
            "nbt": "{StoredEnchantments:[{id:\"spirit:soul_reaper\",lvl:1s}]}"
        },
    });

    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
          {"item": "spectrum:upgrade_speed2"},
          {"item": "spectrum:pure_iron"},
          {"item": "spectrum:pure_iron"},
          {"item": "mythicmetals:celestium_ingot"},
          {"tag": "botania:petals"},
          {"item": "spectrum:pure_iron"},
          {"item": "spectrum:pure_iron"},
          {"item": "mythicmetals:celestium_ingot"},
          {"tag": "botania:petals"}
        ],
        result: {
            "item": "spectrum:upgrade_speed3"
        },
    });
    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
          {"item": "spectrum:upgrade_efficiency"},
          {"item": "spectrum:pure_emerald"},
          {"item": "spectrum:pure_emerald"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"tag": "botania:petals"},
          {"item": "spectrum:pure_emerald"},
          {"item": "spectrum:pure_emerald"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"tag": "botania:petals"}
        ],
        result: {
            "item": "spectrum:upgrade_efficiency2"
        },
    });
    customEnchanterCraft(event, {
        time: 2400, experience: 1000, advancement: "spectrum:lategame/grow_bismuth_in_crystallarieum",
        ingredients: [
          {"item": "spectrum:upgrade_yield"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"tag": "botania:petals"},
          {"item": "spectrum:pure_diamond"},
          {"item": "spectrum:pure_diamond"},
          {"item": "mythicmetals:metallurgium_ingot"},
          {"tag": "botania:petals"}
        ],
        result: {
            "item": "spectrum:upgrade_yield2"
        },
    });
});
