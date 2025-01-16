
ServerEvents.recipes(event => {
    customPedestalCraft(event, {
        tier: 'complex', time: 240, citrine: 4, amethyst: 8, onyx: 8, moonstone: 4, experience: 8.0, yield_upgrades: true,
        pattern: [
            'NPN',
            'PBP',
            'NPN'
        ],
        keys: {
            'N': { 'item': 'mythicmetals:celestium_nugget' },
            'P': { 'item': 'botania:pixie_dust' },
            'B': { 'item': 'minecraft:bone_meal' }
        },
        result: {
            'item': 'mysticalagriculture:mystical_fertilizer',
            'count': 16
        },
        advancement: 'botania:main/elf_portal_open'
    });
})