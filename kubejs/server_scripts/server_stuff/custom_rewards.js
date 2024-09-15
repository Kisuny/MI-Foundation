FTBQuestsEvents.customReward('1D783B643578FC29', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Поздравляем!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"Вы открыли ","bold":true},{"text":"новые знания","bold":true,"color":"#9A52FF"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound spectrum:spectrum.ui.new_revelation ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

FTBQuestsEvents.customReward('2646F4EF698E6BBF', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Поздравляем!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"Вы открыли ","bold":true},{"text":"Глубокие земли","bold":true,"color":"#9A52FF"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound spectrum:spectrum.ui.new_revelation ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

FTBQuestsEvents.customReward('4BCBC7A03F5B07F1', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Поздравляем!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"Вы прошли ","bold":true},{"text":"Spectrum","bold":true,"color":"#9A52FF"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound spectrum:spectrum.ui.new_revelation ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

FTBQuestsEvents.customReward('14139766DD276076', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Поздравляем!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"Вам доступна ловля ","bold":true},{"text":"морских существ","bold":true,"color":"#9A52FF"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound spectrum:spectrum.ui.new_revelation ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:dolphin ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});
