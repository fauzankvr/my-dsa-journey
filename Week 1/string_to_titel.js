// function toTitleCase(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(toTitleCase("hello world"));


function toTitleCase(str) {
    let result = '';
    let newWord = true; 

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i); 

        if (newWord && char !== ' ') {
            result += char.toUpperCase(); 
            newWord = false; 
        } else if (!newWord && char === ' ') {
            result += char; 
            newWord = true; 
        } else {
            result += char.toLowerCase(); 
        }
    }

    return result;
}

console.log(toTitleCase("hello world")); // Output: "Hello World"
