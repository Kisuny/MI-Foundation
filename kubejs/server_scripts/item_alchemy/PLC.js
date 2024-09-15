
ServerEvents.recipes(event => {
    // EMC Collector MK-1
    event.remove({id: 'itemalchemy:emc_collector_mk1'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:neutron_collector'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:chromatically_stable_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:zirconium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:barium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'minecraft:glowstone'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_collector_mk1',
            "amount": 1
        }
    });
    // EMC Collector MK-2
    event.remove({id: 'itemalchemy:emc_collector_mk2'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:emc_collector_mk1'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:cell_component_4m'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutronium_ingot'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_collector_mk2',
            "amount": 1
        }
    });
    // EMC Collector MK-3
    event.remove({id: 'itemalchemy:emc_collector_mk3'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:emc_collector_mk2'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:cell_component_16m'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutronium_ingot'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_collector_mk3',
            "amount": 1
        }
    });
    // EMC Collector MK-4
    event.remove({id: 'itemalchemy:emc_collector_mk4'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:emc_collector_mk3'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:cell_component_64m'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:ytterbium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:californium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutronium_ingot'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_collector_mk4',
            "amount": 1
        }
    });
    // EMC Collector MK-5
    event.remove({id: 'itemalchemy:emc_collector_mk5'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:emc_collector_mk4'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'megacells:cell_component_256m'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:rutherfordium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:oganesson'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'fluxnetworks:flux_core'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutronium_ingot'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_collector_mk5',
            "amount": 1
        }
    });
    // EMC Repeater
    event.remove({id: 'itemalchemy:emc_repeater'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:quantum_ring'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:copper'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:gold'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:xenon'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:iridium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'minecraft:glowstone'
            }

        ],
        "result": {
            "resource": 'itemalchemy:emc_repeater',
            "amount": 4
        }
    });
    // EMC Condenser
    event.remove({id: 'itemalchemy:emc_condenser'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'modern_industrialization:neutronium_compressor'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:chromatically_stable_circuit'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:boron'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:tin'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
        ],
        "result": {
            "resource": 'itemalchemy:emc_condenser',
            "amount": 1
        }
    });
    // AEGU
    event.remove({id: 'itemalchemy:aegu'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:emc_collector_mk3'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:mercury'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:radon'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'chemlib:holmium'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:neutronium_ingot'
            },
        ],
        "result": {
            "resource": 'itemalchemy:aegu',
            "amount": 1
        }
    });
    // Advanced AEGU
    event.remove({id: 'itemalchemy:advanced_aegu'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:aegu'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:dark_matter'
            },
        ],
        "result": {
            "resource": 'itemalchemy:advanced_aegu',
            "amount": 1
        }
    });
    // Ultimate AEGU
    event.remove({id: 'itemalchemy:ultimate_aegu'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'itemalchemy:advanced_aegu'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'itemalchemy:red_matter'
            },
        ],
        "result": {
            "resource": 'itemalchemy:ultimate_aegu',
            "amount": 1
        }
    });
    // Red Matter
    event.remove({id: 'itemalchemy:red_matter'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:matter_ball'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:carmot_singularity'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:redstone_singularity'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:titanium_singularity'
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'itemalchemy:red_matter',
            "amount": 16
        }
    });
    // Dark Matter
    event.remove({id: 'itemalchemy:dark_matter'})
    event.recipes.neepmeat.manufacture({
        "base": {
            "id": 'ae2:matter_ball'
        },
        "steps":[
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:lead_singularity'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:tungsten_singularity'
            },
            {
                "id": "neepmeat:combine",
                "resource": 'kubejs:quadrillum_singularity'
            },
            {
                "id": "neepmeat:inject",
                "resource": "modern_industrialization:void"
            }

        ],
        "result": {
            "resource": 'itemalchemy:dark_matter',
            "amount": 16
        }
    });
})