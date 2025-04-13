//priority: 0

let materialVanilla = [
    'iron',
    'copper',
    'redstone',
    'lapis',
    'diamond',
    'quartz',
    'emerald',
    'netherite',
    'gold',
    'amethyst'
];

let materialMI = [
    'tin',
    'silver',
    'lead',
    'nickel',
    'antimony',
    'aluminum',
    'tungsten',
    'uranium',
    'iridium',
    'titanium',
    'platinum',
    'chromium',
    'beryllium'
];

let materialSpectrum = [
    'topaz',
    'citrine',
    'onyx',
    'moonstone'
];

let materialMythicMetals = [
    'banglum',
    'carmot',
    'kyber',
    'mythril',
    'orichalcum',
    'osmium',
    'quadrillum',
    'prometheum'
];

ServerEvents.recipes(event => {

    const spatial = (modid, input) => {
        let ev = `event.recipes.modern_industrialization.spatial_forge(256000, 100)`
        let iN = ''
        for (let i = 0; i < 49; i++) {
            iN += `.itemIn('256x ${modid}:${input}_block')`
        };
        let iO = `.itemOut('kubejs:${input}_singularity')`
        eval(ev + iN + iO)
    };

    materialMI.forEach(material => {
        spatial('modern_industrialization', material)
    });

    materialVanilla.forEach(material => {
        spatial('minecraft', material)
    });

    materialSpectrum.forEach(material => {
        spatial('spectrum', material)
    });

    materialMythicMetals.forEach(material => {
        spatial('mythicmetals', material)
    });

    event.recipes.modern_industrialization.spatial_forge(512000, 100)
        .itemIn('kubejs:iron_singularity')
        .itemIn('kubejs:copper_singularity')
        .itemIn('kubejs:redstone_singularity')
        .itemIn('kubejs:lapis_singularity')
        .itemIn('kubejs:diamond_singularity')
        .itemIn('kubejs:quartz_singularity')
        .itemIn('kubejs:emerald_singularity')
        .itemIn('kubejs:netherite_singularity')
        .itemIn('kubejs:gold_singularity')
        .itemIn('kubejs:amethyst_singularity')
        .itemIn('kubejs:tin_singularity')
        .itemIn('kubejs:silver_singularity')
        .itemIn('kubejs:lead_singularity')
        .itemIn('kubejs:nickel_singularity')
        .itemIn('kubejs:antimony_singularity')
        .itemIn('kubejs:aluminum_singularity')
        .itemIn('kubejs:tungsten_singularity')
        .itemIn('kubejs:uranium_singularity')
        .itemIn('kubejs:iridium_singularity')
        .itemIn('kubejs:titanium_singularity')
        .itemIn('kubejs:platinum_singularity')
        .itemIn('kubejs:chromium_singularity')
        .itemIn('kubejs:beryllium_singularity')
        .itemIn('kubejs:topaz_singularity')
        .itemIn('kubejs:citrine_singularity')
        .itemIn('kubejs:onyx_singularity')
        .itemIn('kubejs:moonstone_singularity')
        .itemIn('kubejs:banglum_singularity')
        .itemIn('kubejs:carmot_singularity')
        .itemIn('kubejs:kyber_singularity')
        .itemIn('kubejs:mythril_singularity')
        .itemIn('kubejs:orichalcum_singularity')
        .itemIn('kubejs:osmium_singularity')
        .itemIn('kubejs:quadrillum_singularity')
        .itemIn('kubejs:prometheum_singularity')
        .itemOut('kubejs:infinity_catalyst')
        .biome('ae2:spatial_storage')

    event.recipes.modern_industrialization.spatial_forge(4096, 24000)
        .itemIn('botania:manasteel_ingot')
        .itemIn('botania:terrasteel_ingot')
        .itemIn('botania:elementium_ingot')
        .itemIn('botania:gaia_ingot')
        .itemIn('mythicmetals:celestium_ingot')
        .itemIn('mythicmetals:metallurgium_ingot')
        .itemIn('mythicmetals:midas_gold_ingot')
        .itemIn('gobber2:gobber2_ingot')
        .itemIn('gobber2:gobber2_ingot_nether')
        .itemIn('gobber2:gobber2_ingot_end')
        .itemIn('modern_industrialization:annealed_copper_ingot')
        .itemIn('modern_industrialization:plutonium_ingot')
        .itemIn('modern_industrialization:uranium_238_ingot')
        .itemIn('modern_industrialization:uranium_235_ingot')
        .itemIn('ad_astra:desh_ingot')
        .itemIn('wiredredstone:redstone_alloy_ingot')
        .itemIn('ad_astra:calorite_ingot')
        .itemIn('architects_palette:unobtanium')
        .itemIn('mythicmetals:stormyx_ingot')
        .itemIn('mythicmetals:runite_ingot')
        .itemIn('ad_astra:ostrum_ingot')
        .itemIn('modern_industrialization:rocket_alloy_ingot')
        .itemIn('modern_industrialization:blastproof_alloy_ingot')
        .itemIn('modern_industrialization:tungsten_steel_ingot')
        .itemIn('kubejs:neutronium_ingot')
        .itemIn('mythicmetals:durasteel_ingot')
        .itemIn('kubejs:dragonbone_alloy')
        .itemIn('spectrum:bedrock_dust')
        .itemIn('minecraft:nether_star')
        .itemIn('kubejs:infinity_catalyst')
        .itemOut('kubejs:infinity_ingot')
        .biome('ae2:spatial_storage')
});
