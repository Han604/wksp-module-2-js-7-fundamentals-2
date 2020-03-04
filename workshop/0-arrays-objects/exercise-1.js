// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

var mostPopularFood = [
    'poke bowl',
    'chicken sliders',
    'pork baby back ribs',
    'chicken burritos',
    'chicken sandwich',
    'cauliflower rice bowl',
    'chicken and waffle sliders',
    'parmesan chicken',
    undefined,
];
function addItems (item1, item2) {
    mostPopularFood.pop()
    mostPopularFood.unshift(item1);
    mostPopularFood.push(item2);
}
function tidyList (item, id) {
    mostPopularFood.forEach((item, id) => {
        console.log(`${id+1}) ${item}`)
    });
    // for (i = 0; i < array.length; i++){
    //     console.log(`${i+1}) ${mostPopularFood[i]}`);
    // }
}
addItems('bean burritos', 'buffalo flavored cauliflower');
tidyList(mostPopularFood);
// The array holds a top-ten list of foods as ranked by Grubhub.
// #1 and #10 are missing
//       #1 is 'bean burritos'
//      #10 is 'buffalo-flavored cauliflower' (not kidding)

// Write a program that will do the following:
// Add them to the array in the right position
// Output them in a tidy top-ten fashion in the console.

// NO for loops!