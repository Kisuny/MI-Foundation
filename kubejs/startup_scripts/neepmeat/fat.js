
const ore_fats = [
    {
        id: 'modern_industrialization',
        list:
        [
            'antimony',
            'nickel',
            'uranium',
            'lead',
            'silver',
            'platinum',
            'titanium',
            'tungsten',
            'iridium',
            'tin'
        ],
        rendering_yield: 1.5,
        trommel_yield: 2
    },
    {
        id: 'mythicmetals',
        list:
        [
            'adamantite',
            'aquarium',
            'banglum',
            'carmot',
            'kyber',
            'midas',
            'mythril',
            'orichalcum',
            'palladium',
            'prometheum',
            'quadrillum',
            'runite',
            'stormyx',
            'osmium'
        ],
        rendering_yield: 1.5,
        trommel_yield: 1.5
    },
    {
        id: 'ad_astra',
        list:
        [
            'desh',
            'ostrum',
            'calorite'
        ],
        rendering_yield: 2,
        trommel_yield: 2
    },
    {
        id: 'minecraft',
        list:
        [
            'iron',
            'copper',
            'gold'
        ],
        rendering_yield: 1.5 ,
        trommel_yield: 2
    }

]

const spec_fats = [ 'azurite', 'malachite', 'bloodstone' ]

// spec_fats.forEach(item => {
//     JsonIO.write(`kubejs/data/neepmeat/ore_fat/overrides/${item}_fat.json`,
//         {
//             "output": `spectrum:refined_${item}`,
//             "dirty_fat_name": `item_fat.neepmeat.${item}.dirty`,
//             "clean_fat_name": `item_fat.neepmeat.${item}.clean`,
//             "inputs": [
//                 `spectrum:raw_${item}`
//             ],
//             "rendering_yield": 1,
//             "trommel_yield": 1.2
//         }
//     )
// })

// ore_fats.forEach(mod => {
//     mod.list.forEach(ore => {
//         JsonIO.write(`kubejs/data/neepmeat/ore_fat/overrides/${ore}_fat.json`,
//             {
//                 "output": `${mod.id}:${ore}_ingot`,
//                 "dirty_fat_name": `ore_fat.neepmeat.${ore}.dirty`,
//                 "clean_fat_name": `ore_fat.neepmeat.${ore}.clean`,
//                 "inputs": [
//                     `${mod.id}:raw_${ore}`
//                 ],
//                 "rendering_yield": 1.5,
//                 "trommel_yield": 2
//             }
//         )
//     })

// })


// global.dyeColors.forEach(color => {
//     JsonIO.write(`kubejs/data/neepmeat/ore_fat/overrides/${color.name}_fat.json`,
//         {
//             "output": `spectrum:${color.name}_pigment`,
//             "dirty_fat_name": `ore_fat.neepmeat.${color.name}_pigment.dirty`,
//             "clean_fat_name": `ore_fat.neepmeat.${color.name}_pigment.clean`,
//             "inputs": [
//                 `spectrum:${color.name}_log`,
//                 `spectrum:${color.name}_leaves`,
//                 `spectrum:${color.name}_sapling`,
//             ],
//             "rendering_yield": 1,
//             "trommel_yield": 1.5
//         }
//     )
// })
