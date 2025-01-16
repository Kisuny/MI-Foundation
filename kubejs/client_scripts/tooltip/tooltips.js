//priority: 1

// console.info('Resources Reloaded (tooltips)')

ItemEvents.tooltip(tooltip => {

    tooltip.add(["kubejs:bee","kubejs:beehemoth"], "Deprecated, will be deleted! Can be recrafted into a different type of bee!")
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
    tooltip.add('modern_industrialization:electric_greenhouse',formatting.red + 'Deprecated');

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
        { name: 'kubejs:octiron_shards', charnel_pump: 'gui.ad_astra.text.moon'},
        { name: 'kubejs:raw_naquadah', charnel_pump: 'gui.ad_astra.text.mercury'},
        { name: 'kubejs:raw_turbinium', charnel_pump: 'gui.ad_astra.text.mars'},
        { name: 'kubejs:raw_caterium', charnel_pump: 'gui.ad_astra.text.venus'},
        { name: 'architects_palette:unobtanium', charnel_pump: 'gui.ad_astra.text.glacio'},
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*octiron_ore.*/, 
            charnel_pump: 'gui.ad_astra.text.moon',
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*naquadah_ore.*/, 
            charnel_pump: 'gui.ad_astra.text.mercury',
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*turbinium_ore.*/, 
            charnel_pump: 'gui.ad_astra.text.mars',
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*caterium_ore.*/, 
            charnel_pump: 'gui.ad_astra.text.venus',
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*gadolinite_ore.*/, 
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_gadolinite$.*/, 
            quarry: true,
        },

        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*molybdenite_ore.*/, 
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_molybdenite$.*/, 
            quarry: true,
        },

        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*roquesite_ore.*/, 
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_roquesite$.*/, 
            quarry: true,
        },


        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*vanadinite_ore.*/, 
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_vanadinite$.*/, 
            quarry: true,
        },


        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*fluoroapatite_ore.*/, 
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_fluoroapatite$.*/, 
            quarry: true,
        },

        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*bauxite_ore.*/, 
            overworld: "kubejs.tooltip.bauxite.overworld",
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /.*(ad_astra:|minecraft:|modern_industrialization:)(deepslate_|venus_|glacio_)?coal_ore.*/, 
            overworld: "kubejs.tooltip.coal.overworld",
            venus: "kubejs.tooltip.coal.venus",
            glacio: "kubejs.tooltip.coal.glacio",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*lignite_coal_ore.*/, 
            overworld: "kubejs.tooltip.lignite_coal.overworld",
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_copper$)|(copper_ore))/, 
            overworld: "kubejs.tooltip.copper.overworld",
            glacio: "kubejs.tooltip.copper.glacio",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*diamond_ore.*/, 
            overworld: "kubejs.tooltip.diamond.overworld",
            venus: "kubejs.tooltip.diamond.venus",
            mars: "kubejs.tooltip.diamond.mars",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*emerald_ore.*/, 
            overworld: "kubejs.tooltip.emerald.overworld",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_gold$)|(gold_ore)).*/, 
            overworld: "kubejs.tooltip.gold.overworld",
            nether: "kubejs.tooltip.gold.nether",
            venus: "kubejs.tooltip.gold.venus",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*nickel_ore.*/, 
            overworld: "kubejs.tooltip.nickel.overworld",
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_nickel$.*/, 
            overworld: "kubejs.tooltip.nickel.overworld",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*((ad_astra:|minecraft:|modern_industrialization:).*((raw_iron$)|(_iron_ore)))|(minecraft:iron_ore).*/, 
            overworld: "kubejs.tooltip.iron.overworld",
            moon: "kubejs.tooltip.iron.moon",
            mars: "kubejs.tooltip.iron.mars",
            mercury: "kubejs.tooltip.iron.mercury",
            glacio: "kubejs.tooltip.iron.glacio",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*lapis_ore.*/, 
            overworld: "kubejs.tooltip.lapis.overworld",
            glacio: "kubejs.tooltip.lapis.glacio",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*lead_ore.*/, 
            overworld: "kubejs.tooltip.lead.overworld",
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_lead$.*/, 
            overworld: "kubejs.tooltip.lead.overworld",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_silver$)|(silver_ore)).*/, 
            overworld: "kubejs.tooltip.silver.overworld",
        },
        { 
            name: /^.*(modern_industrialization:).*quartz_ore.*/, 
            overworld: "kubejs.tooltip.quartz.overworld", 
            nether: "kubejs.tooltip.quartz.nether",
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:).*quartz_ore.*/, 
            overworld: "kubejs.tooltip.quartz.overworld", 
            nether: "kubejs.tooltip.quartz.nether",
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*antimony_ore.*/, 
            overworld: "kubejs.tooltip.antimony.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_antimony$.*/, 
            overworld: "kubejs.tooltip.antimony.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*platinum_ore.*/, 
            overworld: "kubejs.tooltip.platinum.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_platinum$.*/, 
            overworld: "kubejs.tooltip.platinum.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*iridium_ore.*/, 
            overworld: "kubejs.tooltip.iridium.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_iridium$.*/, 
            overworld: "kubejs.tooltip.iridium.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*redstone_ore.*/, 
            overworld: "kubejs.tooltip.redstone.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*salt_ore.*/, 
            overworld: "kubejs.tooltip.salt.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*tin_ore.*/, 
            overworld: "kubejs.tooltip.tin.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_tin$.*/, 
            overworld: "kubejs.tooltip.tin.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*titanium_ore.*/, 
            overworld: "kubejs.tooltip.titanium.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_titanium$.*/, 
            overworld: "kubejs.tooltip.titanium.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*tungsten_ore.*/, 
            overworld: "kubejs.tooltip.tungsten.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_tungsten$.*/, 
            overworld: "kubejs.tooltip.tungsten.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*brookite_ore.*/, 
            overworld: "kubejs.tooltip.brookite.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_brookite$.*/, 
            overworld: "kubejs.tooltip.brookite.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*uranium_ore.*/, 
            overworld: "kubejs.tooltip.uranium.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_uranium$.*/, 
            overworld: "kubejs.tooltip.uranium.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*mozanite_ore.*/, 
            overworld: "kubejs.tooltip.mozanite.overworld", 
            veins_spawn: true,
            quarry: true,
            hide_press_shift:true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*raw_mozanite$.*/, 
            overworld: "kubejs.tooltip.mozanite.overworld", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*ancient_debris.*/, 
            nether: "kubejs.tooltip.ancient_debris.nether", 
            veins_spawn: true,
            quarry: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_desh$)|(desh_ore$)).*/, 
            moon: "kubejs.tooltip.desh.moon", 
            charnel_pump: 'kubejs.tooltip.text.moon_mercury_venus_glacio',
            space_miner: 'gui.ad_astra.text.moon', 
            veins_spawn: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_ostrum$)|(ostrum_ore$)).*/, 
            mars: "kubejs.tooltip.ostrum.mars", 
            charnel_pump: 'kubejs.tooltip.text.moon_mercury_venus_glacio', 
            space_miner: 'gui.ad_astra.text.mars', 
            veins_spawn: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((raw_calorite$)|(calorite_ore$)).*/, 
            venus: "kubejs.tooltip.calorite.venus",
            charnel_pump: 'kubejs.tooltip.text.moon_mercury_venus_glacio', 
            space_miner: 'gui.ad_astra.text.venus', 
            veins_spawn: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*((ice_shard$)|(ice_shard_ore$)).*/, 
            moon: "kubejs.tooltip.ice_shard.moon", 
            mars: "kubejs.tooltip.ice_shard.mars", 
            glacio: "kubejs.tooltip.ice_shard.glacio",
            space_miner: 'kubejs.tooltip.space_miner_several_planets',  
            veins_spawn: true,
        },
        { 
            name: /^.*(ad_astra:|minecraft:|modern_industrialization:).*cheese_ore$.*/, 
            moon: "kubejs.tooltip.cheese.moon", 
            veins_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_|raw_)?adamantite(_ore)?$/, 
            charnel_pump: 'biome.terralith.red_oasis', 
            space_miner: 'kubejs.tooltip.text.mercury_venus', 
            overworld: 'kubejs.tooltip.adamantite.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_|raw_)?carmot(_ore)?$/,
            charnel_pump: 'biome.terralith.red_oasis', 
            space_miner: 'gui.ad_astra.text.venus',
            overworld: 'kubejs.tooltip.carmot.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(raw_)?aquarium(_ore)?$/, 
            charnel_pump: 'biome.minecraft.deep_ocean',
            overworld: 'kubejs.tooltip.aquarium.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(nether_)?banglum(_ore|)$|^mythicmetals:raw_banglum$/, 
            charnel_pump: 'biome.terralith.gravel_desert',
            space_miner: 'gui.ad_astra.text.mercury',
            overworld: "kubejs.tooltip.banglum.overworld",
            nether: "kubejs.tooltip.banglum.nether",
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_)?unobtainium(_ore)?$/, 
            charnel_pump: 'biome.terralith.gravel_desert',
            space_miner: 'gui.ad_astra.text.venus',
            overworld: "kubejs.tooltip.unobtainium.overworld",
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(raw_)?quadrillum(_ore)?$/, 
            charnel_pump: 'biome.terralith.gravel_desert', 
            space_miner: 'gui.ad_astra.text.moon',
            overworld:'kubejs.tooltip.quadrillum.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(calcite_|raw_)?kyber(_ore)?$/, 
            charnel_pump: 'biome.terralith.forested_highlands', 
            space_miner: 'gui.ad_astra.text.venus',
            overworld: 'kubejs.tooltip.kyber.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(calcite_|end_stone_)?starrite(_ore)?$/, 
            charnel_pump: 'biome.terralith.forested_highlands', 
            space_miner: 'gui.ad_astra.text.moon',
            overworld: 'kubejs.tooltip.starrite.overworld',
            the_end: 'kubejs.tooltip.starrite.the_end',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_)?morkite(_ore)?$/, 
            charnel_pump: 'biome.terralith.moonlight_valley', 
            space_miner: 'gui.ad_astra.text.glacio',
            overworld: 'kubejs.tooltip.morkite.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_|raw_)?mythril(_ore)?$/, 
            charnel_pump: 'biome.terralith.moonlight_valley',
            space_miner: 'gui.ad_astra.text.mars',
            overworld: 'kubejs.tooltip.mythril.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_|raw_)?runite(_ore)?$/, 
            charnel_pump: 'biome.terralith.moonlight_valley', 
            space_miner: 'gui.ad_astra.text.glacio',
            overworld: 'kubejs.tooltip.runite.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(midas_gold(_ore)?|raw_midas_gold)$/,
            charnel_pump: 'biome.terralith.yellowstone',
            nether: 'kubejs.tooltip.midas_gold.nether',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(palladium(_ore)?|raw_palladium)$/, 
            charnel_pump: 'biome.terralith.yellowstone', 
            space_miner: 'gui.ad_astra.text.mercury',
            nether: 'kubejs.tooltip.palladium.nether',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(blackstone_|raw_)?stormyx(_ore)?$/, 
            charnel_pump: 'biome.terralith.yellowstone', 
            space_miner: 'gui.ad_astra.text.mercury',
            nether: 'kubejs.tooltip.stormyx.nether',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(deepslate_|smooth_basalt_|tuff_|raw_)?orichalcum(_ore)?$/, 
            charnel_pump: 'biome.terralith.orchid_swamp',
            space_miner: 'gui.ad_astra.text.mars',
            overworld: 'kubejs.tooltip.orichalcum.overworld',
            natural_spawn: true,

        },
        { 
            name: /^mythicmetals:(deepslate_|raw_)?prometheum(_ore)?$/, 
            charnel_pump: 'biome.terralith.orchid_swamp', 
            space_miner: 'gui.ad_astra.text.mars',
            overworld: 'kubejs.tooltip.prometheum.overworld',
            natural_spawn: true,
        },
        { 
            name: /^mythicmetals:(raw_osmium|osmium(_ore)?)$/, 
            charnel_pump: 'biome.terralith.rocky_mountains', 
            space_miner: 'gui.ad_astra.text.glacio',
            natural_spawn: true,
        }
    ]
    raw_ores.forEach(raw => {
        tooltip.addAdvanced(
            raw.name, 
            (item, advanced, text) => 
                {                    
                    if (!tooltip.shift && !raw.hide_press_shift) {text.add(1, Text.translate("kubejs.tooltip.hold_shift_to_know_more").gold())}
                    else if (!tooltip.shift && raw.hide_press_shift) {}
                    else {
                        let i = 1
                        if (raw.natural_spawn) {
                            text.add(i++, Text.translate("kubejs.tooltip.natural_spawn").gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.veins_spawn) {
                            text.add(i++, Text.translate("kubejs.tooltip.veins_spawn").gold())
                            text.add(i++, Text.translate("kubejs.tooltip.veins_spawn_2").gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.overworld) {
                            text.add(i++, Text.translate("kubejs.tooltip.overworld").green())
                            text.add(i++, Text.translate(`${raw.overworld}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.nether) {
                            text.add(i++, Text.translate("kubejs.tooltip.nether").red())
                            text.add(i++, Text.translate(`${raw.nether}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.the_end) {
                            text.add(i++, Text.translate("kubejs.tooltip.the_end").lightPurple())
                            text.add(i++, Text.translate(`${raw.the_end}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.moon) {
                            text.add(i++, Text.translate("gui.ad_astra.text.moon").white())
                            text.add(i++, Text.translate(`${raw.moon}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.mars) {
                            text.add(i++, Text.translate("gui.ad_astra.text.mars").darkRed())
                            text.add(i++, Text.translate(`${raw.mars}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.venus) {
                            text.add(i++, Text.translate("gui.ad_astra.text.venus").yellow())
                            text.add(i++, Text.translate(`${raw.venus}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.mercury) {
                            text.add(i++, Text.translate("gui.ad_astra.text.mercury").red())
                            text.add(i++, Text.translate(`${raw.mercury}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.glacio) {
                            text.add(i++, Text.translate("gui.ad_astra.text.glacio").aqua())
                            text.add(i++, Text.translate(`${raw.glacio}`).gold())
                            text.add(i++, Text.translate(" "))
                        }
                        if (raw.space_miner || raw.charnel_pump || raw.quarry){
                            text.add(i++, Text.translate("kubejs.tooltip.alternative_way_to_obtain").blue().bold())
                        }
                        if (raw.space_miner) {
                            text.add(i++, Text.translate("kubejs.tooltip.space_miner").blue().append(Text.translate(`${raw.space_miner}`).italic().gray()))
                        }
                        if (raw.charnel_pump) {
                            text.add(i++, Text.translate("kubejs.tooltip.charnel_pump").blue().append(Text.translate("kubejs.tooltip.charnel_pump.biome")).append(Text.translate(`${raw.charnel_pump}`).italic().gray()))
                        }
                        if (raw.quarry) {
                            text.add(i++, Text.translate("kubejs.tooltip.quarry").blue())
                        }
                        text.add(i++, Text.translate(" "))
                    }
                }
        );
    });
})