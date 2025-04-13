// "use strict"
"use strict"


// const personalMovieBd = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         this.count = +prompt("How many films have you watched already", "");

//         while (this.count == "" || this.count == null || isNaN(this.count)) {
//             this.count = +prompt("How many films have you watched already", "");
//         }
//     },
//     information: () => {
//         while (1) {
//             const a = prompt("What was the last movie you saw?", "").trim();
//             const b = +prompt("What grate do you give to it?", "");
//             if (a != null && b != null && a != " " && b != " " && a.length <= 20) {
//                 personalMovieBd.movies[a] = b;
//                 console.log("Successfully!");
//                 if (personalMovieBd.count >= 0 && personalMovieBd.count < 10) {
//                     console.log("Normal viewer!");
//                 }
//                 if (personalMovieBd.count >= 10 && personalMovieBd.count < 20) {
//                     console.log("Advance viewer!");
//                 }
//                 if (personalMovieBd.count >= 20) {
//                     console.log("God viewer!");
//                 }
//                 break;
//             }
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieBd);
//         }
//     },
//     toggleVisiableMyDB: () => {
//         if (personalMovieBd.private) {
//             personalMovieBd.private = false;
//         }
//         else {
//             personalMovieBd.private = true;
//         }
//     },

//     writeYourGenres: () => {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`What is your favorite film's genre ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log("You added incorrect data, try again");
//             // }
//             // else {
//             //     personalMovieBd.genres[i - 1] = genre;
//             // }
//             let genre = prompt(`Add your favorite genres using coma`);
//             if (genre === '' || genre == null) {
//                 console.log('You added wrong value');
//                 i--;
//             }
//             else {
//                 personalMovieBd.genres = genre.split(', ');
//                 personalMovieBd.genres.sort();
//             }
//         }
//         personalMovieBd.genres.forEach((item, i) => {
//             console.log(`The best genre ${i + 1} - it's ${item}`);
//         });
//     }
// };


// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== "number" || length < 0 || !Number.isInteger(length)) {
//         return "Error with calculation!";
//     }
//     let volume = 0;
//     let area = 0;

//     //volume = length * length * length;
//     volume = length ** 3;
//     area = 6 * (length * length);
//     return `Volume is: ${volume}, area is: ${area}`;
// }
// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(num) {
//     if (num < 0 || typeof (num) !== "number" || !Number.isInteger(num)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//     else if (num == 0 || num > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//     if (num >= 1 && num <= 4) {
//         return 1;
//     }
//     if (num >= 5 && num <= 8) {
//         return 2;
//     }
//     if (num >= 9 && num <= 12) {
//         return 3;
//     }
//     if (num >= 13 && num <= 16) {
//         return 4;
//     }
//     if (num >= 17 && num <= 20) {
//         return 5;
//     }
//     if (num >= 21 && num <= 24) {
//         return 6;
//     }
//     if (num >= 25 && num <= 28) {
//         return 7;
//     }
//     if (num >= 29 && num <= 32) {
//         return 8;
//     }
//     if (num >= 33 && num <= 36) {
//         return 9;
//     }
// }
// console.log(getCoupeNumber(33));

// function getTimeFromMinutes(time) {
//     if (time < 0 || typeof (time) != "number" || !Number.isInteger(time)) {
//         return "Error, check your data!";
//     }
//     let hour = -1;
//     let counter = 0;
//     while (counter <= time) {
//         hour++;
//         counter += 60;
//     }
//     counter -= 60;
//     counter = time - counter;
//     return `Hours: ${hour} and minutes: ${counter}`;
// }

// console.log(getTimeFromMinutes(-150));

// function findMaxNumber(arr) {
//     // for (let i = 0; i < 4; i++) {
//     //     if (max <= arr[i]) {
//     //         max = arr[i];
//     //     }
//     // }
//     return Math.max(...arr);
// }
// let arr = [50, 20, 30, 40];
// console.log(findMaxNumber(arr));

// function fib(repeat) {
//     let result = "";
//     let num = 0, num1 = 1;
//     for (let i = 0; i < repeat; i++) {
//         if (i + 1 === repeat) {
//             result = result + `${num}`;
//         }
//         else {
//             result = result + `${num}`;
//         }
//         let num2 = num + num1;
//         num = num1;
//         num1 = num2;
//     }
//     return result;
// }


// console.log(fib(8));


// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`i learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I am done with that');
// }

// learnJS('JavaScript', done);


// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         background: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const { border, background } = options.colors;
// console.log(options.colors.border);
// console.log(border);
//console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`characteristic ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     }
//     else {
//         console.log(`characteristic ${key} has variable ${options[key]}`)
//         counter++;
//     }

// }
// console.log(counter);

// const arr = [8, 12, 10, 22, 4, 3, 2];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for ( let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(value, i, arr) { // элемент, индекс, массив
//     console.log(`${i}: ${value} inside in array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// //console.log(products);
// console.log(products.join('; '));

// let a = 5;
//  b = a;

//  b = b + 5;

//  console.log(b);
//  console.log(a);

//  const obj = {
//     a: 5,
//     b: 1
//  };

