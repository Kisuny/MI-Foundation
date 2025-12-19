ServerEvents.tags('item', event => {

    global.dyeColors.forEach(color => {
        event.add('mif:fossilized_flower', `kubejs:fossilized_${color.name}_mystical_flower`)

        event.remove('botania:petals', `botania:${color.name}_mushroom`)
        event.remove(`botania:petals/${color.name}`, `botania:${color.name}_mushroom`)
    });

    apothecary.forEach(apothecary => {
        event.add('botania:apothecary', `botania:apothecary_${apothecary.type}`)
    });

    event.add('botania:loonium_blacklist', ['numismatic-overhaul:gold_coin', 'numismatic-overhaul:silver_coin', 'kubejs:reforge_rune', 'artifacts:steadfast_spikes', 'neepmeat:integrator_egg', 'artifacts:universal_attractor', 'majruszsaccessories:adventurer_kit', 'artifacts:umbrella', 'artifacts:plastic_drinking_hat', 'artifacts:novelty_drinking_hat', 'artifacts:scarf_of_invisibility', 'artifacts:bunny_hoppers', 'things:rabbit_foot_charm', 'things:socks', 'majruszsaccessories:removal_card', 'artifacts:steadfast_spikes', 'artifacts:helium_flamingo', '#mif:exploring_trinkets', '#simplyswords:uniques'])

});
