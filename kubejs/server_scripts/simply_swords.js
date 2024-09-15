ServerEvents.recipes(event => {

    const weapon_type = ['longsword', 'twinblade', 'rapier', 'katana', 'sai', 'spear', 'glaive', 'warglaive', 'cutlass', 'claymore', 'greathammer', 'greataxe', 'chakram', 'scythe', 'halberd']
    const material_set = ['iron', 'gold', 'diamond', 'netherite', 'durasteel']
    const input_item = ['minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot', 'minecraft:diamond', 'mythicmetals:durasteel_ingot']
    weapon_type.forEach(weapon => {
        material_set.forEach(material => {
            input_item.forEach(item => {
            event.replaceInput({id: `simplyswords:${material}_${weapon}`}, `${item}`, `modern_industrialization:${material}_large_plate`)
            });
        });
    });


    //exception for mythic metals
    const mythic_metal_material_set = ['durasteel', 'adamantite', 'aquarium', 'banglum', 'carmot', 'celestium', 'kyber', 'metallurgium', 'mythril', 'orichalcum', 'osmium', 'palladium', 'prometheum', 'quadrillum', 'runite', 'stormyx']

    mythic_metal_material_set.forEach(material => {
        weapon_type.forEach(weapon => {
            event.replaceInput({id: `simplyswords:mythicmetals_compat/${material}/${material}_${weapon}`}, `mythicmetals:${material}_ingot`, `modern_industrialization:${material}_large_plate`)
        });
    });
    // not ingot
    weapon_type.forEach(weapon => {
        event.replaceInput({id: `simplyswords:mythicmetals_compat/star_platinum/star_platinum_${weapon}`}, `mythicmetals:star_platinum`, `modern_industrialization:star_platinum_large_plate`)
    });
    const material_for_removing = ['steel', 'bronze', 'copper', 'osmium']
    weapon_type.forEach(weapon => {
        material_for_removing.forEach(material => {
            event.remove({output: `simplyswords:mythicmetals_compat/${material}/${material}_${weapon}`})
        });
    });

});
