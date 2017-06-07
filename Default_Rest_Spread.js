/**
 * Created by common on 2017/6/6.
 */
function f(x, y = 12) {
  return x + y;
}
console.log(f(3) == 15);

function f(x, ...y) {
  //y is an Array
  console.log(y[0]);
  return x * y.length;
}
console.log(f(3, 'hello', true) === 6);

function f(x, y, z) {
  return x + y + z;
}

console.log(f(...[1, 2, 3]) === 6);