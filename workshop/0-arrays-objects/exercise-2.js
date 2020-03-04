// Exercise 2
// -------------------
const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];
const order = earlyBirds.concat(lateComers);
console.log(order);
function tidyList(item, id) {
    order.forEach((item, id) => {
        console.log(`${id+1}) ${order[id]}`);
    })
}
tidyList(order);
// You have two arrays above of people who arrived late to your party and
// people who arrived early.
// Create a new array that holds all of the party attendees and

// Write a program that will do the following:
// Output them in a tidy list from first to last arrival the console.

// NO for loops!
