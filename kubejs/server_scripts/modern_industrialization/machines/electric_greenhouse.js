let el_greenhouse_trees_old = [
    {
        name: "oak",
        extra_items : [
            ["minecraft:apple", 0.1],
            ["bewitchment:oak_bark", 0.3]
        ]
    },
    {
        name: "spruce",
        extra_items: [
            ["bewitchment:spruce_bark", 0.3]
        ]
    },
    {
        name: "birch",
        extra_items: [
            ["bewitchment:birch_bark", 0.3]
        ]
    },
    {
        name: "jungle",
        log_amount: 4,
        extra_items : [
            ["minecraft:cocoa_beans", 0.1]
        ]
    },
    {
        name: "acacia",
    },
    {
        name: "dark_oak",
        log_amount: 4,
        extra_items : [
            ["minecraft:apple", 0.1]
        ]
    },
    {
        name: "twisted",
        mod: "architects_palette"
    },
    {
        name: "juniper",
        mod: "bewitchment",
        extra_items: [
            ["bewitchment:juniper_bark", 0.3]
        ]
    },
    {
        name: "elder",
        mod: "bewitchment",
        extra_items: [
            ["bewitchment:elder_bark", 0.3]
        ]
    },
    {
        name: "dragons_blood",
        mod: "bewitchment"
    },
    {
        name: "cypress",
        mod: "bewitchment",
        extra_items: [
            ["bewitchment:cypress_bark", 0.3]
        ]
    },
    {
        name: "yew",
        log_amount: 4,
        mod: "bwplus"
    },
    {
        name: "cinnamon",
        mod: "expandeddelight"
    },
]

