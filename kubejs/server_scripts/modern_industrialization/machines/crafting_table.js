
ServerEvents.recipes(event => {
    event.shaped('modern_industrialization:adamantite_casing', [
        'PPP',
        'PGP',
        'PPP'
    ], {
            P: 'modern_industrialization:adamantite_plate',
            G: 'modern_industrialization:adamantite_gear',
        }
    );
    event.shaped('modern_industrialization:adamantite_machine_casing_pipe', [
        'P P',
        'PCP',
        'P P'
    ], {
            P: 'modern_industrialization:adamantite_curved_plate',
            C: 'modern_industrialization:adamantite_casing',
        }
    );
})
