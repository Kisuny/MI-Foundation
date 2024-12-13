ServerEvents.recipes(event => {
    event.remove({ output: 'timeinabottle:time_in_a_bottle' })

    customeFusionShrineCraft(event, {
        time: 72000, experience: 5.0, yield_upgrades: true,
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": "botania:rune_greed", "count": 1 },
            { "item": "botania:rune_sloth", "count": 1 },
            { "item": "bosses_of_mass_destruction:blazing_eye", "count": 1 },
            { "item": "botania:elf_glass", "count": 5 },
            { "item": "modern_industrialization:midas_gold_plate", "count": 3 },
            { "item": "spectrum:celestial_pocketwatch", "count": 1 },
        ],
        result: {
            "item": "timeinabottle:time_in_a_bottle"
        },
        advancement: "bosses_of_mass_destruction:end/obsidilith_defeat"
    }
    );

});