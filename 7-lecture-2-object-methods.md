# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

//syntax = object.keys()
object.keys(friendsAge) // returns the keys into an array
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
const friendNames = Object.keys(friendsAge);
//can use variable friendNames = Object.keys(friendAge);
//used below
friendsNames.forEach(friend => {
    console.log(friendsAge[friend]);
})
Object.keys(friendsAge).forEach(friend => {
    console.log(friendsAge[friend]);
});

//can assign as a variable
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the age in the list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
let age = Object.values(friendsAge);
age.forEach(age => {
    console.log(friendsAge[age])
})
```

---

```js
// Example - I need to sort the objects by the age in the list
const friendsAge = [
    {name: 'Kevin', age : 32}, 
    {name: 'Rick', age : 60}, 
    {name: 'Morty', age : 14}, 
    {name: 'Jerry', age : 35 }
]
friends.sort((a, b) => a.name - b.name);

