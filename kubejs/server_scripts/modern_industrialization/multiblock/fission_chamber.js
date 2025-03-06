const fission = [
    {
        input: helium,
        output: [hydrogen,hydrogen],
        nums: [1,1]
    },
    {
        input: lithium,
        output: [helium,hydrogen],
        nums: [2,1]
    },
    {
        input: beryllium,
        output: [lithium,hydrogen],
        nums: [3,1]
    },
    {
        input: boron,
        output: [lithium,helium],
        nums: [3,2]
    },
    {
        input: carbon,
        output: [boron,hydrogen],
        nums: [5,1]
    },
    {
        input: nitrogen,
        output: [beryllium,lithium],
        nums: [4,3]
    },
    {
        input: oxygen,
        output: [boron,lithium],
        nums: [5,3]
    },
    {
        input: fluorine,
        output: [boron,beryllium],
        nums: [5,4]
    },
    {
        input: neon,
        output: [boron,boron],
        nums: [5,5]
    },
    {
        input: sodium,
        output: [neon,hydrogen],
        nums: [10,1]
    },
    {
        input: magnesium,
        output: [neon,helium],
        nums: [10,2]
    },
    {
        input: aluminum,
        output: [oxygen,boron],
        nums: [8,5]
    },
    {
        input: silicon,
        output: [neon,beryllium],
        nums: [10,4]
    },
    {
        input: phosphorus,
        output: [neon,boron],
        nums: [10,5]
    },
    {
        input: sulfur,
        output: [neon,carbon],
        nums: [10,6]
    },
    {
        input: chlorine,
        output: [fluorine,oxygen],
        nums: [9,8]
    },
    {
        input: argon,
        output: [neon,oxygen],
        nums: [10,8]
    },
    {
        input: potassium,
        output: [neon,fluorine],
        nums: [10,9]
    },
    {
        input: calcium,
        output: [neon,neon],
        nums: [10,10]
    },
    {
        input: scandium,
        output: [potassium,helium],
        nums: [19,2]
    },
    {
        input: titanium,
        output: [scandium,hydrogen],
        nums: [21,1]
    },
    {
        input: vanadium,
        output: [scandium,helium],
        nums: [21,2]
    },
    {
        input: chromium,
        output: [scandium,lithium],
        nums: [21,3]
    },
    {
        input: manganese,
        output: [scandium,beryllium],
        nums: [21,4]
    },
    {
        input: iron,
        output: [scandium,boron],
        nums: [21,5]
    },
    {
        input: cobalt,
        output: [scandium,carbon],
        nums: [21,6]
    },
    {
        input: nickel,
        output: [potassium,fluorine],
        nums: [19,9]
    },
    {
        input: copper,
        output: [potassium,neon],
        nums: [19,10]
    },
    {
        input: zinc,
        output: [cobalt,lithium],
        nums: [27,3]
    },
    {
        input: gallium,
        output: [cobalt,beryllium],
        nums: [27,4]
    },
    {
        input: germanium,
        output: [cobalt,boron],
        nums: [27,5]
    },
    {
        input: arsenic,
        output: [cobalt,carbon],
        nums: [27,6]
    },
    {
        input: selenium,
        output: [cobalt,nitrogen],
        nums: [27,7]
    },
    {
        input: bromine,
        output: [zinc,boron],
        nums: [30,5]
    },
    {
        input: krypton,
        output: [gallium,boron],
        nums: [31,5]
    },
    {
        input: rubidium,
        output: [germanium,boron],
        nums: [32,5]
    },
    {
        input: strontium,
        output: [arsenic,boron],
        nums: [33,5]
    },
    {
        input: yttrium,
        output: [selenium,boron],
        nums: [34,5]
    },
    {
        input: zirconium,
        output: [zinc,neon],
        nums: [30,10]
    },
    {
        input: niobium,
        output: [gallium,neon],
        nums: [31,10]
    },
    {
        input: molybdenum,
        output: [germanium,neon],
        nums: [32,10]
    },
    {
        input: technetium,
        output: [arsenic,neon],
        nums: [33,10]
    },
    {
        input: ruthenium,
        output: [selenium,neon],
        nums: [34,10]
    },
    {
        input: rhodium,
        output: [bromine,neon],
        nums: [35,10]
    },
    {
        input: palladium,
        output: [krypton,neon],
        nums: [36,10]
    },
    {
        input: silver,
        output: [rubidium,neon],
        nums: [37,10]
    },
    {
        input: cadmium,
        output: [cobalt,scandium],
        nums: [27,21]
    },
    {
        input: indium,
        output: [zirconium,fluorine],
        nums: [40,9]
    },
    {
        input: tin,
        output: [cobalt,vanadium],
        nums: [27,23]
    },
    {
        input: antimony,
        output: [strontium,aluminum],
        nums: [38,13]
    },
    {
        input: tellurium,
        output: [bromine,chlorine],
        nums: [35,17]
    },
    {
        input: iodine,
        output: [krypton,chlorine],
        nums: [36,17]
    },
    {
        input: xenon,
        output: [arsenic,scandium],
        nums: [33,21]
    },
    {
        input: cesium,
        output: [selenium,scandium],
        nums: [34,21]
    },
    {
        input: barium,
        output: [bromine,scandium],
        nums: [35,21]
    },
    {
        input: lanthanum,
        output: [krypton,scandium],
        nums: [36,21]
    },
    {
        input: cerium,
        output: [gallium,cobalt],
        nums: [31,27]
    },
    {
        input: praseodymium,
        output: [germanium,cobalt],
        nums: [32,27]
    },
    {
        input: neodymium,
        output: [arsenic,cobalt],
        nums: [33,27]
    },
    {
        input: promethium,
        output: [selenium,cobalt],
        nums: [34,27]
    },
    {
        input: samarium,
        output: [bromine,cobalt],
        nums: [35,27]
    },
    {
        input: europium,
        output: [krypton,cobalt],
        nums: [36,27]
    },
    {
        input: gadolinium,
        output: [rubidium,cobalt],
        nums: [37,27]
    },
    {
        input: terbium,
        output: [strontium,cobalt],
        nums: [38,27]
    },
    {
        input: dysprosium,
        output: [zirconium,iron],
        nums: [40,26]
    },
    {
        input: holmium,
        output: [ruthenium,vanadium],
        nums: [44,23]
    },
    {
        input: erbium,
        output: [ruthenium,chromium],
        nums: [44,24]
    },
    {
        input: thulium,
        output: [ruthenium,manganese],
        nums: [44,25]
    },
    {
        input: ytterbium,
        output: [rhodium,manganese],
        nums: [45,25]
    },
    {
        input: lutetium,
        output: [rhodium,iron],
        nums: [45,26]
    },
    {
        input: hafnium,
        output: [rhodium,cobalt],
        nums: [45,27]
    },
    {
        input: tantalum,
        output: [tellurium,scandium],
        nums: [52,21]
    },
    {
        input: tungsten,
        output: [tellurium,titanium],
        nums: [52,22]
    },
    {
        input: rhenium,
        output: [tellurium,vanadium],
        nums: [52,23]
    },
    {
        input: osmium,
        output: [tellurium,chromium],
        nums: [52,24]
    },
    {
        input: iridium,
        output: [iodine,chromium],
        nums: [53,24]
    },
    {
        input: platinum,
        output: [iodine,manganese],
        nums: [53,25]
    },
    {
        input: gold,
        output: [iodine,iron],
        nums: [53,26]
    },
    {
        input: mercury,
        output: [xenon,iron],
        nums: [54,26]
    },
    {
        input: thallium,
        output: [xenon,cobalt],
        nums: [54,27]
    },
    {
        input: lead,
        output: [xenon,nickel],
        nums: [54,28]
    },
    {
        input: bismuth,
        output: [cesium,nickel],
        nums: [55,28]
    },
    {
        input: polonium,
        output: [cesium,copper],
        nums: [55,29]
    },
    {
        input: astatine,
        output: [cesium,zinc],
        nums: [55,30]
    },
    {
        input: radon,
        output: [barium,zinc],
        nums: [56,30]
    },
    {
        input: francium,
        output: [barium,gallium],
        nums: [56,31]
    },
    {
        input: radium,
        output: [lanthanum,gallium],
        nums: [57,31]
    },
    {
        input: actinium,
        output: [lanthanum,germanium],
        nums: [57,32]
    },
    {
        input: thorium,
        output: [cerium,germanium],
        nums: [58,32]
    },
    {
        input: protactinium,
        output: [cerium,arsenic],
        nums: [58,33]
    },
    {
        input: uranium,
        output: [barium,krypton],
        nums: [56,36]
    },
    {
        input: neptunium,
        output: [promethium,germanium],
        nums: [61,32]
    },
    {
        input: plutonium,
        output: [samarium,germanium],
        nums: [62,32]
    },
    {
        input: americium,
        output: [europium,germanium],
        nums: [63,32]
    },
    {
        input: curium,
        output: [gadolinium,germanium],
        nums: [64,32]
    },
    {
        input: berkelium,
        output: [terbium,germanium],
        nums: [65,32]
    },
    {
        input: californium,
        output: [dysprosium,germanium],
        nums: [66,32]
    },
    {
        input: einsteinium,
        output: [holmium,germanium],
        nums: [67,32]
    },
    {
        input: fermium,
        output: [erbium,germanium],
        nums: [68,32]
    },
    {
        input: mendelevium,
        output: [thulium,germanium],
        nums: [69,32]
    },
    {
        input: nobelium,
        output: [ytterbium,germanium],
        nums: [70,32]
    },
    {
        input: lawrencium,
        output: [lutetium,germanium],
        nums: [71,32]
    },
    {
        input: rutherfordium,
        output: [hafnium,germanium],
        nums: [72,32]
    },
    {
        input: dubnium,
        output: [rhenium,zinc],
        nums: [75,30]
    },
    {
        input: seaborgium,
        output: [mercury,iron],
        nums: [80,26]
    },
    {
        input: bohrium,
        output: [thallium,iron],
        nums: [81,26]
    },
    {
        input: hassium,
        output: [polonium,chromium],
        nums: [84,24]
    },
    {
        input: meitnerium,
        output: [astatine,chromium],
        nums: [85,24]
    },
    {
        input: darmstadtium,
        output: [radon,chromium],
        nums: [86,24]
    },
    {
        input: roentgenium,
        output: [francium,chromium],
        nums: [87,24]
    },
    {
        input: copernicium,
        output: [radium,chromium],
        nums: [88,24]
    },
    {
        input: nihonium,
        output: [actinium,chromium],
        nums: [89,24]
    },
    {
        input: flerovium,
        output: [thorium,chromium],
        nums: [90,24]
    },
    {
        input: moscovium,
        output: [protactinium,chromium],
        nums: [91,24]
    },
    {
        input: livermorium,
        output: [praseodymium,lanthanum],
        nums: [59,57]
    },
    {
        input: tennessine,
        output: [neptunium,chromium],
        nums: [93,24]
    },
    {
        input: oganesson,
        output: [plutonium,chromium],
        nums: [94,24]
    },
]

ServerEvents.recipes(event => {
    fission.forEach((atom,i) => {
        event.recipes.modern_industrialization.fission_chamber(0.15 * (1.15**((130-i)))+1024, 40)
            .itemIn(atom.input)
            .itemIn('kubejs:neutron_pile')
            .itemOut(atom.output[0])
            .itemOut(atom.output[1])
    })
})
