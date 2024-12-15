const arr = [
  { name: "ABC", age: 20 },
  { name: "DEF", age: 20 },
  { name: "GHI", age: 20 },
  { name: "ABC", age: 20 },
  { name: "DEF", age: 20 },
];

function removeDuplicate() {
  let output = {};
  for (let i = 0; i < arr?.length; i++) {
    output[arr[i]?.name] = arr[i];
  }
  console.log(Object.values(output));
}

removeDuplicate();
