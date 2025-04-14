ServerEvents.recipes(event => {

    event.remove({ output: 
        [
            'tctimod:lost_sack', 
            'tctimod:cursed_sack', 
            'tatimod:ancient_sack', 
            'tatimod:precious_sack'
        ]
    });



    
});