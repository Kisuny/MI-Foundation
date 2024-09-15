BlockEvents.modification(event => {
    event.modify("minecraft:spawner", spawner => {
        spawner.destroySpeed = 100.0;
        spawner.explosionResistance = 1200.0;
      });
  })
