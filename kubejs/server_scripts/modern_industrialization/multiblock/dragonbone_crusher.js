//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.dragonbone_crusher(128, 1200)
        .itemIn('mythicmetals:morkite')
        .fluidIn('spectrum:liquid_crystal', 200)
        .itemOut('spectrum:dragonbone_chunk')
});
