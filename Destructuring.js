/**
 * Created by common on 2017/6/6.
 */

//list matching
var [a, , b] = [1, 2, 3];
console.log(a, b);

// object matching
var {a: x = 2, b: y} = {b: y = 3};
console.log(x, y);

//destructing arguments
function g({name: x}) {
  console.log(x);
}
g({name: 5});

//array Fail-soft destructuring
var [a] = [];
console.log(a === undefined);

//object Fail-soft destructuring
var {c, d} = {};
console.log(c, d);

//Fail-soft destructing with defaults
var [a = 1] = [];
console.log(a === 1);

//Destructing+default arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}

console.log(r({x: 1, y: 2}) === 23);