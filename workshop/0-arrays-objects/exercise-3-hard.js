// Exercise 3 (hard)
// -------------------
const colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];
function colorCheck() {
    colors.forEach((item, index) => {
        console.log(item)
        switch (item) {
            case 'red':
                break;
            case 'orange':
                break;
            case 'yellow':
                break;
            case 'green':
                break;
            case 'blue':
                break;
            case 'violet':
                break;
            default:
                // console.log(item)
                // console.log(index)
                colors.splice(index, 1);
                index -= 1
                // console.log(index)
                break;
        }
    })
}
let firstTry = colorCheck(colors)
colorCheck(firstTry)
console.log(colors)
// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!
