//priority: 0
function up_to_one(number,coeff) {
    if (number * coeff <= 1) {
        return number * coeff
    }
    else return 1;
}

let enhancements = [
    {
        name: 'neutronium_augmented',
        energy: 4,
        duration: 0.5,
        stiffness: 0,
        output_chance: 1,
        output_multi: 1
    },
    {
        name: 'durasteel_reinforced',
        energy: 1.2,
        duration: 1.2,
        stiffness: 0.05,
        output_chance: 1,
        output_multi: 1
    },
    {
        name: 'azurite_plated',
        energy: 0.8,
        duration: 1.2,
        stiffness: 0.8,
        output_chance: 1.5,
        output_multi: 2.5
    },
    {
        name: 'malachite_enhanced',
        energy: 0.5,
        duration: 0.5,
        stiffness: 0.5,
        output_chance: 2.5,
        output_multi: 4.5
    },
]

const planet_mining_data = [
    {
        id: 'ad_astra:moon',
        drill: 'modern_industrialization:steel_drill',
        basic: {
            energy: 32,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: '8x ad_astra:moon_sand', chance: 0.6 },
                { id: '4x ad_astra:moon_cobblestone', chance: 0.3 }
            ]
        },
        tuned: {
            energy: 48,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'ad_astra:moon_desh_ore', chance: 0.4 },
                { id: 'ad_astra:moon_iron_ore', chance: 0.5 },
                { id: 'ad_astra:moon_ice_shard_ore', chance: 0.6 }
            ]
        },
        advanced: {
            energy: 64,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'ad_astra:moon_desh_ore', chance: 0.95 },
                { id: 'ad_astra:moon_iron_ore', chance: 0.95 },
                { id: 'ad_astra:moon_ice_shard_ore', chance: 0.95 },
                { id: 'spectrum:moonstone_ore', chance: 0.4 },
                { id: 'mythicmetals:starrite_ore', chance: 0.6 },
                { id: 'mythicmetals:quadrillum_ore', chance: 0.4 },
                { id: 'spectrum:paltaeria_ore', chance: 0.2 },
                { id: 'spectrum:onyx_ore', chance: 0.6 },
            ]
        },
    },
    {
        id: 'ad_astra:mars',
        drill: 'modern_industrialization:aluminum_drill',
        basic: {
            energy: 64,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: '6x ad_astra:mars_sand', chance: 0.4 },
                { id: '2x ae2:sky_stone_block', chance: 0.1 },
                { id: '4x ad_astra:mars_cobblestone', chance: 0.5 }
            ]
        },
        tuned: {
            energy: 48,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'ad_astra:mars_ostrum_ore', chance: 0.35 },
                { id: 'ad_astra:mars_iron_ore', chance: 0.4 },
                { id: 'ad_astra:mars_diamond_ore', chance: 0.2 },
                { id: 'ad_astra:mars_ice_shard_ore', chance: 0.4 }
            ]
        },
        advanced: {
            energy: 64,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'ad_astra:mars_ostrum_ore', chance: 0.95 },
                { id: 'ad_astra:mars_iron_ore', chance: 0.95 },
                { id: 'ad_astra:mars_diamond_ore', chance: 0.95 },
                { id: 'ad_astra:mars_ice_shard_ore', chance: 0.95 },
                { id: 'mythicmetals:prometheum_ore', chance: 0.5 },
                { id: 'mythicmetals:mythril_ore', chance: 0.4 },
                { id: 'spectrum:malachite_ore', chance: 0.3 },
                { id: 'mythicmetals:orichalcum_ore', chance: 0.5 },
                { id: 'spectrum:topaz_ore', chance: 0.6 },
            ]
        },
    },
    {
        id: 'ad_astra:mercury',
        drill: 'modern_industrialization:stainless_steel_drill',
        basic: {
            energy: 128,
            stiffness: 0.18 ,
            time: 600,
            output: [
                { id: '4x ae2:sky_stone_block', chance: 0.4 },
                { id: '13x ad_astra:mercury_cobblestone', chance: 0.7 },
                { id: 'modern_industrialization:mozanite_ore', chance: 0.3 }
            ]
        },
        tuned: {
            energy: 192,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'ad_astra:mercury_iron_ore', chance: 0.9 },
                { id: '3x minecraft:basalt', chance: 0.7 },
                { id: '2x minecraft:blackstone', chance: 0.6 },
                { id: 'modern_industrialization:mozanite_ore', chance: 0.5 },
                { id: 'modern_industrialization:iridium_ore', chance: 0.4 },
                { id: 'modern_industrialization:uranium_ore', chance: 0.3 }
            ]
        },
        advanced: {
            energy: 256,
            stiffness: 0.32,
            time: 600,
            output: [
                { id: '2x ad_astra:mercury_iron_ore', chance: 0.95 },
                { id: 'modern_industrialization:mozanite_ore', chance: 0.5 },
                { id: 'modern_industrialization:iridium_ore', chance: 0.4 },
                { id: 'modern_industrialization:uranium_ore', chance: 0.3 },
                { id: 'modern_industrialization:platinum_ore', chance: 0.4 },
                { id: 'mythicmetals:adamantite_ore', chance: 0.8 },
                { id: 'mythicmetals:stormyx_ore', chance: 0.7 },
                { id: 'mythicmetals:palladium_ore', chance: 0.5 },
                { id: 'mythicmetals:banglum_ore', chance: 0.8 },
                { id: 'spectrum:stratine_ore', chance: 0.7 },
                { id: 'spectrum:amethyst_ore', chance: 0.6 },
            ]
        },
    },
    {
        id: 'ad_astra:venus',
        drill: 'modern_industrialization:stainless_steel_drill',
        basic: {
            energy: 128,
            stiffness: 0.18 ,
            time: 600,
            output: [
                { id: '4x ad_astra:venus_sand', chance: 0.95 },
                { id: '3x ad_astra:venus_cobblestone', chance: 0.95 },
                { id: '3x ad_astra:venus_cobblestone', chance: 0.95 },
                { id: '2x ae2:sky_stone_block', chance: 0.3 },
            ]
        },
        tuned: {
            energy: 192,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'ad_astra:venus_coal_ore', chance: 0.7 },
                { id: 'ad_astra:venus_gold_ore', chance: 0.4 },
                { id: 'ad_astra:venus_diamond_ore', chance: 0.1 },
                { id: 'ad_astra:venus_calorite_ore', chance: 0.2 },
                { id: 'modern_industrialization:vanadinite_ore', chance: 0.4 }
            ]
        },
        advanced: {
            energy: 256,
            stiffness: 0.32,
            time: 600,
            output: [
                { id: 'ad_astra:venus_coal_ore', chance: 0.95 },
                { id: 'ad_astra:venus_gold_ore', chance: 0.8 },
                { id: 'ad_astra:venus_diamond_ore', chance: 0.7 },
                { id: 'ad_astra:venus_calorite_ore', chance: 0.5 },
                { id: 'modern_industrialization:vanadinite_ore', chance: 0.4 },
                { id: 'modern_industrialization:roquesite_ore', chance: 0.3 },
                { id: 'mythicmetals:carmot_ore', chance: 0.8 },
                { id: 'mythicmetals:adamantite_ore', chance: 0.7 },
                { id: 'mythicmetals:unobtainium_ore', chance: 0.6 },
                { id: 'mythicmetals:kyber_ore', chance: 0.7 },
                { id: 'spectrum:shimmerstone_ore', chance: 0.6 },
                { id: 'spectrum:citrine_ore', chance: 0.7 },
            ]
        },
    },
    {
        id: 'ad_astra:glacio',
        drill: 'modern_industrialization:titanium_drill',
        basic: {
            energy: 256,
            stiffness: 0.18 ,
            time: 600,
            output: [
                { id: '3x ae2:sky_stone_block', chance: 0.3 },
                { id: '3x ad_astra:glacio_cobblestone', chance: 0.8 },
            ]
        },
        tuned: {
            energy: 384,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'ad_astra:glacio_copper_ore', chance: 0.9 },
                { id: 'ad_astra:glacio_lapis_ore', chance: 0.8 },
                { id: 'ad_astra:glacio_ice_shard_ore', chance: 0.6 },
                { id: 'ad_astra:glacio_coal_ore', chance: 0.5 },
                { id: 'ad_astra:glacio_iron_ore', chance: 0.7 }
            ]
        },
        advanced: {
            energy: 512,
            stiffness: 0.32,
            time: 600,
            output: [
                { id: 'ad_astra:glacio_copper_ore', chance: 0.6 },
                { id: 'ad_astra:glacio_lapis_ore', chance: 0.4 },
                { id: 'ad_astra:glacio_ice_shard_ore', chance: 0.7 },
                { id: 'ad_astra:glacio_coal_ore', chance: 0.6 },
                { id: 'ad_astra:glacio_iron_ore', chance: 0.6 },
                { id: 'mythicmetals:morkite_ore', chance: 0.5 },
                { id: 'mythicmetals:osmium_ore', chance: 0.4 },
                { id: 'mythicmetals:runite_ore', chance: 0.5 },
                { id: 'spectrum:azurite_ore', chance: 0.6 },
            ]
        },
    },
]
const planet_drilling_data = [
    {
        id: 'ad_astra:moon',
        drill: 'modern_industrialization:desh_drill',
        basic: {
            energy: 24,
            stiffness: 0.08 ,
            time: 600,
            output: [
                { id: 'minecraft:water', ammount: 500 },
            ]
        },
        tuned: {
            energy: 36,
            stiffness: 0.12,
            time: 600,
            output: [
                { id: 'minecraft:water', ammount: 2000 },
                { id: 'modern_industrialization:helium_3', ammount: 4 },
            ]
        },
        advanced: {
            energy: 48,
            stiffness: 0.16,
            time: 600,
            output: [
                { id: 'modern_industrialization:helium_3', ammount: 8 },
                { id: 'spectrum:midnight_solution', ammount: 200 },
                { id: 'modern_industrialization:cryofluid', ammount: 100 },
            ]
        },
    },
    {
        id: 'ad_astra:mars',
        drill: 'modern_industrialization:ostrum_drill',
        basic: {
            energy: 48,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: 'modern_industrialization:high_pressure_water', ammount: 500},
            ]
        },
        tuned: {
            energy: 72,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'modern_industrialization:high_pressure_water', ammount: 1000 },
                { id: 'modern_industrialization:methane', ammount: 1000 },
            ]
        },
        advanced: {
            energy: 96,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'modern_industrialization:sulfuric_acid', ammount: 600 },
                { id: 'modern_industrialization:methane', ammount: 1500 },
                { id: 'modern_industrialization:high_pressure_water', ammount: 2000 },
            ]
        },
    },
    {
        id: 'ad_astra:mercury',
        drill: 'modern_industrialization:calorite_drill',
        basic: {
            energy: 96,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: 'modern_industrialization:ammonia_gas', ammount: 400 },
                { id: 'modern_industrialization:molten_redstone', ammount: 600 },
            ]
        },
        tuned: {
            energy: 144,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'modern_industrialization:tritium', ammount: 50 },
                { id: 'modern_industrialization:manganese_sulfuric_solution', ammount: 400 },
            ]
        },
        advanced: {
            energy: 192,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'modern_industrialization:chromium_hydrochloric_solution', ammount: 400 },
                { id: 'spectrum:dragonrot', ammount: 200 },
                { id: 'modern_industrialization:red_ink', ammount: 800 },
            ]
        },
    },
    {
        id: 'ad_astra:venus',
        drill: 'modern_industrialization:stainless_steel_drill',
        basic: {
            energy: 96,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: 'modern_industrialization:high_pressure_steam', ammount: 1000 },
            ]
        },
        tuned: {
            energy: 144,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'modern_industrialization:argon', ammount: 200 },
                { id: 'modern_industrialization:manganese_sulfuric_solution', ammount: 300 },
            ]
        },
        advanced: {
            energy: 192,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'modern_industrialization:argon', ammount: 300 },
                { id: 'modern_industrialization:platinum_sulfuric_solution', ammount: 300 },
                { id: 'spectrum:liquid_crystal', ammount: 800 },
            ]
        },
    },
    {
        id: 'ad_astra:glacio',
        drill: 'modern_industrialization:calorite_drill',
        basic: {
            energy: 192,
            stiffness: 0.12 ,
            time: 600,
            output: [
                { id: 'modern_industrialization:nitrogen', ammount: 1000 },
            ]
        },
        tuned: {
            energy: 288,
            stiffness: 0.18,
            time: 600,
            output: [
                { id: 'modern_industrialization:nitrogen', ammount: 800 },
                { id: 'modern_industrialization:cryofluid', ammount: 300 },
            ]
        },
        advanced: {
            energy: 384,
            stiffness: 0.24,
            time: 600,
            output: [
                { id: 'modern_industrialization:liquid_mana', ammount: 30 },
                { id: 'modern_industrialization:cryofluid', ammount: 500 },
                { id: 'modern_industrialization:purified_void', ammount: 100 },
            ]
        },
    },
]