let el_greenhouse_crops_old = [
    {
        crop:"minecraft:sugar_cane",
        dirt:"minecraft:sand",
    },
    {
        crop:"minecraft:cactus",
        dirt:"minecraft:sand",
    },
    {
        crop:"neepmeat:whisper_wheat_seeds",
        extra_items: [
            ["3x neepmeat:whisper_wheat", 1],
            ["2x neepmeat:whisper_wheat_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:wheat_seeds",
        extra_items: [
            ["3x minecraft:wheat", 1],
            ["2x minecraft:wheat_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:beetroot_seeds",
        extra_items: [
            ["3x minecraft:beetroot", 1],
            ["2x minecraft:beetroot_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:melon_seeds",
        time: 300,
        extra_items: [
            ["4x minecraft:melon_slice", 1]
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:pumpkin_seeds",
        time: 300,
        extra_items: [
            ["minecraft:pumpkin", 1]
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:potato",
        extra_items: [
            ["minecraft:poisonous_potato", 0.1],
        ],
        output_amount: 4,
    },
    {
        crop:"neepmeat:flesh_potato",
        output_amount: 4,
    },
    {
        crop:"minecraft:carrot",
        output_amount: 4,
    },
    {
        crop:"minecraft:nether_wart",
        output_amount: 2,
        time:300,
        dirt: "minecraft:soul_sand",
        fluid: null,
    },
    {
        crop:"minecraft:cocoa_beans",
        dirt: "minecraft:jungle_log",
    },
    {
        crop:"minecraft:sweet_berries",
        fluid: null,
    },
    {
        crop:"minecraft:glow_berries",
        dirt: "minecraft:moss_block",
        fluid: null,
    },
    {
        crop:"minecraft:kelp",
        output_amount: 4,
        fluid: ["minecraft:water", 250],
    },
    {
        crop:"minecraft:seagrass",
        fluid: ["minecraft:water", 250],
    },
    {
        crop:"minecraft:sea_pickle",
        fluid: ["minecraft:water", 250],
    },
    {
        crop:"farmersdelight:rice",
        fluid: ["minecraft:water", 250],
        extra_items: [
            ["1x farmersdelight:straw", 1],
        ],
    },
    {
        crop:"farmersdelight:onion",
        output_amount: 4,
    },
    {
        crop:"farmersdelight:cabbage_seeds",
        extra_items: [
            ["2x farmersdelight:cabbage", 1],
            ["2x farmersdelight:cabbage_leaf", 1],
            ["1x farmersdelight:cabbage_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"farmersdelight:tomato_seeds",
        extra_items: [
            ["4x farmersdelight:tomato", 1],
            ["1x farmersdelight:tomato_seeds", 1],
            ["farmersdelight:rotten_tomato", 0.1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"minecraft:warped_fungus",
        dirt: "minecraft:netherrack",
        fluid: null,
    },
    {
        crop:"minecraft:crimson_fungus",
        dirt: "minecraft:netherrack",
        fluid: null,
    },
    {
        crop:"minecraft:weeping_vines",
        dirt: "minecraft:netherrack",
        fluid: null,
    },
    {
        crop:"minecraft:twisting_vines",
        dirt: "minecraft:netherrack",
        fluid: null,
    },
    {
        crop:"minecraft:moss_block",
        dirt: "minecraft:stone",
        extra_items: [
            ["2x minecraft:moss_carpet", 1],
        ],
    },
    {
        crop:"minecraft:grass",
        dirt: "minecraft:moss_block",
    },
    {
        crop:"minecraft:azalea",
        dirt: "minecraft:moss_block",
    },
    {
        crop:"minecraft:flowering_azalea",
        dirt: "minecraft:moss_block",
    },
    {
        crop:"minecraft:bamboo",
        output_amount: 8,
    },
    {
        crop:"minecraft:vine",
        dirt: "minecraft:stone",
    },
    {
        crop:"minecraft:brown_mushroom",
        dirt: "minecraft:mycelium",
        extra_items: [
            ["minecraft:mycelium", 0.1],
        ]
    },
    {
        crop:"minecraft:red_mushroom",
        dirt: "minecraft:mycelium",
        extra_items: [
            ["minecraft:mycelium", 0.1],
        ]
    },
    {
        crop:"bewitchment:garlic",
    },
    {
        crop:"bewitchment:witchberry",
    },
    {
        crop:"bewitchment:mandrake_seeds",
        extra_items: [
            ["4x bewitchment:mandrake_root", 1],
            ["bewitchment:mandrake_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"bewitchment:belladonna_seeds",
        extra_items: [
            ["4x bewitchment:belladonna", 1],
            ["bewitchment:belladonna_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"bewitchment:aconite_seeds",
        extra_items: [
            ["4x bewitchment:aconite", 1],
            ["bewitchment:aconite_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"expandeddelight:asparagus_seeds",
        extra_items: [
            ["2x expandeddelight:asparagus", 1],
            ["expandeddelight:asparagus_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"expandeddelight:chili_pepper_seeds",
        extra_items: [
            ["4x expandeddelight:chili_pepper", 1],
            ["expandeddelight:chili_pepper_seeds", 1],
        ],
        isSeedCrop: true,
    },
    {
        crop:"expandeddelight:sweet_potato",
        output_amount: 4,
    },
    {
        crop:"expandeddelight:peanut",
        output_amount: 4,
    },
]

function add_tree_craft_old(event, item) {
    let cost = item.cost ? item.cost : 32
    let time = item.time ? item.time : 300
    let mod = item.mod ? item.mod : "minecraft"
    let dirt = item.dirt ? item.dirt : "minecraft:dirt"
    let log_amount = item.log_amount ? item.log_amount : 2

    event = event.recipes.modern_industrialization.electric_greenhouse(cost, time)
        .itemIn(`${mod}:${item.name}_sapling`, 0)
        .itemIn(dirt, 0)
        .fluidIn('minecraft:water', 50)
        .itemOut(`${log_amount}x ${mod}:${item.name}_log`)
        .itemOut(`${mod}:${item.name}_sapling`)

    if (item.extra_items) {
        item.extra_items.forEach(element => {
            event = event.itemOut(`${element[0]}`, element[1])
        });
    }
}

function add_crop_craft_old(event, item) {
    let cost = item.cost ? item.cost : 16
    let time = item.time ? item.time : 200
    let dirt = item.dirt ? item.dirt : item.dirt === null ? null : "minecraft:dirt"
    let fluid = item.fluid ? item.fluid : item.fluid === null ? null : ["minecraft:water", 50]
    let output_amount = item.output_amount ? item.output_amount : 3

    event = event.recipes.modern_industrialization.electric_greenhouse(cost, time)
        .itemIn(item.crop, 0)
        .itemIn(dirt, 0)

    if (!item.isSeedCrop) {
        event = event.itemOut(`${output_amount}x ${item.crop}`)
    }

    if (fluid) {
        event = event.fluidIn(fluid[0], fluid[1])
    }

    if (item.extra_items) {
        item.extra_items.forEach(element => {
            event = event.itemOut(element[0], element[1])
        });
    }
}


ServerEvents.recipes(event => {

    el_greenhouse_trees_old.forEach(element => {
        add_tree_craft_old(event, element)
    });
    el_greenhouse_crops_old.forEach(element => {
        add_crop_craft_old(event, element)
    });
})
