//priority: 4

MIMaterialEvents.addMaterials(event => {

    event.createMaterial("Terrasteel", "terrasteel", 0x4bc914, builder => {
        builder
            .materialSet('shiny')
            .addParts("plate", "large_plate", 'ring', 'rod', 'wire', 'fine_wire')
            .addExternalPart('nugget', 'botania:terrasteel_nugget')
            .addExternalPart('ingot', 'botania:terrasteel_ingot')
            .defaultRecipes()
    })

    event.createMaterial("Manasteel", 'manasteel', 0x1e81cc, builder => {
        builder
            .materialSet('shiny')
            .addParts('plate', 'gear', 'ring', 'bolt', 'rod', 'large_plate',)
            .addExternalPart('block', 'botania:manasteel_block')
            .addExternalPart('ingot', 'botania:manasteel_ingot')
            .addExternalPart('nugget', 'botania:manasteel_nugget')
            .specialCasing('Manasteel Casing', 'manasteel_casing', 8)
            .defaultRecipes()
    })

    event.createMaterial("Elementium", 'elementium', 0xee5bac, builder => {
        builder
            .materialSet('shiny')
            .addParts('plate', 'large_plate', 'rod', 'ring')
            .addExternalPart('block', 'botania:elementium_block')
            .addExternalPart('ingot', 'botania:elementium_ingot')
            .addExternalPart('nugget', 'botania:elementium_nugget')
            .defaultRecipes()
    })

    event.createMaterial("Ancient Fossil", 'ancient_fossil', 0x7c501a, builder => {
        builder
            .materialSet('shiny')
            .block('coal')
    })


    event.createMaterial('Redstone Alloy', 'redstone_alloy', 0xc60404, builder => {
        builder
            .materialSet('metallic')
            .addParts('dust', 'nugget', 'plate')
            .addExternalPart('ingot', 'wiredredstone:redstone_alloy_ingot')
            .defaultRecipes()
    })

})

// Remove flowers gen in world
WorldgenEvents.remove(event => {
    event.removeFeatureById('vegetal_decoration', ['botania:mystical_flowers', 'botania:mystical_mushrooms'])
})
