const ad_astra_smelting = [
    'modern_industrialization:materials/ostrum/smelting/dust_to_ingot_smelting'
]

ServerEvents.recipes(event => {
    event.smelting('expandeddelight:grilled_cheese', 'expandeddelight:cheese_sandwich')
    ad_astra_smelting.forEach((item) => {
        event.remove({id: item})
    })
})
