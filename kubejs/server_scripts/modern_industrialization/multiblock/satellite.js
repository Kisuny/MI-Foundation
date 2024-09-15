//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.satellite(256, 1200) //Eu, ticks
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .itemOut('kubejs:advanced_moon_data_card', 0.005)
        .dimension('ad_astra:moon_orbit')

    event.recipes.modern_industrialization.satellite(256, 1200) //Eu, ticks
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .itemOut('kubejs:advanced_mars_data_card', 0.005)
        .dimension('ad_astra:mars_orbit')

    event.recipes.modern_industrialization.satellite(256, 1200) //Eu, ticks
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .itemOut('kubejs:advanced_venus_data_card',0.005)
        .dimension('ad_astra:venus_orbit')

    event.recipes.modern_industrialization.satellite(256, 1200) //Eu, ticks
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .itemOut('kubejs:advanced_mercury_data_card', 0.005)
        .dimension('ad_astra:mercury_orbit')

    event.recipes.modern_industrialization.satellite(256, 1200) //Eu, ticks
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .itemOut('kubejs:advanced_glacio_data_card',0.005)
        .dimension('ad_astra:glacio_orbit')
})
