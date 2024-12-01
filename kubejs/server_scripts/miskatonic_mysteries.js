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