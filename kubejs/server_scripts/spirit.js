ServerEvents.recipes(event => {

    event.shapeless('9x spirit:soul_steel_ingot', ['spirit:soul_steel_block'])

    const spiritTools = [
        {
            tool_name: 'hoe',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "N": { "item": "minecraft:netherrack" },
            },
            pattern: [
                " II",
                " N ",
                " N "
            ]
        },
        {
            tool_name: 'axe',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "N": { "item": "minecraft:netherrack" },
            },
            pattern: [
                " II",
                " NI",
                " N "
            ]
        },
        {
            tool_name: 'shovel',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "N": { "item": "minecraft:netherrack" },
            },
            pattern: [
                " I ",
                " N ",
                " N "
            ]
        },
        {
            tool_name: 'pickaxe',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "N": { "item": "minecraft:netherrack" },
            },
            pattern: [
                "III",
                " N ",
                " N "
            ]
        },
        {
            tool_name: 'sword',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "N": { "item": "minecraft:netherrack" },
            },
            pattern: [
                " I ",
                " I ",
                " N "
            ]
        },
        {
            tool_name: 'bow',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "S": { "item": "minecraft:string" },
            },
            pattern: [
                " IS",
                "I S",
                " IS"
            ]
        },
        {
            tool_name: 'wand',
            keys: {
                "I": { "item": "spirit:soul_steel_ingot" },
                "S": { "item": "spirit:soul_glass" },
            },
            pattern: [
                "  S",
                " I ",
                "I  "
            ]
        }
    ]

    spiritTools.forEach(tool => {
        customPedestalCraft(event, {
            tier: 'advanced', time: 2400, topaz: 8, experience: 2.0, onyx: 2,
            pattern: tool.pattern,
            keys: tool.keys,
            result: {
                "item": `spirit:soul_steel_${tool.tool_name}`,
                "count": 1
            },
            advancement: "spectrum:midgame/collect_azurite"
        });
        event.remove({ output: `spirit:soul_steel_${tool.tool_name}` })
    })


});