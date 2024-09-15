ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.fluid_extractor(4, 200)
        .itemIn('neepmeat:blood_bubble')
        .fluidOut('neepmeat:blood', 250)
})
