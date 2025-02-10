// // priority: 0

// let machines_to_unpack = [
//     "modern_industrialization:bronze_boiler",
//     "modern_industrialization:steam_quarry",
//     "modern_industrialization:bronze_item_input_hatch",
//     "modern_industrialization:bronze_compressor",
//     "modern_industrialization:bronze_cutting_machine",
//     "modern_industrialization:bronze_furnace",
//     "modern_industrialization:bronze_macerator",
//     "modern_industrialization:bronze_mixer",
//     "modern_industrialization:bronze_water_pump",
//     "modern_industrialization:bronze_boiler",
//     "modern_industrialization:steel_unpacker",
//     "modern_industrialization:steel_boiler",
//     "modern_industrialization:steel_water_pump",
//     "modern_industrialization:steel_fluid_extractor",
//     "modern_industrialization:steel_compressor",
//     "modern_industrialization:steel_cutting_machine",
//     "modern_industrialization:steel_furnace",
//     "modern_industrialization:steel_macerator",
//     "modern_industrialization:steel_mixer",
//     "modern_industrialization:steel_packer",
//     "modern_industrialization:steel_wiremill",

//     "modern_industrialization:assembler",
//     "modern_industrialization:centrifuge",
//     "modern_industrialization:chemical_reactor",
//     "modern_industrialization:electric_compressor",
//     "modern_industrialization:electric_cutting_machine",
//     "modern_industrialization:distillery",
//     "modern_industrialization:electrolyzer",
//     "modern_industrialization:electric_furnace",
//     "modern_industrialization:electric_macerator",
//     "modern_industrialization:electric_mixer",
//     "modern_industrialization:electric_packer",
//     "modern_industrialization:polarizer",
//     "modern_industrialization:electric_wiremill",
//     "modern_industrialization:electric_unpacker",
//     "modern_industrialization:electric_water_pump",
//     "modern_industrialization:lv_steam_turbine",
//     "modern_industrialization:mv_steam_turbine",
//     "modern_industrialization:hv_steam_turbine",
//     "modern_industrialization:lv_storage_unit",
//     "modern_industrialization:mv_storage_unit",
//     "modern_industrialization:hv_storage_unit",
//     "modern_industrialization:ev_storage_unit",
//     "modern_industrialization:superconductor_storage_unit",
//     "modern_industrialization:starter_diesel_generator",
//     "modern_industrialization:diesel_generator",
//     "modern_industrialization:turbo_diesel_generator",
//     "modern_industrialization:electric_quarry",
//     "modern_industrialization:oil_drilling_rig",
//     "modern_industrialization:vacuum_freezer",
//     "modern_industrialization:distillation_tower",
//     "modern_industrialization:large_diesel_generator",
//     "modern_industrialization:large_steam_turbine",
//     "modern_industrialization:heat_exchanger",
//     "modern_industrialization:pressurizer",
//     "modern_industrialization:implosion_compressor",
//     "modern_industrialization:large_tank",
//     "modern_industrialization:fusion_reactor",
//     "modern_industrialization:plasma_turbine",
//     "modern_industrialization:neutronium_compressor",
//     "modern_industrialization:neutron_collector",
//     "modern_industrialization:void_pump",
//     "modern_industrialization:electric_fluid_extractor",
//     "modern_industrialization:bottler",
//     "modern_industrialization:industrial_apiary",
//     "modern_industrialization:thermal_centrifuge",
//     "modern_industrialization:sifting_machine",
//     "modern_industrialization:electric_cooking_pot",
//     "modern_industrialization:garden_cloche",
//     "modern_industrialization:alien_cell",
//     "modern_industrialization:drone_station",
//     "modern_industrialization:industrial_crystallarieum",
//     "modern_industrialization:fission_chamber",
//     "modern_industrialization:fusion_construct",
//     "modern_industrialization:particle_manipulator",
//     "modern_industrialization:dragonbone_crusher",
//     "modern_industrialization:large_apiary",
//     "modern_industrialization:molecular_deconstructor",
//     "modern_industrialization:pyrolyse_chamber",
//     "modern_industrialization:containment_chamber",
//     "modern_industrialization:blast_alloy_smelter",
//     "modern_industrialization:photolithographer",
//     "modern_industrialization:void_distillation_machine",
//     "modern_industrialization:morkite_enricher",
//     "modern_industrialization:satellite",
//     "modern_industrialization:space_miner",
//     "modern_industrialization:soil_analyzer",
//     "modern_industrialization:spatial_forge",
//     "modern_industrialization:growing_chamber",
//     "modern_industrialization:sea_farm",
//     "modern_industrialization:terra_plate_chamber",
//     "modern_industrialization:apothecary_chamber",
//     "modern_industrialization:stainless_steel_tank",
//     "modern_industrialization:titanium_tank",
//     "modern_industrialization:bronze_tank",
//     "modern_industrialization:steel_tank",
//     "modern_industrialization:aluminum_tank",
//     "modern_industrialization:copper_barrel",
//     "modern_industrialization:tin_barrel",
//     "modern_industrialization:iron_barrel",
//     "modern_industrialization:bronze_barrel",
//     "modern_industrialization:steel_barrel",
//     "modern_industrialization:aluminum_barrel",
//     "modern_industrialization:stainless_steel_barrel",
//     "modern_industrialization:titanium_barrel",
//     "modern_industrialization:runic_altar_chamber",
//     "modern_industrialization:pure_daisy_chamber",
//     "modern_industrialization:mana_pool_chamber",
//     "modern_industrialization:elven_gateway_chamber",
//     "modern_industrialization:hydroangeas_generator",
//     "modern_industrialization:thermalily_generator",
//     "modern_industrialization:entropinnyum_generator",
//     "modern_industrialization:munchdew_generator",
//     "modern_industrialization:narslimmus_generator",
//     "modern_industrialization:shulk_me_not_generator",
//     "modern_industrialization:endoflame_generator",
//     "modern_industrialization:rosa_arcana_generator",
//     "modern_industrialization:rafflowsia_generator",
//     "modern_industrialization:spectrolus_generator",
//     "modern_industrialization:gourmaryllis_generator",
//     "modern_industrialization:kekimurus_generator",
//     "modern_industrialization:adamantite_machine_casing_pipe",
//     "modern_industrialization:adamantite_casing",
//     "modern_industrialization:frostproof_machine_casing",
//     "modern_industrialization:blastproof_casing",
//     "modern_industrialization:bronze_machine_casing_pipe",
//     "modern_industrialization:bronze_plated_bricks",
//     "modern_industrialization:compactium_casing",
//     "modern_industrialization:hsla_steel_machine_casing_pipe",
//     "modern_industrialization:space_casing",
//     "modern_industrialization:heatproof_machine_casing",
//     "modern_industrialization:iridium_machine_casing_pipe",
//     "modern_industrialization:plasma_handling_iridium_machine_casing",
//     "modern_industrialization:manasteel_casing",
//     "modern_industrialization:nuclear_alloy_machine_casing_pipe",
//     "modern_industrialization:nuclear_casing",
//     "modern_industrialization:stainless_steel_machine_casing_pipe",
//     "modern_industrialization:clean_stainless_steel_machine_casing",
//     "modern_industrialization:steel_machine_casing_pipe",
//     "modern_industrialization:bronze_machine_casing",
//     "modern_industrialization:advanced_machine_casing",
//     "modern_industrialization:turbo_machine_casing",
//     "modern_industrialization:highly_advanced_machine_casing",
//     "modern_industrialization:quantum_machine_casing",
//     "modern_industrialization:titanium_machine_casing_pipe",
//     "modern_industrialization:solid_titanium_machine_casing",
//     "modern_industrialization:turbinium_machine_casing_pipe",
//     "modern_industrialization:turbinium_casing",
//     "modern_industrialization:unobtanium_casing",
// ]
// let items_to_return = [
//     // priority to return from high to low
//     "modern_industrialization:small_heat_exchanger",
//     "modern_industrialization:large_heat_exchanger",
//     "modern_industrialization:quantum_circuit",
//     "kubejs:chromatically_stable_circuit",
//     "kubejs:photonic_circuit",
//     "modern_industrialization:steel_machine_casing",
//     "modern_industrialization:bronze_machine_casing",
//     "modern_industrialization:basic_machine_hull",
//     "modern_industrialization:advanced_machine_casing",
//     "modern_industrialization:turbo_machine_hull",
//     "modern_industrialization:advanced_machine_hull",
//     "modern_industrialization:turbo_machine_casing",
//     "modern_industrialization:quantum_machine_hull",
//     "modern_industrialization:highly_advanced_machine_hull",
//     "modern_industrialization:quantum_machine_casing",
//     "modern_industrialization:piston",
//     "modern_industrialization:motor",
//     "modern_industrialization:large_motor",
//     "modern_industrialization:pump",
//     "modern_industrialization:large_pump",
//     "modern_industrialization:advanced_pump",
//     "modern_industrialization:large_advanced_pump",
//     "modern_industrialization:advanced_motor",
//     "modern_industrialization:large_advanced_motor",
//     "modern_industrialization:cooling_cell",
//     "modern_industrialization:invar_rotary_blade",
//     "modern_industrialization:robot_arm",
//     "modern_industrialization:conveyor",
//     "modern_industrialization:digital_circuit",
//     "modern_industrialization:processing_unit",
//     "modern_industrialization:electronic_circuit",
//     "modern_industrialization:analog_circuit",

