ServerEvents.recipes(event => {
    // Depleted Naquadah Rod Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 6000)
        .itemIn('modern_industrialization:naquadah_fuel_rod_depleted')
        .itemOut('24x modern_industrialization:plutonium_tiny_dust')
        .itemOut('18x modern_industrialization:uranium_235_tiny_dust')
        .itemOut('12x modern_industrialization:tantalum_tiny_dust')
        .itemOut('24x modern_industrialization:palladium_tiny_dust')

    // Glacio Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:glacio_air',1000)
        .fluidOut('spectrum:liquid_crystal',400)
        .fluidOut('modern_industrialization:sodium_hydroxide',300)
        .fluidOut('modern_industrialization:liquid_mana',200)
        .fluidOut('modern_industrialization:cyan_ink',100)
        .dimension('ad_astra:glacio')
        
    // Venus Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:venus_air',1000)
        .fluidOut('modern_industrialization:nitrogen',500)
        .fluidOut('modern_industrialization:propene',200)
        .fluidOut('modern_industrialization:methane',200)
        .fluidOut('modern_industrialization:butadiene',100)
        .dimension('ad_astra:venus')
        
    // Mars Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:mars_air',1000)
        .fluidOut('modern_industrialization:nitrogen',500)
        .fluidOut('modern_industrialization:methane',300)
        .fluidOut('modern_industrialization:oxygen',150)
        .fluidOut('modern_industrialization:argon',50)
        .dimension('ad_astra:mars')
        
    // Mercury Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:mercury_air',1000)
        .fluidOut('modern_industrialization:molten_redstone',500)
        .fluidOut('modern_industrialization:silicon_tetrafluoride_gas',200)
        .fluidOut('modern_industrialization:platinum_sulfuric_solution',200)
        .fluidOut('modern_industrialization:magenta_ink',100)
        .dimension('ad_astra:mercury')
        
    // Bee Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:bee_air',1000)
        .fluidOut('modern_industrialization:sugar_solution',600)
        .fluidOut('the_bumblezone:honey_fluid_still',300)
        .fluidOut('modern_industrialization:yellow_ink',90)
        .fluidOut('the_bumblezone:royal_jelly_fluid_still',10)
        .dimension('the_bumblezone:the_bumblezone')
        
    // Nether Air Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('modern_industrialization:nether_air',1000)
        .fluidOut('modern_industrialization:ammonia_gas',500)
        .fluidOut('modern_industrialization:molten_redstone',300)
        .fluidOut('modern_industrialization:sulfuric_acid',150)
        .fluidOut('modern_industrialization:orange_ink',50)
        .dimension('minecraft:the_nether')
        
    // Desh Centrifuging
    event.recipes.modern_industrialization.centrifuge(16, 600)
        .itemIn('4x modern_industrialization:desh_dust')
        .itemOut('3x modern_industrialization:copper_dust')
        .itemOut('modern_industrialization:palladium_dust')
        .itemOut('modern_industrialization:niobium_tiny_dust',0.5)

    // Ostrum Centrifuging
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .itemIn('3x modern_industrialization:ostrum_dust')
        .itemOut('2x modern_industrialization:tungsten_dust')
        .itemOut('modern_industrialization:mozanite_dust')
        .itemOut('modern_industrialization:stormyx_tiny_dust',0.5)

    // Calorite Centrifuging
    event.recipes.modern_industrialization.centrifuge(64, 600)
        .itemIn('5x modern_industrialization:calorite_dust')
        .itemOut('3x modern_industrialization:uranium_235_dust')
        .itemOut('2x modern_industrialization:ruby_dust')
        .itemOut('modern_industrialization:lithium_tiny_dust',0.5)

    // Purified Naquadah Sulfuric solution
    event.recipes.modern_industrialization.centrifuge(8, 1200)
        .fluidIn('modern_industrialization:naquadah_sulfuric_solution',1000)
        .itemOut('modern_industrialization:plutonium_tiny_dust',0.08)
        .itemOut('modern_industrialization:prometheum_tiny_dust',0.03)
        .itemOut('modern_industrialization:uranium_235_tiny_dust',0.05)
        .fluidOut('modern_industrialization:purified_naquadah_sulfuric_solution',1000)

    event.recipes.modern_industrialization.centrifuge(32, 1200)
        .itemIn('4x modern_industrialization:roquesite_dust')
        .itemOut('modern_industrialization:copper_dust')
        .itemOut('modern_industrialization:indium_dust')
        .itemOut('2x modern_industrialization:sulfur_dust')
    event.recipes.modern_industrialization.centrifuge(32, 1200)
        .itemIn('9x modern_industrialization:gadolinite_dust')
        .itemOut('2x modern_industrialization:yttrium_dust')
        .itemOut('modern_industrialization:iron_dust')
        .itemOut('2x modern_industrialization:beryllium_dust')
        .itemOut('2x modern_industrialization:silicon_dust')
        .fluidOut('modern_industrialization:oxygen',1000)
    event.recipes.modern_industrialization.centrifuge(16, 600)
        .fluidIn('neepmeat:tissue_slurry',200)
        .itemOut('neepmeat:biomass')
        .fluidOut('neepmeat:meat',200)
    event.recipes.modern_industrialization.centrifuge(64, 300) //Eu, ticks
        .itemIn(`minecraft:honeycomb`)
        .itemOut('modern_industrialization:wax')
        .fluidOut(`the_bumblezone:honey_fluid_still`, 200)
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.centrifuge(32, 1200)
            .itemIn(`spectrum:${color.name}_leaves`)
            .fluidOut('modern_industrialization:plant_oil',200)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 35)
        event.recipes.modern_industrialization.centrifuge(32, 1200)
            .itemIn(`spectrum:${color.name}_log`)
            .itemOut('6x modern_industrialization:wood_pulp')
            .fluidOut(`modern_industrializationtrialization:${color.name}_ink`, 25)
        event.recipes.modern_industrialization.centrifuge(32, 1200)
            .itemIn(`spectrum:stripped_${color.name}_log`)
            .itemOut('4x modern_industrialization:wood_pulp')
            .fluidOut(`modern_industrialization:${color.name}_ink`, 35)
        event.recipes.modern_industrialization.centrifuge(32, 300) //Eu, ticks
            .itemIn(`modern_industrialization:${color.name}_comb`)
            .itemOut(eval(`comb_outputs.${color.name}[0].id`), eval(`comb_outputs.${color.name}[0].chance`))
            .itemOut(eval(`comb_outputs.${color.name}[1].id`), eval(`comb_outputs.${color.name}[1].chance`))
            .itemOut('modern_industrialization:wax')
            .fluidOut(`modern_industrialization:${color.name}_ink`, 100)
            .fluidOut(`the_bumblezone:honey_fluid_still`, 150)
    })
})
