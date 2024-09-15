priority: 41

// from kube js discord
// https://discord.com/channels/303440391124942858/1131980718763933778/1131993941340864622
const $SampleBlock = Java.loadClass('dev.sterner.geocluster.common.blocks.SampleBlock');
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties');
const $Geocluster = Java.loadClass('dev.sterner.geocluster.Geocluster');

let desh_sample;
let ostrum_sample;
let calorite_sample;
let ice_sample;
let cheese_sample;
let gadolinite_sample;

StartupEvents.registry('block', event => {
    desh_sample = event.createCustom('desh_ore_sample', () => new $SampleBlock());
    ostrum_sample = event.createCustom('ostrum_ore_sample', () => new $SampleBlock());
    calorite_sample = event.createCustom('calorite_ore_sample', () => new $SampleBlock());
    ice_sample = event.createCustom('ice_ore_sample', () => new $SampleBlock());
    cheese_sample = event.createCustom('cheese_ore_sample', () => new $SampleBlock());
    gadolinite_sample = event.createCustom('gadolinite_ore_sample', () => new $SampleBlock());
});

StartupEvents.registry('item', event => {
    event.createCustom('desh_ore_sample', () => new $BlockItem(desh_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
    event.createCustom('ostrum_ore_sample', () => new $BlockItem(ostrum_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
    event.createCustom('calorite_ore_sample', () => new $BlockItem(calorite_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
    event.createCustom('ice_ore_sample', () => new $BlockItem(ice_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
    event.createCustom('cheese_ore_sample', () => new $BlockItem(cheese_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
    event.createCustom('gadolinite_ore_sample', () => new $BlockItem(gadolinite_sample.get(), new $IProperties().tab($Geocluster.GROUP)));
});