//     "modern_industrialization:solid_titanium_machine_casing",
//     "modern_industrialization:nuclear_alloy_machine_casing_pipe",
//     "modern_industrialization:manasteel_casing",
//     "modern_industrialization:plasma_handling_iridium_machine_casing",
//     "modern_industrialization:iridium_machine_casing_pipe",
//     "modern_industrialization:heatproof_machine_casing",
//     "modern_industrialization:space_casing",
//     "modern_industrialization:hsla_steel_machine_casing_pipe",
//     "modern_industrialization:compactium_casing",
//     "modern_industrialization:bronze_machine_casing_pipe",
//     "modern_industrialization:blastproof_casing",
//     "modern_industrialization:frostproof_machine_casing",
//     "modern_industrialization:adamantite_casing",
//     "modern_industrialization:adamantite_machine_casing_pipe",
//     "modern_industrialization:unobtanium_casing",
//     "modern_industrialization:turbinium_casing",
//     "modern_industrialization:turbinium_machine_casing_pipe",
//     "modern_industrialization:nuclear_casing",
//     "modern_industrialization:clean_stainless_steel_machine_casing",
//     "modern_industrialization:stainless_steel_machine_casing_pipe",
//     "modern_industrialization:steel_machine_casing_pipe",
//     "modern_industrialization:steel_machine_casing",
//     "modern_industrialization:bronze_machine_casing",
//     "modern_industrialization:advanced_machine_casing",
//     "modern_industrialization:turbo_machine_casing",
//     "modern_industrialization:highly_advanced_machine_casing",
//     "modern_industrialization:quantum_machine_casing",
//     "modern_industrialization:titanium_machine_casing_pipe",
//     "minecraft:barrel",
//     "modern_industrialization:fire_clay_bricks",

