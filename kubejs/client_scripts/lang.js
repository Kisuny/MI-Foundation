//priority: 999

// Add lang values in Russian
ClientEvents.lang('ru_ru', (event) => {

    // Dye Colors items
    dyeColorsLangRus.forEach(color => {

        // Botania
        event.renameItem(`botania:${color.name}_mystical_flower`, `${capitalize(color.lang0)} мистический цветок`) // -ый
        event.renameItem(`botania:${color.name}_shiny_flower`, `Светящийся ${color.lang0} мистический цветок`) // -ый
        event.renameItem(`botania:${color.name}_floating_flower`, `Парящий ${color.lang0} мистический цветок`) // -ый
        event.renameItem(`kubejs:fossilized_${color.name}_mystical_flower`, `Окаменевший ${color.lang0} мистический цветок`) // -ый
        event.renameItem(`botania:${color.name}_petal`, `${capitalize(color.lang0)} лепесток`) // -ый
        event.add(`tag.botania.petals.${color.name}`, `${capitalize(color.lang0)} лепесток`) // -ый

        // Spectrum
        // event.renameItem(`spectrum:${color.name}_block`, `${capitalize(color.lang0)} блок`) // -ый
        // event.renameItem(`spectrum:${color.name}_glowblock`, `${capitalize(color.lang0)} цветоблок`) // -ый
        // event.renameItem(`spectrum:${color.name}_spore_blossom`, `${capitalize(color.lang0)} спороцвет`) // -ый
        // event.renameItem(`spectrum:${color.name}_sapling`, `${capitalize(color.lang0)} саженец`) // -ый
        // event.renameItem(`spectrum:${color.name}_leaves`, `${capitalize(color.lang1)} листья`) // -ые
        // event.renameItem(`spectrum:${color.name}_log`, `${capitalize(color.lang2)} бревно`) // -ое
        // event.renameItem(`spectrum:stripped_${color.name}_log`, `Обтёсанное ${color.lang2} бревно`) // -ое
        // event.renameItem(`spectrum:${color.name}_wood`, `${capitalize(color.lang3)} древесина`) // -ая
        // event.renameItem(`spectrum:stripped_${color.name}_wood`, `Обтёсанная ${color.lang3} древесина`) // -ая
        // event.renameItem(`spectrum:${color.name}_lamp`, `${capitalize(color.lang3)} лампа`) // -ая
        // event.renameItem(`spectrum:${color.name}_planks`, `Доски из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_stairs`, `Ступеньки из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_fence`, `Забор из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_fence_gate`, `Калитка из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_button`, `Кнопка из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_slab`, `Плита из ${color.lang4} древесины`) // -ой
        // event.renameItem(`spectrum:${color.name}_pressure_plate`, `Нажимная плита из ${color.lang4} древесины`) // -ой

        // Applied Energetics 2
        event.renameItem(`ae2:${color.name}_glass_cable`, `${capitalize(color.lang0)} стеклянный МЭ кабель`) // -ый
        event.renameItem(`ae2:${color.name}_covered_cable`, `${capitalize(color.lang0)} покрытый МЭ кабель`) // -ый
        event.renameItem(`ae2:${color.name}_smart_cable`, `${capitalize(color.lang0)} умный МЭ кабель`) // -ый
        event.renameItem(`ae2:${color.name}_covered_dense_cable`, `${capitalize(color.lang0)} плотный МЭ кабель`) // -ый
        event.renameItem(`ae2:${color.name}_smart_dense_cable`, `${capitalize(color.lang0)} умный плотный МЭ кабель`) // -ый

        // Custom
        event.renameItem(`modern_industrialization:${color.name}_ink_bucket`, `Ведро ${color.lang5} чернил`) // -ых
        event.renameBlock(`modern_industrialization:${color.name}_ink`, `${capitalize(color.lang1)} чернила`) // -ые
        event.renameItem(`modern_industrialization:${color.name}_comb`, `${capitalize(color.lang1)} пчелиные соты`) // -ые

    });

    // Drills
    materialsLangRus.forEach(material => {
        event.renameItem(`kubejs:bedrock_reinforced_${material.name}_drill`, `Укреплённый бедроком забурник из ${material.lang1}`)
    });

    // Items for dimension
    dimensionsLangRus.forEach(dimension => {
        // Data Cards
        event.renameItem(`kubejs:${dimension.name}_data_card`, `Карта данных ${capitalize(dimension.lang1)}`)
        event.renameItem(`kubejs:advanced_${dimension.name}_data_card`, `Продвинутая карта данных ${capitalize(dimension.lang1)}`)
        // Liquefied air
        event.renameBlock(`modern_industrialization:${dimension.name}_air`, `Сжиженный воздух ${capitalize(dimension.lang1)}`)
    });


    // All items
    modIDs.forEach(mod => {

        // Materials
        materialsLangRus.forEach(material => {
            event.renameItem(`${mod}:${material.name}`, `${capitalize(material.lang0)}`)

            // Exceptions
            event.renameItem(`${mod}:raw_${material.name}_block`, `Блок рудного ${material.lang1}`)
            event.renameItem(`${mod}:small_${material.name}_bud`, `Малый бутон ${material.lang1}`)
            event.renameItem(`${mod}:medium_${material.name}_bud`, `Средний бутон ${material.lang1}`)
            event.renameItem(`${mod}:large_${material.name}_bud`, `Большой бутон ${material.lang1}`)

            // Material types
            materialTypesLangRus.forEach(type => {
                event.renameItem(`${mod}:${material.name}_${type.name}`, `${capitalize(type.lang1)} ${material.lang1}`)
                event.renameItem(`${mod}:${type.name}_${material.name}`, `${capitalize(type.lang1)} ${material.lang1}`)

                // Exception - Architect's Palette - Ore Blocks
                event.renameItem(`${mod}:${material.name}_ore_${type.name}`, `${capitalize(type.lang1)} ${material.lang1}`)

                // Ores
                oreLocationsLangRus.forEach(location => {
                    event.renameItem(`${mod}:${location.name}_${material.name}`, `${capitalize(material.lang1)} ${location.lang1}`)
                    // Ore Samples
                    event.renameItem(`${mod}:${location.name}_${material.name}_${type.name}`, `${capitalize(type.lang1)} ${material.lang1} ${location.lang1}`)
                });
            });

            // Product types
            productTypesLangRus.forEach(type => {
                event.renameItem(`${mod}:${material.name}_${type.name}`, `${capitalize(type.lang1)} из ${material.lang1}`)

                // Exception - Mythic Metals - Banglum Armor
                event.renameItem(`${mod}:legendary_${material.name}_${type.name}`, `${capitalize(type.lang1)} легендарного качества из ${material.lang1}`)
                // Exception - Architect's Palette - Ore Blocks
                event.renameItem(`${mod}:${material.name}_ore_${type.name}`, `${capitalize(type.lang1)} из ${material.lang1}`)
            });

            // Items with NBT
            effectTypesLangRus.forEach(effect => {
                // Vanilla
                event.add(`item.${mod}.tipped_arrow.effect.${effect.name}`, `Стрела ${effect.lang1}`)
                event.add(`item.${mod}.tipped_arrow`, `Обработанная стрела`)
                // Mythic Metals
                event.add(`item.${mod}.tipped_${material.name}_arrow.effect.${effect.name}`, `Стрела ${effect.lang1} из ${material.lang1}`)
                event.add(`item.${mod}.tipped_${material.name}_arrow`, `Обработанная стрела из ${material.lang1}`)
            });

            // Tags for materials
            materialTagsLangRus.forEach(tag => {
                event.add(`tag.${mod}.${material.name}_${tag.name}`, `${capitalize(tag.lang1)} ${material.lang1}`)
            });

            // Tags for products
            productTagsLangRus.forEach(tag => {
                event.add(`tag.${mod}.${material.name}_${tag.name}`, `${capitalize(tag.lang1)} из ${material.lang1}`)
            });

            // Yttr tags
            event.add(`tag.yttr.substituted_${material.name}`, `${capitalize(material.lang0)}`)

        });

        // Loot Bags
        lootbagTypesLangRus.forEach(type => {
            lootbagRarityLangRus.forEach(rarity => {
                event.renameItem(`kubejs:${type.name}_lootbag_${rarity.name}`, `Мешок с ${rarity.lang1} наградой`)
            });
            event.add(`item.kubejs.${type.name}_lootbag.tooltip`, `Содержит: ${capitalize(type.lang1)}`)
        });

    });


    // General Exceptions
    event.renameItem('minecraft:stone', 'Камень') // idk why
    event.renameItem('minecraft:raw_copper_block', 'Блок рудной меди')

    event.renameItem('modern_industrialization:salt_dust', 'Соль')
    event.renameItem('modern_industrialization:raw_antimony_block', 'Блок рудной сурьмы')
    event.renameItem('modern_industrialization:raw_platinum_block', 'Блок рудной платины')
    event.renameItem('modern_industrialization:mixed_ingot_iridium', 'Смешанный слиток пластины иридия')
    event.renameItem('modern_industrialization:silicon_n_doped_plate', 'Донор-легированная пластина кремния')
    event.renameItem('modern_industrialization:silicon_p_doped_plate', 'Акцептор-легированная пластина кремния')
    event.renameItem('modern_industrialization:carbon_plate', 'Пластина углепластика')
    event.renameItem('modern_industrialization:carbon_large_plate', 'Плита углепластика')

    event.renameItem('mythicmetals:midas_gold_ore', 'Самородное золото Мидаса')
    event.renameItem('mythicmetals:starrite', 'Звёздный минерал')
    event.renameItem('mythicmetals:star_platinum', 'Слиток звёздной платины')
    event.renameItem('mythicmetals:mythril_drill', 'Бур из мифрила')
    event.renameItem('mythicmetals:midas_gold_sword', 'Меч Мидаса')
    event.renameItem('mythicmetals:gilded_midas_gold_sword', 'Пробуждённый меч Мидаса')
    event.renameItem('mythicmetals:white_aegis_sword', 'Светлый меч Эгиды')
    event.renameItem('mythicmetals:red_aegis_sword', 'Тёмный меч Эгиды')

    event.renameItem('architects_palette:entwine_rod', 'Переплёт')
    event.renameItem('architects_palette:chiseled_entwine', 'Резной блок переплёта')

    // event.renameItem('spectrum:glowing_glass', 'Светящееся стекло')
    // event.renameItem('spectrum:glowing_semi_permeable_glass', 'Светящееся полупроницаемое стекло')
    // event.renameItem('spectrum:tinted_semi_permeable_glass', 'Тонированное полупроницаемое стекло')

    event.renameItem('mythicmetals:unobtainium', 'Слиток недостижинума')
    event.renameItem('architects_palette:unobtanium', 'Слиток пробуждённого недостижинума')

    event.renameItem('yttr:ultrapure_diamond', 'Сверхчистый алмаз')
    event.renameItem(`ae2:fluix_glass_cable`, `Изменчивый стеклянный МЭ кабель`)
    event.renameItem(`ae2:fluix_covered_cable`, `Изменчивый покрытый МЭ кабель`)
    event.renameItem(`ae2:fluix_smart_cable`, `Изменчивый умный МЭ кабель`)
    event.renameItem(`ae2:fluix_covered_dense_cable`, `Изменчивый плотный МЭ кабель`)
    event.renameItem(`ae2:fluix_smart_dense_cable`, `Изменчивый умный плотный МЭ кабель`)

    event.renameItem(`ae2:fluix_pearl`, `Изменчивый жемчуг эндера`)

    event.renameItem(`botania:mana_powder`, `Мана-пыль`)


    // Custom items and blocks
    event.renameBlock(`modern_industrialization:liquid_mana`, `Сжиженная мана`)
    event.renameBlock(`modern_industrialization:wood_gas`, `Древесный газ`)
    event.renameBlock(`modern_industrialization:bee_air`, `Воздух из улья`)


});


// Add lang values in English
ClientEvents.lang('en_us', (event) => {

    // Loot Bags
    lootbagTypesLangEng.forEach(type => {
        lootbagRarityLangEng.forEach(rarity => {
            event.renameItem(`kubejs:${type.name}_lootbag_${rarity.name}`, `Bag with ${rarity.lang1} reward`)
        });
        event.add(`item.kubejs.${type.name}_lootbag.tooltip`, `Contains: ${capitalize(type.lang1)}`)
    });

});
