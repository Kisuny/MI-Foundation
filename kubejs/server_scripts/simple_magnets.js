ServerEvents.recipes(event => {
    event.remove({output: [
        'simplemagnets:basicmagnet',
        'simplemagnets:advancedmagnet',
    ]})

    
    event.replaceInput({id: 'simplemagnets:basic_demagnetization_coil'}, 'minecraft:iron_ingot', 'modern_industrialization:iron_plate')
    event.replaceInput({id: 'simplemagnets:basic_demagnetization_coil'}, 'minecraft:redstone', 'wiredredstone:red_alloy_wire')
    event.replaceInput({id: 'simplemagnets:basic_demagnetization_coil'}, 'minecraft:gold_ingot', 'modern_industrialization:gold_plate')
    event.replaceInput({id: 'simplemagnets:advanced_demagnetization_coil'}, 'minecraft:gold_ingot', 'modern_industrialization:gold_plate')
    event.replaceInput({id: 'simplemagnets:advanced_demagnetization_coil'}, 'minecraft:redstone', 'wiredredstone:red_alloy_wire')


    customEnchanterCraft(event, {
        time: 2400, experience: 666, advancement: "spectrum:midgame/build_enchanting_structure",
        ingredients: [
          {"item": "simplemagnets:basicmagnet"},
          {"item": "miskatonicmysteries:oceanic_gold_block"},
          {"item": "miskatonicmysteries:oceanic_gold_block"},
          {"item": "modern_industrialization:advanced_upgrade"},
          {"item": "bosses_of_mass_destruction:charged_ender_pearl"},
          {"item": "mythicmetals:midas_gold_block"},
          {"item": "mythicmetals:midas_gold_block"},
          {"item": "modern_industrialization:advanced_upgrade"},
          {"item": "kubejs:magnet_part"}
        ],
        result: {
            "item": "simplemagnets:advancedmagnet"
        },
    });

    event.recipes.modern_industrialization.polarizer(8, 400) //Eu, ticks
        .itemIn('kubejs:demagnetized_magnet_part')
        .itemOut('kubejs:magnet_part')

        event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x kubejs:magnet_part')
        .itemIn('architects_palette:ender_pearl_block')
        .itemOut('simplemagnets:basicmagnet')
        .fluidIn('modern_industrialization:red_ink', 50)
        .fluidIn('modern_industrialization:blue_ink', 50)
        .id('mif:basicmagnet')

});
