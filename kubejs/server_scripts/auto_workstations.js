//priority: 0

ServerEvents.recipes(event => {
    // Gold Auto Crafting Table
    event.remove({id: 'autoworkstations:netherite_auto_crafting_table_upgrade'})
    event.remove({id: 'autoworkstations:netherite_auto_crafting_table'})
    event.smithing(
        'autoworkstations:netherite_auto_crafting_table', // arg 1: output
        'autoworkstations:gold_auto_crafting_table', // arg 2: the item to be upgraded
        'modern_industrialization:netherite_large_plate' // arg 3: the upgrade item
    )
    event.recipes.modern_industrialization.packer(8, 100) //Eu, ticks
        .itemIn('autoworkstations:gold_auto_crafting_table')
        .itemIn('modern_industrialization:netherite_large_plate')
        .itemOut('autoworkstations:netherite_auto_crafting_table')
    // Gold Auto Crafting Table
    event.remove({id: 'autoworkstations:gold_auto_crafting_table_upgrade'})
    event.remove({id: 'autoworkstations:gold_auto_crafting_table'})
    event.shaped('autoworkstations:gold_auto_crafting_table', [
        'PHP',
        'GTG',
        'PCP'
    ], {
        H: 'neepmeat:item_pipe',
        P: 'modern_industrialization:midas_gold_plate',
        G: 'modern_industrialization:midas_gold_gear',
        C: 'minecraft:chest',
        T: 'minecraft:crafting_table'
    })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_crafting_table')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_crafting_table')

    // Crafting Table
    event.remove({ output: 'autoworkstations:iron_auto_anvil' })
    event.shaped('autoworkstations:iron_auto_anvil', [
        'PBP',
        'BAB',
        'PRP'
    ], {
        P: 'modern_industrialization:iron_plate',
        B: 'minecraft:iron_bars',
        A: 'minecraft:anvil',
        R: 'minecraft:redstone'
    })

    event.remove({ output: 'autoworkstations:iron_auto_brewing_stand' })
    event.shaped('autoworkstations:iron_auto_brewing_stand', [
        'PRP',
        'GBG',
        'PHP'
    ], {
        P: 'modern_industrialization:iron_plate',
        R: 'minecraft:redstone',
        G: '#c:glass_panes',
        H: 'minecraft:hopper',
        B: 'minecraft:brewing_stand'
    })

    event.remove({ output: 'autoworkstations:iron_auto_crafting_table' })
    event.shaped('autoworkstations:iron_auto_crafting_table', [
        'PHP',
        'GTG',
        'PCP'
    ], {
        H: 'neepmeat:item_pipe',
        P: 'modern_industrialization:iron_plate',
        G: 'modern_industrialization:iron_gear',
        C: 'minecraft:chest',
        T: 'minecraft:crafting_table'
    })

    event.remove({ output: 'autoworkstations:iron_auto_enchanting_table' })
    event.shaped('autoworkstations:iron_auto_enchanting_table', [
        'PGP',
        'DRD',
        'PEP'
    ], {
        P: 'modern_industrialization:iron_plate',
        D: 'modern_industrialization:diamond_plate',
        R: 'minecraft:redstone',
        E: 'minecraft:enchanting_table',
        G: '#c:glass_panes'
    })

    event.remove({ output: 'autoworkstations:iron_auto_experience_orb_emitter' })
    event.shaped('autoworkstations:iron_auto_experience_orb_emitter', [
        'IEI',
        'PBP',
        'RPR'
    ], {
        P: 'modern_industrialization:iron_plate',
        R: 'minecraft:redstone',
        E: 'minecraft:experience_bottle',
        B: 'minecraft:bucket',
        I: 'minecraft:iron_bars'
    })

    event.remove({ output: 'autoworkstations:iron_auto_experience_orb_vacuum' })
    event.shaped('autoworkstations:iron_auto_experience_orb_vacuum', [
        'PTP',
        'RHR',
        'PPP'
    ], {
        P: 'modern_industrialization:iron_plate',
        R: 'minecraft:redstone',
        T: 'modern_industrialization:tin_rotor',
        H: 'minecraft:hopper'
    })

    event.remove({ output: 'autoworkstations:iron_auto_furnace' })
    event.shaped('autoworkstations:iron_auto_furnace', [
        'PHP',
        'RBR',
        'PPP'
    ], {
        P: 'modern_industrialization:iron_plate',
        H: 'minecraft:hopper',
        B: 'minecraft:blast_furnace',
        R: 'minecraft:redstone'
    })

    // Gold auto furnace
    event.remove({ output: 'autoworkstations:gold_auto_furnace_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_furnace')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_furnace')
    event.remove({ output: 'autoworkstations:gold_auto_furnace' })
    event.shaped('autoworkstations:gold_auto_furnace', [
        'PHP',
        'RBR',
        'PPP'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        H: 'minecraft:hopper',
        B: 'minecraft:blast_furnace',
        R: 'minecraft:redstone'
    })

    // Gold auto enchanting_table
    event.remove({ output: 'autoworkstations:gold_auto_enchanting_table_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_enchanting_table')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_enchanting_table')
    event.remove({output: 'autoworkstations:gold_auto_enchanting_table' })
    event.shaped('autoworkstations:gold_auto_enchanting_table', [
        'PGP',
        'DRD',
        'PEP'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        D: 'modern_industrialization:diamond_plate',
        R: 'minecraft:redstone',
        E: 'minecraft:enchanting_table',
        G: '#c:glass_panes'
    })

    // Gold Experience Orb Vacuum
    event.remove({ id: 'autoworkstations:gold_auto_experience_orb_vacuum_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_experience_orb_vacuum')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_experience_orb_vacuum')
    event.remove({output: 'autoworkstations:gold_auto_experience_orb_vacuum' })
    event.shaped('autoworkstations:gold_auto_experience_orb_vacuum', [
        'PTP',
        'RHR',
        'PPP'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        R: 'minecraft:redstone',
        T: 'modern_industrialization:tin_rotor',
        H: 'minecraft:hopper'
    })

    // Gold Experience Orb Emitter
    event.remove({ id: 'autoworkstations:gold_auto_experience_orb_emitter_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_experience_orb_emitter')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_experience_orb_emitter')
    event.remove({ id: 'autoworkstations:gold_auto_experience_orb_emitter' })
    event.shaped('autoworkstations:gold_auto_experience_orb_emitter', [
        'IEI',
        'PBP',
        'RPR'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        R: 'minecraft:redstone',
        E: 'minecraft:experience_bottle',
        B: 'minecraft:bucket',
        I: 'minecraft:iron_bars'
    })

    // Gold Auto Anvil
    event.remove({ id: 'autoworkstations:gold_auto_anvil_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_anvil')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_anvil')
    event.remove({ id: 'autoworkstations:gold_auto_anvil' })
    event.shaped('autoworkstations:gold_auto_anvil', [
        'PBP',
        'BAB',
        'PRP'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        B: 'minecraft:iron_bars',
        A: 'minecraft:anvil',
        R: 'minecraft:redstone'
    })

    // Gold Auto Brewing Stand
    event.remove({ id: 'autoworkstations:gold_auto_brewing_stand_upgrade' })
    event.recipes.modern_industrialization.packer(4, 100) //Eu, ticks
        .itemIn('autoworkstations:iron_auto_brewing_stand')
        .itemIn('2x modern_industrialization:midas_gold_large_plate')
        .itemOut('autoworkstations:gold_auto_brewing_stand')
    event.remove({ id: 'autoworkstations:gold_auto_brewing_stand' })
    event.shaped('autoworkstations:gold_auto_brewing_stand', [
        'PRP',
        'GBG',
        'PHP'
    ], {
        P: 'modern_industrialization:midas_gold_plate',
        R: 'minecraft:redstone',
        G: '#c:glass_panes',
        H: 'minecraft:hopper',
        B: 'minecraft:brewing_stand'
    })



})