//     "modern_industrialization:tin_cable",
//     "modern_industrialization:silver_cable",
//     "modern_industrialization:cupronickel_cable",
//     "modern_industrialization:copper_cable",
//     "modern_industrialization:adamantite_cable",
//     "modern_industrialization:electrum_cable",
//     "modern_industrialization:aluminum_cable",
//     "modern_industrialization:kanthal_cable",
//     "modern_industrialization:tungsten_steel_cable",
//     "modern_industrialization:superconductor_cable",
//     "modern_industrialization:unobtanium_cable",
//     "modern_industrialization:caterium_cable",
//     "modern_industrialization:platinum_cable",
//     "modern_industrialization:annealed_copper_cable",


//     "modern_industrialization:tin_plate",
//     "modern_industrialization:tin_curved_plate",
//     "modern_industrialization:tin_large_plate",
//     "modern_industrialization:titanium_plate",
//     "modern_industrialization:titanium_curved_plate",
//     "modern_industrialization:titanium_large_plate",
//     "modern_industrialization:adamantite_curved_plate",
//     "modern_industrialization:adamantite_large_plate",
//     "modern_industrialization:adamantite_plate",
//     "modern_industrialization:steel_curved_plate",
//     "modern_industrialization:steel_large_plate",
//     "modern_industrialization:steel_plate",
//     "modern_industrialization:aluminum_curved_plate",
//     "modern_industrialization:aluminum_large_plate",
//     "modern_industrialization:aluminum_plate",
//     "modern_industrialization:amethyst_large_plate",
//     "modern_industrialization:amethyst_plate",
//     "modern_industrialization:annealed_copper_plate",
//     "modern_industrialization:aquarium_large_plate",
//     "modern_industrialization:aquarium_plate",
//     "modern_industrialization:azurite_curved_plate",
//     "modern_industrialization:azurite_large_plate",
//     "modern_industrialization:azurite_plate",
//     "modern_industrialization:banglum_large_plate",
//     "modern_industrialization:banglum_plate",
//     "modern_industrialization:basalt_large_plate",
//     "modern_industrialization:basalt_plate",
//     "modern_industrialization:battery_alloy_curved_plate",
//     "modern_industrialization:battery_alloy_large_plate",
//     "modern_industrialization:battery_alloy_plate",
//     "modern_industrialization:beryllium_plate",
//     "modern_industrialization:blastproof_alloy_curved_plate",
//     "modern_industrialization:blastproof_alloy_large_plate",
//     "modern_industrialization:blastproof_alloy_plate",
//     "modern_industrialization:bronze_curved_plate",
//     "modern_industrialization:bronze_large_plate",
//     "modern_industrialization:bronze_plate",
//     "modern_industrialization:cadmium_plate",
//     "modern_industrialization:calcite_large_plate",
//     "modern_industrialization:calcite_plate",
//     "modern_industrialization:calorite_curved_plate",
//     "modern_industrialization:calorite_large_plate",
//     "modern_industrialization:carbon_plate",
//     "modern_industrialization:carmot_large_plate",
//     "modern_industrialization:carmot_plate",
//     "modern_industrialization:caterium_plate",
//     "modern_industrialization:celestium_large_plate",
//     "modern_industrialization:celestium_plate",
//     "modern_industrialization:chromium_large_plate",
//     "modern_industrialization:chromium_plate",
//     "modern_industrialization:citrine_large_plate",
//     "modern_industrialization:citrine_plate",
//     "modern_industrialization:compactium_curved_plate",
//     "modern_industrialization:compactium_large_plate",
//     "modern_industrialization:compactium_plate",
//     "modern_industrialization:copper_curved_plate",
//     "modern_industrialization:copper_large_plate",
//     "modern_industrialization:copper_plate",
//     "modern_industrialization:cupronickel_large_plate",
//     "modern_industrialization:cupronickel_plate",
//     "modern_industrialization:desh_curved_plate",
//     "modern_industrialization:desh_large_plate",
//     "modern_industrialization:diamond_large_plate",
//     "modern_industrialization:diamond_plate",
//     "modern_industrialization:durasteel_large_plate",
//     "modern_industrialization:durasteel_plate",
//     "modern_industrialization:electrum_plate",
//     "modern_industrialization:elementium_large_plate",
//     "modern_industrialization:elementium_plate",
//     "modern_industrialization:emerald_plate",
//     "modern_industrialization:gold_curved_plate",
//     "modern_industrialization:gold_large_plate",
//     "modern_industrialization:gold_plate",
//     "modern_industrialization:hallowed_large_plate",
//     "modern_industrialization:hallowed_plate",
//     "modern_industrialization:hsla_steel_curved_plate",
//     "modern_industrialization:hsla_steel_large_plate",
//     "modern_industrialization:hsla_steel_plate",
//     "modern_industrialization:indium_plate",
//     "modern_industrialization:indium_phosphide_large_plate",
//     "modern_industrialization:indium_phosphide_plate",
//     "modern_industrialization:invar_plate",
//     "modern_industrialization:iridium_curved_plate",
//     "modern_industrialization:iridium_plate",
//     "modern_industrialization:iron_large_plate",
//     "modern_industrialization:iron_plate",
//     "modern_industrialization:kanthal_plate",
//     "modern_industrialization:kyber_large_plate",
//     "modern_industrialization:orichalcum_plate",
//     "modern_industrialization:osmium_large_plate",
//     "modern_industrialization:osmium_plate",
//     "modern_industrialization:ostrum_curved_plate",
//     "modern_industrialization:ostrum_large_plate",
//     "modern_industrialization:palladium_large_plate",
//     "modern_industrialization:palladium_plate",
//     "modern_industrialization:platinum_plate",
//     "modern_industrialization:prometheum_large_plate",
//     "modern_industrialization:prometheum_plate",
//     "modern_industrialization:quadrillum_large_plate",
//     "modern_industrialization:quadrillum_plate",
//     "modern_industrialization:redstone_alloy_plate",
//     "modern_industrialization:rocket_alloy_curved_plate",
//     "modern_industrialization:rocket_alloy_large_plate",
//     "modern_industrialization:rocket_alloy_plate",
//     "modern_industrialization:runite_large_plate",
//     "modern_industrialization:runite_plate",
//     "modern_industrialization:silicon_n_doped_plate",
//     "modern_industrialization:silicon_p_doped_plate",
//     "modern_industrialization:silicon_plate",
//     "modern_industrialization:silver_plate",
//     "modern_industrialization:star_platinum_large_plate",
//     "modern_industrialization:star_platinum_plate",
//     "modern_industrialization:steel_curved_plate",
//     "modern_industrialization:steel_large_plate",
//     "modern_industrialization:osmium_plate",
//     "modern_industrialization:ostrum_curved_plate",
//     "modern_industrialization:ostrum_large_plate",
//     "modern_industrialization:palladium_large_plate",
//     "modern_industrialization:palladium_plate",
//     "modern_industrialization:platinum_plate",
//     "modern_industrialization:prometheum_large_plate",
//     "modern_industrialization:prometheum_plate",
//     "modern_industrialization:quadrillum_large_plate",
//     "modern_industrialization:quadrillum_plate",
//     "modern_industrialization:redstone_alloy_plate",
//     "modern_industrialization:rocket_alloy_curved_plate",
//     "modern_industrialization:rocket_alloy_large_plate",
//     "modern_industrialization:rocket_alloy_plate",
//     "modern_industrialization:runite_large_plate",
//     "modern_industrialization:runite_plate",
//     "modern_industrialization:silicon_n_doped_plate",
//     "modern_industrialization:silicon_p_doped_plate",
//     "modern_industrialization:silicon_plate",
//     "modern_industrialization:silver_plate",
//     "modern_industrialization:stainless_steel_curved_plate",
//     "modern_industrialization:stainless_steel_large_plate",
//     "modern_industrialization:stainless_steel_plate",
//     "modern_industrialization:star_platinum_large_plate",
//     "modern_industrialization:star_platinum_plate",
//     "modern_industrialization:steel_curved_plate",
//     "modern_industrialization:steel_large_plate",