//  const copy = obj;

//  copy.a = 10;

//  console.log(copy);
//  console.log(obj);

//  function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
//  }

//  const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:7,
//         y: 4
//     }
//  };

// //  const newNumbers = copy(numbers);

// //  newNumbers.a = 10;
// //  console.log(newNumbers);
// //  console.log(numbers);

//  const add = {
//    d: 17,
//    e: 20
//  };

//  const clone = Object.assign({}, add);

//  clone.d = 20;
//  console.log(add);
//  console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adadadada';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

//     const q = {
//         one: 1,
//         two: 2
//     };

//     const newObj = {...q};
//     console.log(q);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', "eng"],
//         programmingLangs: {
//             js: "20%",
//             php: "10%"
//         },
//         exp: "1 mounth"
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// const exp = showExperience(personalPlanPeter);
// console.log(exp);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const { age } = plan;
//         const { languages } = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function (lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// function showProgrammingLangs(plan) {
//     let str = "";
//     const { programmingLangs } = plan.skills;

//     for (let key in programmingLangs) {
//         str += `Language ${key} learned in ${programmingLangs[key]}\n`;
//     }
//     return str;
// }

// let str = showProgrammingLangs(personalPlanPeter);
// console.log(str);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(arr.length === 0) {
//         return "The family is empty!";
//     }
//     else {
//         return `The family inludes ${arr.join(", ")}`;
//     }
// }

// console.log(showFamily(family)); // "Семья состоит из: Peter Ann Alex Linda"
// console.log(showFamily([]));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(city) {
//         console.log(city.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         console.log("Error");
//     }

//     return str.split("").reverse().join("");
// }
// console.log(reverse(someString));

// function reverse1(str) {
//     let newstr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         newstr += str[i];
//     }
//     return newstr;
// }
// console.log(reverse1(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = "";
//     arr.length === 0 ? str = "Dont have avaliable currency" : str = "Availiable currency:\n";

//     arr.forEach(function (curr) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });
//     return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));


// const soldier = {
//     helth: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log("Hello");
//     }
// };

// const Amir = Object.create(soldier);

// const jonh = {
//     helth: 100
// }

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh);
// console.log(Amir.armor);


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         console.log(`The budget of 50000 is enough for volume: ${volume}`);
//         console.log(`Reminder ${data.budget - (volume * data.moneyPer1m3)}`);
//     }
//     else {
//         console.log(`The budget of ${data.budget} is not enough. Expenses: ${data.budget - (volume * data.moneyPer1m3)}`);
//     }
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         }
//         else if (i >= 3 && i < 6) {
//             b.push(arr[i]);
//         }
//         else if (i >= 6 && i < 9) {
//             c.push(arr[i]);
//         }
//         else {
//             rest.push(arr[i]);
//         }
//     }
//     console.log(a, '\n', b, '\n', c, '\n', `The rest of students: ${rest.length === 0 ? '-' : rest.join(', ')}`);
// }

// sortStudentsByGroups(students);

// console.log(String(null));
// console.log(typeof(String(4)));

//2)
// const num = 5;
// console.log("https://vk.com/catalog/" + num);
// console.log(5 + '' + 2);
// console.log(typeof(+ "5"));

// 3)
// console.log(typeof (!!(444)));

// let number = 5;

// function logNumber() {
//     console.log(number);
// }
// number = 6;

// logNumber();

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// function foo(a, b) {
//     const [first] = a;
//     const { eng } = b;

//     return `${first} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' })

//let x = 5;
//alert(x++); // answer is 5

//[] + false - null + true ; // answer is Nan

//let y = 1;
//let x = y = 2;
//alert(x); //answer is 2 because assigment is JS is right to left

//[] + 1 + 2 // answer is 12

//alert("12"[1]); // aswer is 2
//alert("1"[0]); // aswer is 1

// 2 && 1 && null && 0 && undefined // answer is null
//Logical AND(&&) stops at the first falsy value.
//If all values are truthy, it returns the last one.
//Here, null is the first falsy value, so it's the result.

//Есть ли разница между выражениями ? !!(a && b) и(a && b) ?
// Есть первое boolean второе вернет b

//alert(null || 2 && 3 || 4); // aswer is 3
// В JavaScript операторы && (логическое И) и || (логическое ИЛИ)
// имеют разный приоритет.Оператор && имеет
// более высокий приоритет, чем ||.
// Оператор && возвращает первое ложное значение или последнее истинное.
// Оператор || возвращает первое истинное значение или последнее ложное.

//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b
// a и b — это разные объекты в памяти.
// Хотя они содержат одинаковые элементы,
// JavaScript сравнивает ссылки на эти объекты, а не их содержимое.
// Таким образом, выражение a == b возвращает false,
// потому что a и b не указывают на один и тот же объект в памяти.

//Что выведет этот код: alert(+"Infinity"); // Infinity но тип будет number

//"Ёжик" > "яблоко" ?
// Ответ: false.Строка "Ёжик" на самом деле
// меньше строки "яблоко", потому что первый символ "Ё"
// имеет меньший код Unicode, чем первый символ "я".

