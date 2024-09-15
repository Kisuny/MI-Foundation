// let ultrapureMaterials = [
//     'antimony',
//     'lead',
//     'nickel',
//     'aluminum',
//     'tin',
//     'tungsten',
//     'silver',
//     'uranium',
//     'iridium',
//     'titanium',
//     'platinum',
//     'chromium',
//     'beryllium',
//     // Mythic metals
//     'banglum',
//     'carmot',
//     'kyber',
//     'mythril',
//     'orichalcum',
//     'osmium',
//     'quadrillum',
//     'prometheum',
// ]

// ultrapureMaterials.forEach(material => {
//     MIMaterialEvents.modifyMaterial(material, event => {
//         event.builder
//             .customRegularPart('Ultrapure Cube', 'ultrapure')
//     });
// });

let modernPure = [
    {id: 'antimony',type:11},
    {id: 'lead',type:10},
    {id: 'nickel',type:3},
    {id: 'aluminum',type:6},
    {id: 'tin',type:9},
    {id: 'tungsten',type:7},
    {id: 'silver',type:1},
    {id: 'uranium',type:8},
    {id: 'iridium',type:12},
    {id: 'titanium',type:5},
    {id: 'platinum',type:4},
    {id: 'chromium',type:2},
    {id: 'beryllium',type:1},
    {id: 'desh',type:3},
    {id: 'ostrum',type:12},
    {id: 'calorite',type:10},

]

    // modernPure.forEach(element => {
    //     MIMaterialEvents.modifyMaterial(element.id, event => {
    //         event.builder
    //             .customRegularPart('Pure', `pure_${element.type}`)
    //             .customRegularPart('Small Bud', `small_${element.type}_bud`)
    //             .customRegularPart('Large Bud', `large_${element.type}_bud`)
    //             .customRegularPart('Cluster', `${element.type}_cluster`)
    //     });
    // })

MIMaterialEvents.modifyMaterial("adamantite", event => {
    event.builder
        .addParts('coil', 'ring','rod', 'bolt', 'gear', 'curved_plate', 'wire')
        .specialCasing('Adamantite Casing', 'adamantite_casing', 16.0)
        .pipeCasing(16.0)
        .cable('mv')
});

MIMaterialEvents.modifyMaterial("runite", event => {
    event.builder
        .addParts('ring', 'rod')
});

MIMaterialEvents.modifyMaterial("midas_gold", event => {
    event.builder
        .addParts('ring', 'rod','bolt','gear')
});

MIMaterialEvents.modifyMaterial("cupronickel", event => {
    event.builder
        .addParts('large_plate')
});


MIMaterialEvents.modifyMaterial("iron", event => {
    event.builder.barrel(16)
});

MIMaterialEvents.modifyMaterial("copper", event => {
    event.builder.barrel(8)
});

MIMaterialEvents.modifyMaterial("tin", event => {
    event.builder.barrel(8)
});


MIMaterialEvents.modifyMaterial("yttrium", event => {
    event.builder
        .addParts('plate');
});

['amethyst', 'topaz', 'citrine'].forEach(gem => {
    MIMaterialEvents.modifyMaterial(gem, event => {
        event.builder
            .customRegularPart('Lens','lens')
    })
});


MIMaterialEvents.modifyMaterial("emerald", event => {
    event.builder
        .customRegularPart('Mirror', 'mirror')
        .customRegularPart('Lens', 'lens');
});
