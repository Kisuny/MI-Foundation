ServerEvents.recipes(event => {
    event.remove({output:"xps:soul_copper_blend"})
    event.remove({output:"xps:xp_berries_seeds"})
    event.remove({output:"xps:block_xp_obelisk"})
    
     event.recipes.modern_industrialization.mixer(6, 100)
        .itemIn('modern_industrialization:copper_dust')
        .itemIn('spirit:soul_powder')
        .itemOut('2x xps:soul_copper_blend')

    
    customPedestalCraft(event, {
        time: 200,  amethyst: 8, experience: 0.1,
        pattern: [
            "QEQ",
            "TWT",
            "QRQ"
        ],
        keys: {
            "Q": { "item": "spectrum:vegetal" },
            "W": { "item": "xps:xp_bucket" },
            "T": { "item": "minecraft:nether_wart" },
            "R": { "item": "xps:soul_copper_ingot" },
            "E": { "item": "bewitchment:witchberry" }
        },
        result: {
            "item": "xps:xp_berries_seeds",
            "count": 8
        },
        advancement: "spectrum:collect_vegetal",
    });

    customPedestalCraft(event, {
        time: 100, amethyst: 2, citrine: 2, topaz:2,
        pattern: [
            "WWW",
            "WQW",
            "WWW"
        ],
        keys: {
            "Q": { "item": "minecraft:bucket" },
            "W": { "item": "minecraft:experience_bottle" }
        },
        result: {
            "item": "xps:xp_bucket",
            "count": 1
        },
        advancement: "spectrum:spectrum",
    });

    customeFusionShrineCraft(event, {
        time: 6000, experience: 5.0,
        fluid: "xps:xp_fluid",
        ingredients: [
            { "item": 'xps:block_soul_copper', "count": 4 },
            { "item": 'xps:xp_remover', "count": 1 },
            { "item": 'minecraft:enchanted_book', "count": 1 },
            { "item": 'mythicmetals:celestium_ingot', "count": 1 },
            { "item": 'autoworkstations:iron_auto_experience_orb_emitter', "count": 1 },
        ],
        result: {
            "item": "xps:block_xp_obelisk"
        },
        advancement: "spectrum:build_fusion_shrine"
    }
    );
})