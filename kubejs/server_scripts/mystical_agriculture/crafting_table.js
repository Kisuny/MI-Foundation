ServerEvents.recipes(event => {
    event.shaped('mysticalagriculture:watering_can', [
        'brb',
        'rBR',
        'PPP'
    ], {
        b: 'modern_industrialization:iron_bolt',
        r: 'modern_industrialization:iron_ring',
        B: 'minecraft:bucket',
        R: 'modern_industrialization:iron_rod',
        P: 'modern_industrialization:iron_plate',
    });
})