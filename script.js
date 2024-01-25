function firstNonRepeatedChar(str) {
    if (str.length === 0) {
        return "null";
    }
    str = str.toLowerCase();
    let arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i) - 97; // Adjust to 0-based index for lowercase letters
        arr[c]++;
    }
    let res = -1;
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            res = i + 97; // Adjust back to ASCII code for lowercase letters
            flag = false;
            break;
        }
    }
    if (!flag) {
        return String.fromCharCode(res);
    } else {
        return null;
    }
}
const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== "null") {
    alert(result);
} else {
    alert(null);
}