//Чему равно 0 || "" || 2 || undefined || true || falsе answer is 2



// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     let price1 = parseInt(fDish.price);
//     let price2 = parseInt(sDish.price);
//     let avgPrice = parseInt(average);
//     if (price1 + price2 < avgPrice) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
//     ],
//     averageLunchPrice: '30$',
//     openNow: true
// };

// function transferWaitors(data) {
//     //const copy = Object.assign({}, data); поверхностное копирование. Копирует с сылками на обьекты, при изменении обьектов основной массив тоже поменяется.
//     const copy = structuredClone(data); // глубокое копирование. Скопирует все без ссылок

//     copy.waitors[0] = { name: 'Mike', age: 32 }; // без глубокого копирования сделай новый массив. copy.waitors[0] = [{name: 'Mike', age: 32}];
//     console.log(copy.waitors);
//     return copy;
// }

// transferWaitors(restorantData);

// let taskIdCounter = 0;
// let taskList = [];

// function addTask(text) {
//     const newtask = {
//         id: ++taskIdCounter,
//         text: text,
//         isCompleted: false
//     };
//     taskList.push(newtask);
//     console.log("The new task has been added to the list!");
// }

// function removeTask(taskId) {
//     const index = taskList.findIndex(function (task) {
//         return task.id === taskId;
//     });
//     if (index !== -1) {
//         taskList.splice(index, 1);
//     }
//     else {
//         console.log("The task hasn't found!");
//     }
// }

// function markTaskAsCompleted(taskId) {
//     const task = taskList.find(task => task.id === taskId);
//     if (task) {
//         task.isCompleted = true;
//     }
//     else {
//         console.log("The task hasn't found!");
//     }
// }

// function displayTasks() {
//     let i = 1;
//     taskList.forEach(function (task) {
//         console.log(`The id of ${i} task: ${task.id}\nThe text of the task: ${task.text}\nCondition: ${task.isCompleted ? 'Completed' : 'Pending'}\n`);
//         i++;
//     });
// }

// addTask("Learn JavaScript");
// addTask("Write a blog post");
// addTask("Read a book");
// markTaskAsCompleted(1);
// displayTasks();
// removeTask(2);
// displayTasks();

// console.log(findLargest([10, 5, 8, 20, 3]));

// function findLargest(arr) {
// let max = arr[0];
// arr.forEach(function(item){
//     if (item > max) {
//         max = item;
//     }
// });
//     return max;
// }

// console.log(reverseString("hello"));

// function reverseString(string) {
//     let word = string.split('').reverse().join('');
//     return word;
// }

// console.log(countVowels("javascript"));

