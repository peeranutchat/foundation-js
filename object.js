// const test = {
//   name: "Ann",
//   age: 27,
// };

// console.log(test);
// console.log(test.name);

// const test2 = {
//   name1: "Ann",
//   age2: 27,
//   pet: {
//     kind: "Dog",
//     age: 3,
//   },
// };

// const keyName = "name1";

// // console.log(test2.pet);
// // console.log("Name", test2.name1); // dot notation
// // console.log("Name", test2["name1"]); // bracket notation
// // console.log("Name", test2[keyName]);

// const newTest = test2;
// newTest.name1 = "Toon";
// newTest.age2 = 28;
// newTest.pet.kind = "Cat";

// console.log("Name", newTest.pet.kind);

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((data, index) => {
  console.log(
    "person",
    index + 1,
    "\n",
    "name",
    data.name,
    "\n",
    "age",
    data.age,
    "\n",
    "job",
    data.job,
    "\n",
    "----------------"
  );
});

data.forEach((data, index) => {
  console.log(
    `person ${index + 1} \nname ${data.name} \nage ${data.age} \njob ${
      data.job
    } \n------------`
  );
});

//* case 1
data.forEach((data, index) => {
  console.log("person", index + 1);
  console.log("name", data.name);
  console.log("age", data.age);
  console.log("job", data.job);
  console.log("-------------");
});
