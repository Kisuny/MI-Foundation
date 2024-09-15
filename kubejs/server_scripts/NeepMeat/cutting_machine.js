ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.cutting_machine(4, 100) //Eu, ticks
        .itemIn('#neepmeat:blood_bubble_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('4x neepmeat:blood_bubble_planks');
})
