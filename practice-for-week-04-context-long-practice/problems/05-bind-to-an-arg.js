function bindToAnArg(func, arg) {
  // Your
  return  function (){
    return func(org)
  }
}
function iSpy(thing) {
  return "I spy a " + thing;
}
// or
// function bindToAnArg(func, arg) {
//   //!!START
//   return func.bind(null, arg);
//   //!!END
// }
let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());        // => I spy a tree
console.log(spyTree("car"));   // => I spy a tree

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());         // => I spy a car
console.log(spyCar("potato")); // => I spy a car
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