// function countVowels(string) {
//     let counter = 0;
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     string.split('').forEach(char => {
//         if(vowels.has(char)) {
//             counter++;
//         }
//     });
//     return counter;
// let word = string.split('');
// word.forEach(item => {if(item === 'a' || item === 'e' || item === 'u' || item === 'i' || item === 'o') {
//     counter++;
// }});
// return counter;
//}
// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// function removeDuplicates(arr) {
//     // return [...new Set(arr)];
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("Level"));

// function isPalindrome(word) {
//     word = word.toLowerCase();
//     let word_reversed = word.split('').reverse().join('');
//     if (word_reversed === word) {
//         return "It is palindrome!";
//     }
//     else {
//         return "It is not palindrome!"
//     }
// }

// console.log(factorial(5));  // Output: 120
// console.log(factorial(3));  // Output: 6
// console.log(factorial(0));

// function factorial(number) {
//     let result = 1;
//     if (number === 0) {
//         return 1;
//     }
//     else {
//         for (let i = 1; i <= number; i++) {
//             result = result * i;
//         }
//         return result;
//     }
// }

// console.log(factorial(5));  // Output: 120
// console.log(factorial(3));  // Output: 6
// console.log(factorial(0));

// function factorial(number) {
//     let result = 1;
//     if (number === 0) {
//         return 1;
//     }
//     else {
//         for (let i = 1; i < number; i++) {
//             result = result + (result * i);
//         }
//         return result;
//     }
// }

// console.log(secondLargest([10, 20, 4, 45, 99, 99]));


// function secondLargest(arr) {
//     let uniqueArr = [...new Set(arr)];
//     uniqueArr.sort((a,b) => b - a);
//     return uniqueArr[1];
// }

// console.log(findSecondLargest([10, 5, 8, 20, 3]));

// function findSecondLargest(arr) {
//     let arr1 = [...new Set(arr)];
//     arr1.sort((a, b) => b - a);
//     return arr1[1];
// }
//
// let arr1 = [4,2,9,1,5];
// console.log(sortArray(arr1)); // Output: [1, 2, 4, 5, 9]

// function sortArray(arr) {
//     let arr_copy = [...arr];
//     arr_copy.sort((a,b) => a - b);
//     return arr_copy;
// }
// console.log(arr1)

// console.log(countOccurrences("hello world", "l"));

// function countOccurrences(string, char) {
//     let count_char = 0;
//     let string_arr = string.split('');
//     string_arr.forEach(item => {
//         if(item === char) {
//             count_char++;
//         }
//     });
//     return count_char;
// }

// console.log(findIntersection([1, 2, 1, 3], [4, 4, 4, 4]));


// function findIntersection(arr, arr1) {
//     let same = [];
//     let num = 0;
//     let arr2 = [...new Set(arr)], arr3 = [...new Set(arr1)];
//     let arr_full = [...arr2, ...arr3];

//     for (let i = 0; i < arr_full.length; i++) {
//         for (let j = i + 1; j < arr_full.length; j++) {
//             if (arr_full[i] === arr_full[j]) {
//                 same[num] = arr_full[i];
//                 num++;
//             }
//         }
//     }
//     let same_after = [...new Set(same)];
//     return same_after;
// }

// console.log(findIntersection([1, 2, 3, 4], [2, 2, 1, 1])); // Output: [3, 4]

// function findIntersection(arr, arr1) {
//     let same = arr.filter(item => arr1.includes(item)); // Filter elements that exist in both arrays
//     return [...new Set(same)]; // Remove duplicates
// }

// console.log(makeNegative(-42));    // return -1
// console.log(makeNegative(-5));   // return -5
// console.log(makeNegative(0));    // return 0
// console.log(makeNegative(0.12));
// function makeNegative(num) {
//     if (num < 0) {

//         return num;
//     }
//     else if (num === 0) {
//         return 0;
//     }
//     else {
//         return -num;
//     }
// }

// let num = 8;
// var summation = function (num) {
//     let sum = 0;

//     for (let i = 0; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(summation(num));

// function digitalRoot(n) {

//     while (n >= 10) {
//         let sum = 0;
//         while (n > 0) {
//             sum += n % 10;
//             n = Math.floor(n / 10);
//         }
//         n = sum;
//     }
//     return n;
// }

// function order(words) {
//     if (words === "") {
//         return "";
//     }
//     var new_word = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
//     return new_word;
// }

// JS WORK WITH DOM UNDER

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');// псевдо массив
// const btns2 = document.getElementsByTagName('button')[1];
// const wrapper = document.querySelector('.wrapper');

// console.log(btns);
// console.log(btns[2]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');//css selector into bracket, foreach can be used
// //создает псевдо массив

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');// берет один элемент
// console.log(oneHeart);

// box.style.backgroundColor = 'blue'; // it changes the color of box immediately
// box.style.width = '500px';

//box.style.cssText = 'background-color: blue; width: 100px'

// btns[1].style.borderRadius = '100%';

// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });


// const div = document.createElement('div');
// const text = document.createTextNode('I was here');

// div.classList.add('black');// we added class black from css ro element div
//document.body.append(div); // additing the div in the end of body
// wrapper.append(div);// inside the wrapper in the end
// wrapper.appendChild(div);


// wrapper.prepend(div);// add in the beggining of the class, but didnot duplicate

// hearts[0].before(div);
// hearts[0].after(div);
//wrapper.insertBefore(div, hearts[1]);

// circles[0].remove(); deleting the element;
// wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]); replace the elements
//wrapper.replaceChild(circles[0], hearts[0]);

//div.innerHTML = "Hello World";
// div.innerHTML = "<h1>Hello world</h1>";
//div.textContent = "Hello";

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
//div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
//div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img');
// const genre = document.querySelector('.promo__genre');
// const poster = document.querySelector('.promo__bg');
// const movieList = document.querySelector('.promo__interactive-list');

// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = "Драма";

// poster.style.backgroundImage = 'url("img/bg.jpg")';

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//     </li>`;
// });

//<button onclick="alert('Click')" id="btn">Нажми меня</button> // write in html

// const btns = document.querySelectorAll('button');

// btn.onclick = function () {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert("Click");
// });

// btn.addEventListener('mouseenter', () => {
//     alert("Click");
// });

// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
// }

// btn.addEventListener('click', deleteElement);

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
// }

// btn.addEventListener('click', deleteElement);
// btns.forEach((item) => {
//     item.addEventListener('click', deleteElement, { once: true });
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault(); // отмена действия при клике
//     console.log(event.target);
// });

// console.log(document.body);
//console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);// получу родитель div first
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('#current').parentNode.parentNode);// получу родитель wrapper
//<li data-current="3">3</li> data attribut
// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSiblingSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node)
// }
// function pow(x, y) {
//     let result = 1;

//     for (let i = 0; i < y; i++) {
//         //result = x * result;
//         result *= x;
//     }
//     return result;
// }

// function pow(x, y) { // recursia
//     if (y === 1) {
//         return x;
//     }
//     else {
//         return x * pow(x, y - 1);
//     }
// }

// console.log(pow(2, 3));

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }

//         }
//         else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total / students;
// }

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     }
//     else {
//         let total = [0, 0];
//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }

// // console.log(getTotalProgressByIteration(students));
// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);

// function factorial(num) {
//     if (typeof (num) !== 'number' || !Number.isInteger(num)) {
//         return "Ошибка, проверьте данные!";
//     }

//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     else {
//         return 1;
//     }
// }

// console.log(factorial(4));

