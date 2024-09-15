let crafting_table_botania_flower_generators = [
    {
        flower: "botania:hydroangeas",
        block_name: "hydroangeas_generator",
    },
    {
        flower: "botania:thermalily",
        block_name: "thermalily_generator",
    },
    {
        flower: "botania:entropinnyum",
        block_name: "entropinnyum_generator",
    },
    {
        flower: "botania:munchdew",
        block_name: "munchdew_generator",
    },
    {
        flower: "botania:narslimmus",
        block_name: "narslimmus_generator",
    },
    {
        flower: "botania:shulk_me_not",
        block_name: "shulk_me_not_generator",
    },
    {
        flower: "botania:endoflame",
        block_name: "endoflame_generator",
    },
    {
        flower: "botania:rosa_arcana",
        block_name: "rosa_arcana_generator",
    },
    {
        flower: "botania:rafflowsia",
        block_name: "rafflowsia_generator",
    },
    {
        flower: "botania:spectrolus",
        block_name: "spectrolus_generator",
    },
    {
        flower: "botania:gourmaryllis",
        block_name: "gourmaryllis_generator",
    },
    {
        flower: "botania:kekimurus",
        block_name: "kekimurus_generator",
    },
]


function add_flower_generator_crafting_table_recipe(event, element) {
    event.shaped(`modern_industrialization:${element.block_name}`, [
        'GGG',
        'CFC',
        'CPC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            G: "spectrum:clear_hummingstone_glass",
            P: "modern_industrialization:digital_circuit",
            F: element.flower,
        }
    );

}

