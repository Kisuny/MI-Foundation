//priority: 0

const strmulti = (multiplier, string) => {
    let old_multi = parseInt(string.slice(0, string.indexOf('x')))
    if (Number.isInteger(old_multi)) {
        let new_multi = Math.ceil(old_multi * multiplier)
        let contents = string.slice(string.indexOf('x') + 2)
        let strong = `${new_multi}x ` + contents
        return strong
    } else {
        let new_multi = Math.ceil(multiplier)
        let strong = `${new_multi}x ` + string
        return strong
    }
};

const gaia = [
    { id: '2x botania:life_essence', chance: 0.01 },
    { id: 'modern_industrialization:durasteel_dust', chance: 0.05 },
    ];
const water = [
    { id: 'modern_industrialization:aquarium_dust', chance: 0.1 },
    { id: 'modern_industrialization:prometheum_dust', chance: 0.1 },
];
const fire = [
    { id: 'modern_industrialization:banglum_dust', chance: 0.1 },
    { id: 'modern_industrialization:palladium_dust', chance: 0.1 },
    // { id: 'modern_industrialization:adamantite_dust', chance: 0.1 },
    ];
const earth = [
     { id: 'spectrum:vegetal', chance: 0.2 },
     { id: 'modern_industrialization:orichalcum_dust', chance: 0.1 },
     { id: 'modern_industrialization:uranium_dust', chance: 0.1 },
    ];
const air = [
    { id: 'modern_industrialization:osmium_dust', chance: 0.1 },
    { id: 'modern_industrialization:mythril_dust', chance: 0.1 },    
];
const mana = [
    { id: 'botania:mana_powder', chance: 0.2 }, 
    { id: 'modern_industrialization:runite_dust', chance: 0.1 },
];
const redstone_root = [
    // { id: 'modern_industrialization:stormyx_dust', chance: 0.1 },
    { id: 'modern_industrialization:carmot_dust', chance: 0.1 },
    { id: 'spectrum:stratine_fragments', chance: 0.1 },
];
const pixie = [
    { id: '2x botania:pixie_dust', chance: 0.1 },
    { id: 'modern_industrialization:plutonium_dust', chance: 0.05},
];
const spring = [
    { id: 'modern_industrialization:midas_gold_dust', chance: 0.1 },
    { id: 'modern_industrialization:kyber_dust', chance: 0.1 },
    { id: 'modern_industrialization:neodymium_dust', chance: 0.1 },
];
const summer = [
    { id: 'modern_industrialization:chromium_dust', chance: 0.05},
    { id: 'modern_industrialization:titanium_dust', chance: 0.05},
];
const autumn = [
    { id: '2x spectrum:fiery_powder', chance: 0.2 },
    { id: 'modern_industrialization:platinum_dust', chance: 0.05},
    { id: 'modern_industrialization:beryllium_dust', chance: 0.05},
];
const winter = [
    { id: '2x spectrum:blizzard_powder', chance: 0.2 },
    { id: 'modern_industrialization:iridium_dust', chance: 0.05},
    { id: '4x ad_astra:ice_shard', chance: 0.3},
];
const lust = [
    { id: 'modern_industrialization:tungsten_dust', chance: 0.05},
    { id: '2x minecraft:ender_pearl', chance: 0.1},
];
const gluttony = [
    { id: '2x spectrum:midnight_chip', chance: 0.1 },
    { id: 'modern_industrialization:quadrillum_dust', chance: 0.05},
];
const greed = [
    { id: '2x spectrum:bismuth_flake', chance: 0.2 },
    { id: 'modern_industrialization:celestium_dust', chance: 0.05 },
];
const sloth = [
    { id: '2x spectrum:jade_vine_petals', chance: 0.2 },
    { id: 'modern_industrialization:hallowed_dust', chance: 0.05 },
];
const pride = [
    { id: '2x spectrum:bedrock_dust', chance: 0.1 },
    { id: 'modern_industrialization:ostrum_dust', chance: 0.1 },
];
const envy = [
    { id: 'modern_industrialization:desh_dust', chance: 0.1 },
    { id: 'spectrum:paltaeria_fragments', chance: 0.1 },
];
const wrath = [
    { id: '2x neepmeat:blood_bubble', chance: 0.4 },
    { id: 'modern_industrialization:calorite_dust', chance: 0.1 },
];

