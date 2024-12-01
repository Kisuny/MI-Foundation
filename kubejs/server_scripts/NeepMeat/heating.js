function heating(event, recipe) {
    event.recipes.neepmeat.heating({
        "input": {
            "resource": recipe.input[0],
            "amount": recipe.input[1] * 81
        },
        "output": {
            "resource": recipe.output[0],
            "amount": recipe.output[1] * 81
        },
        "processtime": Math.floor(recipe.time)
    });
}

const heating_recipes = [
    {
        input: ["minecraft:water",100],
        output: ["modern_industrialization:steam",2400],
        time: 4,
    },
    {
        input: ["modern_industrialization:high_pressure_water",100],
        output: ["modern_industrialization:high_pressure_steam",2400],
        time: 3,
    },
    {
        input: ["modern_industrialization:heavy_water",100],
        output: ["modern_industrialization:heavy_water_steam",2400],
        time: 2,
    },
    {
        input: ["modern_industrialization:high_pressure_heavy_water",100],
        output: ["modern_industrialization:high_pressure_heavy_water_steam",2400],
        time: 1,
    },

]


ServerEvents.recipes(event => {
    heating_recipes.forEach(recipe => { heating(event,recipe) });
})