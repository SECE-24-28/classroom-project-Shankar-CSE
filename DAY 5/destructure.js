let arr = [1,2,]
let [a, b] = arr
console.log(a,b);

let obj = {name: 'Alice', age: 30}
let {name, age} = obj
console.log(name, age);

// Nested destructuring
let nestedArr = [1, [2, 3]]
let [x, [y,z]] = nestedArr
console.log(x, y, z);

let nestedObj = {person: {name: 'Bob', age: 25}}
let {person: {name: personName, age: personAge}} = nestedObj
console.log(personName, personAge);

// Default values
let [m = 5, n = 10] = [1]
console.log(m, n);

let {p = 'default', q = 'value'} = {p: 'custom'}
console.log(p, q);

// Rest operator
let [first, ...rest] = [1, 2, 3, 4]
console.log(first, rest);

let {a: firstProp, ...otherProps} = {a: 1, b: 2, c: 3}
console.log(firstProp, otherProps);

// Function parameter destructuring
function greet({name, age}) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet({name: 'Charlie', age: 28});

function sum([x, y]) {
    return x + y;
}
console.log(sum([3, 7]));