const vanillaFlowers = [
    'minecraft:azure_bluet',
    'minecraft:allium',
    'minecraft:blue_orchid',
    'minecraft:poppy',
    'minecraft:pink_tulip',
    'minecraft:white_tulip',
    'minecraft:orange_tulip',
    'minecraft:red_tulip',
    'minecraft:oxeye_daisy',
    'minecraft:cornflower',
    'minecraft:lily_of_the_valley',
    'minecraft:dandelion',
    'minecraft:sunflower',
    'minecraft:lilac',
    'minecraft:peony',
    'minecraft:rose_bush'
]


const bees = [
    { id: 'kubejs:bee', life: 0.02, comb_multi: 1, flower_life_multi: 1 ,byproduct_multi: 1},
    { id: 'kubejs:necrodermal_affected_bee', life: 0.1, comb_multi: 6, flower_life_multi: 1,  byproduct_multi: 2},
    { id: 'kubejs:nullodermal_affected_bee', life: 0.1, comb_multi: 2, flower_life_multi: 1, byproduct_multi: 6}
]
const beehemoths = [
    { id: 'kubejs:beehemoth', life: 0.01, comb_multi: 2, flower_life_multi: 0.8, byproduct_multi: 2},
    { id: 'kubejs:necrodermal_affected_beehemoth', life: 0.05, comb_multi: 8, flower_life_multi: 0.8, byproduct_multi: 4},
    { id: 'kubejs:nullodermal_affected_beehemoth', life: 0.05, comb_multi: 4, flower_life_multi: 0.8, byproduct_multi: 8}
]


function apiary(event, bee, flower, energy, time, life, combs, byproducts) {
    event = event.recipes.modern_industrialization.industrial_apiary(energy, time).itemIn(bee.id,bee.life).itemIn(flower, life*(bee.flower_life_multi))
    console.log(bee.flower_life_multi)

    combs.forEach(item => {
        event = event.itemOut(strmulti(bee.comb_multi,item.id),item.chance)
    })

    if (byproducts != undefined) {
        byproducts.main.forEach(item => {
            event = event.itemOut(strmulti(bee.byproduct_multi,item.id),item.chance)
        })
    }
}

function big_apiary(event, bee, flower, energy, time, life, combs, byproducts) {
    event = event.recipes.modern_industrialization.large_apiary(Math.ceil(0.8*energy), Math.ceil(0.6*time))
        .itemIn(bee.id,0.5*bee.life)
        .itemIn(flower,(0.6*life)*bee.flower_life_multi)
        .fluidIn('the_bumblezone:honey_fluid_still',200)
        .fluidIn('modern_industrialization:bee_air',800)

    combs.forEach(item => {
        event = event.itemOut(strmulti(1.5*bee.comb_multi,item.id),item.chance)
    })

    if (byproducts != undefined) {
        if (byproducts.main.length != 0) {
            byproducts.main.forEach(item => {
                event = event.itemOut(strmulti(bee.byproduct_multi, item.id), up_to_one(1.5, item.chance))
            })
        }
        if (byproducts.bonus.length != 0) {
            byproducts.bonus.forEach(item => {
                event = event.itemOut(strmulti(bee.byproduct_multi, item.id), up_to_one(1.5, item.chance))
            })
        }
    }
}

