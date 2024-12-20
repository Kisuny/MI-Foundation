//priority: 99

let INDUSTRIAL_APIARY;
let THERMAL_CENTRIFUGE;
let SIFTING_MACHINE;
let BOTTLER;
let EXTRACTOR;
let VOID_PUMP;
let NEUTRON_COLLECTOR;
let NEUTRONIUM_COMPRESSOR;
let ELECTRIC_GREENHOUSE;
let ELECTRIC_COOKING_POT;

MIMachineEvents.registerRecipeTypes(event => {
    INDUSTRIAL_APIARY = event.register('industrial_apiary')
        .withItemInputs()
        .withItemOutputs()
    THERMAL_CENTRIFUGE = event.register('thermal_centrifuge')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    SIFTING_MACHINE = event.register('sifting_machine')
        .withItemInputs()
        .withItemOutputs()
    BOTTLER = event.register('bottler')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
    EXTRACTOR = event.register('fluid_extractor')
        .withItemInputs()
        .withFluidOutputs()
    VOID_PUMP = event.register('void_pump')
        .withItemInputs()
        .withFluidOutputs()
    NEUTRON_COLLECTOR = event.register('neutron_collector')
        .withItemInputs()
        .withItemOutputs()
    NEUTRONIUM_COMPRESSOR = event.register('neutronium_compressor')
       .withItemInputs()
      .withItemOutputs()
    ELECTRIC_GREENHOUSE = event.register('electric_greenhouse')
      .withItemInputs()
      .withFluidInputs()
      .withItemOutputs()
    ELECTRIC_COOKING_POT = event.register('electric_cooking_pot')
      .withItemInputs()
      .withFluidInputs()
      .withItemOutputs()
});



// REGISTER SIMPLE MACHINES
MIMachineEvents.registerMachines(event => {

    // NEUTRONIUM COMPRESSOR
    event.craftingSingleBlock(
        'Neutronium Compressor', 'neutronium_compressor', NEUTRONIUM_COMPRESSOR, ['electric'],
        -1,
        event.progressBar(70, 42, 'arrow'),
        event.efficiencyBar(28, 64),
        event.energyBar(14, 44),
        1, 1, 0, 0,
        16,
        items => items.addSlot(42, 44).addSlot(100,44), fluids => {},
        true, true, true,
    );

    // NEUTRON COLLECTOR
    event.craftingSingleBlock(
        'Neutron Collector', 'neutron_collector', NEUTRON_COLLECTOR, ['electric'],
        -1,
        event.progressBar(70, 28, 'arrow'),
        event.efficiencyBar(28, 64),
        event.energyBar(14, 30),
        1, 1, 0, 0,
        16,
        items => items.addSlot(42, 30).addSlot(100,30), fluids => {},
        true, true, true,
    );

    // VOID PUMP
    event.craftingSingleBlock(
        'Void Pump', 'void_pump', VOID_PUMP, ['electric'],
        -1,
        event.progressBar(70, 28, 'extract'),
        event.efficiencyBar(35, 60),
        event.energyBar(14, 30),
        1, 0, 0, 1,
        8,
        items => items.addSlot(40, 30), fluids => fluids.addSlot(100, 30),
        true, true, true,
    );

    // FLUID EXTRACTOR
    event.craftingSingleBlock(
        'Fluid Extractor', 'fluid_extractor', EXTRACTOR, ['steel', 'electric'],
        -1,
        event.progressBar(70, 30, 'triple_arrow'),
        event.efficiencyBar(28, 64),
        event.energyBar(14, 30),
        1, 0, 0, 1,
        8,
        items => items.addSlot(44, 30), fluids => fluids.addSlot(100, 30),
        true, false, true,
    );

    // BOTTLER
    event.craftingSingleBlock(
        'Bottler', 'bottler', BOTTLER, ['electric'],
        186,
        event.progressBar(70, 44, 'triple_arrow'),
        event.efficiencyBar(40, 80),
        event.energyBar(14, 44),
        1, 1, 1, 0,
        16,
        items => items.addSlot(42, 55).addSlot(100, 45), fluids => fluids.addSlot(42, 37),
        true, false, true,
    );

    // INDUSTRIAL APIARY
    event.craftingSingleBlock(
        'Industrial Apiary', 'industrial_apiary', INDUSTRIAL_APIARY, ['electric'],
        186,
        event.progressBar(70, 45, 'arrow'),
        event.efficiencyBar(48, 86),
        event.energyBar(14, 44),
        2, 16, 0, 0,
        16,
        items => items.addSlots(42, 37, 1, 2).addSlots(100, 27, 4, 4), fluids => { },
        true, true, true,
    );

    // THERMAL CENTRIFUGE
    event.craftingSingleBlock(
        'Thermal Centrifuge', 'thermal_centrifuge', THERMAL_CENTRIFUGE, ['electric'],
        186,
        event.progressBar(70, 45, 'arrow'),
        event.efficiencyBar(40, 86),
        event.energyBar(14, 44),
        2, 3, 0, 0,
        16,
        items => items.addSlots(42, 37, 1, 2).addSlots(100, 27, 1, 3), fluids => { },
        true, false, false,
    );


    // SIFTING MACHINE
    event.craftingSingleBlock(
        'Sifting Machine', 'sifting_machine', SIFTING_MACHINE, ['electric'],
        186,
        event.progressBar(70, 44, 'arrow'),
        event.efficiencyBar(40, 86),
        event.energyBar(14, 44),
        1, 9, 0, 0,
        16,
        items => items.addSlot(42, 45).addSlots(100, 27, 3, 3), fluids => { },
        true, false, false,
    );

    // Electric Greenhouse
    event.craftingSingleBlock(
        'Electric Greenhouse', 'electric_greenhouse', ELECTRIC_GREENHOUSE, ['electric'],
        186,
        event.progressBar(61, 45, 'arrow'),
        event.efficiencyBar(42, 86),
        event.energyBar(14, 44),
        3, 6, 3, 0,
        16,
        items => items.addSlots(42, 27, 1, 3).addSlots(95, 27, 2, 3), fluids => fluids.addSlots(12, 27, 1, 3),
        true, false, false,
    );

    // Electric Cooking Pot
    event.craftingSingleBlock(
        'Electric Cooking Pot', 'electric_cooking_pot', ELECTRIC_COOKING_POT, ['electric'],
        186,
        event.progressBar(105, 45, 'arrow'),
        event.efficiencyBar(42, 86),
        event.energyBar(14, 44),
        9, 3, 3, 0,
        16,
        items => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 3), fluids => fluids.addSlots(12, 27, 1, 3),
        true, true, false,
    );
});
