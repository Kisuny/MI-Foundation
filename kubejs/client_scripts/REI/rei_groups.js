function replaceAll(string, find, replace) {
    return string.replace(new RegExp(find, 'g'), replace)
}
function getNameOfID(id) {
    let output = "";
    id = replaceAll(id, ":", " ");
    id = replaceAll(id, "_", " ");

    let parts = id.split(" ");
    for (let i = 0; i < parts.length; i++) {
        output += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
        if (i < parts.length - 1) {
            output += " ";
        } else {
            output += "s";
        }
    }
    return output;
}

REIEvents.groupEntries(event => {
    Ingredient.of('@minecraft').getItemIds().forEach((id) => {
        let name = getNameOfID(id);
        id = id.replace('minecraft:', 'chipped:');
        let parts = id.split(':');
        event.groupItemsByTag(`kubejs:rei_groups/${parts[0]}/${parts[1]}`, name, id);
    });

    let terracottas = ['minecraft:terracotta'];
    for(let i=1; i<=66; i++){
        terracottas.push('chipped:terracotta_'+i);
    }

    // Group items
    event.groupItems('kubejs:reigroups/chipped/terracotta', getNameOfID('minecraft:terracotta'), terracottas);
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

    // Same items
    event.groupSameItem("kubejs:rei_groups/common_barrels", "Common barrels", Item.of("sophisticatedstorage:barrel"));
    event.groupSameItem("kubejs:rei_groups/common_barrels_1", "Common barrels T1", Item.of("sophisticatedstorage:limited_barrel_1"));
    event.groupSameItem("kubejs:rei_groups/common_barrels_2", "Common barrels T2", Item.of("sophisticatedstorage:limited_barrel_2"));
    event.groupSameItem("kubejs:rei_groups/common_barrels_3", "Common barrels T3", Item.of("sophisticatedstorage:limited_barrel_3"));
    event.groupSameItem("kubejs:rei_groups/common_barrels_4", "Common barrels T4", Item.of("sophisticatedstorage:limited_barrel_4"));
    event.groupSameItem("kubejs:rei_groups/common_chest", "Common chests", Item.of("sophisticatedstorage:chest"));
    event.groupSameItem("kubejs:rei_groups/common_shulker_boxes", "Common shulker boxes", Item.of("sophisticatedstorage:shulker_box"));

    event.groupSameItem("kubejs:rei_groups/yttr_mercurial_potions", "Yttr mercurial potions", Item.of("yttr:mercurial_potion"));
    event.groupSameItem("kubejs:rei_groups/yttr_splash_mercurial_potions", "Yttr mercurial splash potions", Item.of("yttr:mercurial_splash_potion"));
    event.groupSameItem('kubejs:rei_groups/botania_brew_vial', 'Botania Brew Vials', Item.of("botania:brew_vial"));
    event.groupSameItem('kubejs:rei_groups/botania_brew_flask', 'Botania Brew Flasks', Item.of("botania:brew_flask"));
    event.groupSameItem('kubejs:rei_groups/botania_blood_pendant', 'Botania Blood Pendants', Item.of("botania:blood_pendant"));
    event.groupSameItem('kubejs:rei_groups/botania_incense_stick', 'Botania Incense Sticks', Item.of("botania:incense_stick"));
    event.groupSameItem('kubejs:rei_groups/spectrum_memory', 'Spectrum Memorys', Item.of("spectrum:memory"));
    event.groupSameItem('kubejs:rei_groups/demonic_contract', 'Demonic Contract', Item.of("bewitchment:demonic_contract"));
    
    event.groupSameItem('kubejs:rei_groups/tipped_runite_arrow', 'Tipped Runite Arrow', Item.of("mythicmetals:tipped_runite_arrow"));
    event.groupSameItem('kubejs:rei_groups/spectrum_infused_beverage', 'Spectrum Infused Beverages', Item.of("spectrum:infused_beverage"));
});
