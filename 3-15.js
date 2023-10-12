let user1 = { name: "Alex" };
let user2 = { name: "Bob" };

let article1 = { name: "React" };
let article2 = { name: "Angular" };
let article3 = { name: "Vue" };

let userArticles = new Map();

userArticles.set(user1, [article1, article2]);
userArticles.set(user2, [article3]);

console.log(userArticles);

function onlyUnigue(arr) {
    let setFromArray = new Set(arr);
    return Array.from(setFromArray);
}

let newArr = [1, 3, 14, 57, 8, 4, 26, 8, 38, 88, 90, 4, 7];

console.log(onlyUnigue(newArr));