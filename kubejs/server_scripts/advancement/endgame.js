//priority: 500

PlayerEvents.advancement(event => {
    if (event.advancement.toString() == "kubejs:endgame") {
        let player_name = event.player.getName().getString()

        event.server.tell(
            Text.of(
                [Text.darkPurple('[MI:Foundation] '),
                Text.translate(`endgame.mif.timeplay.part1`).gold(),
                Text.of(`«${player_name}» `).gold(),
                Text.translate(`endgame.mif.timeplay.part2`).gold()
                ])
        );
    }
});
