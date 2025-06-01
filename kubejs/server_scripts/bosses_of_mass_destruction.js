ServerEvents.recipes(event =>{

    customeFusionShrineCraft(event, {
        startEffect: 'weather_thunder_short',
        duringEffect: [
            "visual_explosions_on_shrine",
            "nothing",
            "visual_explosions_on_shrine"
          ],
        finishEffect: 'lightning_on_shrine',
        description: 'Revitalizing the Glove',
        time: 2200, experience: 15.0,
        fluid: "neepmeat:blood",
        ingredients: [
            { "item": "mythicmetals:celestium_ingot", "count": 2 },
            { "item": "minecraft:egg", "count": 4 },
            { "item": "spectrum:vegetal", "count": 8 },
            { "item": "neepmeat:brain_rough", "count": 1 },
            { "item": "artifacts:fire_gauntlet", "count": 1 },
        ],
        result: {
            "item": "artifacts:fire_gauntlet",
            "nbt": {"display":{"Name":'{"text":"The living Fire Gauntlet","color":"dark_red"}',"Lore":['{"text":"from this gauntlet tends an evil aura"}']}, "isAlive":1}
        },
        advancement: "spectrum:build_fusion_shrine"
    });

    event.remove({output:'bosses_of_mass_destruction:void_lily'})
    event.recipes.spectrum.spirit_instiller({
        "time": 400,
        "experience": 5.0,
        "secret": false,
        "ingredient1": {
            "item": "spectrum:shimmerstone_gem",
            "count": 2
        },
        "ingredient2": {
            "item": "minecraft:amethyst_shard",
            "count": 2
        },
        "center_ingredient": {
            "item": "minecraft:lily_of_the_valley",
        },
        "result": {
            "item": "bosses_of_mass_destruction:void_lily"
        },
        "required_advancement": "spectrum:unlocks/blocks/spirit_instiller"
    });

    event.remove({output:'bosses_of_mass_destruction:brimstone_nectar'})
    event.recipes.spectrum.spirit_instiller({
        "time": 400,
        "experience": 5.0,
        "ingredient1": {
            "item": "spectrum:moonstruck_nectar"
        },
        "ingredient2": {
            "item": "minecraft:dragon_breath"
        },
        "center_ingredient": {
            "item": "minecraft:ghast_tear",
        },
        "result": {
            "item": "bosses_of_mass_destruction:brimstone_nectar"
        },
        "required_advancement": "spectrum:midgame/harvest_moonstruck_nectar"
    });



});

EntityEvents.spawned('minecraft:item', event =>{
        
    let dimension = event.entity.getLevel().dimension 
    let item = event.entity.item
    
    if(item != 'artifacts:fire_gauntlet'){
        return
    } else if(dimension != "minecraft:the_nether" ){
        return 
    } else if(event.entity.nbt.Item.tag.isAlive){
        let x = event.entity.x
        let y = event.entity.y
        let z = event.entity.z
        
        console.log(x, y, z)
        event.server.tell(Text.darkRed(['The power of the Depths of nether gave the gauntlet far more power than you thought!']))
        event.entity.lavaHurt()
        event.server.runCommandSilent(`execute in ${dimension} run summon bosses_of_mass_destruction:gauntlet ${x} ${y} ${z}`)
    }
});

