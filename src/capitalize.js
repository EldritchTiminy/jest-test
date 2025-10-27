function capitalize (str) {
  cap = str[0].toUpperCase();
  newStr = cap + str.substring(1);
  return newStr;
};

module.exports = capitalize;