'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     const adv = document.querySelectorAll('.promo__adv img');
//     const genre = document.querySelector('.promo__genre');
//     const poster = document.querySelector('.promo__bg');
//     const movieList = document.querySelector('.promo__interactive-list');
//     const formInput = document.querySelector('form.add');
//     const addInput = formInput.querySelector('.adding__input');
//     const checkBox = formInput.querySelector('[type = "checkbox"]');

//     formInput.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let newFilm = addInput.value.trim();
//         const favorite = checkBox.checked;

//         if (newFilm) {

//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.slice(0, 20)}...`;
//             }

//             if (favorite) {
//                 console.log("Add favorite film!");
//             }
//             movieDB.movies.push(newFilm);
//             sortArr(movieDB.movies);
//             createMovieList(movieDB.movies, movieList);
//         }


//         e.target.reset();
//     });

//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//         });
//     };

//     const makeChanges = () => {
//         genre.textContent = "Драма";
//         poster.style.backgroundImage = 'url("img/bg.jpg")';
//     };

//     const sortArr = (arr) => {
//         arr.sort();
//     };


//     function createMovieList(films, parent) {
//         parent.innerHTML = "";
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//     </li>`;
//         });

//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);
//                 createMovieList(movieDB.movies, movieList);
//             });

//         });
//     }
//     deleteAdv(adv);
//     makeChanges();
//     sortArr(movieDB.movies);
//     createMovieList(movieDB.movies, movieList);
// });

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log("Start");
//         console.log(e.touches);
//         console.log(e.targetTouches);
//         console.log(e.changedTouches);

//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log("Move");
//         console.log(e.targetTouches[0].pageX);

//     });

//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log("End");

//     });
// });

//<script defer src="script.js"></script> for html
//defer works in parallel
// run in the background
// doesn't block web site

//<script async src="script.js"></script> for html
// doens't wait others scripts

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript("js/test.js");
// loadScript("js/some.js");


// function maps(x) {
//     let y = [];
//     x.map((num, i) => {
//         y[i] = num * 2;
//     });
//     return y;
// }

// function maps(x) {
//     return x.map(num => num * 2);
// }

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8;
//     }
//     else {
//         return number * 9;
//     }
// }
// function reverseWords(str) {

//     return str.split('').reverse().join('').split(' ').reverse().join(' ');

// }

// function sumTwoSmallestNumbers(numbers) {
//     let min = numbers[0];
//     let sum = 0;
//     let j = 0;

//     numbers.forEach((item, i) => {
//         if (item < min) {
//             min = item;
//             j = i;
//         }
//     });
//     sum += min;
//     numbers.splice(j, 1);

//     min = numbers[0];
//     numbers.forEach((item, i) => {
//         if (item < min) {
//             min = item;
//             j = i;
//         }
//     });
//     sum += min;

//     return sum;
// }

// function sumTwoSmallestNumbers(numbers) {
//     let arr = numbers.sort((a, b) => a - b);

//     return arr[0] + arr[1];
// }

// function oddOrEven(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     if (sum % 2 === 0) {
//         return "even";
//     }
//     else {
//         return "odd"
//     }
// }

// function century(year) {
//     let x = year / 100;
//     let y = Math.ceil(x);
//     return y;
// }

// function century(year) {
//     return Math.ceil(year / 100);
// }

// function filter_list(l) {
//     return l.filter(element => typeof (element) === 'number');
// }

// function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
// }

// function XO(str) {
//     let xCount = 0, yCount = 0;
//     const arrlower = str.toLowerCase();

//     for (const char of arrlower) {
//         if (char === 'x') {
//             xCount++;
//         }
//         else if (char === 'o') {
//             yCount++;
//         }
//     }
//     return xCount === yCount;
// }

// function getGrade(s1, s2, s3) {
//     var avg = (s1 + s2 + s3) / 3;
//     switch (true) {
//         case (avg >= 90):
//             return 'A';
//         case (avg >= 80):
//             return 'B';
//         case (avg >= 70):
//             return 'C';
//         case (avg >= 60):
//             return 'D';
//         default:
//             return 'F';
//     }
// }

// function removeExclamationMarks(s) {
//     return s.split('').filter(char => char !== '!').join('');
// }

