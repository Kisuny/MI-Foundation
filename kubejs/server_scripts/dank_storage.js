ServerEvents.recipes(event => {

    event.remove({output: [
        'dankstorage:dock',
        'dankstorage:dank_1',
        'dankstorage:dank_2',
        'dankstorage:dank_3',
        'dankstorage:dank_4',
        'dankstorage:dank_5',
        'dankstorage:dank_6',
        'dankstorage:dank_7',
        'dankstorage:1_to_2',
        'dankstorage:2_to_3',
        'dankstorage:3_to_4',
        'dankstorage:4_to_5',
        'dankstorage:5_to_6',
        'dankstorage:6_to_7',
    ]})


    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x modern_industrialization:stainless_steel_plate')
        .itemIn('16x ae2:sky_stone_block')
        .itemIn('ae2:import_bus')
        .itemIn('ae2:export_bus')
        .itemOut('dankstorage:dock')


    customPedestalCraft(event, {
        tier: 'basic', time: 600, topaz: 12, experience: 0.5, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "kubejs:raw_magical_steel" }
        },
        result: {
            "item": "dankstorage:dank_1",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });

    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 16, citrine: 16, experience: 1.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_1" },
            "T": { "item": "mythicmetals:adamantite_block" }
        },
        result: {
            "item": "dankstorage:dank_2",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });
    customPedestalCraft(event, {
        tier: 'basic', time: 800, topaz: 16, citrine: 16, experience: 1.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "mythicmetals:adamantite_block" }
        },
        result: {
            "item": "dankstorage:1_to_2",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });

    customPedestalCraft(event, {
        tier: 'simple', time: 1000, topaz: 20, citrine: 20, amethyst : 20,  experience: 2.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_2" },
            "T": { "item": "mythicmetals:celestium_block" }
        },
        result: {
            "item": "dankstorage:dank_3",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });
    customPedestalCraft(event, {
        tier: 'simple', time: 1000, topaz: 20, citrine: 20, amethyst : 20,  experience: 2.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "mythicmetals:celestium_block" }
        },
        result: {
            "item": "dankstorage:2_to_3",
            "count": 1
        },
        advancement: "spectrum:collect_quitoxic_reeds"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 2400, topaz: 24, citrine: 24, amethyst : 24, experience: 4.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_3" },
            "T": { "item": "mythicmetals:durasteel_block" }
        },
        result: {
            "item": "dankstorage:dank_4",
            "count": 1
        },
        advancement: "mythicmetals:durasteel"
    });

    customPedestalCraft(event, {
        tier: 'advanced', time: 2400, topaz: 24, citrine: 24, amethyst : 24, experience: 4.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "mythicmetals:durasteel_block" }
        },
        result: {
            "item": "dankstorage:3_to_4",
            "count": 1
        },
        advancement: "mythicmetals:durasteel"
    });

    customPedestalCraft(event, {
        tier: 'complex', time: 3600, topaz: 48, citrine: 48, amethyst : 48, onyx: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_4" },
            "T": { "item": "spectrum:malachite_block" }
        },
        result: {
            "item": "dankstorage:dank_5",
            "count": 1
        },
        advancement: "spectrum:lategame/collect_malachite"
    });
    customPedestalCraft(event, {
        tier: 'complex', time: 3600, topaz: 48, citrine: 48, amethyst : 48, onyx: 16, experience: 8.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "spectrum:malachite_block" }
        },
        result: {
            "item": "dankstorage:4_to_5",
            "count": 1
        },
        advancement: "spectrum:lategame/collect_malachite"
    });

    customPedestalCraft(event, {
        tier: 'complex', time: 4800, topaz: 64, citrine: 64, amethyst : 64, onyx: 32, moonstone: 16, experience: 16.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_5" },
            "T": { "item": "spectrum:bloodstone_block" }
        },
        result: {
            "item": "dankstorage:dank_6",
            "count": 1
        },
        advancement: "spectrum:lategame/grow_bloodstone_in_crystallarieum"
    });
    customPedestalCraft(event, {
        tier: 'complex', time: 4800, topaz: 64, citrine: 64, amethyst : 64, onyx: 32, moonstone: 16, experience: 16.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "spectrum:bloodstone_block" }
        },
        result: {
            "item": "dankstorage:5_to_6",
            "count": 1
        },
        advancement: "spectrum:lategame/grow_bloodstone_in_crystallarieum"
    });

    customPedestalCraft(event, {
        tier: 'complex', time: 9400, topaz: 64, citrine: 64, amethyst : 64, onyx: 64, moonstone: 48, experience: 32.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "dankstorage:dank_6" },
            "T": { "item": "mythicmetals:metallurgium_block" }
        },
        result: {
            "item": "dankstorage:dank_7",
            "count": 1
        },
        advancement: "mythicmetals:metallurgium"
    });

    customPedestalCraft(event, {
        tier: 'complex', time: 9400, topaz: 64, citrine: 64, amethyst : 64, onyx: 64, moonstone: 48, experience: 32.0, yield_upgrades: true,
        pattern: [
            "TTT",
            "TCT",
            "TTT"
        ],
        keys: {
            "C": { "item": "spectrum:bottomless_bundle" },
            "T": { "item": "mythicmetals:metallurgium_block" }
        },
        result: {
            "item": "dankstorage:6_to_7",
            "count": 1
        },
        advancement: "mythicmetals:metallurgium"
    });


});
