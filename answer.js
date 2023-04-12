// Initial String Array & K
let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
let k = 2;


// Function which returns a first longest consecute string
// Prams
// String Array, Consecutive Number

function longest_consec(stararr, k) {
    if (stararr === 0 || k > stararr || k <= 0) return "";
    let longest_str_arr = [];
    for (let i = 0; i < stararr.length - k + 1; i++) {
        longest_str_arr[i] = strarr.slice(i, i + k).join("");
    }
    return longest_str_arr.reduce((a, b) => a.length >= b.length ? a : b);
}

console.log(longest_consec(strarr, k));