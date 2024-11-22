ServerEvents.recipes(event => {
    const rem_id = [
        'moderndynamics:cable/lv_from_mi',
        'moderndynamics:cable/mv_from_mi',
        'moderndynamics:cable/hv_from_mi',
        'moderndynamics:cable/ev_from_mi',
        'moderndynamics:cable/superconductor_from_mi',
        'moderndynamics:machine_extender',
        'moderndynamics:wrench'
    ]
    rem_id.forEach(element => {
        event.remove({id: element})
    });

    event.remove({ id: 'moderndynamics:fluid_pipe' })
    event.shaped('8x moderndynamics:fluid_pipe', [
        'CPC',
        '   ',
        'CPC'
    ], {
        C: 'modern_industrialization:cupronickel_plate',
        P: 'minecraft:glass_pane',
    })

    event.remove({ id: 'moderndynamics:item_pipe' })
    event.shaped('8x moderndynamics:item_pipe', [
        'CPC',
        '   ',
        'CPC'
    ], {
        C: 'modern_industrialization:invar_plate',
        P: 'minecraft:glass_pane',
    })

    event.remove({ id: 'moderndynamics:filter' })
    event.shaped('4x moderndynamics:filter', [
        'WCW',
        'gIG',
        'WCW'
    ], {
        C: 'modern_industrialization:analog_circuit',
        g: 'neepmeat:fluid_gauge',
        G: 'neepmeat:item_gauge',
        W: 'wiredredstone:red_alloy_wire',
        I: 'moderndynamics:inhibitor',
    })

    event.remove({ id: 'moderndynamics:extractor' })
    event.shaped('4x moderndynamics:extractor', [
        'WpW',
        'PIP',
        'WpW'
    ], {
        p: 'modern_industrialization:piston',
        P: 'modern_industrialization:pump',
        W: 'wiredredstone:red_alloy_wire',
        I: 'moderndynamics:inhibitor',
    })

    event.remove({ id: 'moderndynamics:attractor' })
    event.shaped('4x moderndynamics:attractor', [
        'WCW',
        'DID',
        'WCW'
    ], {
        C: 'modern_industrialization:electronic_circuit',
        D: 'ae2:ender_dust',
        W: 'wiredredstone:red_alloy_wire',
        I: 'moderndynamics:inhibitor',
    })

    event.remove({ id: 'moderndynamics:inhibitor' })
    event.shaped('3x moderndynamics:inhibitor', [
        '   ',
        'PIP',
        '   '
    ], {
        P: 'modern_industrialization:iron_large_plate',
        I: 'modern_industrialization:invar_large_plate',
    })

});