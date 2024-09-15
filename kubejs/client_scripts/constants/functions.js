//priority: 1010

// Capitalizes the first letter of the line and joins remaining string.
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Define a name for the item
function defineItemName(string) {
    let pipeline = string.split('_')
    for (var i = 0; i < pipeline.length; i++) { pipeline[i] = capitalize(pipeline[i]) }
    return string = pipeline.join(' ')
}
