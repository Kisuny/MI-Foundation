
//priority: 0

ServerEvents.recipes(event => {
    event.remove({ mod: 'geocluster', not: { id: ('geocluster:prospectors_pick') } });
});
