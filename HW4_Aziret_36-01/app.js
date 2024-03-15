var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tagCounts = {}

for (let tag of tags ) {
    if (tagCounts[tag]) {
        tagCounts[tag]++
    } else {
        tagCounts[tag] = 1
    }
}
console.log(tagCounts)

function averageOfPositiveNumbers (arr) {
    let sum = 0
    let count = 0

    for (let i = 0;i < arr.length; i++) {
        if (arr[i] > 0){
            sum += arr[i]
            count++
        }
    }
    if (count === 0) {
        return 'no'
    }
    return sum / count
}
var numbers =  [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(averageOfPositiveNumbers(numbers))

// Есть два массива с числами:
//     первый массив - [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
// второй массив - [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
// Напишите программу, которая находит и выводит элементы, которые встречаются
// в обоих массивах.
//     Выводится элементы должны в новом массиве


let first = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76];
let second = [1,45,32,3,4,2,56,76,67,87,89,8,56,54];

let sameNumbers = [];

for (i = 0; i < first.length; i++) {
    let commonElements = first[i];
    if (second.includes(commonElements) && !sameNumbers.includes(commonElements)) {
        sameNumbers.push(commonElements);
    }
}
console.log(sameNumbers)

// Напишите функцию, которая принимает массив из строк
// (например: ['text', 'frontend', 'apple'] и т.д) и выводит только те слова,
//     в которых есть буква "t" и "a" (программа должна распознавать  и большие,
//     и маленькие буквы). Вывод должен быть в новом массиве


let words = ['Tea', 'table', 'teapot'];
let get = [];
function filterTAndA (words) {
    for (i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (word.includes('t') && word.includes('a')) {
            get.push(word)
        }
    }
    return get
}
console.log(filterTAndA(words))
