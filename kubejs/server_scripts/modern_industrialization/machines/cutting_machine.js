
ServerEvents.recipes(event => {
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.cutting_machine(2, 100)
            .itemIn(`spectrum:${color.name}_log`)
            .fluidIn('modern_industrialization:lubricant',1)
            .itemOut(`spectrum:stripped_${color.name}_log`)
    })
    // Amethyst lens
    event.recipes.modern_industrialization.cutting_machine(16, 600)
        .itemIn('4x minecraft:amethyst_shard')
        .fluidIn('modern_industrialization:lubricant',300)
        .itemOut('modern_industrialization:amethyst_lens')

    // Topaz lens
    event.recipes.modern_industrialization.cutting_machine(16, 600)
        .itemIn('4x spectrum:topaz_shard')
        .fluidIn('modern_industrialization:lubricant',300)
        .itemOut('modern_industrialization:topaz_lens')

    // Citrine lens
    event.recipes.modern_industrialization.cutting_machine(16, 600)
        .itemIn('4x spectrum:citrine_shard')
        .fluidIn('modern_industrialization:lubricant',300)
        .itemOut('modern_industrialization:citrine_lens')

    // Certus Quartz lens
    event.recipes.modern_industrialization.cutting_machine(16, 600)
        .itemIn('4x ae2:certus_quartz_crystal')
        .fluidIn('modern_industrialization:lubricant',300)
        .itemOut('modern_industrialization:certus_quartz_lens')

    // Certus Quartz lens
    event.recipes.modern_industrialization.cutting_machine(16, 600)
        .itemIn('4x minecraft:emerald')
        .fluidIn('modern_industrialization:lubricant',300)
        .itemOut('modern_industrialization:emerald_lens')

    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('#bewitchment:juniper_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('6x bewitchment:juniper_planks')
    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('#bewitchment:elder_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('6x bewitchment:elder_planks')
    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('#bewitchment:cypress_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('6x bewitchment:cypress_planks')
    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('#bewitchment:dragons_blood_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('6x bewitchment:dragons_blood_planks')
    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('#bwplus:yew_logs')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('6x bwplus:yew_planks')

    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('3x #minecraft:planks')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('4x minecraft:bowl')

    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('expandeddelight:cinnamon_log')
        .fluidIn('modern_industrialization:lubricant', 1)
        .itemOut('3x expandeddelight:raw_cinnamon')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:beef')
        .itemOut('2x farmersdelight:minced_beef')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('farmersdelight:cabbage')
        .itemOut('2x farmersdelight:cabbage_leaf')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:chicken')
        .itemOut('2x farmersdelight:chicken_cuts')
        .itemOut('minecraft:bone_meal')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:porkchop')
        .itemOut('2x farmersdelight:bacon')

    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('minecraft:pumpkin')
        .itemOut('4x farmersdelight:pumpkin_slice')

    event.recipes.modern_industrialization.cutting_machine(2, 100)
        .itemIn('minecraft:melon')
        .itemOut('9x minecraft:melon_slice')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:mutton')
        .itemOut('2x farmersdelight:mutton_chops')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:salmon')
        .itemOut('2x farmersdelight:salmon_slice')
        .itemOut('minecraft:bone_meal')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('minecraft:cod')
        .itemOut('2x farmersdelight:cod_slice')
        .itemOut('minecraft:bone_meal')

    event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn('expandeddelight:cheese_wheel')
        .itemOut('4x expandeddelight:cheese_slice')

    const noxshrooms = ['slate','ebony','ivory','chestnut']

    noxshrooms.forEach(shroom => {
        event.recipes.modern_industrialization.cutting_machine(2, 40)
        .itemIn(`spectrum:${shroom}_noxcap_stem`)
        .fluidIn("spectrum:liquid_crystal", 10)
        .itemOut('2x spectrum:myceylon')
    });


    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.cutting_machine(2, 100)
            .itemIn(`#spectrum:${color.name}_logs`)
            .fluidIn('modern_industrialization:lubricant', 1)
            .itemOut(`6x spectrum:${color.name}_planks`)
    });
})
