ServerEvents.recipes(event =>{
    event.remove({ output: 'expandeddelight:mac_and_cheese' })
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
          {
            "tag": "c:milk"
          },
          {
            "item": "expandeddelight:cheese_slice"
          },
          {
            "tag": "c:pasta"
          },
          {
            "item": "modern_industrialization:salt_dust"
          }
        ],
        "result": {
          "item": "expandeddelight:mac_and_cheese"
        },
        "container": {
          "item": "minecraft:bowl"
        },
        "cookingtime": 200
      })
});