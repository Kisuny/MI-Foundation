let mana_pool_recipes = [
    {
        items_in: [
            ["minecraft:rotten_flesh"],
            ["botania:alchemy_catalyst", 0],
        ],
        items_out: [
            ["minecraft:leather"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:redstone"],
            ["botania:alchemy_catalyst", 0],
        ],
        items_out: [
            ["minecraft:glowstone_dust"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:glowstone_dust"],
            ["botania:alchemy_catalyst", 0],
        ],
        items_out: [
            ["minecraft:redstone"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:redstone"],
            ["botania:conjuration_catalyst", 0],
        ],
        items_out: [
            ["2x minecraft:redstone"],
        ],
        mana: 400,
    },
    {
        items_in: [
            ["minecraft:string"],
        ],
        items_out: [
            ["botania:mana_string"],
        ],
        mana: 400,
    },
    {
        items_in: [
            ["#c:dyes"],
        ],
        items_out: [
            ["botania:mana_powder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:quartz"],
        ],
        items_out: [
            ["botania:quartz_mana"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:sugar"],
        ],
        items_out: [
            ["botania:mana_powder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:gunpowder"],
        ],
        items_out: [
            ["botania:mana_powder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:redstone"],
        ],
        items_out: [
            ["botania:mana_powder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:glowstone_dust"],
        ],
        items_out: [
            ["botania:mana_powder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:glass"],
        ],
        items_out: [
            ["botania:mana_glass"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:gunpowder"],
            ["botania:alchemy_catalyst", 0],
        ],
        items_out: [
            ["minecraft:flint"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:flint"],            
            ["botania:alchemy_catalyst", 0],
        ],
        items_out: [
            ["minecraft:gunpowder"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["botania:conjuration_catalyst", 0],
            ["minecraft:coal"],
        ],
        items_out: [
            ["2x minecraft:coal"],
        ],
        mana: 400,
    },
    {
        items_in: [
            ["botania:conjuration_catalyst", 0],
            ["minecraft:glowstone_dust"],
        ],
        items_out: [
            ["2x minecraft:glowstone_dust"],
        ],
        mana: 400,
    },
    {
        items_in: [
            ["kubejs:prometheum_ender_pearl"],
        ],
        items_out: [
            ["botania:mana_pearl"],
        ],
        mana: 600,
    },
    {
        items_in: [
            ["minecraft:ender_pearl"],
            ["2x modern_industrialization:prometheum_plate"],
        ],
        items_out: [
            ["botania:mana_pearl"],
        ],
        mana: 600,
    },
    {
        items_in: [
            ["kubejs:aquarium_diamond"],
        ],
        items_out: [
            ["botania:mana_diamond"],
        ],
        mana: 1000,
    },
    {
        items_in: [
            ["minecraft:diamond"],
            ["2x modern_industrialization:aquarium_plate"],
        ],
        items_out: [
            ["botania:mana_diamond"],
        ],
        mana: 1000,
    },
    {
        items_in: [
            ["kubejs:raw_magical_steel"],
        ],
        items_out: [
            ["botania:manasteel_ingot"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["modern_industrialization:steel_ingot"],
        ],
        items_out: [
            ["botania:manasteel_ingot"],
        ],
        mana: 200,
    },
    {
        items_in: [
            ["modern_industrialization:diamond_tiny_dust"],
        ],
        items_out: [
            ["mifbotaniaaddon:mana_gem"],
        ],
        mana: 10000,
    },    
 ]
 
 
 function add_mana_pool_recipe(event, item) {
     let time = item.time ? item.time : 5
     let cost = item.cost ? item.cost : 64
     event = event.recipes.modern_industrialization.mana_pool_chamber(cost, time)
 
     if (item.fluid) {
         item.fluid.forEach(element => {
             event = event.fluidIn(element[0], element[1])
         });        
     }
     if (item.items_in) {
         item.items_in.forEach(element => {
             event = event.itemIn(element[0], element[1] !== undefined ? element[1] : 1)
         });  
     }
     if (item.items_out) {
         item.items_out.forEach(element => {
             event = event.itemOut(element[0], element[1] !== undefined ? element[1] : 1)
         });  
     }
     
     if (item.mana){
        event = event.fluidIn("modern_industrialization:liquid_mana", item.mana)
    } 
 }
 
 
 ServerEvents.recipes(event => {
     mana_pool_recipes.forEach(element => {
         add_mana_pool_recipe(event, element)
     });
 })