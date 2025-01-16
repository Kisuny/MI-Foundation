EntityEvents.spawned(['miskatonicmysteries:aberration', 'miskatonicmysteries:phantasma'],event =>{
    event.cancel()
})

ItemEvents.rightClicked("bewitchment:ectoplasm", event => {
    let target_block = event.target.block
    let is_powered = target_block.getProperties().powered                

    if( target_block !== 'miskatonicmysteries:resonator' || is_powered !== "true" ) return
    if ( !event.player.isCreative()) { event.item.count-- }
    event.player.give('miskatonicmysteries:resonate_ooze')
})

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:charcoal')
        .itemIn('minecraft:calcite')
        .itemIn('minecraft:quartz')
        .fluidIn('modern_industrialization:black_ink', 100)
        .itemOut('miskatonicmysteries:shub_chalk')
    
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:glowstone_dust')
        .itemIn('minecraft:calcite')
        .itemIn('minecraft:quartz')
        .fluidIn('modern_industrialization:yellow_ink', 100)
        .itemOut('miskatonicmysteries:hastur_chalk')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:prismarine_shard')
        .itemIn('minecraft:calcite')
        .itemIn('minecraft:quartz')
        .fluidIn('modern_industrialization:purple_ink', 100)
        .itemOut('miskatonicmysteries:yog_chalk')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:prismarine_shard')
        .itemIn('minecraft:calcite')
        .itemIn('minecraft:quartz')
        .fluidIn('modern_industrialization:green_ink', 100)
        .itemOut('miskatonicmysteries:cthulhu_chalk')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:nether_wart')
        .itemIn('miskatonicmysteries:infested_wheat')
        .itemIn('miskatonicmysteries:syringe')
        .fluidIn('spectrum:liquid_crystal', 200)
        .itemOut('miskatonicmysteries:re_agent_syringe')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('miskatonicmysteries:resonate_ooze')
        .itemIn('miskatonicmysteries:infested_wheat')
        .itemIn('miskatonicmysteries:blotter')
        .fluidIn('modern_industrialization:sugar_solution', 500)
        .itemOut('miskatonicmysteries:potent_blotter')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:paper')
        .itemIn('miskatonicmysteries:infested_wheat')
        .itemIn('5x #c:mushrooms')
        .fluidIn('modern_industrialization:sugar_solution', 500)
        .itemOut('miskatonicmysteries:blotter')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:glass_bottle')
        .itemIn('minecraft:glowstone_dust')
        .itemIn('2x minecraft:potato')
        .fluidIn('modern_industrialization:sugar_solution', 500)
        .fluidIn('modern_industrialization:molten_redstone', 500)
        .itemOut('miskatonicmysteries:chemical_fuel')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('minecraft:ender_pearl')
        .itemIn('5x minecraft:glowstone_dust')
        .itemIn('minecraft:phantom_membrane')
        .fluidIn('modern_industrialization:sugar_solution', 500)
        .itemOut('3x miskatonicmysteries:iridescent_pearl')
        
        event.recipes.modern_industrialization.chemical_reactor(16, 200)
        .itemIn('2x minecraft:poppy')
        .itemIn('minecraft:nether_wart')
        .itemIn('glass_bottle')
        .fluidIn('modern_industrialization:sugar_solution', 200)
        .itemOut('miskatonicmysteries:laudanum')
})