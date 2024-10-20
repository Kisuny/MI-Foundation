//priority: 1

// console.info('Resources Reloaded (tooltips)')

ItemEvents.tooltip(tooltip => {

    ////////////////////////////////////////////////////////////
    // Description on bags
    function addDescription(name, type, color) {
        tooltip.add(name, Text.translate(type)[color]())
    };
    global.lootbagTypes.forEach(type => {
        global.lootbagRarities.forEach(rarity => {
            addDescription(`kubejs:${type.name}_lootbag_${rarity.name}`,
                `item.kubejs.${type.name}_lootbag.tooltip`, rarity.color)
        })
    });


    ////////////////////////////////////////////////////////////
    // ChemLib tooltips (formulas)

    // Imports
    const derivatives = global.itemDerivatives
    const formatting = global.formattingCodes

    // Define some things
    const formulaColor = formatting.dark_aqua
    const formulaPlus = '⁺' // e.g. SiO₄⁺

    let mag = formatting.magic
    let res = formatting.reset + formulaColor
    // original: 'άγνωστος φόρμουλα' ('unknown formula' on Greek)
    const unknownFormula = res + 'άγν' + mag + '---' + res + 'ος φόρ' + mag + '---' + res + 'λα'
    const magicFormula = mag + '----------'

    // const defineFormula = formulaColor + item.formula // This not work (so don't use)


    // Vanilla (Minecraft)
    const vanilla = [
        { name: 'copper', formula: 'Cu' },
        { name: 'gold', formula: 'Au' },
        { name: 'coal', formula: 'C' },
        { name: 'iron', formula: 'Fe' },
        { name: 'quartz', formula: 'SiO₄' },
        { name: 'glass', formula: 'SiO₂' },
        { name: 'stained_glass', formula: 'SiO₂' }, // miscellaneous (TODO: refactor)
        { name: 'emerald', formula: 'Be₃Al₂(SiO₃)₆' },
        { name: 'amethyst', formula: '(Fe)SiO₂' },
        { name: 'diamond', formula: 'C' },
        { name: 'redstone', formula: '(Fe)₅(CrAl₂O₃)(SiO₄)Nd' },
        { name: 'lapis', formula: 'Na₈Al₆Si₆O₂₄(SO)₄' },
        { name: 'lapis_lazuli', formula: 'Na₈Al₆Si₆O₂₄(SO)₄' }, // miscellaneous (TODO: refactor)
    ]
    vanilla.forEach(item => {
        tooltip.add(`minecraft:${item.name}`, (formulaColor + item.formula))
        tooltip.add(`spectrum:pure_${item.name}`, (formulaColor + item.formula))

        derivatives.forEach(derivative => {
            tooltip.add(`modern_industrialization:${item.name}_${derivative}`, (formulaColor + item.formula))
            tooltip.add(`minecraft:${item.name}_${derivative}`, (formulaColor + item.formula))

            global.dyeColors.forEach(color => {
                tooltip.add(`minecraft:${color.name}_${item.name}_${derivative}`, (formulaColor + item.formula))
            })
        })
    })

    global.dyeColors.forEach(color => {
        tooltip.add(`minecraft:${color.name}_stained_glass`, (formulaColor + 'SiO₂'))
    })

    // Spirit

    tooltip.add('spirit:soul_steel_ingot',formatting.dark_aqua + 'ᛊᛟᚢᛚᛊᛏᛖᛖᛚ');

    // Modern Industrialization
    const modern_industrialization = [
        { name: 'hsla_steel', formula: 'FeCrMoV' },
        { name: 'vanadium', formula: 'V' },
        { name: 'aluminum', formula: 'Al' },
        { name: 'antimony', formula: 'Sb' },
        { name: 'battery_alloy', formula: 'PbSb' },
        { name: 'beryllium', formula: 'Be' },
        { name: 'bronze', formula: '(Cu)₃Sn' },
        { name: 'tin', formula: 'Sn' },
        { name: 'cadmium', formula: 'Cd' },
        { name: 'chromium', formula: 'Cr' },
        { name: 'cupronickel', formula: 'CuNi' },
        { name: 'electrum', formula: 'AuAg' },
        { name: 'he_mox', formula: 'PuU' },
        { name: 'he_uranium', formula: 'U' },
        { name: 'invar', formula: 'Ni(Fe)₂' },
        { name: 'iridium', formula: 'Ir' },
        { name: 'kanthal', formula: '((Fe)₆CrNiMn)CrAl' },
        { name: 'lead', formula: 'Pb' },
        { name: 'nickel', formula: 'Ni' },
        { name: 'platinum', formula: 'Pt' },
        { name: 'plutonium', formula: 'Pu' },
        { name: 'silicon', formula: 'Si' },
        { name: 'silver', formula: 'Ag' },
        { name: 'stainless_steel', formula: '(Fe)₆CrNiMn' },
        { name: 'steel', formula: 'FeC' },
        { name: 'annealed_copper', formula: 'Cu' },
        { name: 'superconductor', formula: 'Ir(Cu)₃(Y)₃(Nd)₂' },
        { name: 'titanium', formula: 'Ti' },
        { name: 'tungsten', formula: 'W' },
        { name: 'uranium', formula: 'U' },
        { name: 'bauxite', formula: '(Al₂O₃)Ti' },
        { name: 'ruby', formula: 'CrAl₂O₃' },
        { name: 'manganese', formula: 'Mn' },
        { name: 'carbon', formula: 'C' },
        { name: 'neodymium', formula: 'Nd' },
        { name: 'mozanite', formula: '(NdCdY)PO₄' }, // should be monazite
        { name: 'fluoroapatite', formula: 'Ca₅(PO₄)₃F' },
        { name: 'calcium_phosphate', formula: 'Ca₅(PO₄)₃F' },
        { name: 'vanadinite', formula: 'Pb₅(VO₄)₃Cl' },
        { name: 'molybdenite', formula: 'MoS₂' },
        { name: 'molybdenum', formula: 'Mo' },
        { name: 'roquesite', formula: 'CuInS₂' },
        { name: 'indium_phosphide', formula: 'InP' },
        { name: 'basalt', formula: '(CaO)(MgO)' },
        { name: 'calcite', formula: 'CaCO₃' },
        { name: 'calcium', formula: 'Ca' },
        { name: 'calcium_metasilicate', formula: 'CaSiO₃' },
        { name: 'phosphorus', formula: 'P' },
        { name: 'calorite', formula: 'UCrAl₂O₃(Li)'},
        { name: 'ostrum', formula: '(WTi)(NdCdY)PO₄'},
        { name: 'compactium', formula: 'BeK₄N₅Tc₆'},
        { name: 'desh', formula: 'Cu₃Pd(Nb)'},
        { name: 'indium', formula: 'In'},
        { name: 'le_mox', formula: 'PuU'},
        { name: 'le_uranium', formula: 'U'},
        { name: 'lignite_coal', formula: 'C₂S'},
        { name: 'lithium', formula: 'Li'},
        { name: 'niobium', formula: 'Nb'},
        { name: 'quartz_blend', formula: 'SiO₄'},
        { name: 'redstone_alloy', formula: '(Fe)₅(CrAl₂O₃)(SiO₄)Nd'},
        { name: 'rocket_alloy', formula: 'AlW'},
        { name: 'salt', formula: 'NaCl'},
        { name: 'sodium', formula: 'Na'},
        { name: 'soldering_alloy', formula: 'SnPb'},
        { name: 'sulfur', formula: 'S'},
        { name: 'tantalum', formula: 'Ta'},
        { name: 'tungsten_steel', formula: 'WFeC'},
        { name: 'uranium_235', formula: 'U'},
        { name: 'uranium_238', formula: 'U'},
        // Special cases:
        { name: 'frostproof', formula: 'Al' }, // aluminum machine casing
        { name: 'heatproof', formula: 'Ni(Fe)₂' }, // invar machine casing
        { name: 'clean_stainless_steel', formula: '(Fe)₆CrNiMn' }, // stainless steel machine casing
        { name: 'solid_titanium', formula: 'Ti' }, // titanium machine casing

    ]
    modern_industrialization.forEach(item => {
        tooltip.add(`modern_industrialization:${item.name}`, (formulaColor + item.formula))
        // tooltip.add(`modern_industrialization:${item.name}_wafer`, (formulaColor + item.formula)) // Silicon Wafer (TODO: refactor)
        tooltip.add(`modern_industrialization:monocrystalline_${item.name}`, (formulaColor + item.formula)) // Monocrystalline Silicon (TODO: refactor)
        derivatives.forEach(derivative => {
            tooltip.add(`modern_industrialization:${item.name}_${derivative}`, (formulaColor + item.formula))
        })
    })


    // Mythic Metals
    const mythicmetals = [
        { name: 'osmium', formula: 'Os' },
        { name: 'palladium', formula: 'Pd' },
        { name: 'adamantite', formula: 'ανταμαντιτ' },
        { name: 'aquarium', formula: 'ακυαριυμ' },
        { name: 'banglum', formula: 'μπανγλυμ' },
        { name: 'carmot', formula: 'καρμωτ' },
        { name: 'celestium', formula: 'σλεστιυμ' },
        { name: 'hallowed', formula: 'hαλωεντ' },
        { name: 'kyber', formula: 'κιμπερ' },
        { name: 'metallurgium', formula: 'μεταλυργιυμ' },
        { name: 'midas_gold', formula: 'μιντας γολντ' },
        { name: 'mythril', formula: 'μιδριλ' },
        { name: 'orichalcum', formula: 'οριχαλκυμ' },
        { name: 'prometheum', formula: 'προμεδευμ' },
        { name: 'quadrillum', formula: 'κυαντριλυμ' },
        { name: 'runite', formula: 'ρυνιτ' },
        { name: 'stormyx', formula: 'στορμιξ' },
        { name: 'durasteel', formula: 'ντυραστηλ' },
        { name: 'star_platinum', formula: 'σταρ πλατινυμ' },
        { name: 'morkite', formula: 'μορκιτ' },
        // Problem items:
        // { name: 'unobtainium', formula: unknownFormula },
        // { name: 'starrite', formula: unknownFormula },
    ]
    // Need refactor, but this two items has problem:
    tooltip.add(`mythicmetals:unobtainium`, (formulaColor + unknownFormula))
    tooltip.add(`mythicmetals:starrite`, (formulaColor + unknownFormula))
    mythicmetals.forEach(item => {
        tooltip.add(`mythicmetals:${item.name}`, (formulaColor + item.formula))
        derivatives.forEach(derivative => {
            tooltip.add(`modern_industrialization:${item.name}_${derivative}`, (formulaColor + item.formula))
            tooltip.add(`mythicmetals:${derivative}_${item.name}`, (formulaColor + item.formula))
            tooltip.add(`mythicmetals:${item.name}_${derivative}`, (formulaColor + item.formula))
        })
    })


    // Spectrum
    const spectrum = [
        { name: 'citrine', formula: '[FeO₄]⁰SiO₂' },
        { name: 'topaz', formula: 'Al₂SiO₄(F,OH)₂' },
        { name: 'onyx', formula: 'SiO₂' },
        { name: 'moonstone', formula: unknownFormula },
        { name: 'shimmerstone', formula: unknownFormula },
        { name: 'paltaeria', formula: unknownFormula },
        { name: 'stratine', formula: unknownFormula },
        { name: 'azurite', formula: unknownFormula },
        { name: 'bloodstone', formula: unknownFormula },
        { name: 'malachite', formula: 'Cu₂CO₃(OH)₂' },
        { name: 'pyrite', formula: 'FeS₂' },
        { name: 'bismuth', formula: 'Bi' },
        { name: 'amethyst', formula: '(Fe)SiO₂' }, // copy from vanilla (TODO: refactor)
    ]
    spectrum.forEach(item => {
        tooltip.add(`spectrum:${item.name}`, (formulaColor + item.formula))
        derivatives.forEach(derivative => {
            tooltip.add(`spectrum:${derivative}_${item.name}`, (formulaColor + item.formula))
            tooltip.add(`spectrum:${item.name}_${derivative}`, (formulaColor + item.formula))
        })
    })

    // Architect's Palette
    const architects_palette = [
        { name: 'algal', formula: unknownFormula },
        { name: 'nether_brass', formula: unknownFormula },
        { name: 'sunmetal', formula: unknownFormula },
        { name: 'wardstone', formula: unknownFormula },
        { name: 'entwine', formula: unknownFormula },
        { name: 'unobtanium', formula: unknownFormula }, // different from mythicmetals - not typo
        { name: 'oracle', formula: unknownFormula },
        { name: 'cerebral', formula: unknownFormula },
    ]
    architects_palette.forEach(item => {
        tooltip.add(`architects_palette:${item.name}`, (formulaColor + item.formula))
        derivatives.forEach(derivative => {
            tooltip.add(`modern_industrialization:${item.name}_${derivative}`, (formulaColor + item.formula))
            tooltip.add(`architects_palette:${item.name}_${derivative}`, (formulaColor + item.formula))
        })
    })


    // Applied Energetics 2
    const ae2 = [
        { name: 'certus_quartz', formula: 'SiO₄' },
        { name: 'fluix', formula: '(SiO₄)(Fe)₅(CrAl₂O₃)(SiO₄)Nd' },
    ]
    ae2.forEach(item => {
        tooltip.add(`spectrum:pure_${item.name}`, (formulaColor + item.formula))
        switch (item.name) {                                                                                    // TODO: refactor switch
            case 'certus_quartz':
                tooltip.add(`ae2:${item.name}_crystal`, (formulaColor + item.formula))
                tooltip.add(`ae2:quartz_block`, (formulaColor + item.formula))
                tooltip.add(`ae2:charged_${item.name}_crystal`, (formulaColor + item.formula + formulaPlus))
            case 'fluix':
                tooltip.add(`ae2:${item.name}_dust`, (formulaColor + item.formula))
        }
    })


    // Botania
    const botania = [
        { name: 'gaia', formula: unknownFormula },
        { name: 'terrasteel', formula: unknownFormula },
        { name: 'elementium', formula: unknownFormula },
        { name: 'manasteel', formula: unknownFormula },
    ]
    botania.forEach(item => {
        tooltip.add(`botania:${item.name}`, (formulaColor + item.formula))
        derivatives.forEach(derivative => {
            tooltip.add(`modern_industrialization:${item.name}_${derivative}`, (formulaColor + item.formula))
            tooltip.add(`botania:${item.name}_${derivative}`, (formulaColor + item.formula))
        })
    })

    const raw_ores = [
        { name: 'kubejs:octiron_shards', charnel_pump: 'gui.ad_astra.text.moon', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: 'kubejs:raw_naquadah', charnel_pump: 'gui.ad_astra.text.mercury', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: 'kubejs:raw_turbinium', charnel_pump: 'gui.ad_astra.text.mars', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: 'kubejs:raw_caterium', charnel_pump: 'gui.ad_astra.text.venus', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: 'architects_palette:unobtanium', charnel_pump: 'gui.ad_astra.text.glacio', space_miner: 'kubejs.tooltip.text.nowhere' },

        { name: /^mythicmetals:(deepslate_|raw_)?adamantite(_ore)?$/, charnel_pump: 'biome.terralith.red_oasis', space_miner: 'kubejs.tooltip.text.mercury_venus' },
        { name: /^mythicmetals:(deepslate_|raw_)?carmot(_ore)?$/, charnel_pump: 'biome.terralith.red_oasis', space_miner: 'gui.ad_astra.text.venus' },
        { name: /^mythicmetals:(raw_)?aquarium(_ore)?$/, charnel_pump: 'biome.minecraft.deep_ocean', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: /^mythicmetals:(nether_)?banglum(_ore|)$|^mythicmetals:raw_banglum$/, charnel_pump: 'biome.terralith.gravel_desert', space_miner: 'gui.ad_astra.text.mercury' },
        { name: /^mythicmetals:(deepslate_)?unobtainium(_ore)?$/, charnel_pump: 'biome.terralith.gravel_desert', space_miner: 'gui.ad_astra.text.venus' },
        { name: /^mythicmetals:(raw_)?quadrillum(_ore)?$/, charnel_pump: 'biome.terralith.gravel_desert', space_miner: 'gui.ad_astra.text.moon' },
        { name: /^mythicmetals:(calcite_|raw_)?kyber(_ore)?$/, charnel_pump: 'biome.terralith.forested_highlands', space_miner: 'gui.ad_astra.text.venus' },
        { name: /^mythicmetals:(calcite_|end_stone_)?starrite(_ore)?$/, charnel_pump: 'biome.terralith.forested_highlands', space_miner: 'gui.ad_astra.text.moon' },
        { name: /^mythicmetals:(deepslate_)?morkite(_ore)?$/, charnel_pump: 'biome.terralith.moonlight_valley', space_miner: 'gui.ad_astra.text.glacio' },
        { name: /^mythicmetals:(deepslate_|raw_)?mythril(_ore)?$/, charnel_pump: 'biome.terralith.moonlight_valley', space_miner: 'gui.ad_astra.text.mars' },
        { name: /^mythicmetals:(deepslate_|raw_)?runite(_ore)?$/, charnel_pump: 'biome.terralith.moonlight_valley', space_miner: 'gui.ad_astra.text.glacio' },
        { name: /^mythicmetals:(midas_gold(_ore)?|raw_midas_gold)$/, charnel_pump: 'biome.terralith.yellowstone', space_miner: 'kubejs.tooltip.text.nowhere' },
        { name: /^mythicmetals:(palladium(_ore)?|raw_palladium)$/, charnel_pump: 'biome.terralith.yellowstone', space_miner: 'gui.ad_astra.text.mercury' },
        { name: /^mythicmetals:(blackstone_|raw_)?stormyx(_ore)?$/, charnel_pump: 'biome.terralith.yellowstone', space_miner: 'gui.ad_astra.text.mercury' },
        { name: /^mythicmetals:(deepslate_|smooth_basalt_|tuff_|raw_)?orichalcum(_ore)?$/, charnel_pump: 'biome.terralith.orchid_swamp', space_miner: 'gui.ad_astra.text.mars' },
        { name: /^mythicmetals:(deepslate_|raw_)?prometheum(_ore)?$/, charnel_pump: 'biome.terralith.orchid_swamp', space_miner: 'gui.ad_astra.text.mars' },
        { name: /^mythicmetals:(raw_osmium|osmium(_ore)?)$/, charnel_pump: 'biome.terralith.rocky_mountains', space_miner: 'gui.ad_astra.text.glacio' }
    ]
    raw_ores.forEach(raw => {
        tooltip.add(raw.name, [Text.translate("kubejs.tooltip.space_miner").gold().bold(), Text.translate(`${raw.space_miner}`).italic()])
        tooltip.add(raw.name, [Text.translate("kubejs.tooltip.charnel_pump").gold().bold(), Text.translate("kubejs.tooltip.charnel_pump.biome").green(), Text.translate(`${raw.charnel_pump}`).italic()])
    });
})
