ServerEvents.tags('item', event => {

const t2_forgery = ['alloy_forgery:prismarine_bricks_forge_controller', 'alloy_forgery:polished_blackstone_forge_controller', 'alloy_forgery:deepslate_bricks_forge_controller', 'alloy_forgery:polished_basalt_forge_controller', 'alloy_forgery:polished_calcite_forge_controller', 'alloy_forgery:pyrite_forge_controller']
const t3_forgery = ['alloy_forgery:end_stone_bricks_forge_controller', 'alloy_forgery:adamantite_block_forge_controller', 'alloy_forgery:polished_blackslag_forge_controller', 'alloy_forgery:polished_shale_clay_forge_controller']
const alloy_forgery_fuels = ["minecraft:lava_bucket","minecraft:coal","minecraft:charcoal","minecraft:blaze_rod","minecraft:coal_block","gofish:oakfish","gofish:charfish","modern_industrialization:lignite_coal_block","modern_industrialization:coal_crushed_dust","modern_industrialization:coal_dust","modern_industrialization:coke","modern_industrialization:carbon_dust","modern_industrialization:coke_dust","modern_industrialization:lignite_coal_crushed_dust","modern_industrialization:lignite_coal","modern_industrialization:lignite_coal_dust","spectrum:pure_coal"]

t2_forgery.forEach(item => event.add('mif:t2_forgery', item));
t3_forgery.forEach(item => event.add('mif:t3_forgery', item));
alloy_forgery_fuels.forEach(item => event.add('mif:alloy_forgery_fuels', item));

});
