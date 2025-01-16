//priority: 0

ServerEvents.recipes(event => {
    event.remove({ output: 'architects_palette:unobtanium', type: 'minecraft:smelting' })
    event.remove({ output: 'architects_palette:unobtanium', type: 'minecraft:blasting' })
    event.remove({ id: 'architects_palette:unobtanium_from_unobtanium_block' })
    event.remove({ output: 'architects_palette:unobtanium', type: 'architects_palette:warping'})


    event.shaped('architects_palette:withered_osseous_skull', [
        'QQQ',
        'QWQ',
        'QQQ'
    ], {
        Q: 'minecraft:coal',
        W: 'architects_palette:osseous_skull'
    })

    event.shapeless('4x architects_palette:unobtanium', [
        'architects_palette:unobtanium_block'
    ])

    event.remove({ id: 'architects_palette:cerebral_plate' })
    event.shaped('4x architects_palette:cerebral_plate', [
        'SAB',
        '   ',
        '   '
    ], {
        S: 'minecraft:tuff',
        A: 'modern_industrialization:salt_dust',
        B: 'minecraft:charcoal'
    })
    event.replaceInput({id: 'architects_palette:sheet_metal_block'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_large_plate')
})
