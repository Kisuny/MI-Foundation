const drills = [
    'aluminum',
    'bronze',
    'copper',
    'gold',
    'stainless_steel',
    'steel',
    'titanium',
    'desh',
    'ostrum',
    'calorite',
]

const to_magic_entity_PLC = [
    {
        mob: 'minecraft:squid',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:osmium_tiny_dust',
            'kubejs:octiron_shards'
        ],
        output: 'spectrum:refined_azurite',
        amount: 12
    },
    {
        mob: 'minecraft:glow_squid',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:steel_tiny_dust',
            'kubejs:octiron_shards'
        ],
        output: 'botania:manasteel_ingot',
        amount: 12
    },
    {
        mob: 'minecraft:dolphin',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:aquarium_tiny_dust',
            'botania:mana_powder',
            'botania:livingrock',
            'kubejs:octiron_shards'
        ],
        output: 'botania:rune_water',
        amount: 3
    },
    {
        mob: 'minecraft:magma_cube',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:banglum_tiny_dust',
            'botania:mana_powder',
            'botania:livingrock',
            'kubejs:octiron_shards'
        ],
        output: 'botania:rune_fire',
        amount: 3
    },
    {
        mob: 'minecraft:slime',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:beryllium_tiny_dust',
            'botania:mana_powder',
            'botania:livingrock',
            'kubejs:octiron_shards'
        ],
        output: 'botania:rune_earth',
        amount: 3
    },
    {
        mob: 'minecraft:phantom',
        steps: [
            'spectrum:quitoxic_powder',
            'modern_industrialization:calcium_metasilicate_tiny_dust',
            'botania:mana_powder',
            'botania:livingrock',
            'kubejs:octiron_shards'
        ],
        output: 'botania:rune_air',
        amount: 3
    },
    {
        mob: 'minecraft:evoker',
        steps: [
            'spectrum:quitoxic_powder',
            'spectrum:moonstone_powder',
            'botania:mana_powder',
            'botania:livingrock',
            'kubejs:octiron_shards'
        ],
        output: 'botania:rune_mana',
        amount: 2
    },
]

const bee_modifications = [
    {id: 'nullodermal_affected',reagents: ['botania:virus_nullodermal','modern_industrialization:iridium_tiny_dust']},
    {id: 'necrodermal_affected',reagents: ['botania:virus_necrodermal','modern_industrialization:beryllium_tiny_dust']}
]

