//priority: 0
function up_to_one(number,coeff) {
    if (number * coeff <= 1) {
        return number * coeff
    }
    else return 1;
}

// const drill_prop = [
//     {
//         name: 'durasteel_reinforced',
//         energy: 1.2,
//         duration: 1,
//         stiffness: 0.125,
//         output_chance: 1,
//         output_multi: 1
//     },
//     {
//         name: 'azurite_plated',
//         energy: 0.8,
//         duration: 1.2,
//         stiffness: 0.8,
//         output_chance: 1.4,
//         output_multi: 2.5
//     },
//     {
//         name: 'malachite_enhanced',
//         energy: 0.6,
//         duration: 1,
//         stiffness: 1,
//         output_chance: 2.4,
//         output_multi: 4.5
//     }
// ]

const overworld_drilling = [
    {
        drill: 'aluminum_drill',
        stiffness: 0.12,
        energy: 8,
        time: 200,
        output: {id: 'modern_industrialization:crude_oil' ,amount:500}
    },
    {
        drill: 'stainless_steel_drill',
        stiffness: 0.06,
        energy: 32,
        time: 200,
        output: {id: 'modern_industrialization:shale_oil',amount:4000}
    },
    {
        drill: 'copper_drill',
        stiffness: 0.06,
        energy: 2,
        time: 100,
        output: {id: 'minecraft:water',amount:16000}
    }
]

const nether_drilling = [
    {
        drill: 'gold_drill',
        stiffness: 0.36,
        energy: 16,
        time: 100,
        output: {id: 'minecraft:lava',amount:4000}
    }
]

// const strmulti_with_cap = (multiplier, string) => {
//     let old_multi = parseInt(string.slice(0, string.indexOf('x')))
//     if (Number.isInteger(old_multi)) {
//         let new_multi = Math.floor(old_multi * multiplier)
//         let contents = string.slice(string.indexOf('x') + 2)
//         let strong ='';
//         if (new_multi <= 64) {
//             strong = `${new_multi}x ` + contents;
//         } else {
//             strong = '64x '+ contents
//         }
//         return strong
//     } else {
//         let new_multi = Math.floor(multiplier)
//         let strong = `${new_multi}x ` + string
//         return strong
//     }
// };
ServerEvents.recipes(event => {
    // Overworld Drilling
    event.remove({ id: 'modern_industrialization:oil/crude_oil' })
    event.remove({ id: 'modern_industrialization:oil/shale_oil' })
    event.remove({ id: 'modern_industrialization:oil/water' })

    overworld_drilling.forEach(type => {
        event.recipes.modern_industrialization.oil_drilling_rig(type.energy, type.time) //Eu, ticks
            .itemIn(`modern_industrialization:${type.drill}`, type.stiffness)
            .fluidOut(`${type.output.id}`,type.output.amount)
            .dimension('minecraft:overworld')
        drill_prop.forEach(drill => {
            event.recipes.modern_industrialization.oil_drilling_rig(type.energy*drill.energy, Math.ceil(type.time*drill.duration)) //Eu, ticks
                .itemIn(`kubejs:${drill.name}_${type.drill}`, type.stiffness*drill.stiffness)
                .fluidOut(`${type.output.id}`,Math.floor(type.output.amount*drill.output_multi))
                .dimension('minecraft:overworld')

        })
    })
    nether_drilling.forEach(type => {
        event.recipes.modern_industrialization.oil_drilling_rig(type.energy, type.time) //Eu, ticks
            .itemIn(`modern_industrialization:${type.drill}`, type.stiffness)
            .fluidOut(`${type.output.id}`,type.output.amount)
            .dimension('minecraft:the_nether')
        drill_prop.forEach(drill => {
            event.recipes.modern_industrialization.oil_drilling_rig(type.energy*drill.energy, Math.ceil(type.time*drill.duration)) //Eu, ticks
                .itemIn(`kubejs:${drill.name}_${type.drill}`, type.stiffness*drill.stiffness)
                .fluidOut(`${type.output.id}`,Math.floor(type.output.amount*drill.output_multi))
                .dimension('minecraft:the_nether')

        })
    })
})
