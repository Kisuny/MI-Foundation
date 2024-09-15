ServerEvents.recipes(event => {

    event.recipes.modern_industrialization.blast_furnace(32, 300) //Mb, ticks
        .itemIn('modern_industrialization:molybdenite_dust')
        .fluidIn('modern_industrialization:oxygen',350)
        .itemOut('modern_industrialization:molybdenum_dust')
        .fluidOut('modern_industrialization:sulfuric_acid',200)
    event.recipes.modern_industrialization.blast_furnace(32, 400) //Mb, ticks
        .itemIn('modern_industrialization:hsla_steel_dust')
        .itemOut('modern_industrialization:hsla_steel_hot_ingot')
    event.recipes.modern_industrialization.blast_furnace(32, 400) //Mb, ticks
        .itemIn('modern_industrialization:desh_dust')
        .itemOut('modern_industrialization:desh_hot_ingot')
    event.recipes.modern_industrialization.blast_furnace(64, 400) //Mb, ticks
        .itemIn('modern_industrialization:ostrum_dust')
        .itemOut('modern_industrialization:ostrum_hot_ingot')
    event.recipes.modern_industrialization.blast_furnace(128, 400) //Mb, ticks
        .itemIn('modern_industrialization:calorite_dust')
        .itemOut('modern_industrialization:calorite_hot_ingot')
    event.recipes.modern_industrialization.blast_furnace(192, 900) //Mb, ticks
        .itemIn('4x modern_industrialization:turbinium_dust')
        .fluidIn('modern_industrialization:helium',600)
        .itemIn('modern_industrialization:beryllium_tiny_dust')
        .itemOut('kubejs:refined_turbinium')
})
