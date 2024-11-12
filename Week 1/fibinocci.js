// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// let res = fib(6);
// console.log(res);


function fib(n, memo = {}) {
    if (n in memo) return memo[n]; 
    if (n < 2) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); 
    return memo[n];
}

let res = fib(6);
console.log(res);  
