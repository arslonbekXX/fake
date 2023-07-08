// ARRAY
const nums = [3, 5];

// Simple
const first = nums[0];
const second = nums[1];

// With Destructuring
const [first, second] = nums;

// Object
const person = { age: 20, name: "arslonbek", job: "teacher" };

// Simple
const age = person.age;
const name = person.name;
const personJob = person["job"];

// With Destructuring
const { age, name, job: personJob } = person;