// function removeExclamationMarks(s) {
//     let string = s.split('');

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === '!') {
//             string.splice(i, 1);
//             i--;
//         }
//     }
//     return string.join('');
// }

// function removeExclamationMarks(s) {
//     return s.replaceAll('!', '');
// }

// function findShort(s) {
//     let words = s.split(' ');
//     let min = words[0].length;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length < min) {
//             min = words[i].length;
//         }
//     }
//     return min;
// }

// function findShortestWordLength(s) {
//     let words = s.split(' ');  // Split the string into words
//     let shortestWord = words.reduce((min, word) => Math.min(min, word.length), Infinity);  // Find the shortest word length
//     return shortestWord;
// }

// 'use strict';

// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

// changeParams(box, newHeight, newWidth);

// let userName = NaN;
// let userKey;
// console.log(userName ?? userKey ?? 'User'); реагирует на Null или Indefined

// const block = document.querySelector('.block');

// console.log(block);
// console.log(block?.textContent); проверит есть ли что-то в блок если нет в textcontent не пойдет
// block?.textContent = '123' ошибка будет из=за того что присваиваем что-то в indefined
// console.log(1 + 2);

// const userData = {
//     name: 'Ivan',
//     age: null,
//     say: function () {
//         console.log('Hello');
//     }
// }
// userData.say();
// userData.hey?.(); indefined
// console.log(userData.skills?.js); вернет indefiend после проверки скилс не пойдет

// const boxesQuery = document.querySelector('.box');// псевдомассив но более функциональный html коллекция
// const boxesGet = document.getElementsByClassName('box');// псевдомассив HTML коллекция
// boxesQuery.forEach(box => {
//     if (box.mathces('this')) console.log('This one');
// });

// console.log(boxesQuery[0].closest('.wrapper')); найдет ближайший родитель с классом wrapper

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery);// статичнаяя коллекция
// console.log(boxesGet); //живыя коллекция

// console.log(Array.from(boxesGet)); // сделает его  статичный массивом

// var isSquare = function (n) {
//     if (n < 0) {
//         return false;
//     }
//     const root = Math.sqrt(n);
//     return Number.isInteger(root);
// }

// function digitize(n) {
//     return n.toString().split('').reverse().map(x => Number(x));
// }

// function sumArray(array) {
//     if (array != null && array.length >= 3) {
//         let sum = 0;
//         let min = array[0];
//         let max = array[0];

//         for (let i = 0; i < array.length; i++) {
//             sum += array[i];

//             if (min > array[i]) {
//                 min = array[i];
//             }
//             if (max < array[i]) {
//                 max = array[i];
//             }
//         }
//         sum -= (max + min);
//         return sum;
//     }
//     else {
//         return 0;
//     }

// }

// function sumArray(array) {
//     if (array != null && array.length >= 3) {
//         let numbers = array.sort((a, b) => a - b);
//         numbers.splice(0, 1);
//         numbers.splice(numbers.length - 1, 1);
//         let sum = 0;
//         for (let char of numbers) {
//             sum += char;
//         }
//         return sum;
//     } else {
//         return 0;
//     }
// }


// function sumArray(array) {
//     if (Array.isArray(array) && array.length >= 3) {
//         let numbers = array.sort((a, b) => a - b);
//         numbers.splice(0, 1);
//         numbers.splice(numbers.length - 1, 1);
//         let sum = 0;
//         for (let char of numbers) {
//             sum += char;
//         }
//         return sum;
//     } else {
//         return 0;
//     }
// }

// let id2 = Symbol("id");
// const obj = { // Symbols
//     'name': 'Test',
//     [Symbol('id')]: 1,
//     [id2]: 1,
//     getId: function () {
//         return this[id2];
//     }
// }

// console.log(obj.getId()); // will output 1
// let id = Symbol("id");
// obj[id] = 1;

//console.log(Object.getOwnPropertySymbols(obj)); // will output reference to Symbols
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);// will output 1

//for (let value in obj) console.log(value) // will output only name

// const myAwesomDB = {
//     movies: [],
//     actors: [],
//     //id: 123
//     //[Symbol("id")]: 123
//     [Symbol.for("id")]: 123// global riestr of symbols
// }

// myAwesomDB.id = '32323232' // rewrite but will not change Symbol
// console.log(myAwesomDB["id"]); // output 32323232
// console.log(myAwesomDB[Symbol.for('id')]); // output 123 cause of global

// const user = { // all flags true
//     name: 'Alex',
//     surname: 'Smith',
//     //birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name')); // посмотреть флаги

// Object.defineProperty(user, 'name', { writable: false })// поменяли флаг переписи
// Object.defineProperty(user, 'gender', { value: 'male' });// after creating it all flags false
// Object.defineProperty(user, 'birthday', { value: prompt('Date?'), enumerable: true, configurable: true });
// user.name = 'adwadwa'// will not rewrite cause writable is false now
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));// посмотреть флаги

// Object.defineProperty(user, 'showMyPublicData', { enumerable: false }); // will not appear in for, for in and etc loops
// for (let key in user) console.log(key);

// Object.defineProperty(user, { one more way
//     name: {writable: false},
//     surname: {writable: false}
// }

//Object.is() являются ли 2 обьекта одинаковыми или различными
//Object.keys() возвращает массив ключей из собственных перечисляемых свойств (enumerable: true) переданного обьекта
//Object.values() возвращает массив значений из собственных перечисляемых свойств (enumerable: true) переданного обьекта
//Object.entries()возвращает массив ключей и значений из собственных перечисляемых свойств (enumerable: true) переданного обьекта
// Object.entries() создает двумерный массив

//это флаги за которыми следить надо
//writable переписывать
//enumerable появляться в for etc
//configurable if false you can not change it

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// for (const key in user) {// берет ключ
//     console.log(user[key]); // выведет значения,  но может перебрать не по порядку
// }

// const arr = ['b', 'a', 'c'];

