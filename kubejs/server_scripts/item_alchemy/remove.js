ServerEvents.recipes(event => {
    const rem_id = [
        'itemalchemy:dark_matter_sword',
        'itemalchemy:dark_matter_pickaxe',
        'itemalchemy:dark_matter_axe',
        'itemalchemy:dark_matter_shovel',
        'itemalchemy:dark_matter_hoe',
        'itemalchemy:red_matter_sword',
        'itemalchemy:red_matter_pickaxe',
        'itemalchemy:red_matter_axe',
        'itemalchemy:red_matter_shovel',
        'itemalchemy:red_matter_hoe',
        'itemalchemy:alchemy_chest',
        'itemalchemy:low_covalence_dust',
        'itemalchemy:middle_covalence_dust',
        'itemalchemy:high_covalence_dust',
        'itemalchemy:philosopher_stone2',
        'itemalchemy:philosopher_stone',
        'itemalchemy:alchemy_table'
    ]
    rem_id.forEach(id => {
        event.remove({id: id})
    });

})