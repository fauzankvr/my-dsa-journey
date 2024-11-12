function replaceCharacter(str, target, replacement) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      result += replacement;
    } else {
      result += str[i]; 
    }
  }
  return result;
}

console.log(replaceCharacter("hello world", "o", "0")); // Output: "hell0 w0rld"
