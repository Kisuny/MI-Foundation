//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.distillation_tower(128, 200)
        .fluidIn('modern_industrialization:void', 1000)
        .fluidOut('neepmeat:ethereal_fuel', 400)
        .fluidOut('modern_industrialization:purified_void', 200)
        .fluidOut('spectrum:midnight_solution', 200)
        .fluidOut('modern_industrialization:black_ink', 200)

});
