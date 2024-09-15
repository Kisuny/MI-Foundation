//priority: 0

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.neutron_collector(512, 2400)
        .itemIn('kubejs:neutron_capturing_mesh', 0)
        .itemOut('kubejs:neutron_pile', 0.1)
        .biome('ad_astra:orbit')
});
