//priority: 0

const overworld = [
    { name: 'modern_industrialization:gadolinite_ore', weight: 20000 },
    { name: 'modern_industrialization:brookite_ore', weight: 20000 },
    { name: 'modern_industrialization:antimony_ore', weight: 1000 },
    { name: 'modern_industrialization:bauxite_ore', weight: 1000 },
    { name: 'modern_industrialization:salt_ore', weight: 1000 },
    { name: 'modern_industrialization:nickel_ore', weight: 1000 },
    { name: 'modern_industrialization:quartz_ore', weight: 1000 },
    { name: 'modern_industrialization:lead_ore', weight: 1000 },
];

const overworld_deepslate = [
    { name: 'modern_industrialization:deepslate_gadolinite_ore', weight: 10000 },
    { name: 'modern_industrialization:deepslate_brookite_ore', weight: 10000 },
    { name: 'modern_industrialization:deepslate_antimony_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_bauxite_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_salt_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_nickel_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_lead_ore', weight: 500 },
];

const nether = [
    { name: 'spectrum:stratine_ore', weight: 400 },
];

const moon_planet = [
    { name: 'ad_astra:moon_iron_ore', weight: 8000 },
    { name: 'ad_astra:moon_desh_ore', weight: 4000 },
    { name: 'ad_astra:moon_ice_shard_ore', weight: 2000 },
    { name: 'ad_astra:moon_cheese_ore', weight: 500 },
];

const mars_planet = [
    { name: 'ad_astra:mars_iron_ore', weight: 8000 },
    { name: 'ad_astra:mars_ice_shard_ore', weight: 3000 },
    { name: 'ad_astra:mars_ostrum_ore', weight: 2000 },
    { name: 'ad_astra:mars_diamond_ore', weight: 500 },
];

const venus_planet = [
    { name: 'ad_astra:venus_coal_ore', weight: 8000 },
    { name: 'ad_astra:venus_gold_ore', weight: 2000 },
    { name: 'ad_astra:venus_diamond_ore', weight: 1000 },
    { name: 'ad_astra:venus_calorite_ore', weight: 500 },
];

const mercury_planet = [
    { name: 'ad_astra:mercury_iron_ore', weight: 8000 },
];

const glacio_planet = [
    { name: 'ad_astra:glacio_iron_ore', weight: 8000 },
    { name: 'ad_astra:glacio_coal_ore', weight: 6000 },
    { name: 'ad_astra:glacio_copper_ore', weight: 4000 },
    { name: 'ad_astra:glacio_ice_shard_ore', weight: 5000 },
    { name: 'ad_astra:glacio_lapis_ore', weight: 1000 },
];

const deeper_down = [
    { name: 'spectrum:blackslag_emerald_ore', weight: 1239 },
    { name: 'spectrum:blackslag_coal_ore', weight: 67415 },
    { name: 'spectrum:blackslag_redstone_ore', weight: 7654 },
    { name: 'spectrum:blackslag_gold_ore', weight: 2647 },
    { name: 'spectrum:blackslag_iron_ore', weight: 29371 },
    { name: 'spectrum:blackslag_lapis_ore', weight: 1079 },
    { name: 'spectrum:blackslag_diamond_ore', weight: 883 },
    { name: 'spectrum:blackslag_copper_ore', weight: 7000 },
    { name: 'spectrum:blackslag_topaz_ore', weight: 1000 },
    { name: 'spectrum:blackslag_citrine_ore', weight: 1000 },
    { name: 'spectrum:blackslag_amethyst_ore', weight: 1000 },
    { name: 'spectrum:blackslag_onyx_ore', weight: 400 },
    { name: 'spectrum:blackslag_moonstone_ore', weight: 100 },
    { name: 'spectrum:blackslag_shimmerstone_ore', weight: 1200 },
    { name: 'spectrum:blackslag_azurite_ore', weight: 800 },
    { name: 'spectrum:blackslag_malachite_ore', weight: 50 },
];

const normal = [
    { block: 'minecraft:stone', dim: overworld },
    { block: 'minecraft:deepslate', dim: overworld_deepslate },
    { block: 'ad_astra:moon_stone', dim: moon_planet },
    { block: 'ad_astra:glacio_stone', dim: glacio_planet },
    { block: 'spectrum:blackslag', dim: deeper_down },
];

const ignem = [
    { block: 'minecraft:netherrack', dim: nether },
    { block: 'ad_astra:mars_stone', dim: mars_planet },
    { block: 'ad_astra:venus_stone', dim: venus_planet },
    { block: 'ad_astra:mercury_stone', dim: mercury_planet },
];

ServerEvents.recipes(event => {

    normal.forEach(dimension => {
        dimension.dim.forEach(ore => {
            event.recipes.botania.orechid({
                "input": {
                    "type": "block",
                    "block": dimension.block
                },
                "output": {
                    "type": "block",
                    "block": ore.name
                },
                "weight": ore.weight
            })

        })
    });
    ignem.forEach(dimension => {
        dimension.dim.forEach(ore => {
            event.recipes.botania.orechid_ignem({
                "input": {
                    "type": "block",
                    "block": dimension.block
                },
                "output": {
                    "type": "block",
                    "block": ore.name
                },
                "weight": ore.weight
            })

        })
    });

});
