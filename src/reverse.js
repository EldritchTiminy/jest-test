function reverse (str) {
let split = str.split("");
let reverse = split.reverse();
return reverse.join("");
};

module.exports = reverse;