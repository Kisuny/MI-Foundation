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
        simpleShiftText({ item: 'scout:upgraded_satchel', text: 'kubejs.text.doesnt_save_items_after_improvement' })
        simpleShiftText({ item: 'scout:upgraded_pouch', text: 'kubejs.text.doesnt_save_items_after_improvement' })
        simpleShiftText({ item: 'modern_industrialization:forge_hammer', text: 'kubejs.text.forge_hammer' })
        simpleShiftText({ item: 'ae2:charger', text: 'kubejs.text.charger' })
        simpleShiftText({ item: 'mif_addon:scoop', text: 'kubejs.text.scoop' })
        simpleShiftText({ item: 'kubejs:royal_scoop', text: 'kubejs.text.royal_scoop' })



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
        betterToolTip({ item: 'bewitchment:witchberry', text: 'kubejs.witchberry.tooltip' })
        betterToolTip({ item: 'miskatonicmysteries:resonate_ooze', text: 'kubejs.resonate_ooze.tooltip' }) 
        betterToolTip({ item: 'kubejs:dragon_heart', text: 'kubejs.dragon_heart.tooltip' }) 
        betterToolTip({ item: 'mif_addon:bee', text: 'mif_addon.bee.tooltip' }) 
        betterToolTip({ item: 'mif_addon:beehemoth', text: 'mif_addon.beehemoth.tooltip' }) 
        betterToolTip({ item: 'treeaxe:diamond_treeaxe', text: 'mif_addon.treeaxe.tooltip' })
        betterToolTip({ item: 'naturescompass:naturescompass', text: 'mif_addon.naturescompass.tooltip' })

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
                text1: 'kubejs.cloud_in_a_bottle.tooltip_1',
                text2: 'kubejs.cloud_in_a_bottle.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:vampiric_glove',
                text1: 'kubejs.vampiric_glove.tooltip_1',
                text2: 'kubejs.vampiric_glove.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:crystal_heart',
                text1: 'kubejs.crystal_heart.tooltip_1',
                text2: 'kubejs.crystal_heart.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:superstitious_hat',
                text1: 'kubejs.superstitious_hat.tooltip_1',
                text2: 'kubejs.superstitious_hat.tooltip_2'
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
                text1: 'kubejs.snorkel.tooltip_1',
                text2: 'kubejs.snorkel.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:night_vision_goggles',
                text1: 'kubejs.night_vision_goggles.tooltip_1',
                text2: 'kubejs.night_vision_goggles.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'things:monocle',
                text1: 'kubejs.monocle.tooltip_1',
                text2: 'kubejs.monocle.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:antidote_vessel',
                text1: 'kubejs.antidote_vessel.tooltip_1',
                text2: 'kubejs.antidote_vessel.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'things:moss_necklace',
                text1: 'kubejs.moss_necklace.tooltip_1',
                text2: 'kubejs.moss_necklace.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'things:hades_crystal',
                text1: 'kubejs.hades_crystal.tooltip_1',
                text2: 'kubejs.hades_crystal.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'things:mining_gloves',
                text1: 'kubejs.mining_gloves.tooltip_1',
                text2: 'kubejs.mining_gloves.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'things:riot_gauntlet',
                text1: 'kubejs.riot_gauntlet.tooltip_1',
                text2: 'kubejs.riot_gauntlet.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:digging_claws',
                text1: 'kubejs.digging_claws.tooltip_1',
                text2: 'kubejs.digging_claws.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:feral_claws',
                text1: 'kubejs.feral_claws.tooltip_1',
                text2: 'kubejs.feral_claws.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:lucky_scarf',
                text1: 'kubejs.lucky_scarf.tooltip_1',
                text2: 'kubejs.lucky_scarf.tooltip_2'
        });
        artifactsTooltip(
            {
                item: 'artifacts:running_shoes',
                text1: 'kubejs.running_shoes.tooltip_1',
                text2: 'kubejs.running_shoes.tooltip_2'
        });

    });
