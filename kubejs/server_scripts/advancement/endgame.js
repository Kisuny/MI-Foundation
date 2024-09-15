//priority: 500

function advRound(number, digits) {
    let multiplier = digits ? 10 ** digits : 100
    return Math.round(number * multiplier) / multiplier
};

PlayerEvents.advancement(event => {
    if (event.advancement.toString() == "kubejs:endgame") {
        let play_time = event.player.stats.getValue(Stats.PLAY_TIME)
        let second = 20
        let minute = 1200
        let hour = 72000
        let day = 1728000
        let text = ''
        let player_name = event.player.getName().getString()

        if (play_time >= day) { play_time = advRound(play_time / day), text = "endgame.mif.timeplay.days" }
        else if (play_time >= hour) { play_time = advRound(play_time / hour), text = "endgame.mif.timeplay.hours" }
        else if (play_time >= minute) { play_time = advRound(play_time / minute), text = "endgame.mif.timeplay.minutes" }
        else if (play_time >= second) { play_time = advRound(play_time / second), text = "endgame.mif.timeplay.seconds" }

        event.server.tell(
            Text.of(
                [Text.darkPurple('[MI:Foundation] '),
                Text.gold(Text.translate(`endgame.mif.timeplay.part1`)),
                Text.gold(`«${player_name}» `),
                Text.gold(Text.translate(`endgame.mif.timeplay.part2`))
                ])
        );
        event.server.runCommandSilent(`/lp user ${player_name} group add end_game`)
        if (play_time <= 43206000) {
            event.server.tell(Text.gold([
                Text.gold(Text.translate(`endgame.mif.timeplay.part3`)),
                play_time, Text.translate(text),
                Text.translate("endgame.mif.timeplay.part4"),
            ]));
        }
    }
});
