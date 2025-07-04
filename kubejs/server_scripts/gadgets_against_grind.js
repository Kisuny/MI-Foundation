ServerEvents.recipes(event => {
    event.remove({ output: 'gag:time_sand_pouch' })
    event.remove({ output: 'gag:labeling_tool' })
    event.remove({ output: 'gag:mining_dynamite' })
    event.remove({ output: 'gag:fishing_dynamite' })
    event.remove({ output: 'gag:pigment_jar' })
    event.remove({ output: 'gag:escape_rope' })
    event.remove({ output: 'gag:hearthstone' })

    customeFusionShrineCraft(event, {
        time: 72000, experience: 5.0,
        fluid: "spectrum:liquid_crystal",
        ingredients: [
            { "item": "bosses_of_mass_destruction:blazing_eye", "count": 1 },
            { "item": "minecraft:bundle", "count": 1 },
            { "item": "mythicmetals:raw_midas_gold_block", "count": 8 },
            { "item": "minecraft:nautilus_shell", "count": 12 },
        ],
        result: {
            "item": "gag:time_sand_pouch"
        },
        advancement: "bosses_of_mass_destruction:end/obsidilith_defeat"
    }
    );

    customPedestalCraft(event, {
        tier: 'simple', time: 400, topaz: 12, amethyst: 12, citrine: 12, experience: 2.0,
        pattern: [
            "CRB",
            "C B",
            "CTB"
        ],
        keys: {
            "C": { "item": "minecraft:chain" },
            "T": { "item": "minecraft:lead" },
            "R": { "item": "minecraft:tripwire_hook" },
            "B": { "item": "kubejs:raw_magical_steel" },
        },
        result: {
            "item": "gag:escape_rope",
            "count": 1
        },
        advancement: "spectrum:craft_cmy_pedestal"
    });

});