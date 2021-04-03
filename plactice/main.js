const math = require('./math');
const Person = require('./classes/person');

console.log(math.add(1,2));
console.log(math.sub(1,2));

const person1 = new Person('野口隼輔');
console.log(person1);
person1.introduceMySelf();
