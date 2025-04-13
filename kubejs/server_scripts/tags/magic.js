ServerEvents.tags('item', event => {

    event.add("bards:magic_spell_books", ['bards:bards_magic_spell_book', 'bards:bards_war_spell_book', 'bards:bards_endurance_spell_book'])
    event.add("battlemages:magic_spell_books", ['battlemages:battlemages_arcane_spell_book', 'battlemages:battlemages_frost_spell_book', 'battlemages:battlemages_fire_spell_book'])
    event.add("battlemages:battlemage_armor_t1_heads", ['battlemages:arcane_battlemage_armor_t1_head', 'battlemages:frost_battlemage_armor_t1_head', 'battlemages:fire_battlemage_armor_t1_head'])
    event.add("battlemages:battlemage_armor_t1_chests", ['battlemages:arcane_battlemage_armor_t1_chest', 'battlemages:frost_battlemage_armor_t1_chest', 'battlemages:fire_battlemage_armor_t1_chest'])
    event.add("battlemages:battlemage_armor_t1_leggings", ['battlemages:arcane_battlemage_armor_t1_legs', 'battlemages:frost_battlemage_armor_t1_legs', 'battlemages:fire_battlemage_armor_t1_legs'])
    event.add("battlemages:battlemage_armor_t1_boots", ['battlemages:arcane_battlemage_armor_t1_feet', 'battlemages:frost_battlemage_armor_t1_feet', 'battlemages:fire_battlemage_armor_t1_feet']) 
    event.add("battlemages:weapons_t1", [
        'battlemages:iron_fire_sword', 
        'battlemages:iron_frost_hammer', 
        'battlemages:iron_arcane_blade',
        'battlemages:netherite_arcane_blade',
        'battlemages:netherite_frost_hammer',
        'battlemages:netherite_fire_sword',
        'battlemages:iron_arcane_spear', 
        'battlemages:iron_frost_great_hammer', 
        'battlemages:iron_fire_flamberge', 
        'battlemages:netherite_arcane_spear', 
        'battlemages:netherite_frost_great_hammer', 
        'battlemages:netherite_fire_flamberge'
    ])
    event.add("fpapmod:magic_spell_books", ['fpapmod:fell_priest_spell_book', 'fpapmod:fell_paladin_spell_book'])
    event.add("fallenwizardsmod:magic_spell_books", ['fallenwizardsmod:fallen_wizards_arcane_spell_book', 'fallenwizardsmod:fallen_wizards_frost_spell_book', 'fallenwizardsmod:fallen_wizards_fire_spell_book'])
    event.add("morewizardsmod:magic_spell_books", ['morewizardsmod:more_wizards_soul_spell_book', 'morewizardsmod:more_wizards_lightning_spell_book'])
    event.add("paladins:magic_spell_books", ['paladins:paladin_spell_book', 'paladins:priest_spell_book'])
    event.add("wizards:magic_spell_books", ['wizards:arcane_spell_book', 'wizards:fire_spell_book', 'wizards:frost_spell_book'])
    event.add("fpapmod:paladin_t1_swords", [
        'fpapmod:iron_contorted_claymore', 
        'fpapmod:gold_contorted_claymore', 
        'fpapmod:diamond_contorted_claymore', 
        'fpapmod:netherite_contorted_claymore', 
        'fpapmod:iron_halberd', 
        'fpapmod:netherite_battle_axe', 
        'fpapmod:diamond_battle_axe', 
        'fpapmod:gold_battle_axe', 
        'fpapmod:iron_battle_axe', 
        'fpapmod:netherite_halberd', 
        'fpapmod:diamond_halberd', 
        'fpapmod:gold_halberd',
    ])
    event.add("fpapmod:priest_t1_staffs", ['fpapmod:unholy_staff', 'fpapmod:netherite_unholy_staff'])

    event.add("fpapmod:t1_weapons", [
        'fpapmod:iron_contorted_claymore', 
        'fpapmod:gold_contorted_claymore', 
        'fpapmod:diamond_contorted_claymore', 
        'fpapmod:netherite_contorted_claymore', 
        'fpapmod:iron_halberd', 
        'fpapmod:netherite_battle_axe', 
        'fpapmod:diamond_battle_axe', 
        'fpapmod:gold_battle_axe', 
        'fpapmod:iron_battle_axe', 
        'fpapmod:netherite_halberd', 
        'fpapmod:diamond_halberd', 
        'fpapmod:gold_halberd',
        'fpapmod:unholy_staff', 
        'fpapmod:netherite_unholy_staff'
    ])

    event.add("fpapmod:t1_helmets", ['fpapmod:fell_paladin_armor_t1_head', 'fpapmod:fell_priest_robe_t1_head']) 
    event.add("fpapmod:t1_chests", ['fpapmod:fell_paladin_armor_t1_chest', 'fpapmod:fell_priest_robe_t1_chest'])
    event.add("fpapmod:t1_legs", ['fpapmod:fell_paladin_armor_t1_legs', 'fpapmod:fell_priest_robe_t1_legs'])
    event.add("fpapmod:t1_boots", ['fpapmod:fell_paladin_armor_t1_feet', 'fpapmod:fell_priest_robe_t1_feet'])
    event.add("blood_mages:t1_weapons", ['blood_mages:wooden_blood_staff', 'blood_mages:iron_blood_staff', 'blood_mages:netherite_blood_staff'])
    event.add("bards:t1_weapons", ['bards:wooden_flute', 'bards:iron_flute', 'bards:netherite_flute'])
    event.add("druid:t1_weapons", ['druid:wooden_nature_staff', 'druid:iron_nature_staff', 'druid:netherite_nature_staff'])
    event.add("fallenwizardsmod:t1_helmets", [ 'fallenwizardsmod:dark_fire_wizard_armor_t1_head','fallenwizardsmod:dark_frost_wizard_armor_t1_head', 'fallenwizardsmod:dark_arcane_wizard_armor_t1_head'])
    event.add("fallenwizardsmod:t1_chests", ['fallenwizardsmod:dark_frost_wizard_armor_t1_chest', 'fallenwizardsmod:dark_arcane_wizard_armor_t1_chest', 'fallenwizardsmod:dark_fire_wizard_armor_t1_chest'])
    event.add("fallenwizardsmod:t1_legs", ['fallenwizardsmod:dark_fire_wizard_armor_t1_legs', 'fallenwizardsmod:dark_frost_wizard_armor_t1_legs', 'fallenwizardsmod:dark_arcane_wizard_armor_t1_legs'])
    event.add("fallenwizardsmod:t1_boots", ['fallenwizardsmod:dark_frost_wizard_armor_t1_feet', 'fallenwizardsmod:dark_fire_wizard_armor_t1_feet', 'fallenwizardsmod:dark_arcane_wizard_armor_t1_feet'])

    event.add("morewizardsmod:t1_helmets", [ 'morewizardsmod:soul_wizard_armor_t1_head','morewizardsmod:lightning_wizard_armor_t1_head'])
    event.add("morewizardsmod:t1_chests", [ 'morewizardsmod:soul_wizard_armor_t1_chest','morewizardsmod:lightning_wizard_armor_t1_chest'])
    event.add("morewizardsmod:t1_legs", [ 'morewizardsmod:soul_wizard_armor_t1_legs','morewizardsmod:lightning_wizard_armor_t1_legs'])
    event.add("morewizardsmod:t1_feets", [ 'morewizardsmod:soul_wizard_armor_t1_feet','morewizardsmod:lightning_wizard_armor_t1_feet'])


    event.add("fallenwizardsmod:t1_weapons", [
        'fallenwizardsmod:netherite_dark_arcane_staff', 
        'fallenwizardsmod:dark_arcane_staff', 
        'fallenwizardsmod:netherite_dark_frost_staff',
        'fallenwizardsmod:dark_frost_staff', 
        'fallenwizardsmod:netherite_dark_fire_staff', 
        'fallenwizardsmod:dark_fire_staff',
    ])


    event.add("morewizardsmod:t1_weapons", [
        'morewizardsmod:lightning_staff', 
        'morewizardsmod:netherite_lightning_staff', 
        'morewizardsmod:soul_staff',
        'morewizardsmod:netherite_soul_staff'
    ])

    event.add("paladins:t1_helmets", [ 'paladins:priest_robe_head','paladins:paladin_armor_head'])
    event.add("paladins:t1_chests", [ 'paladins:priest_robe_chest','paladins:paladin_armor_chest'])
    event.add("paladins:t1_legs", [ 'paladins:priest_robe_legs','paladins:paladin_armor_legs'])
    event.add("paladins:t1_feets", [ 'paladins:paladin_armor_feet','paladins:priest_robe_feet'])

    event.add("paladins:t1_weapons", [
        'paladins:golden_great_hammer', 
        'paladins:iron_great_hammer', 
        'paladins:stone_great_hammer', 
        'paladins:wooden_great_hammer', 
        'paladins:netherite_claymore', 
        'paladins:diamond_claymore', 
        'paladins:golden_claymore', 
        'paladins:iron_claymore', 
        'paladins:stone_claymore', 
        'paladins:netherite_holy_wand', 
        'paladins:holy_wand', 
        'paladins:acolyte_wand', 
        'paladins:netherite_holy_staff', 
        'paladins:holy_staff', 
        'paladins:netherite_mace', 
        'paladins:diamond_mace', 
        'paladins:golden_mace', 
        'paladins:iron_mace', 
        'paladins:netherite_great_hammer', 
        'paladins:diamond_great_hammer',
    ])

    event.add("wizards:t1_helmets", [ 'wizards:frost_robe_head','wizards:arcane_robe_head', 'wizards:fire_robe_head'])
    event.add("wizards:t1_chests", [ 'wizards:frost_robe_chest','wizards:arcane_robe_chest', 'wizards:fire_robe_chest'])
    event.add("wizards:t1_legs", [ 'wizards:frost_robe_legs','wizards:arcane_robe_legs', 'wizards:fire_robe_legs'])
    event.add("wizards:t1_boots", [ 'wizards:frost_robe_feet','wizards:arcane_robe_feet', 'wizards:fire_robe_feet'])
    
    event.add("wizards:t1_weapons", [
        'wizards:wand_fire', 
        'wizards:staff_netherite_arcane', 
        'wizards:staff_arcane', 
        'wizards:wand_netherite_arcane', 
        'wizards:wand_arcane', 
        'wizards:staff_netherite_frost', 
        'wizards:staff_frost', 
        'wizards:wand_netherite_frost', 
        'wizards:wand_frost', 
        'wizards:staff_netherite_fire', 
        'wizards:staff_fire', 
        'wizards:wand_netherite_fire',
    ])

})