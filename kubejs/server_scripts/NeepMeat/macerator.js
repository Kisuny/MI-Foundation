ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.macerator(2, 200)
        .itemIn('#c:raw_meat')
        .itemOut('neepmeat:meat_scrap')
    event.recipes.modern_industrialization.macerator(2, 200)
        .itemIn('neepmeat:whisper_wheat')
        .itemOut('neepmeat:whisper_flour')
})
