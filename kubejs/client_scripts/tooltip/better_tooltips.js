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
            tooltip.add(rod, Text.gray('Никогда не вылавливает живых существ'))
        });

        tooltip.add('kubejs:ditcheryatina', Text.translate(`item.kubejs.ditcheryatina.tooltip`))


        const shiftText = [Text.of('Зажми ').gold(), Text.of('Shift ').yellow(), Text.of('для подробной информации.').gold()]
        const ctrlText = [Text.of('Зажми ').gray(), Text.of('CTRL ').gold(), Text.of('Чтобы узнать как получить.').gray()]
        tooltip.addAdvanced('kubejs:phantom_feather', (item, advanced, text) => {
            // shift, alt and ctrl are all keys you can check!
            if (!tooltip.shift) {
                text.add(1, shiftText)
            } else {
                text.add(1, Text.gold('Способ получения:').bold(true))
                text.add(2, Text.gray('🎣 Выбить при рыбной ловле существ, из ночной фурии.'))
                text.add(3, Text.darkGray('Условия поимки ночной фурии: ночь, вода, обычный мир.'))
                text.add(4, Text.gray('🗡 Мешок с добычей плоти и крови.'))
            }
        })

        // Тултип без текстка «Способ получения»
        let simpleShiftText = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.shift) {
                    text.add(1, shiftText)
                } else {
                    text.add(1, Text.gray(args.text))
                }
            })
        };

        simpleShiftText({item: 'yttr:platforms', text: '✎ Позволяют передвигаться на Shift\'e по воздуху, находясь в слоте безделушек'})
        simpleShiftText({item: 'yttr:diffractor', text: '✎ Позволяют становиться полностью невидимым, находясь в слоте безделушек'})
        simpleShiftText({item: 'yttr:glassy_void', text: '✎ Создаётся путем бросания осколока бедрока в жидкую пустоту'})
        simpleShiftText({item: 'yttr:effector', text: '✎ Позволяет проходить сквозь блоки, ценой жидкой пустоты'})
        simpleShiftText({item: 'kubejs:reforge_rune', text: '✎ Позволяет перековать оружие/броню/инструменты в наковальне'})
        simpleShiftText({item: 'things:displacement_page', text: '🧪 Страница используется вместе с Томом перемещения'})
        simpleShiftText({item: 'kubejs:teleport_pearl', text: '✎ Жемчуг используется в «Томе перемещения» как ресурс для телепортации, нажмите томом ПКМ по жемчугу.'})
        simpleShiftText({item: 'kubejs:empty_beehive', text: "🧪 Возможно стоит попробовать наполнить его пчёлами и мёдом?…"})
        simpleShiftText({item: 'kubejs:beehive', text: "★ Нажмите данным ульем на улей из Minecraft с SHIFT'om, чтобы переместится в Жужалище!"})



        // Тултипы вместе с текстом "СПОСОБ ПОЛУЧЕНИЯ:"
        let betterToolTip = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.shift) {
                    text.add(1, shiftText)
                } else {
                    text.add(1, Text.gold('Способ получения:').bold(true))
                    text.add(2, Text.gray(args.text))
                }
            })
        };

        betterToolTip({ item: 'kubejs:hirschgeist_heart', text: '🗡 Одержав победу над могучим «Хиршгейстом» Сможешь сердце его забрать!' })
        betterToolTip({ item: 'kubejs:zotzpyre_fang', text: '🗡 Лишь добычливый сможет достать этот редкий клык при убийстве вызванного «Зотцпира»' })
        betterToolTip({ item: 'kubejs:zotzpyre_flesh', text: '🗡 Выпадает при убийстве вызванного мини-босса «Зотцпира»' })
        betterToolTip({ item: 'kubejs:moth_wings', text: '🗡 Выпадает при убийстве моли' })
        betterToolTip({ item: 'kubejs:tears_of_the_sea', text: '🎣 Маленький шанс получить при рыбной ловле' })
        betterToolTip({ item: 'kubejs:star_core', text: '★ Добывается из падающих звёзд ★' })
        betterToolTip({ item: 'kubejs:crystal_fiery', text: '🗡 Выпадает при убийстве стража пламени' })
        betterToolTip({ item: 'adventurez:warthog_shell_piece', text: '🗡 Выпадает при убийстве Эндер-бородавочника' })
        betterToolTip({ item: 'bewitchment:dragons_blood_resin', text: '🪓 Если сделать надрез при помощи Атамэ на дереве драконьей крови, бревно начнёт кровоточить!' })
        betterToolTip({ item: 'travelersbackpack:standard', text: 'Создаётся на Пигментном Пьедестале' })
        betterToolTip({ item: 'fwaystones:waystone_scroll', text: 'Можно купить в магазине предметов' })

        // тултипы для артефактов
        let artifactsTooltip = (args) => {
            tooltip.addAdvanced(args.item, (item, advanced, text) => {
                if (!tooltip.ctrl) {
                    text.add(1, ctrlText)
                } else {
                    text.add(1, Text.gold('Способ получения:').bold(true))
                    text.add(2, Text.gray(args.text1))
                    text.add(3, Text.darkGray(args.text2))
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
                text1: '🎣 Выбить при рыбной ловле существ, из «Кракен», «Мегалодон», «Морской император».',
                text2: 'Условия поимки «Кракен»: ночь, вода, обычный мир.\nУсловия поимки «Мегалодон»: вода, обычный мир.\nУсловия поимки «Морской император»: вода, обычный мир.'
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
