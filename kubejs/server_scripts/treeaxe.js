ServerEvents.recipes(event => {
    event.remove({mod: "treeaxe"})
    event.smithing('treeaxe:netherite_treeaxe', 'treeaxe:diamond_treeaxe', 'minecraft:netherite_ingot')
})