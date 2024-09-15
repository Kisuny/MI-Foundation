ServerEvents.tags('item', event => {

const cauldron_crafts = ['bewitchment:grim_elixir', 'bewitchment:cleansing_balm', 'bewitchment:earth_ichor', 'bewitchment:heaven_extract', 'bewitchment:fiery_serum', 'bewitchment:aqua_cerate', 'bwplus:mutandis_brew', 'bwplus:moonlight_infusion', 'bwplus:mutandis']
const brooms = ['bwplus:yew_broom', 'bewitchment:juniper_broom', 'bewitchment:cypress_broom', 'bewitchment:elder_broom', 'bewitchment:dragons_blood_broom']
const saplings = ['bewitchment:juniper_sapling', 'bewitchment:cypress_sapling', 'bewitchment:elder_sapling', 'bewitchment:dragons_blood_sapling', 'bwplus:yew_sapling']
const poppets = ['bewitchment:fatigue_poppet', 'bewitchment:protection_poppet', 'bewitchment:death_protection_poppet', 'bewitchment:voodoo_poppet', 'bewitchment:voodoo_protection_poppet', 'bewitchment:mending_poppet', 'bewitchment:curse_poppet', 'bewitchment:vampiric_poppet', 'bewitchment:judgment_poppet']
const sigils = ['bewitchment:mending_sigil', 'bewitchment:cleansing_sigil', 'bewitchment:judgment_sigil', 'bewitchment:decay_sigil', 'bewitchment:shrieking_sigil', 'bewitchment:sentinel_sigil', 'bewitchment:slippery_sigil', 'bewitchment:shadows_sigil', 'bewitchment:extending_sigil', 'bewitchment:smelly_sigil', 'bewitchment:ruin_sigil', 'bewitchment:heavy_sigil']


cauldron_crafts.forEach(item => event.add('mif:cauldron_crafts', item));
brooms.forEach(item => event.add('mif:brooms', item));
saplings.forEach(item => event.add('mif:saplings', item));
poppets.forEach(item => event.add('mif:poppets', item));
sigils.forEach(item => event.add('mif:sigils', item));

});

ServerEvents.tags('block', event => {
    const allowedSmallFlowers = ['minecraft:oxeye_daisy', 'minecraft:cornflower', 'minecraft:lily_of_the_valley', 'minecraft:wither_rose', 'minecraft:pink_tulip', 'minecraft:white_tulip', 'minecraft:orange_tulip', 'minecraft:red_tulip', 'minecraft:azure_bluet', 'minecraft:allium', 'minecraft:blue_orchid', 'minecraft:dandelion', 'minecraft:poppy'] 
    const allowedTallFlowers = ['minecraft:peony', 'minecraft:rose_bush', 'minecraft:lilac', 'minecraft:sunflower', 'farmersdelight:wild_rice']

    event.remove('bwplus:mutandis', '#minecraft:small_flowers')
    event.remove('bwplus:mutandis', '#minecraft:tall_flowers')

    allowedSmallFlowers.forEach(flower => event.add('bwplus:mutandis', flower))
    allowedTallFlowers.forEach(flower => event.add('bwplus:mutandis', flower))



});