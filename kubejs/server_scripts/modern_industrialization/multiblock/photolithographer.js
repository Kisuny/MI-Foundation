//priority: 0

ServerEvents.recipes(event => {
    // Photoelectric Cell
    event.recipes.modern_industrialization.photolithographer(32, 200) //Mb, ticks
        .itemIn('modern_industrialization:osmium_plate')
        .itemIn('ae2:quartz_vibrant_glass')
        .itemIn('modern_industrialization:silicon_n_doped_plate')
        .itemIn('modern_industrialization:silicon_p_doped_plate')
        .itemIn('modern_industrialization:topaz_lens',0.01)
        .itemIn('modern_industrialization:amethyst_lens',0.01)
        .itemIn('modern_industrialization:citrine_lens',0.01)
        .fluidIn('modern_industrialization:argon', 25)
        .fluidIn('modern_industrialization:cryofluid', 125)
        .itemOut('4x kubejs:photoelectric_cell')
    // Digital Circuit Board
    event.recipes.modern_industrialization.photolithographer(32, 200) //Mb, ticks
        .itemIn('modern_industrialization:silicon_battery')
        .itemIn('modern_industrialization:electronic_circuit_board')
        .itemIn('4x modern_industrialization:aluminum_cable')
        .itemIn('2x modern_industrialization:stainless_steel_plate')
        .itemIn('modern_industrialization:topaz_lens',0)
        .itemIn('modern_industrialization:amethyst_lens',0)
        .itemIn('modern_industrialization:citrine_lens',0)
        .fluidIn('modern_industrialization:cryofluid', 250)
        .fluidIn('modern_industrialization:polyethylene', 500)
        .itemOut('modern_industrialization:digital_circuit_board');
    // Processing Unit Board
    event.recipes.modern_industrialization.photolithographer(64, 400) //Mb, ticks
        .itemIn('2x modern_industrialization:cadmium_battery')
        .itemIn('modern_industrialization:digital_circuit_board')
        .itemIn('6x modern_industrialization:annealed_copper_cable')
        .itemIn('2x modern_industrialization:platinum_plate')
        .itemIn('modern_industrialization:topaz_lens',0.01)
        .itemIn('modern_industrialization:amethyst_lens',0.01)
        .itemIn('modern_industrialization:citrine_lens',0.01)
        .fluidIn('modern_industrialization:cryofluid', 500)
        .fluidIn('modern_industrialization:polyvinyl_chloride', 1000)
        .itemOut('modern_industrialization:processing_unit_board');
    // Photonic Circuit Board
    event.recipes.modern_industrialization.photolithographer(128, 800) //Mb, ticks
        .itemIn('3x modern_industrialization:compactium_battery')
        .itemIn('modern_industrialization:processing_unit_board')
        .itemIn('8x ae2:fluix_glass_cable')
        .itemIn('4x modern_industrialization:indium_phosphide_plate')
        .itemIn('modern_industrialization:topaz_lens',0.02)
        .itemIn('modern_industrialization:amethyst_lens',0.02)
        .itemIn('modern_industrialization:citrine_lens',0.02)
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .fluidIn('modern_industrialization:argon', 50)
        .itemOut('kubejs:photonic_circuit_board');
    // Quantum Cirtuic Board
    event.remove({id: 'modern_industrialization:electric_age/circuit/assembler/quantum_circuit_board'});
    event.recipes.modern_industrialization.photolithographer(196, 1200) //Mb, ticks
        .itemIn('2x modern_industrialization:plutonium_battery')
        .itemIn('kubejs:photonic_circuit_board')
        .itemIn('12x ae2:fluix_glass_cable')
        .itemIn('6x modern_industrialization:iridium_plate')
        .itemIn('modern_industrialization:topaz_lens',0.04)
        .itemIn('modern_industrialization:amethyst_lens',0.04)
        .itemIn('modern_industrialization:citrine_lens',0.04)
        .fluidIn('modern_industrialization:cryofluid', 1000)
        .fluidIn('modern_industrialization:helium_3', 50)
        .itemOut('modern_industrialization:quantum_circuit_board');
})
