//priority: 98

let GROWING_CHAMBER;
let MOLECULAR_DECONSTRUCTOR;
let SPATIAL_FORGE;
let SOIL_ANALYZER;
let SPACE_MINER;
let SATELLITE;
let MORKITE_ENRICHER;
let VOID_DISTILLATION_MACHINE;
let PHOTOLITHOGRAPHER;
let BLAST_ALLOY_SMELTER;
let CONTAINMENT_CHAMBER;
let PYROLYSE_CHAMBER;
let LARGE_APIARY;
let DRAGONBONE_CRUSHER;
let PARTICLE_MANIPULATOR;
let FUSION_CONSTRUCT;
let FISSION_CHAMBER;
let INDUSTRIAL_CRYSTALLARIEUM;
let SEA_FARM;
let HYDROANGEAS_GENERATOR;
let ENTROPINNYUM_GENERATOR;
let THERMALILY_GENERATOR;
let MUNCHDEW_GENERATOR;
let NARSLIMMUS_GENERATOR;
let SHULK_ME_NOT_GENERATOR;
let ENDOFLAME_GENERATOR;
let ROSA_ARCANA_GENERATOR;
let RAFFLOWSIA_GENERATOR;
let SPECTROLUS_GENERATOR;
let KEKIMURUS_GENERATOR;
let GOURMARYLLIS_GENERATOR;
let TERRA_PLATE_CHAMBER;
let APOTHECARY_CHAMBER;
let RUNIC_ALTAR_CHAMBER;
let PURE_DAISY_CHAMBER;
let MANA_POOL_CHAMBER;
let ELVEN_GATEWAY_CHAMBER;
let DRONE_STATION;
let ALIEN_CELL;
let GARDEN_CLOCHE;
let FOUNDRY;

