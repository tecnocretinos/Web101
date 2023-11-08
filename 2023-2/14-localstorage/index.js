const storage = window.localStorage;

storage.setItem("name", "Santiago");

const value = storage.getItem("name");
console.log(value);

storage.setItem("key", 100);
const value2 = storage.getItem("key");
console.log(value2 + 2);
console.log(100 + 2);

storage.setItem("key2", true);
const value3 = storage.getItem("key2");
console.log(value3);
console.log(true);

// Stringify & Parse
const user = [
  {
    name: "SANTIAGO",
    age: "29",
    gender: "M",
    id: "1",
  },
  {
    name: "SANTIAGO",
    age: "29",
    gender: "M",
    id: "1",
  },
  {
    name: "SANTIAGO",
    age: "29",
    gender: "M",
    id: "1",
  },
];
const userString = JSON.stringify(user);
console.log(user);
console.log(userString);
storage.setItem("user", userString);

const userJson = storage.getItem("user");
const userParsed = JSON.parse(userJson);
console.log(userJson);
console.log(userParsed);

storage.removeItem("key3");
//storage.clear()
