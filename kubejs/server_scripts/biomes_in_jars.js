ServerEvents.recipes(event =>{
    event.remove({ output: 'biomesinjars:empty_biome_jar' })

    customeFusionShrineCraft(event, {
        time: 72000, experience: 5.0, 
        fluid: "modern_industrialization:liquid_mana",
        ingredients: [
            { "item": 'botania:rune_mana', "count": 1 },
            { "item": 'botania:rune_envy', "count": 1 },
            { "item": 'bosses_of_mass_destruction:void_thorn', "count": 1 },
            { "item": 'botania:elf_glass', "count": 8 },
            { "item": 'spectrum:ender_splice', "count": 2 },
            { "item": 'bewitchment:belladonna', "count": 4 },
        ],
        result: {
            "item": "biomesinjars:empty_biome_jar"
        },
        advancement: "spectrum:build_fusion_shrine"
    }
    );
});