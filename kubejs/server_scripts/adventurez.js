ServerEvents.recipes(event => {
    const removeByID = [
        'adventurez:netherite_scrap_from_warthog_piece',
]

    removeByID.forEach(item => {
        event.remove({id: item})
    })
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier('adventurez:entities/blaze_guardian')
        .randomChance(0.7)
        .killedByPlayer() 
        .addLoot('kubejs:crystal_fiery')
});
