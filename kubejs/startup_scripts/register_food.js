StartupEvents.registry('item', event => {
    event.create('ditcheryatina')
        .displayName('Ditcheryatina')
        .translationKey(`item.kubejs.ditcheryatina`)
        .food(food => {
            food
                .hunger(5)
                .saturation(2.5)
                .effect('hunger', 600, 10, 1)
                .effect('nausea', 1600, 10, 1)
                .effect('darkness', 400, 4, 1)
                .alwaysEdible()
        });
    event.create('zotzpyre_flesh')
        .displayName('Zotzpyre Flesh')
        .translationKey(`item.kubejs.zotzpyre_flesh`)
        .food(food => {
            food
                .hunger(5)
                .saturation(2.5)
                .effect('hunger', 600, 10, 1)
                .effect('nausea', 1600, 10, 1)
                .alwaysEdible()
        });
    
    event.create('kozel_dark')
        .displayName('Kozel dark')
        .translationKey(`item.kubejs.kozel_dark`)
        .food(food => {
            food
                .hunger(12)
                .saturation(7)
                .effect('hunger', 600, 10, 1)
                .effect('nausea', 1600, 10, 1)
                .alwaysEdible()
        });
});