 callOnTarget = (func, obj1, obj2) => {
  // Your code here
  return func.call(obj1, obj2)

}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));
// "I'm Breakfast. Nice to meet you, Jerry"

console.log(callOnTarget(greet, mouse, cat));
// "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};
//or
// function callOnTarget(func, obj1, obj2) {
//   //!!START
//   let boundFunc = func.bind(obj1);
//   return boundFunc(obj2);
//   // other options:
//   // return func.call(obj1, obj2);
//   // return func.apply(obj1, [obj2]);
//   //!!END
// }
console.log(callOnTarget(dog.chase, cat, dog));
// "Woof, my name is Breakfast and I'm chasing Noodles"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
