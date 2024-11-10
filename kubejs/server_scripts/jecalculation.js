ServerEvents.recipes(event => {
    event.remove({id: 'jecalculation:item_calculator_craft'})
    event.remove({id: 'jecalculation:item_calculator_math'})

    const CALC_TYPE = [
        {type: 'craft', color: 'minecraft:cyan_stained_glass_pane'},
        {type: 'math', color: 'minecraft:orange_stained_glass_pane'}
    ]

    CALC_TYPE.forEach(calc => {
        event.shaped(`jecalculation:item_calculator_${calc.type}`, [
            'QEQ',
            'QRQ',
            'QWQ'
        ], {
            Q: 'modern_industrialization:steel_plate',
            W: 'modern_industrialization:analog_circuit',
            E: calc.color,
            R: 'modern_industrialization:redstone_battery'
        })
    });
})