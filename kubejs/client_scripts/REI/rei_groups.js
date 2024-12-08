REIEvents.groupEntries(event => {
    // Group items
    event.groupItems('kubejs:rei_groups/drills/gold', 'Gold Drills', [/.*gold_drill/]);
    event.groupItems('kubejs:rei_groups/drills/aluminum', 'Aluminum Drills', [/.*aluminum_drill/]);
    event.groupItems('kubejs:rei_groups/drills/bronze', 'Bronze Drills', [/.*bronze_drill/]);
    event.groupItems('kubejs:rei_groups/drills/calorite', 'Calorite Drills', [/.*calorite_drill/]);
    event.groupItems('kubejs:rei_groups/drills/copper', 'Copper Drills', [/.*copper_drill/]);
    event.groupItems('kubejs:rei_groups/drills/desh', 'Desh Drills', [/.*desh_drill/]);
    event.groupItems('kubejs:rei_groups/drills/ostrum', 'Ostrum Drills', [/.*ostrum_drill/]);
    event.groupItems('kubejs:rei_groups/drills/steel', 'Steel Drills', ['/.*(?<!stainless_)steel_drill/']);
    event.groupItems('kubejs:rei_groups/drills/stainless_steel', 'Stainless Steel Drills', [/.*stainless_steel_drill/]);
    event.groupItems('kubejs:rei_groups/drills/titanium', 'Titanium Drills', [/.*titanium_drill/]);
    event.groupItems('kubejs:rei_groups/singularity', 'Singularity', [/.*_singularity/]);
    event.groupItems('kubejs:rei_groups/spectrum_head', 'Spectrum Heads', [/spectrum:.*_head/]);
    event.groupItems('kubejs:rei_groups/spawn_egg_adventurez' , 'Spawn Egg AdventureZ', [/.*:spawn_.*/]);
    event.groupItems('kubejs:rei_groups/spectrum_mob_block', 'Spectrum Mob Blocks', [/spectrum:.*_mob_block/]);
    event.groupItems('minecraft:rei_groups/buckets', 'Buckets', [/.*_bucket/,/.*:bucket_of.*/,]);

    // УБРАТЬ
    event.groupItems('kubejs:rei_groups/MCW_windows', 'MCW Windows', [/mcwwindows:.*_window($|2)/]);

    event.groupSameItem('kubejs:rei_groups/botania_brew_vial', 'Botania Brew Vials', Item.of("botania:brew_vial"));
    event.groupSameItem('kubejs:rei_groups/botania_brew_flask', 'Botania Brew Flasks', Item.of("botania:brew_flask"));
    event.groupSameItem('kubejs:rei_groups/botania_blood_pendant', 'Botania Blood Pendants', Item.of("botania:blood_pendant"));
    event.groupSameItem('kubejs:rei_groups/botania_incense_stick', 'Botania Incense Sticks', Item.of("botania:incense_stick"));
    event.groupSameItem('kubejs:rei_groups/spectrum_memory', 'Spectrum Memorys', Item.of("spectrum:memory"));
    event.groupSameItem('kubejs:rei_groups/demonic_contract', 'Demonic Contract', Item.of("bewitchment:demonic_contract"));
    
    event.groupSameItem('kubejs:rei_groups/tipped_runite_arrow', 'Tipped Runite Arrow', Item.of("mythicmetals:tipped_runite_arrow"));
    event.groupSameItem('kubejs:rei_groups/spectrum_infused_beverage', 'Spectrum Infused Beverages', Item.of("spectrum:infused_beverage"));
});
