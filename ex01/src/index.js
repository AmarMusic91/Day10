var myPet = {
    species: "Dog",
    name: "Lesi",
    legs: 4,
    friends: ["Mirso", "Sabaha"]
}
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };