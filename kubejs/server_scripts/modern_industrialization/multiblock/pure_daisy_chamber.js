let pure_daisy_recipes = [
    {
        fluid: [
            ["minecraft:water", 1000],
        ],
        items_out: [
            ["minecraft:snow_block"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["spectrum:blackslag"],
        ],
        items_out: [
            ["botania:livingrock"],
        ],
        mana: 100,
    },
    {
        items_in: [
            ["#spectrum:noxcap_stems"],
        ],
        items_out: [
            ["botania:livingwood_log"],
        ],
        mana: 100,
    },
 ]
 
 
 function add_pure_daisy_recipe(event, item) {
     let time = item.time ? item.time : 600
     let cost = item.cost ? item.cost : 16
     event = event.recipes.modern_industrialization.pure_daisy_chamber(cost, time)
 
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
     pure_daisy_recipes.forEach(element => {
         add_pure_daisy_recipe(event, element)
     });
 })