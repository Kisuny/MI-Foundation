//priority: 0

ServerEvents.tags('worldgen/biome', event => {

    const MARS_BIOMES = [
        'ad_astra:martian_canyon_creek',
        'ad_astra:martian_polar_caps',
        'ad_astra:martian_wastelands'
    ]

    const VENUS_BIOMES = [
        'ad_astra:venus_wastelands',
        'ad_astra:infernal_venus_barrens'
    ]

    const GLASIO_BIOMES = [
        'ad_astra:glacio_ice_peaks',
        'ad_astra:glacio_snowy_barrens'
    ]

    event.add('ad_astra:moon', 'ad_astra:lunar_wastelands');
    MARS_BIOMES.forEach(biom => event.add('ad_astra:mars', biom));
    VENUS_BIOMES.forEach(biom => event.add('ad_astra:venus', biom));
    GLASIO_BIOMES.forEach(biom => event.add('ad_astra:glasio', biom));
});

ServerEvents.tags('fluid', event => {
    event.add('ad_astra_platform:oxygen', 'modern_industrialization:oxygen')
    event.removeAllTagsFrom("ad_astra:fuel")
    event.removeAllTagsFrom("ad_astra:oil")
    event.removeAllTagsFrom("ad_astra:cryo_fuel")


    event.add('ad_astra:efficient_fuel', 'modern_industrialization:advanced_rocket_fuel')
    event.add('ad_astra:fuel', 'modern_industrialization:hydrazine')

    event.add("c:hidden_from_recipe_viewers", "ad_astra:fuel")
    event.add("c:hidden_from_recipe_viewers", "ad_astra:cryo_fuel")

    event.add("c:fuel", 'modern_industrialization:light_fuel')

    const reflu = [
        'ad_astra:fuel',
        'ad_astra:cryo_fuel',
        'ad_astra:oil',
        'ad_astra:oxygen'
    ]

    reflu.forEach(liquid =>
        event.get('c:hidden_from_recipe_viewers').add(liquid)
    )
});
ServerEvents.tags('item', event => {
    event.add('c:ores','ad_astra:moon_desh_ore')
})