ServerEvents.recipes(event => {
    to_magic_entity_PLC.forEach(craft => {
        event.recipes.neepmeat.entity_to_item({
            "base": { "id": craft.mob },
            "steps": craft.steps.map(step => ({ "id": "neepmeat:implant", "resource": step })),
            "result": {
                "resource": craft.output,
                "amount": craft.amount
            }
        });
    })
    // Large Heat Exchanger
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:small_heat_exchanger'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:large_advanced_pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:aluminum_rotor'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:invar_gear'
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:work_fluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:large_heat_exchanger',
            "amount": 1
        }
    });

    // Small Heat Exchanger
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:stainless_steel_large_plate'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:invar_plate'
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:work_fluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:small_heat_exchanger',
            "amount": 1
        }
    });

    // Cooling Cell
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:tin_large_plate'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:small_heat_exchanger'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:fluid_pipe'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:fluid_pipe'
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:cryofluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:cooling_cell',
            "amount": 1
        }
    });

    // Fusion Chamber
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:plasma_handling_iridium_machine_casing'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:superconductor_coil'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:nuclear_alloy_large_plate'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:large_heat_exchanger'
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:charged_work_fluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:fusion_chamber',
            "amount": 1
        }
    });

    // Turbinium Turbine
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:large_steam_turbine'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:turbinium_large_plate'
            },
            {
                "id": "neepmeat:combine",
                "resource": "kubejs:photonic_circuit"
            },
            {
                "id": "neepmeat:combine",
                "resource": "fluxnetworks:flux_core"
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:turbinium_large_plate'
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:charged_work_fluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:turbinium_steam_turbine',
            "amount": 1
        }
    });

    // Fusion Construct
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:fusion_reactor'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:spatial_cell_component_128'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:tellurium'
            },
            {
                "id": "neepmeat:combine",
                "resource": "kubejs:neutron_capturing_mesh"
            },
            {
                "id": "neepmeat:combine",
                "resource": "chemlib:strontium"
            },
            {
                "id": "neepmeat:combine",
                "resource": "fluxnetworks:flux_core"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:purified_void"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:fusion_construct',
            "amount": 1
        }
    });

    // Well Head
    event.remove({id: 'neepmeat:machines/well_head'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:router'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'neepmeat:meat_steel_component'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": "neepmeat:fluid_buffer"
            },
            {
                "id": "neepmeat:combine",
                "resource": "neepmeat:meat_steel_component"
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:work_fluid"
            }

        ],
        "result": {
            "resource": 'neepmeat:well_head',
            "amount": 1
        }
    });

    // Large Compressor
    event.remove({id: 'neepmeat:machines/living_machine/large_compressor'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:pressurizer'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'neepmeat:meat_steel_component'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:titanium_tank'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:titanium_tank"
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:implosion_compressor"
            },
            {
                "id": "neepmeat:combine",
                "resource": "neepmeat:meat_steel_component"
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:work_fluid"
            }

        ],
        "result": {
            "resource": 'neepmeat:large_compressor',
            "amount": 1
        }
    });

    // Flux Plug
    event.remove({id: 'fluxnetworks:flux_plug'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:import_bus'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:equal_distribution_card'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:iridium_curved_plate"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:flux_plug',
            "amount": 1
        }
    });
    // Flux Point
    event.remove({id: 'fluxnetworks:flux_point'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:export_bus'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:equal_distribution_card'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:iridium_curved_plate"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:flux_point',
            "amount": 1
        }
    });





    // Gargantuan Flux Storage
    event.remove({id: 'fluxnetworks:gargantuan_flux_storage'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'fluxnetworks:herculean_flux_storage'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:energy_card'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:bulk_cell_component'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:iridium_curved_plate"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:gargantuan_flux_storage',
            "amount": 1
        }
    });
    // Herculean Flux Storage
    event.remove({id: 'fluxnetworks:herculean_flux_storage'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'fluxnetworks:basic_flux_storage'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:energy_card'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:cell_component_1m'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:iridium_curved_plate"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:herculean_flux_storage',
            "amount": 1
        }
    });
    // Basic Flux Storage
    event.remove({id: 'fluxnetworks:basic_flux_storage'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:energy_acceptor'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:energy_card'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:cell_component_64k'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": "modern_industrialization:iridium_curved_plate"
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:basic_flux_storage',
            "amount": 1
        }
    });
    // Flux Controller
    event.remove({id: 'fluxnetworks:flux_controller'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:controller'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:photonic_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:wireless_receiver'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:iridium_curved_plate'
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'fluxnetworks:flux_controller',
            "amount": 1
        }
    });
    // Drone Station
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:space_miner'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:spatial_cell_component_2'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:controller'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:photonic_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'ae2:wireless_receiver'
            },
            {
                "id": "neepmeat:inject",
                "resource": "neepmeat:charged_work_fluid"
            }

        ],
        "result": {
            "resource": 'modern_industrialization:drone_station',
            "amount": 1
        }
    });
    // Shock Absorber
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ad_astra:space_boots'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:bioelectric_organ'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:piston'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:meat_steel_curved_plate'
          }
        ],
        "result": {
          "resource": 'things:shock_absorber',
          "amount": 1
        }
    });
    // Arm Extender
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:robot_arm'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:contractile_actuator'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:piston'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:meat_steel_curved_plate'
          },
        ],
        "result": {
          "resource": 'things:arm_extender',
          "amount": 1
        }
    });
    // Placebo
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:wax'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:flesh_potato'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:sugar_solution"
          }
        ],
        "result": {
          "resource": 'things:placebo',
          "amount": 1
        }
    });
    // Fission chamber
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:electric_macerator'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:quantum_machine_hull'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:pylon'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:nuclear_alloy_large_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_heat_exchanger'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:purified_void"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:fission_chamber',
          "amount": 1
        }
    });
    // Particle Manipulator
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:molecular_assembler'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:quantum_machine_hull'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:controller'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:robotic_arm'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:quantum_link'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:purified_void"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:particle_manipulator',
          "amount": 1
        }
    });
    // Mining Drone
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ad_astra:calorite_engine'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_heat_exchanger'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:photonic_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:advanced_motor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:titanium_drill'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:hsla_steel_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:purified_void"
          }
        ],
        "result": {
          "resource": 'kubejs:mining_drone',
          "amount": 1
        }
    });

    drills.forEach(drill => {
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": `modern_industrialization:${drill}_drill_head`
            },
            "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutron_nugget'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:technetium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:palladium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:le_mox_fuel_rod_depleted'
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:tritium"
            }
            ],
            "result": {
            "resource": `kubejs:neutronium_augmented_${drill}_drill_head`,
            "amount": 1
            }
        });
    });
    // Electronic circuit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:electronic_circuit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:analog_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:diode'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:transistor'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:electronic_circuit',
          "amount": 1
        }
    });

    // Digital circuit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:digital_circuit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:electronic_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:and_gate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:or_gate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:not_gate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:digital_circuit',
          "amount": 1
        }
    });

    // Processing unit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:processing_unit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:digital_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:random_access_memory'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:arithmetic_logic_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:memory_management_unit'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:processing_unit',
          "amount": 1
        }
    });

    // Photonic circuit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'kubejs:photonic_circuit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:processing_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:photoelectric_cell'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:logic_processor'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'kubejs:photonic_circuit',
          "amount": 1
        }
    });

    // Quantum Circuit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:quantum_circuit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:photonic_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:qbit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:cooling_cell'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'modern_industrialization:quantum_circuit',
          "amount": 1
        }
    });

    // 4k ME storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:cell_component_1k'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:desh_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:cell_component_1k'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ae2:cell_component_4k',
          "amount": 1
        }
    });

    // 16k ME storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:cell_component_4k'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:desh_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:cell_component_4k'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ae2:cell_component_16k',
          "amount": 1
        }
    });

    // 64k ME storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:cell_component_16k'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:ostrum_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:cell_component_16k'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ae2:cell_component_64k',
          "amount": 1
        }
    });

    // 256k ME storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:cell_component_64k'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:calorite_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:cell_component_64k'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ae2:cell_component_256k',
          "amount": 1
        }
    });

    // 1M Mega storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:cell_component_256k'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:cell_component_256k'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'megacells:cell_component_1m',
          "amount": 1
        }
    });

    // 4M Mega storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'megacells:cell_component_1m'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'megacells:cell_component_1m'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'megacells:cell_component_4m',
          "amount": 1
        }
    });
    // 16M Mega storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'megacells:cell_component_4m'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'megacells:cell_component_4m'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'megacells:cell_component_16m',
          "amount": 1
        }
    });
    // 64M Mega storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'megacells:cell_component_16m'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'megacells:cell_component_16m'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'megacells:cell_component_64m',
          "amount": 1
        }
    });
    // 256M Mega storage component
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'megacells:cell_component_64m'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'megacells:cell_component_64m'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:calculation_processor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'megacells:cell_component_256m',
          "amount": 1
        }
    });

    // Desh engine
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ad_astra:steel_engine'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:advanced_pump'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:cooling_cell'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:digital_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:desh_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ad_astra:desh_engine',
          "amount": 1
        }
    });

    // Ostrum engine
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ad_astra:desh_engine'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_advanced_pump'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:cooling_cell'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:processing_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:ostrum_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'ad_astra:ostrum_engine',
          "amount": 1
        }
    });

    // Damaged budding certus quartz
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:quartz_block'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:charged_certus_quartz_crystal'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_tiny_dust'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:hydrogen_peroxide"
          }
        ],
        "result": {
          "resource": 'ae2:damaged_budding_quartz',
          "amount": 1
        }
    });

    // Chipped budding certus quartz
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:damaged_budding_quartz'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:charged_certus_quartz_crystal'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_tiny_dust'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:hydrogen_peroxide"
          }
        ],
        "result": {
          "resource": 'ae2:chipped_budding_quartz',
          "amount": 1
        }
    });

    // Flawed budding certus quartz
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:chipped_budding_quartz'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:charged_certus_quartz_crystal'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:beryllium_tiny_dust'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:hydrogen_peroxide"
          }
        ],
        "result": {
          "resource": 'ae2:flawed_budding_quartz',
          "amount": 1
        }
    });;

    // PLC Robotic Arm
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:robot_arm'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:control_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:contractile_actuator'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:contractile_actuator'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'neepmeat:robotic_arm',
          "amount": 1
        }
    });

    // Vascular conduit
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:fluix_glass_cable'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:yttrium_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'neepmeat:vascular_conduit',
          "amount": 6
        }
    });

    // Airtruck
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ad_astra:tier_1_rover'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:bronze_tank'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:steel_engine'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:steel_engine'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:steel_engine'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ad_astra:steel_engine'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'meatweapons:airtruck',
          "amount": 1
        }
    });
    event.replaceInput({type: 'neepmeat:manufacture'}, {input: 'minecraft:iron_block'}, 'modern_industrialization:advanced_machine_hull');

    // Tool Organism
    event.remove({id: 'neepmeat:tools/living_tool_implant'});
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'majruszsaccessories:tool_scraps'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:control_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:internal_components'
          },
        ],
        "result": {
          "resource": 'neepmeat:living_tool_implant',
          "amount": 1
        }
    });

    // Hungry Heterostructure
    event.remove({id: 'neepmeat:ingredients/hungry_heterostructure'});
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:extra_mouth'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:meat_steel_large_plate'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_heat_exchanger'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:meat_steel_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'neepmeat:hungry_heterostructure',
          "amount": 1
        }
    });

    // Phage Ray
    event.remove({output: 'neapmeat:assault_drill'});
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:skin_machine_block'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:integrator_egg'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:he_mox_fuel_rod_quad'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:divine_organ'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:hungry_heterostructure'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:focal_lens'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          }
        ],
        "result": {
          "resource": 'neepmeat:phage_ray',
          "amount": 1
        }
    });

    // Assault Drill
    event.remove({output: 'neapmeat:assault_drill'});
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:steam_mining_drill'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          }
        ],
        "result": {
          "resource": 'meatweapons:assault_drill',
          "amount": 1
        }
    });

    // Pylon
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:dense_energy_cell'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:control_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_advanced_motor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:he_mox_fuel_rod_quad'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:ultradense_metal_ball'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          },
        ],
        "result": {
          "resource": 'neepmeat:pylon',
          "amount": 1
        }
    });

    // Surgery Platform
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:advanced_machine_hull'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:internal_components'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:control_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:work_fluid"
          },
        ],
        "result": {
          "resource": 'neepmeat:surgery_platform',
          "amount": 1
        }
    });

    // Neutron Capturing mesh
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:hsla_steel_large_plate'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'chemlib:molybdenum'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'chemlib:molybdenum'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'chemlib:lithium'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'chemlib:lithium'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          },
        ],
        "result": {
          "resource": 'kubejs:neutron_capturing_mesh',
          "amount": 1
        }
    });

    // Molecular Deconstructor
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:nuclear_alloy_machine_casing_pipe'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:divine_organ'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:photonic_circuit'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:singularity'
          },
          {
            "id": "neepmeat:inject",
            "resource": "modern_industrialization:purified_void"
          },
        ],
        "result": {
          "resource": 'modern_industrialization:molecular_deconstructor',
          "amount": 1
        }
    });

    // Morkite Enricher
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:electric_mixer'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:internal_components'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:chromatically_stable_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_wire'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:terrasteel_fine_wire'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:adamantite_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": "neepmeat:charged_work_fluid"
          },
        ],
        "result": {
          "resource": 'modern_industrialization:morkite_enricher',
          "amount": 1
        }
    });

    // Bone Crusher
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:electric_macerator'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'botania:rune_wrath'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:chromatically_stable_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'botania:rune_envy'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'spectrum:moonstone_core'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:adamantite_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'modern_industrialization:liquid_mana'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:dragonbone_crusher',
          "amount": 1
        }
    });

    // Quantum Upgrade
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:quantum_circuit_board'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:quantum_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:singularity'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:quantum_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:enlightened_brain'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:charged_work_fluid'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:quantum_upgrade',
          "amount": 1
        }
    });
    // MV Steam Turbine
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:lv_steam_turbine'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:electronic_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:large_motor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:aluminum_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:work_fluid'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:mv_steam_turbine',
          "amount": 1
        }
    });
    // MV Steam Turbine
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:mv_steam_turbine'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:digital_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:advanced_motor'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:stainless_steel_large_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:work_fluid'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:hv_steam_turbine',
          "amount": 1
        }
    });
    // Basic Chunk Loader
    event.remove({ id: 'chunkloaders:ultimate_chunk_loader' })
    event.remove({ id: 'chunkloaders:advanced_chunk_loader' })
    event.remove({ id: 'chunkloaders:basic_chunk_loader' })
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'botania:corporea_index'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:divine_organ'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'kubejs:chromatically_stable_circuit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:singularity'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:unobtanium_ring'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'spectrum:liquid_crystal'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'spectrum:knowledge_gem'
          },
        ],
        "result": {
          "resource": 'chunkloaders:basic_chunk_loader',
          "amount": 1
        }
    });
    // Entangled Block
    event.remove({ id: 'entangled:block' })
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:wireless_receiver'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'ae2:spatial_cell_component_2'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:control_unit'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'neepmeat:meat_steel_component'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:niobium_dust'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:charged_work_fluid'
          },
        ],
        "result": {
          "resource": 'entangled:block',
          "amount": 1
        }
    });

    // Caterium Transistor
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:silicon_n_doped_plate'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:caterium_fine_wire'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:tantalum_tiny_dust'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_p_doped_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:work_fluid'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:transistor',
          "amount": 16
        }
    });
    
    // Transistor
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:silicon_n_doped_plate'
        },
        "steps":[
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:electrum_fine_wire'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:tantalum_tiny_dust'
          },
          {
            "id": "neepmeat:combine",
            "resource": 'modern_industrialization:silicon_p_doped_plate'
          },
          {
            "id": "neepmeat:inject",
            "resource": 'neepmeat:work_fluid'
          },
        ],
        "result": {
          "resource": 'modern_industrialization:transistor',
          "amount": 12
        }
    });

    // Bronze
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:bronze_drill_head'
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": 'modern_industrialization:bronze_drill',
            "amount": 6
        }
    });
    // Copper
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:copper_drill_head'
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": 'modern_industrialization:copper_drill',
            "amount": 6
        }
    });
    // Aluminum
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:electronic_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:aluminum_drill_head'
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": 'modern_industrialization:aluminum_drill',
            "amount": 6
        }
    });
    // Desh
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:electronic_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:desh_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:desh_drill`,
            "amount": 6
        }
    });
    // Steel
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:analog_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:steel_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:steel_drill`,
            "amount": 6
        }
    });
    // Gold
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:analog_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:gold_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:gold_drill`,
            "amount": 6
        }
    });
    // Stainless Steel
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:digital_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:stainless_steel_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:charged_work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:stainless_steel_drill`,
            "amount": 6
        }
    });
    // Ostrum
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:digital_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:advanced_pump'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:ostrum_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:ostrum_drill`,
            "amount": 6
        }
    });
    // Titanium
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:processing_unit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:large_advanced_motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:titanium_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:titanium_drill`,
            "amount": 6
        }
    });
    // Calorite
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'neepmeat:meat_steel_component'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:processing_unit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'modern_industrialization:large_advanced_motor'
            },
            {
                "id": "neepmeat:combine",
                "resource": `modern_industrialization:calorite_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
        ],
        "result": {
            "resource": `modern_industrialization:calorite_drill`,
            "amount": 6
        }
    });
    const enhancement_for_drills = [
        {
            id: 'azurite_plated',
            out: 6
        },
        {
            id: 'malachite_enhanced',
            out: 6
        },
        {
            id: 'neutronium_augmented',
            out: 1
        }
    ]
    enhancement_for_drills.forEach(enhancement => {
        // Bronze
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
            {
                "id": "neepmeat:combine",
                "resource": `kubejs:${enhancement.id}_bronze_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
            ],
            "result": {
            "resource": `kubejs:${enhancement.id}_bronze_drill`,
            "amount": enhancement.out
            }
        });
        // Copper
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
            {
                "id": "neepmeat:combine",
                "resource": `kubejs:${enhancement.id}_copper_drill_head`
            },
            {
                "id": "neepmeat:inject",
                "resource": 'neepmeat:work_fluid'
            },
            ],
            "result": {
            "resource": `kubejs:${enhancement.id}_copper_drill`,
            "amount": enhancement.out
            }
        });
        // Aluminum
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:electronic_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:pump'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_aluminum_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_aluminum_drill`,
                "amount": enhancement.out
            }
        });
        // Desh
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:electronic_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:pump'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_desh_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_desh_drill`,
                "amount": enhancement.out
            }
        });
        // Steel
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:analog_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_steel_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_steel_drill`,
                "amount": enhancement.out
            }
        });
        // Gold
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:analog_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_gold_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_gold_drill`,
                "amount": enhancement.out
            }
        });
        // Stainless Steel
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:digital_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:advanced_motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:advanced_pump'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_stainless_steel_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:charged_work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_stainless_steel_drill`,
                "amount": enhancement.out
            }
        });
        // Ostrum
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:digital_circuit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:advanced_motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:advanced_pump'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_ostrum_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_ostrum_drill`,
                "amount": enhancement.out
            }
        });
        // Titanium
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:processing_unit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:large_advanced_motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_titanium_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_titanium_drill`,
                "amount": enhancement.out
            }
        });
        // Calorite
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'neepmeat:meat_steel_component'
            },
            "steps":[
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:processing_unit'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'modern_industrialization:large_advanced_motor'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": `kubejs:${enhancement.id}_calorite_drill_head`
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${enhancement.id}_calorite_drill`,
                "amount": enhancement.out
            }
        });
    });
    bee_modifications.forEach(modification => {
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'kubejs:bee'
            },
            "steps":[
                {
                    "id": "neepmeat:inject",
                    "resource": 'spectrum:liquid_crystal'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": modification.reagents[0]
                },
                {
                    "id": "neepmeat:combine",
                    "resource": modification.reagents[1]
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'spectrum:quitoxic_powder'
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${modification.id}_bee`,
                "amount": 1
            }
        })
        event.recipes.neepmeat.manufacture({
            "base": {
                "id": 'kubejs:beehemoth'
            },
            "steps":[
                {
                    "id": "neepmeat:inject",
                    "resource": 'spectrum:liquid_crystal'
                },
                {
                    "id": "neepmeat:combine",
                    "resource": modification.reagents[0]
                },
                {
                    "id": "neepmeat:combine",
                    "resource": modification.reagents[1]
                },
                {
                    "id": "neepmeat:combine",
                    "resource": 'spectrum:quitoxic_powder'
                },
                {
                    "id": "neepmeat:inject",
                    "resource": 'neepmeat:work_fluid'
                },
            ],
            "result": {
                "resource": `kubejs:${modification.id}_beehemoth`,
                "amount": 1
            }
        })
    })


    



});
