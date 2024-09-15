//priority: 1008


// Define some things
const formulaColor = global.formattingCodes.dark_aqua
const formulaPlus = '⁺' // e.g. SiO₄⁺

let mag = global.formattingCodes.magic
let res = global.formattingCodes.reset + formulaColor
// original: 'άγνωστος φόρμουλα' ('unknown formula' on Greek)
const unknownFormula = res + 'άγν' + mag + '---' + res + 'ος φόρ' + mag + '---' + res + 'λα'
const magicFormula = mag + '----------'


// Don't Formatting This!

// All formulas for ChemLib tooltips
global.itemFormulas = [
    // Vanilla (Minecraft)                                                              .
    { name: 'copper',                       formula: 'Cu'                               },
    { name: 'gold',                         formula: 'Au'                               },
    { name: 'coal',                         formula: 'C'                                },
    { name: 'iron',                         formula: 'Fe'                               },
    { name: 'glass',                        formula: 'SiO₂'                             },
    { name: 'stained_glass',                formula: 'SiO₂'                             }, // miscellaneous (TODO: refactor)
    { name: 'quartz',                       formula: 'SiO₄'                             },
    { name: 'emerald',                      formula: 'Be₃Al₂(SiO₃)₆'                    },
    { name: 'amethyst',                     formula: '(Fe)SiO₂'                         },
    { name: 'diamond',                      formula: 'C'                                },
    { name: 'redstone',                     formula: '(Fe)₅(CrAl₂O₃)(SiO₄)Nd'           },
    { name: 'lapis',                        formula: 'Na₈Al₆Si₆O₂₄(SO)₄'                },
    { name: 'lapis_lazuli',                 formula: 'Na₈Al₆Si₆O₂₄(SO)₄'                }, // miscellaneous (TODO: refactor)
    // Modern Industrialization                                                         .
    { name: 'hsla_steel',                   formula: 'FeCrMoV'                          },
    { name: 'vanadium',                     formula: 'V'                                },
    { name: 'aluminum',                     formula: 'Al'                               },
    { name: 'antimony',                     formula: 'Sb'                               },
    { name: 'battery_alloy',                formula: 'PbSb'                             },
    { name: 'beryllium',                    formula: 'Be'                               },
    { name: 'bronze',                       formula: '(Cu)₃Sn'                          },
    { name: 'tin',                          formula: 'Sn'                               },
    { name: 'cadmium',                      formula: 'Cd'                               },
    { name: 'chromium',                     formula: 'Cr'                               },
    { name: 'cupronickel',                  formula: 'CuNi'                             },
    { name: 'electrum',                     formula: 'AuAg'                             },
    { name: 'he_mox',                       formula: 'PuU'                              },
    { name: 'he_uranium',                   formula: 'U'                                },
    { name: 'invar',                        formula: 'Ni(Fe)₂'                          },
    { name: 'iridium',                      formula: 'Ir'                               },
    { name: 'kanthal',                      formula: '((Fe)₆CrNiMn)CrAl'                },
    { name: 'lead',                         formula: 'Pb'                               },
    { name: 'nickel',                       formula: 'Ni'                               },
    { name: 'platinum',                     formula: 'Pt'                               },
    { name: 'plutonium',                    formula: 'Pu'                               },
    { name: 'silicon',                      formula: 'Si'                               },
    { name: 'silver',                       formula: 'Ag'                               },
    { name: 'stainless_steel',              formula: '(Fe)₆CrNiMn'                      },
    { name: 'steel',                        formula: 'FeC'                              },
    { name: 'annealed_copper',              formula: 'Cu'                               },
    { name: 'superconductor',               formula: 'Ir(Cu)₃(Y)₃(Nd)₂'                 },
    { name: 'titanium',                     formula: 'Ti'                               },
    { name: 'tungsten',                     formula: 'W'                                },
    { name: 'uranium',                      formula: 'U'                                },
    { name: 'bauxite',                      formula: '(Al₂O₃)Ti'                        },
    { name: 'ruby',                         formula: 'CrAl₂O₃'                          },
    { name: 'manganese',                    formula: 'Mn'                               },
    { name: 'carbon',                       formula: 'C'                                },
    { name: 'neodymium',                    formula: 'Nd'                               },
    { name: 'mozanite',                     formula: '(NdCdY)PO₄'                       }, // should be monazite
    // Modern Industrialization - Special cases                                         .
    { name: 'frostproof',                   formula: 'Al'                               }, // aluminum machine casing
    { name: 'heatproof',                    formula: 'Ni(Fe)₂'                          }, // invar machine casing
    { name: 'clean_stainless_steel',        formula: '(Fe)₆CrNiMn'                      }, // stainless steel machine casing
    { name: 'solid_titanium',               formula: 'Ti'                               }, // titanium machine casing
    // Mythic Metals                                                                    .
    { name: 'osmium',                       formula: 'Os'                               },
    { name: 'palladium',                    formula: 'Pd'                               },
    { name: 'adamantite',                   formula: unknownFormula                     },
    { name: 'aquarium',                     formula: unknownFormula                     },
    { name: 'banglum',                      formula: unknownFormula                     },
    { name: 'carmot',                       formula: unknownFormula                     },
    { name: 'celestium',                    formula: unknownFormula                     },
    { name: 'hallowed',                     formula: unknownFormula                     },
    { name: 'kyber',                        formula: unknownFormula                     },
    { name: 'metallurgium',                 formula: unknownFormula                     },
    { name: 'midas_gold',                   formula: unknownFormula                     },
    { name: 'mythril',                      formula: unknownFormula                     },
    { name: 'orichalcum',                   formula: unknownFormula                     },
    { name: 'prometheum',                   formula: unknownFormula                     },
    { name: 'quadrillum',                   formula: unknownFormula                     },
    { name: 'runite',                       formula: unknownFormula                     },
    { name: 'stormyx',                      formula: unknownFormula                     },
    { name: 'durasteel',                    formula: unknownFormula                     },
    { name: 'star_platinum',                formula: unknownFormula                     },
    { name: 'morkite',                      formula: unknownFormula                     },
//  { name: 'unobtainium',                  formula: unknownFormula                     },
//  { name: 'starrite',                     formula: unknownFormula                     },
    // Spectrum                                                                         .
    { name: 'citrine',                      formula: '[FeO₄]⁰SiO₂'                      },
    { name: 'topaz',                        formula: 'Al₂SiO₄(F,OH)₂'                   },
    { name: 'onyx',                         formula: 'SiO₂'                             },
    { name: 'moonstone',                    formula: unknownFormula                     },
    { name: 'shimmerstone',                 formula: unknownFormula                     },
    { name: 'paltaeria',                    formula: unknownFormula                     },
    { name: 'stratine',                     formula: unknownFormula                     },
    { name: 'azurite',                      formula: unknownFormula                     },
    { name: 'bloodstone',                   formula: unknownFormula                     },
    { name: 'malachite',                    formula: 'Cu₂CO₃(OH)₂'                      },
    { name: 'pyrite',                       formula: 'FeS₂'                             },
    { name: 'bismuth',                      formula: 'Bi'                               },
    { name: 'amethyst',                     formula: '(Fe)SiO₂'                         }, // copy from vanilla (TODO: refactor)
    // Architect's Palette                                                              .
    { name: 'algal',                        formula: unknownFormula                     },
    { name: 'nether_brass',                 formula: unknownFormula                     },
    { name: 'sunmetal',                     formula: unknownFormula                     },
    { name: 'wardstone',                    formula: unknownFormula                     },
    { name: 'entwine',                      formula: unknownFormula                     },
    { name: 'unobtanium',                   formula: unknownFormula                     }, // different from mythicmetals - not typo
    { name: 'oracle',                       formula: unknownFormula                     },
    { name: 'cerebral',                     formula: unknownFormula                     },
    // YTTR                                                                             .
    { name: 'yttrium',                      formula: 'Y'                                },
    { name: 'brookite',                     formula: 'TiO₂(Ta)(Nb)'                     },
    { name: 'gadolinite',                   formula: 'Y₂FeBe₂Si₂O₁₀'                    },
    { name: 'void',                         formula: magicFormula                       },
    // Applied Energetics 2                                                             .
    { name: 'certus_quartz',                formula: 'SiO₄'                             },
    { name: 'fluix',                        formula: '(SiO₄)(Fe)₅(CrAl₂O₃)(SiO₄)Nd'     },
    // Botania                                                                          .
    { name: 'gaia',                         formula: unknownFormula                     },
    { name: 'terrasteel',                   formula: unknownFormula                     },
    { name: 'elementium',                   formula: unknownFormula                     },
    { name: 'manasteel',                    formula: unknownFormula                     },
    // Spirit
    { name: 'soul_steel',                   formula: 'ᛊᛟᚢᛚᛊᛏᛖᛖᛚ'                        },
]
