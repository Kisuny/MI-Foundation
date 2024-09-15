// tags for small fixes

ServerEvents.tags('item', event => {


    event.add('c:eggs', [
        "minecraft:turtle_egg",
    ])

    // tiered: new reforge stone and default item for reforge
    event.remove('tiered:reforge_addition', 'minecraft:amethyst_shard')
    event.remove('tiered:reforge_base_item', 'minecraft:flint')
    event.add('tiered:reforge_addition', 'kubejs:reforge_rune')
    event.add('tiered:reforge_base_item', 'spectrum:refined_azurite')

    // things: new displacement_tome_fuels
    event.remove('things:displacement_tome_fuels', 'minecraft:ender_pearl')
    event.add('things:displacement_tome_fuels', 'kubejs:teleport_pearl')

    // Chipped tags for REI groups
    event.add('chipped:packed_mud', /.*packed_mud*./)
    event.add('chipped:waxed_exposed_copper', /.*waxed_exposed_copper$/)


    // trinkets tags
    event.add('mif:exploring_trinkets', [
        'things:ender_pouch',
        'things:monocle',
        'things:moss_necklace',
        'things:placebo',
        'things:displacement_tome',
        'things:displacement_page',
        'things:mining_gloves',
        'things:riot_gauntlet',
        'things:infernal_scepter',
        'things:hades_crystal',
        'things:enchanted_wax_gland',
        'things:rabbit_foot_charm',
        'things:luck_of_the_irish',
        'things:hardening_catalyst',
        'things:socks',
        'things:arm_extender',
        'things:shock_absorber',
        'things:broken_watch',
        'things:empty_agglomeration',
        'artifacts:umbrella',
        'artifacts:everlasting_beef',
        'artifacts:eternal_steak',
        'artifacts:plastic_drinking_hat',
        'artifacts:novelty_drinking_hat',
        'artifacts:snorkel',
        'artifacts:night_vision_goggles',
        'artifacts:villager_hat',
        'artifacts:superstitious_hat',
        'artifacts:lucky_scarf',
        'artifacts:scarf_of_invisibility',
        'artifacts:cross_necklace',
        'artifacts:panic_necklace',
        'artifacts:shock_pendant',
        'artifacts:flame_pendant',
        'artifacts:thorn_pendant',
        'artifacts:charm_of_sinking',
        'artifacts:cloud_in_a_bottle',
        'artifacts:obsidian_skull',
        'artifacts:antidote_vessel',
        'artifacts:universal_attractor',
        'artifacts:crystal_heart',
        'artifacts:digging_claws',
        'artifacts:feral_claws',
        'artifacts:power_glove',
        'artifacts:fire_gauntlet',
        'artifacts:pocket_piston',
        'artifacts:vampiric_glove',
        'artifacts:golden_hook',
        'artifacts:aqua_dashers',
        'artifacts:bunny_hoppers',
        'artifacts:kitty_slippers',
        'artifacts:running_shoes',
        'artifacts:steadfast_spikes',
        'artifacts:flippers',
        'artifacts:whoopee_cushion',
        'majruszsaccessories:certificate_of_taming',
        'majruszsaccessories:discount_voucher',
        'majruszsaccessories:dream_catcher',
        'majruszsaccessories:idol_of_fertility',
        'majruszsaccessories:lucky_rock',
        'majruszsaccessories:metal_lure',
        'majruszsaccessories:miner_guide',
        'majruszsaccessories:secret_ingredient',
        'majruszsaccessories:swimmer_guide',
        'majruszsaccessories:tamed_potato_beetle',
        'majruszsaccessories:tool_scraps',
        'majruszsaccessories:unbreakable_fishing_line',
    ])

    // tags for Legendary Tooltips
    event.add('mif:rare_trinkets', [
        'things:moss_necklace',
        'things:monocle',
        'things:enchanted_wax_gland',
        'things:riot_gauntlet',
        'things:mining_gloves',
        'things:hades_crystal',
        'artifacts:feral_claws',
        'artifacts:digging_claws',
        'artifacts:crystal_heart',
        'artifacts:snorkel',
        'artifacts:superstitious_hat',
        'artifacts:night_vision_goggles',
        'artifacts:flippers',
        'artifacts:running_shoes',
        'artifacts:antidote_vessel',
        'artifacts:lucky_scarf'
    ]);

    event.add('mif:trinkets_for_macerator', [
        'artifacts:umbrella',
        'artifacts:everlasting_beef',
        'artifacts:plastic_drinking_hat',
        'artifacts:novelty_drinking_hat',
        'artifacts:snorkel',
        'artifacts:night_vision_goggles',
        'artifacts:villager_hat',
        'artifacts:superstitious_hat',
        'artifacts:lucky_scarf',
        'artifacts:scarf_of_invisibility',
        'artifacts:cross_necklace',
        'artifacts:panic_necklace',
        'artifacts:shock_pendant',
        'artifacts:flame_pendant',
        'artifacts:thorn_pendant',
        'artifacts:charm_of_sinking',
        'artifacts:cloud_in_a_bottle',
        'artifacts:obsidian_skull',
        'artifacts:antidote_vessel',
        'artifacts:universal_attractor',
        'artifacts:crystal_heart',
        'artifacts:helium_flamingo',
        'artifacts:digging_claws',
        'artifacts:feral_claws',
        'artifacts:power_glove',
        'artifacts:fire_gauntlet',
        'artifacts:pocket_piston',
        'artifacts:vampiric_glove',
        'artifacts:golden_hook',
        'artifacts:aqua_dashers',
        'artifacts:bunny_hoppers',
        'artifacts:kitty_slippers',
        'artifacts:running_shoes',
        'artifacts:steadfast_spikes',
        'artifacts:flippers',
        'artifacts:whoopee_cushion',
        'things:monocle',
        'things:ender_pouch',
        'things:moss_necklace',
        'things:displacement_page',
        'things:mining_gloves',
        'things:riot_gauntlet',
        'things:infernal_scepter',
        'things:hades_crystal',
        'things:enchanted_wax_gland',
        'things:rabbit_foot_charm',
        'things:luck_of_the_irish',
        'things:socks',
        'things:broken_watch',
        'majruszsaccessories:adventurer_kit',
        'majruszsaccessories:angler_trophy',
        'majruszsaccessories:certificate_of_taming',
        'majruszsaccessories:discount_voucher',
        'majruszsaccessories:dream_catcher',
        'majruszsaccessories:idol_of_fertility',
        'majruszsaccessories:lucky_rock',
        'majruszsaccessories:metal_lure',
        'majruszsaccessories:miner_guide',
        'majruszsaccessories:secret_ingredient',
        'majruszsaccessories:swimmer_guide',
        'majruszsaccessories:tamed_potato_beetle',
        'majruszsaccessories:tool_scraps',
        'majruszsaccessories:unbreakable_fishing_line'
    ])


});


// Entity tags
ServerEvents.tags('entity_type', event => {
    // Numismatic-overhaul: tag the_bourgeoisie have only on pillager, removed it.
    event.remove('numismatic-overhaul:the_bourgeoisie', 'minecraft:pillager')
})

// Block tags
ServerEvents.tags('block', event => {
    // tags for quests
    event.add('probablychests:any_chests', [
        'probablychests:lush_chest',
        'probablychests:normal_chest',
        'probablychests:rocky_chest',
        'probablychests:stone_chest',
        'probablychests:gold_chest',
        'probablychests:nether_chest',
        'probablychests:shadow_chest',
        'probablychests:ice_chest',
        'probablychests:coral_chest'
    ]);
})

