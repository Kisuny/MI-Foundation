let elven_gateway_recipes = [
    {
        items_in: [
            ["botania:mana_pearl"],
        ],
        items_out: [
            ["botania:pixie_dust"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["botania:mana_glass"],
        ],
        items_out: [
            ["botania:elf_glass"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["botania:manasteel_ingot"],
        ],
        items_out: [
            ["botania:elementium_ingot"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["botania:livingwood_log"],
        ],
        items_out: [
            ["botania:dreamwood_log"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["botania:mana_diamond"],
        ],
        items_out: [
            ["botania:dragonstone"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["minecraft:quartz"],
        ],
        items_out: [
            ["botania:quartz_elven"],
        ],
        mana: 100,
    },
 ]
 
 
 function add_elven_gateway_recipe(event, item) {
     let time = item.time ? item.time : 10
     let cost = item.cost ? item.cost : 16
     event = event.recipes.modern_industrialization.elven_gateway_chamber(cost, time)
 
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
     elven_gateway_recipes.forEach(element => {
         add_elven_gateway_recipe(event, element)
     });
 })