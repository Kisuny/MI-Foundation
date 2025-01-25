//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.containment_chamber(128, 200) //Eu, ticks
        .fluidIn('spectrum:liquid_crystal', 100)
        .itemIn('8x #minecraft:leaves')
        .itemOut('spectrum:vegetal')
        .biome('ad_astra:orbit')
    event.recipes.modern_industrialization.containment_chamber(128, 300) //Eu, ticks
        .fluidIn('spectrum:midnight_solution', 100)
        .itemIn('minecraft:obsidian')
        .itemOut('spectrum:neolith')
        .biome('ad_astra:orbit')

    event.recipes.modern_industrialization.containment_chamber(128, 300) //Eu, ticks
        .fluidIn('spectrum:midnight_solution', 100)
        .itemIn('#c:raw_meat')
        .itemOut('4x spectrum:midnight_chip')
        .biome('ad_astra:orbit')
        
    // event.recipes.modern_industrialization.containment_chamber(1024, 1200) //Eu, ticks
    //     .fluidIn('modern_industrialization:purified_void', 250)
    //     .itemIn('yttr:bedrock_shard')
    //     .itemOut('spectrum:bedrock_dust')
    //     .biome('ad_astra:orbit')
});
