ServerEvents.recipes(event => {
    global.dyeColors.forEach(color => {
        event.replaceInput(
            { output: `handcrafted:${color.name}_sheet` },
            `minecraft:${color.name}_wool`,
            `minecraft:${color.name}_carpet`
        )
    });
})
