ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.blast_furnace(64, 200)
        .itemIn('modern_industrialization:steel_double_ingot')
        .itemIn('neepmeat:raw_meat_brick')
        .fluidIn('neepmeat:tissue_slurry',200)
        .itemOut('2x neepmeat:meat_steel_ingot')
        .biome('ad_astra:orbit')
})
