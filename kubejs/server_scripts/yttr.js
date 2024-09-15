// //priority: 0
//
// ServerEvents.recipes(event => {
//     const del = [
//         'yttr:magtank',
//         'yttr:magtube',
//         'yttr:magcapsule',
//         'yttr:inred_cable',
//         'yttr:inred_block',
//         'yttr:inred_and_gate',
//         'yttr:inred_not_gate',
//         'yttr:inred_xor_gate',
//         'yttr:inred_diode',
//         'yttr:inred_shifter',
//         'yttr:inred_transistor',
//         'yttr:inred_encoder',
//         'yttr:inred_oscillator',
//         'yttr:inred_pcb',
//         'yttr:inred_multimeter',
//         'yttr:inred_demo_cycler',
//         'yttr:brookite_axe',
//         'yttr:brookite_pickaxe',
//         'yttr:brookite_shovel',
//         'yttr:brookite_hoe',
//         'yttr:brookite_sword',
//         'yttr:yttrium_dust',
//         'yttr:iron_dust',
//         'yttr:centrifuge',
//         'yttr:xl_iron_ingot',
//         'yttr:transfungus',
//         'yttr:cuprosteel_coil',
//         'yttr:aware_hopper',
//         'yttr:platforms',
//         'yttr:diffractor',
//         'yttr:effector',
//         'yttr:projector',
//         'yttr:shifter',
//     ]
//
//     del.forEach(element => {
//         event.remove({ output: element })
//     })
//     event.remove({ id: 'yttr:centrifuging/gadolinite' })
//     event.remove({ id: 'yttr:centrifuging/raw_gadolinite' })
//
//     //  When view this recipes - get client crash
//     event.remove([
//         "yttr:crafting/spatula",
//         "yttr:crafting/giant_cobblestone",
//         "yttr:crafting/big_iron",
//         "yttr:crafting/big_iron_from_ingot"
//     ])
//
//     customPedestalCraft(event, {
//         tier: "simple", time: 1200, amethyst: 16, topaz: 16, experience: 1.0,
//         pattern: [
//             "Q Q",
//             "W W",
//             "   "
//         ],
//         keys: {
//             "Q": { "item": "spectrum:ethereal_platform" },
//             "W": { "item": "yttr:drop_of_continuity" }
//         },
//         result: {
//             "item": "yttr:platforms",
//             "count": 1
//         },
//         advancement: "spectrum:collect_star_fragment"
//     });
//     customPedestalCraft(event, {
//         tier: "simple", time: 1200, amethyst: 16, topaz: 16, experience: 1.0,
//         pattern: [
//             "EEQ",
//             "EWE",
//             "QEE"
//         ],
//         keys: {
//             "Q": { "item": "yttr:yttrium_block" },
//             "W": { "item": "artifacts:scarf_of_invisibility" },
//             "E": { "item": "yttr:drop_of_continuity" }
//         },
//         result: {
//             "item": "yttr:diffractor",
//             "count": 1
//         },
//         advancement: "spectrum:collect_star_fragment"
//     });
//     customPedestalCraft(event, {
//         tier: "simple", time: 600, amethyst: 48, experience: 1.0,
//         pattern: [
//             "QW ",
//             "WER",
//             " RW"
//         ],
//         keys: {
//             "Q": { "item": "yttr:glassy_void" },
//             "W": { "item": "yttr:yttrium_ingot" },
//             "E": { "item": "architects_palette:ender_pearl_block" },
//             "R": { "item": "adventurez:warthog_shell_piece" },
//         },
//         result: {
//             "item": "yttr:effector",
//             "count": 1
//         },
//         advancement: "spectrum:craft_cmy_pedestal"
//     });
//     customPedestalCraft(event, {
//         tier: "advanced", time: 2200, amethyst: 48, onyx: 2, experience: 1.0,
//         pattern: [
//             "EWR",
//             " QW",
//             "Q E"
//         ],
//         keys: {
//             "Q": { "item": "mythicmetals:celestium_ingot" },
//             "W": { "item": "kubejs:zotzpyre_fang" },
//             "E": { "item": "yttr:drop_of_continuity" },
//             "R": { "item": "spectrum:ethereal_platform" },
//         },
//         result: {
//             "item": "yttr:projector",
//             "count": 1
//         },
//         advancement: "spectrum:midgame/spectrum_midgame"
//     });
//     customPedestalCraft(event, {
//         tier: "advanced", time: 2200, amethyst: 64, onyx: 4, experience: 2.0,
//         pattern: [
//             "QYW",
//             " TY",
//             "R Q"
//         ],
//         keys: {
//             "Q": { "item": "mythicmetals:celestium_ingot" },
//             "W": { "item": "yttr:drop_of_continuity" },
//             "R": { "item": "spectrum:exchanging_staff" },
//             "T": { "item": "spectrum:stratine_gem" },
//             "Y": { "item": "spectrum:mermaids_gem" },
//         },
//         result: {
//             "item": "yttr:shifter",
//             "count": 1
//         },
//         advancement: "spectrum:midgame/collect_stratine"
//     });
//
//     // Implostion compressor
//     event.remove({ id: 'yttr:crafting/armor_plating' })
//     event.recipes.modern_industrialization.implosion_compressor(1, 10) //Eu, ticks
//         .itemIn('2x modern_industrialization:blastproof_alloy_plate')
//         .itemIn('4x modern_industrialization:yttrium_dust')
//         .itemIn('yttr:bedrock_shard')
//         .itemIn('modern_industrialization:industrial_tnt')
//         .itemOut('3x yttr:armor_plating')
//
//     event.remove({ id: 'yttr:crafting/suit_helmet' })
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('ad_astra:space_helmet')
//         .itemIn('ae2:semi_dark_monitor')
//         .itemIn('10x modern_industrialization:electrum_fine_wire')
//         .itemIn('modern_industrialization:carbon_large_plate')
//         .itemIn('5x yttr:armor_plating')
//         .fluidIn('modern_industrialization:argon', 100)
//         .itemOut('yttr:suit_helmet')
//
//     event.remove({ id: 'yttr:crafting/suit_chestplate' })
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('ad_astra:space_suit')
//         .itemIn('modern_industrialization:carbon_large_plate')
//         .itemIn('8x yttr:armor_plating')
//         .itemIn('8x modern_industrialization:electrum_fine_wire')
//         .itemIn('modern_industrialization:nuclear_alloy_large_plate')
//         .itemIn('modern_industrialization:invar_large_plate')
//         .fluidIn('modern_industrialization:argon', 200)
//         .itemOut('yttr:suit_chestplate')
//
//     event.remove({ id: 'yttr:crafting/suit_leggings' })
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('ad_astra:space_pants')
//         .itemIn('7x yttr:armor_plating')
//         .itemIn('modern_industrialization:carbon_large_plate')
//         .itemIn('4x modern_industrialization:cadmium_battery')
//         .itemIn('14x modern_industrialization:electrum_fine_wire')
//         .fluidIn('modern_industrialization:argon', 150)
//         .itemOut('yttr:suit_leggings')
//
//     event.remove({ id: 'yttr:crafting/suit_boots' })
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('ad_astra:space_boots')
//         .itemIn('4x modern_industrialization:piston')
//         .itemIn('4x yttr:armor_plating')
//         .itemIn('modern_industrialization:carbon_large_plate')
//         .itemIn('8x modern_industrialization:electrum_fine_wire')
//         .fluidIn('modern_industrialization:argon', 100)
//         .itemOut('yttr:suit_boots')
//
//     event.remove({ id: 'yttr:crafting/empty_ammo_can' })
//     event.recipes.modern_industrialization.assembler(8, 200)
//         .itemIn('2x modern_industrialization:yttrium_plate')
//         .itemIn('modern_industrialization:compactium_ring')
//         .itemIn('modern_industrialization:silicon_battery')
//         .fluidIn('modern_industrialization:argon', 100)
//         .itemOut('yttr:empty_ammo_can')
//
//     event.remove({ id: 'yttr:crafting/rifle'})
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('modern_industrialization:certus_quartz_lens')
//         .itemIn('exco:rtg_pellet')
//         .itemIn('modern_industrialization:electronic_circuit')
//         .itemIn('2x modern_industrialization:desh_rod')
//         .itemIn('8x modern_industrialization:cupronickel_wire_magnetic')
//         .itemIn('4x modern_industrialization:yttrium_plate')
//         .itemIn('2x modern_industrialization:compactium_ring')
//         .fluidIn('modern_industrialization:argon', 100)
//         .fluidIn('modern_industrialization:molten_redstone', 1000)
//         .itemOut('yttr:rifle')
//
//     event.remove({ id: 'yttr:crafting/bedrock_smasher'})
//     event.recipes.modern_industrialization.assembler(32, 600)
//         .itemIn('modern_industrialization:diamond_large_plate')
//         .itemIn('4x minecraft:obsidian')
//         .itemIn('4x modern_industrialization:blastproof_alloy_curved_plate')
//         .itemIn('8x modern_industrialization:titanium_ring')
//         .fluidIn('modern_industrialization:argon', 500)
//         .itemOut('yttr:bedrock_smasher')
//
//     event.recipes.modern_industrialization.implosion_compressor(1, 10) //Eu, ticks
//         .itemIn('spectrum:bedrock_dust')
//         .itemIn('modern_industrialization:nuke')
//         .itemOut('yttr:bedrock_shard')
//
//     event.remove({ id: 'yttr:crafting/ammo_pack'})
//     event.shaped('yttr:ammo_pack', [
//         'ASA',
//         'SBS',
//         'SCS'
//     ], {
//         S: 'modern_industrialization:yttrium_plate',
//         A: 'kubejs:leather_patch',
//         B: 'travelersbackpack:standard',
//         C: 'yttr:empty_ammo_can'
//     });
//
//     event.remove({ id: 'yttr:crafting/suit_station'})
//     event.shaped('yttr:suit_station', [
//         'SCS',
//         'BDB',
//         'SAS'
//     ], {
//         S: 'modern_industrialization:yttrium_plate',
//         A: 'exco:rtg_pellet',
//         B: 'yttr:armor_plating',
//         C: 'minecraft:armor_stand',
//         D: 'modern_industrialization:advanced_machine_hull'
//     });
//
//     event.remove({ id: 'yttr:crafting/can_filler'})
//     event.shaped('yttr:can_filler', [
//         'SCS',
//         'BDB',
//         'SAS'
//     ], {
//         S: 'modern_industrialization:yttrium_plate',
//         A: 'exco:rtg_pellet',
//         B: 'modern_industrialization:desh_curved_plate',
//         C: 'modern_industrialization:pump',
//         D: 'modern_industrialization:bottler'
//     });
//
//     event.remove({ id: 'yttr:crafting/snare'})
//     event.shaped('yttr:snare', [
//         '  B',
//         ' MR',
//         'BRP'
//     ], {
//         B: 'modern_industrialization:compactium_bolt',
//         M: 'modern_industrialization:cupronickel_wire_magnetic',
//         R: 'modern_industrialization:compactium_rod',
//         P: 'modern_industrialization:redstone_alloy_plate'
//     });
//
// })