const strmulti_with_floor_and_cap = (multiplier, string) => {
    let old_multi = parseInt(string.slice(0, string.indexOf('x')))
    if (Number.isInteger(old_multi)) {
        let new_multi = Math.floor(old_multi * multiplier)
        let contents = string.slice(string.indexOf('x') + 2)
        let strong ='';
        if (new_multi <= 64) {
            strong = `${new_multi}x ` + contents;
        } else {
            strong = '64x '+ contents
        }
        return strong
    } else {
        let new_multi = Math.floor(multiplier)
        let strong = `${new_multi}x ` + string
        return strong
    }
};

const output_mod = (output,modifier,isFluid) => {
    let copy = [];
    if (isFluid) {
        output.forEach(element => {
            copy.push( {
                id: element.id,
                ammount: Math.floor(element.ammount * modifier.output_multi) })
        });
    } else {
        output.forEach(element => {
            copy.push( {
                id: strmulti_with_floor_and_cap(modifier.output_multi,element.id),
                chance: up_to_one(element.chance,modifier.output_chance) })
        });
    }
    return copy;
}

function planet_mod(planet,enhancement,isFluid) {
    let modified = {
        energies: {
            basic: Math.floor(planet.basic.energy * enhancement.energy),
            tuned: Math.floor(planet.tuned.energy * enhancement.energy),
            advanced: Math.floor(planet.advanced.energy * enhancement.energy)
        },
        durations: {
            basic: Math.floor(planet.basic.time * enhancement.duration),
            tuned: Math.floor(planet.tuned.time * enhancement.duration),
            advanced: Math.floor(planet.advanced.time * enhancement.duration)
        },
        stiffness: {
            basic: planet.basic.stiffness * enhancement.stiffness,
            tuned: planet.tuned.stiffness * enhancement.stiffness,
            advanced: planet.advanced.stiffness * enhancement.stiffness
        },
        output: {
            basic: { output: output_mod(planet.basic.output,enhancement,isFluid) },
            tuned: { output: output_mod(planet.tuned.output,enhancement,isFluid) },
            advanced: { output: output_mod(planet.advanced.output,enhancement,isFluid) },
        }
    }
    return modified
}

