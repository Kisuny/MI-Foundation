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
    event.groupItems('kubejs:rei_groups/singularity', 'Singularity', [/(?!ae2:quantum_entangled_singularity).*_singularity/]);
    event.groupItems('kubejs:rei_groups/spectrum_head', 'Spectrum Heads', [/spectrum:.*_head/]);
    event.groupItems('kubejs:rei_groups/spawn_egg_adventurez' , 'Spawn Egg AdventureZ', [/.*:spawn_.*/]);
    event.groupItems('kubejs:rei_groups/spectrum_mob_block', 'Spectrum Mob Blocks', [/spectrum:.*_mob_block/]);
    event.groupItems('minecraft:rei_groups/buckets', 'Buckets', [/.*_bucket/,/.*:bucket_of.*/,]);
    event.groupItems('kubejs:rei_groups/kibe_sleeping_bags', 'Sleeping Bags', [/kibe:.*_sleeping_bag/, 'kibe:sleeping_bag']);
    event.groupItems('kubejs:rei_groups/kibe_gliders', 'Gliders', [/kibe:.*_glider/]);
    event.groupItems('kubejs:rei_groups/kibe_elevators', 'Elevators', [/kibe:.*_elevator/]);
    event.groupItems('kubejs:rei_groups/kibe_runes', 'Kibe Runes', [/kibe:.*_rune/]);
    event.groupItems('kubejs:rei_groups/bewitchment_coffins', 'Bewitchment Coffins', [/bewitchment:.*_coffin/]); 
    event.groupItems('kubejs:rei_groups/ad_astra_flags', 'Ad Astra Flags', [/ad_astra:.*flag/]); 
    event.groupItems('kubejs:rei_groups/minecraft_candles', 'Minecraft Candles', [/minecraft:.*candle/]); 
    event.groupItems('kubejs:rei_groups/minecraft_banners', 'Minecraft Banners', [/minecraft:(?!.*pattern).*banner/]); 

    event.groupItems('kubejs:rei_groups/windows', 'Windows', [/mcwwindows:.*_window($|2)/]);
    event.groupItems('kubejs:rei_groups/doors', 'Doors', [/\w+:(\w+_)?\w+_door/]);
    event.groupItems('kubejs:rei_groups/trapdoors', 'Trapdoors', [/\w+:(\w+_)?\w+_trapdoor/]);
    event.groupItems('kubejs:rei_groups/fences', 'Fences', [/\w+:(?!\w+_gate)(\w+_)?\w+_(fence|frise|railing)/]);
    event.groupItems('kubejs:rei_groups/bridges', 'Bridges', [/\w+:(?!quantum_bridge_card)(\w+_)?\w+_bridge/]);
    event.groupItems('kubejs:rei_groups/walls', 'Walls', [/\w+:(?!.*(lantern|candle_holder|invisible|lamp))(\w+_)?\w+_wall/]);
    event.groupItems('kubejs:rei_groups/gates', 'Gates', [/\w+:(?!elven_gateway_chamber|not_gate|or_gate|and_gate|dike_gate|dike_gate_fountain)(\w+_)?\w+_gate/]);
    event.groupItems('kubejs:rei_groups/carpets', 'Carpets', [/\w+:(\w+_)?\w+_carpet/]);
    event.groupItems('kubejs:rei_groups/stairs', 'Stairs', [/\w+:(\w+_)?\w+_stairs/]);
    event.groupItems('kubejs:rei_groups/roofs', 'Roofs', [/\w+:(?!\w+_roof_slab)(\w+_)?\w+_roof/]);
    event.groupItems('kubejs:rei_groups/slabs', 'Slabs', [/\w+:(?!(tiny_layered_.*_slabs|.*vertical.*))(\w+_)?\w+_slab/]);
    event.groupItems('kubejs:rei_groups/paths', 'Paths', [/mcwpaths:(\w+_)?\w+_path/]);
    event.groupItems('kubejs:rei_groups/pavings', 'Pavings', [/\w+:(\w+_)?\w+_paving/]);
    event.groupItems('kubejs:rei_groups/beds', 'Beds', [/\w+:(\w+_)?\w+_bed/]);
    event.groupItems('kubejs:rei_groups/pressure_plate', 'Pressure Plate', [/\w+:(\w+_)?\w+_pressure_plate/]);
    event.groupItems('kubejs:rei_groups/signs', 'Signs', [/^(?!chipped:|miskatonicmysteries:)\w+:\w*sign\w*/]);

    event.groupSameItem('kubejs:rei_groups/botania_brew_vial', 'Botania Brew Vials', Item.of("botania:brew_vial"));
    event.groupSameItem('kubejs:rei_groups/botania_brew_flask', 'Botania Brew Flasks', Item.of("botania:brew_flask"));
    event.groupSameItem('kubejs:rei_groups/botania_blood_pendant', 'Botania Blood Pendants', Item.of("botania:blood_pendant"));
    event.groupSameItem('kubejs:rei_groups/botania_incense_stick', 'Botania Incense Sticks', Item.of("botania:incense_stick"));
    event.groupSameItem('kubejs:rei_groups/spectrum_memory', 'Spectrum Memorys', Item.of("spectrum:memory"));
    event.groupSameItem('kubejs:rei_groups/demonic_contract', 'Demonic Contract', Item.of("bewitchment:demonic_contract"));
    event.groupSameItem('kubejs:rei_groups/twig_wands', 'Twig wands', Item.of("botania:twig_wand"));
    event.groupSameItem('kubejs:rei_groups/dreamwood_wands', 'Dreamwood Wands', Item.of("botania:dreamwood_wand"));
    event.groupSameItem('kubejs:rei_groups/goat_horns', 'Goat horns', Item.of("minecraft:goat_horn"));
    
    event.groupSameItem('kubejs:rei_groups/tipped_runite_arrow', 'Tipped Runite Arrow', Item.of("mythicmetals:tipped_runite_arrow"));
    event.groupSameItem('kubejs:rei_groups/spectrum_infused_beverage', 'Spectrum Infused Beverages', Item.of("spectrum:infused_beverage"));
});