//     "modern_industrialization:adamantite_gear",
//     "modern_industrialization:aluminum_gear",
//     "modern_industrialization:bronze_gear",
//     "modern_industrialization:calorite_gear",
//     "modern_industrialization:compactium_gear",
//     "modern_industrialization:copper_gear",
//     "modern_industrialization:desh_gear",
//     "modern_industrialization:gold_gear",
//     "modern_industrialization:hsla_steel_gear",
//     "modern_industrialization:invar_gear",
//     "modern_industrialization:iron_gear",
//     "modern_industrialization:manasteel_gear",
//     "modern_industrialization:midas_gold_gear",
//     "modern_industrialization:ostrum_gear",
//     "modern_industrialization:stainless_steel_gear",
//     "modern_industrialization:steel_gear",
//     "modern_industrialization:tin_gear",
//     "modern_industrialization:titanium_gear",
//     "modern_industrialization:unobtanium_gear",

//     ]
// let items_to_return_limit = 2
// let each_ingreadient_return_limit = 2
// let process_recipes_from = [
//     // priority to return from high to low
//     "minecraft",
//     "modern_industrialization",
//     "spectrum",
//     "neepmeat",
// ]
// let to_print = []
// let to_print_not_found = []

// ServerEvents.recipes(
//     event => {
//         let added_recipes = {}
//         event.addedRecipes.forEach(
//             recipe => {
//                 let item = Item.of(recipe.getOriginalRecipeResult()).id
//                 if (!machines_to_unpack.includes(item)) return
//                 if (added_recipes[item]) {
//                     added_recipes[item].push(recipe)
//                 }
//                 else {
//                     added_recipes[item] = [recipe]
//                 }
//             }
//         )
//         machines_to_unpack.forEach(
//             item => {
//                 let recipes = []
//                 event.forEachRecipe(
//                     {output:item},
//                     recipe => {
//                         recipes.push(recipe)                   
//                     }
//                 )
//                 if (added_recipes[item]) recipes = added_recipes[item].concat(recipes)
//                 let expected_recipe = null
//                 for (let recipe_from of process_recipes_from) {
//                     for (let recipe of recipes) {
//                         if (`${recipe}`.includes(recipe_from)) {
//                             expected_recipe = recipe
//                             break
//                         }
//                     }
//                     if (expected_recipe) break
//                 }
//                 if (!expected_recipe) {
//                     to_print_not_found.push(item)
//                     return
//                 }

