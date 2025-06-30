
ServerEvents.recipes(event => {  
    // Flux Configurator
    event.remove({id: 'fluxnetworks:flux_configurator'})
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'ae2:network_tool',
          "amount": 1
        },
        "data": 6144,
        "output": {
          "resource": 'fluxnetworks:flux_configurator',
          "amount": 1
        }
    });
    // Item Output Port
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'modern_industrialization:bronze_item_output_hatch',
          "amount": 1
        },
        "data": 1000,
        "output": {
          "resource": 'neepmeat:item_output_port',
          "amount": 1
        }
    });
    // Fluid Output Port
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'modern_industrialization:bronze_fluid_output_hatch',
          "amount": 1
        },
        "data": 1000,
        "output": {
          "resource": 'neepmeat:fluid_output_port',
          "amount": 1
        }
    });
    // Fluid Input Port
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'modern_industrialization:bronze_fluid_input_hatch',
          "amount": 1
        },
        "data": 1000,
        "output": {
          "resource": 'neepmeat:fluid_input_port',
          "amount": 1
        }
    });
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'modern_industrialization:electric_unpacker',
          "amount": 1
        },
        "data": 1000,
        "output": {
          "resource": 'neepmeat:upgrade_manager',
          "amount": 1
        }
    });
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'computercraft:monitor_normal',
          "amount": 1
        },
        "data": 500,
        "output": {
          "resource": 'neepmeat:television_off',
          "amount": 1
        }
    });

    // Dosimeter
    event.recipes.neepmeat.enlightening({
        "item_input": {
          "resource": 'scannable:scanner',
          "amount": 1
        },
        "data": 4000,
        "output": {
          "resource": 'neepmeat:dosimeter',
          "amount": 1
        }
    });
})
