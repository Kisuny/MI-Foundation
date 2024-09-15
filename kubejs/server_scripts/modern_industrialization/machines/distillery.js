ServerEvents.recipes(event => {
    // Ethylen
    event.recipes.modern_industrialization.distillery(8, 800)
        .fluidIn('modern_industrialization:wood_gas', 1000)
        .fluidOut('modern_industrialization:ethylene', 20)

    // Methane
    event.recipes.modern_industrialization.distillery(8, 800)
        .fluidIn('modern_industrialization:wood_gas', 1000)
        .fluidOut('modern_industrialization:methane', 26)

    // Hydrogen
    event.recipes.modern_industrialization.distillery(8, 800)
        .fluidIn('modern_industrialization:wood_gas', 1000)
        .fluidOut('modern_industrialization:hydrogen', 200)
    // Ethanol from sugar water
    event.recipes.modern_industrialization.distillery(8, 800)
        .fluidIn('the_bumblezone:sugar_water_still', 1000)
        .fluidOut('modern_industrialization:ethanol', 20)


})
