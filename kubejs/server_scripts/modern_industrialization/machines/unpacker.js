// priority: 0

let machines_to_unpack = [
    'modern_industrialization:electric_packer',
    'modern_industrialization:industrial_crystallarieum',
]
let items_to_return = [
    // priority to return from high to low
    'modern_industrialization:basic_machine_hull',

    'spectrum:crystal_apothecary',

    'modern_industrialization:robot_arm',

    'modern_industrialization:analog_circuit',
    'kubejs:chromatically_stable_circuit',
]
let items_to_return_limit = 2
let each_ingreadient_return_limit = 2
let process_recipes_from = [
    // priority to return from high to low
    "minecraft",
    "modern_industrialization",
    "spectrum",
    "neepmeat",
]

ServerEvents.recipes(
    event => {
        machines_to_unpack.forEach(
            item => {
                let recipes = []
                event.forEachRecipe(
                    {output:item},
                    recipe => {
                        recipes.push(recipe)                   
                    }
                )
                event.addedRecipes.forEach(
                    recipe => {
                        if (Item.of(recipe.getOriginalRecipeResult()).id !== item) return
                        recipes.push(recipe)                   
                    }
                )
                let expected_recipe = null
                for (let recipe_from of process_recipes_from) {
                    for (let recipe of recipes) {
                        if (`${recipe}`.includes(recipe_from)) {
                            expected_recipe = recipe
                            break
                        }
                    }
                    if (expected_recipe) break
                }
                if (!expected_recipe) return

                let ingredients = expected_recipe.getOriginalRecipeIngredients()
                let to_return = []
                let to_return_mults = []
                for (let item_to_return of items_to_return) {
                    let mult = 0
                    for (let ingredient of ingredients) {
                        ingredient = Item.of(ingredient).id
                        if (item_to_return == ingredient) {
                            if (!to_return.includes(item_to_return)) {
                                to_return.push(item_to_return)
                            }
                            mult++
                        }
                    }
                    if (mult > 0) to_return_mults.push(mult)   
                    if (to_return.length == items_to_return_limit) break;                
                }
                if (to_return.length !== 0) {
                    let unpack_ev = event.recipes.modern_industrialization.unpacker(8, 100)
                    unpack_ev.itemIn(item)
                    for (let i = 0; i < to_return.length; i++){
                        unpack_ev.itemOut(`${to_return_mults[i]}x ${to_return[i]}`)
                    }            
                }
                    
            }
        )

    }
)