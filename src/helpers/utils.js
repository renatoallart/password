function randomIndex(array) {
    return Math.floor(Math.random() * array.length)
}


export function handleLengthLoop(array, length) {
    let random = ''
    for (let index = 0; index < length; index++) {
        random += array[randomIndex(array)]
    }
    return random
}