//priority: 0

ServerEvents.recipes(event => {
    // Moon
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:moon_sand')
        .fluidIn('water', 200)
        .itemOut('kubejs:moon_data_card', 0.001)

    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:moon_cobblestone')
        .fluidIn('water', 200)
        .itemOut('kubejs:moon_data_card', 0.001)

    // Mars
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:mars_sand')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:mars_data_card', 0.001)
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:mars_cobblestone')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:mars_data_card', 0.001)

    // Venus
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:venus_sand')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:venus_data_card', 0.001)
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:venus_sandstone')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:venus_data_card', 0.001)
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:venus_cobblestone')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:venus_data_card', 0.001)
    // Mercury
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:mercury_cobblestone')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:mercury_data_card', 0.001)

    // Glacio
    event.recipes.modern_industrialization.soil_analyzer(32, 600) //Eu, ticks
        .itemIn('ad_astra:glacio_cobblestone')
        .fluidIn('minecraft:water', 200)
        .itemOut('kubejs:glacio_data_card',0.001)
});
