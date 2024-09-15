//priority: 6

MIMaterialEvents.addMaterials(event => {
    let ores = [
        { name: "adamantite", color: 0x9a1115, hardness: 'very_hard', materialset: 'metallic' },
        { name: "aquarium", color: 0x4287f5, hardness: 'hard', materialset: 'shiny' },
        { name: "banglum", color: 0xac4313, hardness: 'hard', materialset: 'metallic' },
        { name: "carmot", color: 0xc83f49, hardness: 'hard', materialset: 'shiny' },
        { name: "kyber", color: 0x9633C6, hardness: 'hard', materialset: 'metallic' },
        { name: "midas_gold", color: 0xFFD700, hardness: 'soft', materialset: 'shiny' },
        { name: "mythril", color: 0x5DF4FF, hardness: 'very_hard', materialset: 'shiny' },
        { name: "orichalcum", color: 0x98ff98, hardness: 'hard', materialset: 'metallic' },
        { name: "osmium", color: 0x9090A3, hardness: 'hard', materialset: 'metallic' },
        { name: "palladium", color: 0xff5b00, hardness: 'hard', materialset: 'metallic' },
        { name: "prometheum", color: 0x006400, hardness: 'very_hard', materialset: 'metallic' },
        { name: "quadrillum", color: 0x242727, hardness: 'hard', materialset: 'dull' },
        { name: "runite", color: 0x049cbc, hardness: 'hard', materialset: 'metallic' },
        { name: "stormyx", color: 0xcc338b, hardness: 'very_hard', materialset: 'shiny' }
    ]

    let alloys = [
        { name: "metallurgium", color: 0x5b0a91, hardness: 'very_hard', materialset: 'metallic' },
        { name: "hallowed", color: 0xf8e472, hardness: 'hard', materialset: 'shiny' },
        { name: "celestium", color: 0xf6cead, hardness: 'very_hard', materialset: 'shiny' },
        { name: "durasteel", color: 0x282829, hardness: 'very_hard', materialset: 'metallic' },
    ]

    alloys.forEach(alloy => {
        event.createMaterial(capitalize(alloy.name), alloy.name, alloy.color,
            builder => {
                builder
                    .hardness(alloy.hardness)
                    .materialSet(alloy.materialset)
                    .addParts('dust', 'tiny_dust', 'plate', 'large_plate')
                    .addExternalPart('ingot', `mythicmetals:${alloy.name}_ingot`)
                    .addExternalPart('nugget', `mythicmetals:${alloy.name}_nugget`)
                    .defaultRecipes()
                    .forgeHammerRecipes();
            });
    })

    ores.forEach(ore => {
        event.createMaterial(capitalize(ore.name), ore.name, ore.color,
            builder => {
                builder
                    .hardness(ore.hardness)
                    .materialSet(ore.materialset)
                    .addParts('dust', 'tiny_dust', 'plate', 'large_plate')
                    .addExternalPart('ore', `mythicmetals:${ore.name}_ore`)
                    .addExternalPart('raw_metal', `mythicmetals:raw_${ore.name}`)
                    .addExternalPart('nugget', `mythicmetals:${ore.name}_nugget`)
                    .addExternalPart('ingot', `mythicmetals:${ore.name}_ingot`)
                    .forgeHammerRecipes()
                    .defaultRecipes();
            });
    });
    event.createMaterial('Star Platinum', 'star_platinum', 0xA198D2, builder => {
        builder
            .addParts('plate','large_plate','dust','tiny_dust')
            .hardness('very_hard')
            .materialSet('shiny')
            .addExternalPart('ingot', 'mythicmetals:star_platinum')
            .addExternalPart('nugget', 'mythicmetals:star_platinum_nugget')
            .defaultRecipes()
    });
});

