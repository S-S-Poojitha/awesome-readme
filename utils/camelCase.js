function camelCase(str) {
    const words = str.split(' ');
    let newWords = [];
    
    for (const word of words) {
        const chars = word.split('');
        const firstChar = chars[0].toUpperCase();
        newWords.push(firstChar + word.slice(1, chars.length));
    }

    return newWords.join(' ');
}

module.exports = camelCase;