// Here the fabric fluid units are used, for which 1mb = 81u and 1000mb = 81000u
ServerEvents.recipes(event => {
    event.remove({type: 'neepmeat:pressing'});
    const pressing = [
        {
            input: ['neepmeat:work_fluid',9000],
            output: ['neepmeat:integration_charge_crude',1]
        },
        {
            input: ['neepmeat:meat',9000],
            output: ['neepmeat:raw_meat_brick',1]
        },

    ];

    const entity_pressing = [
        {
            id: 'minecraft:cow',
            output: ['milk:still_milk',9000]
        },
        // {
        //     id: 'minecraft:sheep',
        //     output: ['the_bumblezone:honey_fluid_still',9000]
        // },
        // {
        //     id: 'the_bumblezone:bee_queen',
        //     output: ['the_bumblezone:royal_jelly_fluid_still',1000]
        // },

    ];

    entity_pressing.forEach(entity => {
        event.recipes.neepmeat.mob_squeezing({
            'entity': {
                'id': entity.id
            },
            'output': {
                'resource': entity.output[0],
                'amount': entity.output[1]
            }
        });
    });

    pressing.forEach(element => {
        event.recipes.neepmeat.pressing({
            'fluid_input': {
                'resource': element.input[0],
                'amount': element.input[1]
            },
            'output': {
                'resource': element.output[0],
                'amount': element.output[1]
            }
        });
    });


})