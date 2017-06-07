/**
 * Created by common on 2017/6/6.
 */
function f() {
  {
    let x;
    console.log(x);
    {
      // const x = "sneaky";
      x = "foo";
    }
    x = 'bar';
    // let x = "inner";
    console.log(x);
  }
}
f();