function clean_drilling(event,planet) {
    let basic = `event.recipes.modern_industrialization.space_miner(${planet.basic.energy}, ${planet.basic.time}).itemIn("${planet.drill}",${planet.basic.stiffness}).itemIn('ae2:basic_card', 0)`
    let tuned = `event.recipes.modern_industrialization.space_miner(${planet.tuned.energy}, ${planet.tuned.time}).itemIn("${planet.drill}",${planet.tuned.stiffness}).itemIn('kubejs:${planet.id.split(":")[1]}_data_card', 0)`
    let advanced = `event.recipes.modern_industrialization.space_miner(${planet.advanced.energy}, ${planet.advanced.time}).itemIn("${planet.drill}",${planet.advanced.stiffness}).itemIn('kubejs:advanced_${planet.id.split(":")[1]}_data_card', 0)`
    let basic_output = '';
    let tuned_output = '';
    let advanced_output = '';
    planet.basic.output.forEach(element => {
    basic_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    planet.tuned.output.forEach(element => {
        tuned_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    planet.advanced.output.forEach(element => {
        advanced_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    let result_basic = basic + basic_output + `.dimension("${planet.id}")`
    let result_tuned = tuned + tuned_output + `.dimension("${planet.id}")`
    let result_advanced = advanced + advanced_output + `.dimension("${planet.id}")`
    eval(result_basic)
    eval(result_tuned)
    eval(result_advanced)
}

function clean_mining(event,planet) {
    let basic = `event.recipes.modern_industrialization.space_miner(${planet.basic.energy}, ${planet.basic.time}).itemIn("${planet.drill}",${planet.basic.stiffness}).itemIn('ae2:basic_card', 0)`
    let tuned = `event.recipes.modern_industrialization.space_miner(${planet.tuned.energy}, ${planet.tuned.time}).itemIn("${planet.drill}",${planet.tuned.stiffness}).itemIn('kubejs:${planet.id.split(":")[1]}_data_card', 0)`
    let advanced = `event.recipes.modern_industrialization.space_miner(${planet.advanced.energy}, ${planet.advanced.time}).itemIn("${planet.drill}",${planet.advanced.stiffness}).itemIn('kubejs:advanced_${planet.id.split(":")[1]}_data_card', 0)`
    let basic_output = '';
    let tuned_output = '';
    let advanced_output = '';
    planet.basic.output.forEach(element => {
    basic_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    planet.tuned.output.forEach(element => {
        tuned_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    planet.advanced.output.forEach(element => {
        advanced_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    let result_basic = basic + basic_output + `.dimension("${planet.id}")`
    let result_tuned = tuned + tuned_output + `.dimension("${planet.id}")`
    let result_advanced = advanced + advanced_output + `.dimension("${planet.id}")`
    eval(result_basic)
    eval(result_tuned)
    eval(result_advanced)
}

function enhanced_drilling(event,planet,enhancement) {
    let basic = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,true).energies.basic}, ${planet_mod(planet,enhancement,true).durations.basic}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,true).stiffness.basic}).itemIn('ae2:basic_card', 0)`
    let tuned = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,true).energies.tuned}, ${planet_mod(planet,enhancement,true).durations.tuned}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,true).stiffness.tuned}).itemIn('kubejs:${planet.id.split(":")[1]}_data_card', 0)`
    let advanced = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,true).energies.advanced}, ${planet_mod(planet,enhancement,true).durations.advanced}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,true).stiffness.advanced}).itemIn('kubejs:advanced_${planet.id.split(":")[1]}_data_card', 0)`
    let basic_output = '';
    let tuned_output = '';
    let advanced_output = '';
    planet_mod(planet,enhancement,true).output.basic.output.forEach(element => {
        basic_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    planet_mod(planet,enhancement,true).output.tuned.output.forEach(element => {
        tuned_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    planet_mod(planet,enhancement,true).output.advanced.output.forEach(element => {
        advanced_output += `.fluidOut('${element.id}',${element.ammount})\n`
    });
    let result_basic = basic + basic_output + `.dimension("${planet.id}")`
    let result_tuned = tuned + tuned_output + `.dimension("${planet.id}")`
    let result_advanced = advanced + advanced_output + `.dimension("${planet.id}")`
    eval(result_basic)
    eval(result_tuned)
    eval(result_advanced)
}
function enhanced_mining(event,planet,enhancement) {
    let basic = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,false).energies.basic}, ${planet_mod(planet,enhancement,false).durations.basic}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,false).stiffness.basic}).itemIn('ae2:basic_card', 0)`
    let tuned = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,false).energies.tuned}, ${planet_mod(planet,enhancement,false).durations.tuned}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,false).stiffness.tuned}).itemIn('kubejs:${planet.id.split(":")[1]}_data_card', 0)`
    let advanced = `event.recipes.modern_industrialization.space_miner(${planet_mod(planet,enhancement,false).energies.advanced}, ${planet_mod(planet,enhancement,false).durations.advanced}).itemIn("kubejs:${enhancement.name}_${planet.drill.split(":")[1]}",${planet_mod(planet,enhancement,false).stiffness.advanced}).itemIn('kubejs:advanced_${planet.id.split(":")[1]}_data_card', 0)`
    let basic_output = '';
    let tuned_output = '';
    let advanced_output = '';
    planet_mod(planet,enhancement,false).output.basic.output.forEach(element => {
        basic_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    planet_mod(planet,enhancement,false).output.tuned.output.forEach(element => {
        tuned_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    planet_mod(planet,enhancement,false).output.advanced.output.forEach(element => {
        advanced_output += `.itemOut('${element.id}',${element.chance})\n`
    });
    let result_basic = basic + basic_output + `.dimension("${planet.id}")`
    let result_tuned = tuned + tuned_output + `.dimension("${planet.id}")`
    let result_advanced = advanced + advanced_output + `.dimension("${planet.id}")`
    eval(result_basic)
    eval(result_tuned)
    eval(result_advanced)
}

ServerEvents.recipes(event => {
    planet_mining_data.forEach(planet => {
        clean_mining(event,planet)
        enhancements.forEach(enhancement => {
            enhanced_mining(event,planet,enhancement)
        });
    });
    planet_drilling_data.forEach(planet => {
        clean_drilling(event,planet)
        enhancements.forEach(enhancement => {
            enhanced_drilling(event,planet,enhancement)
        });
    });
})
