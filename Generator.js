/**
 * Created by common on 2017/6/6.
 */
var fibonacci = {
  [Symbol.iterator]: function *() {
    var pre = 0, cur = 1;
    for (; ;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (var n of fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}