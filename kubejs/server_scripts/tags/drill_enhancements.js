ServerEvents.tags('item', event => {

    drill_types.forEach(type => {
        event.add('mif:durasteel_reinforced_drills', `kubejs:durasteel_reinforced_${type}_drill`)
        event.add('mif:neutronium_augmented_drills', `kubejs:neutronium_augmented_${type}_drill`)
        event.add('mif:azurite_plated_drills', `kubejs:azurite_plated_${type}_drill`)
        event.add('mif:malachite_enhanced_drills', `kubejs:malachite_enhanced_${type}_drill`)
    });

});