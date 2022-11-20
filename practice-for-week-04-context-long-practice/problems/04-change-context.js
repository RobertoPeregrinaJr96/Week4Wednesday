function changeContext(func, obj) {
  // Your code here
let fun = func.bind(obj)
return fun()
}
class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}
or
// function changeContext(func, obj) {
//   //!!START
//   let boundFunc = func.bind(obj);
//   return boundFunc();
//   // other options:
//   // return func.apply(obj);
//   // return func.apply(obj);
//   //!!END
// }

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
