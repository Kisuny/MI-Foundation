ServerEvents.recipes(event => {
    event.remove({output: [
        'scout:satchel',
        'scout:upgraded_satchel',
        'scout:pouch',
        'scout:upgraded_pouch',
        'scout:satchel_strap',
    ]})
    
    event.shapeless('sophisticatedbackpacks:backpack', ['scout:pouch'])
    event.shapeless('sophisticatedbackpacks:copper_backpack', ['scout:satchel'])
    event.shapeless('sophisticatedbackpacks:copper_backpack', ['scout:upgraded_pouch'])
    event.shapeless('sophisticatedbackpacks:iron_backpack', ['scout:upgraded_satchel'])
});