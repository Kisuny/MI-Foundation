//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.neutronium_compressor(32, 600)
        .itemIn('9x kubejs:neutron_pile')
        .itemOut('kubejs:neutron_nugget')
        .biome('ad_astra:orbit')

    event.recipes.modern_industrialization.neutronium_compressor(32, 600)
        .itemIn('9x kubejs:neutron_nugget')
        .itemOut('kubejs:neutronium_ingot')
        .biome('ad_astra:orbit')

    event.recipes.modern_industrialization.neutronium_compressor(64, 600)
        .itemIn('kubejs:infinity_ingot')
        .itemOut('kubejs:infinity_plate')
        .biome('ad_astra:orbit')

    event.recipes.modern_industrialization.neutronium_compressor(32, 600)
        .itemIn('kubejs:neutronium_ingot')
        .itemOut('kubejs:neutronium_plate')
        .biome('ad_astra:orbit')
});
