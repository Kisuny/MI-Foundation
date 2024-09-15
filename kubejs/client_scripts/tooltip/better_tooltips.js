ItemEvents.tooltip(tooltip => {
    ////////////////////////////////////////////////////////////
        // Special case for tooltips
        const fishingRods = [
            'minecraft:fishing_rod',
            'gofish:blaze_rod',
            'gofish:skeletal_rod',
            'gofish:diamond_reinforced_rod',
            'gofish:frosted_rod',
            'gofish:slime_rod',
            'gofish:soul_rod',
            'gofish:matrix_rod',
            'gofish:celestial_rod',
            'gofish:ender_rod',
        ]
        fishingRods.forEach(rod => {
            tooltip.add(rod, Text.translate('item.kubejs.fishing_rods.tooltip').gray())
        });

        tooltip.add('kubejs:ditcheryatina', Text.translate(`item.kubejs.ditcheryatina.tooltip`))


        const shiftText = [Text.translate('kubejs.press_button').gold(), Text.of('Shift ').yellow(), Text.translate('kubejs.for_details').gold()]
        const ctrlText = [Text.translate('kubejs.press_button').gold(), Text.of('CTRL ').gold(), Text.translate('kubejs.for_details').gray()]
        tooltip.addAdvanced('kubejs:phantom_feather', (item, advanced, text) => {
            // shift, alt and ctrl are all keys you can check!
            if (!tooltip.shift) {
                text.add(1, shiftText)
            } else {
                text.add(1, Text.translate('kubejs.how_to_get.text').gold().bold(true))
                text.add(2, Text.translate('kubejs.phantom_feather.how_to_get_text_1').gold())
                text.add(3, Text.translate('kubejs.phantom_feather.how_to_get_text_2').darkGray())
                text.add(4, Text.translate('kubejs.phantom_feather.how_to_get_text_3').gold())
            }
        })

        // Тултип без текстка «Способ получения»
        let simpleShiftText = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.shift) {
                    text.add(1, shiftText)
                } else {
                    text.add(1, Text.translate(args.text).gray())
                }
            })
        };

        simpleShiftText({item: 'kubejs:reforge_rune', text: 'kubejs.reforge_rune.tooltip'})
        simpleShiftText({item: 'things:displacement_page', text: 'kubejs.displacement_page.tooltip'})
        simpleShiftText({item: 'kubejs:teleport_pearl', text: 'kubejs.teleport_pearl.tooltip'})
        simpleShiftText({item: 'kubejs:empty_beehive', text: "kubejs.empty_beehive.tooltip"})
        simpleShiftText({item: 'kubejs:beehive', text: "kubejs.beehive.tooltip"})



        // Тултипы вместе с текстом "СПОСОБ ПОЛУЧЕНИЯ:"
        let betterToolTip = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.shift) {
                    text.add(1, shiftText)
                } else {
                    text.add(1, Text.translate('kubejs.how_to_get.text').gold().bold(true))
                    text.add(2, Text.translate(args.text).gray())
                }
            })
        };

        betterToolTip({ item: 'kubejs:hirschgeist_heart', text: 'kubejs.hirschgeist_heart.tooltip' })
        betterToolTip({ item: 'kubejs:zotzpyre_fang', text: 'kubejs.zotzpyre_fang.tooltip' })
        betterToolTip({ item: 'kubejs:zotzpyre_flesh', text: 'kubejs.zotzpyre_flesh.tooltip' })
        betterToolTip({ item: 'kubejs:moth_wings', text: 'kubejs.moth_wings.tooltip' })
        betterToolTip({ item: 'kubejs:tears_of_the_sea', text: 'kubejs.tears_of_the_sea.tooltip' })
        betterToolTip({ item: 'kubejs:star_core', text: 'kubejs.star_core.tooltip' })
        betterToolTip({ item: 'kubejs:crystal_fiery', text: 'kubejs.crystal_fiery.tooltip' })
        betterToolTip({ item: 'adventurez:warthog_shell_piece', text: 'kubejs.warthog_shell_piece.tooltip' })
        betterToolTip({ item: 'bewitchment:dragons_blood_resin', text: 'kubejs.dragons_blood_resin.tooltip' })
        betterToolTip({ item: 'travelersbackpack:standard', text: 'kubejs.backpack_standard.tooltip' })
        betterToolTip({ item: 'fwaystones:waystone_scroll', text: 'kubejs.waystone_scroll.tooltip' })

        // тултипы для артефактов
        let artifactsTooltip = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.ctrl) {
                    text.add(1, ctrlText)
                } else {
                    text.add(1, Text.translate('kubejs.how_to_get.text').gold().bold(true))
                    text.add(2, Text.translate(args.text1).gray())
                    text.add(3, Text.translate(args.text2).darkGray())
                }
            })
        };
        artifactsTooltip(
            {
                item: 'artifacts:cloud_in_a_bottle',
                text1: '🎣 Выбить при рыбной ловле существ, из «Призрака».',
                text2: 'Условия поимки призрака: ночь, вода, обычный мир.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:vampiric_glove',
                text1: '🎣 Выбить при рыбной ловле существ, из «Вампира».',
                text2: 'Условия поимки вампира: ночь, вода, обычный мир.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:crystal_heart',
                text1: '🎣 Выбить при рыбной ловле существ, из «Гаснущий Хризолит».',
                text2: 'Условия поимки «Гаснущий Хризолит»: Кристаллическая жидкость'
        });
        artifactsTooltip(
            {
                item: 'artifacts:superstitious_hat',
                text1: '🎣 Выбить при рыбной ловле существ, из «Гаснущий Хризолит».',
                text2: 'Условия поимки «Гаснущий Хризолит»: кристаллическая жидкость'
        });
        artifactsTooltip(
            {
                item: 'artifacts:flippers',
                text1: 'kubejs.flippers.tooltip_1',
                text2: 'kubejs.flippers.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:snorkel',
                text1: '🎣 Выбить при рыбной ловле существ, из «Кракен», «Морской император».',
                text2: 'Условия поимки «Кракен»: ночь, вода, обычный мир.\nУсловия поимки «Морской император»: вода, обычный мир.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:night_vision_goggles',
                text1: '🎣 Выбить при рыбной ловле существ, из «Смотрящий».',
                text2: 'Условия поимки «Смотрящий»: вода, энд.'
        });
        artifactsTooltip(
            {
                item: 'things:monocle',
                text1: '🎣 Выбить при рыбной ловле существ, из «Смотрящий».',
                text2: 'Условия поимки «Смотрящий»: вода, энд.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:antidote_vessel',
                text1: '🎣 Выбить при рыбной ловле существ, из «Багровая плоть», «Оживший корень».',
                text2: 'Условия поимки «Багровая плоть»: лава, ад.\nУсловия поимки «Оживший корень»: жидкая грязь'
        });
        artifactsTooltip(
            {
                item: 'things:moss_necklace',
                text1: '🎣 Выбить при рыбной ловле существ, из «Гаснущий Хризолит», «Оживший корень».',
                text2: 'Условия поимки «Гаснущий Хризолит»: кристаллическая жидкость\nУсловия поимки «Оживший корень»: жидкая грязь'
        });
        artifactsTooltip(
            {
                item: 'things:hades_crystal',
                text1: '🎣 Выбить при рыбной ловле существ, из «Проклятая мерзость», «Багровая плоть».',
                text2: 'Условия поимки «Проклятая мерзость»: лава, ад.\nУсловия поимки «Багровая плоть»: лава, ад.'
        });
        artifactsTooltip(
            {
                item: 'things:mining_gloves',
                text1: '🎣 Выбить при рыбной ловле существ, из «Красная плесень»',
                text2: 'Условия поимки «Красная плесень»: лава, ад.'
        });
        artifactsTooltip(
            {
                item: 'things:riot_gauntlet',
                text1: '🎣 Выбить при рыбной ловле существ, из «Красная плесень»',
                text2: 'Условия поимки «Красная плесень»: лава, ад.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:digging_claws',
                text1: '🎣 Выбить при рыбной ловле существ, из «Тёмный дракон», «Восставший из драконьей гнили»',
                text2: 'Условия поимки «Тёмный дракон»: драконья гниль.\nУсловия поимки «Восставший из драконьей гнили»: драконья гниль.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:feral_claws',
                text1: '🎣 Выбить при рыбной ловле существ, из «Тёмный дракон»',
                text2: 'Условия поимки «Тёмный дракон»: драконья гниль.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:lucky_scarf',
                text1: '🎣 Выбить при рыбной ловле существ, из «Восставший из драконьей гнили»',
                text2: 'Условия поимки «Восставший из драконьей гнили»: драконья гниль.'
        });
        artifactsTooltip(
            {
                item: 'artifacts:running_shoes',
                text1: '🎣 Выбить при рыбной ловле существ, из «Зубастик»',
                text2: 'Условия поимки «Зубастик»: драконья гниль.'
        });

    });