// for (const key in arr) { // берет ключ
//     console.log(arr[key]);// выведет цифры, но может перебрать не по порядку
// }

// const str = 'String';
//for in
// for (const key in str) { // берет ключ
//     console.log(str[key]); // переберет по буквам,  но может перебрать не по порядку
// }

// const arr1 = ['b', 'a', 'c'];
//for of не может перебрать обьекты
// for (const key of arr1) { // берет значение
//     console.log(key); // выводит значение
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// }
// делаем for of для обьектов через Symbol.iterator
// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.john,
//         last: this.ann,

//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return { done: false, value: this.current }
//             }
//             else {
//                 return { done: true };
//             }

//         }
//     }
// }

// for (let res of salaries) {
//     console.log(res);
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,

// Генератор: делаем объект итерируемым через for...of
// *[Symbol.iterator]() {
//      Начинаем с зарплаты Джона + 500
//     for (let value = this.john + 500; value < this.ann; value += 500) {
//         yield value; // Выдаем значение наружу и приостанавливаем выполнение
//     }
// },

// Просто обычный метод для примера, не влияет на итератор
//     sayHello: function () {
//         console.log('Hello');
//     }
// };

// Используем for...of — теперь он работает, потому что мы добавили Symbol.iterator
// for (let res of salaries) {
//     console.log(res); // Вывод: 1000, 1500, ..., 4500
// }


// const user = {
//     name(was 4): 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(user);// 4 will be string
// console.log(typeof (Object.keys(user)[0])); // 4 is string

// const shops = [
//     { rice: 500 },
//     { oil: 200 },
//     { bread: 50 }
// ]

// const budget = [5000, 15000, 25000];

// const map = new Map();

// const map = new Map([ // map is array of arrays
//     [{ paper: 400 }, 8000]
// ]);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });

// map.set(shops[0], 5000);
// map.set(shops[1], 10000);
// map.set(shops[2], 15000);
// map.set(shops[0], 5000)
//     .set(shops[1], 10000)
//     .set(shops[2], 15000);
//console.log(map);


//console.log(map);
//console.log(map.get(shops[0]));// output 5000
//console.log(map.has(shops[0]));// true. Check if it exists
// map.delete(key);
// map.clear();
// map.size;
//map.keys();

// const goods = [];

// for (let shop of map.keys()) {
//     //console.log(shop);
//     goods.push(Object.keys(shop)[0]); // or without [0]. will add keys of shop elements to the new array
// }
// console.log(goods);

// for (let price of map.values()) {// will show us budgets
//     console.log(price);
// }

// for (let price of map.entries()) { // will show us key and budget
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) { // will show us key and budget
//     console.log(shop, price);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

// const userMap = new Map(Object.entries(user)); // from object to map
// console.log(userMap);

// const newUserObj = Object.fromEntries(userMap);// from map to object
// console.log(newUserObj);

//const arr = [1, 2, 3, 4, 5, 6, 7, 1];

// const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// const set = new Set(arr); // unique values

// set.add('Ivan');

// set.add('Oleg'); // will not add cause not unique

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// })
// console.log(set.values()); // output all elements as well
// console.log(set.keys()); // output all keys but Names (Alex etc)

// function unique(arr) { // will return sort array
//     return Array.from(new Set(arr));
// }

// const bigint = 121212121212121212121212122121212121212121212n; // add n in the end and it will become bid integer
//  can not mix with normal int and can not round etc
//  we can > < or == with normal integer but not ===
// console.log(1n + 2n);// output 3n
// console.log(5n / 2n); // output 2n will round
// const sameBidInt = BigInt(121212121212121212121212122121212121212121212); // or like this

// console.log(typeof (bigint));// type Big Int

// let bigint = 1n;
// let number = 2;

// console.log(bigint + BigInt(number));
//console.log(Number(bigint) + number);

// function amountOfPages(summary) {
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//         result += i;
//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }
//     return n;
// }

// Вариант с циклом
// function deepCount(a) {
//     let count = a.length;
//     for (let i = 0; i < a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
// }

// Вариант с методом reduce
// function deepCount(a) {
//     return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
// }

// JAVASCRIPT IN A WORK

// const btns = document.querySelectorAll('#first button');
// const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);// 2 how many css classes it has
// console.log(btns[0].classList.item(0)); // get class by index inside classList
// console.log(btns[0].classList.item(0));

//console.log(btns[0].classList.add('red', 'trtrtrt', 'adadada')); // add class red to the first button
//console.log(btns[0].classList.remove('blue', 'trtrtrt')); // remove class blue from the first button
// console.log(btns[0].classList.toggle('blue')); // add blue if not exist or remove if exist
//console.log(btns[0].classList.contains('blue')); // check if red class exist in the first button

// if (btns[0].classList.contains('blue', 'red')) {// check if red and blue exist in the first button
//     console.log('red');
// } if you ask about both but first does not exist it will not go inside

// btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }
// btns[1].classList.toggle('red');

// });

// console.log(btns[0].className); // will show all classes in the first button

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {// check if we clicked on button
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches('button.red')) {// check if we clicked on button with class red
//         console.log('Hello');
//     }
// });

// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');// create new button
// btn.classList.add('red');// add class red to the button
// wrapper.append(btn);// add button to the wrapper
//btn.innerHTML = 'Hello';// add text to the button




// "use script"

// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item');
//     const tabsContent = document.querySelectorAll('.tabcontent');
//     const tabsParents = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             //item.style.display = 'none';
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabs[i].classList.add('tabheader__item_active');
//         //tabsContent[i].style.display = 'block';
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');

//     }

//     tabsParents.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target === item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });


//     hideTabContent();
//     showTabContent();
// });


// function createElement() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     //return div;
//     document.body.append(div);
// }

//const testDiv = createElement();
//createElement();

//function deleteElement() {
// const element = document.getElementById('test');
// if (element) {
//     element.remove();
// }
// else {
//     console.log('Element not found');
// }
// document.body.removeChild(document.getElementById('test'));
// testDiv.remove(); // remove testDiv
//}

//deleteElement();

// "use script"

// const timeId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello');

// const timeId = setTimeout(function() {
//     console.log("Hello");
// }, 2000);

// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// btn.addEventListener('click', () => {
//     // const timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000); // each 2 sec
// });

// clearInterval(timerId); // clear timer

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// const id = setTimeout(function log() {// recursion
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// let user = { name: Ivan };

//const arr = [user]; // we create after user is null
//let map = new Map();
// let map = new WeakMap(); // can not be used with primitive values like string, number, boolean, null, undefined
// map.set(user, 'data');

// user = null;

// console.log(user); // null
// console.log(user.name); // error
// console.log(user?.name); // undefined
//console.log(arr[0]); // { name: Ivan }

//console.log(map.keys()); // [user]

// console.log(map.has(user)); // false

// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = { name: 'Elena' };
// let alex = { name: 'Alex' };

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena)); // false
// console.log(cache.has(alex)); // true

