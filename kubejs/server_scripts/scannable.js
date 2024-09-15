//priority: 0

ServerEvents.recipes(event => {
    event.remove({ id: 'scannable:scanner' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('ae2:semi_dark_monitor')
        .itemIn('modern_industrialization:digital_circuit')
        .itemIn('modern_industrialization:portable_storage_unit')
        .itemIn('2x modern_industrialization:stainless_steel_rod_magnetic')
        .itemIn('2x modern_industrialization:arithmetic_logic_unit')
        .itemOut('scannable:scanner')

    event.remove({ id: 'scannable:blank_module' })
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('ae2:basic_card')
        .itemIn('modern_industrialization:electronic_circuit')
        .fluidIn('modern_industrialization:polyethylene', 100)
        .itemOut('scannable:blank_module')
})

