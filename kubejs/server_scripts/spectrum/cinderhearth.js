//priority: 0

const cinderhearth_craft = (event, args) => {
    event.custom({
        "type": "spectrum:cinderhearth",
        "ingredient": args.input,
        "results": args.output,
        "time": args.time || 100,
        "experience": args.experience || 5.0,
    })
};

ServerEvents.recipes(event => {
    // Book disenchanting
    cinderhearth_craft(event, {
        input: [
            { 'item': 'minecraft:enchanted_book' },
        ],
        output: [
            { 'item': 'vitalize:experience_cubed', 'count': 4, chance: 1.0 },
            { 'item': 'vitalize:experience_squared', 'count': 8, chance: 0.6 },
            { 'item': 'vitalize:experience', 'count': 12, chance: 0.4 },
        ],
        time: 200,
        experience: 100
    });

    const MIMaterials = [
        'antimony',
        'lead',
        'nickel',
        'aluminum',
        'tin',
        'tungsten',
        'silver',
        'uranium',
        'iridium',
        'titanium',
        'platinum',
        'chromium',
        'beryllium',
    ]
    MIMaterials.forEach(metal => {
        cinderhearth_craft(event, {
            input: [
                { 'item': `kubejs:pure_${metal}` },
            ],
            output: [
                { 'item': `modern_industrialization:${metal}_ingot`, 'count': 2 },
            ],
            time: 100
        });

    });
    let AdAastraMaterials = [
        'desh',
        'ostrum',
        'calorite'
    ]
    AdAastraMaterials.forEach(metal => {
        cinderhearth_craft(event, {
            input: [
                { 'item': `kubejs:pure_${metal}` },
            ],
            output: [
                { 'item': `ad_astra:${metal}_ingot`, 'count': 2 },
            ],
            time: 100
        });
    });
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:unobtainium_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:unobtainium', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:unobtainium', 'count': 2, chance: 0.5 },
            { 'item': 'kubejs:unobtainium_nugget', 'count': 6, chance: 0.60 },
        ]
    });
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:stormyx_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:stormyx_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:stormyx_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:stormyx_nugget', 'count': 6, chance: 0.60 }
        ]
    });
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:starrite_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:starrite', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:starrite', 'count': 2, chance: 0.5 },
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:runite_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:runite_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:runite_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:runite_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:quadrillum_ores' }
        ],
        output: [
            { 'item': 'mythicmetals:quadrillum_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:quadrillum_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:quadrillum_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:prometheum_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:prometheum_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:prometheum_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:prometheum_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:adamantite_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:adamantite_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:adamantite_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:adamantite_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:aquarium_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:aquarium_ingot', 'count': 4, chance: 1.0 },
            { 'item': 'mythicmetals:aquarium_nugget', 'count': 6, chance: 0.60 },
            { 'item': 'mythicmetals:aquarium_pearl', 'count': 1, chance: 0.01 },
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:banglum_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:banglum_ingot', 'count': 4, chance: 1.0 },
            { 'item': 'mythicmetals:banglum_nugget', 'count': 6, chance: 0.60 },
            { 'item': 'mythicmetals:banglum_chunk', 'count': 1, chance: 0.01 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:carmot_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:carmot_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:carmot_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:carmot_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:kyber_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:kyber_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:kyber_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:kyber_nugget', 'count': 6, chance: 0.60 }
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:morkite_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:morkite', 'count': 4, chance: 1.0 },
            { 'item': 'mythicmetals:morkite', 'count': 2, chance: 0.6 },
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:midas_gold_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:midas_gold_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:midas_gold_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:midas_gold_nugget', 'count': 6, chance: 0.60 },
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:orichalcum_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:orichalcum_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:orichalcum_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:orichalcum_nugget', 'count': 6, chance: 0.60 },
        ]
    }
    );
    cinderhearth_craft(event, {
        input: [
            { 'tag': 'mythicmetals:palladium_ores' },
        ],
        output: [
            { 'item': 'mythicmetals:palladium_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'mythicmetals:palladium_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'mythicmetals:palladium_nugget', 'count': 6, chance: 0.60 },
        ]
    }
    );
    cinderhearth_craft(event, {
        time: 200, experience: 0.5,
        input: [
            { 'item': 'kubejs:pure_terrasteel' },
        ],
        output: [
            { 'item': 'botania:terrasteel_nugget', 'count': 9, chance: 1.0 },
            { 'item': 'botania:terrasteel_nugget', 'count': 3, chance: 0.5 },
        ]
    });
    cinderhearth_craft(event, {
        time: 200, experience: 0.5,
        input: [
            { 'item': 'kibe:wither_proof_sand' },
        ],
        output: [
            { 'item': 'kibe:wither_proof_glass', 'count': 1, chance: 1.0 },
            { 'item': 'kibe:wither_proof_glass', 'count': 1, chance: 0.5 },
        ]
    });
    cinderhearth_craft(event, {
        time: 1200, experience: 4,
        input: [
            { 'tag': 'c:tungsten_ores' },
        ],
        output: [
            { 'item': 'modern_industrialization:tungsten_ingot', 'count': 3, chance: 1.0 },
            { 'item': 'modern_industrialization:tungsten_ingot', 'count': 2, chance: 0.5 },
            { 'item': 'modern_industrialization:tungsten_nugget', 'count': 6, chance: 0.60 },
        ]
    });
})
