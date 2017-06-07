/**
 * Created by common on 2017/6/6.
 */

// lexical this
var bob = {
  _name: "Bob",
  _friends: ['zyj', 7],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + 'knows' + f));
  }
};

bob.printFriends();

// lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }
    return numbers;
  };
  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21));