const comb_outputs = {
    light_gray: [
        { id: 'modern_industrialization:manganese_tiny_dust', chance: 0.4 },
        { id: 'modern_industrialization:antimony_tiny_dust', chance: 0.4 }
    ],
    purple: [
        { id: 'modern_industrialization:mozanite_tiny_dust', chance: 0.2 },
        { id: 'modern_industrialization:kyber_tiny_dust', chance: 0.3 }
    ],
    lime: [
        { id: 'modern_industrialization:uranium_tiny_dust', chance: 0.1 },
        { id: 'modern_industrialization:emerald_tiny_dust', chance: 0.5 }
    ],
    red: [
        { id: 'modern_industrialization:redstone_tiny_dust', chance: 1 },
        { id: 'modern_industrialization:adamantite_tiny_dust', chance: 0.3 }
    ],
    magenta: [
        { id: 'modern_industrialization:titanium_tiny_dust', chance: 0.4 },
        { id: 'modern_industrialization:stormyx_tiny_dust', chance: 0.3 }
    ],
    white: [
        { id: 'modern_industrialization:iron_tiny_dust', chance: 0.8 },
        { id: 'modern_industrialization:quartz_tiny_dust', chance: 0.6 }
    ],
    orange: [
        { id: 'modern_industrialization:copper_tiny_dust', chance: 1 },
        { id: 'modern_industrialization:palladium_tiny_dust', chance: 0.3 }
    ],
    yellow: [
        { id: 'modern_industrialization:gold_tiny_dust', chance: 0.5 },
        { id: 'modern_industrialization:sulfur_tiny_dust', chance: 0.8 }
    ],
    pink: [
        { id: 'modern_industrialization:chromium_tiny_dust', chance: 0.3 },
        { id: 'modern_industrialization:ostrum_tiny_dust', chance: 0.2 }
    ],
    light_blue: [
        { id: 'modern_industrialization:aluminum_tiny_dust', chance: 0.6 },
        { id: 'modern_industrialization:silver_tiny_dust', chance: 0.6 }
    ],
    green: [
        { id: 'modern_industrialization:neodymium_tiny_dust', chance: 0.4 },
        { id: 'modern_industrialization:prometheum_tiny_dust', chance: 0.3 }
    ],
    gray: [
        { id: 'modern_industrialization:silicon_tiny_dust', chance: 0.6 },
        { id: 'modern_industrialization:osmium_tiny_dust', chance: 0.1 }
    ],
    cyan: [
        { id: 'modern_industrialization:diamond_tiny_dust', chance: 0.3 },
        { id: 'modern_industrialization:mythril_tiny_dust', chance: 0.2 }
    ],
    brown: [
        { id: 'modern_industrialization:bauxite_tiny_dust', chance: 0.9 },
        { id: 'modern_industrialization:banglum_tiny_dust', chance: 0.5 }
    ],
    black: [
        { id: 'modern_industrialization:coal_tiny_dust', chance: 1 },
        { id: 'modern_industrialization:quadrillum_tiny_dust', chance: 0.2 }
    ],
    blue: [
        { id: 'modern_industrialization:sodium_tiny_dust', chance: 0.8 },
        { id: 'modern_industrialization:aquarium_tiny_dust', chance: 0.4 }
    ]
}

