//priority: 0

ServerEvents.recipes(event => {

    event.remove({ id: 'travelstaff:travel_staff' })
    event.recipes.modern_industrialization.assembler(64, 400)
        .itemIn('minecraft:ender_pearl')
        .itemIn('2x modern_industrialization:compactium_ring')
        .itemIn('kubejs:pure_beryllium')
        .itemIn('modern_industrialization:stainless_steel_rod_magnetic')
        .fluidIn('modern_industrialization:argon', 50)
        .itemOut('travelstaff:travel_staff')
    event.remove({ output: 'travelstaff:travel_anchor' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:netherite_large_plate')
        .itemIn('2x modern_industrialization:electronic_circuit')
        .itemIn('4x wiredredstone:ender_redstone_mixture')
        .itemIn('#kibe:elevators')
        .itemIn('neepmeat:enlightened_brain')
        .itemOut('travelstaff:travel_anchor')
})
