ServerEvents.recipes(event => {


    // Bottler
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.bottler(4, 200)
            .itemIn('minecraft:glass_bottle')
            .fluidIn(`modern_industrialization:${color.name}_ink`, 100)
            .itemOut(`spectrum:${color.name}_pigment`)

        event.recipes.modern_industrialization.bottler(4, 200)
            .itemIn('minecraft:bucket')
            .fluidIn(`modern_industrialization:${color.name}_ink`, 1000)
            .itemOut(`modern_industrialization:${color.name}_ink_bucket`)
    })
    event.recipes.modern_industrialization.bottler(8, 200)
        .itemIn('minecraft:glass_bottle')
        .fluidIn('the_bumblezone:royal_jelly_fluid_still', 250)
        .itemOut('the_bumblezone:royal_jelly_bottle')

    event.recipes.modern_industrialization.bottler(8, 100) 
        .fluidIn('kibe:liquid_xp',250)
        .itemIn('minecraft:glass_bottle')
        .itemOut('minecraft:experience_bottle')

    event.recipes.modern_industrialization.bottler(8, 100) 
        .fluidIn('neepmeat:blood',250)
        .itemIn('minecraft:glass_bottle')
        .itemOut('bewitchment:bottle_of_blood')

    event.recipes.modern_industrialization.bottler(8, 100)
        .itemIn('minecraft:glass_bottle')
        .fluidIn('milk:still_milk', 100)
        .itemOut('farmersdelight:milk_bottle')


    const bucket_unification = [
        {bucket : 'xps:xp_bucket', liquid: 'xps:xp_fluid'},
        {bucket : 'spectrum:liquid_crystal_bucket', liquid: 'spectrum:liquid_crystal'},
        {bucket : 'spectrum:dragonrot_bucket', liquid: 'spectrum:dragonrot'},
        {bucket : 'spectrum:midnight_solution_bucket', liquid: 'spectrum:midnight_solution'},
        {bucket : 'spectrum:mud_bucket', liquid: 'spectrum:mud'},
        {bucket : 'the_bumblezone:royal_jelly_bucket', liquid: 'the_bumblezone:royal_jelly_fluid_still'},
        {bucket : 'the_bumblezone:sugar_water_bucket', liquid: 'the_bumblezone:sugar_water_still'},
        {bucket : 'the_bumblezone:honey_bucket', liquid: 'the_bumblezone:honey_fluid_still'},
        {bucket : 'minecraft:water_bucket', liquid: 'minecraft:water'},
        {bucket : 'minecraft:lava_bucket', liquid: 'minecraft:lava'},
        {bucket : 'minecraft:milk_bucket', liquid: 'milk:still_milk'},
        {bucket : 'modern_industrialization:acetylene_bucket', liquid: 'modern_industrialization:acetylene'},
        {bucket : 'modern_industrialization:acrylic_acid_bucket', liquid: 'modern_industrialization:acrylic_acid'},
        {bucket : 'modern_industrialization:acrylic_glue_bucket', liquid: 'modern_industrialization:acrylic_glue'},
        {bucket : 'modern_industrialization:argon_bucket', liquid: 'modern_industrialization:argon'},
        {bucket : 'modern_industrialization:benzene_bucket', liquid: 'modern_industrialization:benzene'},
        {bucket : 'modern_industrialization:biodiesel_bucket', liquid: 'modern_industrialization:biodiesel'},
        {bucket : 'modern_industrialization:boosted_diesel_bucket', liquid: 'modern_industrialization:boosted_diesel'},
        {bucket : 'modern_industrialization:butadiene_bucket', liquid: 'modern_industrialization:butadiene'},
        {bucket : 'modern_industrialization:caprolactam_bucket', liquid: 'modern_industrialization:caprolactam'},
        {bucket : 'modern_industrialization:chlorine_bucket', liquid: 'modern_industrialization:chlorine'},
        {bucket : 'modern_industrialization:chromium_hydrochloric_solution_bucket', liquid: 'modern_industrialization:chromium_hydrochloric_solution'},
        {bucket : 'modern_industrialization:creosote_bucket', liquid: 'modern_industrialization:creosote'},
        {bucket : 'modern_industrialization:crude_oil_bucket', liquid: 'modern_industrialization:crude_oil'},
        {bucket : 'modern_industrialization:cryofluid_bucket', liquid: 'modern_industrialization:cryofluid'},
        {bucket : 'modern_industrialization:deuterium_bucket', liquid: 'modern_industrialization:deuterium'},
        {bucket : 'modern_industrialization:diesel_bucket', liquid: 'modern_industrialization:diesel'},
        {bucket : 'modern_industrialization:diethyl_ether_bucket', liquid: 'modern_industrialization:diethyl_ether'},
        {bucket : 'modern_industrialization:ethanol_bucket', liquid: 'modern_industrialization:ethanol'},
        {bucket : 'modern_industrialization:ethylbenzene_bucket', liquid: 'modern_industrialization:ethylbenzene'},
        {bucket : 'modern_industrialization:ethylene_bucket', liquid: 'modern_industrialization:ethylene'},
        {bucket : 'modern_industrialization:heavy_fuel_bucket', liquid: 'modern_industrialization:heavy_fuel'},
        {bucket : 'modern_industrialization:heavy_water_bucket', liquid: 'modern_industrialization:heavy_water'},
        {bucket : 'modern_industrialization:heavy_water_steam_bucket', liquid: 'modern_industrialization:heavy_water_steam'},
        {bucket : 'modern_industrialization:helium_bucket', liquid: 'modern_industrialization:helium'},
        {bucket : 'modern_industrialization:helium_plasma_bucket', liquid: 'modern_industrialization:helium_plasma'},
        {bucket : 'modern_industrialization:helium_3_bucket', liquid: 'modern_industrialization:helium_3'},
        {bucket : 'modern_industrialization:high_pressure_heavy_water_bucket', liquid: 'modern_industrialization:high_pressure_heavy_water'},
        {bucket : 'modern_industrialization:high_pressure_heavy_water_steam_bucket', liquid: 'modern_industrialization:high_pressure_heavy_water_steam'},
        {bucket : 'modern_industrialization:high_pressure_steam_bucket', liquid: 'modern_industrialization:high_pressure_steam'},
        {bucket : 'modern_industrialization:high_pressure_water_bucket', liquid: 'modern_industrialization:high_pressure_water'},
        {bucket : 'modern_industrialization:hydrochloric_acid_bucket', liquid: 'modern_industrialization:hydrochloric_acid'},
        {bucket : 'modern_industrialization:hydrogen_bucket', liquid: 'modern_industrialization:hydrogen'},
        {bucket : 'modern_industrialization:light_fuel_bucket', liquid: 'modern_industrialization:light_fuel'},
        {bucket : 'modern_industrialization:liquid_air_bucket', liquid: 'modern_industrialization:liquid_air'},
        {bucket : 'modern_industrialization:lubricant_bucket', liquid: 'modern_industrialization:lubricant'},
        {bucket : 'modern_industrialization:manganese_sulfuric_solution_bucket', liquid: 'modern_industrialization:manganese_sulfuric_solution'},
        {bucket : 'modern_industrialization:methane_bucket', liquid: 'modern_industrialization:methane'},
        {bucket : 'modern_industrialization:molten_redstone_bucket', liquid: 'modern_industrialization:molten_redstone'},
        {bucket : 'modern_industrialization:naphtha_bucket', liquid: 'modern_industrialization:naphtha'},
        {bucket : 'modern_industrialization:nitrogen_bucket', liquid: 'modern_industrialization:nitrogen'},
        {bucket : 'modern_industrialization:nylon_bucket', liquid: 'modern_industrialization:nylon'},
        {bucket : 'modern_industrialization:oxygen_bucket', liquid: 'modern_industrialization:oxygen'},
        {bucket : 'modern_industrialization:plant_oil_bucket', liquid: 'modern_industrialization:plant_oil'},
        {bucket : 'modern_industrialization:platinum_sulfuric_solution_bucket', liquid: 'modern_industrialization:platinum_sulfuric_solution'},
        {bucket : 'modern_industrialization:polyethylene_bucket', liquid: 'modern_industrialization:polyethylene'},
        {bucket : 'modern_industrialization:polyvinyl_chloride_bucket', liquid: 'modern_industrialization:polyvinyl_chloride'},
        {bucket : 'modern_industrialization:propene_bucket', liquid: 'modern_industrialization:propene'},
        {bucket : 'modern_industrialization:purified_platinum_sulfuric_solution_bucket', liquid: 'modern_industrialization:purified_platinum_sulfuric_solution'},
        {bucket : 'modern_industrialization:raw_biodiesel_bucket', liquid: 'modern_industrialization:raw_biodiesel'},
        {bucket : 'modern_industrialization:raw_synthetic_oil_bucket', liquid: 'modern_industrialization:raw_synthetic_oil'},
        {bucket : 'modern_industrialization:shale_oil_bucket', liquid: 'modern_industrialization:shale_oil'},
        {bucket : 'modern_industrialization:sodium_hydroxide_bucket', liquid: 'modern_industrialization:sodium_hydroxide'},
        {bucket : 'modern_industrialization:soldering_alloy_bucket', liquid: 'modern_industrialization:soldering_alloy'},
        {bucket : 'modern_industrialization:sugar_solution_bucket', liquid: 'modern_industrialization:sugar_solution'},
        {bucket : 'modern_industrialization:steam_bucket', liquid: 'modern_industrialization:steam'},
        {bucket : 'modern_industrialization:steam_cracked_heavy_fuel_bucket', liquid: 'modern_industrialization:steam_cracked_heavy_fuel'},
        {bucket : 'modern_industrialization:steam_cracked_light_fuel_bucket', liquid: 'modern_industrialization:steam_cracked_light_fuel'},
        {bucket : 'modern_industrialization:steam_cracked_naphtha_bucket', liquid: 'modern_industrialization:steam_cracked_naphtha'},
        {bucket : 'modern_industrialization:styrene_bucket', liquid: 'modern_industrialization:styrene'},
        {bucket : 'modern_industrialization:styrene_butadiene_bucket', liquid: 'modern_industrialization:styrene_butadiene'},
        {bucket : 'modern_industrialization:styrene_butadiene_rubber_bucket', liquid: 'modern_industrialization:styrene_butadiene_rubber'},
        {bucket : 'modern_industrialization:sulfuric_acid_bucket', liquid: 'modern_industrialization:sulfuric_acid'},
        {bucket : 'modern_industrialization:sulfuric_crude_oil_bucket', liquid: 'modern_industrialization:sulfuric_crude_oil'},
        {bucket : 'modern_industrialization:sulfuric_heavy_fuel_bucket', liquid: 'modern_industrialization:sulfuric_heavy_fuel'},
        {bucket : 'modern_industrialization:sulfuric_light_fuel_bucket', liquid: 'modern_industrialization:sulfuric_light_fuel'},
        {bucket : 'modern_industrialization:sulfuric_naphtha_bucket', liquid: 'modern_industrialization:sulfuric_naphtha'},
        {bucket : 'modern_industrialization:synthetic_oil_bucket', liquid: 'modern_industrialization:synthetic_oil'},
        {bucket : 'modern_industrialization:synthetic_rubber_bucket', liquid: 'modern_industrialization:synthetic_rubber'},
        {bucket : 'modern_industrialization:toluene_bucket', liquid: 'modern_industrialization:toluene'},
        {bucket : 'modern_industrialization:tritium_bucket', liquid: 'modern_industrialization:tritium'},
        {bucket : 'modern_industrialization:hydrazine_bucket', liquid: 'modern_industrialization:hydrazine'},
        {bucket : 'modern_industrialization:vinyl_chloride_bucket', liquid: 'modern_industrialization:vinyl_chloride'},
        {bucket : 'modern_industrialization:uu_matter_bucket', liquid: 'modern_industrialization:uu_matter'},
        {bucket : 'modern_industrialization:wood_gas_bucket', liquid: 'modern_industrialization:wood_gas'},
        {bucket : 'modern_industrialization:advanced_rocket_fuel_bucket', liquid: 'modern_industrialization:advanced_rocket_fuel'},
        {bucket : 'modern_industrialization:ammonia_gas_bucket', liquid: 'modern_industrialization:ammonia_gas'},
        {bucket : 'modern_industrialization:hydrogen_peroxide_bucket', liquid: 'modern_industrialization:hydrogen_peroxide'},
        {bucket : 'modern_industrialization:isopropyl_alcohol_bucket', liquid: 'modern_industrialization:isopropyl_alcohol'},
        {bucket : 'modern_industrialization:acetone_bucket', liquid: 'modern_industrialization:acetone'},
        {bucket : 'modern_industrialization:liquid_mana_bucket', liquid: 'modern_industrialization:liquid_mana'},
        {bucket : 'modern_industrialization:mars_air_bucket', liquid: 'modern_industrialization:mars_air'},
        {bucket : 'modern_industrialization:mercury_air_bucket', liquid: 'modern_industrialization:mercury_air'},
        {bucket : 'modern_industrialization:venus_air_bucket', liquid: 'modern_industrialization:venus_air'},
        {bucket : 'modern_industrialization:glacio_air_bucket', liquid: 'modern_industrialization:glacio_air'},
        {bucket : 'modern_industrialization:nether_air_bucket', liquid: 'modern_industrialization:nether_air'},
        {bucket : 'modern_industrialization:ender_air_bucket', liquid: 'modern_industrialization:ender_air'},
        {bucket : 'modern_industrialization:bee_air_bucket', liquid: 'modern_industrialization:bee_air'},
        {bucket : 'modern_industrialization:morkite_fuel_bucket', liquid: 'modern_industrialization:morkite_fuel'},
        {bucket : 'modern_industrialization:fluorine_gas_bucket', liquid: 'modern_industrialization:fluorine_gas'},
        {bucket : 'modern_industrialization:silicon_tetrafluoride_gas_bucket', liquid: 'modern_industrialization:silicon_tetrafluoride_gas'},
        {bucket : 'modern_industrialization:carbon_monoxide_gas_bucket', liquid: 'modern_industrialization:carbon_monoxide_gas'},
        {bucket : 'modern_industrialization:void_bucket', liquid: 'modern_industrialization:void'},
        {bucket : 'modern_industrialization:purified_void_bucket', liquid: 'modern_industrialization:purified_void'},
        {bucket : 'modern_industrialization:naquadah_sulfuric_solution_bucket', liquid: 'modern_industrialization:naquadah_sulfuric_solution'},
        {bucket : 'modern_industrialization:purified_naquadah_sulfuric_solution_bucket', liquid: 'modern_industrialization:purified_naquadah_sulfuric_solution'},
        {bucket : 'modern_industrialization:mutagen_bucket', liquid: 'modern_industrialization:mutagen'},
        {bucket : 'modern_industrialization:molten_caterium_bucket', liquid: 'modern_industrialization:molten_caterium'},
        {bucket : 'neepmeat:blood_bucket', liquid: 'neepmeat:blood'},
        {bucket : 'neepmeat:work_fluid_bucket', liquid: 'neepmeat:work_fluid'},
        {bucket : 'neepmeat:charged_work_fluid_bucket', liquid: 'neepmeat:charged_work_fluid'},
        {bucket : 'neepmeat:patina_treatment_bucket', liquid: 'neepmeat:patina_treatment'},
        {bucket : 'neepmeat:ethereal_fuel_bucket', liquid: 'neepmeat:ethereal_fuel'},
        {bucket : 'neepmeat:eldritch_enzymes_bucket', liquid: 'neepmeat:eldritch_enzymes'},
        {bucket : 'neepmeat:meat_bucket', liquid: 'neepmeat:meat'},
        {bucket : 'neepmeat:tissue_slurry_bucket', liquid: 'neepmeat:tissue_slurry'},
        {bucket : 'neepmeat:pasteurised_milk_bucket', liquid: 'neepmeat:pasteurised_milk'},
        {bucket : 'neepmeat:animal_feed_bucket', liquid: 'neepmeat:animal_feed'},
        {bucket : 'neepmeat:pinkdrink_bucket', liquid: 'neepmeat:pinkdrink'},
    ]


    bucket_unification.forEach(element => {
        event.recipes.modern_industrialization.bottler(8, 200)
            .itemIn('minecraft:bucket')
            .fluidIn(element.liquid, 1000)
            .itemOut(element.bucket)
    });
    

})