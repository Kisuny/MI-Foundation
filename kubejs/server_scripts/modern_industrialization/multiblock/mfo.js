ServerEvents.recipes(event => {
    var array = ["apple", "banana", "lemon", "mango"];
    let results = [];
    const atoms = [
        {
            name: 'hydrogen',
            id: 1,
        },
        {
            name: 'helium',
            id: 2,
        },
        {
            name: 'lithium',
            id: 3,
        },
        {
            name: 'beryllium',
            id: 4,
        },
        {
            name: 'boron',
            id: 5,
        },
        {
            name: 'carbon',
            id: 6,
        },
        {
            name: 'nitrogen',
            id: 7,
        },
        {
            name: 'oxygen',
            id: 8,
        },
        {
            name: 'fluorine',
            id: 9,
        },
        {
            name: 'neon',
            id: 10,
        },
        {
            name: 'sodium',
            id: 11,
        },
        {
            name: 'magnesium',
            id: 12,
        },
        {
            name: 'aluminum',
            id: 13,
        },
        {
            name: 'silicon',
            id: 14,
        },
        {
            name: 'phosphorus',
            id: 15,
        },
        {
            name: 'sulfur',
            id: 16,
        },
        {
            name: 'chlorine',
            id: 17,
        },
        {
            name: 'argon',
            id: 18,
        },
        {
            name: 'potassium',
            id: 19,
        },
        {
            name: 'calcium',
            id: 20,
        },
        {
            name: 'scandium',
            id: 21,
        },
        {
            name: 'titanium',
            id: 22,
        },
        {
            name: 'vanadium',
            id: 23,
        },
        {
            name: 'chromium',
            id: 24,
        },
        {
            name: 'manganese',
            id: 25,
        },
        {
            name: 'iron',
            id: 26,
        },
        {
            name: 'cobalt',
            id: 27,
        },
        {
            name: 'nickel',
            id: 28,
        },
        {
            name: 'copper',
            id: 29,
        },
        {
            name: 'zinc',
            id: 30,
        },
        {
            name: 'gallium',
            id: 31,
        },
        {
            name: 'germanium',
            id: 32,
        },
        {
            name: 'arsenic',
            id: 33,
        },
        {
            name: 'selenium',
            id: 34,
        },
        {
            name: 'bromine',
            id: 35,
        },
        {
            name: 'krypton',
            id: 36,
        },
        {
            name: 'rubidium',
            id: 37,
        },
        {
            name: 'strontium',
            id: 38,
        },
        {
            name: 'yttrium',
            id: 39,
        },
        {
            name: 'zirconium',
            id: 40,
        },
        {
            name: 'niobium',
            id: 41,
        },
        {
            name: 'molybdenum',
            id: 42,
        },
        {
            name: 'technetium',
            id: 43,
        },
        {
            name: 'ruthenium',
            id: 44,
        },
        {
            name: 'rhodium',
            id: 45,
        },
        {
            name: 'palladium',
            id: 46,
        },
        {
            name: 'silver',
            id: 47,
        },
        {
            name: 'cadmium',
            id: 48,
        },
        {
            name: 'indium',
            id: 49,
        },
        {
            name: 'tin',
            id: 50,
        },
        {
            name: 'antimony',
            id: 51,
        },
        {
            name: 'tellurium',
            id: 52,
        },
        {
            name: 'iodine',
            id: 53,
        },
        {
            name: 'xenon',
            id: 54,
        },
        {
            name: 'cesium',
            id: 55,
        },
        {
            name: 'barium',
            id: 56,
        },
        {
            name: 'lanthanum',
            id: 57,
        },
        {
            name: 'cerium',
            id: 58,
        },
        {
            name: 'praseodymium',
            id: 59,
        },
        {
            name: 'neodymium',
            id: 60,
        },
        {
            name: 'promethium',
            id: 61,
        },
        {
            name: 'samarium',
            id: 62,
        },
        {
            name: 'europium',
            id: 63,
        },
        {
            name: 'gadolinium',
            id: 64,
        },
        {
            name: 'terbium',
            id: 65,
        },
        {
            name: 'dysprosium',
            id: 66,
        },
        {
            name: 'holmium',
            id: 67,
        },
        {
            name: 'erbium',
            id: 68,
        },
        {
            name: 'thulium',
            id: 69,
        },
        {
            name: 'ytterbium',
            id: 70,
        },
        {
            name: 'lutetium',
            id: 71,
        },
        {
            name: 'hafnium',
            id: 72,
        },
        {
            name: 'tantalum',
            id: 73,
        },
        {
            name: 'tungsten',
            id: 74,
        },
        {
            name: 'rhenium',
            id: 75,
        },
        {
            name: 'osmium',
            id: 76,
        },
        {
            name: 'iridium',
            id: 77,
        },
        {
            name: 'platinum',
            id: 78,
        },
        {
            name: 'gold',
            id: 79,
        },
        {
            name: 'mercury',
            id: 80,
        },
        {
            name: 'thallium',
            id: 81,
        },
        {
            name: 'lead',
            id: 82,
        },
        {
            name: 'bismuth',
            id: 83,
        },
        {
            name: 'polonium',
            id: 84,
        },
        {
            name: 'astatine',
            id: 85,
        },
        {
            name: 'radon',
            id: 86,
        },
        {
            name: 'francium',
            id: 87,
        },
        {
            name: 'radium',
            id: 88,
        },
        {
            name: 'actinium',
            id: 89,
        },
        {
            name: 'thorium',
            id: 90,
        },
        {
            name: 'protactinium',
            id: 91,
        },
        {
            name: 'uranium',
            id: 92,
        },
        {
            name: 'neptunium',
            id: 93,
        },
        {
            name: 'plutonium',
            id: 94,
        },
        {
            name: 'americium',
            id: 95,
        },
        {
            name: 'curium',
            id: 96,
        },
        {
            name: 'berkelium',
            id: 97,
        },
        {
            name: 'californium',
            id: 98,
        },
        {
            name: 'einsteinium',
            id: 99,
        },
        {
            name: 'fermium',
            id: 100,
        },
        {
            name: 'mendelevium',
            id: 101,
        },
        {
            name: 'nobelium',
            id: 102,
        },
        {
            name: 'lawrencium',
            id: 103,
        },
        {
            name: 'rutherfordium',
            id: 104,
        },
        {
            name: 'dubnium',
            id: 105,
        },
        {
            name: 'seaborgium',
            id: 106,
        },
        {
            name: 'bohrium',
            id: 107,
        },
        {
            name: 'hassium',
            id: 108,
        },
        {
            name: 'meitnerium',
            id: 109,
        },
        {
            name: 'darmstadtium',
            id: 110,
        },
        {
            name: 'roentgenium',
            id: 111,
        },
        {
            name: 'copernicium',
            id: 112,
        },
        {
            name: 'nihonium',
            id: 113,
        },
        {
            name: 'flerovium',
            id: 114,
        },
        {
            name: 'moscovium',
            id: 115,
        },
        {
            name: 'livermorium',
            id: 116,
        },
        {
            name: 'tennessine',
            id: 117,
        },
        {
            name: 'oganesson',
            id: 118,
        },

    ]
    // Since you only want pairs, there's no reason
    // to iterate over the last element directly
    for (let i = 0; i < atoms.length - 1; i++) {
        for (let j = i; j < atoms.length; j++) {
            let sum = atoms[i].id + atoms[j].id;
            let exp = 2.4;
            let first = atoms[i].id + 8;
            let second = atoms[j].id + 8;
            let mul = atoms[i].id * atoms[j].id;
            let res = atoms.find(item => item.id === sum);
            if (res !== undefined) {
                event.recipes.modern_industrialization.fusion_construct(Math.floor(0.06* (first ** exp) * (second ** exp)), ((first ** 2) + (second ** 2)))
                    .itemIn(`chemlib:${atoms[i].name}`)
                    .itemIn(`chemlib:${atoms[j].name}`)
                    .itemOut(`chemlib:${res.name}`)
                    .biome('ad_astra:orbit')
            }
        }
    }

    console.log(results);
})
