// GOOD
function foo1() {
  return {
    bar: "hello"
  }
}

// BAD
function foo2() {
  return
  {
    bar: "hello"
  }
}

console.log(foo1());
console.log(foo2());