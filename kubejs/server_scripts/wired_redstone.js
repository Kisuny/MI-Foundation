//priority: 0

ServerEvents.recipes(event => {

    //Shaped
    event.remove({ id: 'wiredredstone:redstone_assembler' })
    event.remove({ type: 'wiredredstone:redstone_assembler_shaped' })
    event.remove({ type: 'wiredredstone:redstone_assembler_shapeless' })
    // event.shaped('wiredredstone:redstone_assembler', [
    //     'SAS',
    //     'ADA',
    //     'EBE'
    // ], {
    //     S: 'minecraft:polished_deepslate',
    //     A: 'modern_industrialization:redstone_alloy_plate',
    //     D: 'autoworkstations:iron_auto_crafting_table',
    //     B: 'minecraft:blast_furnace',
    //     E: 'minecraft:smooth_stone',
    // })

    event.shaped('wiredredstone:bundled_cable', [
        'SWS',
        'WWW',
        'SWS'
    ], {
        S: 'minecraft:string',
        W: '#wiredredstone:insulated_wires',
    })

    event.shaped('3x wiredredstone:redstone_anode', [
        'WWW',
        'PRP',
        '   '
    ], {
        R: 'wiredredstone:redstone_wire_plate',
        W: 'wiredredstone:red_alloy_wire',
        P: 'wiredredstone:stone_plate',
    })

    event.shaped('wiredredstone:redstone_inverting_cathode', [
        ' T ',
        ' C ',
        '   '
    ], {
        T: 'minecraft:redstone_torch',
        C: 'wiredredstone:redstone_cathode',
    })

    event.shaped('2x wiredredstone:redstone_cathode', [
        'WW ',
        'WW ',
        'SP '
    ], {
        P: 'wiredredstone:redstone_wire_plate',
        W: 'wiredredstone:red_alloy_wire',
        S: 'wiredredstone:stone_plate',
    })

    event.shaped('3x wiredredstone:redstone_delay_line', [
        ' WP',
        'WP ',
        'P  '
    ], {
        P: 'wiredredstone:redstone_wire_plate',
        W: 'wiredredstone:red_alloy_wire',
    })

    event.shaped('wiredredstone:redstone_wire_plate', [
        ' W ',
        ' S ',
        '   '
    ], {
        W: 'wiredredstone:red_alloy_wire',
        S: 'wiredredstone:stone_plate',
    })

    event.shaped('wiredredstone:redstone_projector_torch', [
        ' E ',
        ' S ',
        '   '
    ], {
        E: 'wiredredstone:ender_redstone_mixture',
        S: 'wiredredstone:obsidian_stick',
    })

    event.shaped('wiredredstone:redstone_projector_cathode', [
        ' E ',
        ' C ',
        '   '
    ], {
        E: 'wiredredstone:redstone_projector_torch',
        C: 'wiredredstone:redstone_cathode',
    })

    event.shaped('wiredredstone:projection_viewer', [
        ' P ',
        'PEP',
        ' P '
    ], {
        E: 'wiredredstone:ender_redstone_mixture',
        P: 'modern_industrialization:iron_plate',
    })

    event.shaped('wiredredstone:gate_diode', [
        'SAS',
        'SCS',
        'SPS'
    ], {
        A: 'wiredredstone:redstone_anode',
        S: 'wiredredstone:stone_plate',
        C: 'wiredredstone:redstone_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_and', [
        'AIA',
        'III',
        'SPS'
    ], {
        A: 'wiredredstone:redstone_anode',
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_or', [
        'SIS',
        'PIP',
        'SPS'
    ], {
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_nand', [
        'AAA',
        'III',
        'SPS'
    ], {
        A: 'wiredredstone:redstone_anode',
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_nor', [
        'SAS',
        'PIP',
        'SPS'
    ], {
        A: 'wiredredstone:redstone_anode',
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_not', [
        'SAS',
        'SIS',
        'SPS'
    ], {
        A: 'wiredredstone:redstone_anode',
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_repeater', [
        'LIL',
        'PIP',
        'SPP'
    ], {
        L: 'wiredredstone:redstone_delay_line',
        S: 'wiredredstone:stone_plate',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_rs_latch', [
        'AIP',
        'PPP',
        'PIA'
    ], {
        A: 'wiredredstone:redstone_anode',
        I: 'wiredredstone:redstone_inverting_cathode',
        P: 'wiredredstone:redstone_wire_plate',
    })

    event.shaped('wiredredstone:gate_projector_simple', [
        'SPS',
        'SCS',
        'SPS'
    ], {
        C: 'wiredredstone:redstone_projector_cathode',
        S: 'wiredredstone:stone_plate',
        P: 'wiredredstone:redstone_wire_plate',
    })




    // Assembler
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('5x #wiredredstone:insulated_wires')
        .fluidIn('modern_industrialization:nylon', 40)
        .itemOut('wiredredstone:bundled_cable')
    event.recipes.modern_industrialization.assembler(8, 200) //Eu, ticks
        .itemIn('5x #wiredredstone:insulated_wires')
        .fluidIn('modern_industrialization:nylon', 40)
        .itemOut('wiredredstone:bundled_cable')

    // Cutting Machine
    event.recipes.modern_industrialization.cutting_machine(4, 200) //Eu, ticks
        .itemIn('minecraft:smooth_stone')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('4x wiredredstone:stone_plate')
    event.recipes.modern_industrialization.cutting_machine(16, 600) //Eu, ticks
        .itemIn('minecraft:obsidian')
        .fluidIn('modern_industrialization:lubricant', 250)
        .itemOut('4x wiredredstone:obsidian_stick')


    //Mixer
    event.remove({ id: 'wiredredstone:redstone_alloy_ingot' })
    event.recipes.modern_industrialization.mixer(2, 100) //Eu, ticks
        .itemIn('modern_industrialization:iron_dust')
        .fluidIn('modern_industrialization:molten_redstone', 444)
        .itemOut('modern_industrialization:redstone_alloy_dust')

    // Wiremill
    event.recipes.modern_industrialization.wiremill(4, 200) //Eu, ticks
        .itemIn('modern_industrialization:redstone_alloy_plate')
        .itemOut('2x wiredredstone:red_alloy_wire')

    global.dyeColors.forEach(color => {
        // Insulated wires
        event.shapeless(`2x wiredredstone:${color.name}_insulated_wire`, ['wiredredstone:red_alloy_wire', 'wiredredstone:red_alloy_wire', `minecraft:${color.name}_wool`])
        event.shapeless(`wiredredstone:${color.name}_insulated_wire`, ['#wiredredstone:insulated_wires', `minecraft:${color.name}_dye`])
        event.recipes.modern_industrialization.mixer(4, 100) //Eu, ticks
            .itemIn('8x wiredredstone:red_alloy_wire')
            .itemIn(`minecraft:${color.name}_dye`)
            .fluidIn('modern_industrialization:nylon', 80)
            .itemOut(`8x wiredredstone:${color.name}_insulated_wire`)
        event.recipes.modern_industrialization.mixer(2, 100) //Eu, ticks
            .itemIn('8x #wiredredstone:insulated_wires')
            .itemIn(`minecraft:${color.name}_dye`)
            .itemOut(`8x wiredredstone:${color.name}_insulated_wire`)

        // Bundled cables
        event.shapeless(`wiredredstone:${color.name}_bundled_cable`, ['#wiredredstone:colored_bundled_cables', `minecraft:${color.name}_dye`])
        event.shapeless(`wiredredstone:${color.name}_bundled_cable`, ['wiredredstone:bundled_cable', 'minecraft:paper', `minecraft:${color.name}_dye`])
        event.recipes.modern_industrialization.mixer(4, 100) //Eu, ticks
            .itemIn('8x wiredredstone:bundled_cable')
            .itemIn('4x minecraft:paper')
            .itemIn(`minecraft:${color.name}_dye`)
            .itemOut(`8x wiredredstone:${color.name}_bundled_cable`)
        event.recipes.modern_industrialization.mixer(2, 100) //Eu, ticks
            .itemIn('8x #wiredredstone:colored_bundled_cables')
            .itemIn(`minecraft:${color.name}_dye`)
            .itemOut(`8x wiredredstone:${color.name}_bundled_cable`)

    });
})
