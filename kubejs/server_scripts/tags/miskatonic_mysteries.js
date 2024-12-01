ServerEvents.tags('item', event => {

    const altar_list = ['miskatonicmysteries:blackstone_altar', 'miskatonicmysteries:coral_altar', 'miskatonicmysteries:funky_altar', 'miskatonicmysteries:mossy_stone_altar', 'miskatonicmysteries:nether_brick_altar', 'miskatonicmysteries:prismarine_altar', 'miskatonicmysteries:sandstone_altar', 'miskatonicmysteries:stone_altar', 'miskatonicmysteries:deepslate_altar']
    const chalk_list = ['miskatonicmysteries:yog_chalk', 'miskatonicmysteries:shub_chalk', 'miskatonicmysteries:hastur_chalk', 'miskatonicmysteries:cthulhu_chalk']
    const hastur_mural_list = ['miskatonicmysteries:stone_hastur_mural', 'miskatonicmysteries:mossy_hastur_mural', 'miskatonicmysteries:terracotta_hastur_mural', 'miskatonicmysteries:yellow_terracotta_hastur_mural', 'miskatonicmysteries:elderian_hastur_mural']

    event.add('miskatonicmysteries:altars', altar_list)
    event.add('miskatonicmysteries:chalks', chalk_list)
    event.add('miskatonicmysteries:murals', hastur_mural_list)
    
    });