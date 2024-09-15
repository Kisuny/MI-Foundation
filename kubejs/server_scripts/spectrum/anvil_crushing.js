const anvilCrushing = (event, args) => {
    event.custom({
        "type": "spectrum:anvil_crushing",
        "ingredient": args.input,
        "crushedItemsPerPointOfDamage": args.crushedItemsPerPointOfDamage || 2,
        "experience": args.experience || 0.0,
        "result": args.output,
        "particleEffectIdentifier": args.particleEffect || "cloud",
        "particleCount": args.particleEffectCount || 3,
        "soundEventIdentifier": args.soundIdentifier || "block.stone.break"
    });
};

ServerEvents.recipes(event => {

    anvilCrushing(event, {
        input: { "item": "minecraft:calcite" },
        output: { "item": "kubejs:calcite_dust", "count": 4 },
        crushedItemsPerPointOfDamage: 4, experience: 0, particleEffect: 'cloud', particleEffectCount: 5
    });

    anvilCrushing(event, {
        input: { "item": "minecraft:basalt" },
        output: { "item": "kubejs:basalt_dust", "count": 4 },
        crushedItemsPerPointOfDamage: 4, experience: 0, particleEffect: 'cloud', particleEffectCount: 5
    });
});