//                 let ingredients = expected_recipe.getOriginalRecipeIngredients()
//                 let to_return = []
//                 let to_return_mults = []
//                 for (let item_to_return of items_to_return) {
//                     let mult = 0
//                     for (let ingredient of ingredients) {
//                         ingredient = Item.of(ingredient).id
//                         if (ingredient.includes("ad_astra")) {
//                             ingredient = ingredient.replace("ad_astra", "modern_industrialization")
//                         }
//                         if (ingredient.includes("chemlib")) {
//                             ingredient = ingredient.replace("chemlib", "modern_industrialization")
//                         }
//                         if (item_to_return == ingredient) {
//                             if (!to_return.includes(item_to_return)) {
//                                 to_return.push(item_to_return)
//                             }
//                             if (mult == each_ingreadient_return_limit) break
//                             mult++
//                         }
//                     }
//                     if (mult > 0) to_return_mults.push(mult)
//                     if (to_return.length == items_to_return_limit) break;                
//                 }
//                 if (to_return.length !== 0) {
//                     let result = []
//                     result.push(item)
//                     for (let i = 0; i < to_return.length; i++){
//                         result.push(`${to_return_mults[i]}x ${to_return[i]}`)
//                     }
//                     to_print.push(result)       
//                 }
                    
//             }
//         )
//     }
// )

// function list_all_found(player) {
//     let result = ''
//     for (let recipe of to_print) {
//         result += "{\n"
//         let i = 0
//         for (let item of recipe) {
//            if (i == 0) {
//                 result += `item: "${item}",\n`
//            }
//            else if (i == 1) {
//             result += `ingredients: [\n`
//            }
//            if (i !== 0) {
//             result +=  `"${item}",\n`
//            }
//            i++
//         }
//         result += "],\n"
//         result += "},\n"        
//     }
//     player.tell([
//         Text.gray('- Items: '),
//         Text.darkAqua(result).clickCopy(result).hover('Click to copy items'),
//     ]);
// }

// function list_all_not_found(player) {
//     let result = ''
//     for (let recipe of to_print_not_found) {
//         result +=  `"${recipe}",\n`        
//     }
//     player.tell([
//         Text.gray('- Items: '),
//         Text.darkAqua(result).clickCopy(result).hover('Click to copy items'),
//     ]);
// }

// PlayerEvents.chat(event => {
//     // Check if message starts with "!some_command"
//     if (event.message.startsWith('!aboba')) {
//       // Reply to the player and cancel the event
//       list_all_not_found(event.player)
//       event.cancel()
//     }
//   })
