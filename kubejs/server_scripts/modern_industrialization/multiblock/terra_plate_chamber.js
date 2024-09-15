let terra_plate_recipes = [
   {
    items_in: [
        ["botania:mana_pearl"],
        ["botania:mana_diamond"],
        ["botania:manasteel_ingot"],
    ],
    items_out: [
        ["kubejs:catalyst_terrasteel"],
    ],
    mana: 25000,
   },
   {
    items_in: [
        ["ae2:sky_dust"],
        ["ae2:quartz_vibrant_glass"],
        ["appbot:mana_cell_housing"],
        ["botania:mana_diamond"],
        ["botania:mana_pearl"],
    ],
    items_out: [
        ["megacells:mega_mana_cell_housing"],
    ],
    mana: 200000,
   },
]


function add_terra_plate_recipe(event, item) {
    let time = item.time ? item.time : 200
    let cost = item.cost ? item.cost : 16
    event = event.recipes.modern_industrialization.terra_plate_chamber(cost, time)

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
    terra_plate_recipes.forEach(element => {
        add_terra_plate_recipe(event, element)
    });
})