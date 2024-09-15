//priority: 2

ItemEvents.modification(event => {
    const unstackable = [
        'travelstaff:travel_staff',
        'modern_industrialization:certus_lens',
        'modern_industrialization:emerald_lens'
    ]
    unstackable.forEach(element => {
        event.modify(element, item => { item.maxStackSize = 1 })



        event.modify('artifacts:fire_gauntlet', item => {
            item.fireResistant = false
        });
    })

    event.modify('modern_industrialization:topaz_lens', item => { item.maxStackSize = 16 });
    event.modify('modern_industrialization:amethyst_lens', item => { item.maxStackSize = 16 });
    event.modify('modern_industrialization:citrine_lens', item => { item.maxStackSize = 16 });

    event.modify('itemalchemy:alchemical_fuel', item => {
        item.burnTime = 51200;
        item.rarity = 'uncommon'
    });
    event.modify('itemalchemy:mobius_fuel', item => {
        item.burnTime = 1638400;
        item.rarity = "rare"
    });
    event.modify('itemalchemy:aeternalis_fuel', item => {
        item.burnTime = 52428800;
        item.rarity = 'epic'
    });

})
