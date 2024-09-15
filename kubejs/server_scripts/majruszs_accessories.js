ServerEvents.recipes(event => {

    const removeByOutput = [
        'majruszsaccessories:golden_dice',
        'majruszsaccessories:golden_horseshoe',
    ];
    removeByOutput.forEach(item => event.remove({ output: item }));

    customEnchanterCraft(event, {
        time: 800, experience: 500, advancement: "spectrum:midgame/build_enchanting_structure", yield_upgrades: true,
        ingredients: [
          {"item": "majruszsaccessories:horseshoe"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"}
        ],
        result: {
            "item": "majruszsaccessories:golden_horseshoe"
        },
    });

    customEnchanterCraft(event, {
        time: 800, experience: 500, advancement: "spectrum:midgame/build_enchanting_structure", yield_upgrades: true,
        ingredients: [
          {"item": "majruszsaccessories:dice"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"},
          {"item": "spectrum:pure_gold"},
          {"item": "numismatic-overhaul:gold_coin"}
        ],
        result: {
            "item": "majruszsaccessories:golden_dice"
        },
    });




});