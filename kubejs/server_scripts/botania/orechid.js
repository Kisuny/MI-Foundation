//priority: 0

const overworld = [
    { name: 'modern_industrialization:gadolinite_ore', weight: 2000 },
    { name: 'modern_industrialization:brookite_ore', weight: 2000 },
    { name: 'modern_industrialization:antimony_ore', weight: 1000 },
    { name: 'modern_industrialization:bauxite_ore', weight: 1000 },
    { name: 'modern_industrialization:salt_ore', weight: 1000 },
    { name: 'modern_industrialization:nickel_ore', weight: 1000 },
    { name: 'modern_industrialization:quartz_ore', weight: 1000 },
    { name: 'modern_industrialization:lead_ore', weight: 1000 },
];

const overworld_deepslate = [
    { name: 'modern_industrialization:deepslate_gadolinite_ore', weight: 1000 },
    { name: 'modern_industrialization:deepslate_brookite_ore', weight: 1000 },
    { name: 'modern_industrialization:deepslate_antimony_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_bauxite_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_salt_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_nickel_ore', weight: 500 },
    { name: 'modern_industrialization:deepslate_lead_ore', weight: 500 },
];

const nether = [
    { name: 'spectrum:stratine_ore', weight: 800 },
];

const moon_planet = [
    { name: 'ad_astra:moon_iron_ore', weight: 500 },
    { name: 'ad_astra:moon_desh_ore', weight: 400 },
    { name: 'ad_astra:moon_ice_shard_ore', weight: 200 },
    { name: 'ad_astra:moon_cheese_ore', weight: 50 },
];

const mars_planet = [
    { name: 'ad_astra:mars_iron_ore', weight: 400 },
    { name: 'ad_astra:mars_ice_shard_ore', weight: 300 },
    { name: 'ad_astra:mars_ostrum_ore', weight: 200 },
    { name: 'ad_astra:mars_diamond_ore', weight: 50 },
];

const venus_planet = [
    { name: 'ad_astra:venus_coal_ore', weight: 400 },
    { name: 'ad_astra:venus_gold_ore', weight: 200 },
    { name: 'ad_astra:venus_diamond_ore', weight: 100 },
    { name: 'ad_astra:venus_calorite_ore', weight: 50 },
];

const mercury_planet = [
    { name: 'ad_astra:mercury_iron_ore', weight: 800 },
];

const glacio_planet = [
    { name: 'ad_astra:glacio_iron_ore', weight: 800 },
    { name: 'ad_astra:glacio_coal_ore', weight: 600 },
    { name: 'ad_astra:glacio_copper_ore', weight: 400 },
    { name: 'ad_astra:glacio_ice_shard_ore', weight: 500 },
    { name: 'ad_astra:glacio_lapis_ore', weight: 100 },
];

const deeper_down = [
    { name: 'spectrum:blackslag_emerald_ore', weight: 100 },
    { name: 'spectrum:blackslag_coal_ore', weight: 400 },
    { name: 'spectrum:blackslag_redstone_ore', weight: 500 },
    { name: 'spectrum:blackslag_gold_ore', weight: 250 },
    { name: 'spectrum:blackslag_iron_ore', weight: 500 },
    { name: 'spectrum:blackslag_lapis_ore', weight: 400 },
    { name: 'spectrum:blackslag_diamond_ore', weight: 200 },
    { name: 'spectrum:blackslag_copper_ore', weight: 300 },
    { name: 'spectrum:blackslag_topaz_ore', weight: 200 },
    { name: 'spectrum:blackslag_citrine_ore', weight: 200 },
    { name: 'spectrum:blackslag_amethyst_ore', weight: 200 },
    { name: 'spectrum:blackslag_onyx_ore', weight: 100 },
    { name: 'spectrum:blackslag_moonstone_ore', weight: 50 },
    { name: 'spectrum:blackslag_shimmerstone_ore', weight: 600 },
    { name: 'spectrum:blackslag_azurite_ore', weight: 500 },
    { name: 'spectrum:blackslag_malachite_ore', weight: 100 },
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