const botania_advanced = [
    {
        name: 'botania:spectrolus',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:blue_comb', chance: 1 },
            { id: '2x modern_industrialization:white_comb', chance: 1 },
            { id: '2x modern_industrialization:green_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(winter),
            bonus: [].concat(air)
        }
    },
    {
        name: 'botania:pure_daisy',
        energy: 32,
        time: 600,
        life: 0.1,
        combs: [
            { id: '4x modern_industrialization:white_comb', chance: 1 }
        ]
    },
    {
        name: 'botania:manastar',
        energy: 32,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: 'modern_industrialization:light_blue_comb', chance: 1 },
            { id: 'modern_industrialization:cyan_comb', chance: 1 }
        ]
    },
    {
        name: 'botania:hydroangeas',
        energy: 32,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:blue_comb', chance: 1 },
            { id: '2x modern_industrialization:cyan_comb', chance: 1 },
        ]
    },
    {
        name: 'botania:endoflame',
        energy: 32,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: 'modern_industrialization:light_gray_comb', chance: 1 },
        ]
    },
    {
        name: 'botania:thermalily',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
            { id: 'modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth),
            bonus: [].concat(fire)
        }
    },
    {
        name: 'botania:marimorphosis',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
            { id: 'modern_industrialization:gray_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth, redstone_root),
            bonus: [].concat(fire)
        }
    },
    {
        name: 'botania:medumone',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:gray_comb', chance: 1 },
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth, redstone_root),
            bonus: []
        }
        
    },
    {
        name: 'botania:daffomill',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:white_comb', chance: 1 },
            { id: 'modern_industrialization:brown_comb', chance: 1 },
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(air),
            bonus: []
        }
    },
    {
        name: 'botania:clayconia',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:cyan_comb', chance: 1 },
            { id: 'modern_industrialization:gray_comb', chance: 1 },
            { id: '2x modern_industrialization:light_gray_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth),
            bonus: []
        }
    },
    {
        name: 'botania:jiyuulia',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:light_gray_comb', chance: 1 },
            { id: 'modern_industrialization:purple_comb', chance: 1 },
            { id: '2x modern_industrialization:pink_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(water),
            bonus: [].concat(air)
        }
    },
    {
        name: 'botania:rosa_arcana',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:lime_comb', chance: 1 },
            { id: '2x modern_industrialization:purple_comb', chance: 1 },
            { id: '2x modern_industrialization:pink_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(mana),
            bonus: []
        }
    },
    {
        name: 'botania:bellethorn',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:cyan_comb', chance: 1 },
            { id: '3x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:hopperhock',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:light_gray_comb', chance: 1 },
            { id: '2x modern_industrialization:gray_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:tangleberrie',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:light_gray_comb', chance: 1 },
            { id: 'modern_industrialization:gray_comb', chance: 1 },
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(air),
            bonus: [].concat(earth)
        }
    },
    {
        name: 'botania:solegnolia',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:blue_comb', chance: 1 },
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:rannuncarpus',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
            { id: '2x modern_industrialization:orange_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth, redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:bergamute',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:green_comb', chance: 1 },
            { id: 'modern_industrialization:orange_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:dreadthorn',
        energy: 64,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
            { id: '3x modern_industrialization:black_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(redstone_root),
            bonus: []
        }
    },
    {
        name: 'botania:vinculotus',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: '2x modern_industrialization:purple_comb', chance: 1 },
            { id: '2x modern_industrialization:black_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(water, sloth),
            bonus: [].concat(lust, redstone_root)
        }
    },
    {
        name: 'botania:loonium',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:gray_comb', chance: 1 },
            { id: '4x modern_industrialization:green_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(sloth, gluttony, redstone_root),
            bonus: [].concat(envy, pixie)
        }
    },
    {
        name: 'botania:spectranthemum',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:cyan_comb', chance: 1 },
            { id: '2x modern_industrialization:light_gray_comb', chance: 1 },
            { id: '2x modern_industrialization:white_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(envy, water),
            bonus: [].concat(redstone_root, pixie)
        }
    },
    {
        name: 'botania:pollidisiac',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:orange_comb', chance: 1 },
            { id: '2x modern_industrialization:pink_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(lust),
            bonus: [].concat(fire)
        }
    },
    {
        name: 'botania:bubbell',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:blue_comb', chance: 1 },
            { id: '2x modern_industrialization:light_blue_comb', chance: 1 },
            { id: '2x modern_industrialization:cyan_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(water, summer),
            bonus: [].concat(pixie) 
        }
    },
    {
        name: 'botania:labellia',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:black_comb', chance: 1 },
            { id: 'modern_industrialization:white_comb', chance: 1 },
            { id: 'modern_industrialization:blue_comb', chance: 1 },
            { id: '2x modern_industrialization:yellow_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(autumn, redstone_root),
            bonus: [].concat(pixie)
        }
    },
    {
        name: 'botania:orechid_ignem',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:pink_comb', chance: 1 },
            { id: '2x modern_industrialization:white_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(pride, redstone_root),
            bonus: [].concat(greed, pixie)
        }
    },
    {
        name: 'botania:agricarnation',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: '2x modern_industrialization:lime_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(spring),
            bonus: [].concat(redstone_root)
        }
    },
    {
        name: 'botania:exoflame',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:light_gray_comb', chance: 1 },
            { id: 'modern_industrialization:gray_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(fire),
            bonus: [].concat(summer)
        }
    },
    {
        name: 'botania:fallen_kanade',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:orange_comb', chance: 1 },
            { id: '2x modern_industrialization:yellow_comb', chance: 1 },
            { id: '2x modern_industrialization:white_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(spring),
            bonus: []
        }
    },
    {
        name: 'botania:orechid',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
            { id: '2x modern_industrialization:gray_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(greed, redstone_root),
            bonus: [].concat(pride)
        }
    },
    {
        name: 'botania:jaded_amaranthus',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: 'modern_industrialization:lime_comb', chance: 1 },
            { id: 'modern_industrialization:purple_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(spring),
            bonus: [].concat(redstone_root)
        }
    },
    {
        name: 'botania:tigerseye',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:lime_comb', chance: 1 },
            { id: 'modern_industrialization:orange_comb', chance: 1 },
            { id: 'modern_industrialization:brown_comb', chance: 1 },
            { id: 'modern_industrialization:yellow_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(autumn),
            bonus: []
        }
    },
    {
        name: 'botania:shulk_me_not',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:light_gray_comb', chance: 1 },
            { id: '2x modern_industrialization:magenta_comb', chance: 1 },
            { id: '2x modern_industrialization:purple_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(gaia, envy),
            bonus: [].concat(wrath)
        }
    },
    {
        name: 'botania:heisei_dream',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:pink_comb', chance: 1 },
            { id: 'modern_industrialization:purple_comb', chance: 1 },
            { id: '2x modern_industrialization:magenta_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth, pixie),
            bonus: [].concat(pride)
        }
    },
    {
        name: 'botania:rafflowsia',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:black_comb', chance: 1 },
            { id: '2x modern_industrialization:purple_comb', chance: 1 },
            { id: '2x modern_industrialization:green_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(earth, pixie),
            bonus: [].concat(pride)
        }
    },
    {
        name: 'botania:narslimmus',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:black_comb', chance: 1 },
            { id: '2x modern_industrialization:green_comb', chance: 1 },
            { id: '2x modern_industrialization:lime_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(summer),
            bonus: [].concat(water)
        }
    },
    {
        name: 'botania:munchdew',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:green_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
            { id: '2x modern_industrialization:lime_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(gluttony),
            bonus: []
        }
    },
    {
        name: 'botania:entropinnyum',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:white_comb', chance: 1 },
            { id: '2x modern_industrialization:gray_comb', chance: 1 },
            { id: '2x modern_industrialization:red_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(wrath),
            bonus: [].concat(fire)
        }
    },
    {
        name: 'botania:kekimurus',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: '2x modern_industrialization:brown_comb', chance: 1 },
            { id: '2x modern_industrialization:orange_comb', chance: 1 },
            { id: '2x modern_industrialization:white_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(gluttony),
            bonus: [].concat(pixie)
        }
    },
    {
        name: 'botania:gourmaryllis',
        energy: 128,
        time: 600,
        life: 0.1,
        combs: [
            { id: 'modern_industrialization:red_comb', chance: 1 },
            { id: '2x modern_industrialization:yellow_comb', chance: 1 },
            { id: '2x modern_industrialization:light_gray_comb', chance: 1 },
        ],
        byproducts: {
            main: [].concat(fire),
            bonus: [].concat(summer)
        }
    }
];

