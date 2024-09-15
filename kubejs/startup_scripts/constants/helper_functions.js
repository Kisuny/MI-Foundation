//priority: 997

global.apiary1 = (flower, output) => {
    switch (output.length) {
        case 1:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
        case 2:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
        case 3:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
        case 4:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
        case 5:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
                .itemOut(output[4].id, output[4].chance)
        case 6:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
                .itemOut(output[4].id, output[4].chance)
                .itemOut(output[5].id, output[5].chance)
        case 7:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
                .itemOut(output[4].id, output[4].chance)
                .itemOut(output[5].id, output[5].chance)
                .itemOut(output[6].id, output[6].chance)
        case 8:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
                .itemOut(output[4].id, output[4].chance)
                .itemOut(output[5].id, output[5].chance)
                .itemOut(output[6].id, output[6].chance)
                .itemOut(output[7].id, output[7].chance)
        case 9:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut(output[0].id, output[0].chance)
                .itemOut(output[1].id, output[1].chance)
                .itemOut(output[2].id, output[2].chance)
                .itemOut(output[3].id, output[3].chance)
                .itemOut(output[4].id, output[4].chance)
                .itemOut(output[5].id, output[5].chance)
                .itemOut(output[6].id, output[6].chance)
                .itemOut(output[7].id, output[7].chance)
                .itemOut(output[8].id, output[8].chance)
        default:
            event.recipes.modern_industrialization.industrial_apiary(8, 100) //Mb, ticks
                .itemIn(Item.of('yttr:snare', '{Contents:{id:"minecraft:bee"}}').weakNBT(), 0.01)
                .itemIn(flower, 0.1)
                .itemOut('minecraft:honeycomb')

    }
}
