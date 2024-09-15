//priority: 0

ServerEvents.recipes(event => {

    //Shaped
    event.remove({ id: 'wiredredstone:redstone_assembler' })
    event.shaped('wiredredstone:redstone_assembler', [
        'SAS',
        'ADA',
        'EBE'
    ], {
        S: 'minecraft:polished_deepslate',
        A: 'modern_industrialization:redstone_alloy_plate',
        D: 'autoworkstations:iron_auto_crafting_table',
        B: 'minecraft:blast_furnace',
        E: 'minecraft:smooth_stone',
    })

    //Assembler
    event.remove({ id: 'wiredredstone:redstone_alloy_ingot' })
    event.recipes.modern_industrialization.mixer(2, 100) //Eu, ticks
        .itemIn('modern_industrialization:iron_dust')
        .fluidIn('modern_industrialization:molten_redstone', 444)
        .itemOut('modern_industrialization:redstone_alloy_dust')
})
