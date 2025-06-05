//priority: 0

ServerEvents.recipes(event => {

    //Shaped

    event.remove({ id: 'farmersdelight:cutting/amethyst_block' })
    
    event.remove({ id: 'farmersdelight:iron_knife' })
    event.shaped('farmersdelight:iron_knife', [
        ' A',
        'S ',
        '  '
    ], {
        S: 'minecraft:stick',
        A: 'modern_industrialization:iron_plate'
    })

    event.remove({ id: 'farmersdelight:golden_knife' })
    event.shaped('farmersdelight:golden_knife', [
        ' A',
        'S ',
        '  '
    ], {
        S: 'minecraft:stick',
        A: 'modern_industrialization:gold_plate'
    })

    event.remove({ id: 'farmersdelight:diamond_knife' })
    event.shaped('farmersdelight:diamond_knife', [
        ' A',
        'S ',
        '  '
    ], {
        S: 'minecraft:stick',
        A: 'modern_industrialization:diamond_plate'
    })

    event.remove({ id: 'farmersdelight:skillet' })
    event.shaped('farmersdelight:skillet', [
        ' SS',
        ' SS',
        'A  '
    ], {
        S: 'modern_industrialization:steel_plate',
        A: 'minecraft:brick'
    })

    event.remove({ id: 'farmersdelight:stove' })
    event.shaped('farmersdelight:stove', [
        'AAA',
        'S S',
        'SDS'
    ], {
        S: 'minecraft:bricks',
        A: 'modern_industrialization:steel_plate',
        D: 'minecraft:campfire'
    })

    event.remove({ id: 'farmersdelight:cooking_pot' })
    event.shaped('farmersdelight:cooking_pot', [
        'SAS',
        'EDE',
        'EEE'
    ], {
        S: 'minecraft:brick',
        A: 'minecraft:stick',
        D: 'minecraft:bucket',
        E: 'modern_industrialization:steel_plate'
    })
})
