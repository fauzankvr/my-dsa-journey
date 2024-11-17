class Stack {
  constructor() {
    this.item = [];
    this.count = 0;
  }
  push(value) {
    this.item.push(value);
  }
  pop() {
    return this.item.pop();
  }
  isEmpty() {
    return this.item.length == 0;
  }
}
function reverceStr(str) {
  let newstack = new Stack();
  for (let char of str) {
    newstack.push(char);
  }
  let reverece = "";
  while (!newstack.isEmpty()) {
    reverece += newstack.pop();
  }
  return reverece;
}

let res = reverceStr("heill");
console.log(res);
