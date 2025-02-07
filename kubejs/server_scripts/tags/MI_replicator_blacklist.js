ServerEvents.tags('item', event => { 
    const replicator_blaclist = [
        'modern_industrialization:quantum_boots',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_circuit',
        'modern_industrialization:quantum_sword',
        'modern_industrialization:singularity',
        'modern_industrialization:quantum_upgrade',
        'modern_industrialization:quantum_upgrade',
        'modern_industrialization:replicator',
        'modern_industrialization:spatial_forge',
        'ae2:portable_item_cell_1k',
        'ae2:portable_item_cell_4k',
        'ae2:portable_item_cell_16k',
        'ae2:portable_item_cell_64k',
        'ae2:portable_item_cell_256k',
        'ae2:portable_fluid_cell_1k',
        'ae2:portable_fluid_cell_4k',
        'ae2:portable_fluid_cell_16k',
        'ae2:portable_fluid_cell_64k',
        'ae2:portable_fluid_cell_256k',
        'appbot:portable_mana_storage_cell_1k',
        'appbot:portable_mana_storage_cell_4k',
        'appbot:portable_mana_storage_cell_16k',
        'appbot:portable_mana_storage_cell_64k',
        'appbot:portable_mana_storage_cell_256k',
        'megacells:portable_item_cell_1m',
        'megacells:portable_item_cell_4m',
        'megacells:portable_item_cell_16m',
        'megacells:portable_item_cell_64m',
        'megacells:portable_item_cell_256m',
        'megacells:portable_fluid_cell_1m',
        'megacells:portable_fluid_cell_4m',
        'megacells:portable_fluid_cell_16m',
        'megacells:portable_fluid_cell_64m',
        'megacells:portable_fluid_cell_256m',
        'ae2:item_storage_cell_1k',
        'ae2:item_storage_cell_4k',
        'ae2:item_storage_cell_16k',
        'ae2:item_storage_cell_64k',
        'ae2:item_storage_cell_256k',
        'ae2:fluid_storage_cell_1k',
        'ae2:fluid_storage_cell_4k',
        'ae2:fluid_storage_cell_16k',
        'ae2:fluid_storage_cell_64k',
        'ae2:fluid_storage_cell_256k',
        'ae2:spatial_storage_cell_2',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_128',
        'appbot:mana_storage_cell_1k',
        'appbot:mana_storage_cell_4k',
        'appbot:mana_storage_cell_16k',
        'appbot:mana_storage_cell_64k',
        'appbot:mana_storage_cell_256k',
        'megacells:item_storage_cell_1m',
        'megacells:item_storage_cell_4m',
        'megacells:item_storage_cell_16m',
        'megacells:item_storage_cell_64m',
        'megacells:item_storage_cell_256m',
        'megacells:fluid_storage_cell_1m',
        'megacells:fluid_storage_cell_4m',
        'megacells:fluid_storage_cell_16m',
        'megacells:fluid_storage_cell_64m',
        'megacells:fluid_storage_cell_256m',
        'megacells:bulk_item_cell',
        'chunkloaders:single_chunk_loader',
        'chunkloaders:basic_chunk_loader',
        'tempad:tempad',
        'ae2:wireless_crafting_terminal',
        'ae2:wireless_terminal',
        'ae2wtlib:wireless_universal_terminal',
        'ae2wtlib:wireless_pattern_encoding_terminal',
        'ae2wtlib:wireless_pattern_access_terminal',
        'megacells:mana_storage_cell_1m',
        'megacells:mana_storage_cell_4m',
        'megacells:mana_storage_cell_16m',
        'megacells:mana_storage_cell_64m',
        'megacells:mana_storage_cell_256m',
        'chunkloaders:advanced_chunk_loader',
        'megacells:portable_mana_cell_1m',
        'megacells:portable_mana_cell_4m',
        'megacells:portable_mana_cell_16m',
        'megacells:portable_mana_cell_64m',
        'megacells:portable_mana_cell_256m',
    ]
    replicator_blaclist.forEach(element => event.get('modern_industrialization:replicator_blacklist').add(element));
});