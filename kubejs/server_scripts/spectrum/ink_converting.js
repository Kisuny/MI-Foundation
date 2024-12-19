
ServerEvents.recipes(event => {
    global.dyeColors.forEach(color => {
        event.recipes.spectrum.ink_converting({
            'ingredient': {
                'item': `modern_industrialization:${color.name}_comb`
            },
            'color': `${color.name}`,
            'amount': 40,
            'required_advancement': `spectrum:hidden/collect_pigment/collect_${color.name}_pigment`
        })
    });

})