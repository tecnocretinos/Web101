// Iniciate storage
const storage = window.localStorage;

// SAVE OBJECT IN STORAGE

// Create object
const user = { nombre: "Tiago", username: "espaciotiago", age: 28, isActives: true }
// Convert to string Json
const userString = JSON.stringify(user)
// Save into storage with key logged_user and value userString
storage.setItem("logged_user", userString)

// GET OBJECT FROM STORAGE

// Get the logged_user in storage as string
const userJson = storage.getItem("logged_user")
// Parse the json string into a map (object)
const userParsed = JSON.parse(userJson);
console.log(userParsed)