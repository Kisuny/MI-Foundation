ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.alien_cell(64, 600) //Eu, ticks
        .fluidIn('neepmeat:blood', 1000)
        .fluidIn('modern_industrialization:cryofluid', 200)
        .fluidIn('neepmeat:work_fluid', 200)
        .fluidOut('modern_industrialization:mutagen', 400)

    event.recipes.modern_industrialization.alien_cell(64, 600) //Eu, ticks
        .fluidIn('gigeresque:black_fluid_still', 100)
        .fluidIn('modern_industrialization:cryofluid', 200)
        .fluidIn('neepmeat:work_fluid', 200)
        .fluidOut('modern_industrialization:mutagen', 600)

    event.recipes.modern_industrialization.alien_cell(64, 600) //Eu, ticks
        .fluidIn('the_bumblezone:royal_jelly_fluid_still', 50)
        .fluidIn('modern_industrialization:cryofluid', 200)
        .fluidIn('neepmeat:work_fluid', 200)
        .fluidOut('modern_industrialization:mutagen', 200)
})