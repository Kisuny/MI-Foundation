ServerEvents.recipes(event => {
    const removeCraftingShaped = [
        'alloy_forgery:polished_basalt_forge_controller',
        'alloy_forgery:polished_calcite_forge_controller',
        'alloy_forgery:polished_blackslag_forge_controller',
        'alloy_forgery:polished_shale_clay_forge_controller',
        'alloy_forgery:polished_bone_ash_forge_controller',
        'alloy_forgery:pyrite_forge_controller'
    ];
    const removeById = [
        'alloy_forgery:titanium_blocks',
        'alloy_forgery:tungsten_blocks',
        'alloy_forgery:compat/titanium_ingot_from_raw_ores',
        'alloy_forgery:compat/titanium_ingot_from_ores',
        'alloy_forgery:compat/tungsten_ingot_from_raw_ores',
        'alloy_forgery:compat/tungsten_ingot_from_ores',
    ]
    removeCraftingShaped.forEach(element => { event.remove({ output: element, type: 'minecraft:crafting_shaped'}) });
    removeById.forEach(element => { event.remove({id: element}) });
});
