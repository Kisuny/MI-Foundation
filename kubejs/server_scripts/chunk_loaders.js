ServerEvents.recipes(event => {
    
    // Basic Chunk Loader
    event.remove({ id: 'chunkloaders:basic_chunk_loader' })
    event.recipes.modern_industrialization.assembler(32, 400)
        // .itemIn('spectrum:paltaeria_fragments')
        .itemIn('neepmeat:enlightened_brain')
        .itemIn('6x modern_industrialization:desh_ring')
        .itemIn('3x neepmeat:bioelectric_organ')
        .itemIn('2x ae2:calculation_processor')
        .itemIn('6x modern_industrialization:stainless_steel_rod_magnetic')
        .itemIn('4x modern_industrialization:quadrillum_plate')
        .fluidIn('neepmeat:work_fluid', 100)
        .fluidIn('modern_industrialization:soldering_alloy', 50)
        .itemOut('chunkloaders:basic_chunk_loader')
        .biome('ad_astra:orbit')

    event.remove({ id: 'chunkloaders:advanced_chunk_loader' })
    customEnchanterCraft(event, {
        time: 1200, experience: 2500, advancement: 'spectrum:midgame/build_enchanting_structure',
        ingredients: [
          {'item': 'chunkloaders:basic_chunk_loader'},
          {'item': 'modern_industrialization:midas_gold_plate'},
          {'item': 'modern_industrialization:midas_gold_plate'},
          {'item': 'botania:rune_greed'},
          {'item': 'botania:rune_sloth'},
          {'item': 'modern_industrialization:midas_gold_plate'},
          {'item': 'modern_industrialization:midas_gold_plate'},
          {'item': 'botania:rune_greed'},
          {'item': 'botania:rune_sloth'},
        ],
        result: {
            'item': 'chunkloaders:advanced_chunk_loader',
        },
    });

    event.remove({ id: 'chunkloaders:ultimate_chunk_loader' })
    event.recipes.neepmeat.manufacture({
        'base': {
            'id': 'chunkloaders:advanced_chunk_loader'
        },
        'steps':[
          {
            'id': 'neepmeat:combine',
            'resource': 'neepmeat:divine_organ'
          },
          {
            'id': 'neepmeat:combine',
            'resource': 'kubejs:chromatically_stable_circuit'
          },
          {
            'id': 'neepmeat:combine',
            'resource': 'ae2:singularity'
          },
          {
            'id': 'neepmeat:combine',
            'resource': 'modern_industrialization:unobtanium_ring'
          },
          {
            'id': 'neepmeat:inject',
            'resource': 'spectrum:liquid_crystal'
          },
          {
            'id': 'neepmeat:combine',
            'resource': 'spectrum:knowledge_gem'
          },
        ],
        'result': {
          'resource': 'chunkloaders:ultimate_chunk_loader',
          'amount': 1
        }
    });
})