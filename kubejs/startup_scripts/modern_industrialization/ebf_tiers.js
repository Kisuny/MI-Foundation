//priority: 100

// REGISTER NEW TIER FOR EBF
MIMachineEvents.addEbfTiers(event => {
    event.add('modern_industrialization:adamantite_coil', 96, 'Adamantite');
    event.add('modern_industrialization:tungsten_steel_coil', 192, 'Tungsten Steel');
})
