
ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.industrial_apiary(32 , 400) //Eu, ticks
        .itemIn('kubejs:bee',0.1)
        .itemIn('4x spectrum:vegetal')
        .itemOut('2x kubejs:bee')
        .itemOut('kubejs:bee',0.5)
        .itemOut('kubejs:necrodermal_affected_bee',0.01)
        .itemOut('kubejs:nullodermal_affected_bee',0.01)
        .dimension('the_bumblezone:the_bumblezone')

})