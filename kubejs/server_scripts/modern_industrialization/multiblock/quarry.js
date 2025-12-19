//priority: 0
function up_to_one(number,coeff) {
    if (number * coeff <= 1) {
        return number * coeff
    }
    else return 1;
}

const drill_prop = [
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
        stiffness: 0.2,
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

const strmulti_with_cap = (multiplier, string) => {
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

ServerEvents.recipes(event => {
    event.remove({ id: 'modern_industrialization:quarry/gold' })
    // Nether Mining
    event.recipes.modern_industrialization.quarry(8, 600) //Eu, ticks
        .itemIn('modern_industrialization:gold_drill', 0.24)
        .itemOut('64x minecraft:netherrack', 0.95)
        .itemOut('16x minecraft:blackstone', 0.25)
        .itemOut('16x minecraft:basalt', 0.25)
        .itemOut('20x minecraft:soul_soil', 0.1)
        .itemOut('5x minecraft:magma_block', 0.1)
        .itemOut('20x minecraft:soul_sand', 0.25)
        .itemOut('minecraft:ancient_debris', 0.05)
        .itemOut('4x minecraft:glowstone', 0.15)
        .itemOut('6x minecraft:nether_quartz_ore', 0.15)
        .itemOut('minecraft:nether_gold_ore', 0.25)
        .dimension('minecraft:the_nether')
    //Overworld Mining
    event.recipes.modern_industrialization.quarry(24, 600) //Eu, ticks
	.itemIn(`modern_industrialization:desh_drill`, 0.08)
	.itemOut('modern_industrialization:ancient_fossil_block',0.25)
	.dimension('minecraft:overworld')
    event.remove({ id: 'modern_industrialization:quarry/copper' })
    event.recipes.modern_industrialization.quarry(4, 600) //Eu, ticks
        .itemIn('modern_industrialization:copper_drill', 0.2)
        .itemOut('64x minecraft:cobblestone', 0.95)
        .itemOut('16x minecraft:diorite', 0.25)
        .itemOut('16x minecraft:andesite', 0.25)
        .itemOut('16x minecraft:granite', 0.25)
        .itemOut('10x minecraft:dirt', 0.5)
        .itemOut('10x minecraft:gravel', 0.5)
        .itemOut('16x minecraft:cobbled_deepslate', 0.25)
        .itemOut('16x minecraft:tuff', 0.25)
        .itemOut('10x neepmeat:asbestos', 0.25)
    event.remove({ id: 'modern_industrialization:quarry/bronze' })
    event.recipes.modern_industrialization.quarry(4, 600) //Eu, ticks
        .itemIn('modern_industrialization:bronze_drill', 0.08)
        .itemOut('minecraft:iron_ore', 0.4)
        .itemOut('minecraft:coal_ore', 0.4)
        .itemOut('modern_industrialization:lignite_coal_ore', 0.24)
        .itemOut('minecraft:copper_ore', 0.2)
        .itemOut('modern_industrialization:tin_ore', 0.3)
        .itemOut('minecraft:gold_ore', 0.15)
        .itemOut('minecraft:redstone_ore', 0.2)
    event.remove({ id: 'modern_industrialization:quarry/titanium' })
    event.recipes.modern_industrialization.quarry(128, 600) //Eu, ticks
        .itemIn('modern_industrialization:titanium_drill', 0.08)
        .itemOut('modern_industrialization:uranium_ore', 0.20)
        .itemOut('modern_industrialization:iridium_ore', 0.05)
        .itemOut('modern_industrialization:fluoroapatite_ore', 0.25)
        .itemOut('modern_industrialization:roquesite_ore', 0.05)
    event.remove({ id: 'modern_industrialization:quarry/steel' })
    event.recipes.modern_industrialization.quarry(12, 600) //Eu, ticks
        .itemIn('modern_industrialization:steel_drill', 0.08)
        .itemOut('modern_industrialization:antimony_ore', 0.2)
        .itemOut('minecraft:diamond_ore', 0.12)
        .itemOut('minecraft:lapis_ore', 0.1)
        .itemOut('modern_industrialization:lead_ore', 0.25)
        .itemOut('modern_industrialization:nickel_ore', 0.18)
        .itemOut('modern_industrialization:bauxite_ore', 0.4)
        .itemOut('modern_industrialization:salt_ore', 0.12)
        .itemOut('minecraft:emerald_ore', 0.1)
        .itemOut('modern_industrialization:quartz_ore', 0.2)
    event.remove({ id: 'modern_industrialization:quarry/stainless_steel' })
    event.recipes.modern_industrialization.quarry(32, 600) //Eu, ticks
        .itemIn('modern_industrialization:stainless_steel_drill', 0.08)
        .itemOut('modern_industrialization:titanium_ore', 0.6)
        .itemOut('modern_industrialization:tungsten_ore', 0.6)
        .itemOut('modern_industrialization:mozanite_ore', 0.4)
        .itemOut('modern_industrialization:gadolinite_ore', 0.2)
        .itemOut('modern_industrialization:vanadinite_ore', 0.6)
        .itemOut('modern_industrialization:molybdenite_ore', 0.4)
        .itemOut('modern_industrialization:platinum_ore', 0.3)
        .itemOut('modern_industrialization:brookite_ore', 0.3)
    // Deeper Down mining
    event.recipes.modern_industrialization.quarry(4, 600) //Eu, ticks
        .itemIn(`modern_industrialization:bronze_drill`, 0.12)
        .itemOut('16x spectrum:shale_clay',    0.5)
        .itemOut('64x spectrum:blackslag',     0.8)
        .itemOut('16x spectrum:black_sludge',  0.3)
        .itemOut('16x spectrum:slush',         0.2)
        .itemOut('4x spectrum:pyrite',         0.3)
        .itemOut('8x spectrum:rotten_ground',  0.6)
        .dimension('spectrum:deeper_down')
    event.recipes.modern_industrialization.quarry(12, 600) //Eu, ticks
        .itemIn(`modern_industrialization:steel_drill`, 0.12)
        .itemOut('spectrum:blackslag_iron_ore',     0.4)
        .itemOut('spectrum:blackslag_coal_ore',     0.4)
        .itemOut('spectrum:blackslag_copper_ore',   0.2)
        .itemOut('spectrum:blackslag_gold_ore',     0.15)
        .itemOut('spectrum:blackslag_redstone_ore', 0.2)
        .itemOut('spectrum:blackslag_diamond_ore',  0.12)
        .itemOut('spectrum:blackslag_lapis_ore',    0.1)
        .itemOut('spectrum:blackslag_emerald_ore',  0.1)
        .dimension('spectrum:deeper_down')
    event.recipes.modern_industrialization.quarry(32, 600) //Eu, ticks
        .itemIn(`modern_industrialization:stainless_steel_drill`, 0.12)
        .itemOut('spectrum:blackslag_topaz_ore',         0.4)
        .itemOut('spectrum:blackslag_amethyst_ore',      0.4)
        .itemOut('spectrum:blackslag_citrine_ore',       0.4)
        .itemOut('spectrum:blackslag_shimmerstone_ore',  0.2)
        .itemOut('spectrum:blackslag_azurite_ore',       0.1)
        .dimension('spectrum:deeper_down')
    event.recipes.modern_industrialization.quarry(128, 600) //Eu, ticks
        .itemIn(`modern_industrialization:titanium_drill`, 0.12)
        .itemOut('spectrum:blackslag_onyx_ore',       0.4)
        .itemOut('spectrum:blackslag_moonstone_ore',  0.2)
        .itemOut('spectrum:blackslag_malachite_ore',  0.1)
        .dimension('spectrum:deeper_down')
    drill_prop.forEach(drill => {
        // Nether Mining
        event.recipes.modern_industrialization.quarry(Math.floor(8*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_gold_drill`, 0.24*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'64x minecraft:netherrack'),       up_to_one(0.95,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:blackstone'),       up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:basalt'),           up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'20x minecraft:soul_soil'),        up_to_one(0.1 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'5x minecraft:magma_block'),       up_to_one(0.1 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'20x minecraft:soul_sand'),        up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:ancient_debris'),       up_to_one(0.05,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'4x minecraft:glowstone'),         up_to_one(0.15,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'6x minecraft:nether_quartz_ore'), up_to_one(0.15,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:nether_gold_ore'),      up_to_one(0.25,drill.output_chance))
            .dimension('minecraft:the_nether')
        //Overworld Mining
        event.recipes.modern_industrialization.quarry(Math.floor(4*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_copper_drill`, 0.2*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'64x minecraft:cobblestone'),       up_to_one(0.95,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:diorite'),           up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:andesite'),          up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:granite'),           up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'10x minecraft:dirt'),              up_to_one(0.5 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'10x minecraft:gravel'),            up_to_one(0.5 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:cobbled_deepslate'), up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x minecraft:tuff'),              up_to_one(0.25,drill.output_chance))
            .dimension('minecraft:overworld')
        event.recipes.modern_industrialization.quarry(Math.floor(4*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_bronze_drill`, 0.08*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:iron_ore'),                        up_to_one(0.4 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:coal_ore'),                        up_to_one(0.4 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:lignite_coal_ore'), up_to_one(0.24,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:copper_ore'),                      up_to_one(0.2 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:tin_ore'),          up_to_one(0.3 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:gold_ore'),                        up_to_one(0.15,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:redstone_ore'),                    up_to_one(0.2 ,drill.output_chance))
            .dimension('minecraft:overworld')
        event.recipes.modern_industrialization.quarry(Math.floor(128*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_titanium_drill`, 0.08*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:uranium_ore'),       up_to_one(0.20,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:iridium_ore'),       up_to_one(0.05,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:fluoroapatite_ore'), up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:roquesite_ore'),     up_to_one(0.05,drill.output_chance))
            .dimension('minecraft:overworld')
        event.recipes.modern_industrialization.quarry(Math.floor(12*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_steel_drill`, 0.08*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:antimony_ore'), up_to_one(0.2 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:diamond_ore'),                 up_to_one(0.12,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:lapis_ore'),                   up_to_one(0.1 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:lead_ore'),     up_to_one(0.25,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:nickel_ore'),   up_to_one(0.18,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:bauxite_ore'),  up_to_one(0.4 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:salt_ore'),     up_to_one(0.12,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'minecraft:emerald_ore'),                 up_to_one(0.1 ,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:quartz_ore'),   up_to_one(0.2 ,drill.output_chance))
            .dimension('minecraft:overworld')
        event.recipes.modern_industrialization.quarry(Math.floor(32*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_stainless_steel_drill`, 0.08*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:titanium_ore'),     up_to_one(0.6,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:tungsten_ore'),     up_to_one(0.6,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:mozanite_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:gadolinite_ore'),                           up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:vanadinite_ore'),   up_to_one(0.6,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:molybdenite_ore'),  up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:platinum_ore'),     up_to_one(0.3,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:brookite_ore'),                         up_to_one(0.3,drill.output_chance))
            .dimension('minecraft:overworld')
        // Botania flowers
        event.recipes.modern_industrialization.quarry(Math.floor(24*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_desh_drill`, 0.08*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'modern_industrialization:ancient_fossil_block'), up_to_one(0.25,drill.output_chance))
            .dimension('minecraft:overworld')
        // Deeper Down mining
        event.recipes.modern_industrialization.quarry(Math.floor(4*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_bronze_drill`, 0.12*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'16x spectrum:shale_clay'),    up_to_one(0.5,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'64x spectrum:blackslag'),     up_to_one(0.8,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x spectrum:black_sludge'),  up_to_one(0.3,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'16x spectrum:slush'),         up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'4x spectrum:pyrite'),         up_to_one(0.3,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'8x spectrum:rotten_ground'),  up_to_one(0.6,drill.output_chance))
            .dimension('spectrum:deeper_down')
        event.recipes.modern_industrialization.quarry(Math.floor(12*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_steel_drill`, 0.12*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_iron_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_coal_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_copper_ore'),   up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_gold_ore'),     up_to_one(0.15,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_redstone_ore'), up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_diamond_ore'),  up_to_one(0.12,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_lapis_ore'),    up_to_one(0.1,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_emerald_ore'),  up_to_one(0.1,drill.output_chance))
            .dimension('spectrum:deeper_down')
        event.recipes.modern_industrialization.quarry(Math.floor(32*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_stainless_steel_drill`, 0.12*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_topaz_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_amethyst_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_citrine_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_shimmerstone_ore'),  up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_azurite_ore'),   up_to_one(0.1,drill.output_chance))
            .dimension('spectrum:deeper_down')
        event.recipes.modern_industrialization.quarry(Math.floor(128*drill.energy), Math.floor(600*drill.duration)) //Eu, ticks
            .itemIn(`kubejs:${drill.name}_titanium_drill`, 0.12*drill.stiffness)
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_onyx_ore'),     up_to_one(0.4,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_moonstone_ore'),     up_to_one(0.2,drill.output_chance))
            .itemOut(strmulti_with_cap(drill.output_multi,'spectrum:blackslag_malachite_ore'),     up_to_one(0.1,drill.output_chance))
            .dimension('spectrum:deeper_down')

    });



})
