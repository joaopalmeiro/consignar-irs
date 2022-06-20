// Source: https://bobbyhadz.com/blog/javascript-split-string-substrings-n-characters
export function chunkify(str, n, sep = ' ') {
    const re = new RegExp(`.{1,${n}}`, 'g');

    const chunks = str.match(re) || [];

    return chunks.join(sep);
}
