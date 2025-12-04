console.clear();

// --------------------------------------------
// 1. Creating an Object
// --------------------------------------------
const obj1 = { name: "Sparky", age: 21 };
console.log("Object 1:", obj1);

// --------------------------------------------
// 2. Add new property
// --------------------------------------------
const obj2 = { a: 1 };
obj2.b = 2;
console.log("Add property:", obj2);

// --------------------------------------------
// 3. Update property
// --------------------------------------------
const obj3 = { a: 10 };
obj3.a = 20;
console.log("Update property:", obj3);

// --------------------------------------------
// 4. Delete property
// --------------------------------------------
const obj4 = { x: 100, y: 200 };
delete obj4.y;
console.log("Delete property:", obj4);

// --------------------------------------------
// 5. Object.keys()
// --------------------------------------------
const obj5 = { a: 1, b: 2, c: 3 };
console.log("Keys:", Object.keys(obj5));

// --------------------------------------------
// 6. Object.values()
// --------------------------------------------
console.log("Values:", Object.values(obj5));

// --------------------------------------------
// 7. Object.entries()
// --------------------------------------------
console.log("Entries:", Object.entries(obj5));

// --------------------------------------------
// 8. Object.assign() – merge/clone
// --------------------------------------------
const obj6 = { a: 1 };
const obj7 = { b: 2 };
const merged = Object.assign({ nm: 3 }, obj6, obj7);
console.log("Merged:", merged);

// --------------------------------------------
// 9. Spread operator for clone
// --------------------------------------------
const obj8 = { a: 1, b: 2 };
const clone = { ...obj8 };
console.log("Spread clone:", clone);

// --------------------------------------------
// 10. Object.freeze()
// --------------------------------------------
const obj9 = { a: 1, b: 2 };
Object.freeze(obj9);
obj9.b = 999;
obj9.a = 0; // no change
delete obj9.a; // not allowed
console.log("Freeze:", obj9);

// --------------------------------------------
// 11. Object.seal()
// --------------------------------------------
const obj10 = { a: 1 };
Object.seal(obj10);
obj10.a = 777; // allowed
delete obj10.a; // not allowed
console.log("Seal:", obj10);

// --------------------------------------------
// 12. Object.create() – prototype
// --------------------------------------------
const proto = {
  greet() {
    console.log("Hello!");
  },
  hi() {
    console.log("hi");
  },
  a: 10,
};
const obj11 = Object.create(proto);
obj11.greet();
obj11.hi();
console.log("Object.create:", obj11.a);

const spcial = {
  a() {
    console.log("This is a special function inside an object.");
  },
};

spcial.a();

// --------------------------------------------
// 13. Object.fromEntries()
// --------------------------------------------
const arrEntries = [
  ["name", "Sparky"],
  ["age", 20],
];
const obj12 = Object.fromEntries(arrEntries);
console.log("fromEntries:", obj12);

// --------------------------------------------
// 14. Define property
// --------------------------------------------
const obj13 = {};
Object.defineProperty(obj13, "name", {
  value: "Sparky",
  writable: false,
  enumerable: true,
});
console.log("defineProperty:", obj13);

// --------------------------------------------
// 15. Define multiple properties
// --------------------------------------------
const obj14 = {};
Object.defineProperties(obj14, {
  a: { value: 1 },
  b: { value: 2 },
});
console.log("defineProperties:", obj14);

// --------------------------------------------
// 16. Check property existence
// --------------------------------------------
const obj15 = { a: 1 };
console.log("hasOwnProperty:", obj15.hasOwnProperty("a"));
console.log("hasOwn():", Object.hasOwn(obj15, "a"));

// --------------------------------------------
// 17. Loop over object
// --------------------------------------------
const obj16 = { a: 10, b: 20 };
for (let key in obj16) {
  console.log("Loop:", key, obj16[key]);
}

// --------------------------------------------
// 18. Convert object to JSON
// --------------------------------------------
const obj17 = { a: 1, b: 2 };
console.log("JSON:", JSON.stringify(obj17));

// --------------------------------------------
// 19. Getters & Setters
// --------------------------------------------
const obj18 = {
  _name: "Sparky",
  get name() {
    return this._name;
  },
  set name(v) {
    this._name = v.toUpperCase();
  },
};
obj18.name = "thor";
console.log("Getter/Setter:", obj18.name);

// --------------------------------------------
// 20. Object.is() – Value comparison
// --------------------------------------------
console.log("Object.is(10, 10):", Object.is(10, 2345));
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// --------------------------------------------
// 21. Object.entries to loop
// --------------------------------------------
const obj19 = { x: 1, y: 2 };
Object.entries(obj19).forEach(([k, v]) => {
  console.log("Entry Loop:", k, v);
});

// --------------------------------------------
// 22. Object.getPrototypeOf()
// --------------------------------------------
const obj20 = {};
console.log("getPrototypeOf:", Object.getPrototypeOf(obj20));

// --------------------------------------------
// 23. Object.setPrototypeOf()
// --------------------------------------------
const obj21 = {};
const proto2 = { z: 999 };
Object.setPrototypeOf(obj21, proto2);
console.log("setPrototypeOf:", obj21.z);
