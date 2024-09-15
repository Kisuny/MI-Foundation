ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.chemical_reactor(128, 300)
        .itemIn('2x ae2:charged_certus_quartz_crystal')
        .itemIn('modern_industrialization:beryllium_dust')
        .fluidIn("neepmeat:work_fluid", 100)
        .fluidIn("modern_industrialization:purified_void", 50)
        .fluidOut("neepmeat:charged_work_fluid", 100)
        .biome('ad_astra:orbit')

    const raw_to_pure = [
        // Vanilla
        {raw:'modern_industrialization:coal_crushed_dust' , pure: 'spectrum:pure_coal', dust:'modern_industrialization:coal_dust'},
        {raw:'minecraft:raw_iron' , pure: 'spectrum:pure_iron', dust:'modern_industrialization:iron_dust'},
        {raw:'minecraft:raw_gold' , pure: 'spectrum:pure_gold', dust:'modern_industrialization:gold_dust'},
        {raw:'modern_industrialization:diamond_crushed_dust' , pure: 'spectrum:pure_diamond', dust:'modern_industrialization:diamond_dust'},
        {raw:'modern_industrialization:emerald_crushed_dust' , pure: 'spectrum:pure_emerald', dust:'modern_industrialization:emerald_dust'},
        {raw:'modern_industrialization:redstone_crushed_dust' , pure: 'spectrum:pure_redstone', dust:'minecraft:redstone'},
        {raw:'modern_industrialization:lapis_crushed_dust' , pure: 'spectrum:pure_lapis', dust:'modern_industrialization:lapis_dust'},
        {raw:'minecraft:raw_copper' , pure: 'spectrum:pure_copper', dust:'modern_industrialization:copper_dust'},
        {raw:'modern_industrialization:quartz_crushed_dust' , pure: 'spectrum:pure_quartz', dust:'modern_industrialization:quartz_dust'},
        // Ad Astra
        {raw:'ad_astra:raw_desh' , pure: 'kubejs:pure_desh', dust:'modern_industrialization:desh_dust'},
        {raw:'ad_astra:raw_ostrum', pure: 'kubejs:pure_ostrum', dust:'modern_industrialization:ostrum_dust'},
        {raw:'ad_astra:raw_calorite', pure: 'kubejs:pure_calorite', dust:'modern_industrialization:calorite_dust'},
        // Modern Industrialization
        {raw:'modern_industrialization:raw_antimony' , pure: 'kubejs:pure_antimony', dust:'modern_industrialization:antimony_dust'},
        {raw:'modern_industrialization:raw_tin' , pure: 'kubejs:pure_tin', dust:'modern_industrialization:tin_dust'},
        {raw:'modern_industrialization:raw_tungsten', pure: 'kubejs:pure_tungsten', dust:'modern_industrialization:tungsten_dust'},
        {raw:'modern_industrialization:raw_silver', pure: 'kubejs:pure_silver', dust:'modern_industrialization:silver_dust'},
        {raw:'modern_industrialization:raw_uranium', pure: 'kubejs:pure_uranium', dust:'modern_industrialization:uranium_dust'},
        {raw:'modern_industrialization:raw_iridium', pure: 'kubejs:pure_iridium', dust:'modern_industrialization:iridium_dust'},
        {raw:'modern_industrialization:raw_titanium', pure: 'kubejs:pure_titanium', dust:'modern_industrialization:titanium_dust'},
        {raw:'modern_industrialization:raw_lead', pure: 'kubejs:pure_lead', dust:'modern_industrialization:lead_dust'},
        {raw:'modern_industrialization:raw_nickel', pure: 'kubejs:pure_nickel', dust:'modern_industrialization:nickel_dust'},
        {raw:'modern_industrialization:raw_platinum', pure: 'kubejs:pure_platinum', dust:'modern_industrialization:platinum_dust'},
        {raw:'modern_industrialization:chromium_crushed_dust' , pure: 'kubejs:pure_chromium', dust:'modern_industrialization:chromium_dust'},
    ]
    raw_to_pure.forEach(element => {
        event.recipes.modern_industrialization.chemical_reactor(32, 200)
            .fluidIn("neepmeat:eldritch_enzymes", 100)
            .fluidIn('modern_industrialization:purified_void', 20)
            .itemIn(element.raw)
            .itemOut(element.pure)
            .itemOut(element.pure,0.5)
            .itemOut(element.dust)
            .biome('ad_astra:orbit')
    });
})