ServerEvents.recipes(event => {
    bees.forEach(bee => {
        botania_advanced.forEach(flower => {
            apiary(event,bee,flower.name, flower.energy, flower.time, flower.life, flower.combs, flower.byproducts)
            big_apiary(event,bee,flower.name, flower.energy, flower.time, flower.life, flower.combs, flower.byproducts)
        });
        vanillaFlowers.forEach(flower => {
            apiary(event,bee,flower,8,100,0.3, [{ id: 'minecraft:honeycomb', chance: 1 }])
            big_apiary(event,bee,flower,8,100,0.3, [{ id: 'minecraft:honeycomb', chance: 1 }])
        })
        global.dyeColors.forEach(color => {
            apiary(event,bee,`botania:${color.name}_mystical_flower`, 8, 100, 0.4, [{ id: `modern_industrialization:${color.name}_comb`, chance: 1 }])
            big_apiary(event,bee,`botania:${color.name}_mystical_flower`, 8, 100, 0.4, [{ id: `modern_industrialization:${color.name}_comb`, chance: 1 }])
        })
    })
    beehemoths.forEach(bee => {
        botania_advanced.forEach(flower => {
            big_apiary(event,bee,flower.name, flower.energy, flower.time, flower.life, flower.combs, flower.byproducts)
        });
        vanillaFlowers.forEach(flower => {
            big_apiary(event,bee,flower,8,200,0.3, [{ id: 'minecraft:honeycomb', chance: 1 }])
        })
        global.dyeColors.forEach(color => {
            big_apiary(event,bee,`botania:${color.name}_mystical_flower`, 16, 200, 0.4, [{ id: `modern_industrialization:${color.name}_comb`, chance: 1 }])
        })
    })
    // botania_advanced.forEach(flower => {
    //     big_apiary(event,{ id: 'kubejs:bee_queen', life: 0, comb_multi: 3, byproduct_multi: 3},flower.name, flower.energy, flower.time, flower.life, flower.combs, flower.byproducts)
    // });
    // vanillaFlowers.forEach(flower => {
    //     big_apiary(event,{ id: 'kubejs:bee_queen', life: 0, comb_multi: 3, byproduct_multi: 3},flower,8,100,0.3, [{ id: 'minecraft:honeycomb', chance: 1 }])
    // })
    // global.dyeColors.forEach(color => {
    //     big_apiary(event,{ id: 'kubejs:bee_queen', life: 0, comb_multi: 3, byproduct_multi: 3},`botania:${color.name}_mystical_flower`, 8, 100, 0.4, [{ id: `modern_industrialization:${color.name}_comb`, chance: 1 }])
    // })
    event.recipes.modern_industrialization.large_apiary(32 , 400) //Eu, ticks
        .itemIn('kubejs:bee_queen',0)
        .itemIn('3x spectrum:vegetal')
        .fluidIn('the_bumblezone:royal_jelly_fluid_still',10)
        .fluidIn('modern_industrialization:oxygen',150)
        .itemOut('kubejs:bee')
        .itemOut('kubejs:bee',0.5)
        .itemOut('kubejs:necrodermal_affected_bee',0.02)
        .itemOut('kubejs:nullodermal_affected_bee',0.02)
    event.recipes.modern_industrialization.large_apiary(64 , 600) //Eu, ticks
        .itemIn('kubejs:bee_queen',0)
        .itemIn('7x spectrum:vegetal')
        .fluidIn('the_bumblezone:royal_jelly_fluid_still',25)
        .fluidIn('modern_industrialization:sugar_solution',200)
        .itemOut('kubejs:beehemoth')
        .itemOut('kubejs:beehemoth',0.5)
        .itemOut('kubejs:necrodermal_affected_beehemoth',0.02)
        .itemOut('kubejs:nullodermal_affected_beehemoth',0.02)
})
