class Stack {
  constructor() {
    this.stack = [];
    this.bracketMap = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  }
  isBalanced(str) {
    for (let char of str) {
      if (char == "(" || char == "{" || char == "[") {
        this.stack.push(char);
      } else if (char == ")" || char == "}" || char == "]") {
        if (!this.stack.length || this.stack.pop() !== this.bracketMap[char]) {
          return false;
        }
      }
    }
    return this.stack.length == 0;
  }
}

let newstack = new Stack();
let res = newstack.isBalanced("((){})");
console.log(res);