function register_botania_flower_gen(event, item) {
    const Hatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output','energy_input');
    const Shape = event.layeredShape(item.casing, [
        ['  SSSSS  ','  SSSSS  ','  LLSLL  ','  LLSLL  ','         ','         '],
        [' SSSSSSS ',' SGGGGGS ',' LHHHHHL ',' L     L ','  LLSLL  ','         '],
        ['SSSSSSSSS','SGGWWWGGS','LHH   HHL','L       L',' LL   LL ','   LSL   '],
        ['SSSSSSSSS','SGWWWWWGS','LH  WW HL','L    W  L',' L     L ','  LLSLL  '],
        ['SSSSSSSSS','SGWWWWWGS','SH WWW HS','S   W   S',' S     S ','  SSSSS  '],
        ['SSSSSSSSS','SGWWWWWGS','LH  W  HL','L       L',' L     L ','  LLSLL  '],
        ['SSSSSSSSS','SGGWWWGGS','LHH   HHL','L       L',' LL   LL ','   LSL   '],
        [' SSSSSSS ',' SGGGGGS ',' LHHHHHL ',' L     L ','  LLSLL  ','         '],
        ['  SSSSS  ','  SS#SS  ','  LLSLL  ','  LLSLL  ','         ','         '],
    ])
        .key('H',event.memberOfBlock(item.flower), event.noHatch())
        .key('S',event.memberOfBlock(`modern_industrialization:${item.casing}`), Hatch)
        .key('G',event.memberOfBlock("botania:enchanted_soil"), event.noHatch())
        .key('W',event.memberOfBlock(item.middle_block), event.noHatch())
        .key('L',event.memberOfBlock("spectrum:clear_hummingstone_glass"), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        item.name, item.block_name, item.recipe, Shape,
        event.progressBar(77, 33, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(56, 35, 1, 1), itemOutputs => itemOutputs.addSlots(102, 35, 1, 1),
        fluidInputs => fluidInputs.addSlots(56, 55, 1, 1), fluidOutputs => fluidOutputs.addSlots(102, 55, 1, 1),
        item.casing, item.block_name, true, false, false,
    );

}

// REGISTER RECIPE TYPES
MIMachineEvents.registerRecipeTypes(event => {
    FOUNDRY = event.register('foundry')
	.withItemInputs()
	.withItemOutputs()
	.withFluidInputs()
	.withFluidOutputs()
    GARDEN_CLOCHE = event.register('garden_cloche')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    ALIEN_CELL = event.register('alien_cell')
        .withFluidInputs()
        .withFluidOutputs()
    DRAGONBONE_CRUSHER = event.register('dragonbone_crusher')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    LARGE_APIARY = event.register('large_apiary')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
    PYROLYSE_CHAMBER = event.register('pyrolyse_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    GROWING_CHAMBER = event.register('growing_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
    MOLECULAR_DECONSTRUCTOR = event.register('molecular_deconstructor')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    SPATIAL_FORGE = event.register('spatial_forge')
        .withItemInputs()
        .withItemOutputs()
    SOIL_ANALYZER = event.register('soil_analyzer')
        .withFluidInputs()
        .withItemInputs()
        .withItemOutputs()
    SPACE_MINER = event.register('space_miner')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs()
    SATELLITE = event.register('satellite')
        .withFluidInputs()
        .withItemOutputs()
    MORKITE_ENRICHER = event.register('morkite_enricher')
        .withItemInputs()
        .withFluidInputs()
        .withFluidOutputs()
    VOID_DISTILLATION_MACHINE = event.register('void_distillation_machine')
        .withFluidInputs()
        .withItemOutputs()
    PHOTOLITHOGRAPHER = event.register('photolithographer')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    BLAST_ALLOY_SMELTER = event.register('blast_alloy_smelter')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
    CONTAINMENT_CHAMBER = event.register('containment_chamber')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs()
    PARTICLE_MANIPULATOR = event.register('particle_manipulator')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs()
    FUSION_CONSTRUCT = event.register('fusion_construct')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs()
    FISSION_CHAMBER = event.register('fission_chamber')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    INDUSTRIAL_CRYSTALLARIEUM = event.register('industrial_crystallarieum')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    SEA_FARM = event.register('sea_farm')
        .withFluidInputs()
        .withItemInputs()
        .withItemOutputs()
    DRONE_STATION = event.register('drone_station')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    HYDROANGEAS_GENERATOR = event.register('hydroangeas_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    ENTROPINNYUM_GENERATOR = event.register('entropinnyum_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    THERMALILY_GENERATOR = event.register('thermalily_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    MUNCHDEW_GENERATOR = event.register('munchdew_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    NARSLIMMUS_GENERATOR = event.register('narslimmus_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    SHULK_ME_NOT_GENERATOR = event.register('shulk_me_not_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    ENDOFLAME_GENERATOR = event.register('endoflame_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    ROSA_ARCANA_GENERATOR = event.register('rosa_arcana_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    RAFFLOWSIA_GENERATOR = event.register('rafflowsia_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    SPECTROLUS_GENERATOR = event.register('spectrolus_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    KEKIMURUS_GENERATOR = event.register('kekimurus_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    GOURMARYLLIS_GENERATOR = event.register('gourmaryllis_generator')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    TERRA_PLATE_CHAMBER = event.register('terra_plate_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    APOTHECARY_CHAMBER = event.register('apothecary_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    RUNIC_ALTAR_CHAMBER = event.register('runic_altar_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    PURE_DAISY_CHAMBER = event.register('pure_daisy_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    MANA_POOL_CHAMBER = event.register('mana_pool_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
    ELVEN_GATEWAY_CHAMBER = event.register('elven_gateway_chamber')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
});


// REGISTER MULTIBLOCKS
MIMachineEvents.registerMachines(event => {
    // BLAST ALLOY SMELTER
    const foundryShape = event.layeredShape('heatproof_machine_casing', [
        [' AAA ',' BBB ',' CCC ',' BBB ',' AAA '],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        [' A#A ',' BBB ',' CCC ',' BBB ',' AAA ']
    ])
        .key('A', event.memberOfBlock('modern_industrialization:heatproof_machine_casing'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input'))
        .key('B', event.memberOfBlock('modern_industrialization:kanthal_coil'),event.noHatch())
        .key('C', event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Foundry', 'foundry', FOUNDRY, foundryShape,
        event.progressBar(65, 25, 'triple_arrow'),
        itemInputs => itemInputs.addSlot(70, 30), itemOutputs => itemOutputs.addSlot(60, 30),
        fluidInputs => fluidInputs.addSlots(20, 0, 2, 3), fluidOutputs => fluidOutputs.addSlot(90, 15),
        'heatproof_machine_casing', 'foundry', true, false, false
    );
    // Garden Cloche
    const gardenClocheShape = event.layeredShape('sheet_metal_block', [
        [' c ','CCC','CGC','CGC','CCC',' c '],
        ['ccc','CPC','G G','G G','CLC','cVc'],
        [' c ','C#C','CGC','CGC','CCC',' c ']
    ])
        .key('C', event.memberOfBlock('architects_palette:sheet_metal_block'),event.noHatch())
        .key('c', event.memberOfBlock('architects_palette:sheet_metal_block'),event.hatchOf('energy_input', 'item_input', 'fluid_input', 'item_output'))
        .key('P', event.memberOfBlock('minecraft:podzol'),event.noHatch())
        .key('G', event.memberOfBlock('minecraft:glass_pane'),event.noHatch())
        .key('L', event.memberOfBlock('chipped:smooth_glowstone'),event.noHatch())
        .key('V', event.memberOfBlock('ad_astra:vent'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Garden Cloche', 'garden_cloche', GARDEN_CLOCHE, gardenClocheShape,
        event.progressBar(65, 25, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(42, 27, 1, 3), itemOutputs => itemOutputs.addSlots(95, 27, 2, 3),
        fluidInputs => fluidInputs.addSlots(12, 27, 1, 3), fluidOutputs => {},
        'sheet_metal_block', 'garden_cloche', true, false, false
    )
    // ALIEN_CELL
    const alienCellShape = event.layeredShape('hsla_steel_machine_casing_pipe', [
        [' ppp ',' PPP ',' GGG ','     ',],
        ['pPPPp','PPTPP','GGFGG',' GGG ',],
        ['pPPPp','PTPTP','GFCFG',' GGG ',],
        ['pPPPp','PPTPP','GGFGG',' GGG ',],
        [' p#p ',' PPP ',' GGG ','     ',]
    ])
        .key('P', event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'),event.noHatch())
        .key('p', event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'),event.hatchOf('energy_input', 'item_input', 'fluid_output','fluid_input'))
        .key('T', event.memberOfBlock('neepmeat:basic_tank'),event.noHatch())
        .key('F', event.memberOfBlock('moderndynamics:fluid_pipe'),event.noHatch())
        .key('G', event.memberOfBlock('neepmeat:reinforced_glass'),event.noHatch())
        .key('C', event.memberOfBlock('neepmeat:integrator_egg'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Alien Cell', 'alien_cell', ALIEN_CELL, alienCellShape,
        event.progressBar(60, 22, 'triple_arrow'),
        itemInputs => {}, itemOutputs => {},
        fluidInputs => fluidInputs.addSlot(60,5).addSlot(35,25).addSlot(60,45), fluidOutputs => fluidOutputs.addSlot(85,25),
        'hsla_steel_machine_casing_pipe', 'alien_cell', true, false, false
    )
    // DRONE_STATION
    const droneStationShape = event.layeredShape('space_casing', [
        ['           ','   C C C   ','   p p p   ','           ','           '],
        ['           ','   C C C   ','   D D D   ','           ','           '],
        ['           ','   C C C   ','   D D D   ','           ','           '],
        ['           ','CCCCCCCCCCC','pDDDDDDDDDp','           ','           '],
        ['    ccc    ','   CSSSC   ','   DPCPD   ','     c     ','     c     '],
        ['    ccc    ','CCCCSSSCCCC','pDDDCCCDDDp','    cCc    ','    c#c    '],
        ['    ccc    ','   CSSSC   ','   DPCPD   ','     c     ','     c     '],
        ['           ','CCCCCCCCCCC','pDDDDDDDDDp','           ','           '],
        ['           ','   C C C   ','   D D D   ','           ','           '],
        ['           ','   C C C   ','   D D D   ','           ','           '],
        ['           ','   C C C   ','   p p p   ','           ','           '],
    ])
        .key('C', event.memberOfBlock('modern_industrialization:space_casing'),event.noHatch())
        .key('c', event.memberOfBlock('modern_industrialization:space_casing'),event.hatchOf('energy_input', 'item_input', 'item_output','fluid_input'))
        .key('S', event.memberOfBlock('ae2:64k_crafting_storage'),event.noHatch())
        .key('D', event.memberOfBlock('neepmeat:data_cable'),event.noHatch())
        .key('P', event.memberOfBlock('neepmeat:pylon'),event.noHatch())
        .key('p', event.memberOfBlock('neepmeat:pedestal'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Drone Station', 'drone_station', DRONE_STATION, droneStationShape,
        event.progressBar(60, 21, 'arrow'),
        itemInputs => itemInputs.addSlot(40, 15), itemOutputs => itemOutputs.addSlots(86, 15,4,4),
        fluidInputs => fluidInputs.addSlot(40,32), fluidOutputs => {},
        'space_casing', 'drone_station', false, true, false
    )

    // INDUSTRIAL_CRYSTALLARIEUM
    const industrialCrystallarieumShape = event.layeredShape('chiseled_basalt', [
        ['BBB','PPP','PPP','bbb'],
        ['BBB','PEP','PCP','bbb'],
        ['B#B','PPP','PPP','bbb']
    ])
        .key('B', event.memberOfBlock('spectrum:moonstone_chiseled_basalt'),event.hatchOf('energy_input', 'item_output'))
        .key('E', event.memberOfBlock('spectrum:crystallarieum'),event.noHatch())
        .key('C', event.memberOfBlock('ae2:interface'),event.noHatch())
        .key('P', event.memberOfBlock('ae2:quartz_growth_accelerator'),event.noHatch())
        .key('b', event.memberOfBlock('spectrum:moonstone_chiseled_basalt'),event.hatchOf('item_input','energy_input','fluid_input'))
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Industrial Crystallarieum', 'industrial_crystallarieum', INDUSTRIAL_CRYSTALLARIEUM, industrialCrystallarieumShape,
        event.progressBar(60, 20, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(40, 15, 1, 2), itemOutputs => itemOutputs.addSlots(86, 20,2,1),
        fluidInputs => fluidInputs.addSlot(22, 15), fluidOutputs => {},
        'chiseled_basalt', 'morkite_enricher_overlays', true, false, false
    )
    // FISSION_CHAMBER
    const fissionChamberShape = event.layeredShape('plasma_handling_iridium_machine_casing', [
        ["CCCCCCC","CVVVVVC","CVVVVVC","CVVVVVC","CVVVVVC","CVVVVVC","CCCCCCC"],
        ["CCCCCCC","VSSSSSV","V     V","V     V","VSSSSSV","VSSSSSV","CCCCCCC"],
        ["CCCCCCC","VSFFFSV","V SSS V","V SSS V","VSSSSSV","VSLLLSV","CCcccCC"],
        ["CCCCCCC","VSFFFSV","V S S V","V SLS V","VSSLSSV","VSLLLSV","CCcccCC"],
        ["CCCCCCC","VSFFFSV","V SSS V","V SSS V","VSSSSSV","VSLLLSV","CCcccCC"],
        ["CCCCCCC","VSSSSSV","V     V","V     V","VSSSSSV","VSSSSSV","CCCCCCC"],
        ["CCC#CCC","CVVVVVC","CVVVVVC","CVVVVVC","CVVVVVC","CVVVVVC","CCCCCCC"],
    ])
        .key('C', event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing'),event.noHatch())
        .key('c', event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing'),event.hatchOf('item_input','energy_input', 'fluid_input','item_output'))
        .key('S', event.memberOfBlock('ad_astra:calorite_plating_slab'),event.noHatch())
        .key('V', event.memberOfBlock('minecraft:tinted_glass'),event.noHatch())
        .key('F', event.memberOfBlock('modern_industrialization:fusion_chamber'),event.noHatch())
        .key('L', event.memberOfBlock('kubejs:focal_lens'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Fission Chamber', 'fission_chamber', FISSION_CHAMBER, fissionChamberShape,
        event.progressBar(35, 25, 'macerate'),
        itemInputs => itemInputs.addSlot(10,28).addSlot(35,10), itemOutputs => itemOutputs.addSlots(60,18,1,2),
        fluidInputs => fluidInputs.addSlot(35, 45), fluidOutputs => {},
        'plasma_handling_iridium_machine_casing', 'fission_chamber', true, false, false
    )

    // FUSION_CONSTRUCT
    const fusionConstructShape = event.layeredShape('hsla_steel_machine_casing_pipe', [
        ["           ","           ","           ","     P     ","    CpC    ","   PpppP   ","    CpC    ","     P     ","           ","           ","           "],
        ["           ","           ","     P     ","   CCPCC   ","   CSSSC   ","  PPSFSPP  ","   CSSSC   ","   CCPCC   ","     P     ","           ","           "],
        ["           ","     P     ","   CCPCC   ","  CSSSSSC  ","  CSFFFSC  "," PPSF FSPP ","  CSFFFSC  ","  CSSSSSC  ","   CCPCC   ","     P     ","           "],
        ["     P     ","   CCPCC   ","  CSSSSSC  "," CSFFFFFSC "," CSF   FSC ","PPSF   FSPP"," CSF   FSC "," CSFFFFFSC ","  CSSSSSC  ","   CCPCC   ","     P     "],
        ["    CpC    ","   CSSSC   ","  CSFFFSC  "," CSF   FSC ","CSF     FSC","pSF     FSp","CSF     FSC"," CSF   FSC ","  CSFFFSC  ","   CSSSC   ","    CpC    "],
        ["   PpppP   ","  PPSFSPP  "," PPSF FSPP ","PPSF   FSPP","pSF     FSp","pF       Fp","pSF     FSp","PPSF   FSPP"," PPSF FSPP ","  PPSFSPP  ","   PpppP   "],
        ["    CpC    ","   CSSSC   ","  CSFFFSC  "," CSF   FSC ","CSF     FSC","pSF     FSp","CSF     FSC"," CSF   FSC ","  CSFFFSC  ","   CSSSC   ","    CpC    "],
        ["     P     ","   CCPCC   ","  CSSSSSC  "," CSFFFFFSC "," CSF   FSC ","PPSF   FSPP"," CSF   FSC "," CSFFFFFSC ","  CSSSSSC  ","   CCPCC   ","     P     "],
        ["           ","     P     ","   CCPCC   ","  CSSSSSC  ","  CSFFFSC  "," PPSF FSPP ","  CSFFFSC  ","  CSSSSSC  ","   CCPCC   ","     P     ","           "],
        ["           ","           ","     P     ","   CCPCC   ","   CSSSC   ","  PPSFSPP  ","   CSSSC   ","   CCPCC   ","     P     ","           ","           "],
        ["           ","           ","           ","     P     ","    CpC    ","   Pp#pP   ","    CpC    ","     P     ","           ","           ","           "]
    ])
        .key('P', event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'),event.noHatch())
        .key('p', event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'),event.hatchOf('item_input','energy_input', 'fluid_input','item_output','fluid_output'))
        .key('C', event.memberOfBlock('modern_industrialization:compactium_casing'),event.noHatch())
        .key('F', event.memberOfBlock('modern_industrialization:fusion_chamber'),event.noHatch())
        .key('S', event.memberOfBlock('modern_industrialization:superconductor_coil'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Fusion Construct', 'fusion_construct', FUSION_CONSTRUCT, fusionConstructShape,
        event.progressBar(60, 13, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(10,15,1,2), itemOutputs => itemOutputs.addSlot(110,15),
        fluidInputs => fluidInputs.addSlot(60, 32), fluidOutputs => {},
        'plasma_handling_iridium_machine_casing', 'fusion_construct', true, false, false
    )
    // PARTICLE_MANIPULATOR
    const particleManipulatorShape = event.layeredShape('plasma_handling_iridium_machine_casing', [
        ['CCCCC','CVVVC','CVVVC','CVVVC','CCCCC'],
        ['CCCCC','VNNNV','VNNNV','VNNNV','CPPPC'],
        ['CCCCC','VNSNV','VNSNV','VNSNV','CPPPC'],
        ['CCCCC','VNNNV','VNNNV','VNNNV','CPPPC'],
        ['CC#CC','CVVVC','CVVVC','CVVVC','CCCCC']
    ])
        .key('C', event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing'),event.noHatch())
        .key('V', event.memberOfBlock('minecraft:tinted_glass'),event.noHatch())
        .key('P', event.memberOfBlock('modern_industrialization:iridium_machine_casing_pipe'),event.hatchOf('item_input','energy_input', 'fluid_input','item_output','fluid_output'))
        .key('N', event.memberOfBlock('ad_astra:calorite_plating_slab'),event.noHatch())
        .key('S', event.memberOfBlock('modern_industrialization:superconductor_coil'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Particle Manipulator', 'particle_manipulator', PARTICLE_MANIPULATOR, particleManipulatorShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlot(80,15).addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'plasma_handling_iridium_machine_casing', 'particle_manipulator', true, false, false
    )
    // DRAGONBONE CRUSHER
    const dragonboneCrusherShape = event.layeredShape('adamantite_casing', [
        ['OOO','CBC','CWC','CWC','III','III'],
        ['OOO','BBB','WRW','W W','IPI','I#I'],
        ['OOO','CBC','CWC','CWC','III','III']
    ])
        .key('C', event.memberOfBlock('modern_industrialization:adamantite_casing'),event.noHatch())
        .key('O', event.memberOfBlock('modern_industrialization:adamantite_casing'),event.hatchOf('item_output'))
        .key('I', event.memberOfBlock('modern_industrialization:adamantite_casing'),event.hatchOf('item_input','energy_input', 'fluid_input'))
        .key('W', event.memberOfBlock('kibe:wither_proof_glass'),event.noHatch())
        .key('B', event.memberOfBlock('spectrum:cracked_dragonbone'),event.noHatch())
        .key('P', event.memberOfBlock('botania:natura_pylon'),event.noHatch())
        .key('R', event.memberOfBlock('neepmeat:pylon'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Dragonbone Crusher', 'dragonbone_crusher', DRAGONBONE_CRUSHER, dragonboneCrusherShape,
        event.progressBar(60, 20, 'arrow'),
        itemInputs => itemInputs.addSlots(40, 15, 1, 2), itemOutputs => itemOutputs.addSlot(86, 20),
        fluidInputs => fluidInputs.addSlots(22, 15, 1, 2), fluidOutputs => {},
        'adamantite_casing', 'dragonbone_crusher', false, true, false
    )
    // LARGE APIARY
    const largeApiaryShape = event.layeredShape('planks_dark', [
        ['AAA','BBB','AAA','BBB','DDD'],
        ['AAA','BCB','ACA','BCB','DDD'],
        ['AAA','B#B','AAA','BBB','DDD']
    ])
        .key('B', event.memberOfBlock('the_bumblezone:beehive_beeswax'),event.noHatch())
        .key('A', event.memberOfBlock('minecraft:dark_oak_planks'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input'))
        .key('D', event.memberOfBlock('minecraft:dark_oak_slab'),event.noHatch())
        .key('C', event.memberOfBlock('the_bumblezone:royal_jelly_block'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Large Apiary', 'large_apiary', LARGE_APIARY, largeApiaryShape,
        event.progressBar(60, 20, 'arrow'),
        itemInputs => itemInputs.addSlots(40, 15, 1, 2), itemOutputs => itemOutputs.addSlots(86, 5, 4, 4),
        fluidInputs => fluidInputs.addSlots(22, 15, 1, 2), fluidOutputs => {},
        'wax', 'large_apiary', true, false, false
    )

    // MOLECULAR DECONSTRUCTOR
    const molecularDeconstructorShape = event.layeredShape('compactium_casing', [
        ['           ','    CCC    ','   CC CC   ','  CC   CC  ',' CC     CC ',' C       C ',' CC     CC ','  CC   CC  ','   CC CC   ','    CCC    ','           '],
        ['   AAAAA   ','  aaBCBaa  ',' aaBC CBaa ','aaBC   CBaa','aBC     CBa','aC       Ca','aBC     CBa','aaBC   CBaa',' aaBC CBaa ','  aaBCBaa  ','   AAAAA   '],
        ['           ','    C#C    ','   CC CC   ','  CC   CC  ',' CC     CC ',' C       C ',' CC     CC ','  CC   CC  ','   CC CC   ','    CCC    ','           ']
    ])
        .key('B', event.memberOfBlock('modern_industrialization:superconductor_coil'),event.noHatch())
        .key('A', event.memberOfBlock('modern_industrialization:compactium_casing'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input'))
        .key('a', event.memberOfBlock('modern_industrialization:compactium_casing'),event.noHatch())
        .key('C', event.memberOfBlock('modern_industrialization:nuclear_alloy_machine_casing_pipe'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Molecular Deconstructor', 'molecular_deconstructor', MOLECULAR_DECONSTRUCTOR, molecularDeconstructorShape,
        event.progressBar(57, 30, 'centrifuge'),
        itemInputs => itemInputs.addSlot(36,23), itemOutputs => itemOutputs.addSlots(86,5, 4,4),
        fluidInputs => fluidInputs.addSlot(36, 42), fluidOutputs => {},
        'nuclear_pipe', 'molecular_deconstructor', true, false, false
    )

    // PYROLYSE CHAMBER
    const pyrolyseChamberShape = event.layeredShape('steel', [
        ['ABA','ABA','ABA','ABA'],
        ['ABA','ACA','ACA','ABA'],
        ['ABA','ABA','A#A','ABA']
    ])
        .key('A', event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe'),event.noHatch())
        .key('B', event.memberOfBlock('modern_industrialization:steel_machine_casing'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input', 'fluid_output'))
        .key('C', event.memberOfBlock('modern_industrialization:cupronickel_coil'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Pyrolyse Chamber', 'pyrolyse_chamber', PYROLYSE_CHAMBER, pyrolyseChamberShape,
        event.progressBar(50, 6, 'centrifuge'),
        itemInputs => itemInputs.addSlot(20, 18), itemOutputs => itemOutputs.addSlots(85, 0, 1, 2),
        fluidInputs => fluidInputs.addSlot(20, 0), fluidOutputs => fluidOutputs.addSlots(103, 0, 1, 2),
        'steel', 'pyrolyse_chamber', true, false, false
    )


    // CONTAITMENT CHAMBER
    const contaitmentChamberShape = event.layeredShape('wither_proof_glass', [
        ['BBBBB','BWWWB','BWWWB','BWWWB','BBBBB'],
        ['BWWWB','W   W','W   W','W   W','BWWWB'],
        ['BWWWB','W   W','W R W','W   W','BW#WB'],
        ['BWWWB','W   W','W   W','W   W','BWWWB'],
        ['BBBBB','BWWWB','BWWWB','BWWWB','BBBBB']
    ])
        .key('B', event.memberOfBlock('spectrum:bedrock_storage_block'),event.noHatch())
        .key('W', event.memberOfBlock('kibe:wither_proof_glass'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input'))
        .key('R', event.memberOfBlock('spectrum:ruin'),event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Containment Chamber', 'containment_chamber', CONTAINMENT_CHAMBER, contaitmentChamberShape,
        event.progressBar(22, 8, 'triple_arrow'),
        itemInputs => itemInputs.addSlot(0, 18), itemOutputs => itemOutputs.addSlot(48, 18),
        fluidInputs => fluidInputs.addSlot(0, 0), fluidOutputs => fluidOutputs.addSlot(48, 0),
        'wither_proof_glass', 'containment_chamber', false, true, false
    )

    // BLAST ALLOY SMELTER
    const blastAlloySmelterShape = event.layeredShape('heatproof_machine_casing', [
        [' AAA ',' BBB ',' CCC ',' BBB ',' AAA '],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        ['AAAAA','B   B','C   C','B   B','AAAAA'],
        [' A#A ',' BBB ',' CCC ',' BBB ',' AAA ']
    ])
        .key('A', event.memberOfBlock('modern_industrialization:heatproof_machine_casing'),event.hatchOf('fluid_input', 'item_input', 'item_output', 'energy_input'))
        .key('B', event.memberOfBlock('modern_industrialization:kanthal_coil'),event.noHatch())
        .key('C', event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Blast Alloy Smelter', 'blast_alloy_smelter', BLAST_ALLOY_SMELTER, blastAlloySmelterShape,
        event.progressBar(60, 16, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(20, 0, 2, 3), itemOutputs => itemOutputs.addSlots(86, 9, 1, 2),
        fluidInputs => fluidInputs.addSlots(0, 0, 1, 2), fluidOutputs => {},
        'heatproof_machine_casing', 'blast_alloy_smelter', true, false, false
    );



    // PHOTOLITHOGRAPHER
    const photolithographerShape = event.layeredShape('solid_titanium_machine_casing', [
        ['TTT','TTT','TTT'],
        ['PPT','PLT','PPT'],
        ['TTT','TG#','TTT']
    ])
        .key('T', event.memberOfBlock('modern_industrialization:solid_titanium_machine_casing'),event.hatchOf('fluid_input', 'item_output', 'energy_input','item_input'))
        .key('P', event.memberOfBlock('modern_industrialization:stainless_steel_machine_casing_pipe'),event.noHatch())
        .key('G', event.memberOfBlock('ae2:quartz_vibrant_glass'),event.noHatch())
        .key('L', event.memberOfBlock('kubejs:focal_lens'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Photolithographer', 'photolithographer', PHOTOLITHOGRAPHER, photolithographerShape,
        event.progressBar(78, 21, 'wiremill'),
        itemInputs => itemInputs.addSlots(20,10,2,2).addSlots(62,5,3,1), itemOutputs => itemOutputs.addSlot(120,20),
        fluidInputs => fluidInputs.addSlots(0, 10,1,2), fluidOutputs => {},
        'solid_titanium_machine_casing', 'photolithographer', true, false, false,
    );



    // VOID DISTILLATION MACHINE
    const voidDistillationMachineShape = event.layeredShape('frostproof_machine_casing', [
        [' CCCCC ',' CCCCC ','       ',' ccccc ','       ',' ccccc ','       ',' ccccc ','       ',' CCCCC '],
        ['CCCCCCC','CCVVVCC','  VVV  ','ccVVVcc','  VVV  ','ccVVVcc','  VVV  ','ccVVVcc','  VVV  ','CCCCCCC'],
        ['CCCCCCC','CVKKKVC',' VKKKV ','cVKKKVc',' VKKKV ','cVKKKVc',' VKKKV ','cVKKKVc',' VKKKV ','CCFFFCC'],
        ['CCCCCCC','CVK KVC',' VK KV ','cVK KVc',' VK KV ','cVK KVc',' VK KV ','cVK KVc',' VK KV ','CCFFFCC'],
        ['CCCCCCC','CVKKKVC',' VKKKV ','cVKKKVc',' VKKKV ','cVKKKVc',' VKKKV ','cVKKKVc',' VKKKV ','CCFFFCC'],
        ['CCCCCCC','CCVVVCC','  VVV  ','ccVVVcc','  VVV  ','ccVVVcc','  VVV  ','ccVVVcc','  VVV  ','CCCCCCC'],
        [' CC#CC ',' CCCCC ','       ',' ccccc ','       ',' ccccc ','       ',' ccccc ','       ',' CCCCC ']
    ])
        .key('C', event.memberOfBlock('modern_industrialization:frostproof_machine_casing'), event.hatchOf('energy_input'))
        .key('c', event.memberOfBlock('modern_industrialization:frostproof_machine_casing'), event.hatchOf('item_output'))
        .key('F', event.memberOfBlock('modern_industrialization:frostproof_machine_casing'), event.hatchOf('fluid_input'))
        .key('V', event.memberOfBlock('minecraft:tinted_glass'),event.noHatch())
        .key('K', event.memberOfBlock('modern_industrialization:kanthal_coil'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Void Distillation Machine', 'void_distillation_machine', VOID_DISTILLATION_MACHINE, voidDistillationMachineShape,
        event.progressBar(57, 30, 'centrifuge'),
        itemInputs => {}, itemOutputs => itemOutputs.addSlots(86,5, 4,4),
        fluidInputs => fluidInputs.addSlot(36, 33), fluidOutputs => {},
        'frostproof_machine_casing', 'fusion_reactor', true, false, false,
    );



    // MORKITE ENRICHER
    const morkiteEnricherShape = event.layeredShape('adamantite_casing', [
        ['CCC','PVP','PVP','PVP','PVP','ccc'],
        ['CCC','VNV','VTV','VTV','VNV','ccc'],
        ['C#C','PVP','PVP','PVP','PVP','ccc']
    ])
        .key('C', event.memberOfBlock('modern_industrialization:adamantite_casing'), event.hatchOf('energy_input', 'fluid_output'))
        .key('c', event.memberOfBlock('modern_industrialization:adamantite_casing'), event.hatchOf('item_input', 'fluid_input'))
        .key('P', event.memberOfBlock('modern_industrialization:adamantite_machine_casing_pipe'), event.noHatch())
        .key('V', event.memberOfBlock('minecraft:tinted_glass'), event.noHatch())
        .key('N', event.memberOfBlock('spectrum:ebony_noxcap_gills'), event.noHatch())
        .key('T', event.memberOfBlock('spectrum:topaz_cluster'), event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Morkite Enricher', 'morkite_enricher', MORKITE_ENRICHER, morkiteEnricherShape,
        event.progressBar(57, 23, 'centrifuge'),
        itemInputs => itemInputs.addSlot(36, 15), itemOutputs => {},
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(86,23),
        'adamantite_casing', 'morkite_enricher_overlays', true, false, false,
    );



    // SATELLITE
    const satelliteHatch = event.hatchOf('fluid_input', 'item_output', 'energy_input');
    const satelliteShape = event.layeredShape('space_casing', [
        ['               ','               ','               ','               ','               ','               ','               ','     CCCCC     ','      C C      ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ','   CCC P CCC   ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ','  CC   P   CC  ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ',' CC    P    CC ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ',' C     P     C ','       P       ','               ','               '],
        ['               ','               ','               ','               ','     C   C     ','     C   C     ','     CC CC     ','CC    PPP    CC','      PPP      ','      CCC      ','               '],
        ['               ','               ','      CVC      ','      CVC      ','      VVV      ','      VVV      ','     CCCCC     ','C    PRRRP    C','C    PRRRP    C','     CCCCC     ','      ccc      '],
        ['       L       ','       L       ','      VLV      ','      VLV      ','      VLV      ','      VLV      ','      CLC      ','CPPPPPRLRPPPPPC','    PPRRRPP    ','     CC CC     ','      c#c      '],
        ['               ','               ','      CVC      ','      CVC      ','      VVV      ','      VVV      ','     CCCCC     ','C    PRRRP    C','C    PRRRP    C','     CCCCC     ','      ccc      '],
        ['               ','               ','               ','               ','     C   C     ','     C   C     ','     CC CC     ','CC    PPP    CC','      PPP      ','      CCC      ','               '],
        ['               ','               ','               ','               ','               ','               ','               ',' C     P     C ','       P       ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ',' CC    P    CC ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ','  CC   P   CC  ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ','   CCC P CCC   ','               ','               ','               '],
        ['               ','               ','               ','               ','               ','               ','               ','     CCCCC     ','      C C      ','               ','               ']
    ])
        .key('C', event.memberOfBlock('modern_industrialization:space_casing'),event.noHatch())
        .key('c', event.memberOfBlock('modern_industrialization:space_casing'),satelliteHatch)
        .key('V', event.memberOfBlock('minecraft:tinted_glass'), event.noHatch())
        .key('L', event.memberOfBlock('kubejs:focal_lens'), event.noHatch())
        .key('R', event.memberOfBlock('modern_industrialization:superconductor_coil'), event.noHatch())
        .key('P', event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'), event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Satellite', 'satellite', SATELLITE, satelliteShape,
        event.progressBar(77, 33, 'circuit'),
        itemInputs => {}, itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => {},
        'space_casing', 'satellite_overlays', false, true, false,
    );



    // SPACE MINER
    const minerHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');
    const minerShape = event.layeredShape('space_casing', [
        [' S   S ','       ','       ','       ','       ','       ',],
        ['SPS SPS',' P   P ',' P   P ',' PPSPP ','       ','       ',],
        [' S   S ','       ','  HHH  ',' PCCCP ','  YYY  ','  YYY  ',],
        ['   M   ','   M   ','  HMH  ',' SCCCS ','  Y Y  ','  YYY  ',],
        [' S   S ','       ','  HHH  ',' PCCCP ','  Y#Y  ','  YYY  ',],
        ['SPS SPS',' P   P ',' P   P ',' PPSPP ','       ','       ',],
        [' S   S ','       ','       ','       ','       ','       ',]
    ])
        .key('S',event.memberOfBlock('architects_palette:hazard_slab'),event.noHatch())
        .key('C',event.memberOfBlock('modern_industrialization:space_casing'), event.noHatch())
        .key('Y',event.memberOfBlock('modern_industrialization:space_casing'), minerHatch)
        .key('P',event.memberOfBlock('modern_industrialization:hsla_steel_machine_casing_pipe'),event.noHatch())
        .key('H',event.memberOfBlock('modern_industrialization:heatproof_machine_casing'),event.noHatch())
        .key('M',event.memberOfBlock('ad_astra:marked_iron_pillar'),event.noHatch())
        .build()
    event.simpleElectricCraftingMultiBlock(
        'Space Miner', 'space_miner', SPACE_MINER, minerShape,
        event.progressBar(77, 33, 'arrow'),
        itemInputs => itemInputs.addSlots(56, 35, 1,2), itemOutputs => itemOutputs.addSlots(102, 35, 3, 4),
        fluidInputs => {}, fluidOutputs => fluidOutputs.addSlots(160, 35, 1, 3),
        'space_casing', 'quarry', true, false, false,
    );



    // SOIL ANALYZER
    const labHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const labShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        [ 'CCC', 'CCC', 'PPP' ],
        [ 'CCC', 'C C', 'PVP' ],
        [ 'CCC', 'C C', 'PVP' ],
        [ 'CCC', 'C#C', 'PPP' ]
    ])
        .key('C', event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), labHatch)
        .key('P', event.memberOfBlock('modern_industrialization:stainless_steel_machine_casing_pipe'), event.noHatch())
        .key('V', event.memberOfBlock('ad_astra:vent'),event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Soil Analyzer', 'soil_analyzer', SOIL_ANALYZER, labShape,
        event.progressBar(77, 33, 'circuit'),
        itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => {},
        'clean_stainless_steel_machine_casing', 'lab_overlays', true, false, false,
    );


    // SPATIAL FORGE
    const spatialHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');
    const spatialForgeShape = event.layeredShape('plasma_handling_iridium_machine_casing', [
        [' ABA ','AABAA','ADDDA','BDDDB','ADDDA','AABAA',' ABA '],
        ['AAAAA','AC CA','DC CD','DC CD','DC CD','AC CA','AAAAA'],
        ['BAAAB','B C B','D C D','D C D','D C D','B C B','BAAAB'],
        ['AAAAA','AC CA','DC CD','DC CD','DC CD','AC CA','AAAAA'],
        [' ABA ','AA#AA','ADDDA','BDDDB','ADDDA','AABAA',' ABA ']
    ])
        .key('A',event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing'), spatialHatch)
        .key('B',event.memberOfBlock('modern_industrialization:unobtanium_coil'), event.noHatch())
        .key('C',event.memberOfBlock('ae2:spatial_pylon'), event.noHatch())
        .key('D',event.memberOfBlock('ae2:quartz_vibrant_glass'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Spatial Forge', 'spatial_forge', SPATIAL_FORGE, spatialForgeShape,
        event.progressBar(120, 164, 'circuit'),
        itemInputs => itemInputs.addSlots(36, 35, 7, 7), itemOutputs => itemOutputs.addSlot(143,165),
        fluidInputs => {}, fluidOutputs => {},
        'unobtanium_casing', 'fusion_reactor', true, false, false,
    );



    // GROWING CHAMBER
    const manasteelMember = event.memberOfBlock('modern_industrialization:manasteel_casing');
    const growingChamberHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input');
    const growingChamberShape = event.layeredShape('manasteel_casing', [
        ['AAAAA','ABBBA','ZZZZZ','ZZZZZ','AbbbA'],
        ['AAAAA','BCCCB','Z   Z','Z   Z','bAAAb'],
        ['AAAAA','BCCCB','Z   Z','Z   Z','bASAb'],
        ['AAAAA','BCCCB','Z   Z','Z   Z','bAAAb'],
        ['AAAAA','AB#BA','ZZZZZ','ZZZZZ','AbbbA']
    ])
        .key('B',event.memberOfBlock('modern_industrialization:manasteel_casing'), growingChamberHatch)
        .key('b',event.memberOfBlock('modern_industrialization:manasteel_casing'), event.noHatch())
        .key('A',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), event.noHatch())
        .key('C',event.memberOfBlock('botania:infused_grass'), event.noHatch())
        .key('S',event.memberOfBlock('minecraft:verdant_froglight'), event.noHatch())
        .key('Z',event.memberOfBlock('minecraft:glass_pane'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Growing Chamber', 'growing_chamber', GROWING_CHAMBER, growingChamberShape,
        event.progressBar(77, 33, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(56, 35, 1, 2), itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => fluidInputs.addSlots(36,35,1,2), fluidOutputs => {},
        'manasteel_casing', 'growing_chamber', true, false, false,
    );

    const seaFarmHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const seaFarmShape = event.layeredShape('heatproof_machine_casing', [
        ['HHHHH','HGGGH','HGGGH','HGGGH','HHHHH'],
        ['HSSSH','GWWWG','GWWWG','GWWWG','HSSSH'],
        ['HSSSH','GWWWG','GWWWG','GWWWG','HSLSH'],
        ['HSSSH','GWWWG','GWWWG','GWWWG','HSSSH'],
        ['HHHHH','HG#GH','HGGGH','HGGGH','HHHHH']
    ])
        .key('H',event.memberOfBlock('modern_industrialization:heatproof_machine_casing'), event.noHatch())
        .key('S',event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe'), seaFarmHatch)
        .key('G',event.memberOfBlock('minecraft:glass'), event.noHatch())
        .key('W',event.memberOfBlock('minecraft:water'), event.noHatch())
        .key('L',event.memberOfBlock('architects_palette:algal_lamp'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Sea Farm', 'sea_farm', SEA_FARM, seaFarmShape,
        event.progressBar(77, 33, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(56, 35, 1, 3), itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => fluidInputs.addSlots(36,35,1,1), fluidOutputs => {},
        'heatproof_machine_casing', 'sea_farm', true, false, false,
    );

    const terraPlateHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const terraPlateShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTH','HGGGH','HGGGH','HGGGH','HTTTH'],
        ['TLSLT','GO OG','G   G','GP PG','TCCCT'],
        ['TSLST','G B G','G   G','G   G','TCCCT'],
        ['TLSLT','GO OG','G   G','GP PG','TCCCT'],
        ['HT#TH','HGGGH','HGGGH','HGGGH','HTTTH']
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), terraPlateHatch)
        .key('L',event.memberOfBlock('botania:livingrock'), event.noHatch())
        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('B',event.memberOfBlock('botania:terra_plate'), event.noHatch())
        .key('P',event.memberOfBlock('botania:natura_pylon'), event.noHatch())
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .key('O',event.memberOfBlock('botania:mana_pool'), event.noHatch())
        .key('S',event.memberOfBlock('minecraft:lapis_block'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Terra Plate Chamber', 'terra_plate_chamber', TERRA_PLATE_CHAMBER, terraPlateShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'terra_plate_chamber', true, false, false,
    );

    const apothecaryHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const apothecaryShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTH','HGGGH','HGGGH','HGGGH','HTTTH'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['TCCCT','G B G','G   G','G A G','TCCCT'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['HT#TH','HGGGH','HGGGH','HGGGH','HTTTH']
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), apothecaryHatch)
        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('B',event.memberOfBlock('botania:apothecary_default'), event.noHatch())
        .key('A',event.memberOfBlock('botania:natura_pylon'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Apothecary Chamber', 'apothecary_chamber', APOTHECARY_CHAMBER, apothecaryShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,5), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'apothecary_chamber', true, false, false,
    );

    const runicAltarHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const runicAltarShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTH','HGGGH','HGGGH','HGGGH','HTTTH'],
        ['TCCCT','G B G','G   G','G A G','TCCCT'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['TCCCT','G O G','G   G','G   G','TCCCT'],
        ['HT#TH','HGGGH','HGGGH','HGGGH','HTTTH']
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), runicAltarHatch)
        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('B',event.memberOfBlock('botania:runic_altar'), event.noHatch())
        .key('A',event.memberOfBlock('botania:natura_pylon'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .key('O',event.memberOfBlock('botania:mana_pool'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Runic Altar Chamber', 'runic_altar_chamber', RUNIC_ALTAR_CHAMBER, runicAltarShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'runic_altar_chamber', true, false, false,
    );

    const pureDaisyHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const pureDaisyShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTH','HGGGH','HGGGH','HGGGH','HTTTH'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['TCCCT','G B G','G B G','G B G','TCCCT'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['HT#TH','HGGGH','HGGGH','HGGGH','HTTTH']
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), pureDaisyHatch)
        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('B',event.memberOfBlock('botania:floating_pure_daisy'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Pure Daisy Chamber', 'pure_daisy_chamber', PURE_DAISY_CHAMBER, pureDaisyShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'pure_daisy_chamber', true, false, false,
    );

    const manaPoolHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const manaPoolShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTH','HGGGH','HGGGH','HGGGH','HTTTH'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['TCCCT','G B G','G   G','G A G','TCCCT'],
        ['TCCCT','G   G','G   G','G   G','TCCCT'],
        ['HT#TH','HGGGH','HGGGH','HGGGH','HTTTH']
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), manaPoolHatch)

        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('B',event.memberOfBlock('botania:mana_pool'), event.noHatch())
        .key('A',event.memberOfBlock('botania:natura_pylon'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Mana Pool Chamber', 'mana_pool_chamber', MANA_POOL_CHAMBER, manaPoolShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'mana_pool_chamber', true, false, false,
    );

    const elvenGatewayHatch = event.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input');
    const elvenGatewayShape = event.layeredShape('clean_stainless_steel_machine_casing', [
        ['HTTTTTH','HGGGGGH','HGGGGGH','HGGGGGH','HGGGGGH','HGGGGGH','HTTTTTH'],
        ['TCCCCCT','GO   OG','GP   PG','GP   PG','G     G','G     G','TCCCCCT'],
        ['TCCCCCT','G     G','G     G','G     G','G     G','G     G','TCCCCCT'],
        ['TCCCCCT','G LBL G','GL   LG','GS   SG','GL   LG','G LSL G','TCCCCCT'],
        ['TCCCCCT','G     G','G     G','G     G','G     G','G     G','TCCCCCT'],
        ['TCCCCCT','GO   OG','GP   PG','GP   PG','G     G','G     G','TCCCCCT'],
        ['HTT#TTH','HGGGGGH','HGGGGGH','HGGGGGH','HGGGGGH','HGGGGGH','HTTTTTH'],
    ])
        .key('C',event.memberOfBlock('modern_industrialization:manasteel_casing'), elvenGatewayHatch)
        .key('L',event.memberOfBlock('botania:livingwood'), event.noHatch())
        .key('B',event.memberOfBlock('botania:alfheim_portal'), event.noHatch())
        .key('P',event.memberOfBlock('botania:natura_pylon'), event.noHatch())
        .key('G',event.memberOfBlock('spectrum:clear_hummingstone_glass'), event.noHatch())
        .key('T',event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing'), terraPlateHatch)
        .key('H',event.memberOfBlock('spectrum:polished_calcite_pillar'), event.noHatch())
        .key('O',event.memberOfBlock('botania:mana_pool'), event.noHatch())
        .key('S',event.memberOfBlock('botania:glimmering_livingwood'), event.noHatch())
        .build();
    event.simpleElectricCraftingMultiBlock(
        'Elven Gateway Chamber', 'elven_gateway_chamber', ELVEN_GATEWAY_CHAMBER, elvenGatewayShape,
        event.progressBar(80, 31, 'triple_arrow'),
        itemInputs => itemInputs.addSlots(0,5, 4,4), itemOutputs => itemOutputs.addSlot(115,23),
        fluidInputs => fluidInputs.addSlot(80, 50), fluidOutputs => fluidOutputs.addSlot(115, 42),
        'clean_stainless_steel_machine_casing', 'elven_gateway_chamber', true, false, false,
    );

    let botania_generation_flowers = [
        {
            casing: "frostproof_machine_casing",
            middle_block: "minecraft:blue_ice",
            flower: "botania:hydroangeas",
            block_name: "hydroangeas_generator",
            recipe: HYDROANGEAS_GENERATOR,
            name: "Hydroangeas Generator",
        },
        {
            casing: "heatproof_machine_casing",
            middle_block: "minecraft:magma_block",
            flower: "botania:thermalily",
            block_name: "thermalily_generator",
            recipe: THERMALILY_GENERATOR,
            name: "Thermalily Generator",
        },
        {
            casing: "blastproof_casing",
            middle_block: "modern_industrialization:nuke",
            flower: "botania:entropinnyum",
            block_name: "entropinnyum_generator",
            recipe: ENTROPINNYUM_GENERATOR,
            name: "Entropinnyum Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "botania:green_petal_block",
            flower: "botania:munchdew",
            block_name: "munchdew_generator",
            recipe: MUNCHDEW_GENERATOR,
            name: "Munchdew Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "minecraft:slime_block",
            flower: "botania:narslimmus",
            block_name: "narslimmus_generator",
            recipe: NARSLIMMUS_GENERATOR,
            name: "Narslimmus Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "minecraft:shulker_box",
            flower: "botania:shulk_me_not",
            block_name: "shulk_me_not_generator",
            recipe: SHULK_ME_NOT_GENERATOR,
            name: "Shulk Me Not Generator",
        },
        {
            casing: "heatproof_machine_casing",
            middle_block: "minecraft:coal_block",
            flower: "botania:endoflame",
            block_name: "endoflame_generator",
            recipe: ENDOFLAME_GENERATOR,
            name: "Endoflame Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "minecraft:sculk",
            flower: "botania:rosa_arcana",
            block_name: "rosa_arcana_generator",
            recipe: ROSA_ARCANA_GENERATOR,
            name: "Rosa Arcana Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "botania:glimmering_dreamwood",
            flower: "botania:rafflowsia",
            block_name: "rafflowsia_generator",
            recipe: RAFFLOWSIA_GENERATOR,
            name: "Rafflowsia Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "bwplus:rgb_witch_wool",
            flower: "botania:spectrolus",
            block_name: "spectrolus_generator",
            recipe: SPECTROLUS_GENERATOR,
            name: "Spectrolus Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "farmersdelight:potato_crate",
            flower: "botania:gourmaryllis",
            block_name: "gourmaryllis_generator",
            recipe: GOURMARYLLIS_GENERATOR,
            name: "Gourmaryllis Generator",
        },
        {
            casing: "clean_stainless_steel_machine_casing",
            middle_block: "farmersdelight:potato_crate",
            flower: "botania:kekimurus",
            block_name: "kekimurus_generator",
            recipe: KEKIMURUS_GENERATOR,
            name: "Kekimurus Generator",
        },
    ]

    botania_generation_flowers.forEach(element => {
        register_botania_flower_gen(event, element)
    });

    const TurbiniumSteamTurbineHatch = event.hatchOf('fluid_input', 'energy_output');
    const TurbiniumSteamTurbineShape = event.layeredShape('turbinium_casing', [
        ["CCC","CCC","CCC"],
        ["PPP","P P","PPP"],
        ["PPP","P P","PPP"],
        ["CCC","C#C","CCC"],
    ])
    .key('C',event.memberOfBlock('modern_industrialization:turbinium_casing'), TurbiniumSteamTurbineHatch)
    .key('P',event.memberOfBlock('modern_industrialization:turbinium_machine_casing_pipe'), event.noHatch())
    .build();
    event.simpleGeneratorMultiBlock(
        "Turbinium Steam Turbine", // The english name
        "turbinium_steam_turbine", // The internal name
        TurbiniumSteamTurbineShape, // The multiblock shape
        256000, // Maximum energy generation rate (eu/tick)
        builder => { // The builder (same as for a single block generator)
            builder.fluid("modern_industrialization:steam", 1);
            builder.fluid("modern_industrialization:heavy_waster_steam", 2);
            builder.fluid("modern_industrialization:high_pressure_steam", 64);
            builder.fluid("modern_industrialization:high_pressure_heavy_water_steam", 128);
        },
            // --- Standard model configuration --- //
        "turbinium_casing", // casing
        "steam_turbine", // model folder
        true, false, false // front overlay?, top overlay?, side overlay?
    );
});
