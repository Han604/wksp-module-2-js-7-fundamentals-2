// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

//create a function that counts the amount of votes each dessert in the object has
// let dessValue = Object.values(favoriteDessert);
// dessValue.forEach(dessert => {
//     counter = 0;
//     dessValue.forEach(duplicate => {
//         if (duplicate === dessert) {
//             counter += 1;
//         }
//     })
//     tempObject[dessert] = counter
// });
// console.log(dessValue + ' dessValue');
// console.log(tempObject);


// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

const dessertsArray = Object.values(favoriteDessert).sort();
console.log(dessertsArray)
const countedDesserts = {};
const rankedDesserts = [];

dessertsArray.forEach(dessert => {
    let count = 0;
    dessertsArray.forEach (dup => {
        if (dessert === dup) count +=1;
    });
    countedDesserts[dessert] = count;
})

Object.values(countedDesserts).forEach((dessertCount, id) => {
    const dessertName = Object.keys(countedDesserts)[id];
    rankedDesserts.push({
        dessertName: dessertName,
        dessertCount: dessertCount
    });
});
rankedDesserts.sort((a, b) => a.dessertCount < b.dessertCount ? 1 : -1);
rankedDesserts.forEach((item, id) => {
    console.log( `${id + 1}. ${item.dessertName}`);
})

console.log(countedDesserts)

Object.keys(countedDesserts).forEach(dessert => {
    //checking each dessert from the countedDesserts object with...
    let names = [];
    Object.keys(favoriteDessert).forEach(name=> {
        //the desserts from the favoriteDessert array
        if (favoriteDessert[name] === dessert) {
            //if the dessert[var name] === dessert push name to array, then join and console log.
            names.push(name);
        }
    });
    console.log(`${dessert}: ${names.join(', ')}`);
});



// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...