// WeakSet add, has, delete

// let messages = [
//     {
//         text: 'Hello', from: 'John'
//     },
//     {
//         text: 'World', from: 'Alex'
//     },
//     {
//         text: '...', from: 'M'
//     }
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// console.log(readMessages.has(messages[0])); // true
// console.log(readMessages.has(messages[1])); // true

// messages.shift(); // remove first element from array
// messages.pop(); // remove last element from array
// messages.unshift(); // remove first element from array and add new one


//const now = new Date();// current date and time

// const now = new Date('2025-04-13');// // create date with string
// const now = new Date(2025, 4, 1, 20);// // create date with numbers
//const now = new Date(0);// 1970-01-01T00:00:00.000Z
//const now = new Date(-99999);// // 1969-12-31T23:59:59.999Z

// const now = new Date();

//console.log(now.getFullYear()); // get year
//console.log(now.getMonth()); // get month from 0 to 11 out put 3 for now April
//console.log(now.getDate()); // get date from 1 to 31 13 for now
//console.log(now.getHours()); // get hours from 0 to 23 output 20 for now
//console.log(now.getDay()); // get day from 0 to 6 output 0 for now Sunday

//console.log(now.getUTCHours());// get hours from 0 to 23 in UTC output 17 for now

// console.log(now.getTimezoneOffset()); // get timezone offset in minutes output -180 for now

// console.log(now.getTime()); // get time in milliseconds output 1681392000000 for now

// console.log(now.setHours(18));// set hours to 18 output 1681392000000 for now
// console.log(now.setHours(18, 40)); // set hours to 18 and minutes to 40 output 1681392000000 for now
// new Date.parse('2025-04-13');// // create date with string
// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date(); // end time
// alert(`Цикл отработал за ${end - start} миллисекунд`);

// console.log(now);


// Timer

// const deadLine = '2025-05-11';

// function getTimeRemaining(endTime) {
// const t = Date.parse(endTime) - Date.parse(new Date());
// const days = Math.floor(t / (1000 * 60 * 60 * 24));
// const hours = Math.floor((t / (1000 * 60 * 60) % 24));
// const minutes = Math.floor((t / 1000 / 60) % 60);
// const sec = Math.floor((t / 1000) % 60);

//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': sec
//     };
// }

// function setClock(selector, endTime) {
//     const timer = document.querySelector(selector),
//         days = timer.querySelector('#days'),
//         hours = timer.querySelector('#hours'),
//         minutes = timer.querySelector('#minutes'),
//         seconds = timer.querySelector('#seconds'),
//         timeInterval = setInterval(updateClock, 1000);

//     updateClock();

//     function updateClock() {
//         const t = getTimeRemaining(endTime);

//         days.innerHTML = (t.days < 10 ? `0${t.days}` : t.days);
//         //days.innerHTML = t.days;
//         hours.textContent = (t.hours < 10 ? `0${t.hours}` : t.hours);
//         //hours.innerHTML = (t.hours);
//         minutes.innerHTML = (t.minutes < 10 ? `0${t.minutes}` : t.minutes);
//         //minutes.textContent = (t.minutes);
//         seconds.innerHTML = (t.seconds);


//         if (t.total <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }

// setClock('.timer', deadLine);