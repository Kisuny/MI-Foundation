ServerEvents.recipes(event => {
    const TORCHES = [
        {type: 'diamond', item: 'minecraft:diamond_block'},
        {type: 'emerald', item: 'minecraft:emerald_block'},
        {type: 'amethyst', item: 'spectrum:amethyst_storage_block'},
    ]
    TORCHES.forEach(torch => {
        event.remove({output: `magnumtorch:${torch.type}_magnum_torch`})
        customPedestalCraft(event, {
            tier: "advanced", time: 2800, citrine:32, onyx: 16, experience: 5.0,
            pattern: [
                "UTU",
                "YRY",
                "QEQ"
            ],
            keys: {
                "Q": { "tag": "minecraft:overworld_natural_logs" },
                "E": { "item": "bosses_of_mass_destruction:mob_ward" },
                "R": { "item": "kubejs:crystal_fiery" },
                "T": { "item": "minecraft:fire_charge" },
                "Y": { "item": torch.item },
                "U": {"tag": "miskatonicmysteries:oceanic_gold_blocks"}
            },
            result: {
                "item": `magnumtorch:${torch.type}_magnum_torch`,
                "count": 1
            },
            advancement: "spectrum:midgame/spectrum_midgame"
        });
    });


})