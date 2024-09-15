//priority: 0
const reagents = [
    {
        id: 'spectrum:liquid_crystal',
        ammount: 200,
        produce: 100,
        consumption: 1,
        energy: 1,
        duration: 1
    },
    {
        id: 'neepmeat:ethereal_fuel',
        ammount: 100,
        produce: 50,
        consumption: 2,
        energy: 1.5,
        duration: 0.5
    },
    {
        id: 'modern_industrialization:boosted_diesel',
        ammount: 333,
        produce: 111,
        consumption: 3,
        energy: 0.8,
        duration: 1.2
    },
    {
        id: 'the_bumblezone:royal_jelly_fluid_still',
        ammount: 20,
        produce: 200,
        consumption: 4,
        energy: 0.2,
        duration: 1
    },
    {
        id: 'neepmeat:work_fluid',
        ammount: 500,
        produce: 100,
        consumption: 3,
        energy: 0.6,
        duration: 1.2
    },
    {
        id: 'kibe:liquid_xp',
        ammount: 400,
        produce: 100,
        consumption: 5,
        energy: 1.5,
        duration: 0.6
    },
]
ServerEvents.recipes(event => {
    reagents.forEach(reagent => {
        event.recipes.modern_industrialization.morkite_enricher(Math.floor(96*reagent.energy), Math.floor(200*reagent.duration))
            .itemIn(strmulti_with_cap(reagent.consumption,'mythicmetals:morkite'))
            .fluidIn(`${reagent.id}`, reagent.ammount)
            .fluidOut('modern_industrialization:morkite_fuel', reagent.produce)
    });
})
