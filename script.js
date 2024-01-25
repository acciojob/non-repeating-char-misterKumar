function firstNonRepeatedChar(str) {
    if (str.length === 0) {
        return null;
    }

    const charCountMap = new Map();

    for (let char of str.toLowerCase()) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for (let char of str.toLowerCase()) {
        if (charCountMap.get(char) === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

result===null? alert("null"):alert(result)
// if (result !== "null") {
//     alert(result);
// } else {
//     alert(null);
// }