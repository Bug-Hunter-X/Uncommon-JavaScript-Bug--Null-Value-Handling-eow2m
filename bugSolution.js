function foo(a, b) {
  a = a === null ? 0 : a; // Handle null or undefined for 'a'
  b = b === null ? 0 : b; // Handle null or undefined for 'b'
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, null));// Output: 0
console.log(foo(undefined, 10)); // Output: 10