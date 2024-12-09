const customeLiquidDippingCraft = (event, args) => {
    event.custom({
      "type": args.type,
      "ingredient": args.input,
      "result": args.output
    });
  };

ServerEvents.recipes(event => {

    customeLiquidDippingCraft(event, {
        type: "spectrum:midnight_solution_converting", 
        input: {"item":"minecraft:feather"}, 
        output: { "item": "kubejs:midnight_feather", "count": 1}
    })
    
})