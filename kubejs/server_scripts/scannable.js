//priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'scannable:scanner' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x #c:glass_panes')
        .itemIn('modern_industrialization:electronic_circuit')
        .itemIn('modern_industrialization:portable_storage_unit')
        .itemIn('2x modern_industrialization:steel_rod_magnetic')
        .itemIn('2x modern_industrialization:transistor')
        .itemOut('scannable:scanner')

    event.remove({ id: 'scannable:blank_module' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('modern_industrialization:iron_large_plate')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:soldering_alloy', 100)
        .itemOut('scannable:blank_module')
})

