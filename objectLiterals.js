/**
 * Created by common on 2017/6/6.
 */
let handler = function () {
  console.log("handler");
};
var obj = {
  handler,
  __proto__: {
    toString(){
      return '123';
    }
  },
  toString(){
    //super calls
    return "d " + super.toString();
  },
  ["prop_" + (() => 42)()]: 42
};

console.log(obj.toString());