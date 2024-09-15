// // Interval for each cleanup and time until the cleaning occurs
// let Interval = 60;
// let cleaningTime = 1200 * Interval;

// // Cleaning timer setter 
// let timerCheck = 1200;

// // Notification times, times the user want to get the message how many minutes are left until Clearlag clears
// const notifications = [10, 1];
// // Second notification times, times showing user how many seconds are left until item clear
// const second_notifications = [3, 2, 1];

// let round = 0;
// let lastClearLagResult = Utils.newList();
// let lastTotalClearLagResult = Utils.newCountingMap();

// // List of item IDs that shouldn't be deleted, regex supported
// // for now not worked
// let blacklist = [];

// let blacklistTester;
// if (blacklist) {
//     blacklistTester = new RegExp(blacklist.join('|'));
// }
// else {
//     blacklistTester = new RegExp('');
// }


// let timeSchedule = (server) => {
//     server.tell(Text.gray(`Через ${Interval} минут(ы) запустится очистка предметов!`));
    
//     server.scheduleInTicks(timerCheck, callback => {
//         // Calculate the currenttime with the delay for every schedule multiplied with the current count of repeated rounds 
//         let currentTime = timerCheck * ++round;

//         // The time left until cleaning of items
//         let minutesLeft = (cleaningTime - currentTime) / 1200

//         // Delete every entity of type item on the server (Except Blacklist) and reschedule for the next item deletion
//         if (cleaningTime <= currentTime) {
//             clearLag(server, true);
//         }

//         // Send notifications for every time given in the notifications array
//         if (notifications.includes(minutesLeft))
//             server.tell(Text.gray(`Удаление предметов через ${minutesLeft} минут(ы)!`));

//         if (minutesLeft === 1) {
//             second_notifications.forEach(seconds => {
//                 let delayTicks = (minutesLeft * 60 - seconds) * 20; // Converts seconds to ticks
//                 server.scheduleInTicks(delayTicks, secondsCallback => {
//                     server.tell(Text.gray(`Удаление предметов через ${seconds}`));
//                 })
//             })
//         }
//         callback.reschedule();
//     })
// }

// // Nothing to do with the timer

// ServerEvents.loaded(event => {
//     timeSchedule(event.server);
// });

// let clearLag = (server, reset) => {
//     let itemList = server.getEntities().filter(entity => entity.type.equals('minecraft:item'));
//     // let shootingStars = server.getEntities().filter(entity => entity.type.equals('spectrum:shooting_star'));

//     let lastResult = Utils.newCountingMap();
//     // For notification propose: Get how many entities of type item are on the server
//     let nextItems = server.getEntities().filter(entity => entity.type.equals('minecraft:item')).length;

    

//     lastClearLagResult.clear();
//     lastTotalClearLagResult.clear();

//     itemList.forEach(items => {
//         var key = items.name;
//         lastResult.add(key, items.item.count);
//         lastTotalClearLagResult.add(key, items.item.count);
//         items.kill();
//     });
    
//     // shootingStars.forEach(star =>{
//     //     star.kill();
//     // });

//     lastClearLagResult.addAll(lastResult.entries);
//     lastClearLagResult.sort(null);

//     server.tell(Text.gray(`Удалено ${lastTotalClearLagResult.totalCount} предметов.`));
//     server.tell(Text.gray(`Очистка запустится через ${Interval} минут(ы)`));
//     if (reset) round = 0;
//     return true 
// } 

// ServerEvents.commandRegistry(event => {
//     const {commands: Commands, arguments: Arguments} = event;
//     event.register(
//         Commands.literal('clearlag')
//         .then(Commands.literal('clear').executes(ctx => {
//             let server = ctx.source.getServer();
//             clearLag(server, false);
//             return 1;
//         }))
//         .then(Commands.literal('result').executes(ctx => {
//             let server = ctx.source.getServer();
//             server.tell([Text.gold('[Мусорщик]'), ' Отчёт:']);
//             lastClearLagResult.forEach(results => {
//                 server.tell(['[ ', results.key, ': ', results.value, ' ]'])      
//             });
//             return 1;
//         }))
//     )
// });