ServerEvents.recipes(event => {
    // Turbinium Pipe Casing
    event.shaped('modern_industrialization:turbinium_machine_casing_pipe', [
        'C C',
        'CTC',
        'C C'
    ], {
        T: 'modern_industrialization:turbinium_casing',
        C: 'modern_industrialization:turbinium_curved_plate',
    });

    // Turbinium Casing
    event.shaped('modern_industrialization:turbinium_casing', [
        'PPP',
        'PFP',
        'PPP'
    ], {
        P: 'modern_industrialization:turbinium_plate',
        F: 'fluxnetworks:flux_core',
    });

    // Scoop
    event.shaped('kubejs:scoop', [
        'WRW',
        'WSW',
        ' S '
    ], {
        W: '#minecraft:wool',
        R: 'modern_industrialization:iron_ring',
        S: 'minecraft:stick',
    });

// Caterium upgrades
    // Redstone Battery
    event.shaped('3x modern_industrialization:redstone_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:tin_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:redstone_alloy_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_redstone_battery');
    // Sodium Battery
    event.shaped('3x modern_industrialization:sodium_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:aluminum_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:sodium_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_sodium_battery');
    // Silicon Battery
    event.shaped('3x modern_industrialization:silicon_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:electrum_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:silicon_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_silicon_battery');
    // Plutonium Battery
    event.shaped('3x modern_industrialization:plutonium_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:superconductor_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:plutonium_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_plutonium_battery');
    // Cadmium Battery
    event.shaped('3x modern_industrialization:cadmium_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:annealed_copper_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:cadmium_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_cadmium_battery');
    // Compactium Battery
    event.shaped('3x modern_industrialization:compactium_battery', [
        'CPC',
        'BDB',
        'BDB'
    ], {
        C: 'modern_industrialization:annealed_copper_cable',
        P: 'modern_industrialization:caterium_plate',
        D: 'modern_industrialization:compactium_dust',
        B: 'modern_industrialization:battery_alloy_curved_plate',
    }).id('mif:caterium_alternate_compactium_battery');
    // Analog Circuit
    event.shaped('3x modern_industrialization:analog_circuit', [
        'RIR',
        'CBC',
        'WWW'
    ], {
        W: 'modern_industrialization:caterium_wire',
        R: 'modern_industrialization:resistor',
        I: 'modern_industrialization:inductor',
        C: 'modern_industrialization:capacitor',
        B: 'modern_industrialization:analog_circuit_board',
    }).id('mif:caterium_alternate_analog_circuit');
    // Diode
    event.shaped('3x modern_industrialization:diode', [
        'WPG',
        'WNG',
        'WPG'
    ], {
        W: 'modern_industrialization:caterium_fine_wire',
        P: 'modern_industrialization:steel_plate',
        N: 'modern_industrialization:silicon_plate',
        G: '#c:glass_blocks',
    }).id('mif:caterium_alternate_diode');
    // N Diode
    event.shaped('6x modern_industrialization:diode', [
        'WPG',
        'WNG',
        'WPG'
    ], {
        W: 'modern_industrialization:caterium_fine_wire',
        P: 'modern_industrialization:steel_plate',
        N: 'modern_industrialization:silicon_n_doped_plate',
        G: '#c:glass_blocks',
    }).id('mif:caterium_alternate_n_diode');
    // Transistor
    event.shaped('4x modern_industrialization:transistor', [
        ' F ',
        'SSS',
        'PPP'
    ], {
        F: 'modern_industrialization:caterium_fine_wire',
        S: 'modern_industrialization:steel_plate',
        P: 'modern_industrialization:silicon_plate',
    }).id('mif:caterium_alternate_transistor');
    // NP Transistor
    event.shaped('8x modern_industrialization:transistor', [
        ' F ',
        'SSS',
        'PNP'
    ], {
        F: 'modern_industrialization:caterium_fine_wire',
        S: 'modern_industrialization:steel_plate',
        P: 'modern_industrialization:silicon_p_doped_plate',
        N: 'modern_industrialization:silicon_n_doped_plate',
    }).id('mif:caterium_alternate_np_transistor');
    // AND Gate
    event.shaped('3x modern_industrialization:and_gate', [
        'WR ',
        'WOW',
        'WR '
    ], {
        W: 'modern_industrialization:caterium_wire',
        O: 'modern_industrialization:op_amp',
        R: 'modern_industrialization:resistor',
    }).id('mif:caterium_alternate_and_gate');
    // OR Gate
    event.shaped('3x modern_industrialization:or_gate', [
        ' O ',
        'WDW',
        ' O '
    ], {
        W: 'modern_industrialization:caterium_wire',
        O: 'modern_industrialization:op_amp',
        D: 'modern_industrialization:diode',
    }).id('mif:caterium_alternate_or_gate');
    // NOT Gate
    event.shaped('3x modern_industrialization:not_gate', [
        'WOR',
        '   ',
        '   '
    ], {
        W: 'modern_industrialization:caterium_wire',
        O: 'modern_industrialization:op_amp',
        R: 'modern_industrialization:resistor',
    }).id('mif:caterium_alternate_not_gate');
    // Large Advanced Motor
    event.shaped('2x modern_industrialization:large_advanced_motor', [
        'MMM',
        'CRR',
        'MMM'
    ], {
        M: 'modern_industrialization:advanced_motor',
        C: 'modern_industrialization:processing_unit',
        R: 'modern_industrialization:caterium_rod',
    }).id('mif:caterium_alternate_large_advanced_motor');
    // Advanced Motor
    event.shaped('3x modern_industrialization:advanced_motor', [
        'CWR',
        'WMW',
        'RWC'
    ], {
        C: 'modern_industrialization:aluminum_cable',
        W: 'modern_industrialization:caterium_wire',
        R: 'modern_industrialization:stainless_steel_rod',
        M: 'modern_industrialization:stainless_steel_rod_magnetic',
    }).id('mif:caterium_alternate_advanced_motor');
    // Large Motor
    event.shaped('2x modern_industrialization:large_motor', [
        'MMM',
        'CRR',
        'MMM'
    ], {
        M: 'modern_industrialization:motor',
        C: 'modern_industrialization:electronic_circuit',
        R: 'modern_industrialization:caterium_rod',
    }).id('mif:caterium_alternate_large_motor');
    // Motor
    event.shaped('3x modern_industrialization:motor', [
        'CWR',
        'WMW',
        'RWC'
    ], {
        C: 'modern_industrialization:tin_cable',
        W: 'modern_industrialization:caterium_wire',
        R: 'modern_industrialization:steel_rod',
        M: 'modern_industrialization:steel_rod_magnetic',
    }).id('mif:caterium_alternate_motor');
////////////////////////////////////////////////////////////////////////////////////////

    event.remove({id: 'modern_industrialization:electric_age/component/craft/pump'})
    event.shaped('modern_industrialization:pump', [
        'PPP',
        'RMR',
        'BRB'
    ], {
        P: 'neepmeat:fluid_pipe',
        R: 'modern_industrialization:tin_rotor',
        M: 'modern_industrialization:motor',
        B: 'modern_industrialization:tin_bolt',
    });

    event.shaped('modern_industrialization:space_casing', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'modern_industrialization:hsla_steel_plate',
        A: 'modern_industrialization:hsla_steel_gear'
    });

    event.shaped('2x modern_industrialization:hsla_steel_machine_casing_pipe', [
        'C C',
        'CAC',
        'C C'
    ], {
        C: 'modern_industrialization:hsla_steel_curved_plate',
        A: 'modern_industrialization:space_casing'
    });

    event.remove({ id: 'modern_industrialization:tools/steam_mining_drill' });
    event.shaped('modern_industrialization:steam_mining_drill', [
        'SAA',
        'DBA',
        'WDS'
    ], {
        S: 'modern_industrialization:iron_gear',
        A: 'modern_industrialization:diamond_plate',
        D: 'modern_industrialization:iron_large_plate',
        W: 'minecraft:bucket',
        B: 'modern_industrialization:copper_drill_head'
    });

    event.remove({ id: 'modern_industrialization:materials/fire_clay_dust' });
    event.shaped('3x modern_industrialization:fire_clay_dust', [
        'SA ',
        'SA ',
        '   '
    ], {
        S: 'architects_palette:algal_blend',
        A: 'modern_industrialization:brick_dust'
    });

    event.shaped('kubejs:photonic_circuit', [
        'PSP',
        'LBL',
        'PSP'
    ], {
        S: 'kubejs:photoelectric_cell',
        B: 'kubejs:photonic_circuit_board',
        L: 'ae2:logic_processor',
        P: 'modern_industrialization:processing_unit'
    });

    event.remove({ id: 'modern_industrialization:materials/fire_clay_bricks' });
    event.shaped('modern_industrialization:fire_clay_bricks', [
        'SAS',
        'ASA',
        'SAS'
    ], {
        S: 'architects_palette:cerebral_plate',
        A: 'modern_industrialization:fire_clay_brick'
    });

    event.shaped('4x modern_industrialization:desh_drill', [
        'SDF',
        'CBD',
        'AES'
    ], {
        S: 'modern_industrialization:iron_gear',
        A: 'modern_industrialization:electrum_cable',
        B: 'modern_industrialization:electronic_circuit',
        C: 'modern_industrialization:motor',
        D: '#modern_industrialization:fluid_pipes',
        F: 'modern_industrialization:desh_drill_head',
        E: 'modern_industrialization:pump'
    });

    event.shaped('4x modern_industrialization:ostrum_drill', [
        'SAF',
        'DEA',
        'BCS'
    ], {
        S: 'modern_industrialization:iron_gear',
        A: '#modern_industrialization:fluid_pipes',
        B: 'modern_industrialization:aluminum_cable',
        C: 'modern_industrialization:advanced_pump',
        D: 'modern_industrialization:advanced_motor',
        F: 'modern_industrialization:ostrum_drill_head',
        E: 'modern_industrialization:digital_circuit'
    });

    event.shaped('4x modern_industrialization:calorite_drill', [
        'SAF',
        'DEA',
        'BCS'
    ], {
        S: 'modern_industrialization:iron_gear',
        A: '#modern_industrialization:fluid_pipes',
        B: 'modern_industrialization:annealed_copper_cable',
        C: 'modern_industrialization:large_advanced_pump',
        D: 'modern_industrialization:large_advanced_motor',
        F: 'modern_industrialization:calorite_drill_head',
        E: 'modern_industrialization:processing_unit'
    });

    event.shaped('modern_industrialization:growing_chamber', [
        'SAS',
        'BCB',
        'SDS'
    ], {
        S: 'modern_industrialization:manasteel_casing',
        A: 'modern_industrialization:stainless_steel_rotor',
        B: 'modern_industrialization:digital_circuit',
        C: 'botania:mana_pylon',
        D: 'botania:mana_pool'
    });

    event.shaped('modern_industrialization:spatial_forge', [
        'SAS',
        'BCB',
        'SAS'
    ], {
        S: 'modern_industrialization:quantum_circuit',
        A: 'modern_industrialization:unobtanium_casing',
        B: 'modern_industrialization:fusion_chamber',
        C: 'computercraft:computer_advanced'
    });

    event.shaped('modern_industrialization:manasteel_casing', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'modern_industrialization:manasteel_plate',
        A: 'modern_industrialization:manasteel_gear'
    });

    event.shaped('modern_industrialization:compactium_casing', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'modern_industrialization:compactium_plate',
        A: 'modern_industrialization:compactium_gear'
    });

    event.shaped('modern_industrialization:unobtanium_casing', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'modern_industrialization:unobtanium_plate',
        A: 'modern_industrialization:unobtanium_gear'
    });

    event.remove({ id: 'modern_industrialization:electric_age/battery/lv_battery_asbl' })
    event.shaped('modern_industrialization:redstone_battery', [
        'EDE',
        'SAS',
        'SAS'
    ], {
        S: 'modern_industrialization:battery_alloy_curved_plate',
        A: 'modern_industrialization:redstone_alloy_dust',
        E: 'modern_industrialization:tin_cable',
        D: 'modern_industrialization:battery_alloy_plate'
    });

    event.shaped('modern_industrialization:photolithographer', [
        'SAS',
        'CFC',
        'SBS'
    ], {
        S: 'modern_industrialization:titanium_large_plate',
        A: 'modern_industrialization:large_advanced_motor',
        C: 'ae2:quartz_vibrant_glass',
        F: 'modern_industrialization:highly_advanced_machine_hull',
        B: 'ae2:inscriber'
    });

    // Steel Fluid Extractor
    event.shaped('modern_industrialization:steel_fluid_extractor', [
        'GPG',
        'FCF',
        'GTG'
    ], {
        G: 'modern_industrialization:steel_gear',
        F: 'neepmeat:fluid_pipe',
        C: 'modern_industrialization:steel_machine_casing',
        P: 'modern_industrialization:pump',
        T: 'modern_industrialization:steel_tank'
    });

    // Electric Fluid Extractor
    event.shaped('modern_industrialization:electric_fluid_extractor', [
        'PpP',
        'cCc',
        'ATA'
    ], {
        P: 'modern_industrialization:piston',
        p: 'modern_industrialization:pump',
        c: 'modern_industrialization:tin_curved_plate',
        C: 'modern_industrialization:basic_machine_hull',
        T: 'modern_industrialization:tin_cable',
        A: 'modern_industrialization:analog_circuit'
    });

    // Thermal Centrifuge
    event.shaped('modern_industrialization:thermal_centrifuge', [
        'EDE',
        'CHC',
        'MPM'
    ], {
        E: 'modern_industrialization:electrum_cable',
        D: 'modern_industrialization:digital_circuit',
        C: 'modern_industrialization:cupronickel_coil',
        H: 'modern_industrialization:turbo_machine_hull',
        P: 'modern_industrialization:large_pump',
        M: 'modern_industrialization:large_motor',
    });

    // Ore Washing Plant
    // event.shaped('modern_industrialization:ore_washing_plant', [
    //     'EDE',
    //     'THT',
    //     'MPM'
    // ], {
    //     E: 'modern_industrialization:electrum_cable',
    //     D: 'modern_industrialization:digital_circuit',
    //     T: 'modern_industrialization:steel_tank',
    //     P: 'modern_industrialization:large_pump',
    //     M: 'modern_industrialization:large_motor',
    //     H: 'modern_industrialization:turbo_machine_hull',
    // });

    // Bottler
    event.shaped('modern_industrialization:bottler', [
        'CPC',
        'CHC',
        'CTC'
    ], {
        P: 'modern_industrialization:pump',
        C: 'modern_industrialization:tin_curved_plate',
        H: 'modern_industrialization:basic_machine_hull',
        T: 'modern_industrialization:tin_cable',
    });

    // Sifting Machine
    event.shaped('modern_industrialization:sifting_machine', [
        'EDE',
        'RHR',
        'MPM'
    ], {
        E: 'modern_industrialization:electrum_cable',
        D: 'modern_industrialization:digital_circuit',
        P: 'modern_industrialization:large_pump',
        M: 'modern_industrialization:large_motor',
        H: 'modern_industrialization:turbo_machine_hull',
        R: 'modern_industrialization:stainless_steel_rotor'
    });

    // Industrial Apiary
    event.shaped('modern_industrialization:industrial_apiary', [
        'PDP',
        'IHI',
        'PBP'
    ], {
        D: 'modern_industrialization:digital_circuit',
        H: 'modern_industrialization:basic_machine_hull',
        P: 'modern_industrialization:stainless_steel_plate',
        I: 'kubejs:impregnated_sheathing',
        B: 'minecraft:beehive',
    });

    // Void Pump
    event.shaped('modern_industrialization:void_pump', [
        'YRY',
        'PEP',
        'YDY'
    ], {
        Y: 'modern_industrialization:yttrium_plate',
        E: 'modern_industrialization:electric_water_pump',
        R: 'modern_industrialization:titanium_rotor',
        P: 'modern_industrialization:advanced_pump',
        D: 'modern_industrialization:ostrum_drill',
    });

    // Space Miner
    event.shaped('modern_industrialization:space_miner', [
        'CUC',
        'DQD',
        'CdC'
    ], {
        C: 'modern_industrialization:space_casing',
        U: 'ae2:crafting_accelerator',
        D: 'modern_industrialization:digital_circuit',
        Q: 'modern_industrialization:electric_quarry',
        d: 'computercraft:disk_drive',
    });

    // Pyrolyse Chamber
    event.shaped('modern_industrialization:pyrolyse_chamber', [
        'CPC',
        'TFT',
        'CPC'
    ], {
        P: 'modern_industrialization:pump',
        C: 'modern_industrialization:steel_machine_casing',
        F: 'neepmeat:fluid_pipe',
        T: 'modern_industrialization:steel_tank',
    });

    // Large Apiary
    event.shaped('modern_industrialization:large_apiary', [
        'BHB',
        'IDI',
        'BAB'
    ], {
        B: 'the_bumblezone:beehive_beeswax',
        H: 'modern_industrialization:large_heat_exchanger',
        I: 'kubejs:impregnated_sheathing',
        D: 'modern_industrialization:digital_circuit',
        A: 'modern_industrialization:industrial_apiary',
    });

    // Soil Analyzer
    event.shaped('modern_industrialization:soil_analyzer', [
        'CPC',
        'MDM',
        'CLC'
    ], {
        D: 'modern_industrialization:digital_circuit',
        C: 'modern_industrialization:clean_stainless_steel_machine_casing',
        M: '2x ae2:1k_crafting_storage',
        L: 'ae2:logic_processor',
        P: 'ae2:calculation_processor',
    });

    // Void Distillation Machine
    event.shaped('modern_industrialization:void_distillation_machine', [
        'FYF',
        'YPY',
        'FDF'
    ], {
        F: 'modern_industrialization:frostproof_machine_casing',
        Y: 'modern_industrialization:yttrium_plate',
        P: 'modern_industrialization:large_pump',
        D: 'modern_industrialization:distillation_tower',
    });

    // Satellite
    event.shaped('modern_industrialization:satellite', [
        'MCM',
        'LPL',
        'MSM'
    ], {
        M: 'ae2:controller',
        C: 'computercraft:computer_normal',
        L: 'modern_industrialization:hsla_steel_large_plate',
        P: 'kubejs:photonic_circuit',
        S: 'modern_industrialization:space_casing',
    });

    // Blast Alloy Smelter
    event.shaped('modern_industrialization:blast_alloy_smelter', [
        'HEH',
        'CTC',
        'HBH'
    ], {
        H: 'modern_industrialization:heatproof_machine_casing',
        E: 'modern_industrialization:electronic_circuit',
        C: 'modern_industrialization:kanthal_coil',
        T: 'modern_industrialization:steel_tank',
        B: 'alloy_forgery:bricks_forge_controller',
    });
    const enhancement_for_drills = [
        'azurite_plated',
        'malachite_enhanced',
    ]
    enhancement_for_drills.forEach(element => {
        event.shaped(`4x kubejs:${element}_aluminum_drill`, [
            'GFH',
            'PCF',
            'EPG'
        ], {
                G: 'modern_industrialization:iron_gear',
                F: '#modern_industrialization:fluid_pipes',
                H: `kubejs:${element}_aluminum_drill_head`,
                P: 'modern_industrialization:pump',
                E: 'modern_industrialization:electrum_cable',
                C: 'modern_industrialization:electronic_circuit',
            });
        event.shaped(`4x kubejs:${element}_bronze_drill`, [
            '  H',
            'GP ',
            'FG '
        ], {
                G: 'modern_industrialization:iron_gear',
                F: 'neepmeat:fluid_pipe',
                H: `kubejs:${element}_bronze_drill_head`,
                P: 'neepmeat:item_pipe',
            });
        event.shaped(`4x kubejs:${element}_copper_drill`, [
            '  H',
            'GP ',
            'FG '
        ], {
                G: 'modern_industrialization:iron_gear',
                F: 'neepmeat:fluid_pipe',
                H: `kubejs:${element}_copper_drill_head`,
                P: 'neepmeat:item_pipe',
            });
        event.shaped(`4x kubejs:${element}_titanium_drill`, [
            'GFH',
            'PEF',
            'CPG'
        ], {
                G: 'modern_industrialization:iron_gear',
                F: '#modern_industrialization:item_pipes',
                H: `kubejs:${element}_titanium_drill_head`,
                P: 'modern_industrialization:large_advanced_motor',
                C: 'modern_industrialization:annealed_copper_cable',
                E: 'modern_industrialization:processing_unit',
            });
        event.shaped(`4x kubejs:${element}_steel_drill`, [
            'GFH',
            'PEF',
            'CPG'
        ], {
                G: 'modern_industrialization:iron_gear',
                F: 'neepmeat:item_pipe',
                H: `kubejs:${element}_steel_drill_head`,
                P: 'modern_industrialization:motor',
                C: 'modern_industrialization:tin_cable',
                E: 'modern_industrialization:analog_circuit',
            });
        event.shaped(`4x kubejs:${element}_gold_drill`, [
            'GFH',
            'PEF',
            'CPG'
        ], {
                G: 'modern_industrialization:iron_gear',
                F: 'neepmeat:item_pipe',
                H: `kubejs:${element}_gold_drill_head`,
                P: 'modern_industrialization:motor',
                C: 'modern_industrialization:tin_cable',
                E: 'modern_industrialization:analog_circuit',
            });
        event.shaped(`4x kubejs:${element}_stainless_steel_drill`, [
            'GIH',
            'MEF',
            'CPG'
        ], {
                G: 'modern_industrialization:iron_gear',
                F: '#modern_industrialization:fluid_pipes',
                I: '#modern_industrialization:item_pipes',
                H: `kubejs:${element}_stainless_steel_drill_head`,
                M: 'modern_industrialization:advanced_motor',
                P: 'modern_industrialization:advanced_pump',
                C: 'modern_industrialization:aluminum_cable',
                E: 'modern_industrialization:digital_circuit',
            });
        event.shaped(`4x kubejs:${element}_desh_drill`, [
            'SDF',
            'CBD',
            'AES'
        ], {
            S: 'modern_industrialization:iron_gear',
            A: 'modern_industrialization:electrum_cable',
            B: 'modern_industrialization:electronic_circuit',
            C: 'modern_industrialization:motor',
            D: '#modern_industrialization:fluid_pipes',
            F: `kubejs:${element}_desh_drill_head`,
            E: 'modern_industrialization:pump'
        });
        event.shaped(`4x kubejs:${element}_ostrum_drill`, [
            'SAF',
            'DEA',
            'BCS'
        ], {
                S: 'modern_industrialization:iron_gear',
                A: '#modern_industrialization:fluid_pipes',
                B: 'modern_industrialization:aluminum_cable',
                C: 'modern_industrialization:advanced_pump',
                D: 'modern_industrialization:advanced_motor',
                F: `kubejs:${element}_ostrum_drill_head`,
                E: 'modern_industrialization:digital_circuit'
            });
        event.shaped(`4x kubejs:${element}_calorite_drill`, [
            'SAF',
            'DEA',
            'BCS'
        ], {
            S: 'modern_industrialization:iron_gear',
            A: '#modern_industrialization:fluid_pipes',
            B: 'modern_industrialization:annealed_copper_cable',
            C: 'modern_industrialization:large_advanced_pump',
            D: 'modern_industrialization:large_advanced_motor',
            F: `kubejs:${element}_calorite_drill_head`,
            E: 'modern_industrialization:processing_unit'
        });

    });

    event.shaped('modern_industrialization:compactium_battery', [
        'APA',
        'CDC',
        'CDC'
    ], {
            A: 'modern_industrialization:annealed_copper_cable',
            P: 'modern_industrialization:battery_alloy_plate',
            C: 'modern_industrialization:battery_alloy_curved_plate',
            D: 'modern_industrialization:compactium_dust',
        });

    event.shaped('modern_industrialization:electric_cooking_pot', [
        'ADA',
        'PEP',
        'ACA'
    ], {
            A: 'modern_industrialization:robot_arm',
            P: 'modern_industrialization:conveyor',
            C: 'modern_industrialization:analog_circuit',
            D: 'farmersdelight:cooking_pot',
            E: 'modern_industrialization:basic_machine_hull',
        });

    event.shaped('modern_industrialization:electric_greenhouse', [
        'APA',
        'GCD',
        'FEF'
    ], {
            A: 'minecraft:glass',
            P: 'yttr:lamp',
            C: 'farmersdelight:rich_soil',
            D: 'modern_industrialization:motor',
            E: 'modern_industrialization:basic_machine_hull',
            F: 'modern_industrialization:electronic_circuit',
            G: 'modern_industrialization:aluminum_rotor',
        });

    event.shaped('modern_industrialization:sea_farm', [
        'AAA',
        'GCD',
        'FEF'
    ], {
            A: 'minecraft:glass',
            C: 'minecraft:dried_kelp_block',
            D: 'modern_industrialization:motor',
            E: 'modern_industrialization:basic_machine_hull',
            F: 'modern_industrialization:electronic_circuit',
            G: 'modern_industrialization:aluminum_rotor',
        });
    crafting_table_botania_flower_generators.forEach(element => {
        add_flower_generator_crafting_table_recipe(event, element)
    });

    event.shaped('modern_industrialization:terra_plate_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:terra_plate",
        }
    );

    event.shaped('modern_industrialization:apothecary_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:apothecary_default",
        }
    );

    event.shaped('modern_industrialization:runic_altar_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:runic_altar",
        }
    );

    event.shaped('modern_industrialization:pure_daisy_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:floating_pure_daisy",
        }
    );

    event.shaped('modern_industrialization:mana_pool_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:mana_pool",
        }
    );

    event.shaped('modern_industrialization:elven_gateway_chamber', [
        'CSC',
        'PIP',
        'CSC'
    ], {
            C: "modern_industrialization:manasteel_casing",
            S: "modern_industrialization:clean_stainless_steel_machine_casing",
            P: "modern_industrialization:digital_circuit",
            I: "botania:natura_pylon",
        }
    );

    event.shaped('bwplus:rgb_witch_wool', [
        'WWW',
        'WWW',
        'WWW'
    ], {
            W: "#minecraft:wool",
        }
    );
})
