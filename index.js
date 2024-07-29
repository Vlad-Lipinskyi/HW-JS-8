// 1 завдання

// Спосіб через for

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let friendString = '';

for (let i = 0; i <= friends.length-1; i++) {
    friendString = `${friends[i]}, ${friends[i += 1]}, ${friends[i += 1]}, ${friends[i += 1]}`;
    console.log(friendString);
}

// Спосіб через join

friendString = friends.join(", ");
console.log(friendString);

// Завдання 2

const cards = [ 
    "Карточка-1", 
    "Карточка-2", 
    "Карточка-3", 
    "Карточка-4", 
    "Карточка-5" 
            ];

console.log(cards)

// Видалити

cards.splice(2, 1);

console.log(cards)

// Додати 

cards.splice(4, 0, "Карточка-6");

console.log(cards)

// Оновити

cards.splice(2, 1, "Карточка-four");

console.log(cards);