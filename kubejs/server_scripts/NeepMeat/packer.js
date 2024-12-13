ServerEvents.recipes(event => {
    event.remove({id: 'neepmeat:item_transfer/speed_item_pipe'})
    event.recipes.modern_industrialization.packer(8, 100) //Eu, ticks
        .itemIn('neepmeat:item_pipe')
        .itemIn('modern_industrialization:electrum_fine_wire')
        .itemOut('neepmeat:speed_item_pipe')
})