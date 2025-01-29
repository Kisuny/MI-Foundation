ServerEvents.recipes(event => {
    event.remove({id: 'jecalculation:item_calculator_craft'})
    event.remove({id: 'jecalculation:item_calculator_math'})

    const CALC_TYPE = [
        {type: 'craft', color: 'minecraft:cyan_stained_glass_pane'},
        {type: 'math', color: 'minecraft:orange_stained_glass_pane'}
    ]

    CALC_TYPE.forEach(calc => {
        event.recipes.modern_industrialization.assembler(8, 400)
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('12x modern_industrialization:steel_plate')
        .itemIn(calc.color)
        .itemIn('modern_industrialization:redstone_battery')
        .fluidIn('modern_industrialization:soldering_alloy', 500)
        .itemOut(`jecalculation:item_calculator_${calc.type}`)
    });
})